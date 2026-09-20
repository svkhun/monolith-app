"use client";

import React, { useEffect, useState } from "react";

export const StartupLoader: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);
  const [progress, setProgress] = useState(15);
  const [statusText, setStatusText] = useState("CALIBRATING ARCHITECTURE...");

  useEffect(() => {
    // Stage 1: Initial calibration
    const t1 = setTimeout(() => {
      setProgress(42);
      setStatusText("LOADING RECTILINEAR ARCHITECTURE...");
    }, 450);

    // Stage 2: Synchronizing modules
    const t2 = setTimeout(() => {
      setProgress(75);
      setStatusText("SYNCHRONIZING WORK & STUDY ENGINES...");
    }, 1050);

    // Stage 3: Finalizing environment
    const t3 = setTimeout(() => {
      setProgress(95);
      setStatusText("FINALIZING WORKSPACE ENVIRONMENT...");
    }, 1650);

    // Stage 4: Ready
    const t4 = setTimeout(() => {
      setProgress(100);
      setStatusText("SYSTEM READY // WELCOME OPERATOR");
    }, 2100);

    // Stage 5: Fade out
    const t5 = setTimeout(() => {
      setFading(true);
    }, 2500);

    // Stage 6: Unmount
    const t6 = setTimeout(() => {
      setVisible(false);
    }, 2950);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
        handleSkip();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleSkip = () => {
    setFading(true);
    setTimeout(() => setVisible(false), 180);
  };

  if (!visible) return null;

  return (
    <div
      onClick={handleSkip}
      title="Click anywhere to enter immediately"
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#FBF8F3] dark:bg-[#161311] transition-opacity duration-400 select-none cursor-pointer ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative flex flex-col items-center space-y-5 p-8 sm:p-10 border border-[#DDD4C5] dark:border-[#3B332B] bg-[#F3EDE4] dark:bg-[#201C18] max-w-sm w-full mx-4 shadow-2xl animate-arch-in">
        {/* Corner Accents */}
        <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t-2 border-l-2 border-[#BD682C]" />
        <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t-2 border-r-2 border-[#BD682C]" />
        <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b-2 border-l-2 border-[#BD682C]" />
        <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b-2 border-r-2 border-[#BD682C]" />

        {/* Monogram Emblem */}
        <div className="flex items-center justify-center w-16 h-16 bg-[#26201A] text-[#FBF8F3] dark:bg-[#EFE8DC] dark:text-[#161311] font-mono text-3xl font-black border border-[#26201A] dark:border-[#EFE8DC] shadow-md">
          M
        </div>

        <div className="text-center space-y-1.5">
          <h2 className="font-mono text-base font-black tracking-[0.28em] uppercase text-[#26201A] dark:text-[#EFE8DC]">
            MONOLITH
          </h2>
          <p className="font-mono text-[11px] tracking-widest text-[#BD682C] uppercase font-semibold">
            {statusText}
          </p>
        </div>

        {/* Progress Bar with Precision Scan Indicator */}
        <div className="w-full space-y-2">
          <div className="w-full h-2 bg-[#EBE3D7] dark:bg-[#2A2520] border border-[#DDD4C5] dark:border-[#3B332B] overflow-hidden relative">
            <div
              className="h-full bg-[#BD682C] transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex justify-between w-full font-mono text-[10px] text-[#786C60] dark:text-[#9C9082]">
            <span>INITIALIZING ENGINE</span>
            <span className="font-bold text-[#26201A] dark:text-[#EFE8DC]">{progress}%</span>
          </div>
        </div>

        <div className="font-mono text-[9px] text-[#786C60]/80 dark:text-[#9C9082]/80 uppercase tracking-widest pt-1 text-center">
          <span>[ CLICK ANYWHERE TO ENTER / คลิกที่ใดก็ได้เพื่อเข้าสู่ระบบ ]</span>
        </div>
      </div>
    </div>
  );
};
