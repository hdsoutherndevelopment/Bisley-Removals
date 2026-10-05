import type { Config } from "tailwindcss";

/** Every value resolves to a token in app/tokens.css, so surfaces can re-scope them. */
const v = (name: string) => `var(--${name})`;

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  // Hover styles only apply on devices that can hover, so they never stick on touch screens.
  future: { hoverOnlyWhenSupported: true },
  theme: {
    screens: { sm: "480px", md: "768px", lg: "1024px", xl: "1280px" },
    extend: {
      colors: {
        page: v("bg-page"),
        alt: v("bg-alt"),
        panel: { DEFAULT: v("c-panel"), deep: v("c-panel-deep") },
        cream: { DEFAULT: v("c-cream"), muted: v("c-cream-muted"), hover: v("c-cream-hover") },
        tyre: { DEFAULT: v("c-tyre"), muted: v("c-tyre-muted") },
        fg: { DEFAULT: v("fg"), muted: v("fg-muted") },
        heading: v("heading"),
        link: v("link"),
        rule: v("line-rule"),
        input: v("line-input"),
        error: v("error"),
        success: v("success"),
      },
      fontFamily: {
        display: [v("ff-display")],
        body: [v("ff-body")],
      },
      fontSize: {
        display: [v("fs-display"), { lineHeight: v("lh-display"), letterSpacing: v("ls-display") }],
        h1: [v("fs-h1"), { lineHeight: v("lh-h1"), letterSpacing: v("ls-h2") }],
        h2: [v("fs-h2"), { lineHeight: v("lh-h2"), letterSpacing: v("ls-h2") }],
        quote: [v("fs-quote"), { lineHeight: v("lh-quote") }],
        phone: [v("fs-phone"), { lineHeight: "1", letterSpacing: v("ls-phone") }],
        h3: [v("fs-h3"), { lineHeight: v("lh-h3") }],
        h4: [v("fs-h4"), { lineHeight: v("lh-h4") }],
        lead: [v("fs-lead"), { lineHeight: v("lh-lead") }],
        body: [v("fs-body"), { lineHeight: v("lh-body") }],
        small: [v("fs-small"), { lineHeight: "1.5" }],
      },
      borderRadius: { sm: v("r-sm"), md: v("r-md") },
      boxShadow: { float: v("elev-float"), press: v("elev-press") },
      maxWidth: { site: v("layout-max"), wide: v("layout-wide"), measure: v("measure-body") },
      spacing: { section: v("space-section"), gutter: v("space-gutter"), margin: v("space-margin") },
      transitionDuration: { fast: v("motion-fast"), base: v("motion-base") },
      transitionTimingFunction: { brand: v("motion-ease") },
    },
  },
  plugins: [],
};

export default config;
