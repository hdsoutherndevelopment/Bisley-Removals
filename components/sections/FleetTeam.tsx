import Link from "next/link";
import { FleetLineup } from "./FleetLineup";

export function FleetTeam() {
  return (
    <section className="border-y border-rule bg-white py-20 sm:py-28" aria-labelledby="fleet-title">
      <div className="wrap">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <h2 id="fleet-title" className="h2 max-w-md">The right vehicle, and the right people, for every move</h2>
          <p className="lede">
            We own and maintain our whole fleet, so we can match the vehicle to your property, your load and your access,
            from a narrow lane to a multi-day move across the country.
          </p>
        </div>

        <div className="mt-14">
          <FleetLineup />
        </div>

        <div className="mt-20 grid gap-10 border-t border-rule pt-14 lg:grid-cols-3 lg:gap-16">
          <div className="lg:col-span-1">
            <h3 className="heading text-2xl">Our people</h3>
            <p className="mt-3 text-steel">
              From getting the quote right to the moment the last box is placed, our people are what make the business.
            </p>
          </div>
          <dl className="grid gap-8 sm:grid-cols-2 lg:col-span-2">
            <div>
              <dt className="font-bold">Directly employed, full-time</dt>
              <dd className="mt-1.5 text-steel">Every mover is a uniformed member of our own team, not agency staff, and many have been with us for years.</dd>
            </div>
            <div>
              <dt className="font-bold">Trained in every part of the job</dt>
              <dd className="mt-1.5 text-steel">Packing, lifting, loading and transport, so your belongings are handled properly at every stage.</dd>
            </div>
            <div>
              <dt className="font-bold">Experienced estimators</dt>
              <dd className="mt-1.5 text-steel">Decades of combined experience mean an accurate quote and a move planned around your home.</dd>
            </div>
            <div>
              <dt className="font-bold">A team leader on every move</dt>
              <dd className="mt-1.5 text-steel">
                One point of contact on the day, from the first walkthrough to the last. <Link href="/moving-day" className="link">See how moving day runs</Link>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
