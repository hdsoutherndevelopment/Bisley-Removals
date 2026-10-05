import localFont from "next/font/local";

/**
 * Self-hosted variable fonts (SIL Open Font License), loaded from the Fontsource packages.
 * next/font preloads them, serves them from this site with font-display: swap, and sizes a
 * fallback font to match each one's metrics, so the swap does not shift the layout.
 */
export const besley = localFont({
  src: "../node_modules/@fontsource-variable/besley/files/besley-latin-wght-normal.woff2",
  weight: "400 900",
  style: "normal",
  display: "swap",
  variable: "--font-besley",
  fallback: ["Georgia", "Times New Roman", "serif"],
  adjustFontFallback: "Times New Roman",
});

export const atkinson = localFont({
  src: "../node_modules/@fontsource-variable/atkinson-hyperlegible-next/files/atkinson-hyperlegible-next-latin-wght-normal.woff2",
  weight: "200 800",
  style: "normal",
  display: "swap",
  variable: "--font-atkinson",
  fallback: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "Arial", "sans-serif"],
  adjustFontFallback: "Arial",
});
