import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, id, ...props }, ref) => {
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
        <textarea
          id={id}
          ref={ref}
          className={cn(
            "flex min-h-[90px] w-full rounded-none border border-[#DDD4C5] bg-[#FBF8F3] px-3.5 py-2.5 text-sm text-[#26201A] placeholder:text-[#9C9082] transition-colors focus:outline-none focus:border-[#BD682C] focus:ring-1 focus:ring-[#BD682C] dark:border-[#3B332B] dark:bg-[#161311] dark:text-[#EFE8DC] dark:placeholder:text-[#786C60] dark:focus:border-[#BD682C] dark:focus:ring-[#BD682C] disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-[#B5432D] focus:border-[#B5432D] focus:ring-[#B5432D] dark:border-[#B5432D]",
            className
          )}
          {...props}
        />
        {error && (
          <p className="font-mono text-xs text-[#B5432D]">{error}</p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
