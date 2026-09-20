"use server";

import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { ExamSubjectSchema, StudyChapterSchema } from "@/lib/validations";

async function getUserId(): Promise<string> {
  const session = await getServerSession(authOptions);
  return (session?.user as any)?.id || "demo-user-id";
}

async function withTimeout<T>(promise: Promise<T>, ms: number, fallback: T): Promise<T> {
  return Promise.race([
    promise,
    new Promise<T>((resolve) => setTimeout(() => resolve(fallback), ms)),
  ]);
}

export async function getExamSubjects() {
  try {
    const userId = await withTimeout(getUserId(), 1000, "demo-user-id");
    const subjects = await withTimeout(
      db.examSubject.findMany({
        where: { userId },
        include: {
          chapters: {
            orderBy: { orderIndex: "asc" },
          },
          notes: {
            orderBy: [{ isPinned: "desc" }, { updatedAt: "desc" }],
          },
        },
        orderBy: { examDate: "asc" },
      }),
      1500,
      []
    );

    const enriched = subjects.map((sub) => {
      const totalChapters = sub.chapters.length;
      const completedChapters = sub.chapters.filter((c) => c.isCompleted).length;
      const completionPercentage =
        totalChapters > 0 ? Math.round((completedChapters / totalChapters) * 100) : 0;

      return {
        ...sub,
        examDate: sub.examDate.toISOString(),
        createdAt: sub.createdAt.toISOString(),
        updatedAt: sub.updatedAt.toISOString(),
        completionPercentage,
        chapters: sub.chapters.map((c) => ({
          ...c,
          createdAt: c.createdAt.toISOString(),
          updatedAt: c.updatedAt.toISOString(),
        })),
        notes: sub.notes.map((n) => ({
          ...n,
          createdAt: n.createdAt.toISOString(),
          updatedAt: n.updatedAt.toISOString(),
        })),
      };
    });

    return { success: true, subjects: enriched };
  } catch (error: any) {
    console.error("Failed to fetch exam subjects:", error);
    return { success: false, error: error.message, subjects: [] };
  }
}

export async function createExamSubject(formData: {
  code: string;
  name: string;
  examDate: string;
  roomLocation?: string | null;
  targetGrade?: string | null;
}) {
  const userId = await getUserId();
  try {
    const validated = ExamSubjectSchema.parse(formData);

    const subject = await db.examSubject.create({
      data: {
        userId,
        code: validated.code.toUpperCase(),
        name: validated.name,
        examDate: new Date(validated.examDate),
        roomLocation: validated.roomLocation || null,
        targetGrade: validated.targetGrade || null,
      },
    });

    revalidatePath("/study");
    revalidatePath("/");
    return { success: true, subject };
  } catch (error: any) {
    console.error("Create exam subject error:", error);
    return { success: false, error: error.message || "Failed to create subject" };
  }
}

export async function deleteExamSubject(id: string) {
  const userId = await getUserId();
  try {
    await db.examSubject.delete({
      where: { id, userId },
    });

    revalidatePath("/study");
    revalidatePath("/");
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function createStudyChapter(formData: {
  examSubjectId: string;
  title: string;
  estimatedHours?: number;
}) {
  try {
    const validated = StudyChapterSchema.parse(formData);

    const highest = await db.studyChapter.findFirst({
      where: { examSubjectId: validated.examSubjectId },
      orderBy: { orderIndex: "desc" },
      select: { orderIndex: true },
    });

    const nextOrder = (highest?.orderIndex ?? -1) + 1;

    const chapter = await db.studyChapter.create({
      data: {
        examSubjectId: validated.examSubjectId,
        title: validated.title,
        estimatedHours: validated.estimatedHours || 1.0,
        orderIndex: nextOrder,
      },
    });

    revalidatePath("/study");
    return { success: true, chapter };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function toggleChapterCompletion(id: string, isCompleted: boolean) {
  try {
    const chapter = await db.studyChapter.update({
      where: { id },
      data: { isCompleted },
    });

    revalidatePath("/study");
    return { success: true, chapter };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function deleteStudyChapter(id: string) {
  try {
    await db.studyChapter.delete({
      where: { id },
    });

    revalidatePath("/study");
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}
