import Link from "next/link";
import { Clock, MapPin, Navigation, Phone, Instagram } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { business, fullAddress } from "@/lib/config";

export function ContactBlock({ title = "Get in touch", headingLevel = "h2" }: { title?: string; headingLevel?: "h1" | "h2" }) {
  const H = headingLevel;
  return (
    <section id="contact" className="py-20 sm:py-28" aria-labelledby="contact-title">
      <div className="wrap grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <H id="contact-title" className={headingLevel === "h1" ? "display text-[clamp(2.2rem,5vw,3.5rem)]" : "h2"}>
            {title}
          </H>
          <p className="mt-6 heading text-xl">{business.name}</p>
          <ul className="mt-6 space-y-5">
            <li className="flex gap-4">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-livery" aria-hidden="true" />
              <div>
                <a href={business.phoneHref} className="text-2xl font-bold hover:text-livery">{business.phone}</a>
                <p className="text-sm text-steel">The quickest way to book a survey or ask a question</p>
              </div>
            </li>
            <li className="flex gap-4">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-livery" aria-hidden="true" />
              <div>
                <address className="not-italic">{fullAddress}</address>
                <a href={business.directionsUrl} target="_blank" rel="noopener noreferrer" className="link mt-1 inline-flex items-center gap-1.5">
                  <Navigation className="h-4 w-4" aria-hidden="true" /> Get directions
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <Clock className="mt-1 h-5 w-5 shrink-0 text-livery" aria-hidden="true" />
              <div>
                <p>Office open {business.officeHours.label}</p>
                <p className="text-sm text-steel">Call ahead before visiting the yard</p>
              </div>
            </li>
            <li className="flex gap-4">
              <Instagram className="mt-1 h-5 w-5 shrink-0 text-livery" aria-hidden="true" />
              <a href={business.instagram} target="_blank" rel="noopener noreferrer" className="link">@bisleyremovals on Instagram</a>
            </li>
          </ul>
          <div className="mt-8 aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-rule">
            <iframe
              title="Map showing Bisley Removals at Bullhousen Farm, Bisley"
              src={business.mapEmbedUrl}
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <div id="message" className="h-fit rounded-xl bg-paper p-6 sm:p-10">
          <h3 className="heading text-2xl">Drop us a line</h3>
          <p className="mt-2 text-steel">Send a question and we’ll get back to you. For a moving quote, use the <Link href="/quote" className="link">quote form</Link>.</p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
