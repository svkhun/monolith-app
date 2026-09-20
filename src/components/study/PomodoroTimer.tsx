"use client";

import React, { useState, useEffect, useRef } from "react";
import { Play, Pause, RotateCcw, Check, Clock, Award, Activity } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ExamSubjectItem, PomodoroSessionItem } from "@/types";

interface PomodoroTimerProps {
  subjects: ExamSubjectItem[];
  selectedSubjectId?: string | null;
  onSubjectChange?: (subjectId: string) => void;
}

type TimerMode = "WORK" | "SHORT_BREAK" | "LONG_BREAK";

const DURATIONS: Record<TimerMode, number> = {
  WORK: 25 * 60,
  SHORT_BREAK: 5 * 60,
  LONG_BREAK: 15 * 60,
};

export const PomodoroTimer: React.FC<PomodoroTimerProps> = ({
  subjects,
  selectedSubjectId: initialSubjectId,
  onSubjectChange,
}) => {
  const [mode, setMode] = useState<TimerMode>("WORK");
  const [timeLeft, setTimeLeft] = useState<number>(DURATIONS.WORK);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [currentSubjectId, setCurrentSubjectId] = useState<string>(
    initialSubjectId || (subjects[0]?.id ?? "")
  );
  const [totalSessionsToday, setTotalSessionsToday] = useState(0);
  const [totalMinutesToday, setTotalMinutesToday] = useState(0);
  const [recentSessions, setRecentSessions] = useState<PomodoroSessionItem[]>([]);
  const [saveStatus, setSaveStatus] = useState<string | null>(null);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Sync initial subject if updated externally
  useEffect(() => {
    if (initialSubjectId) {
      setCurrentSubjectId(initialSubjectId);
    } else if (subjects.length > 0 && !currentSubjectId) {
      setCurrentSubjectId(subjects[0].id);
    }
  }, [initialSubjectId, subjects]);

  // Fetch past sessions summary on mount
  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const res = await fetch("/api/pomodoro");
      if (res.ok) {
        const data = await res.json();
        setRecentSessions(data.sessions || []);
        setTotalMinutesToday(data.totalMinutes || 0);
        setTotalSessionsToday(data.totalSessions || 0);
      }
    } catch {
      // Offline fallback
    }
  };

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current!);
            handleComplete();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isRunning, mode, currentSubjectId]);

  const handleComplete = async () => {
    setIsRunning(false);
    if (mode === "WORK") {
      await logSession(25);
      setMode("SHORT_BREAK");
      setTimeLeft(DURATIONS.SHORT_BREAK);
    } else {
      setMode("WORK");
      setTimeLeft(DURATIONS.WORK);
    }
  };

  const logSession = async (minutes: number) => {
    setSaveStatus("LOGGING...");
    try {
      const res = await fetch("/api/pomodoro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          examSubjectId: currentSubjectId || null,
          durationMinutes: minutes,
        }),
      });
      if (res.ok) {
        setSaveStatus("SESSION RECORDED");
        setTimeout(() => setSaveStatus(null), 3000);
        fetchHistory();
      }
    } catch (e) {
      setSaveStatus("SAVED LOCALLY");
      setTimeout(() => setSaveStatus(null), 3000);
    }
  };

  const switchMode = (newMode: TimerMode) => {
    setIsRunning(false);
    setMode(newMode);
    setTimeLeft(DURATIONS[newMode]);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(DURATIONS[mode]);
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const pad = (n: number) => String(n).padStart(2, "0");

  const currentSubject = subjects.find((s) => s.id === currentSubjectId);

  return (
    <div className="border border-neutral-300 dark:border-[#262626] bg-white dark:bg-[#141414] p-4">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-neutral-200 dark:border-[#202020]">
        <div className="flex items-center space-x-2">
          <Activity className="w-4 h-4 text-neutral-900 dark:text-white" />
          <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-900 dark:text-neutral-100">
            DEEP FOCUS POMODORO
          </h3>
        </div>

        {/* Mode Selector Tabs */}
        <div className="flex border border-neutral-300 dark:border-[#2b2b2b] bg-neutral-100 dark:bg-[#181818] p-0.5">
          <button
            onClick={() => switchMode("WORK")}
            className={`px-2 py-1 font-mono text-[10px] uppercase font-bold transition-all ${
              mode === "WORK"
                ? "bg-white text-neutral-900 dark:bg-[#262626] dark:text-white border border-neutral-300 dark:border-[#3a3a3a]"
                : "text-neutral-500 hover:text-neutral-800 dark:hover:text-white"
            }`}
          >
            FOCUS (25M)
          </button>
          <button
            onClick={() => switchMode("SHORT_BREAK")}
            className={`px-2 py-1 font-mono text-[10px] uppercase font-bold transition-all ${
              mode === "SHORT_BREAK"
                ? "bg-white text-neutral-900 dark:bg-[#262626] dark:text-white border border-neutral-300 dark:border-[#3a3a3a]"
                : "text-neutral-500 hover:text-neutral-800 dark:hover:text-white"
            }`}
          >
            REST (5M)
          </button>
          <button
            onClick={() => switchMode("LONG_BREAK")}
            className={`px-2 py-1 font-mono text-[10px] uppercase font-bold transition-all ${
              mode === "LONG_BREAK"
                ? "bg-white text-neutral-900 dark:bg-[#262626] dark:text-white border border-neutral-300 dark:border-[#3a3a3a]"
                : "text-neutral-500 hover:text-neutral-800 dark:hover:text-white"
            }`}
          >
            LONG (15M)
          </button>
        </div>
      </div>

      {/* Target Subject Selector */}
      <div className="mb-4">
        <label className="block font-mono text-[10px] uppercase tracking-wider text-neutral-500 mb-1">
          BIND SESSION TO SUBJECT
        </label>
        <select
          value={currentSubjectId}
          onChange={(e) => {
            setCurrentSubjectId(e.target.value);
            if (onSubjectChange) onSubjectChange(e.target.value);
          }}
          className="w-full h-8 px-2 bg-white dark:bg-[#161616] border border-neutral-300 dark:border-[#262626] font-mono text-xs text-neutral-900 dark:text-neutral-100 rounded-none focus:outline-none focus:border-neutral-900 dark:focus:border-neutral-100"
        >
          <option value="">NO SUBJECT (GENERAL REVISION)</option>
          {subjects.map((sub) => (
            <option key={sub.id} value={sub.id}>
              {sub.code} - {sub.name}
            </option>
          ))}
        </select>
      </div>

      {/* Monospace Clock Display */}
      <div className="border border-neutral-300 dark:border-[#262626] bg-neutral-50 dark:bg-[#0C0C0C] py-8 text-center select-none">
        <div className="font-mono text-6xl md:text-7xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
          {pad(minutes)}:{pad(seconds)}
        </div>
        <div className="mt-2 font-mono text-[11px] uppercase tracking-widest text-neutral-500">
          {mode === "WORK"
            ? currentSubject
              ? `INTENSIVE STUDY: ${currentSubject.code}`
              : "INTENSIVE STUDY SESSION"
            : "RECOVERY INTERVAL"}
        </div>
      </div>

      {/* Timer Controls */}
      <div className="mt-4 flex items-center justify-center gap-2">
        <Button
          variant={isRunning ? "outline" : "primary"}
          size="md"
          onClick={() => setIsRunning(!isRunning)}
          className="w-32 flex items-center justify-center gap-1.5"
        >
          {isRunning ? (
            <>
              <Pause className="w-3.5 h-3.5" />
              <span>PAUSE</span>
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5" />
              <span>START</span>
            </>
          )}
        </Button>

        <Button
          variant="secondary"
          size="md"
          onClick={resetTimer}
          title="Reset timer"
          className="w-24 flex items-center justify-center gap-1"
        >
          <RotateCcw className="w-3 h-3" />
          <span>RESET</span>
        </Button>

        {mode === "WORK" && (
          <Button
            variant="outline"
            size="md"
            onClick={() => logSession(Math.max(1, Math.round((DURATIONS.WORK - timeLeft) / 60)))}
            title="Log elapsed study time now"
            className="flex items-center gap-1 text-[10px]"
          >
            <Check className="w-3 h-3" />
            <span>LOG LOG</span>
          </Button>
        )}
      </div>

      {saveStatus && (
        <div className="mt-2 text-center font-mono text-[11px] text-emerald-600 dark:text-emerald-400 font-bold">
          {saveStatus}
        </div>
      )}

      {/* Aggregate Stats */}
      <div className="mt-4 pt-3 border-t border-neutral-200 dark:border-[#202020] grid grid-cols-2 gap-2 text-center font-mono text-xs">
        <div className="border border-neutral-200 dark:border-[#262626] bg-neutral-50 dark:bg-[#121212] p-2">
          <span className="text-[10px] text-neutral-500 uppercase block">LOGGED FOCUS</span>
          <span className="font-bold text-neutral-900 dark:text-neutral-100 text-sm">
            {(totalMinutesToday / 60).toFixed(1)} HRS
          </span>
        </div>
        <div className="border border-neutral-200 dark:border-[#262626] bg-neutral-50 dark:bg-[#121212] p-2">
          <span className="text-[10px] text-neutral-500 uppercase block">SESSIONS</span>
          <span className="font-bold text-neutral-900 dark:text-neutral-100 text-sm">
            {totalSessionsToday} COMPLETED
          </span>
        </div>
      </div>
    </div>
  );
};
