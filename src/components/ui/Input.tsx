import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", label, error, id, ...props }, ref) => {
    return (
      <div className="w-full space-y-1">
        {label && (
          <label
            htmlFor={id}
            className="block font-mono text-[11px] uppercase tracking-wider text-neutral-600 dark:text-neutral-400 font-semibold"
          >
            {label}
          </label>
        )}
        <input
          type={type}
          id={id}
          ref={ref}
          className={cn(
            "flex h-9 w-full rounded-none border border-neutral-300 bg-white px-3 py-1 text-xs text-neutral-900 placeholder:text-neutral-400 transition-colors focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 dark:border-[#262626] dark:bg-[#141414] dark:text-neutral-100 dark:placeholder:text-neutral-600 dark:focus:border-neutral-100 dark:focus:ring-neutral-100 disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-red-500 focus:border-red-500 focus:ring-red-500 dark:border-red-700",
            className
          )}
          {...props}
        />
        {error && (
          <p className="font-mono text-[11px] text-red-500 dark:text-red-400">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
