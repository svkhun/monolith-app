import Link from "next/link";
import {
  Briefcase,
  GraduationCap,
  PlayCircle,
  ArrowRight,
  Clock,
  LayoutGrid,
  Zap,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function HomePage() {
  return (
    <div className="space-y-12 sm:space-y-20 py-4 sm:py-8">
      {/* 1. HERO SECTION - CLEAN, CLASSIC & STRIKING */}
      <section className="relative border border-[#DDD4C5] dark:border-[#3B332B] bg-[#F3EDE4] dark:bg-[#201C18] p-8 sm:p-16 text-center shadow-sm">
        {/* Subtle classic corner decorative accents */}
        <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-[#A89B8C] dark:border-[#54493E]" />
        <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-[#A89B8C] dark:border-[#54493E]" />
        <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-[#A89B8C] dark:border-[#54493E]" />
        <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-[#A89B8C] dark:border-[#54493E]" />

        <div className="max-w-2xl mx-auto space-y-6">
          {/* Classic Monolith Emblem */}
          <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-[#26201A] text-[#FBF8F3] dark:bg-[#EFE8DC] dark:text-[#161311] font-mono text-2xl font-black border border-[#26201A] dark:border-[#EFE8DC] shadow-sm mx-auto">
            M
          </div>

          {/* Prominent Name & Iconic Quote */}
          <div className="space-y-3">
            <h1 className="font-mono text-xl sm:text-2xl font-black tracking-[0.25em] uppercase text-[#786C60] dark:text-[#9C9082]">
              MONOLITH
            </h1>

            <div className="w-12 h-[1px] bg-[#BD682C] mx-auto my-2" />

            <h2 className="font-mono text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#26201A] dark:text-[#EFE8DC] leading-tight">
              STOP ORGANIZING.
              <br />
              START EXECUTING.
            </h2>
          </div>

          {/* Direct Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="/work" className="w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 bg-[#26201A] text-[#FBF8F3] hover:bg-[#3B322B] dark:bg-[#EFE8DC] dark:text-[#161311] dark:hover:bg-[#DDD4C5]"
              >
                <span>OPEN WORKSPACE</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/demo" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 border-[#DDD4C5] dark:border-[#3B332B] hover:bg-[#EBE3D7] dark:hover:bg-[#2A2520]"
              >
                <PlayCircle className="w-4 h-4 text-[#BD682C]" />
                <span>EXPLORE INTERACTIVE TUTORIAL</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. SECTION I: WORK MANAGEMENT */}
      <section className="border border-[#DDD4C5] dark:border-[#3B332B] bg-[#FBF8F3] dark:bg-[#161311] p-6 sm:p-10 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#DDD4C5] dark:border-[#3B332B] pb-5">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <Briefcase className="w-4 h-4 text-[#BD682C]" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#786C60] dark:text-[#9C9082]">
                SECTION I // WORK MANAGEMENT
              </span>
            </div>
            <h3 className="font-mono text-xl sm:text-2xl font-bold uppercase text-[#26201A] dark:text-[#EFE8DC]">
              PROJECT WORKSPACE & DEADLINE TRACKING
            </h3>
          </div>

          <Link href="/work">
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-1.5 border-[#DDD4C5] dark:border-[#3B332B]"
            >
              <span>LAUNCH WORKSPACE</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="border border-[#DDD4C5] dark:border-[#3B332B] bg-[#F3EDE4] dark:bg-[#201C18] p-5 space-y-2">
            <div className="flex items-center space-x-2 text-[#26201A] dark:text-[#EFE8DC] font-mono font-bold text-sm">
              <LayoutGrid className="w-4 h-4 text-[#BD682C]" />
              <span>KANBAN & LIST VIEWS</span>
            </div>
            <p className="font-mono text-xs text-[#786C60] dark:text-[#9C9082] leading-relaxed">
              Switch in one click between status columns and high-density tabular list rows.
            </p>
          </div>

          <div className="border border-[#DDD4C5] dark:border-[#3B332B] bg-[#F3EDE4] dark:bg-[#201C18] p-5 space-y-2">
            <div className="flex items-center space-x-2 text-[#26201A] dark:text-[#EFE8DC] font-mono font-bold text-sm">
              <Clock className="w-4 h-4 text-[#BD682C]" />
              <span>DEADLINE SENSORS</span>
            </div>
            <p className="font-mono text-xs text-[#786C60] dark:text-[#9C9082] leading-relaxed">
              Automatic visual tags detect Overdue and Due Today items without manual checking.
            </p>
          </div>

          <div className="border border-[#DDD4C5] dark:border-[#3B332B] bg-[#F3EDE4] dark:bg-[#201C18] p-5 space-y-2">
            <div className="flex items-center space-x-2 text-[#26201A] dark:text-[#EFE8DC] font-mono font-bold text-sm">
              <Zap className="w-4 h-4 text-[#BD682C]" />
              <span>PRIORITY & TAGS</span>
            </div>
            <p className="font-mono text-xs text-[#786C60] dark:text-[#9C9082] leading-relaxed">
              Real-time multi-filter queries by LOW, MEDIUM, HIGH, URGENT and project tags.
            </p>
          </div>
        </div>
      </section>

      {/* 3. SECTION II: UNIVERSITY EXAM HUB */}
      <section className="border border-[#DDD4C5] dark:border-[#3B332B] bg-[#FBF8F3] dark:bg-[#161311] p-6 sm:p-10 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#DDD4C5] dark:border-[#3B332B] pb-5">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <GraduationCap className="w-4 h-4 text-[#BD682C]" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#786C60] dark:text-[#9C9082]">
                SECTION II // ACADEMIC HUB
              </span>
            </div>
            <h3 className="font-mono text-xl sm:text-2xl font-bold uppercase text-[#26201A] dark:text-[#EFE8DC]">
              UNIVERSITY EXAM READINESS ENGINE
            </h3>
          </div>

          <Link href="/study">
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-1.5 border-[#DDD4C5] dark:border-[#3B332B]"
            >
              <span>LAUNCH EXAM HUB</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="border border-[#DDD4C5] dark:border-[#3B332B] bg-[#F3EDE4] dark:bg-[#201C18] p-5 space-y-2">
            <span className="font-mono text-[11px] text-[#BD682C] font-bold uppercase block">
              CHRONOMETRIC
            </span>
            <h4 className="font-mono font-bold text-sm text-[#26201A] dark:text-[#EFE8DC]">
              EXAM COUNTDOWNS
            </h4>
            <p className="font-mono text-xs text-[#786C60] dark:text-[#9C9082] leading-relaxed">
              Real-time Days:Hours:Mins:Secs countdowns sorted automatically by test date.
            </p>
          </div>

          <div className="border border-[#DDD4C5] dark:border-[#3B332B] bg-[#F3EDE4] dark:bg-[#201C18] p-5 space-y-2">
            <span className="font-mono text-[11px] text-[#BD682C] font-bold uppercase block">
              SYLLABUS
            </span>
            <h4 className="font-mono font-bold text-sm text-[#26201A] dark:text-[#EFE8DC]">
              % READINESS PROGRESS
            </h4>
            <p className="font-mono text-xs text-[#786C60] dark:text-[#9C9082] leading-relaxed">
              Check off course chapters and monitor dynamically computed completion scores.
            </p>
          </div>

          <div className="border border-[#DDD4C5] dark:border-[#3B332B] bg-[#F3EDE4] dark:bg-[#201C18] p-5 space-y-2">
            <span className="font-mono text-[11px] text-[#BD682C] font-bold uppercase block">
              INTENSIVE WORK
            </span>
            <h4 className="font-mono font-bold text-sm text-[#26201A] dark:text-[#EFE8DC]">
              POMODORO TIMER
            </h4>
            <p className="font-mono text-xs text-[#786C60] dark:text-[#9C9082] leading-relaxed">
              25-minute focus intervals bound to your subjects with automated session logs.
            </p>
          </div>

          <div className="border border-[#DDD4C5] dark:border-[#3B332B] bg-[#F3EDE4] dark:bg-[#201C18] p-5 space-y-2">
            <span className="font-mono text-[11px] text-[#BD682C] font-bold uppercase block">
              CHEAT-SHEET
            </span>
            <h4 className="font-mono font-bold text-sm text-[#26201A] dark:text-[#EFE8DC]">
              FORMULA PINBOARD
            </h4>
            <p className="font-mono text-xs text-[#786C60] dark:text-[#9C9082] leading-relaxed">
              Pin critical equations and theorems right next to your study timer.
            </p>
          </div>
        </div>
      </section>

      {/* 4. SECTION III: 3-STEP FLOW */}
      <section className="border border-[#DDD4C5] dark:border-[#3B332B] bg-[#F3EDE4] dark:bg-[#201C18] p-6 sm:p-10 space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-1.5">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#BD682C]">
            SECTION III // WORKFLOW
          </span>
          <h3 className="font-mono text-xl sm:text-2xl font-bold uppercase text-[#26201A] dark:text-[#EFE8DC]">
            EXECUTION IN THREE STEPS
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 font-mono">
          <div className="border border-[#DDD4C5] dark:border-[#3B332B] bg-[#FBF8F3] dark:bg-[#161311] p-5 space-y-2">
            <span className="text-xl font-black text-[#BD682C]">01</span>
            <h4 className="text-sm font-bold text-[#26201A] dark:text-[#EFE8DC]">
              DISPATCH ITEMS
            </h4>
            <p className="text-xs text-[#786C60] dark:text-[#9C9082] leading-relaxed">
              Add pending project tasks and upcoming exam schedules with target dates.
            </p>
          </div>

          <div className="border border-[#DDD4C5] dark:border-[#3B332B] bg-[#FBF8F3] dark:bg-[#161311] p-5 space-y-2">
            <span className="text-xl font-black text-[#BD682C]">02</span>
            <h4 className="text-sm font-bold text-[#26201A] dark:text-[#EFE8DC]">
              BREAK DOWN CHAPTERS
            </h4>
            <p className="text-xs text-[#786C60] dark:text-[#9C9082] leading-relaxed">
              List course topics with estimated hours and track dynamic progress bars.
            </p>
          </div>

          <div className="border border-[#DDD4C5] dark:border-[#3B332B] bg-[#FBF8F3] dark:bg-[#161311] p-5 space-y-2">
            <span className="text-xl font-black text-[#BD682C]">03</span>
            <h4 className="text-sm font-bold text-[#26201A] dark:text-[#EFE8DC]">
              FOCUS & DELIVER
            </h4>
            <p className="text-xs text-[#786C60] dark:text-[#9C9082] leading-relaxed">
              Start 25-minute Pomodoro sessions, review pinned formulas, and log time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
