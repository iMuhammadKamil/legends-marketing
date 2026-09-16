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
        cream: "#FDFCF0",
        gold: "#D4B172",
        "gold-muted": "#C59B27",
        obsidian: {
          700: "#2A3544",
          800: "#1E2532",
          900: "#141925",
          950: "#0B0F19",
        },
        slate: "#94A3B8",
      },
    },
  },
  plugins: [],
};

export default config;
