import Link from "next/link";
import {
  Briefcase,
  GraduationCap,
  PlayCircle,
  ArrowRight,
  CheckCircle2,
  Clock,
  Layers,
  Zap,
  Target,
  FileText,
  Shield,
  LayoutGrid,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function HomePage() {
  return (
    <div className="space-y-16 sm:space-y-24 py-6 sm:py-10">
      {/* 1. HERO SECTION */}
      <section className="border border-neutral-300 dark:border-[#262626] bg-white dark:bg-[#141414] p-8 sm:p-14 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Monolith Geometric Logo Emblem */}
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-mono text-2xl sm:text-3xl font-black border border-neutral-900 dark:border-white shadow-md mx-auto">
            M
          </div>

          <div className="space-y-3">
            <div className="inline-block border border-neutral-300 dark:border-[#333333] bg-neutral-100 dark:bg-[#1f1f1f] px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest text-neutral-600 dark:text-neutral-400">
              CLARITY OVER BLOAT // PURPOSE-BUILT ENGINE
            </div>
            <h1 className="font-mono text-3xl sm:text-5xl font-black uppercase tracking-tight text-neutral-900 dark:text-white leading-tight">
              STOP ORGANIZING.
              <br />
              START EXECUTING.
            </h1>
            <p className="font-mono text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto leading-relaxed">
              Built for people who find Notion too bloated and Obsidian too complex. A sharp, zero-distraction workspace for professional Work Management and University Exam Readiness.
            </p>
          </div>

          {/* Quick Value Badges */}
          <div className="flex flex-wrap justify-center gap-2 pt-1 font-mono text-xs text-neutral-600 dark:text-neutral-400">
            <span className="border border-neutral-300 dark:border-[#2b2b2b] bg-neutral-50 dark:bg-[#1a1a1a] px-3 py-1">
              ZERO CONFIGURATION
            </span>
            <span className="border border-neutral-300 dark:border-[#2b2b2b] bg-neutral-50 dark:bg-[#1a1a1a] px-3 py-1">
              ZERO BLOAT
            </span>
            <span className="border border-neutral-300 dark:border-[#2b2b2b] bg-neutral-50 dark:bg-[#1a1a1a] px-3 py-1">
              ZERO CURVED CORNERS
            </span>
            <span className="border border-neutral-300 dark:border-[#2b2b2b] bg-neutral-50 dark:bg-[#1a1a1a] px-3 py-1">
              100% FOCUS
            </span>
          </div>

          {/* Primary Calls to Action */}
          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="/work" className="w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8"
              >
                <span>OPEN WORKSPACE</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link href="/demo" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6"
              >
                <PlayCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <span>EXPLORE INTERACTIVE TUTORIAL</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. THE PROBLEM & PHILOSOPHY: WHY MONOLITH? */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-500">
            THE MONOLITH PHILOSOPHY
          </span>
          <h2 className="font-mono text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-900 dark:text-white">
            WHY NOT NOTION OR OBSIDIAN?
          </h2>
          <p className="font-mono text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
            Most productivity tools trap you in endless tinkering instead of actual progress.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Notion */}
          <div className="border border-neutral-300 dark:border-[#262626] bg-white dark:bg-[#141414] p-6 space-y-3">
            <div className="font-mono text-xs font-bold text-neutral-400 uppercase">
              THE NOTION TRAP
            </div>
            <h3 className="font-mono text-lg font-bold text-neutral-900 dark:text-neutral-100">
              TOO BLOATED & SLOW
            </h3>
            <p className="font-mono text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Nested databases, sluggish loading times, and spending three hours designing templates instead of doing actual coursework or writing code.
            </p>
          </div>

          {/* Card 2: Obsidian */}
          <div className="border border-neutral-300 dark:border-[#262626] bg-white dark:bg-[#141414] p-6 space-y-3">
            <div className="font-mono text-xs font-bold text-neutral-400 uppercase">
              THE OBSIDIAN TRAP
            </div>
            <h3 className="font-mono text-lg font-bold text-neutral-900 dark:text-neutral-100">
              TOO COMPLEX & FRAGMENTED
            </h3>
            <p className="font-mono text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Markdown links, node graph obsession, and hunting for community plugins just to get a simple countdown timer and task checklist running.
            </p>
          </div>

          {/* Card 3: Monolith */}
          <div className="border border-neutral-900 dark:border-neutral-100 bg-neutral-50 dark:bg-[#181818] p-6 space-y-3 shadow-sm">
            <div className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase">
              THE MONOLITH STANDARD
            </div>
            <h3 className="font-mono text-lg font-bold text-neutral-900 dark:text-neutral-100">
              PRECISE & READY TO GO
            </h3>
            <p className="font-mono text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Two core tools in one unified console: Fast Work Management and University Exam Prep. No plugins required. Open, track, study, succeed.
            </p>
          </div>
        </div>
      </section>

      {/* 3. CORE DOMAIN 01: WORK MANAGEMENT */}
      <section className="border border-neutral-300 dark:border-[#262626] bg-white dark:bg-[#141414] p-6 sm:p-10 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-200 dark:border-[#202020] pb-6">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <Briefcase className="w-5 h-5 text-neutral-900 dark:text-white" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-500">
                DOMAIN 01 // PROFESSIONAL WORK
              </span>
            </div>
            <h2 className="font-mono text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-900 dark:text-white">
              PROJECT DISPATCH & DEADLINE TRACKING
            </h2>
            <p className="font-mono text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
              Clean task lifecycle management built for speed, keyboard usability, and clarity.
            </p>
          </div>

          <Link href="/work">
            <Button variant="primary" size="md" className="flex items-center gap-2">
              <span>OPEN WORKSPACE</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-neutral-200 dark:border-[#202020] bg-neutral-50 dark:bg-[#101010] p-5 space-y-2">
            <div className="flex items-center space-x-2 text-neutral-900 dark:text-white font-mono font-bold text-sm">
              <LayoutGrid className="w-4 h-4" />
              <span>DUAL VIEW MODES</span>
            </div>
            <p className="font-mono text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Switch in a single click between multi-column Kanban cards and high-density compact tables based on your workflow.
            </p>
          </div>

          <div className="border border-neutral-200 dark:border-[#202020] bg-neutral-50 dark:bg-[#101010] p-5 space-y-2">
            <div className="flex items-center space-x-2 text-neutral-900 dark:text-white font-mono font-bold text-sm">
              <Clock className="w-4 h-4 text-amber-500" />
              <span>DEADLINE SENSORS</span>
            </div>
            <p className="font-mono text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Visual alerts highlight tasks that are due today or overdue automatically, keeping critical commitments front and center.
            </p>
          </div>

          <div className="border border-neutral-200 dark:border-[#202020] bg-neutral-50 dark:bg-[#101010] p-5 space-y-2">
            <div className="flex items-center space-x-2 text-neutral-900 dark:text-white font-mono font-bold text-sm">
              <Zap className="w-4 h-4 text-sky-500" />
              <span>INSTANT FILTERING</span>
            </div>
            <p className="font-mono text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Filter by priority levels (LOW, MEDIUM, HIGH, URGENT) and tags with instant real-time search responsiveness.
            </p>
          </div>
        </div>
      </section>

      {/* 4. CORE DOMAIN 02: UNIVERSITY EXAM HUB */}
      <section className="border border-neutral-300 dark:border-[#262626] bg-white dark:bg-[#141414] p-6 sm:p-10 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-200 dark:border-[#202020] pb-6">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <GraduationCap className="w-5 h-5 text-neutral-900 dark:text-white" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-500">
                DOMAIN 02 // ACADEMIC PREPARATION
              </span>
            </div>
            <h2 className="font-mono text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-900 dark:text-white">
              UNIVERSITY EXAM READINESS ENGINE
            </h2>
            <p className="font-mono text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
              Eliminate exam anxiety through quantitative preparation and deep focus tracking.
            </p>
          </div>

          <Link href="/study">
            <Button variant="primary" size="md" className="flex items-center gap-2">
              <span>OPEN EXAM HUB</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="border border-neutral-200 dark:border-[#202020] bg-neutral-50 dark:bg-[#101010] p-5 space-y-2">
            <div className="font-mono font-bold text-sm text-neutral-900 dark:text-white">
              EXAM COUNTDOWNS
            </div>
            <p className="font-mono text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Live Days : Hours : Mins : Secs counters in JetBrains Mono, sorted chronologically by upcoming test date.
            </p>
          </div>

          <div className="border border-neutral-200 dark:border-[#202020] bg-neutral-50 dark:bg-[#101010] p-5 space-y-2">
            <div className="font-mono font-bold text-sm text-neutral-900 dark:text-white">
              SYLLABUS % READINESS
            </div>
            <p className="font-mono text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Check off syllabus chapters and see your dynamic % completion bar update immediately with remaining hours.
            </p>
          </div>

          <div className="border border-neutral-200 dark:border-[#202020] bg-neutral-50 dark:bg-[#101010] p-5 space-y-2">
            <div className="font-mono font-bold text-sm text-neutral-900 dark:text-white">
              FOCUS POMODORO
            </div>
            <p className="font-mono text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
              A clean 25/5/15 focus timer tied directly to your course code, logging study sessions automatically.
            </p>
          </div>

          <div className="border border-neutral-200 dark:border-[#202020] bg-neutral-50 dark:bg-[#101010] p-5 space-y-2">
            <div className="font-mono font-bold text-sm text-neutral-900 dark:text-white">
              CHEAT-SHEET BOARD
            </div>
            <p className="font-mono text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Pin critical equations, algorithmic complexities, and theorems right next to your study timer.
            </p>
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS IN 3 STEPS */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-500">
            SIMPLE WORKFLOW
          </span>
          <h2 className="font-mono text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-900 dark:text-white">
            GET STARTED IN 30 SECONDS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono">
          <div className="border border-neutral-300 dark:border-[#262626] bg-white dark:bg-[#141414] p-6 space-y-3">
            <div className="text-2xl font-black text-neutral-400">01</div>
            <h3 className="text-base font-bold text-neutral-900 dark:text-white">
              SCHEDULE & DISPATCH
            </h3>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Input your project tasks and exam dates. Assign priorities and target grades with zero setup friction.
            </p>
          </div>

          <div className="border border-neutral-300 dark:border-[#262626] bg-white dark:bg-[#141414] p-6 space-y-3">
            <div className="text-2xl font-black text-neutral-400">02</div>
            <h3 className="text-base font-bold text-neutral-900 dark:text-white">
              BREAK DOWN SYLLABUS
            </h3>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Add individual chapters with estimated study hours. As you check off items, watch your readiness score climb.
            </p>
          </div>

          <div className="border border-neutral-300 dark:border-[#262626] bg-white dark:bg-[#141414] p-6 space-y-3">
            <div className="text-2xl font-black text-neutral-400">03</div>
            <h3 className="text-base font-bold text-neutral-900 dark:text-white">
              EXECUTE IN POMODORO SESSIONS
            </h3>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Launch the 25-minute timer, consult your pinned formulas, and log your hours directly into the system.
            </p>
          </div>
        </div>
      </section>

      {/* 6. BOTTOM ACTION BANNER */}
      <section className="border border-neutral-900 dark:border-neutral-100 bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 p-8 sm:p-12 text-center space-y-6">
        <div className="max-w-2xl mx-auto space-y-3">
          <h2 className="font-mono text-2xl sm:text-4xl font-black uppercase tracking-tight">
            READY TO FOCUS WITHOUT DISTRACTIONS?
          </h2>
          <p className="font-mono text-sm sm:text-base opacity-80 leading-relaxed">
            Jump directly into your personal workspace or explore the full interactive demo sandbox right now.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link href="/work" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto px-8 py-3 bg-white text-neutral-900 dark:bg-neutral-900 dark:text-white font-mono text-sm uppercase font-bold tracking-wider hover:opacity-90 transition-opacity">
              START WORKING NOW
            </button>
          </Link>
          <Link href="/demo" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto px-8 py-3 border border-current font-mono text-sm uppercase font-bold tracking-wider hover:bg-white/10 dark:hover:bg-black/10 transition-colors">
              VIEW INTERACTIVE DEMO & TUTORIAL
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
