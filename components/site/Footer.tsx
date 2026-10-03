import Link from "next/link";
import { Instagram, MapPin, Phone, Clock } from "lucide-react";
import { Logo } from "./Logo";
import { business, fullAddress, nav } from "@/lib/config";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="coachline" aria-hidden="true" />
      <div className="wrap grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
        <div>
          <Logo light />
          <p className="mt-5 max-w-xs text-white/75">
            Family-run removals and storage from Bisley, near Woking, since 1985. {business.motto}.
          </p>
          <a
            href={business.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-white/85 hover:text-white"
          >
            <Instagram className="h-5 w-5" aria-hidden="true" /> @bisleyremovals
          </a>
        </div>

        <nav aria-label="Footer">
          <h2 className="heading text-base">Explore</h2>
          <ul className="mt-4 space-y-2.5 text-white/75">
            {nav.map((n) => (
              <li key={n.href}><Link className="hover:text-white" href={n.href}>{n.label}</Link></li>
            ))}
            <li><Link className="hover:text-white" href="/quote">Get a Free Quote</Link></li>
          </ul>
        </nav>

        <div>
          <h2 className="heading text-base">Services</h2>
          <ul className="mt-4 space-y-2.5 text-white/75">
            <li><Link className="hover:text-white" href="/removals">House removals</Link></li>
            <li><Link className="hover:text-white" href="/removals#packing">Packing services</Link></li>
            <li><Link className="hover:text-white" href="/removals#commercial">Commercial removals</Link></li>
            <li><Link className="hover:text-white" href="/storage">Secure storage</Link></li>
            <li><Link className="hover:text-white" href="/storage#calculator">Storage calculator</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="heading text-base">Get in touch</h2>
          <ul className="mt-4 space-y-4 text-white/80">
            <li className="flex gap-3">
              <Phone className="mt-1 h-4 w-4 shrink-0 text-livery" aria-hidden="true" />
              <a href={business.phoneHref} className="text-lg font-semibold text-white hover:underline">{business.phone}</a>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-livery" aria-hidden="true" />
              <address className="not-italic">{fullAddress}</address>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-1 h-4 w-4 shrink-0 text-livery" aria-hidden="true" />
              <span>Office open {business.officeHours.label}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="wrap flex flex-col gap-3 py-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {business.name}. All rights reserved.</p>
          <Link href="/privacy" className="hover:text-white">Privacy policy</Link>
        </div>
      </div>
    </footer>
  );
}
