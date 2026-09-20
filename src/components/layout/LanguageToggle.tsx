"use client";

import React from "react";
import { useLanguage } from "./LanguageProvider";
import { Globe } from "lucide-react";

export const LanguageToggle: React.FC<{ className?: string }> = ({ className }) => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-1.5 h-9 px-2.5 border border-[#DDD4C5] dark:border-[#3B332B] bg-[#F3EDE4] dark:bg-[#201C18] hover:bg-[#EBE3D7] dark:hover:bg-[#2A2520] text-[#26201A] dark:text-[#EFE8DC] font-mono text-xs font-bold uppercase transition-colors rounded-none focus:outline-none select-none"
      title={`Switch language (Current: ${language})`}
      aria-label={`Switch language (Current: ${language})`}
    >
      <Globe className="w-3.5 h-3.5 text-[#BD682C]" />
      <span className="tracking-wider">
        {language === "EN" ? "EN" : "TH"}
      </span>
    </button>
  );
};
