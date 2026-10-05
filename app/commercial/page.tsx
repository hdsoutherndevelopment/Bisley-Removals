import { Check } from "lucide-react";
import { PageIntro } from "@/components/site/PageIntro";
import { PhoneLettering, QuoteButton } from "@/components/site/Actions";
import { FinalPanel } from "@/components/sections/FinalPanel";
import { photos } from "@/lib/config";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Office and commercial removals",
  description:
    "Office and business moves from Bisley, near Woking, from small internal moves to relocations across the country, with storage if your premises aren't ready.",
  path: "/commercial",
});

const handles = [
  "A small internal office move, or a relocation across the country",
  "Secure storage for your equipment during the move",
  "Temporary storage if your new premises aren't ready yet",
  "Guarded long-term storage for office items you don't need on site",
] as const;

export default function CommercialPage() {
  return (
    <>
      <PageIntro
        trail={[{ name: "Office and commercial moves", path: "/commercial" }]}
        title="Office and commercial moves"
        lead="Managed from start to finish by our own experienced teams, with our own vehicles and our own storage."
        photo={photos.yard}
      >
        <QuoteButton />
        <PhoneLettering />
      </PageIntro>

      <section aria-labelledby="handle-title" className="surface-alt section">
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-gutter">
          <div className="lg:col-span-6">
            <h2 id="handle-title" className="text-h2 font-bold">
              What we can handle
            </h2>
            <ul className="mt-8 space-y-4">
              {handles.map((h) => (
                <li key={h} className="flex gap-3">
                  <Check className="mt-1 h-5 w-5 shrink-0" aria-hidden="true" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <h2 className="text-h3 font-semibold">How to start</h2>
            <p className="mt-4 text-fg-muted">
              Tell us about the premises, what is moving and your timescale. Use the quote form and choose Office as the property
              type, or call the office to talk it through.
            </p>
          </div>
        </div>
      </section>

      <FinalPanel title="Moving a business?" text="Start a free quote online, or call the office to plan the move with us." />
    </>
  );
}
