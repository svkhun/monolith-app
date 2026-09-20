"use server";

import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { TaskSchema } from "@/lib/validations";
import { Priority, TaskStatus } from "@/types";

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

export async function getTasks() {
  try {
    const userId = await withTimeout(getUserId(), 1000, "demo-user-id");
    const tasks = await withTimeout(
      db.task.findMany({
        where: { userId },
        orderBy: [{ orderIndex: "asc" }, { createdAt: "desc" }],
      }),
      1500,
      []
    );
    return {
      success: true,
      tasks: tasks.map((t) => ({
        ...t,
        dueDate: t.dueDate ? t.dueDate.toISOString() : null,
        createdAt: t.createdAt.toISOString(),
        updatedAt: t.updatedAt.toISOString(),
      })),
    };
  } catch (error: any) {
    console.error("Failed to fetch tasks:", error);
    return { success: false, error: error.message, tasks: [] };
  }
}

export async function createTask(formData: {
  title: string;
  description?: string | null;
  priority?: Priority;
  status?: TaskStatus;
  dueDate?: string | null;
  tags?: string[];
}) {
  const userId = await getUserId();
  try {
    const validated = TaskSchema.parse(formData);

    const highestOrder = await db.task.findFirst({
      where: { userId, status: validated.status as any },
      orderBy: { orderIndex: "desc" },
      select: { orderIndex: true },
    });

    const nextOrder = (highestOrder?.orderIndex ?? -1) + 1;

    const task = await db.task.create({
      data: {
        userId,
        title: validated.title,
        description: validated.description || null,
        priority: validated.priority as any,
        status: validated.status as any,
        dueDate: validated.dueDate ? new Date(validated.dueDate) : null,
        tags: validated.tags || [],
        orderIndex: nextOrder,
      },
    });

    revalidatePath("/work");
    revalidatePath("/");
    return { success: true, task };
  } catch (error: any) {
    console.error("Create task error:", error);
    return { success: false, error: error.message || "Failed to create task" };
  }
}

export async function updateTask(
  id: string,
  formData: {
    title: string;
    description?: string | null;
    priority?: Priority;
    status?: TaskStatus;
    dueDate?: string | null;
    tags?: string[];
  }
) {
  const userId = await getUserId();
  try {
    const validated = TaskSchema.parse(formData);

    const task = await db.task.update({
      where: { id, userId },
      data: {
        title: validated.title,
        description: validated.description || null,
        priority: validated.priority as any,
        status: validated.status as any,
        dueDate: validated.dueDate ? new Date(validated.dueDate) : null,
        tags: validated.tags || [],
      },
    });

    revalidatePath("/work");
    revalidatePath("/");
    return { success: true, task };
  } catch (error: any) {
    console.error("Update task error:", error);
    return { success: false, error: error.message || "Failed to update task" };
  }
}

export async function updateTaskStatus(id: string, status: TaskStatus) {
  const userId = await getUserId();
  try {
    const task = await db.task.update({
      where: { id, userId },
      data: { status: status as any },
    });

    revalidatePath("/work");
    revalidatePath("/");
    return { success: true, task };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function deleteTask(id: string) {
  const userId = await getUserId();
  try {
    await db.task.delete({
      where: { id, userId },
    });

    revalidatePath("/work");
    revalidatePath("/");
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}
