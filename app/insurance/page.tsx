import Link from "next/link";
import { PageIntro } from "@/components/site/PageIntro";
import { FinalPanel } from "@/components/sections/FinalPanel";
import { business } from "@/lib/config";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Insurance for your move",
  description:
    "Everything we move or store is insured up to £100,000 as standard, with extra cover for higher-value moves. We pay the excess if you claim.",
  path: "/insurance",
});

// CONFIRM: the broker's name, the policy basis for the £100,000 figure and the excess arrangement.
export default function InsurancePage() {
  return (
    <>
      <PageIntro
        trail={[{ name: "Insurance", path: "/insurance" }]}
        title="Insurance for your move"
        lead="Everything in our care is insured up to £100,000 as standard, and if you ever need to claim, we pay the excess."
      />

      <section aria-labelledby="cover-title" className="wrap pb-section">
        <div className="coachline" aria-hidden="true" />
        <div className="grid divide-y divide-rule lg:grid-cols-3 lg:divide-x lg:divide-y-0">
          <div className="py-8 lg:pr-gutter">
            <h2 id="cover-title" className="text-h3 font-semibold">
              What is covered
            </h2>
            <p className="mt-3 text-fg-muted">
              All items we move or store are automatically insured up to a total value of £100,000. If your belongings are
              worth more, ask us about additional cover for higher-value moves.
            </p>
          </div>
          <div className="py-8 lg:px-gutter">
            <h2 className="text-h3 font-semibold">Who arranges it</h2>
            <p className="mt-3 text-fg-muted">
              Our policies are arranged through a broker that specialises in household removals insurance. Goods in our
              warehouse are covered while they are in store.
            </p>
          </div>
          <div className="py-8 lg:pl-gutter">
            <h2 className="text-h3 font-semibold">If you need to claim</h2>
            <p className="mt-3 text-fg-muted">
              Tell the office and we will take you through it. We cover the cost of the excess, so you do not pay it.
            </p>
          </div>
        </div>
        <div className="coachline" aria-hidden="true" />
        <p className="mt-10 max-w-measure text-lead">
          Want to talk about cover for your move? Call <a href={business.phoneHref} className="link">{business.phone}</a> or{" "}
          <Link href="/contact" className="link">contact the office</Link>.
        </p>
      </section>

      <FinalPanel />
    </>
  );
}
