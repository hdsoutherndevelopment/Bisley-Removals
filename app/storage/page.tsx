import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, Phone } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { StorageCalculator } from "@/components/sections/StorageCalculator";
import { FinalCta } from "@/components/sections/FinalCta";
import { business, photos } from "@/lib/config";

export const metadata: Metadata = {
  title: "Secure Furniture Storage in Woking and Surrey",
  description:
    "Secure, inventoried container storage for household furniture and business equipment near Woking. Fire-resistant warehouse with 24-hour security and CCTV. Short and long term.",
  alternates: { canonical: "/storage" },
};

const promises = [
  "Clean, dry container units",
  "A full inventory of everything placed into store",
  "Every container security sealed",
  "Full insurance cover while your goods are stored",
  "24-hour security and CCTV",
];

export default function StoragePage() {
  return (
    <>
      <PageHero
        title="Secure storage, handled by the people who move you"
        intro="Containerised storage for household furniture and business equipment, for a week between completions or a year away."
        image={photos.warehouse}
      >
        <Link href="#calculator" className="btn-primary">Use the storage calculator</Link>
        <a href={business.phoneHref} className="btn-ghost-light"><Phone className="h-4 w-4" aria-hidden="true" /> {business.phone}</a>
      </PageHero>

      <section className="py-20 sm:py-24" aria-labelledby="how-title">
        <div className="wrap">
          <h2 id="how-title" className="h2 max-w-2xl">Two ways to store with us</h2>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <article className="overflow-hidden rounded-xl bg-white shadow-card ring-1 ring-rule/60">
              <div className="relative aspect-[16/9]">
                <Image src={photos.storageYard.src} alt={photos.storageYard.alt} fill sizes="(min-width:1024px) 600px, 100vw" className="object-cover" />
              </div>
              <div className="p-7 sm:p-9">
                <h3 className="heading text-2xl">Warehouse container storage</h3>
                <div className="mt-4 space-y-3 text-navy/85">
                  <p>
                    Recommended for household furniture and effects. Our vehicle arrives with empty containers on board, and
                    while the team wraps and loads your belongings, your team leader keeps a full inventory so any item can be
                    found if you need it.
                  </p>
                  <p>
                    Filled containers are sealed, driven back and lifted into our highly fire-resistant warehouse, supervised
                    24 hours a day by security staff and CCTV. Minimum handling, maximum security.
                  </p>
                </div>
              </div>
            </article>
            <article className="overflow-hidden rounded-xl bg-white shadow-card ring-1 ring-rule/60">
              <div className="relative aspect-[16/9]">
                <Image src={photos.containers.src} alt={photos.containers.alt} fill sizes="(min-width:1024px) 600px, 100vw" className="object-cover" />
              </div>
              <div className="p-7 sm:p-9">
                <h3 className="heading text-2xl">Insulated steel containers</h3>
                <div className="mt-4 space-y-3 text-navy/85">
                  <p>
                    For short or long-term storage, our steel containers are purpose-built for furniture, with insulation and
                    ventilation that keep your goods safe, dry and protected.
                  </p>
                  <p>They come in a range of sizes, so you only pay for the space you actually need.</p>
                </div>
              </div>
            </article>
          </div>

          <div className="mt-12 grid gap-10 rounded-xl bg-navy p-8 text-white sm:p-12 lg:grid-cols-[1fr_1.3fr]">
            <div>
              <h3 className="heading text-2xl">What every customer gets</h3>
              <p className="mt-3 text-white/80">
                Please note we don’t offer self storage. Your goods are packed, moved and looked after by our own team.
              </p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {promises.map((p) => (
                <li key={p} className="flex gap-3">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-livery" aria-hidden="true" /> {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="border-t border-rule bg-paper">
        <StorageCalculator />
      </div>

      <FinalCta title="Storing between moves?" text="We can collect, store and deliver as one job. Ask for a combined removals and storage quote." />
    </>
  );
}
