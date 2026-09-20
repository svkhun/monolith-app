"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, X, ArrowRight, PlayCircle, Plus } from "lucide-react";

interface NotificationBannerProps {
  storageKey: string;
  message: string;
  actionText?: string;
  actionHref?: string;
  onActionClick?: () => void;
  secondaryText?: string;
  secondaryHref?: string;
}

export const NotificationBanner: React.FC<NotificationBannerProps> = ({
  storageKey,
  message,
  actionText,
  actionHref,
  onActionClick,
  secondaryText,
  secondaryHref,
}) => {
  const [isDismissed, setIsDismissed] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem(`monolith_banner_${storageKey}`) === "true";
    }
    return false;
  });

  if (isDismissed) return null;

  const handleDismiss = () => {
    setIsDismissed(true);
    if (typeof window !== "undefined") {
      localStorage.setItem(`monolith_banner_${storageKey}`, "true");
    }
  };

  return (
    <aside
      aria-label="Workspace notification"
      className="border border-neutral-300 dark:border-[#2b2b2b] bg-neutral-100/90 dark:bg-[#141414]/90 px-4 py-2.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 transition-all text-xs font-mono select-none"
    >
      <div className="flex items-center space-x-2.5 min-w-0">
        <div className="p-1 bg-neutral-200 dark:bg-[#202020] border border-neutral-300 dark:border-[#333333] shrink-0">
          <Mail className="w-3.5 h-3.5 text-neutral-700 dark:text-neutral-300" />
        </div>
        <span className="text-neutral-800 dark:text-neutral-200 truncate">
          {message}
        </span>
      </div>

      <div className="flex items-center space-x-3 shrink-0 self-end sm:self-auto">
        {actionHref && actionText && (
          <Link
            href={actionHref}
            className="font-bold underline text-neutral-900 dark:text-white hover:opacity-80 flex items-center gap-1"
          >
            <span>{actionText}</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        )}

        {onActionClick && actionText && (
          <button
            onClick={onActionClick}
            className="font-bold underline text-neutral-900 dark:text-white hover:opacity-80 flex items-center gap-1"
          >
            <span>{actionText}</span>
            <Plus className="w-3 h-3" />
          </button>
        )}

        {secondaryHref && secondaryText && (
          <Link
            href={secondaryHref}
            className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white underline flex items-center gap-1"
          >
            <span>{secondaryText}</span>
          </Link>
        )}

        <button
          onClick={handleDismiss}
          className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white p-1 ml-1"
          title="Dismiss notification"
          aria-label="Dismiss notification"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
};
