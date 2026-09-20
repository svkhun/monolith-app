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
      "bg-[#F3EDE4] text-[#26201A] border-[#DDD4C5] dark:bg-[#201C18] dark:text-[#EFE8DC] dark:border-[#3B332B]",
    neutral:
      "bg-[#FBF8F3] text-[#786C60] border-[#DDD4C5] dark:bg-[#161311] dark:text-[#9C9082] dark:border-[#3B332B]",
    low:
      "bg-[#F3EDE4] text-[#786C60] border-[#DDD4C5] dark:bg-[#201C18] dark:text-[#9C9082] dark:border-[#3B332B]",
    medium:
      "bg-[#FDF3E3] text-[#A66E22] border-[#E8D1A7] dark:bg-[#332612]/50 dark:text-[#E8C07A] dark:border-[#57411E]",
    high:
      "bg-[#FCEDE3] text-[#B85C20] border-[#F2CBB2] dark:bg-[#361E10]/50 dark:text-[#F7A977] dark:border-[#5E3218]",
    urgent:
      "bg-[#FCE8E6] text-[#B53D31] border-[#F5BDB8] dark:bg-[#3D1412]/60 dark:text-[#FFA39E] dark:border-[#6B2420] font-bold",
    todo:
      "bg-[#F3EDE4] text-[#786C60] border-[#DDD4C5] dark:bg-[#201C18] dark:text-[#9C9082] dark:border-[#3B332B]",
    in_progress:
      "bg-[#FDF3E3] text-[#B87025] border-[#E8D1A7] dark:bg-[#332612]/50 dark:text-[#F0B86E] dark:border-[#57411E]",
    done:
      "bg-[#EEF5EB] text-[#4A7338] border-[#C8DEC1] dark:bg-[#1C2E17]/50 dark:text-[#A7D492] dark:border-[#325227]",
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
