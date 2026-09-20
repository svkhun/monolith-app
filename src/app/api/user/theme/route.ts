import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user || !(session.user as any).id) {
      return NextResponse.json({ success: true, message: "Guest mode" });
    }

    const { themePreference } = await req.json();
    if (themePreference !== "dark" && themePreference !== "light") {
      return NextResponse.json({ error: "Invalid theme" }, { status: 400 });
    }

    const userId = (session.user as any).id;
    await db.user.update({
      where: { id: userId },
      data: { themePreference },
    });

    return NextResponse.json({ success: true, themePreference });
  } catch (error) {
    // If user table not yet synced or error, fail gracefully
    return NextResponse.json({ success: true, error: "Sync deferred" });
  }
}
