import { Check } from "lucide-react";
import { PageIntro } from "@/components/site/PageIntro";
import { PhoneLettering, QuoteButton } from "@/components/site/Actions";
import { ReviewQuote } from "@/components/sections/ReviewsBlock";
import { FinalPanel } from "@/components/sections/FinalPanel";
import { photos } from "@/lib/config";
import { packingMaterials, packingOptions } from "@/lib/content";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Packing services for your move",
  description:
    "Full packing, fragile-only packing, or free boxes and materials delivered to your door. Packing for house moves from Bisley, near Woking.",
  path: "/packing",
});

export default function PackingPage() {
  return (
    <>
      <PageIntro
        trail={[{ name: "Packing", path: "/packing" }]}
        title="Packing services"
        lead="Choose how much of the packing you would like us to do. Whichever you pick, the boxes and wrapping are made for moving."
        photo={photos.packingBox}
      >
        <QuoteButton />
        <PhoneLettering />
      </PageIntro>

      <section aria-labelledby="options-title" className="wrap pb-section">
        <h2 id="options-title" className="text-h2 font-bold">
          Three ways to pack
        </h2>
        <div className="coachline mt-8" aria-hidden="true" />
        <ul className="grid divide-y divide-rule md:grid-cols-3 md:divide-x md:divide-y-0">
          {packingOptions.map((o, i) => (
            <li key={o.title} className={`py-6 ${i === 0 ? "md:pr-gutter" : i === 1 ? "md:px-gutter" : "md:pl-gutter"}`}>
              <h3 className="text-h3 font-semibold">{o.title}</h3>
              <p className="mt-2 text-fg-muted">{o.text}</p>
            </li>
          ))}
        </ul>
        <div className="coachline" aria-hidden="true" />
      </section>

      <section aria-labelledby="materials-title" className="surface-alt section">
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-gutter">
          <div className="lg:col-span-6">
            <h2 id="materials-title" className="text-h2 font-bold">
              What we pack with
            </h2>
            <ul className="mt-8 space-y-4">
              {packingMaterials.map((m) => (
                <li key={m} className="flex gap-3">
                  <Check className="mt-1 h-5 w-5 shrink-0" aria-hidden="true" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-measure text-fg-muted">
              Packing yourself? Mark fragile boxes clearly and write on each box which room it is going to. It makes unloading
              much quicker, and it is a good chance to clear out what you no longer need.
            </p>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <ReviewQuote name="Alexandra D" large />
          </div>
        </div>
      </section>

      <FinalPanel title="Want us to do the packing?" text="Tell us about your home and we will include packing in your free quote." />
    </>
  );
}
