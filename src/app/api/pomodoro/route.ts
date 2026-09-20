import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { PomodoroSessionSchema } from "@/lib/validations";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    const userId = (session?.user as any)?.id || "demo-user-id";

    const body = await req.json();
    const validated = PomodoroSessionSchema.parse(body);

    const record = await db.pomodoroSession.create({
      data: {
        userId: userId,
        examSubjectId: validated.examSubjectId || null,
        durationMinutes: validated.durationMinutes,
      },
    });

    return NextResponse.json({ success: true, data: record });
  } catch (error: any) {
    console.error("Pomodoro log error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to record pomodoro session" },
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    const userId = (session?.user as any)?.id || "demo-user-id";

    const sessions = await db.pomodoroSession.findMany({
      where: { userId },
      include: {
        examSubject: {
          select: { code: true, name: true },
        },
      },
      orderBy: { completedAt: "desc" },
      take: 20,
    });

    const totalMinutes = sessions.reduce((sum, s) => sum + s.durationMinutes, 0);

    return NextResponse.json({
      sessions,
      totalMinutes,
      totalSessions: sessions.length,
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Failed to fetch pomodoro sessions" },
      { status: 500 }
    );
  }
}
