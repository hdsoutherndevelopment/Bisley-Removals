import { Photo } from "@/components/site/Photo";
import { business, fullAddress, photos } from "@/lib/config";

export function LocalBlock() {
  return (
    <section aria-labelledby="local-title" className="section">
      <div className="wrap grid items-center gap-10 lg:grid-cols-12 lg:gap-gutter">
        <div className="lg:col-span-5">
          <h2 id="local-title" className="text-h2 font-bold">
            Based in Bisley, near Woking
          </h2>
          <p className="mt-5 text-lead text-fg-muted">
            Our yard is at Bullhousen Farm in Bisley. We move homes and businesses across Surrey and beyond, including
            long-distance moves such as Woking to Devon.
          </p>
          <address className="mt-6 not-italic">{fullAddress}</address>
          <a href={business.directionsUrl} target="_blank" rel="noopener noreferrer" className="link link-standalone mt-1">
            Get directions<span className="sr-only"> (opens Google Maps in a new tab)</span>
          </a>
        </div>
        <Photo
          photo={photos.yard}
          sizes="(min-width: 1024px) 50vw, 100vw"
          caption="The yard at Bullhousen Farm"
          className="lg:col-span-6 lg:col-start-7"
        />
      </div>
    </section>
  );
}
