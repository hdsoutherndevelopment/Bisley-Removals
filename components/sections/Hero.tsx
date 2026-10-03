import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { business, photos } from "@/lib/config";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-deep text-white">
      <Image
        src={photos.hero.src}
        alt={photos.hero.alt}
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-deep/95 via-navy-deep/80 to-navy-deep/25" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-navy-deep/70 to-transparent" />

      <div className="wrap flex min-h-[clamp(560px,82vh,780px)] flex-col justify-center py-20">
        <p className="hero-rise text-base font-semibold text-white/85 sm:text-lg">
          Family-run in Bisley, near Woking, since {business.established}
        </p>
        <h1 className="display hero-rise-2 mt-5 max-w-[15ch] text-[clamp(2.6rem,7vw,5.4rem)]">
          Moving home? Let us take care of everything.
        </h1>
        <p className="hero-rise-3 mt-6 max-w-[34rem] text-lg text-white/85 sm:text-xl">
          Trusted removals and storage services delivered with care, professionalism and over 40 years of experience.
        </p>
        <div className="hero-rise-3 mt-9 flex flex-col gap-3 sm:flex-row">
          <Link href="/quote" className="btn-primary text-lg">Get a Free Quote</Link>
          <a href={business.phoneHref} className="btn-ghost-light text-lg">
            <Phone className="h-5 w-5" aria-hidden="true" /> Call {business.phone}
          </a>
        </div>
      </div>
      <div className="coachline hero-line" aria-hidden="true" />
    </section>
  );
}
