import { PhoneLettering, QuoteButton } from "@/components/site/Actions";

type Props = { title?: string; text?: string };

/** The closing livery panel: the hero panel's bookend, with the same two ways to start. */
export function FinalPanel({
  title = "Tell us about your move",
  text = "Start a free quote online, or call the office and talk it through.",
}: Props) {
  return (
    <section aria-labelledby="final-title" className="wrap pb-section">
      <div className="surface-brand rounded-md px-6 py-10 sm:px-10 lg:flex lg:items-end lg:justify-between lg:gap-12 lg:px-14 lg:py-14">
        <div className="max-w-[38rem]">
          <h2 id="final-title" className="text-h2 font-bold">
            {title}
          </h2>
          <p className="mt-4 text-lead text-fg-muted">{text}</p>
        </div>
        <div data-primary-actions className="mt-8 flex flex-col items-start gap-6 sm:flex-row sm:items-center lg:mt-0 lg:shrink-0">
          <QuoteButton className="w-full sm:w-auto" />
          <PhoneLettering />
        </div>
      </div>
    </section>
  );
}
