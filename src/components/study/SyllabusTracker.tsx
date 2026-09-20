"use client";

import React, { useState } from "react";
import { ExamSubjectItem, StudyChapterItem } from "@/types";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { CheckSquare, Square, Plus, Trash2, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

interface SyllabusTrackerProps {
  subject: ExamSubjectItem | null;
  onToggleChapter: (chapterId: string, isCompleted: boolean) => Promise<void>;
  onAddChapter: (subjectId: string, title: string, estimatedHours: number) => Promise<void>;
  onDeleteChapter: (chapterId: string) => Promise<void>;
}

export const SyllabusTracker: React.FC<SyllabusTrackerProps> = ({
  subject,
  onToggleChapter,
  onAddChapter,
  onDeleteChapter,
}) => {
  const [newTitle, setNewTitle] = useState("");
  const [newHours, setNewHours] = useState("1.5");
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!subject) {
    return (
      <div className="border border-neutral-300 dark:border-[#262626] bg-white dark:bg-[#141414] p-8 text-center">
        <p className="font-mono text-xs text-neutral-500 uppercase tracking-wider">
          SELECT AN EXAM SUBJECT TO TRACK SYLLABUS AND READINESS
        </p>
      </div>
    );
  }

  const chapters = subject.chapters || [];
  const completedCount = chapters.filter((c) => c.isCompleted).length;
  const totalCount = chapters.length;
  const readiness = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
  const totalHours = chapters.reduce((sum, c) => sum + c.estimatedHours, 0);
  const remainingHours = chapters
    .filter((c) => !c.isCompleted)
    .reduce((sum, c) => sum + c.estimatedHours, 0);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    setIsSubmitting(true);
    try {
      await onAddChapter(subject.id, newTitle.trim(), parseFloat(newHours) || 1.0);
      setNewTitle("");
      setNewHours("1.5");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="border border-neutral-300 dark:border-[#262626] bg-white dark:bg-[#141414] p-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 mb-3 border-b border-neutral-200 dark:border-[#202020] gap-2">
        <div>
          <div className="flex items-center space-x-2">
            <span className="font-mono text-xs font-bold bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-2 py-0.5">
              {subject.code}
            </span>
            <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-neutral-900 dark:text-neutral-100">
              {subject.name} - SYLLABUS TRACKER
            </h3>
          </div>
          <p className="font-mono text-[11px] text-neutral-500 mt-1">
            ESTIMATED REMAINING: {remainingHours.toFixed(1)} HRS OF {totalHours.toFixed(1)} HRS TOTAL
          </p>
        </div>

        <div className="sm:w-56">
          <ProgressBar value={readiness} label="COURSE COMPLETION" />
        </div>
      </div>

      {/* Chapters Checklist */}
      <div className="space-y-2 max-h-[340px] overflow-y-auto pr-1">
        {chapters.length === 0 ? (
          <div className="py-8 text-center border border-dashed border-neutral-300 dark:border-[#262626]">
            <p className="font-mono text-xs text-neutral-500">
              NO CHAPTERS ADDED YET. POPULATE SYLLABUS BELOW.
            </p>
          </div>
        ) : (
          chapters.map((chapter, idx) => (
            <div
              key={chapter.id}
              className={`flex items-center justify-between p-2.5 border transition-colors ${
                chapter.isCompleted
                  ? "bg-neutral-50 dark:bg-[#101010] border-neutral-200 dark:border-[#202020] text-neutral-500"
                  : "bg-white dark:bg-[#161616] border-neutral-300 dark:border-[#282828] text-neutral-900 dark:text-neutral-100"
              }`}
            >
              <div className="flex items-center space-x-3 flex-1 min-w-0 mr-2">
                <button
                  onClick={() => onToggleChapter(chapter.id, !chapter.isCompleted)}
                  className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white"
                  title={chapter.isCompleted ? "Mark incomplete" : "Mark completed"}
                >
                  {chapter.isCompleted ? (
                    <CheckSquare className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  ) : (
                    <Square className="w-4 h-4" />
                  )}
                </button>
                <div className="min-w-0">
                  <span className="font-mono text-[10px] text-neutral-400 mr-2 font-bold">
                    CH_{String(idx + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`font-mono text-xs ${
                      chapter.isCompleted ? "line-through text-neutral-400 dark:text-neutral-600" : "font-semibold"
                    }`}
                  >
                    {chapter.title}
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <span className="flex items-center gap-1 font-mono text-[11px] text-neutral-500 border border-neutral-200 dark:border-[#262626] px-1.5 py-0.5">
                  <Clock className="w-3 h-3 text-neutral-400" />
                  {chapter.estimatedHours}h
                </span>
                <button
                  onClick={() => onDeleteChapter(chapter.id)}
                  title="Delete chapter"
                  className="p-1 text-neutral-400 hover:text-red-600 dark:hover:text-red-400"
                >
                  <Trash2 className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Add New Chapter Form */}
      <form onSubmit={handleAdd} className="mt-3 pt-3 border-t border-neutral-200 dark:border-[#202020] flex gap-2">
        <div className="flex-1">
          <input
            type="text"
            placeholder="ADD SYLLABUS CHAPTER OR TOPIC..."
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="w-full h-8 px-2.5 bg-white dark:bg-[#141414] border border-neutral-300 dark:border-[#262626] font-mono text-xs text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-500 rounded-none focus:outline-none focus:border-neutral-900 dark:focus:border-neutral-100"
          />
        </div>
        <div className="w-20">
          <input
            type="number"
            step="0.5"
            min="0.5"
            placeholder="HRS"
            value={newHours}
            onChange={(e) => setNewHours(e.target.value)}
            className="w-full h-8 px-2 text-center bg-white dark:bg-[#141414] border border-neutral-300 dark:border-[#262626] font-mono text-xs text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-500 rounded-none focus:outline-none focus:border-neutral-900 dark:focus:border-neutral-100"
          />
        </div>
        <Button
          type="submit"
          variant="secondary"
          size="sm"
          disabled={isSubmitting || !newTitle.trim()}
          className="h-8"
        >
          <Plus className="w-3 h-3 mr-1" />
          ADD
        </Button>
      </form>
    </div>
  );
};
