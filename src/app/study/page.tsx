"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { ExamSubjectItem, QuickNoteItem } from "@/types";
import { ExamCountdownCard } from "@/components/study/ExamCountdownCard";
import { SyllabusTracker } from "@/components/study/SyllabusTracker";
import { PomodoroTimer } from "@/components/study/PomodoroTimer";
import { QuickNotesBoard } from "@/components/study/QuickNotesBoard";
import { SubjectModal } from "@/components/study/SubjectModal";
import {
  getExamSubjects,
  createExamSubject,
  deleteExamSubject,
  createStudyChapter,
  toggleChapterCompletion,
  deleteStudyChapter,
} from "@/lib/actions/study-actions";
import {
  createQuickNote,
  toggleNotePin,
  deleteQuickNote,
} from "@/lib/actions/note-actions";
import { GraduationCap, Plus, PlayCircle, BookOpen, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function StudyPage() {
  const [subjects, setSubjects] = useState<ExamSubjectItem[]>([]);
  const [selectedSubjectId, setSelectedSubjectId] = useState<string | null>(null);
  const [isSubjectModalOpen, setIsSubjectModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadSubjects();
  }, []);

  const loadSubjects = async () => {
    setLoading(true);
    try {
      const res = await getExamSubjects();
      if (res.success && res.subjects) {
        setSubjects(res.subjects as ExamSubjectItem[]);
        if (res.subjects.length > 0 && !selectedSubjectId) {
          setSelectedSubjectId(res.subjects[0].id);
        }
      }
    } catch {
      // Clean workspace
    } finally {
      setLoading(false);
    }
  };

  const sortedSubjects = useMemo(() => {
    return [...subjects].sort(
      (a, b) => new Date(a.examDate).getTime() - new Date(b.examDate).getTime()
    );
  }, [subjects]);

  const selectedSubject = useMemo(() => {
    return (
      subjects.find((s) => s.id === selectedSubjectId) ||
      sortedSubjects[0] ||
      null
    );
  }, [subjects, selectedSubjectId, sortedSubjects]);

  const allNotes = useMemo(() => {
    const list: QuickNoteItem[] = [];
    subjects.forEach((s) => {
      if (s.notes) list.push(...s.notes);
    });
    return list;
  }, [subjects]);

  const handleCreateSubject = async (formData: {
    code: string;
    name: string;
    examDate: string;
    roomLocation?: string | null;
    targetGrade?: string | null;
  }) => {
    const res = await createExamSubject(formData);
    if (res.success && res.subject) {
      const newSubject: ExamSubjectItem = {
        id: res.subject.id,
        userId: res.subject.userId,
        code: res.subject.code,
        name: res.subject.name,
        examDate: res.subject.examDate.toISOString(),
        roomLocation: res.subject.roomLocation,
        targetGrade: res.subject.targetGrade,
        chapters: [],
        notes: [],
        createdAt: res.subject.createdAt.toISOString(),
        updatedAt: res.subject.updatedAt.toISOString(),
      };
      setSubjects((prev) => [...prev, newSubject]);
      setSelectedSubjectId(newSubject.id);
    }
  };

  const handleDeleteSubject = async (id: string) => {
    setSubjects((prev) => prev.filter((s) => s.id !== id));
    if (selectedSubjectId === id) {
      setSelectedSubjectId(subjects.find((s) => s.id !== id)?.id || null);
    }
    await deleteExamSubject(id);
  };

  const handleToggleChapter = async (chapterId: string, isCompleted: boolean) => {
    setSubjects((prev) =>
      prev.map((s) => ({
        ...s,
        chapters: s.chapters?.map((c) =>
          c.id === chapterId ? { ...c, isCompleted } : c
        ),
      }))
    );
    await toggleChapterCompletion(chapterId, isCompleted);
  };

  const handleAddChapter = async (
    subjectId: string,
    title: string,
    estimatedHours: number
  ) => {
    const res = await createStudyChapter({
      examSubjectId: subjectId,
      title,
      estimatedHours,
    });
    if (res.success && res.chapter) {
      setSubjects((prev) =>
        prev.map((s) =>
          s.id === subjectId
            ? {
                ...s,
                chapters: [
                  ...(s.chapters || []),
                  {
                    id: res.chapter.id,
                    examSubjectId: res.chapter.examSubjectId,
                    title: res.chapter.title,
                    isCompleted: res.chapter.isCompleted,
                    estimatedHours: res.chapter.estimatedHours,
                    orderIndex: res.chapter.orderIndex,
                    createdAt: res.chapter.createdAt.toISOString(),
                    updatedAt: res.chapter.updatedAt.toISOString(),
                  },
                ],
              }
            : s
        )
      );
    }
  };

  const handleDeleteChapter = async (chapterId: string) => {
    setSubjects((prev) =>
      prev.map((s) => ({
        ...s,
        chapters: s.chapters?.filter((c) => c.id !== chapterId),
      }))
    );
    await deleteStudyChapter(chapterId);
  };

  const handleAddNote = async (formData: {
    examSubjectId?: string | null;
    title: string;
    content: string;
    isPinned?: boolean;
  }) => {
    const res = await createQuickNote(formData);
    if (res.success && res.note) {
      const newNote: QuickNoteItem = {
        id: res.note.id,
        examSubjectId: res.note.examSubjectId,
        title: res.note.title,
        content: res.note.content,
        isPinned: res.note.isPinned,
        createdAt: res.note.createdAt.toISOString(),
        updatedAt: res.note.updatedAt.toISOString(),
      };
      setSubjects((prev) =>
        prev.map((s) =>
          s.id === formData.examSubjectId
            ? { ...s, notes: [newNote, ...(s.notes || [])] }
            : s
        )
      );
    }
  };

  const handleTogglePinNote = async (id: string, isPinned: boolean) => {
    setSubjects((prev) =>
      prev.map((s) => ({
        ...s,
        notes: s.notes?.map((n) => (n.id === id ? { ...n, isPinned } : n)),
      }))
    );
    await toggleNotePin(id, isPinned);
  };

  const handleDeleteNote = async (id: string) => {
    setSubjects((prev) =>
      prev.map((s) => ({
        ...s,
        notes: s.notes?.filter((n) => n.id !== id),
      }))
    );
    await deleteQuickNote(id);
  };

  return (
    <div className="space-y-6">
      {/* Header Strip */}
      <div className="border border-neutral-300 dark:border-[#262626] bg-white dark:bg-[#141414] p-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <GraduationCap className="w-5 h-5 text-neutral-900 dark:text-neutral-100" />
              <h1 className="font-mono text-lg font-bold uppercase tracking-widest text-neutral-900 dark:text-neutral-100">
                UNIVERSITY EXAM PREPARATION HUB
              </h1>
            </div>
            <p className="font-mono text-sm text-neutral-500 mt-1">
              Chronological countdowns, syllabus checklists, focus pomodoro logging, and cheat-sheet formulas.
            </p>
          </div>

          <Button
            variant="primary"
            size="md"
            onClick={() => setIsSubjectModalOpen(true)}
            className="flex items-center space-x-2"
          >
            <Plus className="w-4 h-4" />
            <span>REGISTER EXAM</span>
          </Button>
        </div>
      </div>

      {subjects.length === 0 && !loading ? (
        /* Clean Inviting Empty State */
        <div className="border border-neutral-300 dark:border-[#262626] bg-white dark:bg-[#141414] p-12 text-center max-w-2xl mx-auto space-y-6">
          <div className="inline-flex p-4 border border-neutral-300 dark:border-[#333333] bg-neutral-50 dark:bg-[#181818]">
            <GraduationCap className="w-8 h-8 text-neutral-800 dark:text-neutral-200" />
          </div>
          <div className="space-y-2">
            <h2 className="font-mono text-xl font-bold uppercase tracking-wide text-neutral-900 dark:text-white">
              NO SCHEDULED EXAMS
            </h2>
            <p className="font-mono text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-md mx-auto">
              You haven't scheduled any course examinations yet. Register your upcoming subjects or view the interactive tutorial sandbox.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
            <Button
              variant="primary"
              size="lg"
              onClick={() => setIsSubjectModalOpen(true)}
              className="flex items-center justify-center gap-2"
            >
              <Plus className="w-4 h-4" />
              <span>REGISTER FIRST EXAM</span>
            </Button>
            <Link href="/demo">
              <Button
                variant="outline"
                size="lg"
                className="w-full flex items-center justify-center gap-2"
              >
                <PlayCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>EXPLORE DEMO & TUTORIAL</span>
              </Button>
            </Link>
          </div>
        </div>
      ) : (
        /* Active Study Hub Views */
        <div className="space-y-6">
          {/* Exam Countdown Cards */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-500">
                ACTIVE EXAM SCHEDULE // CHRONOLOGICAL ORDER
              </h2>
              <span className="font-mono text-xs text-neutral-500">
                {sortedSubjects.length} REGISTERED COURSES
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {sortedSubjects.map((subject) => (
                <ExamCountdownCard
                  key={subject.id}
                  subject={subject}
                  isSelected={selectedSubject?.id === subject.id}
                  onSelect={(sub) => setSelectedSubjectId(sub.id)}
                  onDelete={handleDeleteSubject}
                  onAddChapter={(subId) => setSelectedSubjectId(subId)}
                />
              ))}
            </div>
          </div>

          {/* Syllabus Tracker & Pomodoro Focus Timer */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7">
              <SyllabusTracker
                subject={selectedSubject}
                onToggleChapter={handleToggleChapter}
                onAddChapter={handleAddChapter}
                onDeleteChapter={handleDeleteChapter}
              />
            </div>
            <div className="lg:col-span-5">
              <PomodoroTimer
                subjects={subjects}
                selectedSubjectId={selectedSubject?.id}
                onSubjectChange={(id) => setSelectedSubjectId(id)}
              />
            </div>
          </div>

          {/* Quick Notes / Formulas */}
          <div>
            <QuickNotesBoard
              notes={allNotes}
              subjects={subjects}
              selectedSubjectId={selectedSubject?.id}
              onAddNote={handleAddNote}
              onTogglePin={handleTogglePinNote}
              onDeleteNote={handleDeleteNote}
            />
          </div>
        </div>
      )}

      {/* Subject Registration Modal */}
      <SubjectModal
        isOpen={isSubjectModalOpen}
        onClose={() => setIsSubjectModalOpen(false)}
        onSubmit={handleCreateSubject}
      />
    </div>
  );
}
