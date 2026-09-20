import Link from "next/link";
import { Briefcase, GraduationCap, Clock, ArrowRight, CheckSquare, Target, Activity } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function HomePage() {
  return (
    <div className="space-y-6">
      {/* Brutalist Hero Banner */}
      <div className="border border-neutral-300 dark:border-[#262626] bg-white dark:bg-[#141414] p-6 sm:p-8">
        <div className="max-w-3xl">
          <div className="inline-block border border-neutral-300 dark:border-[#333333] bg-neutral-100 dark:bg-[#1f1f1f] px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-widest text-neutral-600 dark:text-neutral-400 mb-3">
            SYSTEM MISSION CONTROL // MONOLITH v1.0
          </div>
          <h1 className="font-mono text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-900 dark:text-white leading-tight">
            DUAL-DOMAIN WORK & UNIVERSITY EXAM READINESS ENGINE
          </h1>
          <p className="mt-3 font-mono text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
            High-density architectural workspace built for engineers and academics. Zero-radius Brutalist UI, sub-second latency, real-time exam count-downs, and deep focus time tracking.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/work">
              <Button variant="primary" size="lg" className="flex items-center space-x-2">
                <Briefcase className="w-4 h-4" />
                <span>ENTER WORK MANAGEMENT</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
            <Link href="/study">
              <Button variant="outline" size="lg" className="flex items-center space-x-2">
                <GraduationCap className="w-4 h-4" />
                <span>LAUNCH EXAM PREP HUB</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Domain Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Work Domain Overview */}
        <div className="border border-neutral-300 dark:border-[#262626] bg-white dark:bg-[#141414] p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-200 dark:border-[#202020]">
              <div className="flex items-center space-x-2">
                <Briefcase className="w-4 h-4 text-neutral-900 dark:text-white" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white">
                  DOMAIN 01 // WORK MANAGEMENT
                </span>
              </div>
              <span className="font-mono text-[10px] text-neutral-500 uppercase">
                STATUS: ACTIVE
              </span>
            </div>

            <p className="font-mono text-xs text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">
              Task lifecycle management featuring multi-column Kanban workflows, compact high-density list views, overdue SLA warnings, and priority tags.
            </p>

            <div className="space-y-2 font-mono text-xs mb-6">
              <div className="flex items-center justify-between p-2 border border-neutral-200 dark:border-[#222222] bg-neutral-50 dark:bg-[#0E0E0E]">
                <span className="text-neutral-500">VIEW MODES</span>
                <span className="font-bold text-neutral-900 dark:text-neutral-200">KANBAN + COMPACT LIST</span>
              </div>
              <div className="flex items-center justify-between p-2 border border-neutral-200 dark:border-[#222222] bg-neutral-50 dark:bg-[#0E0E0E]">
                <span className="text-neutral-500">PRIORITY LEVELS</span>
                <span className="font-bold text-neutral-900 dark:text-neutral-200">LOW / MEDIUM / HIGH / URGENT</span>
              </div>
              <div className="flex items-center justify-between p-2 border border-neutral-200 dark:border-[#222222] bg-neutral-50 dark:bg-[#0E0E0E]">
                <span className="text-neutral-500">DEADLINE MONITOR</span>
                <span className="font-bold text-red-600 dark:text-red-400">OVERDUE / DUE TODAY DETECTORS</span>
              </div>
            </div>
          </div>

          <Link href="/work" className="w-full">
            <Button variant="secondary" className="w-full justify-between">
              <span>DISPATCH WORK ITEMS</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </Link>
        </div>

        {/* Study Domain Overview */}
        <div className="border border-neutral-300 dark:border-[#262626] bg-white dark:bg-[#141414] p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-200 dark:border-[#202020]">
              <div className="flex items-center space-x-2">
                <GraduationCap className="w-4 h-4 text-neutral-900 dark:text-white" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white">
                  DOMAIN 02 // UNIVERSITY EXAM HUB
                </span>
              </div>
              <span className="font-mono text-[10px] text-neutral-500 uppercase">
                STATUS: SYNCED
              </span>
            </div>

            <p className="font-mono text-xs text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">
              Examination readiness tracking with real-time countdown meters, granular syllabus completion bars, Pomodoro focus logger, and formula cheat-sheets.
            </p>

            <div className="space-y-2 font-mono text-xs mb-6">
              <div className="flex items-center justify-between p-2 border border-neutral-200 dark:border-[#222222] bg-neutral-50 dark:bg-[#0E0E0E]">
                <span className="text-neutral-500">COUNTDOWN CLOCK</span>
                <span className="font-bold text-neutral-900 dark:text-neutral-200">REAL-TIME DAYS : HRS : MIN : SEC</span>
              </div>
              <div className="flex items-center justify-between p-2 border border-neutral-200 dark:border-[#222222] bg-neutral-50 dark:bg-[#0E0E0E]">
                <span className="text-neutral-500">SYLLABUS AUDIT</span>
                <span className="font-bold text-neutral-900 dark:text-neutral-200">DYNAMIC % READINESS COMPUTATION</span>
              </div>
              <div className="flex items-center justify-between p-2 border border-neutral-200 dark:border-[#222222] bg-neutral-50 dark:bg-[#0E0E0E]">
                <span className="text-neutral-500">FOCUS TIMER</span>
                <span className="font-bold text-sky-600 dark:text-sky-400">25/5/15 POMODORO WITH DB LOG</span>
              </div>
            </div>
          </div>

          <Link href="/study" className="w-full">
            <Button variant="secondary" className="w-full justify-between">
              <span>INITIALIZE STUDY CONSOLE</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
