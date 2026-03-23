import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#050505",
        paper: "#f5f2eb",
        mist: "#d9d5cd",
        smoke: "#949089",
        accent: "#ca5c3b"
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"],
        display: ["var(--font-syne)", "sans-serif"]
      },
      boxShadow: {
        soft: "0 24px 80px rgba(5, 5, 5, 0.12)"
      },
      backgroundImage: {
        grain:
          "radial-gradient(circle at 20% 20%, rgba(202, 92, 59, 0.16), transparent 28%), radial-gradient(circle at 80% 0%, rgba(255, 255, 255, 0.5), transparent 22%), linear-gradient(180deg, rgba(245, 242, 235, 0.94), rgba(240, 236, 228, 0.98))"
      }
    }
  },
  plugins: []
};

export default config;
