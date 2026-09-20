import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "danger" | "ghost";
  size?: "sm" | "md" | "lg" | "icon";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "secondary", size = "md", children, disabled, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-mono text-xs uppercase tracking-wider font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-500 disabled:opacity-50 disabled:pointer-events-none rounded-none select-none";

    const variants = {
      primary:
        "bg-neutral-900 text-neutral-50 hover:bg-neutral-800 border border-neutral-900 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200 dark:border-neutral-100",
      secondary:
        "bg-neutral-100 text-neutral-900 hover:bg-neutral-200 border border-neutral-300 dark:bg-[#141414] dark:text-neutral-200 dark:hover:bg-[#1f1f1f] dark:border-[#262626]",
      outline:
        "bg-transparent text-neutral-800 hover:bg-neutral-100 border border-neutral-300 dark:text-neutral-300 dark:hover:bg-[#141414] dark:border-[#262626]",
      danger:
        "bg-red-600 text-white hover:bg-red-700 border border-red-700 dark:bg-red-950/50 dark:text-red-300 dark:border-red-900 dark:hover:bg-red-900/60",
      ghost:
        "bg-transparent text-neutral-700 hover:bg-neutral-100 border border-transparent dark:text-neutral-400 dark:hover:bg-[#141414] dark:hover:text-neutral-200",
    };

    const sizes = {
      sm: "h-7 px-2.5 text-[11px]",
      md: "h-9 px-3.5 text-xs",
      lg: "h-11 px-5 text-sm",
      icon: "h-9 w-9 p-0",
    };

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
