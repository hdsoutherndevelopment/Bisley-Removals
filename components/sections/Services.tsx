import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/content";
import { photos } from "@/lib/config";

const featuredImages: Record<string, { src: string; alt: string }> = {
  "House Removals": photos.unloading,
  "Storage Solutions": photos.warehouse,
};

export function Services() {
  const featured = services.filter((s) => featuredImages[s.title]);
  const rest = services.filter((s) => !featuredImages[s.title]);

  return (
    <section className="bg-paper py-20 sm:py-28" aria-labelledby="services-title">
      <div className="wrap">
        <div className="max-w-2xl">
          <h2 id="services-title" className="h2">Everything your move needs, from one local team</h2>
          <p className="lede mt-4">
            Homes, offices and everything in between, packed, moved and stored by people who do this every day.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {featured.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="group overflow-hidden rounded-xl bg-white shadow-card ring-1 ring-rule/60 transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={featuredImages[s.title].src}
                  alt={featuredImages[s.title].alt}
                  fill
                  sizes="(min-width:1024px) 600px, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-7">
                <h3 className="heading flex items-center gap-3 text-2xl">
                  <s.icon className="h-6 w-6 text-livery" aria-hidden="true" />
                  {s.title}
                </h3>
                <p className="mt-3 text-steel">{s.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 font-semibold text-navy group-hover:text-livery">
                  Learn more <span className="sr-only">about {s.title.toLowerCase()}</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {rest.map((s) => (
            <li key={s.title}>
              <Link
                href={s.href}
                className="group flex h-full flex-col rounded-xl bg-white p-6 shadow-card ring-1 ring-rule/60 transition-shadow hover:shadow-lg"
              >
                <s.icon className="h-7 w-7 text-livery" aria-hidden="true" />
                <h3 className="heading mt-5 text-xl">{s.title}</h3>
                <p className="mt-2 flex-1 text-[0.97rem] text-steel">{s.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 font-semibold text-navy group-hover:text-livery">
                  Learn more <span className="sr-only">about {s.title.toLowerCase()}</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
