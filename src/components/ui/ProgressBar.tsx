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
  colorVariant = "accent",
}) => {
  const percentage = Math.min(Math.max(Math.round((value / max) * 100), 0), 100);

  const colors = {
    accent: "bg-[#BD682C]", // Warm Terracotta Cognac
    emerald: "bg-[#5C754E]", // Classic Sage Olive
    amber: "bg-[#D48B38]", // Warm Brass
  };

  return (
    <div className={cn("w-full space-y-1.5", className)}>
      {(label || showPercentage) && (
        <div className="flex justify-between items-center text-xs font-mono font-medium">
          {label && (
            <span className="text-[#786C60] dark:text-[#9C9082] uppercase tracking-wider">
              {label}
            </span>
          )}
          {showPercentage && (
            <span className="text-[#26201A] dark:text-[#EFE8DC] font-bold">
              {percentage}%
            </span>
          )}
        </div>
      )}
      <div className="w-full h-2 bg-[#EBE3D7] dark:bg-[#201C18] border border-[#DDD4C5] dark:border-[#3B332B] rounded-none p-0 overflow-hidden">
        <div
          className={cn("h-full transition-all duration-300 rounded-none", colors[colorVariant])}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
