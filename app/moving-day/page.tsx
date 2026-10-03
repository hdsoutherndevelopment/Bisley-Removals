import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/site/PageHero";
import { FinalCta } from "@/components/sections/FinalCta";
import { photos } from "@/lib/config";

export const metadata: Metadata = {
  title: "What Happens on Moving Day",
  description:
    "How a Bisley Removals moving day runs, from the 8:30am arrival and walkthrough to unloading, furniture reassembly and a final check of your new home.",
  alternates: { canonical: "/moving-day" },
};

const timeline = [
  {
    time: "Day before",
    title: "Packing done",
    text: "Any major packing is completed the day before, leaving only small finishing touches for the morning.",
  },
  {
    time: "Around 8:30am",
    title: "We arrive and walk through",
    text: "The team introduces themselves and walks through your home with you to confirm what’s going and what’s staying.",
  },
  {
    time: "Morning",
    title: "Room-by-room loading",
    text: "We usually start in the lounge and work methodically through each room. Clothes go into wardrobe cartons, so they stay clean and crease-free.",
  },
  {
    time: "12:30 to 1pm",
    title: "Your old home is clear",
    text: "Your home is typically cleared and ready for completion. Anything going into storage heads to our secure warehouse at this point.",
  },
  {
    time: "Midday to 2pm",
    title: "Completion and unloading",
    text: "Once keys are released, we unload, place each item where you want it and rebuild any furniture as we go.",
  },
  {
    time: "Aim: by 5pm",
    title: "Final walkthrough",
    text: "If you’ve chosen unpacking, we clear the materials away. Your team leader then walks through your new home with you to make sure you’re happy.",
  },
];

export default function MovingDayPage() {
  return (
    <>
      <PageHero
        title="A smooth, organised move, from the moment we arrive"
        intro="Your moving day is carefully planned to run like clockwork. Here’s how a typical day goes."
        image={photos.hero}
      />

      <section className="py-20 sm:py-28" aria-labelledby="timeline-title">
        <div className="wrap grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <h2 id="timeline-title" className="h2">A typical moving day</h2>
            <p className="lede mt-4">
              Timings depend on key release and your chain, but this is the plan we work to.
            </p>
            <Link href="/quote" className="btn-primary mt-8">Plan my move</Link>
          </div>

          <ol className="relative border-l-2 border-rule pl-8 sm:pl-12">
            {timeline.map((t) => (
              <li key={t.title} className="relative pb-12 last:pb-0">
                <span aria-hidden="true" className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-4 border-white bg-livery ring-2 ring-livery sm:-left-[57px]" />
                <p className="font-bold text-livery">{t.time}</p>
                <h3 className="heading mt-1 text-2xl">{t.title}</h3>
                <p className="mt-2 max-w-prose text-lg text-navy/80">{t.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-rule bg-paper py-20" aria-labelledby="prep-title">
        <div className="wrap grid gap-10 lg:grid-cols-3">
          <h2 id="prep-title" className="h2 lg:col-span-1">Getting ready</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-2">
            <div>
              <h3 className="heading text-xl">Label as you pack</h3>
              <p className="mt-2 text-steel">Mark fragile boxes clearly and note which room each box is going to. It makes unloading much quicker.</p>
            </div>
            <div>
              <h3 className="heading text-xl">Tell us about access</h3>
              <p className="mt-2 text-steel">Narrow lanes, parking restrictions or long carries all affect the vehicle we send, so mention them when you get your quote.</p>
            </div>
            <div>
              <h3 className="heading text-xl">Keep essentials with you</h3>
              <p className="mt-2 text-steel">Keys, documents, medication, chargers and the kettle are best kept in your car rather than on the van.</p>
            </div>
            <div>
              <h3 className="heading text-xl">Need storage too?</h3>
              <p className="mt-2 text-steel">
                If your dates don’t line up, items can go straight to our warehouse. <Link href="/storage" className="link">About storage</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <FinalCta title="Questions about your moving day?" text="Call the office and we’ll talk you through it. We’re always happy to help." />
    </>
  );
}
