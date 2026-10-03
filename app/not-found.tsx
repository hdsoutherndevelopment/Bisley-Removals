import Link from "next/link";
import { business } from "@/lib/config";

export default function NotFound() {
  return (
    <section className="py-24 sm:py-32">
      <div className="wrap max-w-2xl">
        <h1 className="display text-[clamp(2.2rem,5vw,3.25rem)]">This page has moved on</h1>
        <p className="lede mt-4">The page you’re looking for doesn’t exist. Head back home, or call us on {business.phone}.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className="btn-navy">Back to home</Link>
          <Link href="/quote" className="btn-primary">Get a Free Quote</Link>
        </div>
      </div>
    </section>
  );
}
