import Image from "next/image";
import Link from "next/link";
import { photos } from "@/lib/config";

export function Difference() {
  return (
    <section className="py-20 sm:py-28" aria-labelledby="difference-title">
      <div className="wrap grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image src={photos.storageYard.src} alt={photos.storageYard.alt} fill sizes="(min-width:1024px) 560px, 100vw" className="object-cover" />
          </div>
          <div className="absolute -bottom-6 right-6 rounded-lg bg-navy px-6 py-5 text-white shadow-card sm:right-[-1.5rem]">
            <p className="display text-4xl">1985</p>
            <p className="mt-1 text-sm text-white/80">The year we started, and still family-run</p>
          </div>
        </div>
        <div>
          <h2 id="difference-title" className="h2">The Bisley difference</h2>
          <div className="mt-6 space-y-5 text-lg text-navy/85">
            <p>
              We’ve been moving families across Surrey and beyond since 1985. Many of our customers come back to us, or
              send their friends, and many of the area’s leading estate agents refer clients our way.
            </p>
            <p>
              That reputation comes from doing the basics properly: an accurate quote, the right vehicle and team for the
              job, careful handling of every item and people who treat your home with respect.
            </p>
            <p className="font-semibold text-navy">Safe, reliable, affordable, and personal from first call to final box.</p>
          </div>
          <Link href="/about" className="btn-navy mt-8">Discover our story</Link>
        </div>
      </div>
    </section>
  );
}
