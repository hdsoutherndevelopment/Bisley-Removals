import { PageIntro } from "@/components/site/PageIntro";
import { FinalPanel } from "@/components/sections/FinalPanel";
import { business } from "@/lib/config";
import { checklist } from "@/lib/content";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Moving house checklist, week by week",
  description:
    "A moving checklist from a Surrey removals firm: who to tell, what to pack first, and what to keep with you rather than on the lorry.",
  path: "/moving-tips",
});

export default function MovingTipsPage() {
  return (
    <>
      <PageIntro
        trail={[{ name: "Moving checklist", path: "/moving-tips" }]}
        title="Moving house checklist"
        lead="What to do and when, from a few weeks out to the day itself. Practical advice from more than 40 years of moving people around Surrey and beyond."
      />

      <section aria-labelledby="checklist-title" className="wrap pb-section">
        <h2 id="checklist-title" className="sr-only">
          The checklist
        </h2>
        <ol className="max-w-[48rem]">
          {checklist.map((stage) => (
            <li key={stage.when} className="border-t-2 border-panel py-8">
              <h3 className="text-h3 font-semibold">{stage.when}</h3>
              <ul className="mt-4 list-disc space-y-3 pl-5 marker:text-fg-muted">
                {stage.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
          <li className="border-t-2 border-panel py-8">
            <h3 className="text-h3 font-semibold">After your move</h3>
            <p className="mt-4">
              So much of our work comes from word of mouth. If you were happy with your move, a review helps other people find a
              removals firm they can trust:{" "}
              <a href={business.googleReviews} target="_blank" rel="noopener noreferrer" className="link">
                review us on Google<span className="sr-only"> (opens in a new tab)</span>
              </a>{" "}
              or tag us on{" "}
              <a href={business.instagram} target="_blank" rel="noopener noreferrer" className="link">
                Instagram<span className="sr-only"> (opens in a new tab)</span>
              </a>
              .
            </p>
          </li>
        </ol>
      </section>

      <FinalPanel />
    </>
  );
}
