import Link from "next/link";
import { Photo } from "@/components/site/Photo";
import { photos } from "@/lib/config";
import { storageSteps } from "@/lib/content";

export function StorageSteps() {
  return (
    <ol className="space-y-6">
      {storageSteps.map((step, i) => (
        <li key={step} className="grid grid-cols-[2.25rem_1fr] gap-3">
          <span aria-hidden="true" className="numerals font-display text-h3 font-bold leading-none">
            {i + 1}
          </span>
          <p>{step}</p>
        </li>
      ))}
    </ol>
  );
}

export function StorageFeature() {
  return (
    <section aria-labelledby="storage-title" className="surface-alt section">
      <div className="wrap grid items-start gap-10 lg:grid-cols-12 lg:gap-gutter">
        <div className="lg:col-span-6">
          <h2 id="storage-title" className="text-h2 font-bold">
            Storage, packed and sealed at your home
          </h2>
          <p className="mt-5 text-lead text-fg-muted">
            Short or long term, for household furniture or business equipment. We don&apos;t offer self storage: your belongings
            are packed and sealed at your home, so they are handled as little as possible.
          </p>
          <div className="mt-8">
            <StorageSteps />
          </div>
          <Link href="/storage" className="btn btn-secondary mt-8">
            How our storage works
          </Link>
        </div>
        <Photo
          photo={photos.vanAtContainers}
          sizes="(min-width: 1024px) 40vw, 100vw"
          caption="Steel storage containers at our Bisley yard"
          className="lg:col-span-5 lg:col-start-8"
        />
      </div>
    </section>
  );
}
