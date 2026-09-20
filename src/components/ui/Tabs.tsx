import React from "react";
import { cn } from "@/lib/utils";

export interface TabItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  count?: number;
}

export interface TabsProps {
  tabs: TabItem[];
  activeTab: string;
  onChange: (id: string) => void;
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab,
  onChange,
  className,
}) => {
  return (
    <div
      role="tablist"
      className={cn(
        "inline-flex border border-neutral-300 dark:border-[#262626] bg-neutral-100 dark:bg-[#141414] p-0.5 rounded-none",
        className
      )}
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(tab.id)}
            className={cn(
              "flex items-center space-x-2 px-3 py-1.5 font-mono text-xs uppercase tracking-wider font-medium transition-all rounded-none border border-transparent select-none",
              isActive
                ? "bg-white text-neutral-900 border-neutral-300 shadow-sm dark:bg-[#202020] dark:text-neutral-100 dark:border-[#383838] font-bold"
                : "text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200 hover:bg-neutral-200/50 dark:hover:bg-[#1a1a1a]"
            )}
          >
            {tab.icon && <span className="w-3.5 h-3.5">{tab.icon}</span>}
            <span>{tab.label}</span>
            {tab.count !== undefined && (
              <span
                className={cn(
                  "px-1 text-[10px] font-mono border",
                  isActive
                    ? "bg-neutral-100 text-neutral-800 border-neutral-300 dark:bg-[#2a2a2a] dark:text-neutral-200 dark:border-[#404040]"
                    : "bg-neutral-200 text-neutral-600 border-neutral-300 dark:bg-[#161616] dark:text-neutral-500 dark:border-[#262626]"
                )}
              >
                {tab.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};
