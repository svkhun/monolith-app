import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  elevated?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, elevated = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-none border border-[#DDD4C5] bg-[#FBF8F3] text-[#26201A] transition-colors dark:border-[#3B332B] dark:bg-[#161311] dark:text-[#EFE8DC]",
          elevated && "bg-[#F3EDE4] dark:bg-[#201C18] shadow-sm",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 p-4 border-b border-[#DDD4C5] dark:border-[#3B332B]",
      className
    )}
    {...props}
  >
    {children}
  </div>
);

export const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  className,
  children,
  ...props
}) => (
  <h3
    className={cn(
      "font-mono text-sm font-semibold uppercase tracking-wider text-[#26201A] dark:text-[#EFE8DC]",
      className
    )}
    {...props}
  >
    {children}
  </h3>
);

export const CardDescription: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  className,
  children,
  ...props
}) => (
  <p
    className={cn(
      "text-xs text-[#786C60] dark:text-[#9C9082] font-sans",
      className
    )}
    {...props}
  >
    {children}
  </p>
);

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => <div className={cn("p-4", className)} {...props} />;

export const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => (
  <div
    className={cn(
      "flex items-center p-4 border-t border-[#DDD4C5] dark:border-[#3B332B]",
      className
    )}
    {...props}
  >
    {children}
  </div>
);
