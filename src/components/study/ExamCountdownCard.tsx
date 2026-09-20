"use client";

import React, { useEffect, useState } from "react";
import { ExamSubjectItem } from "@/types";
import { Calendar, MapPin, Award, Trash2, BookOpen, Plus } from "lucide-react";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Button } from "@/components/ui/Button";
import { formatDateTime } from "@/lib/utils";

interface ExamCountdownCardProps {
  subject: ExamSubjectItem;
  onSelect: (subject: ExamSubjectItem) => void;
  onDelete: (id: string) => void;
  onAddChapter: (subjectId: string) => void;
  isSelected?: boolean;
}

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

function calculateTimeRemaining(targetDateString: string): TimeRemaining {
  const difference = new Date(targetDateString).getTime() - new Date().getTime();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / 1000 / 60) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  return { days, hours, minutes, seconds, isPast: false };
}

export const ExamCountdownCard: React.FC<ExamCountdownCardProps> = ({
  subject,
  onSelect,
  onDelete,
  onAddChapter,
  isSelected = false,
}) => {
  const [time, setTime] = useState<TimeRemaining>(() =>
    calculateTimeRemaining(subject.examDate)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculateTimeRemaining(subject.examDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [subject.examDate]);

  const pad = (n: number) => String(n).padStart(2, "0");

  const totalChapters = subject.chapters?.length || 0;
  const completedChapters =
    subject.chapters?.filter((c) => c.isCompleted).length || 0;
  const percentage =
    totalChapters > 0 ? Math.round((completedChapters / totalChapters) * 100) : 0;

  return (
    <div
      className={`border transition-all bg-white dark:bg-[#141414] p-4 ${
        isSelected
          ? "border-neutral-900 dark:border-neutral-100 shadow-md ring-1 ring-neutral-900 dark:ring-neutral-100"
          : "border-neutral-300 dark:border-[#262626] hover:border-neutral-500 dark:hover:border-[#404040]"
      }`}
    >
      {/* Top Header: Code, Target, Delete */}
      <div className="flex items-center justify-between gap-2 mb-2">
        <div className="flex items-center space-x-2">
          <span className="bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-2 py-0.5 font-mono text-xs font-black tracking-wider">
            {subject.code}
          </span>
          {subject.targetGrade && (
            <span className="flex items-center gap-1 border border-neutral-300 dark:border-[#333333] px-1.5 py-0.5 font-mono text-[11px] text-neutral-700 dark:text-neutral-300">
              <Award className="w-3 h-3 text-amber-500" />
              TARGET: {subject.targetGrade}
            </span>
          )}
        </div>

        <button
          onClick={() => onDelete(subject.id)}
          title="Remove Subject"
          className="p-1 text-neutral-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-neutral-100 dark:hover:bg-[#202020] border border-transparent hover:border-neutral-300 dark:hover:border-[#333333]"
        >
          <Trash2 className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Subject Title */}
      <h3 className="font-mono text-sm font-bold text-neutral-900 dark:text-neutral-100 tracking-tight">
        {subject.name}
      </h3>

      {/* Metadata: Date & Room */}
      <div className="mt-2 space-y-1 font-mono text-[11px] text-neutral-600 dark:text-neutral-400">
        <div className="flex items-center gap-1.5">
          <Calendar className="w-3 h-3 text-neutral-400" />
          <span>{formatDateTime(subject.examDate)}</span>
        </div>
        {subject.roomLocation && (
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3 h-3 text-neutral-400" />
            <span>ROOM: {subject.roomLocation}</span>
          </div>
        )}
      </div>

      {/* Real-time Countdown Box in JetBrains Mono */}
      <div className="mt-3 p-2.5 border border-neutral-200 dark:border-[#222222] bg-neutral-50 dark:bg-[#0B0B0B]">
        <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-1">
          {time.isPast ? "EXAM CONCLUDED" : "TIME REMAINING UNTIL EXAM"}
        </div>
        {time.isPast ? (
          <div className="font-mono text-sm font-bold text-neutral-500">
            PAST SCHEDULED TIME
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-1 text-center font-mono">
            <div className="border border-neutral-200 dark:border-[#202020] bg-white dark:bg-[#141414] py-1">
              <span className="text-base font-bold text-neutral-900 dark:text-neutral-100 block leading-tight">
                {time.days}
              </span>
              <span className="text-[9px] text-neutral-500 uppercase">DAYS</span>
            </div>
            <div className="border border-neutral-200 dark:border-[#202020] bg-white dark:bg-[#141414] py-1">
              <span className="text-base font-bold text-neutral-900 dark:text-neutral-100 block leading-tight">
                {pad(time.hours)}
              </span>
              <span className="text-[9px] text-neutral-500 uppercase">HRS</span>
            </div>
            <div className="border border-neutral-200 dark:border-[#202020] bg-white dark:bg-[#141414] py-1">
              <span className="text-base font-bold text-neutral-900 dark:text-neutral-100 block leading-tight">
                {pad(time.minutes)}
              </span>
              <span className="text-[9px] text-neutral-500 uppercase">MIN</span>
            </div>
            <div className="border border-neutral-200 dark:border-[#202020] bg-white dark:bg-[#141414] py-1">
              <span className="text-base font-bold text-red-600 dark:text-red-400 block leading-tight">
                {pad(time.seconds)}
              </span>
              <span className="text-[9px] text-neutral-500 uppercase">SEC</span>
            </div>
          </div>
        )}
      </div>

      {/* Syllabus Readiness Progress */}
      <div className="mt-3">
        <ProgressBar
          value={percentage}
          label={`READINESS: ${completedChapters}/${totalChapters} CHAPTERS`}
        />
      </div>

      {/* Footer Controls */}
      <div className="mt-3.5 pt-2.5 border-t border-neutral-200 dark:border-[#202020] flex items-center justify-between gap-2">
        <Button
          variant={isSelected ? "primary" : "outline"}
          size="sm"
          onClick={() => onSelect(subject)}
          className="flex-1 text-[10px]"
        >
          <BookOpen className="w-3 h-3 mr-1" />
          {isSelected ? "ACTIVE SYLLABUS" : "VIEW SYLLABUS"}
        </Button>
        <button
          onClick={() => onAddChapter(subject.id)}
          title="Add Syllabus Chapter"
          className="p-1.5 border border-neutral-300 dark:border-[#262626] hover:bg-neutral-100 dark:hover:bg-[#202020] text-neutral-700 dark:text-neutral-300"
        >
          <Plus className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
