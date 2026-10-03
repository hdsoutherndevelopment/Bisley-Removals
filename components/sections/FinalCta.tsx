import Link from "next/link";
import { Phone } from "lucide-react";
import { business } from "@/lib/config";

export function FinalCta({ title = "Ready to plan your move?", text = "Get a free, no-obligation quote from a family-run team with over 40 years’ experience." }: { title?: string; text?: string }) {
  return (
    <section className="bg-navy text-white" aria-label="Get a quote">
      <div className="wrap flex flex-col gap-8 py-16 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="h2">{title}</h2>
          <p className="mt-3 text-lg text-white/80">{text}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/quote" className="btn-primary text-lg">Get a Free Quote</Link>
          <a href={business.phoneHref} className="btn-ghost-light text-lg">
            <Phone className="h-5 w-5" aria-hidden="true" /> {business.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
