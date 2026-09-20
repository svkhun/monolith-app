import { z } from "zod";

export const TaskSchema = z.object({
  title: z.string().min(1, "Title is required").max(120),
  description: z.string().optional().nullable(),
  priority: z.enum(["LOW", "MEDIUM", "HIGH", "URGENT"]).default("MEDIUM"),
  status: z.enum(["TODO", "IN_PROGRESS", "DONE"]).default("TODO"),
  dueDate: z.string().optional().nullable(),
  tags: z.array(z.string()).default([]),
  orderIndex: z.number().int().default(0),
});

export const ExamSubjectSchema = z.object({
  code: z.string().min(1, "Course code is required").max(20),
  name: z.string().min(1, "Subject name is required").max(100),
  examDate: z.string().min(1, "Exam date & time is required"),
  roomLocation: z.string().optional().nullable(),
  targetGrade: z.string().optional().nullable(),
});

export const StudyChapterSchema = z.object({
  examSubjectId: z.string().min(1, "Subject ID is required"),
  title: z.string().min(1, "Chapter title is required").max(120),
  isCompleted: z.boolean().default(false),
  estimatedHours: z.number().positive().default(1.0),
  orderIndex: z.number().int().default(0),
});

export const QuickNoteSchema = z.object({
  examSubjectId: z.string().optional().nullable(),
  title: z.string().min(1, "Note title is required").max(120),
  content: z.string().min(1, "Content cannot be empty"),
  isPinned: z.boolean().default(false),
});

export const PomodoroSessionSchema = z.object({
  examSubjectId: z.string().optional().nullable(),
  durationMinutes: z.number().int().positive().default(25),
});

export const UserRegisterSchema = z.object({
  name: z.string().min(1, "Name is required").max(60),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const UserLoginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});
