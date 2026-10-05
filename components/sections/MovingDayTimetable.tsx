import Link from "next/link";
import { movingDay } from "@/lib/content";

/**
 * Moving day as a timetable: a real sequence, so it earns its time markers.
 * The route line joins the stops like a journey on a map.
 */
export function TimetableList({ headingLevel = "h3" }: { headingLevel?: "h2" | "h3" }) {
  const H = headingLevel;
  return (
    <ol className="relative">
      {movingDay.map((stop, i) => (
        <li key={stop.time} className="grid gap-x-6 sm:grid-cols-[9.5rem_1fr]">
          <p className="numerals pt-0.5 font-display text-h4 font-bold sm:text-right">{stop.time}</p>
          <div className={`relative border-l-2 border-panel pl-6 ${i === movingDay.length - 1 ? "pb-0" : "pb-8"} max-sm:mt-1`}>
            <span aria-hidden="true" className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-[3px] border-panel bg-page" />
            <H className="font-body text-h4 font-bold">{stop.title}</H>
            <p className="mt-1 text-fg-muted">{stop.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function MovingDayTimetable() {
  return (
    <section aria-labelledby="day-title" className="surface-alt section">
      <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-gutter">
        <div className="lg:col-span-4">
          <h2 id="day-title" className="text-h2 font-bold">
            What moving day looks like
          </h2>
          <p className="mt-5 text-lead text-fg-muted">
            Timings depend on when keys are released, but this is how a typical day runs.
          </p>
          <ul className="mt-5">
            <li>
              <Link href="/moving-day" className="link link-standalone">The full moving-day guide</Link>
            </li>
            <li>
              <Link href="/moving-tips" className="link link-standalone">Moving checklist, week by week</Link>
            </li>
          </ul>
        </div>
        <div className="lg:col-span-7 lg:col-start-6">
          <TimetableList />
        </div>
      </div>
    </section>
  );
}
