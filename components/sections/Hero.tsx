import { Photo } from "@/components/site/Photo";
import { PhoneLettering, QuoteButton } from "@/components/site/Actions";
import { photos } from "@/lib/config";

/**
 * The lorry outside a Surrey home, then the livery panel: the one bold element on the page.
 * Words sit on the solid panel, never on the photograph. Nothing animates in.
 */
export function Hero() {
  return (
    <section aria-labelledby="hero-title">
      <div className="mx-auto max-w-wide">
        <Photo
          photo={photos.lorryDriveway}
          aspect="var(--hero-aspect)"
          sizes="(min-width: 1440px) 1440px, 100vw"
          priority
          position="50% 62%"
          className="[--hero-aspect:4/3] md:[--hero-aspect:16/9] lg:[--hero-aspect:21/9]"
        />
      </div>
      <div className="wrap">
        <div className="surface-brand relative -mx-margin px-margin pb-10 pt-8 md:mx-0 md:-mt-28 md:max-w-[46rem] md:rounded-md md:p-10 lg:-mt-44 lg:p-12">
          <h1 id="hero-title" className="text-display font-bold">
            Surrey removals by our own crews, since 1985
          </h1>
          <p className="mt-5 max-w-[36rem] text-lead text-fg-muted">
            Removals, packing and containerised storage from our yard at Bullhousen Farm in Bisley, near Woking. Every porter
            is our own full-time employee. No agency staff, no subcontractors.
          </p>
          <div data-primary-actions className="mt-8 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-8">
            <QuoteButton className="w-full sm:w-auto" />
            <PhoneLettering />
          </div>
        </div>
      </div>
    </section>
  );
}
