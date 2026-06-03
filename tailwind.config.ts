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
        brand: {
          orange: "#FF6B35",
          yellow: "#FFB347",
          dark:   "#0A0A0A",
          card:   "#111111",
          border: "#1E1E1E",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      animation: {
        "fade-up":    "fadeUp 0.6s ease forwards",
        "fade-in":    "fadeIn 0.5s ease forwards",
        "float":      "float 4s ease-in-out infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp:    { "0%": { opacity:"0", transform:"translateY(30px)" },
                     "100%": { opacity:"1", transform:"translateY(0)" } },
        fadeIn:    { "0%": { opacity:"0" }, "100%": { opacity:"1" } },
        float:     { "0%,100%": { transform:"translateY(0)" },
                     "50%": { transform:"translateY(-12px)" } },
        glowPulse: { "0%,100%": { opacity:"0.4" },
                     "50%": { opacity:"0.8" } },
      },
    },
  },
  plugins: [],
};

export default config;
