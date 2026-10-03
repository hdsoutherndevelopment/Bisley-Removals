import { CalendarHeart, Award, Users, ShieldCheck } from "lucide-react";

const items = [
  { icon: CalendarHeart, title: "Family-run since 1985", text: "Grown through reputation and recommendation." },
  { icon: Award, title: "Over 40 years’ experience", text: "Estimators who plan every move properly." },
  { icon: Users, title: "Our own full-time teams", text: "Uniformed, trained staff. No agency workers." },
  { icon: ShieldCheck, title: "Removals and secure storage", text: "Supervised warehouse with 24-hour CCTV." },
];

export function TrustBar() {
  return (
    <section aria-label="Why customers choose Bisley" className="border-b border-rule bg-white">
      <ul className="wrap grid grid-cols-1 gap-x-8 gap-y-6 py-10 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, title, text }) => (
          <li key={title} className="flex gap-4">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-paper text-livery">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <p className="font-bold leading-snug">{title}</p>
              <p className="mt-1 text-[0.95rem] leading-snug text-steel">{text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
