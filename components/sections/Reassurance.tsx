import Link from "next/link";
import { Photo } from "@/components/site/Photo";
import { QuoteButton } from "@/components/site/Actions";
import { photos } from "@/lib/config";

const facts = [
  {
    title: "Full-time porters, no agency staff",
    text: "Every porter is employed by us and trained at our Bisley yard in packing, lifting, loading and storage.",
  },
  {
    title: "Insured up to £100,000 as standard",
    text: "Higher-value moves can be covered too, and if you ever need to claim, we pay the excess.",
    link: { href: "/insurance", label: "How the cover works" },
  },
  {
    title: "Boxes and materials delivered free",
    text: "Packing yourself? We drop off boxes, bubble wrap and paper and collect them afterwards at no charge.",
  },
  {
    title: "A vehicle for every kind of access",
    text: "From crew vans and Lutons to low loaders and HGVs, each one carrying piano trolleys, blankets, straps and floor protection.",
  },
] as const;

export function Reassurance() {
  return (
    <section aria-labelledby="crews-title" className="section">
      <div className="wrap grid items-center gap-10 lg:grid-cols-12 lg:gap-gutter">
        <Photo
          photo={photos.crew}
          sizes="(min-width: 1024px) 50vw, 100vw"
          caption="The crew at our yard in Bisley"
          className="lg:col-span-6"
        />
        <div className="lg:col-span-5 lg:col-start-8">
          <h2 id="crews-title" className="text-h2 font-bold">
            Our own people and our own lorries
          </h2>
          <dl className="mt-8 divide-y divide-rule border-y border-rule">
            {facts.map((f) => (
              <div key={f.title} className="py-5">
                <dt className="text-h4 font-bold">{f.title}</dt>
                <dd className="mt-1 text-fg-muted">
                  {f.text}
                  {"link" in f && f.link && (
                    <>
                      {" "}
                      <Link href={f.link.href} className="link">
                        {f.link.label}
                      </Link>
                    </>
                  )}
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-8">
            <QuoteButton />
          </div>
        </div>
      </div>
    </section>
  );
}
