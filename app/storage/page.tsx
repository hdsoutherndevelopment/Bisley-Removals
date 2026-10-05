import { Check } from "lucide-react";
import { PageIntro } from "@/components/site/PageIntro";
import { Photo } from "@/components/site/Photo";
import { PhoneLettering, QuoteButton } from "@/components/site/Actions";
import { StorageSteps } from "@/components/sections/StorageFeature";
import { CalcumateEmbed } from "@/components/sections/CalcumateEmbed";
import { FinalPanel } from "@/components/sections/FinalPanel";
import { business, isDemo, photos } from "@/lib/config";
import { storagePromises } from "@/lib/content";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Containerised storage near Woking",
  description:
    "Household and business storage in sealed containers, packed at your home and kept in our Bisley warehouse with 24-hour security and CCTV.",
  path: "/storage",
});

export default function StoragePage() {
  return (
    <>
      <PageIntro
        trail={[{ name: "Storage", path: "/storage" }]}
        title="Containerised storage in Bisley, near Woking"
        lead="For household furniture and business equipment, packed and sealed at your premises and kept in our warehouse until you need it."
        photo={photos.containers}
        photoPosition="50% 60%"
      >
        <QuoteButton />
        <PhoneLettering />
      </PageIntro>

      <section aria-labelledby="how-title" className="wrap pb-section">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-gutter">
          <div className="lg:col-span-6">
            <h2 id="how-title" className="text-h2 font-bold">
              How containerised storage works
            </h2>
            <div className="mt-8">
              <StorageSteps />
            </div>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <h2 className="text-h3 font-semibold">What every customer gets</h2>
            <ul className="mt-6 space-y-4">
              {storagePromises.map((p) => (
                <li key={p} className="flex gap-3">
                  <Check className="mt-1 h-5 w-5 shrink-0" aria-hidden="true" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-fg-muted">
              We don&apos;t offer self storage. Containerised storage keeps handling to a minimum: your belongings are packed and
              sealed at your home and stay in their container until you need them.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="steel-title" className="surface-alt section">
        <div className="wrap grid items-center gap-10 lg:grid-cols-12 lg:gap-gutter">
          <Photo photo={photos.steelContainers} aspect="1 / 1" sizes="(min-width: 1024px) 40vw, 100vw" className="lg:col-span-5" />
          <div className="lg:col-span-6 lg:col-start-7">
            <h2 id="steel-title" className="text-h2 font-bold">
              Insulated steel containers
            </h2>
            <p className="mt-5 text-fg-muted">
              For short or long-term storage we also have steel containers built for furniture. Grafo Therm insulation and
              ventilation keep your things safe and dry, and they come in a range of sizes to suit what you are storing, more
              cost-effectively.
            </p>
          </div>
        </div>
      </section>

      <section id="space" aria-labelledby="space-title" className="section">
        <div className="wrap">
          <h2 id="space-title" className="text-h2 font-bold">
            How much space will you need?
          </h2>
          {isDemo ? (
            <div className="mt-5 max-w-measure space-y-4 text-lead text-fg-muted">
              <p>
                Tell us roughly what you want to store and for how long, and we will work out the space and the price for you.
              </p>
              <p>
                Call <a href={business.phoneHref} className="link">{business.phone}</a> or email{" "}
                <a href={business.emailHref} className="link">{business.email}</a>.
              </p>
            </div>
          ) : (
            <div className="mt-8">
              <CalcumateEmbed />
            </div>
          )}
        </div>
      </section>

      <FinalPanel
        title="Storing between moves?"
        text="We can include storage in your removals quote, or quote for storage on its own."
      />
    </>
  );
}
