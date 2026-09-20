import React from "react";

export default function Loading() {
  return (
    <div className="min-h-[55vh] flex flex-col items-center justify-center space-y-4 select-none">
      {/* Architectural Monogram Loader */}
      <div className="relative flex items-center justify-center w-12 h-12 border border-[#DDD4C5] dark:border-[#3B332B] bg-[#F3EDE4] dark:bg-[#201C18]">
        <span className="font-mono text-base font-black text-[#26201A] dark:text-[#EFE8DC]">
          M
        </span>
        {/* Corner Accents */}
        <div className="absolute -top-[1px] -left-[1px] w-1.5 h-1.5 border-t border-l border-[#BD682C]" />
        <div className="absolute -top-[1px] -right-[1px] w-1.5 h-1.5 border-t border-r border-[#BD682C]" />
        <div className="absolute -bottom-[1px] -left-[1px] w-1.5 h-1.5 border-b border-l border-[#BD682C]" />
        <div className="absolute -bottom-[1px] -right-[1px] w-1.5 h-1.5 border-b border-r border-[#BD682C]" />
      </div>

      {/* Progress Line */}
      <div className="w-36 h-[2px] bg-[#DDD4C5] dark:bg-[#3B332B] overflow-hidden relative">
        <div className="absolute inset-y-0 bg-[#BD682C] w-1/3 animate-pulse" />
      </div>

      <span className="font-mono text-[11px] font-bold tracking-[0.2em] text-[#786C60] dark:text-[#9C9082] uppercase">
        LOADING // MONOLITH
      </span>
    </div>
  );
}
