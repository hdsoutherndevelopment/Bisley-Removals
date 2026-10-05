import Link from "next/link";
import { business } from "@/lib/config";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section aria-labelledby="page-title" className="wrap section">
      <p className="numerals font-display text-h3 font-semibold text-fg-muted">404</p>
      <h1 id="page-title" className="mt-2 text-h1 font-bold">
        This page has moved on
      </h1>
      <p className="mt-5 max-w-measure text-lead text-fg-muted">
        The page you are looking for doesn&apos;t exist, or it has moved. Try one of these, or call us on{" "}
        <a href={business.phoneHref} className="link">{business.phone}</a>.
      </p>
      <ul className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <li>
          <Link href="/quote" className="btn btn-primary">Get a free quote</Link>
        </li>
        <li>
          <Link href="/" className="btn btn-secondary">Go to the home page</Link>
        </li>
        <li>
          <Link href="/contact" className="link link-standalone">Contact us</Link>
        </li>
      </ul>
    </section>
  );
}
