import { ExternalLink } from "lucide-react";
import { PhoneLettering } from "@/components/site/Actions";
import { business } from "@/lib/config";

/**
 * The quote hand-off. Both routes open the company's own Removals Manager forms, which go
 * straight to the office. These are the only enquiry forms on the demo, by design.
 */
export function QuoteRoutes() {
  return (
    <section aria-labelledby="routes-title" className="wrap pb-section">
      <h2 id="routes-title" className="sr-only">
        Choose your quote form
      </h2>
      <div className="coachline" aria-hidden="true" />
      <div data-primary-actions className="grid divide-y divide-rule md:grid-cols-2 md:divide-x md:divide-y-0">
        <div className="py-8 md:pr-gutter">
          <h3 className="text-h3 font-semibold">Moving home or office</h3>
          <p className="mt-3 max-w-[30rem] text-fg-muted">
            Tell us both addresses, the type and size of the property, roughly when you want to move and whether you would
            like packing. A rough date is fine.
          </p>
          <a href={business.quoteUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-6">
            Start your quote
            <ExternalLink className="h-5 w-5" aria-hidden="true" />
            <span className="sr-only"> (opens our quote form in a new tab)</span>
          </a>
        </div>
        <div className="py-8 md:pl-gutter">
          <h3 className="text-h3 font-semibold">Single items or a part load</h3>
          <p className="mt-3 max-w-[30rem] text-fg-muted">
            Moving a few pieces rather than a whole home? List the items you want moved and where they are going.
          </p>
          <a href={business.partLoadQuoteUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary mt-6">
            Quote for single items
            <ExternalLink className="h-5 w-5" aria-hidden="true" />
            <span className="sr-only"> (opens our quote form in a new tab)</span>
          </a>
        </div>
      </div>
      <div className="coachline" aria-hidden="true" />

      <div className="mt-section grid gap-10 md:grid-cols-2 md:gap-gutter">
        <div>
          <h2 className="text-h2 font-bold">Rather talk it through?</h2>
          <p className="mt-4 text-lead text-fg-muted">Call the office, or email the details of your move.</p>
          <div className="mt-6 flex flex-col items-start gap-4">
            <PhoneLettering />
            <a href={business.emailHref} className="link link-standalone text-lead">
              {business.email}
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-h2 font-bold">What happens next</h2>
          <p className="mt-4 text-lead text-fg-muted">
            Someone from the office will be in touch to talk through your move and arrange your quote. Quotes are free.
          </p>
        </div>
      </div>
    </section>
  );
}
