import { PageIntro } from "@/components/site/PageIntro";
import { FinalPanel } from "@/components/sections/FinalPanel";
import { business } from "@/lib/config";
import { reviews } from "@/lib/content";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Customer reviews",
  description:
    "Reviews from customers Bisley Removal Services has moved, in their own words, from local Surrey moves to long-distance moves to Devon.",
  path: "/reviews",
});

export default function ReviewsPage() {
  return (
    <>
      <PageIntro
        trail={[{ name: "Reviews", path: "/reviews" }]}
        title="Customer reviews"
        lead="What customers have said about moving with us, in their own words."
      >
        <a href={business.googleReviews} target="_blank" rel="noopener noreferrer" className="link link-standalone text-lead">
          Read our reviews on Google<span className="sr-only"> (opens in a new tab)</span>
        </a>
      </PageIntro>

      <section aria-labelledby="list-title" className="wrap pb-section">
        <h2 id="list-title" className="sr-only">
          All reviews
        </h2>
        <ul className="columns-1 gap-gutter md:columns-2">
          {reviews.map((r) => (
            <li key={r.name} className="mb-gutter break-inside-avoid border-t-2 border-panel pt-6">
              <figure>
                <blockquote>
                  <p>“{r.text}”</p>
                </blockquote>
                <figcaption className="mt-4 font-bold">{r.name}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </section>

      <FinalPanel />
    </>
  );
}
