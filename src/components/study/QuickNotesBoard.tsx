"use client";

import React, { useState } from "react";
import { QuickNoteItem, ExamSubjectItem } from "@/types";
import { Pin, Trash2, Plus, FileText, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface QuickNotesBoardProps {
  notes: QuickNoteItem[];
  subjects: ExamSubjectItem[];
  selectedSubjectId?: string | null;
  onAddNote: (formData: {
    examSubjectId?: string | null;
    title: string;
    content: string;
    isPinned?: boolean;
  }) => Promise<void>;
  onTogglePin: (id: string, isPinned: boolean) => Promise<void>;
  onDeleteNote: (id: string) => Promise<void>;
}

export const QuickNotesBoard: React.FC<QuickNotesBoardProps> = ({
  notes,
  subjects,
  selectedSubjectId,
  onAddNote,
  onTogglePin,
  onDeleteNote,
}) => {
  const [isAdding, setIsAdding] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [subjectId, setSubjectId] = useState<string>(selectedSubjectId || "");
  const [isPinned, setIsPinned] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Filter notes by selected subject if one is chosen
  const filteredNotes = selectedSubjectId
    ? notes.filter((n) => n.examSubjectId === selectedSubjectId || !n.examSubjectId)
    : notes;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    setIsSubmitting(true);
    try {
      await onAddNote({
        examSubjectId: subjectId || null,
        title: title.trim(),
        content: content.trim(),
        isPinned,
      });
      setTitle("");
      setContent("");
      setIsPinned(false);
      setIsAdding(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="border border-neutral-300 dark:border-[#262626] bg-white dark:bg-[#141414] p-4">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-200 dark:border-[#202020]">
        <div className="flex items-center space-x-2">
          <FileText className="w-4 h-4 text-neutral-900 dark:text-white" />
          <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-900 dark:text-neutral-100">
            EXAM CHEAT-SHEET & QUICK FORMULAS
          </h3>
        </div>
        <Button
          variant={isAdding ? "outline" : "primary"}
          size="sm"
          onClick={() => setIsAdding(!isAdding)}
          className="text-[11px]"
        >
          <Plus className="w-3 h-3 mr-1" />
          {isAdding ? "COLLAPSE" : "NEW FORMULA / NOTE"}
        </Button>
      </div>

      {/* Inline Create Form */}
      {isAdding && (
        <form
          onSubmit={handleSubmit}
          className="mb-4 p-3 border border-neutral-300 dark:border-[#333333] bg-neutral-50 dark:bg-[#0E0E0E] space-y-3"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <input
              type="text"
              placeholder="FORMULA / TOPIC TITLE..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="h-8 px-2.5 bg-white dark:bg-[#161616] border border-neutral-300 dark:border-[#262626] font-mono text-xs text-neutral-900 dark:text-neutral-100 rounded-none focus:outline-none focus:border-neutral-900 dark:focus:border-neutral-100"
              required
            />
            <select
              value={subjectId}
              onChange={(e) => setSubjectId(e.target.value)}
              className="h-8 px-2 bg-white dark:bg-[#161616] border border-neutral-300 dark:border-[#262626] font-mono text-xs text-neutral-900 dark:text-neutral-100 rounded-none focus:outline-none focus:border-neutral-900 dark:focus:border-neutral-100"
            >
              <option value="">GENERAL (ALL SUBJECTS)</option>
              {subjects.map((sub) => (
                <option key={sub.id} value={sub.id}>
                  {sub.code} - {sub.name}
                </option>
              ))}
            </select>
          </div>

          <textarea
            placeholder="Key equations, constants, theorems, syntax reminders (e.g. O(V+E), Bayes Theorem, Euler's formula)..."
            rows={3}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 bg-white dark:bg-[#161616] border border-neutral-300 dark:border-[#262626] font-mono text-xs text-neutral-900 dark:text-neutral-100 rounded-none focus:outline-none focus:border-neutral-900 dark:focus:border-neutral-100"
            required
          />

          <div className="flex items-center justify-between pt-1">
            <label className="flex items-center space-x-2 font-mono text-xs text-neutral-700 dark:text-neutral-300 cursor-pointer">
              <input
                type="checkbox"
                checked={isPinned}
                onChange={(e) => setIsPinned(e.target.checked)}
                className="rounded-none border border-neutral-400"
              />
              <span>PIN TO TOP OF CHEAT-SHEET</span>
            </label>

            <div className="flex gap-2">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => setIsAdding(false)}
              >
                CANCEL
              </Button>
              <Button
                type="submit"
                variant="primary"
                size="sm"
                disabled={isSubmitting}
              >
                {isSubmitting ? "SAVING..." : "PIN FORMULA"}
              </Button>
            </div>
          </div>
        </form>
      )}

      {/* Notes Grid */}
      {filteredNotes.length === 0 ? (
        <div className="py-8 text-center border border-dashed border-neutral-300 dark:border-[#262626]">
          <p className="font-mono text-xs text-neutral-500 uppercase tracking-wider">
            NO FORMULAS OR CHEAT-SHEET NOTES RECORDED
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {filteredNotes.map((note) => {
            const subject = subjects.find((s) => s.id === note.examSubjectId);

            return (
              <div
                key={note.id}
                className={`p-3 border flex flex-col justify-between transition-colors ${
                  note.isPinned
                    ? "bg-neutral-50 dark:bg-[#181818] border-neutral-900 dark:border-neutral-100"
                    : "bg-white dark:bg-[#121212] border-neutral-300 dark:border-[#262626]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-neutral-200 dark:border-[#222222]">
                    <div className="flex items-center space-x-1.5 min-w-0">
                      {note.isPinned && (
                        <Pin className="w-3 h-3 text-amber-500 fill-amber-500 shrink-0" />
                      )}
                      <h4 className="font-mono text-xs font-bold truncate text-neutral-900 dark:text-neutral-100">
                        {note.title}
                      </h4>
                    </div>

                    <div className="flex items-center space-x-1 shrink-0">
                      <button
                        onClick={() => onTogglePin(note.id, !note.isPinned)}
                        title={note.isPinned ? "Unpin note" : "Pin note"}
                        className="p-1 text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                      >
                        <Pin
                          className={`w-3 h-3 ${note.isPinned ? "fill-current" : ""}`}
                        />
                      </button>
                      <button
                        onClick={() => onDeleteNote(note.id)}
                        title="Delete note"
                        className="p-1 text-neutral-400 hover:text-red-600 dark:hover:text-red-400"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  {subject && (
                    <span className="inline-block mb-2 font-mono text-[9px] uppercase px-1 py-0.2 border border-neutral-300 dark:border-[#333333] text-neutral-600 dark:text-neutral-400">
                      {subject.code}
                    </span>
                  )}

                  <pre className="font-mono text-xs text-neutral-700 dark:text-neutral-300 whitespace-pre-wrap font-medium leading-relaxed">
                    {note.content}
                  </pre>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
