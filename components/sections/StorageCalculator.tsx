"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Check, Info } from "lucide-react";

const properties = [
  { id: "part", label: "A few items or rooms", range: [1, 1] },
  { id: "1bed", label: "Studio or 1-bed flat", range: [1, 2] },
  { id: "2bed", label: "2-bed home", range: [2, 3] },
  { id: "3bed", label: "3-bed house", range: [3, 5] },
  { id: "4bed", label: "4-bed house", range: [5, 7] },
  { id: "5bed", label: "5+ bed house", range: [7, 10] },
] as const;

const durations = ["Under 1 month", "1 to 3 months", "3 to 6 months", "6 to 12 months", "Over a year", "Not sure yet"] as const;

const extras = [
  { id: "garage", label: "Garage or shed contents", add: 1 },
  { id: "garden", label: "Garden furniture", add: 0.5 },
  { id: "piano", label: "Piano", add: 0.5 },
  { id: "white", label: "White goods", add: 0.5 },
  { id: "bikes", label: "Bikes or sports kit", add: 0.5 },
  { id: "business", label: "Business stock or archive boxes", add: 1 },
] as const;

/**
 * CONFIRM: container ranges are a general industry guide (one furniture storage container
 * per room or so), not Bisley's own figures. No prices are shown by design.
 */
export function StorageCalculator() {
  const [property, setProperty] = useState<(typeof properties)[number]["id"] | "">("");
  const [duration, setDuration] = useState<(typeof durations)[number] | "">("");
  const [selected, setSelected] = useState<string[]>([]);

  const prop = properties.find((p) => p.id === property);
  const chosenExtras = extras.filter((e) => selected.includes(e.id));

  const estimate = useMemo(() => {
    if (!prop) return null;
    const add = chosenExtras.reduce((n, e) => n + e.add, 0);
    const low = Math.ceil(prop.range[0] + add * 0.5);
    const high = Math.ceil(prop.range[1] + add);
    return low === high ? `${low}` : `${low} to ${high}`;
  }, [prop, chosenExtras]);

  const toggle = (id: string) => setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));

  const quoteHref = useMemo(() => {
    const lines = [
      "Storage enquiry from the website calculator.",
      prop ? `Property: ${prop.label}` : "",
      duration ? `Storage needed for: ${duration}` : "",
      chosenExtras.length ? `Additional items: ${chosenExtras.map((e) => e.label).join(", ")}` : "",
    ].filter(Boolean);
    const params = new URLSearchParams({ service: "Storage", details: lines.join("\n") });
    return `/quote?${params.toString()}#quote-form`;
  }, [prop, duration, chosenExtras]);

  const ready = Boolean(prop && duration);

  return (
    <section id="calculator" className="py-20 sm:py-28" aria-labelledby="calc-title">
      <div className="wrap">
        <div className="max-w-2xl">
          <h2 id="calc-title" className="h2">Storage calculator</h2>
          <p className="lede mt-4">
            Tell us roughly what needs storing and for how long. We’ll use your answers to prepare a storage quote.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          <div className="space-y-10">
            <fieldset>
              <legend className="heading text-lg">1. What are you storing?</legend>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {properties.map((p) => (
                  <label
                    key={p.id}
                    className={`flex min-h-[56px] cursor-pointer items-center gap-3 rounded-lg border-2 px-4 py-3 font-medium transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-[3px] has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-livery ${
                      property === p.id ? "border-navy bg-navy text-white" : "border-rule bg-white hover:border-steel-light"
                    }`}
                  >
                    <input type="radio" name="property" value={p.id} checked={property === p.id} onChange={() => setProperty(p.id)} className="sr-only" />
                    {p.label}
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className="heading text-lg">2. For roughly how long?</legend>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {durations.map((d) => (
                  <label
                    key={d}
                    className={`flex min-h-[56px] cursor-pointer items-center gap-3 rounded-lg border-2 px-4 py-3 font-medium transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-[3px] has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-livery ${
                      duration === d ? "border-navy bg-navy text-white" : "border-rule bg-white hover:border-steel-light"
                    }`}
                  >
                    <input type="radio" name="duration" value={d} checked={duration === d} onChange={() => setDuration(d)} className="sr-only" />
                    {d}
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className="heading text-lg">3. Anything else? <span className="font-normal text-steel">(optional)</span></legend>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {extras.map((e) => {
                  const on = selected.includes(e.id);
                  return (
                    <label
                      key={e.id}
                      className={`flex min-h-[52px] cursor-pointer items-center gap-3 rounded-lg border-2 px-4 py-3 transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-[3px] has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-livery ${
                        on ? "border-navy bg-paper" : "border-rule bg-white hover:border-steel-light"
                      }`}
                    >
                      <input type="checkbox" checked={on} onChange={() => toggle(e.id)} className="sr-only" />
                      <span className={`grid h-5 w-5 shrink-0 place-items-center rounded border-2 ${on ? "border-navy bg-navy text-white" : "border-steel-light"}`}>
                        {on && <Check className="h-3.5 w-3.5" aria-hidden="true" />}
                      </span>
                      {e.label}
                    </label>
                  );
                })}
              </div>
            </fieldset>
          </div>

          <aside className="h-fit rounded-xl bg-navy p-7 text-white lg:sticky lg:top-28" aria-live="polite">
            <h3 className="heading text-xl">Your storage summary</h3>
            {!prop && !duration ? (
              <p className="mt-4 text-white/75">Choose what you’re storing and for how long to see your summary here.</p>
            ) : (
              <dl className="mt-5 space-y-4">
                <div>
                  <dt className="text-sm text-white/65">Storing</dt>
                  <dd className="font-semibold">{prop?.label ?? "Not chosen yet"}</dd>
                </div>
                <div>
                  <dt className="text-sm text-white/65">Duration</dt>
                  <dd className="font-semibold">{duration || "Not chosen yet"}</dd>
                </div>
                {chosenExtras.length > 0 && (
                  <div>
                    <dt className="text-sm text-white/65">Additional items</dt>
                    <dd className="font-semibold">{chosenExtras.map((e) => e.label).join(", ")}</dd>
                  </div>
                )}
                {estimate && (
                  <div className="border-t border-white/15 pt-4">
                    <dt className="text-sm text-white/65">Rough space guide</dt>
                    <dd className="display mt-1 text-3xl">
                      {estimate} <span className="text-base font-semibold" style={{ fontStretch: "100%" }}>container{estimate === "1" ? "" : "s"}</span>
                    </dd>
                  </div>
                )}
              </dl>
            )}

            <p className="mt-6 flex gap-2 text-sm text-white/70">
              <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              This is an indicative guide, not a price. We confirm the space you need and your exact price when we quote.
            </p>

            {ready ? (
              <Link href={quoteHref} className="btn-primary mt-6 w-full">Request a storage quote</Link>
            ) : (
              <p className="mt-6 rounded-md bg-white/10 px-4 py-3 text-sm">Answer questions 1 and 2 to request your storage quote.</p>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
}
