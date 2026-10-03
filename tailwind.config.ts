import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: "#13294B", deep: "#0C1B33", soft: "#24406B" },
        livery: { DEFAULT: "#C8102E", dark: "#A30D25" },
        steel: { DEFAULT: "#5B6B82", light: "#8C99AC" },
        paper: "#F4F6F9",
        rule: "#DCE2EA",
      },
      fontFamily: {
        sans: ['"Archivo Variable"', "system-ui", "-apple-system", "Segoe UI", "Arial", "sans-serif"],
      },
      maxWidth: { site: "76rem", prose: "38rem" },
      boxShadow: {
        card: "0 1px 2px rgba(19,41,75,0.06), 0 8px 24px -12px rgba(19,41,75,0.18)",
      },
    },
  },
  plugins: [],
};
export default config;
