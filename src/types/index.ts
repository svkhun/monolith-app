export type Priority = "LOW" | "MEDIUM" | "HIGH" | "URGENT";

export type TaskStatus = "TODO" | "IN_PROGRESS" | "DONE";

export interface TaskItem {
  id: string;
  userId: string;
  title: string;
  description?: string | null;
  priority: Priority;
  status: TaskStatus;
  dueDate?: string | null;
  tags: string[];
  orderIndex: number;
  createdAt: string;
  updatedAt: string;
}

export interface StudyChapterItem {
  id: string;
  examSubjectId: string;
  title: string;
  isCompleted: boolean;
  estimatedHours: number;
  orderIndex: number;
  createdAt: string;
  updatedAt: string;
}

export interface QuickNoteItem {
  id: string;
  examSubjectId?: string | null;
  title: string;
  content: string;
  isPinned: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ExamSubjectItem {
  id: string;
  userId: string;
  code: string;
  name: string;
  examDate: string;
  roomLocation?: string | null;
  targetGrade?: string | null;
  createdAt: string;
  updatedAt: string;
  chapters?: StudyChapterItem[];
  notes?: QuickNoteItem[];
  completionPercentage?: number;
}

export interface PomodoroSessionItem {
  id: string;
  userId: string;
  examSubjectId?: string | null;
  examSubject?: {
    code: string;
    name: string;
  } | null;
  durationMinutes: number;
  completedAt: string;
}

export type ViewMode = "KANBAN" | "LIST";
export type AppMode = "WORK" | "STUDY";
export type ThemeMode = "dark" | "light";
