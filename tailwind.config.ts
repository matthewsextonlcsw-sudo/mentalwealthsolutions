import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0a1628",
          50: "#e8ecf4",
          100: "#c5cfe3",
          200: "#9eafd0",
          300: "#778fbd",
          400: "#5a78af",
          500: "#3d61a1",
          600: "#2d4a7a",
          700: "#1e3454",
          800: "#0f1e2e",
          900: "#0a1628",
          950: "#060d18",
        },
        gold: {
          DEFAULT: "#c9a84c",
          50: "#faf6e8",
          100: "#f2e8c5",
          200: "#e8d59e",
          300: "#dec277",
          400: "#d4b560",
          500: "#c9a84c",
          600: "#b5953f",
          700: "#9a7d33",
          800: "#7f6628",
          900: "#654f1e",
          950: "#3d3011",
        },
        cream: "#f5f0e8",
        charcoal: "#1a1a2e",
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "navy-gradient":
          "linear-gradient(135deg, #0a1628 0%, #1e3454 50%, #0a1628 100%)",
        "gold-shimmer":
          "linear-gradient(90deg, #c9a84c 0%, #e8d59e 50%, #c9a84c 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "gold-pulse": "goldPulse 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        goldPulse: {
          "0%, 100%": { opacity: "0.7" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
