"use client";

import React, { useEffect, useState } from "react";

export const StartupLoader: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [fading, setFading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Only show once per session
    const hasLoaded = sessionStorage.getItem("monolith_boot_complete");
    if (!hasLoaded) {
      setVisible(true);

      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              setFading(true);
              setTimeout(() => {
                setVisible(false);
                sessionStorage.setItem("monolith_boot_complete", "true");
              }, 400);
            }, 200);
            return 100;
          }
          return prev + 25;
        });
      }, 120);

      return () => clearInterval(interval);
    }
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FBF8F3] dark:bg-[#161311] transition-opacity duration-400 select-none ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative flex flex-col items-center space-y-4 p-8 border border-[#DDD4C5] dark:border-[#3B332B] bg-[#F3EDE4] dark:bg-[#201C18] max-w-sm w-full mx-4 shadow-xl">
        {/* Corner Accents */}
        <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-[#BD682C]" />
        <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-[#BD682C]" />
        <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-[#BD682C]" />
        <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-[#BD682C]" />

        {/* Monogram */}
        <div className="flex items-center justify-center w-14 h-14 bg-[#26201A] text-[#FBF8F3] dark:bg-[#EFE8DC] dark:text-[#161311] font-mono text-2xl font-black border border-[#26201A] dark:border-[#EFE8DC]">
          M
        </div>

        <div className="text-center space-y-1">
          <h2 className="font-mono text-sm font-black tracking-[0.25em] uppercase text-[#26201A] dark:text-[#EFE8DC]">
            MONOLITH
          </h2>
          <p className="font-mono text-[10px] tracking-widest text-[#786C60] dark:text-[#9C9082] uppercase">
            ARCHITECTURAL CORE // INITIALIZING
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1.5 bg-[#EBE3D7] dark:bg-[#2A2520] border border-[#DDD4C5] dark:border-[#3B332B] overflow-hidden">
          <div
            className="h-full bg-[#BD682C] transition-all duration-150"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex justify-between w-full font-mono text-[10px] text-[#786C60] dark:text-[#9C9082]">
          <span>SYSTEM READY</span>
          <span>{progress}%</span>
        </div>
      </div>
    </div>
  );
};
