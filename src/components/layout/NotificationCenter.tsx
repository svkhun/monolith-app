"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Mail, X, ArrowRight, Plus, PlayCircle, Check, Info } from "lucide-react";
import { Button } from "@/components/ui/Button";

export interface SystemNotification {
  id: string;
  title: string;
  message: string;
  actionLabel?: string;
  actionHref?: string;
  onActionClick?: () => void;
  timestamp: string;
  read: boolean;
}

export const NotificationCenter: React.FC<{
  onRegisterExamClick?: () => void;
  onNewTaskClick?: () => void;
}> = ({ onRegisterExamClick, onNewTaskClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<SystemNotification[]>([
    {
      id: "notif_welcome",
      title: "WORKSPACE READY",
      message:
        "Your workspace is ready. You can register university exams, schedule work tasks, or explore the pre-loaded sandbox anytime.",
      actionLabel: "EXPLORE DEMO",
      actionHref: "/demo",
      timestamp: "NOW",
      read: false,
    },
  ]);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const dismissNotification = (id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Envelope Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex items-center justify-center h-9 px-2.5 border border-neutral-300 dark:border-[#262626] bg-neutral-50 dark:bg-[#141414] hover:bg-neutral-100 dark:hover:bg-[#1f1f1f] text-neutral-800 dark:text-neutral-200 transition-colors rounded-none focus:outline-none"
        title="System notifications"
        aria-label="System notifications"
      >
        <Mail className="w-4 h-4" />
        {unreadCount > 0 && (
          <span className="ml-1.5 px-1 py-0.2 font-mono text-[10px] font-bold bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 border border-neutral-900 dark:border-white">
            {unreadCount}
          </span>
        )}
      </button>

      {/* Popover Dropdown Panel */}
      {isOpen && (
        <div className="absolute right-0 mt-1 w-80 sm:w-96 border border-neutral-300 dark:border-[#262626] bg-white dark:bg-[#141414] shadow-2xl z-50 rounded-none animate-in fade-in-50">
          {/* Header */}
          <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-neutral-200 dark:border-[#262626] bg-neutral-50 dark:bg-[#181818]">
            <div className="flex items-center space-x-2">
              <Mail className="w-3.5 h-3.5 text-neutral-500" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-neutral-100">
                SYSTEM ADVISORY
              </span>
            </div>
            {notifications.length > 0 && (
              <button
                onClick={markAllAsRead}
                className="font-mono text-[10px] uppercase text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
              >
                MARK ALL READ
              </button>
            )}
          </div>

          {/* List of notifications */}
          <div className="max-h-72 overflow-y-auto divide-y divide-neutral-200 dark:divide-[#202020]">
            {notifications.length === 0 ? (
              <div className="p-6 text-center font-mono text-xs text-neutral-500">
                NO NEW NOTIFICATIONS
              </div>
            ) : (
              notifications.map((n) => (
                <div
                  key={n.id}
                  className={`p-3.5 space-y-2 transition-colors ${
                    n.read
                      ? "bg-white dark:bg-[#141414] opacity-75"
                      : "bg-neutral-50 dark:bg-[#181818]"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-mono text-xs font-bold text-neutral-900 dark:text-neutral-100">
                      {n.title}
                    </h4>
                    <button
                      onClick={() => dismissNotification(n.id)}
                      className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white p-0.5"
                      title="Dismiss notification"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <p className="font-mono text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {n.message}
                  </p>

                  <div className="flex items-center justify-between pt-1">
                    <span className="font-mono text-[10px] text-neutral-400">
                      {n.timestamp}
                    </span>
                    {n.actionHref ? (
                      <Link
                        href={n.actionHref}
                        onClick={() => setIsOpen(false)}
                        className="inline-flex items-center gap-1 font-mono text-xs font-bold underline text-neutral-900 dark:text-white hover:opacity-80"
                      >
                        <span>{n.actionLabel || "OPEN"}</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    ) : n.onActionClick ? (
                      <button
                        onClick={() => {
                          n.onActionClick?.();
                          setIsOpen(false);
                        }}
                        className="inline-flex items-center gap-1 font-mono text-xs font-bold underline text-neutral-900 dark:text-white hover:opacity-80"
                      >
                        <span>{n.actionLabel || "VIEW"}</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    ) : null}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};
