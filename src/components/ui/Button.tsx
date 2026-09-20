import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "danger" | "ghost";
  size?: "sm" | "md" | "lg" | "icon";
}

export function buttonVariants({
  variant = "secondary",
  size = "md",
  className = "",
}: {
  variant?: "primary" | "secondary" | "outline" | "danger" | "ghost";
  size?: "sm" | "md" | "lg" | "icon";
  className?: string;
} = {}) {
  const baseStyles =
    "inline-flex items-center justify-center font-mono uppercase tracking-wider font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#BD682C] disabled:opacity-50 disabled:pointer-events-none rounded-none select-none cursor-pointer";

  const variants = {
    primary:
      "bg-[#26201A] text-[#FBF8F3] hover:bg-[#3B322B] border border-[#26201A] dark:bg-[#EFE8DC] dark:text-[#161311] dark:hover:bg-[#DDD4C5] dark:border-[#EFE8DC] shadow-sm",
    secondary:
      "bg-[#F3EDE4] text-[#26201A] hover:bg-[#EBE3D7] border border-[#DDD4C5] dark:bg-[#201C18] dark:text-[#EFE8DC] dark:hover:bg-[#2A2520] dark:border-[#3B332B]",
    outline:
      "bg-transparent text-[#26201A] hover:bg-[#F3EDE4] border border-[#DDD4C5] dark:text-[#EFE8DC] dark:hover:bg-[#201C18] dark:border-[#3B332B]",
    danger:
      "bg-[#B5432D] text-white hover:bg-[#9E3924] border border-[#B5432D] dark:bg-[#7D2918]/70 dark:text-[#FFC4B8] dark:border-[#A83822] dark:hover:bg-[#8F301D]/80",
    ghost:
      "bg-transparent text-[#6B5F54] hover:bg-[#F3EDE4] border border-transparent dark:text-[#9C9082] dark:hover:bg-[#201C18] dark:hover:text-[#EFE8DC]",
  };

  const sizes = {
    sm: "h-8 px-3 text-xs",
    md: "h-10 px-4 text-sm",
    lg: "h-12 px-6 text-base",
    icon: "h-10 w-10 p-0",
  };

  return cn(baseStyles, variants[variant], sizes[size], className);
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "secondary",
      size = "md",
      type = "button",
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={buttonVariants({ variant, size, className })}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
