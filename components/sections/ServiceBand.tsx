import Link from "next/link";
import { services } from "@/lib/content";

/** The three services painted on the side of every lorry, framed by coachlines. */
export function ServiceBand() {
  return (
    <section aria-labelledby="services-title" className="wrap pt-16 md:pt-20">
      <h2 id="services-title" className="sr-only">
        Our services
      </h2>
      <div className="coachline" aria-hidden="true" />
      <ul className="grid divide-y divide-rule md:grid-cols-3 md:divide-x md:divide-y-0">
        {services.map((s) => (
          <li key={s.href}>
            <Link
              href={s.href}
              className="group block py-6 md:px-6 md:py-8 md:first:pl-0 md:last:pr-0"
            >
              <span className="block font-display text-quote font-semibold text-heading underline-offset-[0.18em] group-hover:underline">
                {s.title}
              </span>
              <span className="mt-2 block text-fg-muted">{s.line}</span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="coachline" aria-hidden="true" />
      <p className="mt-5 text-fg-muted">
        Moving a business? See <Link href="/commercial" className="link">office and commercial moves</Link>.
      </p>
    </section>
  );
}
