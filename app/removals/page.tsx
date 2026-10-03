import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, Phone } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { FleetLineup } from "@/components/sections/FleetLineup";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCta } from "@/components/sections/FinalCta";
import { business, photos } from "@/lib/config";

export const metadata: Metadata = {
  title: "House, Furniture & Commercial Removals in Woking and Surrey",
  description:
    "Professional house, furniture and office removals from Bisley, near Woking. Full-time uniformed teams, our own fleet and expert packing services since 1985.",
  alternates: { canonical: "/removals" },
};

const packingOptions = [
  { title: "Full packing service", text: "We wrap and box everything in your home, usually the day before you move." },
  { title: "Fragile items only", text: "We pack glassware, china, ornaments, pictures and mirrors. You pack the rest." },
  { title: "Pack it yourself", text: "We deliver complimentary boxes, bubble wrap and paper, and collect them afterwards." },
];

const materials = [
  "Double-walled boxes and premium packing cases",
  "Extra-strong cartons for china, glass and books",
  "Clean wrapping paper, soft tissue and bubble wrap",
  "Wardrobe cartons that keep clothes clean and crease-free",
  "Free delivery and collection of all materials",
];

export default function RemovalsPage() {
  return (
    <>
      <PageHero
        title="Professional removals you can rely on"
        intro="We’ll take good care of you and your furniture. Trusted locally since 1985 for first-class moves, planned with care and carried out with precision."
        image={photos.unloading}
      >
        <Link href="/quote" className="btn-primary">Get a Free Quote</Link>
        <a href={business.phoneHref} className="btn-ghost-light"><Phone className="h-4 w-4" aria-hidden="true" /> {business.phone}</a>
      </PageHero>

      <section className="py-20 sm:py-24" aria-labelledby="house-title">
        <div className="wrap grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <div className="space-y-5 text-lg text-navy/85">
            <h2 id="house-title" className="h2 text-navy">House removals</h2>
            <p>
              Our aim has always been simple: a first-class removals service built on professionalism, experience and
              personal care. We start by understanding what you need, then plan every detail so the day itself runs smoothly.
            </p>
            <p>
              As a local, family-run business established in 1985, we’ve grown through reputation and recommendation. Many of
              the area’s leading estate agents continue to refer their clients to us.
            </p>
            <p>
              Every member of our team is a full-time, uniformed professional, trained in packing, lifting and transport. Our
              estimators make sure your quotation is accurate, so you get the right vehicle, the right team and the right
              equipment every time.
            </p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl lg:aspect-auto">
            <Image src={photos.hero.src} alt={photos.hero.alt} fill sizes="(min-width:1024px) 480px, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section id="furniture" className="border-y border-rule bg-paper py-20 sm:py-24" aria-labelledby="furniture-title">
        <div className="wrap grid gap-10 lg:grid-cols-2 lg:gap-20">
          <h2 id="furniture-title" className="h2">Furniture removals</h2>
          {/* CONFIRM: check whether single-item and furniture-only moves are quoted separately. */}
          <div className="space-y-4 text-lg text-navy/85">
            <p>
              Beds, wardrobes, sofas, dining tables and heirlooms are wrapped, protected and loaded by people who handle
              furniture every working day.
            </p>
            <p>
              Anything that needs taking apart is dismantled and rebuilt at the other end, and each piece is placed in the room
              you choose. Change your mind about where the sofa goes? We’ll move it.
            </p>
          </div>
        </div>
      </section>

      <section id="packing" className="py-20 sm:py-24" aria-labelledby="packing-title">
        <div className="wrap">
          <div className="max-w-2xl">
            <h2 id="packing-title" className="h2">Expert packing services</h2>
            <p className="lede mt-4">Every item protected, from treasured keepsakes to everyday essentials. Choose the level of help that suits you.</p>
          </div>
          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {packingOptions.map((o) => (
              <li key={o.title} className="rounded-xl bg-white p-7 shadow-card ring-1 ring-rule/60">
                <h3 className="heading text-xl">{o.title}</h3>
                <p className="mt-2 text-steel">{o.text}</p>
              </li>
            ))}
          </ul>
          <div className="mt-12 grid gap-10 rounded-xl bg-navy p-8 text-white sm:p-12 lg:grid-cols-2">
            <div>
              <h3 className="heading text-2xl">What we provide</h3>
              <p className="mt-3 text-white/80">
                Packing yourself is a good chance to declutter. Mark fragile boxes clearly and label which room each one belongs in.
              </p>
            </div>
            <ul className="space-y-3">
              {materials.map((m) => (
                <li key={m} className="flex gap-3">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-livery" aria-hidden="true" /> {m}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="commercial" className="border-t border-rule bg-paper py-20 sm:py-24" aria-labelledby="commercial-title">
        <div className="wrap grid gap-10 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 id="commercial-title" className="h2">Commercial and office removals</h2>
            <p className="lede mt-4">Experienced teams who manage your business move from beginning to end.</p>
          </div>
          <div className="space-y-4 text-lg text-navy/85">
            <p>From a small internal office move to a relocation across the country, every move is planned and run by our practised staff.</p>
            <p>
              We can store your equipment securely during the move, offer temporary storage if your new premises aren’t ready,
              and keep office items that need long-term storage in our guarded facilities.
            </p>
            <Link href="/storage" className="link inline-block">See our storage options</Link>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24" aria-labelledby="fleet-title">
        <div className="wrap">
          <h2 id="fleet-title" className="h2 max-w-xl">Our own fleet, matched to your move</h2>
          <p className="lede mt-4 max-w-2xl">From compact vans for smaller moves to pantechnicon lorries for complex, multi-day relocations.</p>
          <div className="mt-12"><FleetLineup /></div>
        </div>
      </section>

      <Testimonials />
      <FinalCta />
    </>
  );
}
