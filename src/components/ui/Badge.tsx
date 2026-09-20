import React from "react";
import { cn } from "@/lib/utils";
import { Priority, TaskStatus } from "@/types";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "neutral" | "low" | "medium" | "high" | "urgent" | "todo" | "in_progress" | "done";
  size?: "sm" | "md";
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = "default",
  size = "sm",
  children,
  ...props
}) => {
  const base =
    "inline-flex items-center font-mono font-semibold uppercase tracking-wider rounded-none select-none border";

  const sizes = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-2.5 py-1 text-xs",
  };

  const variants = {
    default:
      "bg-neutral-100 text-neutral-800 border-neutral-300 dark:bg-[#1f1f1f] dark:text-neutral-300 dark:border-[#333333]",
    neutral:
      "bg-neutral-50 text-neutral-600 border-neutral-200 dark:bg-[#141414] dark:text-neutral-400 dark:border-[#262626]",
    low:
      "bg-neutral-100 text-neutral-700 border-neutral-300 dark:bg-neutral-900 dark:text-neutral-400 dark:border-neutral-800",
    medium:
      "bg-blue-50 text-blue-800 border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-900/60",
    high:
      "bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-900/60",
    urgent:
      "bg-red-50 text-red-800 border-red-200 dark:bg-red-950/50 dark:text-red-300 dark:border-red-900/80 font-bold",
    todo:
      "bg-neutral-100 text-neutral-800 border-neutral-300 dark:bg-[#1a1a1a] dark:text-neutral-300 dark:border-[#2b2b2b]",
    in_progress:
      "bg-sky-50 text-sky-800 border-sky-200 dark:bg-sky-950/40 dark:text-sky-300 dark:border-sky-900/70",
    done:
      "bg-emerald-50 text-emerald-800 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-900/70",
  };

  return (
    <span
      className={cn(base, sizes[size], variants[variant], className)}
      {...props}
    >
      {children}
    </span>
  );
};

export const PriorityBadge: React.FC<{ priority: Priority; className?: string }> = ({
  priority,
  className,
}) => {
  const map: Record<Priority, BadgeProps["variant"]> = {
    LOW: "low",
    MEDIUM: "medium",
    HIGH: "high",
    URGENT: "urgent",
  };
  return (
    <Badge variant={map[priority]} className={className}>
      {priority}
    </Badge>
  );
};

export const StatusBadge: React.FC<{ status: TaskStatus; className?: string }> = ({
  status,
  className,
}) => {
  const map: Record<TaskStatus, { variant: BadgeProps["variant"]; label: string }> = {
    TODO: { variant: "todo", label: "TO DO" },
    IN_PROGRESS: { variant: "in_progress", label: "IN PROGRESS" },
    DONE: { variant: "done", label: "DONE" },
  };
  return (
    <Badge variant={map[status].variant} className={className}>
      {map[status].label}
    </Badge>
  );
};
