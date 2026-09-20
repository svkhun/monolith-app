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
            className="block font-mono text-xs uppercase tracking-wider text-neutral-700 dark:text-neutral-300 font-semibold"
          >
            {label}
          </label>
        )}
        <select
          id={id}
          ref={ref}
          className={cn(
            "flex h-10 w-full rounded-none border border-neutral-300 bg-white px-3.5 py-2 text-sm text-neutral-900 transition-colors focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 dark:border-[#2b2b2b] dark:bg-[#141414] dark:text-neutral-100 dark:focus:border-neutral-100 dark:focus:ring-neutral-100 disabled:cursor-not-allowed disabled:opacity-50 appearance-none cursor-pointer",
            error && "border-red-500 focus:border-red-500 focus:ring-red-500 dark:border-red-700",
            className
          )}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {error && (
          <p className="font-mono text-xs text-red-600 dark:text-red-400">{error}</p>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";
