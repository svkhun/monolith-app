"use client";

import React, { useEffect, useState, useTransition } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export const NavigationProgress: React.FC = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isNavigating, setIsNavigating] = useState(false);
  const [progress, setProgress] = useState(0);

  // When pathname or searchParams change, finish and hide progress bar
  useEffect(() => {
    setProgress(100);
    const timer = setTimeout(() => {
      setIsNavigating(false);
      setProgress(0);
    }, 250);
    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  // Intercept click on internal links to provide instant feedback
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (
        href &&
        href.startsWith("/") &&
        !href.startsWith("#") &&
        target.target !== "_blank" &&
        !e.ctrlKey &&
        !e.metaKey &&
        !e.shiftKey &&
        !e.altKey
      ) {
        // If it's a different route, trigger the progress bar immediately!
        const targetPath = href.split("?")[0];
        if (targetPath !== pathname) {
          setIsNavigating(true);
          setProgress(25);
          setTimeout(() => setProgress(65), 80);
          setTimeout(() => setProgress(85), 300);
        }
      }
    };

    window.addEventListener("click", handleLinkClick, { passive: true });
    return () => window.removeEventListener("click", handleLinkClick);
  }, [pathname]);

  if (!isNavigating && progress === 0) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-transparent pointer-events-none">
      <div
        className="h-full bg-[#BD682C] transition-all duration-200 ease-out shadow-[0_0_8px_rgba(189,104,44,0.6)]"
        style={{
          width: `${progress}%`,
          opacity: progress === 100 ? 0 : 1,
          transition: progress === 100 ? "width 150ms ease-out, opacity 250ms 100ms ease" : "width 200ms ease-out",
        }}
      />
    </div>
  );
};
