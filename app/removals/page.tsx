import Link from "next/link";
import { PageIntro } from "@/components/site/PageIntro";
import { Photo } from "@/components/site/Photo";
import { PhoneLettering, QuoteButton } from "@/components/site/Actions";
import { ReviewQuote } from "@/components/sections/ReviewsBlock";
import { FinalPanel } from "@/components/sections/FinalPanel";
import { photos } from "@/lib/config";
import { fleetEquipment } from "@/lib/content";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "House removals in Woking and Surrey",
  description:
    "Full or part house moves, packed, loaded and driven by our own full-time crews from Bisley, near Woking. Free quotes on 01483 489611.",
  path: "/removals",
});

export default function RemovalsPage() {
  return (
    <>
      <PageIntro
        trail={[{ name: "House removals", path: "/removals" }]}
        title="House removals in Woking and across Surrey"
        lead="Full or part house moves, packed, loaded and driven by our own full-time crews from our yard in Bisley."
        photo={photos.lorryStreet}
      >
        <QuoteButton />
        <PhoneLettering />
      </PageIntro>

      <section aria-labelledby="plan-title" className="wrap pb-section">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-gutter">
          <div className="lg:col-span-7">
            <h2 id="plan-title" className="text-h2 font-bold">
              Planned before the day
            </h2>
            <div className="mt-6 space-y-4 text-lead text-fg-muted">
              <p>
                Our estimators plan every move before the day, so your quote is accurate and you get the right vehicle, the right
                team and the right equipment.
              </p>
              <p>
                Local estate agents refer their clients to us, and much of our work comes from customers we have moved before.
              </p>
            </div>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <ReviewQuote name="David Gale" />
          </div>
        </div>
      </section>

      <section aria-labelledby="crew-title" className="surface-alt section">
        <div className="wrap grid items-center gap-10 lg:grid-cols-12 lg:gap-gutter">
          <Photo photo={photos.crew} sizes="(min-width: 1024px) 50vw, 100vw" className="lg:col-span-6" />
          <div className="lg:col-span-5 lg:col-start-8">
            <h2 id="crew-title" className="text-h2 font-bold">
              Our own crews, in uniform
            </h2>
            <p className="mt-5 text-fg-muted">
              Every porter is a full-time member of our team, trained at our yard in packing, lifting, loading and storage. We
              don&apos;t use agency staff or subcontractors, so the people in your home are people we know.
            </p>
            <Link href="/about#crews" className="link link-standalone mt-4">
              Meet the crews
            </Link>
          </div>
        </div>
      </section>

      <section aria-labelledby="fleet-title" className="section">
        <div className="wrap grid items-center gap-10 lg:grid-cols-12 lg:gap-gutter">
          <div className="lg:col-span-5">
            <h2 id="fleet-title" className="text-h2 font-bold">
              The right vehicle for the access
            </h2>
            <p className="mt-5 text-fg-muted">
              We own and maintain our fleet: crew vans for boxes and smaller jobs, Luton and low-loader vans for tight drives
              and difficult access, and pantechnicon lorries for the largest loads and moves that take more than a day.
            </p>
            <p className="mt-4 text-fg-muted">Every vehicle carries {fleetEquipment.join(", ").replace(/, ([^,]*)$/, " and $1")}.</p>
          </div>
          <Photo photo={photos.fleet} sizes="(min-width: 1024px) 50vw, 100vw" className="lg:col-span-6 lg:col-start-7" />
        </div>
      </section>

      <section aria-labelledby="extras-title" className="wrap pb-section">
        <h2 id="extras-title" className="text-h2 font-bold">
          Packing and storage, if you need them
        </h2>
        <div className="coachline mt-8" aria-hidden="true" />
        <div className="grid divide-y divide-rule md:grid-cols-3 md:divide-x md:divide-y-0">
          <div className="py-6 md:pr-gutter">
            <h3 className="text-h3 font-semibold">Packing</h3>
            <p className="mt-2 text-fg-muted">Full packing, fragile items only, or free materials to pack yourself.</p>
            <Link href="/packing" className="link link-standalone mt-2">Packing options</Link>
          </div>
          <div className="py-6 md:px-gutter">
            <h3 className="text-h3 font-semibold">Storage</h3>
            <p className="mt-2 text-fg-muted">If your dates don&apos;t line up, we store your things in sealed containers until you need them.</p>
            <Link href="/storage" className="link link-standalone mt-2">How storage works</Link>
          </div>
          <div className="py-6 md:pl-gutter">
            <h3 className="text-h3 font-semibold">Moving day</h3>
            <p className="mt-2 text-fg-muted">The crew usually arrives around 8:30am. Here is how the rest of the day runs.</p>
            <Link href="/moving-day" className="link link-standalone mt-2">The moving-day guide</Link>
          </div>
        </div>
        <div className="coachline" aria-hidden="true" />
      </section>

      <FinalPanel />
    </>
  );
}
