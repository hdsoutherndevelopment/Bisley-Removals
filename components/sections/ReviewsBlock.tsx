import Link from "next/link";
import { business } from "@/lib/config";
import { reviewByName, reviews } from "@/lib/content";

export function ReviewQuote({ name, large = false }: { name: string; large?: boolean }) {
  const r = reviewByName(name);
  return (
    <figure>
      <blockquote className={large ? "font-display text-quote font-medium text-heading" : "text-body"}>
        <p>“{r.excerpt ?? r.text}”</p>
      </blockquote>
      <figcaption className="mt-4 font-bold">{r.name}</figcaption>
    </figure>
  );
}

export function ReviewsBlock() {
  const supporting = ["Becky & Toby", "Kreena Patel", "Thomas Fuller"];
  return (
    <section aria-labelledby="reviews-title" className="section">
      <div className="wrap">
        <h2 id="reviews-title" className="text-h2 font-bold">
          From people we have moved
        </h2>
        <div className="mt-10 max-w-[54rem]">
          <ReviewQuote name="Jessica Jandrell" large />
        </div>
        <ul className="mt-12 grid gap-8 border-t border-rule pt-8 md:grid-cols-3 md:gap-gutter">
          {supporting.map((n) => (
            <li key={n}>
              <ReviewQuote name={n} />
            </li>
          ))}
        </ul>
        <ul className="mt-8 flex flex-wrap gap-x-8">
          <li>
            <Link href="/reviews" className="link link-standalone">Read all {reviews.length} reviews</Link>
          </li>
          <li>
            <a href={business.googleReviews} target="_blank" rel="noopener noreferrer" className="link link-standalone">
              Our reviews on Google<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
