"use client";

import { useCallback, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const startX = useRef<number | null>(null);
  const count = testimonials.length;

  const go = useCallback((dir: 1 | -1) => setIndex((i) => (i + dir + count) % count), [count]);

  const t = testimonials[index];

  return (
    <section className="bg-paper py-20 sm:py-28" aria-labelledby="reviews-title">
      <div className="wrap">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 id="reviews-title" className="h2">Five-star service as standard</h2>
            <p className="lede mt-3">In our customers’ own words.</p>
          </div>
          <div className="flex gap-3">
            <button type="button" onClick={() => go(-1)} className="grid h-12 w-12 place-items-center rounded-full border-2 border-navy/20 bg-white text-navy transition-colors hover:border-navy" aria-label="Previous review">
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button type="button" onClick={() => go(1)} className="grid h-12 w-12 place-items-center rounded-full border-2 border-navy/20 bg-white text-navy transition-colors hover:border-navy" aria-label="Next review">
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div
          className="mt-10 touch-pan-y select-none"
          role="region"
          aria-roledescription="carousel"
          aria-label="Customer reviews"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") go(-1);
            if (e.key === "ArrowRight") go(1);
          }}
          onPointerDown={(e) => (startX.current = e.clientX)}
          onPointerUp={(e) => {
            if (startX.current === null) return;
            const dx = e.clientX - startX.current;
            if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
            startX.current = null;
          }}
        >
          <figure
            key={index}
            aria-roledescription="slide"
            aria-label={`Review ${index + 1} of ${count}`}
            aria-live="polite"
            className="hero-rise grid gap-8 rounded-xl bg-white p-8 shadow-card ring-1 ring-rule/60 sm:p-12 lg:grid-cols-[1fr_15rem]"
          >
            <blockquote className="text-[clamp(1.15rem,2vw,1.45rem)] leading-relaxed text-navy">
              <p>“{t.quote}”</p>
            </blockquote>
            <figcaption className="flex flex-col justify-end border-t border-rule pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <span className="flex gap-1 text-livery" role="img" aria-label="Rated 5 out of 5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" aria-hidden="true" />
                ))}
              </span>
              <span className="heading mt-3 text-xl">{t.name}</span>
              <span className="mt-1 text-sm text-steel">Bisley Removals customer</span>
            </figcaption>
          </figure>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-2" role="group" aria-label="Choose a review">
          {testimonials.map((r, i) => (
            <button
              key={r.name}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show review from ${r.name}`}
              aria-current={i === index ? "true" : undefined}
              className="grid h-8 w-8 place-items-center"
            >
              <span className={`block h-2.5 rounded-full transition-all ${i === index ? "w-7 bg-livery" : "w-2.5 bg-navy/25"}`} />
            </button>
          ))}
          <span className="ml-auto text-sm text-steel" aria-hidden="true">
            {index + 1} / {count}
          </span>
        </div>
      </div>
    </section>
  );
}
