import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // Strictly override all borderRadius tokens to 0px
    borderRadius: {
      none: "0px",
      sm: "0px",
      DEFAULT: "0px",
      md: "0px",
      lg: "0px",
      xl: "0px",
      "2xl": "0px",
      "3xl": "0px",
      full: "0px",
    },
    extend: {
      colors: {
        monolith: {
          bg: {
            dark: "#0A0A0A",
            darkSurface: "#141414",
            darkElevated: "#1A1A1A",
            light: "#FFFFFF",
            lightSurface: "#F5F5F5",
            lightElevated: "#FAFAFA",
          },
          border: {
            dark: "#262626",
            darkHover: "#404040",
            light: "#E5E5E5",
            lightHover: "#D4D4D4",
          },
          accent: {
            DEFAULT: "#3B82F6",
            hover: "#2563EB",
          }
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "SFMono-Regular", "Menlo", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
