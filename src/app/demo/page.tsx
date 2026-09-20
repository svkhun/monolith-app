"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  PlayCircle,
  Briefcase,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  Clock,
  LayoutGrid,
  List,
  Target,
  FileText,
  Sparkles,
  Info,
  RotateCcw,
} from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/Button";
import { TaskItem, ExamSubjectItem, QuickNoteItem, ViewMode, TaskStatus, Priority } from "@/types";
import { TaskKanban } from "@/components/work/TaskKanban";
import { TaskListView } from "@/components/work/TaskListView";
import { TaskFilters } from "@/components/work/TaskFilters";
import { TaskModal } from "@/components/work/TaskModal";
import { ExamCountdownCard } from "@/components/study/ExamCountdownCard";
import { SyllabusTracker } from "@/components/study/SyllabusTracker";
import { PomodoroTimer } from "@/components/study/PomodoroTimer";
import { QuickNotesBoard } from "@/components/study/QuickNotesBoard";
import { SubjectModal } from "@/components/study/SubjectModal";

// Rich Simulated Datasets for the Demo Sandbox
const INITIAL_DEMO_TASKS: TaskItem[] = [
  {
    id: "demo_task_01",
    userId: "demo-user-id",
    title: "Implement Distributed Consensus Protocol (Raft)",
    description: "Write state machine replication, leader election, and log compaction routines.",
    priority: "URGENT",
    status: "IN_PROGRESS",
    dueDate: new Date(Date.now() + 1000 * 60 * 60 * 24).toISOString(),
    tags: ["distributed-systems", "core", "golang"],
    orderIndex: 0,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "demo_task_02",
    userId: "demo-user-id",
    title: "Database Index Tuning & Query Optimization",
    description: "Add composite B-Tree indexes for user query predicates and evaluate EXPLAIN ANALYZE.",
    priority: "HIGH",
    status: "TODO",
    dueDate: new Date(Date.now() + 1000 * 60 * 60 * 48).toISOString(),
    tags: ["database", "postgres", "perf"],
    orderIndex: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "demo_task_03",
    userId: "demo-user-id",
    title: "Setup CI/CD Pipeline & Automated Smoke Tests",
    description: "Create GitHub Actions workflow with matrix testing and container image tagging.",
    priority: "MEDIUM",
    status: "DONE",
    dueDate: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
    tags: ["devops", "ci-cd"],
    orderIndex: 2,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "demo_task_04",
    userId: "demo-user-id",
    title: "Audit Security Tokens & CSRF Protection",
    description: "Validate SameSite cookies, JWT signature verification and rate limiter middlewares.",
    priority: "URGENT",
    status: "TODO",
    dueDate: new Date().toISOString(),
    tags: ["security", "auth"],
    orderIndex: 3,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

const INITIAL_DEMO_SUBJECTS: ExamSubjectItem[] = [
  {
    id: "demo_sub_cs301",
    userId: "demo-user-id",
    code: "CS301",
    name: "Advanced Operating Systems & Kernel Internals",
    examDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 3 + 1000 * 60 * 60 * 4).toISOString(),
    roomLocation: "ENG-B304",
    targetGrade: "A",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    chapters: [
      {
        id: "demo_ch_01",
        examSubjectId: "demo_sub_cs301",
        title: "Virtual Memory Management & Page Replacement Algorithms",
        isCompleted: true,
        estimatedHours: 2.5,
        orderIndex: 0,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: "demo_ch_02",
        examSubjectId: "demo_sub_cs301",
        title: "Process Scheduling, Context Switches & IPC Mechanisms",
        isCompleted: true,
        estimatedHours: 2.0,
        orderIndex: 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: "demo_ch_03",
        examSubjectId: "demo_sub_cs301",
        title: "File Systems, Inodes, Journaling & Crash Recovery",
        isCompleted: false,
        estimatedHours: 3.5,
        orderIndex: 2,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: "demo_ch_04",
        examSubjectId: "demo_sub_cs301",
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
        id: "demo_note_01",
        examSubjectId: "demo_sub_cs301",
        title: "Virtual Memory TLB Hit / Miss Formula",
        content: "EAT = Hit_Ratio * (TLB_access + Memory_access) + (1 - Hit_Ratio) * (TLB_access + 2 * Memory_access)",
        isPinned: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ],
  },
  {
    id: "demo_sub_math204",
    userId: "demo-user-id",
    code: "MATH204",
    name: "Linear Algebra & Numerical Matrix Computation",
    examDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7 + 1000 * 60 * 60 * 2).toISOString(),
    roomLocation: "MATH-H101",
    targetGrade: "A",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    chapters: [
      {
        id: "demo_ch_m01",
        examSubjectId: "demo_sub_math204",
        title: "Eigenvalues, Eigenvectors & Diagonalization",
        isCompleted: true,
        estimatedHours: 2.0,
        orderIndex: 0,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: "demo_ch_m02",
        examSubjectId: "demo_sub_math204",
        title: "Singular Value Decomposition (SVD) & Principal Component Analysis",
        isCompleted: false,
        estimatedHours: 4.0,
        orderIndex: 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: "demo_ch_m03",
        examSubjectId: "demo_sub_math204",
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
        id: "demo_note_02",
        examSubjectId: "demo_sub_math204",
        title: "Singular Value Decomposition (SVD)",
        content: "A = U * Sigma * V^T\n- U contains eigenvectors of A * A^T\n- V contains eigenvectors of A^T * A\n- Sigma contains singular values (sqrt of eigenvalues)",
        isPinned: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ],
  },
];

export default function DemoPage() {
  const [activeSandbox, setActiveSandbox] = useState<"WORK" | "STUDY">("WORK");

  // Work Sandbox State
  const [tasks, setTasks] = useState<TaskItem[]>(INITIAL_DEMO_TASKS);
  const [viewMode, setViewMode] = useState<ViewMode>("KANBAN");
  const [search, setSearch] = useState("");
  const [selectedPriority, setSelectedPriority] = useState<Priority | "ALL">("ALL");
  const [selectedTag, setSelectedTag] = useState<string | "ALL">("ALL");
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<TaskItem | null>(null);

  // Study Sandbox State
  const [subjects, setSubjects] = useState<ExamSubjectItem[]>(INITIAL_DEMO_SUBJECTS);
  const [selectedSubjectId, setSelectedSubjectId] = useState<string | null>(
    INITIAL_DEMO_SUBJECTS[0].id
  );
  const [isSubjectModalOpen, setIsSubjectModalOpen] = useState(false);

  // Work Handlers
  const handleStatusChange = (id: string, newStatus: TaskStatus) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, status: newStatus } : t))
    );
  };

  const handleDeleteTask = (id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const handleSaveTask = async (formData: any) => {
    if (editingTask) {
      setTasks((prev) =>
        prev.map((t) =>
          t.id === editingTask.id ? { ...t, ...formData } : t
        )
      );
    } else {
      const newTask: TaskItem = {
        id: `demo_task_${Date.now()}`,
        userId: "demo-user-id",
        title: formData.title,
        description: formData.description,
        priority: formData.priority,
        status: formData.status,
        dueDate: formData.dueDate,
        tags: formData.tags,
        orderIndex: tasks.length,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      setTasks((prev) => [newTask, ...prev]);
    }
  };

  // Study Handlers
  const handleToggleChapter = async (chapterId: string, isCompleted: boolean) => {
    setSubjects((prev) =>
      prev.map((s) => ({
        ...s,
        chapters: s.chapters?.map((c) =>
          c.id === chapterId ? { ...c, isCompleted } : c
        ),
      }))
    );
  };

  const handleAddChapter = async (subjectId: string, title: string, estimatedHours: number) => {
    setSubjects((prev) =>
      prev.map((s) =>
        s.id === subjectId
          ? {
              ...s,
              chapters: [
                ...(s.chapters || []),
                {
                  id: `demo_ch_${Date.now()}`,
                  examSubjectId: subjectId,
                  title,
                  isCompleted: false,
                  estimatedHours,
                  orderIndex: (s.chapters?.length || 0),
                  createdAt: new Date().toISOString(),
                  updatedAt: new Date().toISOString(),
                },
              ],
            }
          : s
      )
    );
  };

  const handleDeleteChapter = async (chapterId: string) => {
    setSubjects((prev) =>
      prev.map((s) => ({
        ...s,
        chapters: s.chapters?.filter((c) => c.id !== chapterId),
      }))
    );
  };

  const handleResetSandbox = () => {
    setTasks(INITIAL_DEMO_TASKS);
    setSubjects(INITIAL_DEMO_SUBJECTS);
    setSelectedSubjectId(INITIAL_DEMO_SUBJECTS[0].id);
  };

  const selectedSubject =
    subjects.find((s) => s.id === selectedSubjectId) || subjects[0] || null;

  const allNotes = subjects.flatMap((s) => s.notes || []);

  const allTags = Array.from(
    new Set(tasks.flatMap((t) => t.tags || []))
  );

  const filteredTasks = tasks.filter((t) => {
    const matchesSearch =
      search === "" ||
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      (t.description && t.description.toLowerCase().includes(search.toLowerCase()));
    const matchesPriority =
      selectedPriority === "ALL" || t.priority === selectedPriority;
    const matchesTag =
      selectedTag === "ALL" || (t.tags && t.tags.includes(selectedTag));
    return matchesSearch && matchesPriority && matchesTag;
  });

  return (
    <div className="space-y-8">
      {/* Top Banner */}
      <div className="border border-neutral-300 dark:border-[#262626] bg-white dark:bg-[#141414] p-6 sm:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 border border-neutral-300 dark:border-[#333333] bg-neutral-100 dark:bg-[#1f1f1f] px-2.5 py-1 font-mono text-xs font-bold uppercase tracking-widest text-neutral-700 dark:text-neutral-300">
              <PlayCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>INTERACTIVE TUTORIAL & SANDBOX</span>
            </div>
            <h1 className="font-mono text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-900 dark:text-white">
              TRY MONOLITH IN ACTION
            </h1>
            <p className="font-mono text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Experience the core features below with pre-loaded simulation data. Test Kanban movements, countdown timers, and syllabus checklist updates without affecting your personal workspace.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              variant="outline"
              size="md"
              onClick={handleResetSandbox}
              className="flex items-center gap-2"
              title="Reset sandbox to original demo data"
            >
              <RotateCcw className="w-4 h-4" />
              <span>RESET DEMO DATA</span>
            </Button>
            <Link
              href="/work"
              className={buttonVariants({
                variant: "primary",
                size: "md",
                className: "w-full flex items-center gap-2",
              })}
            >
              <span>GO TO MY WORKSPACE</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* 3-Step Guided Tutorial Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Step 1 */}
        <div className="border border-neutral-300 dark:border-[#262626] bg-white dark:bg-[#141414] p-5 space-y-3">
          <div className="flex items-center justify-between border-b border-neutral-200 dark:border-[#202020] pb-2">
            <span className="font-mono text-xs font-bold text-neutral-500 uppercase">
              STEP 01
            </span>
            <Briefcase className="w-4 h-4 text-neutral-900 dark:text-neutral-100" />
          </div>
          <h3 className="font-mono text-base font-bold text-neutral-900 dark:text-neutral-100">
            DISPATCH TASKS & DEADLINES
          </h3>
          <p className="font-mono text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Create tasks with priority levels (LOW to URGENT) and due dates. Switch effortlessly between multi-column Kanban and compact List views.
          </p>
        </div>

        {/* Step 2 */}
        <div className="border border-neutral-300 dark:border-[#262626] bg-white dark:bg-[#141414] p-5 space-y-3">
          <div className="flex items-center justify-between border-b border-neutral-200 dark:border-[#202020] pb-2">
            <span className="font-mono text-xs font-bold text-neutral-500 uppercase">
              STEP 02
            </span>
            <GraduationCap className="w-4 h-4 text-neutral-900 dark:text-neutral-100" />
          </div>
          <h3 className="font-mono text-base font-bold text-neutral-900 dark:text-neutral-100">
            AUDIT EXAM READINESS
          </h3>
          <p className="font-mono text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Register exam subjects. The system displays a live countdown meter and calculates dynamic % readiness as you check off syllabus chapters.
          </p>
        </div>

        {/* Step 3 */}
        <div className="border border-neutral-300 dark:border-[#262626] bg-white dark:bg-[#141414] p-5 space-y-3">
          <div className="flex items-center justify-between border-b border-neutral-200 dark:border-[#202020] pb-2">
            <span className="font-mono text-xs font-bold text-neutral-500 uppercase">
              STEP 03
            </span>
            <Clock className="w-4 h-4 text-neutral-900 dark:text-neutral-100" />
          </div>
          <h3 className="font-mono text-base font-bold text-neutral-900 dark:text-neutral-100">
            DEEP FOCUS POMODORO
          </h3>
          <p className="font-mono text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Bind your 25-minute study sessions to specific courses. Log hours directly to track total study time, and keep formula notes pinned nearby.
          </p>
        </div>
      </div>

      {/* Sandbox Mode Switcher */}
      <div className="flex items-center justify-between border-b border-neutral-300 dark:border-[#262626] pb-4">
        <div className="flex border border-neutral-300 dark:border-[#262626] bg-neutral-100 dark:bg-[#141414] p-1">
          <button
            onClick={() => setActiveSandbox("WORK")}
            className={`flex items-center gap-2 px-4 py-2 font-mono text-xs uppercase font-bold transition-all ${
              activeSandbox === "WORK"
                ? "bg-white text-neutral-900 shadow-sm dark:bg-[#222222] dark:text-white border border-neutral-300 dark:border-[#3a3a3a]"
                : "text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>PLAYGROUND: WORK MANAGEMENT</span>
          </button>
          <button
            onClick={() => setActiveSandbox("STUDY")}
            className={`flex items-center gap-2 px-4 py-2 font-mono text-xs uppercase font-bold transition-all ${
              activeSandbox === "STUDY"
                ? "bg-white text-neutral-900 shadow-sm dark:bg-[#222222] dark:text-white border border-neutral-300 dark:border-[#3a3a3a]"
                : "text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>PLAYGROUND: EXAM & STUDY HUB</span>
          </button>
        </div>

        <span className="hidden sm:inline font-mono text-xs text-neutral-500">
          SANDBOX MODE // CHANGES ARE LOCAL TO THIS PREVIEW
        </span>
      </div>

      {/* Sandbox Workspace Area */}
      {activeSandbox === "WORK" ? (
        <div className="space-y-6">
          <TaskFilters
            search={search}
            onSearchChange={setSearch}
            selectedPriority={selectedPriority}
            onPriorityChange={setSelectedPriority}
            selectedTag={selectedTag}
            onTagChange={setSelectedTag}
            allTags={allTags}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
            onOpenNewModal={() => {
              setEditingTask(null);
              setIsTaskModalOpen(true);
            }}
          />

          {viewMode === "KANBAN" ? (
            <TaskKanban
              tasks={filteredTasks}
              onEdit={(task) => {
                setEditingTask(task);
                setIsTaskModalOpen(true);
              }}
              onDelete={handleDeleteTask}
              onStatusChange={handleStatusChange}
              onAddNew={() => {
                setEditingTask(null);
                setIsTaskModalOpen(true);
              }}
            />
          ) : (
            <TaskListView
              tasks={filteredTasks}
              onEdit={(task) => {
                setEditingTask(task);
                setIsTaskModalOpen(true);
              }}
              onDelete={handleDeleteTask}
              onStatusChange={handleStatusChange}
            />
          )}

          <TaskModal
            isOpen={isTaskModalOpen}
            onClose={() => setIsTaskModalOpen(false)}
            onSubmit={handleSaveTask}
            task={editingTask}
          />
        </div>
      ) : (
        <div className="space-y-6">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-500">
                ACTIVE EXAM SCHEDULE // CHRONOLOGICAL ORDER
              </h2>
              <Button
                variant="primary"
                size="sm"
                onClick={() => setIsSubjectModalOpen(true)}
              >
                + ADD SUBJECT
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {subjects.map((subject) => (
                <ExamCountdownCard
                  key={subject.id}
                  subject={subject}
                  isSelected={selectedSubject?.id === subject.id}
                  onSelect={(sub) => setSelectedSubjectId(sub.id)}
                  onDelete={(id) => setSubjects((prev) => prev.filter((s) => s.id !== id))}
                  onAddChapter={(id) => setSelectedSubjectId(id)}
                />
              ))}
            </div>
          </div>

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

          <div>
            <QuickNotesBoard
              notes={allNotes}
              subjects={subjects}
              selectedSubjectId={selectedSubject?.id}
              onAddNote={async (formData) => {
                const newNote: QuickNoteItem = {
                  id: `demo_note_${Date.now()}`,
                  examSubjectId: formData.examSubjectId,
                  title: formData.title,
                  content: formData.content,
                  isPinned: formData.isPinned || false,
                  createdAt: new Date().toISOString(),
                  updatedAt: new Date().toISOString(),
                };
                setSubjects((prev) =>
                  prev.map((s) =>
                    s.id === formData.examSubjectId
                      ? { ...s, notes: [newNote, ...(s.notes || [])] }
                      : s
                  )
                );
              }}
              onTogglePin={async (id, isPinned) => {
                setSubjects((prev) =>
                  prev.map((s) => ({
                    ...s,
                    notes: s.notes?.map((n) => (n.id === id ? { ...n, isPinned } : n)),
                  }))
                );
              }}
              onDeleteNote={async (id) => {
                setSubjects((prev) =>
                  prev.map((s) => ({
                    ...s,
                    notes: s.notes?.filter((n) => n.id !== id),
                  }))
                );
              }}
            />
          </div>

          <SubjectModal
            isOpen={isSubjectModalOpen}
            onClose={() => setIsSubjectModalOpen(false)}
            onSubmit={async (formData) => {
              const newSub: ExamSubjectItem = {
                id: `demo_sub_${Date.now()}`,
                userId: "demo-user-id",
                code: formData.code,
                name: formData.name,
                examDate: formData.examDate,
                roomLocation: formData.roomLocation,
                targetGrade: formData.targetGrade,
                chapters: [],
                notes: [],
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
              };
              setSubjects((prev) => [...prev, newSub]);
              setSelectedSubjectId(newSub.id);
            }}
          />
        </div>
      )}
    </div>
  );
}
