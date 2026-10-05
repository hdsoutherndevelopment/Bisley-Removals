import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { business } from "@/lib/config";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Accessibility statement",
  description:
    "How accessible the Bisley Removal Services website is, the standard it is built to, known limitations, and how to report a problem.",
  path: "/accessibility",
});

export default function AccessibilityPage() {
  return (
    <section aria-labelledby="page-title" className="wrap pb-section pt-8">
      <Breadcrumbs trail={[{ name: "Accessibility", path: "/accessibility" }]} />
      <div className="prose-bisley mt-8">
        <h1 id="page-title" className="text-h1 font-bold">
          Accessibility statement
        </h1>
        <p>
          We want everyone to be able to use this website, including people who use a screen reader, a keyboard, voice control or
          magnification.
        </p>

        <h2>The standard we build to</h2>
        <p>This website is built to meet the Web Content Accessibility Guidelines (WCAG) 2.2 at level AA. That means:</p>
        <ul>
          <li>text and buttons have enough colour contrast to read comfortably</li>
          <li>everything can be used with a keyboard, with a visible focus outline</li>
          <li>pages use proper headings, landmarks and labels for assistive technology</li>
          <li>images have text descriptions</li>
          <li>pages work when zoomed to 200% and reflow on small screens</li>
          <li>nothing moves on its own, and we respect your device&apos;s reduced-motion setting</li>
          <li>the text typeface, Atkinson Hyperlegible, was designed for readers with low vision</li>
        </ul>

        <h2>Known limitations</h2>
        <ul>
          <li>Our online quote forms are provided by Removals Manager Ltd on a separate website, and we cannot control their accessibility. If you have difficulty using them, call or email us and we will take your details.</li>
          <li>The videos on our About page are hosted by Vimeo and may not have captions.</li>
        </ul>

        <h2>Reporting a problem</h2>
        <p>
          If something on this website is hard to use, tell us and we will help and fix it where we can. Call{" "}
          <a href={business.phoneHref}>{business.phone}</a> or email <a href={business.emailHref}>{business.email}</a>.
        </p>

        <p className="text-fg-muted">This statement was prepared in October 2026.</p>
      </div>
    </section>
  );
}
