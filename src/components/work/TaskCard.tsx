"use client";

import React from "react";
import { Clock, Calendar, CheckSquare, MoreHorizontal, ArrowRight, Trash2, Edit3, AlertCircle } from "lucide-react";
import { TaskItem, TaskStatus } from "@/types";
import { PriorityBadge, StatusBadge, Badge } from "@/components/ui/Badge";
import { formatDate, isDueToday, isOverdue } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

interface TaskCardProps {
  task: TaskItem;
  onEdit: (task: TaskItem) => void;
  onDelete: (id: string) => void;
  onStatusChange: (id: string, status: TaskStatus) => void;
}

export const TaskCard: React.FC<TaskCardProps> = ({
  task,
  onEdit,
  onDelete,
  onStatusChange,
}) => {
  const overdue = isOverdue(task.dueDate) && task.status !== "DONE";
  const dueToday = isDueToday(task.dueDate) && task.status !== "DONE";

  const nextStatus: Record<TaskStatus, TaskStatus> = {
    TODO: "IN_PROGRESS",
    IN_PROGRESS: "DONE",
    DONE: "TODO",
  };

  return (
    <div className="group relative border border-neutral-300 dark:border-[#262626] bg-white dark:bg-[#141414] p-3.5 hover:border-neutral-500 dark:hover:border-[#444444] transition-colors">
      {/* Top row: Priority & Status action */}
      <div className="flex items-center justify-between gap-2 mb-2">
        <div className="flex items-center gap-1.5 flex-wrap">
          <PriorityBadge priority={task.priority} />
          {overdue && (
            <span className="flex items-center gap-1 border border-red-600 bg-red-50 dark:bg-red-950/60 px-1.5 py-0.5 text-[10px] font-mono font-bold text-red-600 dark:text-red-300">
              <AlertCircle className="w-3 h-3" />
              OVERDUE
            </span>
          )}
          {dueToday && (
            <span className="flex items-center gap-1 border border-amber-600 bg-amber-50 dark:bg-amber-950/60 px-1.5 py-0.5 text-[10px] font-mono font-bold text-amber-600 dark:text-amber-300">
              <Clock className="w-3 h-3" />
              TODAY
            </span>
          )}
        </div>

        {/* Quick action buttons */}
        <div className="flex items-center gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
          <button
            onClick={() => onEdit(task)}
            title="Edit task"
            className="p-1 text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-[#202020] border border-transparent hover:border-neutral-300 dark:hover:border-[#333333]"
          >
            <Edit3 className="w-3 h-3" />
          </button>
          <button
            onClick={() => onDelete(task.id)}
            title="Delete task"
            className="p-1 text-neutral-500 hover:text-red-600 dark:text-neutral-400 dark:hover:text-red-400 hover:bg-neutral-100 dark:hover:bg-[#202020] border border-transparent hover:border-neutral-300 dark:hover:border-[#333333]"
          >
            <Trash2 className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Title & Description */}
      <h4 className="font-mono text-xs font-bold text-neutral-900 dark:text-neutral-100 tracking-tight leading-snug">
        {task.title}
      </h4>
      {task.description && (
        <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400 line-clamp-2 leading-relaxed">
          {task.description}
        </p>
      )}

      {/* Tags */}
      {task.tags && task.tags.length > 0 && (
        <div className="mt-2.5 flex flex-wrap gap-1">
          {task.tags.map((tag) => (
            <span
              key={tag}
              className="border border-neutral-300 dark:border-[#2b2b2b] bg-neutral-100 dark:bg-[#1a1a1a] px-1.5 py-0.2 text-[10px] font-mono text-neutral-600 dark:text-neutral-400"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Bottom Bar: Due date & status stepper */}
      <div className="mt-3 pt-2.5 border-t border-neutral-200 dark:border-[#202020] flex items-center justify-between text-[11px] font-mono">
        <div className="flex items-center gap-1.5 text-neutral-500">
          <Calendar className="w-3 h-3" />
          <span>{formatDate(task.dueDate)}</span>
        </div>

        <button
          onClick={() => onStatusChange(task.id, nextStatus[task.status])}
          className="flex items-center gap-1 px-2 py-0.5 border border-neutral-300 dark:border-[#2f2f2f] hover:border-neutral-500 dark:hover:border-[#4a4a4a] text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-[#1c1c1c] transition-colors"
          title={`Advance to ${nextStatus[task.status]}`}
        >
          <span>MOVE</span>
          <ArrowRight className="w-2.5 h-2.5" />
        </button>
      </div>
    </div>
  );
};
