"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Briefcase, GraduationCap, Layers, LogOut } from "lucide-react";
import { useSession, signOut } from "next-auth/react";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const { data: session } = useSession();

  const isWork = pathname.startsWith("/work");
  const isStudy = pathname.startsWith("/study");

  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-300 dark:border-[#262626] bg-white/90 dark:bg-[#0A0A0A]/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Brand & Monogram Logo */}
        <div className="flex items-center space-x-6">
          <Link
            href="/"
            className="group flex items-center space-x-2.5 select-none focus:outline-none"
          >
            <div className="flex h-7 w-7 items-center justify-center bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-mono text-xs font-black tracking-tighter">
              M
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-xs font-black tracking-widest uppercase text-neutral-900 dark:text-neutral-100">
                MONOLITH
              </span>
              <span className="text-[9px] font-mono tracking-wider text-neutral-500 uppercase -mt-0.5">
                ENGINEERING CORE
              </span>
            </div>
          </Link>

          {/* Mode Switcher Tabs */}
          <nav className="flex items-center border border-neutral-300 dark:border-[#262626] p-0.5 bg-neutral-100 dark:bg-[#141414]">
            <Link
              href="/work"
              className={cn(
                "flex items-center space-x-1.5 px-3 py-1 font-mono text-xs uppercase tracking-wider font-semibold transition-all select-none",
                isWork
                  ? "bg-white text-neutral-900 shadow-sm dark:bg-[#222222] dark:text-neutral-100 border border-neutral-300 dark:border-[#383838]"
                  : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 border border-transparent"
              )}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>WORK</span>
            </Link>

            <Link
              href="/study"
              className={cn(
                "flex items-center space-x-1.5 px-3 py-1 font-mono text-xs uppercase tracking-wider font-semibold transition-all select-none",
                isStudy
                  ? "bg-white text-neutral-900 shadow-sm dark:bg-[#222222] dark:text-neutral-100 border border-neutral-300 dark:border-[#383838]"
                  : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 border border-transparent"
              )}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>EXAM HUB</span>
            </Link>
          </nav>
        </div>

        {/* Right Controls: Theme Toggle & Session */}
        <div className="flex items-center space-x-3">
          <ThemeToggle />

          {session?.user ? (
            <div className="flex items-center space-x-2 pl-2 border-l border-neutral-300 dark:border-[#262626]">
              <div className="hidden sm:flex flex-col text-right">
                <span className="font-mono text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                  {session.user.name || "OPERATOR"}
                </span>
                <span className="font-mono text-[10px] text-neutral-500">
                  {session.user.email}
                </span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => signOut({ callbackUrl: "/login" })}
                title="Sign out"
                className="px-2"
              >
                <LogOut className="w-3.5 h-3.5" />
              </Button>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <Link href="/login">
                <Button variant="outline" size="sm">
                  SIGN IN
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
