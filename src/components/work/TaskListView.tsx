"use client";

import React from "react";
import { TaskItem, TaskStatus } from "@/types";
import { PriorityBadge, StatusBadge } from "@/components/ui/Badge";
import { formatDate, isDueToday, isOverdue } from "@/lib/utils";
import { Calendar, Trash2, Edit3, CheckCircle2, Circle } from "lucide-react";

interface TaskListViewProps {
  tasks: TaskItem[];
  onEdit: (task: TaskItem) => void;
  onDelete: (id: string) => void;
  onStatusChange: (id: string, status: TaskStatus) => void;
}

export const TaskListView: React.FC<TaskListViewProps> = ({
  tasks,
  onEdit,
  onDelete,
  onStatusChange,
}) => {
  if (tasks.length === 0) {
    return (
      <div className="border border-neutral-300 dark:border-[#262626] p-12 text-center bg-white dark:bg-[#141414]">
        <p className="font-mono text-xs text-neutral-500 uppercase tracking-wider">
          NO MATCHING TASKS FOUND
        </p>
      </div>
    );
  }

  return (
    <div className="border border-neutral-300 dark:border-[#262626] bg-white dark:bg-[#141414] overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-neutral-300 dark:border-[#262626] bg-neutral-100 dark:bg-[#181818] font-mono text-[11px] uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
            <th className="py-2.5 px-3 w-10 text-center">DONE</th>
            <th className="py-2.5 px-3">TITLE / DESCRIPTION</th>
            <th className="py-2.5 px-3 w-28">STATUS</th>
            <th className="py-2.5 px-3 w-24">PRIORITY</th>
            <th className="py-2.5 px-3 w-36">DUE DATE</th>
            <th className="py-2.5 px-3 w-32">TAGS</th>
            <th className="py-2.5 px-3 w-20 text-right">ACTIONS</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-neutral-200 dark:divide-[#202020] text-xs font-mono">
          {tasks.map((task) => {
            const isDone = task.status === "DONE";
            const overdue = isOverdue(task.dueDate) && !isDone;
            const dueToday = isDueToday(task.dueDate) && !isDone;

            return (
              <tr
                key={task.id}
                className="hover:bg-neutral-50 dark:hover:bg-[#181818] transition-colors"
              >
                {/* Complete checkbox */}
                <td className="py-2.5 px-3 text-center">
                  <button
                    onClick={() =>
                      onStatusChange(task.id, isDone ? "TODO" : "DONE")
                    }
                    title={isDone ? "Mark as TODO" : "Mark as DONE"}
                    className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                  >
                    {isDone ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    ) : (
                      <Circle className="w-4 h-4" />
                    )}
                  </button>
                </td>

                {/* Title & Description */}
                <td className="py-2.5 px-3">
                  <span
                    className={`font-semibold text-neutral-900 dark:text-neutral-100 block ${
                      isDone ? "line-through text-neutral-400 dark:text-neutral-500" : ""
                    }`}
                  >
                    {task.title}
                  </span>
                  {task.description && (
                    <span className="text-[11px] text-neutral-500 block truncate max-w-md">
                      {task.description}
                    </span>
                  )}
                </td>

                {/* Status */}
                <td className="py-2.5 px-3">
                  <StatusBadge status={task.status} />
                </td>

                {/* Priority */}
                <td className="py-2.5 px-3">
                  <PriorityBadge priority={task.priority} />
                </td>

                {/* Due Date */}
                <td className="py-2.5 px-3">
                  <div className="flex items-center space-x-1.5">
                    <Calendar className="w-3 h-3 text-neutral-400" />
                    <span
                      className={
                        overdue
                          ? "text-red-600 dark:text-red-400 font-bold"
                          : dueToday
                          ? "text-amber-600 dark:text-amber-400 font-bold"
                          : "text-neutral-600 dark:text-neutral-400"
                      }
                    >
                      {formatDate(task.dueDate)}
                    </span>
                  </div>
                </td>

                {/* Tags */}
                <td className="py-2.5 px-3">
                  <div className="flex flex-wrap gap-1">
                    {task.tags?.map((t) => (
                      <span
                        key={t}
                        className="px-1 text-[10px] border border-neutral-300 dark:border-[#2e2e2e] bg-neutral-100 dark:bg-[#1a1a1a] text-neutral-600 dark:text-neutral-400"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </td>

                {/* Actions */}
                <td className="py-2.5 px-3 text-right">
                  <div className="flex items-center justify-end space-x-1">
                    <button
                      onClick={() => onEdit(task)}
                      title="Edit task"
                      className="p-1 text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-[#222222]"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => onDelete(task.id)}
                      title="Delete task"
                      className="p-1 text-neutral-500 hover:text-red-600 dark:text-neutral-400 dark:hover:text-red-400 hover:bg-neutral-100 dark:hover:bg-[#222222]"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
