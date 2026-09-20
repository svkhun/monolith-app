"use client";

import React from "react";
import Link from "next/link";
import {
  Briefcase,
  GraduationCap,
  PlayCircle,
  ArrowRight,
  Clock,
  LayoutGrid,
  Zap,
} from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/Button";
import { useLanguage } from "@/components/layout/LanguageProvider";

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <div className="space-y-12 sm:space-y-20 py-4 sm:py-8 animate-arch-in">
      {/* 1. HERO SECTION - LARGE MONOLITH TITLE, REFINED SUBTITLE QUOTE */}
      <section className="relative border border-[#DDD4C5] dark:border-[#3B332B] bg-[#F3EDE4] dark:bg-[#201C18] p-8 sm:p-16 text-center shadow-sm">
        {/* Subtle classic corner decorative accents */}
        <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-[#A89B8C] dark:border-[#54493E]" />
        <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-[#A89B8C] dark:border-[#54493E]" />
        <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-[#A89B8C] dark:border-[#54493E]" />
        <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-[#A89B8C] dark:border-[#54493E]" />

        <div className="max-w-3xl mx-auto space-y-6">
          {/* Classic Monolith Monogram */}
          <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-[#26201A] text-[#FBF8F3] dark:bg-[#EFE8DC] dark:text-[#161311] font-mono text-2xl font-black border border-[#26201A] dark:border-[#EFE8DC] shadow-sm mx-auto">
            M
          </div>

          <div className="space-y-3">
            {/* MONOLITH IS THE LARGE MAIN TITLE */}
            <h1 className="font-mono text-4xl sm:text-6xl md:text-7xl font-black tracking-[0.2em] uppercase text-[#26201A] dark:text-[#EFE8DC]">
              MONOLITH
            </h1>

            {/* Architectural accent divider */}
            <div className="w-16 h-[1.5px] bg-[#BD682C] mx-auto my-3" />

            {/* QUOTE IS THE REFINED SMALLER SUBTITLE */}
            <p className="font-mono text-sm sm:text-base font-bold tracking-[0.15em] uppercase text-[#786C60] dark:text-[#9C9082]">
              {t("home_quote_1")} {t("home_quote_2")}
            </p>
          </div>

          {/* Direct Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/work"
              prefetch={true}
              className={buttonVariants({
                variant: "primary",
                size: "lg",
                className:
                  "w-full sm:w-auto flex items-center justify-center gap-2 px-8 bg-[#26201A] text-[#FBF8F3] hover:bg-[#3B322B] dark:bg-[#EFE8DC] dark:text-[#161311] dark:hover:bg-[#DDD4C5]",
              })}
            >
              <span>{t("home_cta_open")}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/demo"
              prefetch={true}
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className:
                  "w-full sm:w-auto flex items-center justify-center gap-2 px-6 border-[#DDD4C5] dark:border-[#3B332B] hover:bg-[#EBE3D7] dark:hover:bg-[#2A2520]",
              })}
            >
              <PlayCircle className="w-4 h-4 text-[#BD682C]" />
              <span>{t("home_cta_demo")}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. SECTION I: WORK MANAGEMENT */}
      <section className="border border-[#DDD4C5] dark:border-[#3B332B] bg-[#FBF8F3] dark:bg-[#161311] p-6 sm:p-10 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#DDD4C5] dark:border-[#3B332B] pb-5">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <Briefcase className="w-4 h-4 text-[#BD682C]" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#786C60] dark:text-[#9C9082]">
                {t("home_sec1_tag")}
              </span>
            </div>
            <h3 className="font-mono text-xl sm:text-2xl font-bold uppercase text-[#26201A] dark:text-[#EFE8DC]">
              {t("home_sec1_title")}
            </h3>
          </div>

          <Link
            href="/work"
            prefetch={true}
            className={buttonVariants({
              variant: "outline",
              size: "sm",
              className: "flex items-center gap-1.5 border-[#DDD4C5] dark:border-[#3B332B]",
            })}
          >
            <span>{t("home_sec1_btn")}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="border border-[#DDD4C5] dark:border-[#3B332B] bg-[#F3EDE4] dark:bg-[#201C18] p-5 space-y-2">
            <div className="flex items-center space-x-2 text-[#26201A] dark:text-[#EFE8DC] font-mono font-bold text-sm">
              <LayoutGrid className="w-4 h-4 text-[#BD682C]" />
              <span>{t("home_sec1_card1_title")}</span>
            </div>
            <p className="font-mono text-xs text-[#786C60] dark:text-[#9C9082] leading-relaxed">
              {t("home_sec1_card1_desc")}
            </p>
          </div>

          <div className="border border-[#DDD4C5] dark:border-[#3B332B] bg-[#F3EDE4] dark:bg-[#201C18] p-5 space-y-2">
            <div className="flex items-center space-x-2 text-[#26201A] dark:text-[#EFE8DC] font-mono font-bold text-sm">
              <Clock className="w-4 h-4 text-[#BD682C]" />
              <span>{t("home_sec1_card2_title")}</span>
            </div>
            <p className="font-mono text-xs text-[#786C60] dark:text-[#9C9082] leading-relaxed">
              {t("home_sec1_card2_desc")}
            </p>
          </div>

          <div className="border border-[#DDD4C5] dark:border-[#3B332B] bg-[#F3EDE4] dark:bg-[#201C18] p-5 space-y-2">
            <div className="flex items-center space-x-2 text-[#26201A] dark:text-[#EFE8DC] font-mono font-bold text-sm">
              <Zap className="w-4 h-4 text-[#BD682C]" />
              <span>{t("home_sec1_card3_title")}</span>
            </div>
            <p className="font-mono text-xs text-[#786C60] dark:text-[#9C9082] leading-relaxed">
              {t("home_sec1_card3_desc")}
            </p>
          </div>
        </div>
      </section>

      {/* 3. SECTION II: UNIVERSITY EXAM HUB */}
      <section className="border border-[#DDD4C5] dark:border-[#3B332B] bg-[#FBF8F3] dark:bg-[#161311] p-6 sm:p-10 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#DDD4C5] dark:border-[#3B332B] pb-5">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <GraduationCap className="w-4 h-4 text-[#BD682C]" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#786C60] dark:text-[#9C9082]">
                {t("home_sec2_tag")}
              </span>
            </div>
            <h3 className="font-mono text-xl sm:text-2xl font-bold uppercase text-[#26201A] dark:text-[#EFE8DC]">
              {t("home_sec2_title")}
            </h3>
          </div>

          <Link
            href="/study"
            prefetch={true}
            className={buttonVariants({
              variant: "outline",
              size: "sm",
              className: "flex items-center gap-1.5 border-[#DDD4C5] dark:border-[#3B332B]",
            })}
          >
            <span>{t("home_sec2_btn")}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="border border-[#DDD4C5] dark:border-[#3B332B] bg-[#F3EDE4] dark:bg-[#201C18] p-5 space-y-2">
            <span className="font-mono text-[11px] text-[#BD682C] font-bold uppercase block">
              {t("home_sec2_card1_tag")}
            </span>
            <h4 className="font-mono font-bold text-sm text-[#26201A] dark:text-[#EFE8DC]">
              {t("home_sec2_card1_title")}
            </h4>
            <p className="font-mono text-xs text-[#786C60] dark:text-[#9C9082] leading-relaxed">
              {t("home_sec2_card1_desc")}
            </p>
          </div>

          <div className="border border-[#DDD4C5] dark:border-[#3B332B] bg-[#F3EDE4] dark:bg-[#201C18] p-5 space-y-2">
            <span className="font-mono text-[11px] text-[#BD682C] font-bold uppercase block">
              {t("home_sec2_card2_tag")}
            </span>
            <h4 className="font-mono font-bold text-sm text-[#26201A] dark:text-[#EFE8DC]">
              {t("home_sec2_card2_title")}
            </h4>
            <p className="font-mono text-xs text-[#786C60] dark:text-[#9C9082] leading-relaxed">
              {t("home_sec2_card2_desc")}
            </p>
          </div>

          <div className="border border-[#DDD4C5] dark:border-[#3B332B] bg-[#F3EDE4] dark:bg-[#201C18] p-5 space-y-2">
            <span className="font-mono text-[11px] text-[#BD682C] font-bold uppercase block">
              {t("home_sec2_card3_tag")}
            </span>
            <h4 className="font-mono font-bold text-sm text-[#26201A] dark:text-[#EFE8DC]">
              {t("home_sec2_card3_title")}
            </h4>
            <p className="font-mono text-xs text-[#786C60] dark:text-[#9C9082] leading-relaxed">
              {t("home_sec2_card3_desc")}
            </p>
          </div>

          <div className="border border-[#DDD4C5] dark:border-[#3B332B] bg-[#F3EDE4] dark:bg-[#201C18] p-5 space-y-2">
            <span className="font-mono text-[11px] text-[#BD682C] font-bold uppercase block">
              {t("home_sec2_card4_tag")}
            </span>
            <h4 className="font-mono font-bold text-sm text-[#26201A] dark:text-[#EFE8DC]">
              {t("home_sec2_card4_title")}
            </h4>
            <p className="font-mono text-xs text-[#786C60] dark:text-[#9C9082] leading-relaxed">
              {t("home_sec2_card4_desc")}
            </p>
          </div>
        </div>
      </section>

      {/* 4. SECTION III: 3-STEP FLOW */}
      <section className="border border-[#DDD4C5] dark:border-[#3B332B] bg-[#F3EDE4] dark:bg-[#201C18] p-6 sm:p-10 space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-1.5">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#BD682C]">
            {t("home_sec3_tag")}
          </span>
          <h3 className="font-mono text-xl sm:text-2xl font-bold uppercase text-[#26201A] dark:text-[#EFE8DC]">
            {t("home_sec3_title")}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 font-mono">
          <div className="border border-[#DDD4C5] dark:border-[#3B332B] bg-[#FBF8F3] dark:bg-[#161311] p-5 space-y-2">
            <span className="text-xl font-black text-[#BD682C]">01</span>
            <h4 className="text-sm font-bold text-[#26201A] dark:text-[#EFE8DC]">
              {t("home_sec3_step1_title")}
            </h4>
            <p className="text-xs text-[#786C60] dark:text-[#9C9082] leading-relaxed">
              {t("home_sec3_step1_desc")}
            </p>
          </div>

          <div className="border border-[#DDD4C5] dark:border-[#3B332B] bg-[#FBF8F3] dark:bg-[#161311] p-5 space-y-2">
            <span className="text-xl font-black text-[#BD682C]">02</span>
            <h4 className="text-sm font-bold text-[#26201A] dark:text-[#EFE8DC]">
              {t("home_sec3_step2_title")}
            </h4>
            <p className="text-xs text-[#786C60] dark:text-[#9C9082] leading-relaxed">
              {t("home_sec3_step2_desc")}
            </p>
          </div>

          <div className="border border-[#DDD4C5] dark:border-[#3B332B] bg-[#FBF8F3] dark:bg-[#161311] p-5 space-y-2">
            <span className="text-xl font-black text-[#BD682C]">03</span>
            <h4 className="text-sm font-bold text-[#26201A] dark:text-[#EFE8DC]">
              {t("home_sec3_step3_title")}
            </h4>
            <p className="text-xs text-[#786C60] dark:text-[#9C9082] leading-relaxed">
              {t("home_sec3_step3_desc")}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
