import { PageIntro } from "@/components/site/PageIntro";
import { Photo } from "@/components/site/Photo";
import { VideoFacade } from "@/components/sections/VideoFacade";
import { FinalPanel } from "@/components/sections/FinalPanel";
import { business, photos } from "@/lib/config";
import { fleetEquipment } from "@/lib/content";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "About us",
  description:
    "A removals and storage firm in Bisley, near Woking, since 1985, with our own full-time crews, our own lorries and a yard at Bullhousen Farm.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageIntro
        trail={[{ name: "About us", path: "/about" }]}
        title="Removals and storage from Bisley since 1985"
        lead="A local, family-run firm with our own full-time crews, our own fleet and a yard at Bullhousen Farm, near Woking."
        photo={photos.lorriesAtHouse}
      />

      <section aria-labelledby="story-title" className="wrap pb-section">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-gutter">
          <h2 id="story-title" className="text-h2 font-bold lg:col-span-4">
            How we work
          </h2>
          <div className="space-y-4 text-lead text-fg-muted lg:col-span-7 lg:col-start-6">
            <p>
              Since 1985 we have provided an efficient, friendly and cost-effective removals service for homes and businesses across
              Surrey and beyond, and built our reputation on professionalism, reliability and real care for our customers&apos;
              belongings.
            </p>
            <p>
              Much of our work comes from customers we have moved before and the people they recommend us to, and local estate
              agents refer their clients to us.
            </p>
          </div>
        </div>
      </section>

      <section id="crews" aria-labelledby="crews-title" className="surface-alt section">
        <div className="wrap grid items-center gap-10 lg:grid-cols-12 lg:gap-gutter">
          <Photo photo={photos.crew} sizes="(min-width: 1024px) 50vw, 100vw" className="lg:col-span-6" />
          <div className="lg:col-span-5 lg:col-start-8">
            <h2 id="crews-title" className="text-h2 font-bold">
              Our crews
            </h2>
            <div className="mt-5 space-y-4 text-fg-muted">
              <p>
                We employ only our own full-time porters. No agency staff, no subcontractors. Every member of the team is chosen
                for their professionalism, attitude and care with other people&apos;s belongings.
              </p>
              <p>
                Everyone is trained hands-on at our yard in Bisley, covering packing, lifting, loading, storage and looking after
                customers. You will recognise them by their Bisley uniforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="fleet-title" className="section">
        <div className="wrap grid items-center gap-10 lg:grid-cols-12 lg:gap-gutter">
          <div className="lg:col-span-5">
            <h2 id="fleet-title" className="text-h2 font-bold">
              Our fleet and equipment
            </h2>
            <p className="mt-5 text-fg-muted">
              We run our own purpose-built vehicles, maintained to a high standard and painted in our livery, from crew vans to
              HGV lorries. Each one carries {fleetEquipment.join(", ").replace(/, ([^,]*)$/, " and $1")} as standard, to protect your
              belongings and your property.
            </p>
          </div>
          <Photo photo={photos.fleet} sizes="(min-width: 1024px) 50vw, 100vw" className="lg:col-span-6 lg:col-start-7" />
        </div>
      </section>

      {/* CONFIRM: these videos are hosted on another company's Vimeo account. Ask the client for the original files. */}
      <section id="videos" aria-labelledby="videos-title" className="surface-alt section">
        <div className="wrap">
          <h2 id="videos-title" className="text-h2 font-bold">
            A little more about what we do
          </h2>
          <p className="mt-4 max-w-measure text-lead text-fg-muted">Two short videos from our crews. They play here, without leaving the page.</p>
          <div className="mt-10 grid max-w-[44rem] gap-gutter sm:grid-cols-2">
            <VideoFacade vimeoId="1127106966" title="Lights, Cavan, action" duration="1 minute" />
            <VideoFacade vimeoId="1127106861" title="You've seen them out on the road" duration="30 seconds" />
          </div>
        </div>
      </section>

      <section aria-labelledby="company-title" className="section">
        <div className="wrap">
          <h2 id="company-title" className="text-h2 font-bold">
            Company details
          </h2>
          <dl className="mt-8 grid max-w-[48rem] gap-x-gutter gap-y-4 sm:grid-cols-[12rem_1fr]">
            <dt className="font-bold">Company</dt>
            <dd>{business.legalName}</dd>
            <dt className="font-bold">Company number</dt>
            <dd className="numerals">{business.companyNumber}, registered in England and Wales</dd>
            <dt className="font-bold">Registered office</dt>
            <dd>{business.registeredOffice}</dd>
          </dl>
        </div>
      </section>

      <FinalPanel />
    </>
  );
}
