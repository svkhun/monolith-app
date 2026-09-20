import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { label: string; value: string }[];
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, id, options, ...props }, ref) => {
    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label
            htmlFor={id}
            className="block font-mono text-xs uppercase tracking-wider text-[#786C60] dark:text-[#9C9082] font-semibold"
          >
            {label}
          </label>
        )}
        <select
          id={id}
          ref={ref}
          className={cn(
            "flex h-10 w-full rounded-none border border-[#DDD4C5] bg-[#FBF8F3] px-3.5 py-2 text-sm text-[#26201A] transition-colors focus:outline-none focus:border-[#BD682C] focus:ring-1 focus:ring-[#BD682C] dark:border-[#3B332B] dark:bg-[#161311] dark:text-[#EFE8DC] dark:focus:border-[#BD682C] dark:focus:ring-[#BD682C] disabled:cursor-not-allowed disabled:opacity-50 appearance-none cursor-pointer",
            error && "border-[#B5432D] focus:border-[#B5432D] focus:ring-[#B5432D] dark:border-[#B5432D]",
            className
          )}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-[#FBF8F3] text-[#26201A] dark:bg-[#161311] dark:text-[#EFE8DC]">
              {opt.label}
            </option>
          ))}
        </select>
        {error && (
          <p className="font-mono text-xs text-[#B5432D]">{error}</p>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";
