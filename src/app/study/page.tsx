"use client";

import React, { useState, useEffect, useMemo } from "react";
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
import { GraduationCap, Plus, BookOpen, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/Button";

// Initial demo dataset if database has not yet been seeded
const INITIAL_DEMO_SUBJECTS: ExamSubjectItem[] = [
  {
    id: "sub_cs301",
    userId: "demo-user-id",
    code: "CS301",
    name: "Advanced Operating Systems & Kernel Internals",
    examDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 3 + 1000 * 60 * 60 * 4).toISOString(), // 3 days 4 hrs
    roomLocation: "ENG-B304",
    targetGrade: "A",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    chapters: [
      {
        id: "ch_01",
        examSubjectId: "sub_cs301",
        title: "Virtual Memory Management & Page Replacement Algorithms",
        isCompleted: true,
        estimatedHours: 2.5,
        orderIndex: 0,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: "ch_02",
        examSubjectId: "sub_cs301",
        title: "Process Scheduling, Context Switches & IPC Mechanisms",
        isCompleted: true,
        estimatedHours: 2.0,
        orderIndex: 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: "ch_03",
        examSubjectId: "sub_cs301",
        title: "File Systems, Inodes, Journaling & Crash Recovery",
        isCompleted: false,
        estimatedHours: 3.5,
        orderIndex: 2,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: "ch_04",
        examSubjectId: "sub_cs301",
        title: "Device Drivers, Interrupt Handling & DMA Channels",
        isCompleted: false,
        estimatedHours: 3.0,
        orderIndex: 3,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ],
    notes: [
      {
        id: "note_01",
        examSubjectId: "sub_cs301",
        title: "Virtual Memory TLB Hit / Miss Formula",
        content: "EAT = Hit_Ratio * (TLB_access + Memory_access) + (1 - Hit_Ratio) * (TLB_access + 2 * Memory_access)",
        isPinned: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ],
  },
  {
    id: "sub_math204",
    userId: "demo-user-id",
    code: "MATH204",
    name: "Linear Algebra & Numerical Matrix Computation",
    examDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7 + 1000 * 60 * 60 * 2).toISOString(), // 7 days 2 hrs
    roomLocation: "MATH-H101",
    targetGrade: "A",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    chapters: [
      {
        id: "ch_m01",
        examSubjectId: "sub_math204",
        title: "Eigenvalues, Eigenvectors & Diagonalization",
        isCompleted: true,
        estimatedHours: 2.0,
        orderIndex: 0,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: "ch_m02",
        examSubjectId: "sub_math204",
        title: "Singular Value Decomposition (SVD) & Principal Component Analysis",
        isCompleted: false,
        estimatedHours: 4.0,
        orderIndex: 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: "ch_m03",
        examSubjectId: "sub_math204",
        title: "Gram-Schmidt Orthogonalization & QR Decomposition",
        isCompleted: false,
        estimatedHours: 2.5,
        orderIndex: 2,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ],
    notes: [
      {
        id: "note_02",
        examSubjectId: "sub_math204",
        title: "Singular Value Decomposition (SVD)",
        content: "A = U * Sigma * V^T\n- U contains eigenvectors of A * A^T\n- V contains eigenvectors of A^T * A\n- Sigma contains singular values (sqrt of eigenvalues)",
        isPinned: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ],
  },
  {
    id: "sub_cs421",
    userId: "demo-user-id",
    code: "CS421",
    name: "Compiler Design & Code Generation",
    examDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 12).toISOString(), // 12 days
    roomLocation: "TECH-205",
    targetGrade: "A",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    chapters: [
      {
        id: "ch_c01",
        examSubjectId: "sub_cs421",
        title: "Lexical Analysis & DFA/NFA Construction",
        isCompleted: true,
        estimatedHours: 2.0,
        orderIndex: 0,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: "ch_c02",
        examSubjectId: "sub_cs421",
        title: "LR(1) / LALR Parsing Tables & Shift-Reduce Conflicts",
        isCompleted: false,
        estimatedHours: 4.0,
        orderIndex: 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ],
    notes: [],
  },
];

export default function StudyPage() {
  const [subjects, setSubjects] = useState<ExamSubjectItem[]>(INITIAL_DEMO_SUBJECTS);
  const [selectedSubjectId, setSelectedSubjectId] = useState<string | null>(
    INITIAL_DEMO_SUBJECTS[0].id
  );
  const [isSubjectModalOpen, setIsSubjectModalOpen] = useState(false);

  useEffect(() => {
    loadSubjects();
  }, []);

  const loadSubjects = async () => {
    try {
      const res = await getExamSubjects();
      if (res.success && res.subjects && res.subjects.length > 0) {
        setSubjects(res.subjects as ExamSubjectItem[]);
        if (!selectedSubjectId) {
          setSelectedSubjectId(res.subjects[0].id);
        }
      }
    } catch {
      console.warn("Using local study dataset");
    }
  };

  // Sort subjects chronologically by exam date
  const sortedSubjects = useMemo(() => {
    return [...subjects].sort(
      (a, b) => new Date(a.examDate).getTime() - new Date(b.examDate).getTime()
    );
  }, [subjects]);

  const selectedSubject = useMemo(() => {
    return subjects.find((s) => s.id === selectedSubjectId) || sortedSubjects[0] || null;
  }, [subjects, selectedSubjectId, sortedSubjects]);

  // Aggregate notes from all subjects
  const allNotes = useMemo(() => {
    const list: QuickNoteItem[] = [];
    subjects.forEach((s) => {
      if (s.notes) list.push(...s.notes);
    });
    return list;
  }, [subjects]);

  // Subject Handlers
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

  // Chapter Handlers
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

  // Notes Handlers
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
      {/* Header & Controls */}
      <div className="border border-neutral-300 dark:border-[#262626] bg-white dark:bg-[#141414] p-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <GraduationCap className="w-4 h-4 text-neutral-900 dark:text-neutral-100" />
              <h1 className="font-mono text-base font-bold uppercase tracking-widest text-neutral-900 dark:text-neutral-100">
                UNIVERSITY EXAMINATION & STUDY READINESS HUB
              </h1>
            </div>
            <p className="font-mono text-xs text-neutral-500 mt-1">
              Real-time chronometric countdowns, granular syllabus tracking, deep work Pomodoro logs, and cheat-sheets.
            </p>
          </div>

          <Button
            variant="primary"
            onClick={() => setIsSubjectModalOpen(true)}
            className="flex items-center space-x-1.5"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>REGISTER EXAM</span>
          </Button>
        </div>
      </div>

      {/* 1. Exam Countdown Dashboard Cards Grid */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-500">
            ACTIVE EXAM SCHEDULE // CHRONOLOGICAL ORDER
          </h2>
          <span className="font-mono text-[11px] text-neutral-500">
            {sortedSubjects.length} REGISTERED COURSES
          </span>
        </div>

        {sortedSubjects.length === 0 ? (
          <div className="border border-neutral-300 dark:border-[#262626] p-10 text-center bg-white dark:bg-[#141414]">
            <p className="font-mono text-xs text-neutral-500 uppercase tracking-wider">
              NO EXAMS SCHEDULED. CLICK REGISTER EXAM TO INITIALIZE.
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
                onAddChapter={(subId) => {
                  setSelectedSubjectId(subId);
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* 2. Middle Row: Syllabus Tracker + Pomodoro Focus Timer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left 7 cols: Syllabus Tracker */}
        <div className="lg:col-span-7">
          <SyllabusTracker
            subject={selectedSubject}
            onToggleChapter={handleToggleChapter}
            onAddChapter={handleAddChapter}
            onDeleteChapter={handleDeleteChapter}
          />
        </div>

        {/* Right 5 cols: Pomodoro Focus Timer */}
        <div className="lg:col-span-5">
          <PomodoroTimer
            subjects={subjects}
            selectedSubjectId={selectedSubject?.id}
            onSubjectChange={(id) => setSelectedSubjectId(id)}
          />
        </div>
      </div>

      {/* 3. Bottom Row: Exam Cheat-Sheet & Quick Formulas */}
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
