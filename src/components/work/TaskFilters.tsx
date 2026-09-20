"use client";

import React from "react";
import { Search, LayoutGrid, List, Plus, Filter, X } from "lucide-react";
import { Priority, ViewMode } from "@/types";
import { Button } from "@/components/ui/Button";

interface TaskFiltersProps {
  search: string;
  onSearchChange: (value: string) => void;
  selectedPriority: Priority | "ALL";
  onPriorityChange: (priority: Priority | "ALL") => void;
  selectedTag: string | "ALL";
  onTagChange: (tag: string | "ALL") => void;
  allTags: string[];
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  onOpenNewModal: () => void;
}

export const TaskFilters: React.FC<TaskFiltersProps> = ({
  search,
  onSearchChange,
  selectedPriority,
  onPriorityChange,
  selectedTag,
  onTagChange,
  allTags,
  viewMode,
  onViewModeChange,
  onOpenNewModal,
}) => {
  return (
    <div className="space-y-3">
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
        {/* Search input */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-neutral-400" />
          <input
            type="text"
            placeholder="FILTER TASKS BY TITLE OR DESCRIPTION..."
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full h-9 pl-9 pr-8 bg-white dark:bg-[#141414] border border-neutral-300 dark:border-[#262626] font-mono text-xs text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-500 rounded-none focus:outline-none focus:border-neutral-900 dark:focus:border-neutral-100"
          />
          {search && (
            <button
              onClick={() => onSearchChange("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Action Controls & View Switcher */}
        <div className="flex items-center gap-2">
          {/* View mode toggle (Kanban vs List) */}
          <div className="flex border border-neutral-300 dark:border-[#262626] bg-neutral-100 dark:bg-[#141414] p-0.5">
            <button
              onClick={() => onViewModeChange("KANBAN")}
              title="Kanban Board View"
              className={`p-1.5 font-mono text-xs flex items-center gap-1.5 transition-colors ${
                viewMode === "KANBAN"
                  ? "bg-white text-neutral-900 dark:bg-[#202020] dark:text-neutral-100 border border-neutral-300 dark:border-[#383838] font-bold"
                  : "text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">KANBAN</span>
            </button>
            <button
              onClick={() => onViewModeChange("LIST")}
              title="Compact List View"
              className={`p-1.5 font-mono text-xs flex items-center gap-1.5 transition-colors ${
                viewMode === "LIST"
                  ? "bg-white text-neutral-900 dark:bg-[#202020] dark:text-neutral-100 border border-neutral-300 dark:border-[#383838] font-bold"
                  : "text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
              }`}
            >
              <List className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">LIST</span>
            </button>
          </div>

          {/* New Task Button */}
          <Button
            variant="primary"
            onClick={onOpenNewModal}
            className="flex items-center space-x-1.5"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>NEW TASK</span>
          </Button>
        </div>
      </div>

      {/* Filter Chips Bar */}
      <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-neutral-200 dark:border-[#1e1e1e] text-[11px] font-mono">
        <span className="text-neutral-500 flex items-center gap-1">
          <Filter className="w-3 h-3" />
          PRIORITY:
        </span>

        {(["ALL", "URGENT", "HIGH", "MEDIUM", "LOW"] as const).map((p) => (
          <button
            key={p}
            onClick={() => onPriorityChange(p)}
            className={`px-2 py-0.5 border ${
              selectedPriority === p
                ? "bg-neutral-900 text-white border-neutral-900 dark:bg-neutral-100 dark:text-neutral-900 dark:border-neutral-100 font-bold"
                : "border-neutral-300 dark:border-[#262626] text-neutral-600 dark:text-neutral-400 hover:border-neutral-500"
            }`}
          >
            {p}
          </button>
        ))}

        {allTags.length > 0 && (
          <>
            <span className="text-neutral-400 mx-1">|</span>
            <span className="text-neutral-500">TAGS:</span>
            <button
              onClick={() => onTagChange("ALL")}
              className={`px-2 py-0.5 border ${
                selectedTag === "ALL"
                  ? "bg-neutral-900 text-white border-neutral-900 dark:bg-neutral-100 dark:text-neutral-900 dark:border-neutral-100 font-bold"
                  : "border-neutral-300 dark:border-[#262626] text-neutral-600 dark:text-neutral-400 hover:border-neutral-500"
              }`}
            >
              ALL
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => onTagChange(tag)}
                className={`px-2 py-0.5 border ${
                  selectedTag === tag
                    ? "bg-neutral-900 text-white border-neutral-900 dark:bg-neutral-100 dark:text-neutral-900 dark:border-neutral-100 font-bold"
                    : "border-neutral-300 dark:border-[#262626] text-neutral-600 dark:text-neutral-400 hover:border-neutral-500"
                }`}
              >
                #{tag}
              </button>
            ))}
          </>
        )}
      </div>
    </div>
  );
};
