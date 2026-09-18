import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#08090B",
        foreground: "#F3F4F6",
        surface: {
          50: "#14171D",
          100: "#1A1E26",
          200: "#242A36",
          300: "#323A4A"
        },
        accent: {
          DEFAULT: "#38BDF8",
          purple: "#A855F7",
          amber: "#F59E0B",
          emerald: "#10B981"
        },
        border: "rgba(255, 255, 255, 0.08)",
        card: "rgba(20, 23, 29, 0.75)"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
        display: ["var(--font-display)", "Satoshi", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"]
      }
    },
  },
  plugins: [],
};
export default config;
