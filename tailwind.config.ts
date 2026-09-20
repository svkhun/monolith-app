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
        earth: {
          bg: {
            light: "#FBF8F3", // Warm parchment / antique paper
            lightSurface: "#F3EDE4", // Warm sand / linen
            lightElevated: "#EBE3D7",
            dark: "#161311", // Deep roasted espresso / charred umber
            darkSurface: "#201C18", // Dark walnut / cacao
            darkElevated: "#2A2520",
          },
          border: {
            light: "#DDD4C5", // Warm taupe border
            lightHover: "#C6BAA8",
            dark: "#3B332B", // Burnished bronze border
            darkHover: "#54493E",
          },
          text: {
            light: "#26201A", // Dark roast umber
            lightMuted: "#6B5F54", // Warm clay
            dark: "#EFE8DC", // Warm cream / ecru
            darkMuted: "#9C9082", // Sandstone
          },
          accent: {
            DEFAULT: "#BD682C", // Warm terracotta / classic cognac
            hover: "#A35620",
            amber: "#D48B38",
            olive: "#5C754E",
            rust: "#B5432D",
          },
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
