"use server";

import { revalidatePath } from "next/cache";
import { db } from "@/lib/db";
import { QuickNoteSchema } from "@/lib/validations";

export async function createQuickNote(formData: {
  examSubjectId?: string | null;
  title: string;
  content: string;
  isPinned?: boolean;
}) {
  try {
    const validated = QuickNoteSchema.parse(formData);

    const note = await db.quickNote.create({
      data: {
        examSubjectId: validated.examSubjectId || null,
        title: validated.title,
        content: validated.content,
        isPinned: validated.isPinned || false,
      },
    });

    revalidatePath("/study");
    return { success: true, note };
  } catch (error: any) {
    console.error("Create quick note error:", error);
    return { success: false, error: error.message || "Failed to create note" };
  }
}

export async function toggleNotePin(id: string, isPinned: boolean) {
  try {
    const note = await db.quickNote.update({
      where: { id },
      data: { isPinned },
    });

    revalidatePath("/study");
    return { success: true, note };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function deleteQuickNote(id: string) {
  try {
    await db.quickNote.delete({
      where: { id },
    });

    revalidatePath("/study");
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}
