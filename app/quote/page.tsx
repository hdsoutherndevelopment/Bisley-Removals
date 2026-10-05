import { PageIntro } from "@/components/site/PageIntro";
import { QuoteRoutes } from "@/components/sections/QuoteRoutes";
import { LazyQuoteForm as QuoteForm } from "@/components/forms/LazyForms";
import { isDemo } from "@/lib/config";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Get a free quote",
  description:
    "Start a free removals quote online, or call 01483 489611. Full house moves, office moves, part loads and single items from Bisley, near Woking.",
  path: "/quote",
});

export default function QuotePage() {
  return (
    <>
      <PageIntro
        trail={[{ name: "Get a free quote", path: "/quote" }]}
        title="Get a free quote"
        lead="Choose the form that fits your move. Both go straight to our office, and quotes are free."
      />
      <QuoteRoutes />
      {!isDemo && (
        <section aria-labelledby="form-title" className="surface-alt section">
          <div className="wrap max-w-[52rem]">
            <h2 id="form-title" className="text-h2 font-bold">
              Or send us the basics
            </h2>
            <p className="mt-4 text-lead text-fg-muted">Give us a few details and we will call you back to arrange your quote.</p>
            <div className="mt-8">
              <QuoteForm />
            </div>
          </div>
        </section>
      )}
    </>
  );
}
