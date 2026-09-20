"use client";

import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Button } from "@/components/ui/Button";

export const ThemeToggle: React.FC<{ className?: string }> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleTheme}
      className={className}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <span className="flex items-center space-x-1.5">
          <Sun className="w-3.5 h-3.5 text-neutral-300" />
          <span className="text-[10px] tracking-widest font-mono">LIGHT</span>
        </span>
      ) : (
        <span className="flex items-center space-x-1.5">
          <Moon className="w-3.5 h-3.5 text-neutral-700" />
          <span className="text-[10px] tracking-widest font-mono">DARK</span>
        </span>
      )}
    </Button>
  );
};
