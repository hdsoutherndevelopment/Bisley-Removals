import Link from "next/link";
import { Logo } from "./Logo";
import { business, fullAddress, isDemo } from "@/lib/config";

const columns = [
  {
    title: "Services",
    links: [
      { href: "/removals", label: "Removals" },
      { href: "/packing", label: "Packing" },
      { href: "/storage", label: "Storage" },
      { href: "/commercial", label: "Office and commercial moves" },
    ],
  },
  {
    title: "Moving help",
    links: [
      { href: "/moving-day", label: "Moving day" },
      { href: "/moving-tips", label: "Moving checklist" },
      { href: "/insurance", label: "Insurance" },
      { href: "/reviews", label: "Reviews" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About us" },
      { href: "/careers", label: "Careers" },
      { href: "/contact", label: "Contact" },
      { href: "/quote", label: "Get a free quote" },
    ],
  },
] as const;

const legal = [
  { href: "/privacy", label: "Privacy policy" },
  { href: "/terms", label: "Terms of use" },
  { href: "/cookies", label: "Cookie policy" },
  { href: "/accessibility", label: "Accessibility" },
] as const;

export function Footer() {
  return (
    <footer className="surface-inverse">
      <div className="coachline" aria-hidden="true" />
      <div className="wrap grid gap-12 pb-12 pt-14 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1.4fr]">
        <div>
          <Logo inverse />
          <p className="mt-5 max-w-[24rem] text-fg-muted">
            Removals, packing and containerised storage from our yard in Bisley, near Woking, since {business.established}.
          </p>
        </div>

        {columns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h2 className="font-body text-body font-bold">{col.title}</h2>
            <ul className="mt-3">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="inline-flex min-h-[2.75rem] items-center text-fg-muted underline-offset-[0.2em] hover:text-fg hover:underline">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div>
          <h2 className="font-body text-body font-bold">Get in touch</h2>
          <ul className="mt-3 space-y-1">
            <li>
              <a href={business.phoneHref} className="numerals inline-flex min-h-11 items-center text-h4 font-bold underline-offset-[0.2em] hover:underline">
                <span className="sr-only">Call </span>
                {business.phone}
              </a>
            </li>
            <li>
              <a href={business.emailHref} className="link link-standalone font-normal">{business.email}</a>
            </li>
            <li>
              <address className="not-italic text-fg-muted">{fullAddress}</address>
              <a href={business.directionsUrl} target="_blank" rel="noopener noreferrer" className="link link-standalone font-normal">
                Get directions<span className="sr-only"> (opens Google Maps in a new tab)</span>
              </a>
            </li>
            <li>
              <a href={business.instagram} target="_blank" rel="noopener noreferrer" className="link link-standalone font-normal">
                Instagram<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-rule">
        <div className="wrap space-y-4 py-8 text-small text-fg-muted">
          <p>
            {business.legalName}. Registered in England and Wales, company number {business.companyNumber}. Registered office:{" "}
            {business.registeredOffice}.
          </p>
          <p>
            Something gone wrong? Email <a href={business.emailHref} className="link font-normal">{business.email}</a> or call{" "}
            <a href={business.phoneHref} className="link font-normal">{business.phone}</a> and tell us what happened. We would like the chance to put it right.
          </p>
          <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
            <ul className="flex flex-wrap gap-x-6 gap-y-1">
              {legal.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="inline-flex min-h-[2.75rem] items-center underline underline-offset-[0.2em] hover:text-fg">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p>© {new Date().getFullYear()} {business.legalName}</p>
          </div>
          {isDemo && (
            <p className="border-t border-rule pt-4">
              This is a concept website prepared by HD Southern Development to show what Bisley Removal Services&apos; site could look like. It is not the
              company&apos;s official website. Phone, email and quote links reach the company directly.
            </p>
          )}
        </div>
      </div>
    </footer>
  );
}
