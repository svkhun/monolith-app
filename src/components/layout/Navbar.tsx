"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Briefcase, GraduationCap, PlayCircle, LogOut } from "lucide-react";
import { useSession, signOut } from "next-auth/react";
import { ThemeToggle } from "./ThemeToggle";
import { NotificationCenter } from "./NotificationCenter";
import { LanguageToggle } from "./LanguageToggle";
import { useLanguage } from "./LanguageProvider";
import { Button, buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const { data: session } = useSession();
  const { t } = useLanguage();

  const isWork = pathname === "/work";
  const isStudy = pathname === "/study";
  const isDemo = pathname === "/demo";

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#DDD4C5] dark:border-[#3B332B] bg-[#FBF8F3]/95 dark:bg-[#161311]/95 backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Brand & Monogram Logo */}
        <div className="flex items-center space-x-5 sm:space-x-8">
          <Link
            href="/"
            className="group flex items-center space-x-3 select-none focus:outline-none"
          >
            <div className="flex h-8 w-8 items-center justify-center bg-[#26201A] text-[#FBF8F3] dark:bg-[#EFE8DC] dark:text-[#161311] font-mono text-sm font-black tracking-tighter border border-[#26201A] dark:border-[#EFE8DC]">
              M
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-sm font-black tracking-widest uppercase text-[#26201A] dark:text-[#EFE8DC]">
                MONOLITH
              </span>
              <span className="text-[10px] font-mono tracking-wider text-[#786C60] dark:text-[#9C9082] uppercase -mt-0.5">
                {t("home_brand_sub")}
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="flex items-center border border-[#DDD4C5] dark:border-[#3B332B] p-0.5 bg-[#F3EDE4] dark:bg-[#201C18]">
            <Link
              href="/work"
              prefetch={true}
              className={cn(
                "flex items-center space-x-2 px-3 py-1.5 font-mono text-xs uppercase tracking-wider font-semibold transition-all select-none",
                isWork
                  ? "bg-[#FBF8F3] text-[#26201A] shadow-sm dark:bg-[#2A2520] dark:text-[#EFE8DC] border border-[#DDD4C5] dark:border-[#54493E]"
                  : "text-[#786C60] dark:text-[#9C9082] hover:text-[#26201A] dark:hover:text-[#EFE8DC] border border-transparent"
              )}
            >
              <Briefcase className="w-4 h-4 text-[#BD682C]" />
              <span>{t("nav_work")}</span>
            </Link>

            <Link
              href="/study"
              prefetch={true}
              className={cn(
                "flex items-center space-x-2 px-3 py-1.5 font-mono text-xs uppercase tracking-wider font-semibold transition-all select-none",
                isStudy
                  ? "bg-[#FBF8F3] text-[#26201A] shadow-sm dark:bg-[#2A2520] dark:text-[#EFE8DC] border border-[#DDD4C5] dark:border-[#54493E]"
                  : "text-[#786C60] dark:text-[#9C9082] hover:text-[#26201A] dark:hover:text-[#EFE8DC] border border-transparent"
              )}
            >
              <GraduationCap className="w-4 h-4 text-[#BD682C]" />
              <span>{t("nav_study")}</span>
            </Link>

            <Link
              href="/demo"
              prefetch={true}
              className={cn(
                "flex items-center space-x-2 px-3 py-1.5 font-mono text-xs uppercase tracking-wider font-semibold transition-all select-none",
                isDemo
                  ? "bg-[#FBF8F3] text-[#26201A] shadow-sm dark:bg-[#2A2520] dark:text-[#EFE8DC] border border-[#DDD4C5] dark:border-[#54493E]"
                  : "text-[#786C60] dark:text-[#9C9082] hover:text-[#26201A] dark:hover:text-[#EFE8DC] border border-transparent"
              )}
            >
              <PlayCircle className="w-4 h-4 text-[#BD682C]" />
              <span>{t("nav_tutorial")}</span>
            </Link>
          </nav>
        </div>

        {/* Right Controls: Language Toggle, Notification Envelope, Theme Toggle & Session */}
        <div className="flex items-center space-x-2 sm:space-x-2.5">
          <LanguageToggle />
          <NotificationCenter />
          <ThemeToggle />

          {session?.user ? (
            <div className="flex items-center space-x-2 pl-3 border-l border-[#DDD4C5] dark:border-[#3B332B]">
              <div className="hidden sm:flex flex-col text-right">
                <span className="font-mono text-xs font-semibold text-[#26201A] dark:text-[#EFE8DC]">
                  {session.user.name || "OPERATOR"}
                </span>
                <span className="font-mono text-[11px] text-[#786C60] dark:text-[#9C9082]">
                  {session.user.email}
                </span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => signOut({ callbackUrl: "/login" })}
                title="Sign out"
                className="px-2.5 hover:bg-[#EBE3D7] dark:hover:bg-[#2A2520]"
              >
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <Link
                href="/login"
                prefetch={true}
                className={buttonVariants({
                  variant: "outline",
                  size: "sm",
                  className:
                    "border-[#DDD4C5] dark:border-[#3B332B] hover:bg-[#EBE3D7] dark:hover:bg-[#2A2520]",
                })}
              >
                {t("nav_signin")}
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
