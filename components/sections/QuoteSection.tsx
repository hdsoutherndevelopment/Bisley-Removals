import { Phone, Check } from "lucide-react";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { business } from "@/lib/config";

type Initial = Parameters<typeof QuoteForm>[0]["initial"];

export function QuoteSection({ initial, headingLevel = "h2" }: { initial?: Initial; headingLevel?: "h1" | "h2" }) {
  const H = headingLevel;
  return (
    <section id="quote" className="bg-paper py-20 sm:py-28" aria-labelledby="quote-title">
      <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <div>
          <H id="quote-title" className={headingLevel === "h1" ? "display text-[clamp(2.2rem,5vw,3.5rem)]" : "h2"}>
            Get your free removals quote
          </H>
          <p className="lede mt-4">Share a few details and one of our estimators will be in touch to plan your move with you.</p>
          <ul className="mt-8 space-y-3">
            {[
              "Free, no-obligation quotation",
              "Boxes and packing materials delivered and collected free",
              "Removals, packing and storage in one quote",
            ].map((t) => (
              <li key={t} className="flex gap-3">
                <Check className="mt-1 h-5 w-5 shrink-0 text-livery" aria-hidden="true" />
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-10 rounded-xl bg-navy p-6 text-white">
            <p className="font-semibold">Prefer to talk it through?</p>
            <a href={business.phoneHref} className="display mt-2 inline-flex items-center gap-3 text-2xl hover:underline sm:text-3xl">
              <Phone className="h-6 w-6 text-livery" aria-hidden="true" />
              {business.phone}
            </a>
            <p className="mt-2 text-sm text-white/70">Office open {business.officeHours.label}</p>
          </div>
        </div>
        <div className="rounded-xl bg-white p-6 shadow-card ring-1 ring-rule/60 sm:p-10">
          <QuoteForm initial={initial} />
        </div>
      </div>
    </section>
  );
}
