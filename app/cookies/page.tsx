import Link from "next/link";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Cookie policy",
  description:
    "This website does not set cookies or use analytics. What happens when you play a video or open our online quote form, which run on other services.",
  path: "/cookies",
});

export default function CookiesPage() {
  return (
    <section aria-labelledby="page-title" className="wrap pb-section pt-8">
      <Breadcrumbs trail={[{ name: "Cookie policy", path: "/cookies" }]} />
      <div className="prose-bisley mt-8">
        <h1 id="page-title" className="text-h1 font-bold">
          Cookie policy
        </h1>
        <p>
          <strong>This website does not set cookies</strong>, and it does not use analytics or advertising trackers. That is why
          there is no cookie banner.
        </p>

        <h2>Videos</h2>
        <p>
          The videos on our <Link href="/about#videos">About page</Link> are hosted by Vimeo. Nothing loads from Vimeo until you
          press play, and the player runs in Vimeo&apos;s do-not-track mode.
        </p>

        <h2>Our online quote forms</h2>
        <p>
          Our quote forms are on a separate website run by Removals Manager Ltd, the software we use to manage quotes. That site
          has its own cookie and privacy notices.
        </p>

        <h2>Changes</h2>
        <p>
          If we ever add cookies, for example for analytics, we will update this page and ask for your consent before setting any
          that are not strictly necessary.
        </p>

        <p>
          See also our <Link href="/privacy">privacy policy</Link>.
        </p>
      </div>
    </section>
  );
}
