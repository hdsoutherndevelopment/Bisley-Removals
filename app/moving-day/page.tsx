import Link from "next/link";
import { PageIntro } from "@/components/site/PageIntro";
import { TimetableList } from "@/components/sections/MovingDayTimetable";
import { FinalPanel } from "@/components/sections/FinalPanel";
import { photos } from "@/lib/config";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "What happens on moving day",
  description:
    "How a moving day with Bisley Removal Services runs, from the crew arriving around 8:30am to the final walk-round of your new home.",
  path: "/moving-day",
});

export default function MovingDayPage() {
  return (
    <>
      <PageIntro
        trail={[{ name: "Moving day", path: "/moving-day" }]}
        title="What happens on moving day"
        lead="Your moving day is planned in advance. Timings depend on when keys are released and on your chain, but this is how a typical day runs."
        photo={photos.lorriesAtHouse}
      />

      <section aria-labelledby="timetable-title" className="surface-alt section">
        <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-gutter">
          <h2 id="timetable-title" className="text-h2 font-bold lg:col-span-4">
            A typical day
          </h2>
          <div className="lg:col-span-7 lg:col-start-6">
            <TimetableList />
          </div>
        </div>
      </section>

      <section aria-labelledby="details-title" className="section">
        <div className="wrap">
          <h2 id="details-title" className="text-h2 font-bold">
            The details that make the day easier
          </h2>
          <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-gutter lg:grid-cols-3">
            <div>
              <h3 className="text-h3 font-semibold">Room by room</h3>
              <p className="mt-2 text-fg-muted">
                We usually start loading in the lounge and work through each room in turn, so everything is packed and loaded
                safely.
              </p>
            </div>
            <div>
              <h3 className="text-h3 font-semibold">Clothes on hangers</h3>
              <p className="mt-2 text-fg-muted">
                Clothing goes into our wardrobe cartons on its hangers, so it arrives clean and crease-free.
              </p>
            </div>
            <div>
              <h3 className="text-h3 font-semibold">Furniture rebuilt</h3>
              <p className="mt-2 text-fg-muted">
                At the new house, each item goes where you want it and any furniture we took apart is rebuilt as we unload.
              </p>
            </div>
            <div>
              <h3 className="text-h3 font-semibold">Straight into storage</h3>
              <p className="mt-2 text-fg-muted">
                Anything going into storage leaves with the crew and goes directly to our warehouse.{" "}
                <Link href="/storage" className="link">About storage</Link>
              </p>
            </div>
            <div>
              <h3 className="text-h3 font-semibold">Unpacking, if you want it</h3>
              <p className="mt-2 text-fg-muted">
                If you have booked our unpacking service, we take all the packing materials away before we leave.
              </p>
            </div>
            <div>
              <h3 className="text-h3 font-semibold">A final walk-round</h3>
              <p className="mt-2 text-fg-muted">
                Your team leader checks everything is in the right place and that you are happy, then asks you to sign the
                delivery sheet.
              </p>
            </div>
          </div>
          <p className="mt-12 text-lead">
            Getting ready? Work through our <Link href="/moving-tips" className="link">moving checklist, week by week</Link>.
          </p>
        </div>
      </section>

      <FinalPanel title="Questions about your moving day?" text="Call the office and we will talk you through it, or start a free quote online." />
    </>
  );
}
