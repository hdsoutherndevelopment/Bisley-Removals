import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/site/PageHero";
import { FleetTeam } from "@/components/sections/FleetTeam";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCta } from "@/components/sections/FinalCta";
import { photos } from "@/lib/config";

export const metadata: Metadata = {
  title: "About Us: A Family-Run Removals Firm Since 1985",
  description:
    "Bisley Removals & Storage Services has been a family-run removals and storage company near Woking since 1985, with its own fleet and full-time moving teams.",
  alternates: { canonical: "/about" },
};

const values = [
  { title: "Safe", text: "Careful handling, proper materials and insured storage for everything we look after." },
  { title: "Reliable", text: "Accurate quotes, a planned day and a team that turns up when we say it will." },
  { title: "Affordable", text: "Honest pricing, with boxes and packing materials delivered and collected for free." },
  { title: "Personal", text: "A family business that builds long-lasting relationships with its customers." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Our story"
        intro="A family-run removals and storage firm since 1985, built on trust, hard work and customers who come back to us."
        image={photos.unloading}
      />

      <section className="py-20 sm:py-28" aria-labelledby="heritage-title">
        <div className="wrap grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-5 text-lg text-navy/85">
            <h2 id="heritage-title" className="h2 text-navy">Over 40 years of moving Surrey</h2>
            <p>
              Bisley Removals started in 1985 from our base near Woking. More than four decades on, we’re still family-run and
              still proud of a trustworthy, professional approach to every move.
            </p>
            <p>
              We’re committed to safe, reliable and affordable removals and storage, and we try to exceed expectations every
              time. Many of our customers recommend us to friends and return to us when they move again, and many of the
              area’s leading estate agents refer clients to us.
            </p>
            <p className="font-semibold text-navy">Your move is our business. That’s the Bisley difference.</p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image src={photos.storageYard.src} alt={photos.storageYard.alt} fill sizes="(min-width:1024px) 560px, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="border-t border-rule bg-paper py-20" aria-labelledby="values-title">
        <div className="wrap">
          <h2 id="values-title" className="h2">What we promise</h2>
          <dl className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-xl border-t-4 border-livery bg-white p-6 shadow-card">
                <dt className="heading text-xl">{v.title}</dt>
                <dd className="mt-2 text-steel">{v.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <FleetTeam />
      <Testimonials />
      <FinalCta />
    </>
  );
}
