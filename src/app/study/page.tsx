"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { ExamSubjectItem, QuickNoteItem } from "@/types";
import { ExamCountdownCard } from "@/components/study/ExamCountdownCard";
import { SyllabusTracker } from "@/components/study/SyllabusTracker";
import { PomodoroTimer } from "@/components/study/PomodoroTimer";
import { QuickNotesBoard } from "@/components/study/QuickNotesBoard";
import { SubjectModal } from "@/components/study/SubjectModal";
import { NotificationBanner } from "@/components/layout/NotificationBanner";
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
import { useLanguage } from "@/components/layout/LanguageProvider";

export default function StudyPage() {
  const { t } = useLanguage();
  const [subjects, setSubjects] = useState<ExamSubjectItem[]>([]);
  const [selectedSubjectId, setSelectedSubjectId] = useState<string | null>(null);
  const [isSubjectModalOpen, setIsSubjectModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Instantly populate from local cache if available (0ms load!)
    try {
      const cached = localStorage.getItem("monolith_cached_subjects");
      if (cached) {
        const parsed = JSON.parse(cached);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setSubjects(parsed);
          setSelectedSubjectId(parsed[0].id);
          setLoading(false);
        }
      }
    } catch {
      // Ignore parse error
    }

    // 2. Fetch fresh data in background
    loadSubjects();
  }, []);

  const loadSubjects = async () => {
    try {
      const res = await getExamSubjects();
      if (res.success && res.subjects) {
        setSubjects(res.subjects as ExamSubjectItem[]);
        if (res.subjects.length > 0 && !selectedSubjectId) {
          setSelectedSubjectId(res.subjects[0].id);
        }
        try {
          localStorage.setItem("monolith_cached_subjects", JSON.stringify(res.subjects));
        } catch {
          // Ignore quota error
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
    <div className="space-y-6 animate-arch-in">
      {/* Header Strip */}
      <div className="border border-[#DDD4C5] dark:border-[#3B332B] bg-[#F3EDE4] dark:bg-[#201C18] p-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <GraduationCap className="w-5 h-5 text-[#BD682C]" />
              <h1 className="font-mono text-lg font-bold uppercase tracking-widest text-[#26201A] dark:text-[#EFE8DC]">
                {t("study_title")}
              </h1>
            </div>
            <p className="font-mono text-sm text-[#786C60] dark:text-[#9C9082] mt-1">
              {t("study_subtitle")}
            </p>
          </div>

          <Button
            variant="primary"
            size="md"
            onClick={() => setIsSubjectModalOpen(true)}
            className="flex items-center space-x-2"
          >
            <Plus className="w-4 h-4" />
            <span>{t("study_btn_register")}</span>
          </Button>
        </div>
      </div>

      {/* Slim, Non-Intrusive Notification Banner if no exams */}
      {subjects.length === 0 && !loading && (
        <NotificationBanner
          storageKey="study_empty_banner"
          message="Notice: No upcoming exams registered yet. Start by scheduling your first course."
          actionText="+ REGISTER EXAM"
          onActionClick={() => setIsSubjectModalOpen(true)}
          secondaryText="EXPLORE DEMO"
          secondaryHref="/demo"
        />
      )}

      {/* 1. Exam Countdown Schedule Cards */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-500">
            ACTIVE EXAM SCHEDULE // CHRONOLOGICAL ORDER
          </h2>
          <span className="font-mono text-xs text-neutral-500">
            {sortedSubjects.length} REGISTERED COURSES
          </span>
        </div>

        {sortedSubjects.length === 0 ? (
          <div className="border border-dashed border-neutral-300 dark:border-[#262626] p-6 text-center bg-neutral-50/50 dark:bg-[#121212]/50">
            <p className="font-mono text-xs text-neutral-500 uppercase tracking-wider">
              NO EXAMS SCHEDULED YET. CLICK "+ REGISTER EXAM" TO START YOUR FIRST COUNTDOWN.
            </p>
          </div>
        ) : (
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
        )}
      </div>

      {/* 2. Syllabus Tracker & Pomodoro Focus Timer (Always Accessible) */}
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

      {/* 3. Quick Notes / Formulas (Always Accessible) */}
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

      {/* Subject Registration Modal */}
      <SubjectModal
        isOpen={isSubjectModalOpen}
        onClose={() => setIsSubjectModalOpen(false)}
        onSubmit={handleCreateSubject}
      />
    </div>
  );
}
