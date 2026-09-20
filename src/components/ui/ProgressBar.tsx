import React from "react";
import { cn } from "@/lib/utils";

export interface ProgressBarProps {
  value: number; // 0 to 100
  max?: number;
  label?: string;
  showPercentage?: boolean;
  className?: string;
  colorVariant?: "accent" | "emerald" | "amber";
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max = 100,
  label,
  showPercentage = true,
  className,
  colorVariant = "emerald",
}) => {
  const percentage = Math.min(Math.max(Math.round((value / max) * 100), 0), 100);

  const colors = {
    accent: "bg-neutral-900 dark:bg-neutral-100",
    emerald: "bg-emerald-600 dark:bg-emerald-500",
    amber: "bg-amber-600 dark:bg-amber-500",
  };

  return (
    <div className={cn("w-full space-y-1.5", className)}>
      {(label || showPercentage) && (
        <div className="flex justify-between items-center text-[11px] font-mono font-medium">
          {label && (
            <span className="text-neutral-600 dark:text-neutral-400 uppercase tracking-wider">
              {label}
            </span>
          )}
          {showPercentage && (
            <span className="text-neutral-900 dark:text-neutral-200 font-bold">
              {percentage}%
            </span>
          )}
        </div>
      )}
      <div className="w-full h-2 bg-neutral-200 dark:bg-[#202020] border border-neutral-300 dark:border-[#2b2b2b] rounded-none p-0 overflow-hidden">
        <div
          className={cn("h-full transition-all duration-300 rounded-none", colors[colorVariant])}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
