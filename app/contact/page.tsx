import Link from "next/link";
import { PageIntro } from "@/components/site/PageIntro";
import { Photo } from "@/components/site/Photo";
import { PhoneLettering } from "@/components/site/Actions";
import { LazyContactForm as ContactForm } from "@/components/forms/LazyForms";
import { business, fullAddress, isDemo, photos } from "@/lib/config";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Contact us",
  description: "Call 01483 489611, email info@bisleyremovals.co.uk or find us at Bullhousen Farm, Bisley, Woking GU24 9EW.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageIntro
        trail={[{ name: "Contact", path: "/contact" }]}
        title="Contact Bisley Removal Services"
        lead="Call the office or email us. For a moving quote, start with our online quote form."
      >
        <Link href="/quote" className="btn btn-primary">
          Get a free quote
        </Link>
      </PageIntro>

      <section aria-labelledby="details-title" className="wrap pb-section">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-gutter">
          <div className="lg:col-span-6">
            <h2 id="details-title" className="sr-only">
              Contact details
            </h2>
            <dl className="divide-y divide-rule border-y border-rule">
              <div className="py-6">
                <dt className="font-bold">Phone</dt>
                <dd className="mt-2">
                  <PhoneLettering />
                </dd>
              </div>
              <div className="py-6">
                <dt className="font-bold">Email</dt>
                <dd className="mt-2">
                  <a href={business.emailHref} className="link link-standalone text-lead">
                    {business.email}
                  </a>
                </dd>
              </div>
              <div className="py-6">
                <dt className="font-bold">Yard and office</dt>
                <dd className="mt-2">
                  <address className="not-italic">{fullAddress}</address>
                  <a href={business.directionsUrl} target="_blank" rel="noopener noreferrer" className="link link-standalone mt-1">
                    Get directions<span className="sr-only"> (opens Google Maps in a new tab)</span>
                  </a>
                </dd>
              </div>
              <div className="py-6">
                <dt className="font-bold">Instagram</dt>
                <dd className="mt-2">
                  <a href={business.instagram} target="_blank" rel="noopener noreferrer" className="link link-standalone">
                    @bisleyremovals<span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </dd>
              </div>
            </dl>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            {isDemo ? (
              <Photo photo={photos.yard} sizes="(min-width: 1024px) 40vw, 100vw" caption="The yard at Bullhousen Farm" />
            ) : (
              <div className="surface-alt rounded-md p-6 sm:p-8">
                <h2 className="text-h3 font-semibold">Send a message</h2>
                <p className="mt-2 text-fg-muted">
                  For a moving quote, use the <Link href="/quote" className="link">quote form</Link> instead.
                </p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
