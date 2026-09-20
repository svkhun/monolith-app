"use client";

import React from "react";
import { TaskItem, TaskStatus } from "@/types";
import { TaskCard } from "./TaskCard";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface TaskKanbanProps {
  tasks: TaskItem[];
  onEdit: (task: TaskItem) => void;
  onDelete: (id: string) => void;
  onStatusChange: (id: string, status: TaskStatus) => void;
  onAddNew: (defaultStatus?: TaskStatus) => void;
}

const COLUMNS: { id: TaskStatus; label: string; code: string }[] = [
  { id: "TODO", label: "BACKLOG / TO DO", code: "COL_01" },
  { id: "IN_PROGRESS", label: "IN PROGRESS", code: "COL_02" },
  { id: "DONE", label: "COMPLETED", code: "COL_03" },
];

export const TaskKanban: React.FC<TaskKanbanProps> = ({
  tasks,
  onEdit,
  onDelete,
  onStatusChange,
  onAddNew,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {COLUMNS.map((column) => {
        const columnTasks = tasks.filter((t) => t.status === column.id);

        return (
          <div
            key={column.id}
            className="flex flex-col border border-neutral-300 dark:border-[#262626] bg-neutral-50/50 dark:bg-[#0E0E0E]/50 min-h-[500px]"
          >
            {/* Column Header */}
            <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-neutral-300 dark:border-[#262626] bg-neutral-100 dark:bg-[#141414]">
              <div className="flex items-center space-x-2">
                <span className="font-mono text-[10px] text-neutral-500 font-bold">
                  {column.code}
                </span>
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-neutral-100">
                  {column.label}
                </h3>
              </div>
              <div className="flex items-center space-x-2">
                <span className="border border-neutral-300 dark:border-[#333333] bg-white dark:bg-[#1f1f1f] px-1.5 py-0.5 font-mono text-[10px] font-bold text-neutral-700 dark:text-neutral-300">
                  {columnTasks.length}
                </span>
                <button
                  onClick={() => onAddNew(column.id)}
                  title={`Add task to ${column.label}`}
                  className="p-1 hover:bg-neutral-200 dark:hover:bg-[#262626] text-neutral-600 dark:text-neutral-400 border border-transparent hover:border-neutral-300 dark:hover:border-[#383838]"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Task Card List */}
            <div className="flex-1 p-3 space-y-3 overflow-y-auto max-h-[700px]">
              {columnTasks.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 border border-dashed border-neutral-300 dark:border-[#262626] text-center p-4">
                  <span className="font-mono text-[11px] text-neutral-500 uppercase tracking-wider">
                    NO TASKS
                  </span>
                  <button
                    onClick={() => onAddNew(column.id)}
                    className="mt-2 text-[11px] font-mono underline text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white"
                  >
                    + Add first task
                  </button>
                </div>
              ) : (
                columnTasks.map((task) => (
                  <TaskCard
                    key={task.id}
                    task={task}
                    onEdit={onEdit}
                    onDelete={onDelete}
                    onStatusChange={onStatusChange}
                  />
                ))
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
