"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "./Logo";
import { business, nav } from "@/lib/config";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
      <div className="wrap flex h-[76px] items-center justify-between gap-6">
        <Logo />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`relative rounded-md px-3 py-2 text-[0.95rem] font-medium transition-colors hover:text-livery ${
                    isActive(item.href) ? "text-navy after:absolute after:inset-x-3 after:-bottom-[1px] after:h-[3px] after:bg-livery" : "text-navy/80"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <a href={business.phoneHref} className="hidden items-center gap-2 font-semibold text-navy hover:text-livery xl:inline-flex">
            <Phone className="h-4 w-4" aria-hidden="true" />
            {business.phone}
          </a>
          <Link href="/quote" className="btn-primary hidden !min-h-[44px] !px-5 sm:inline-flex">
            Get a Free Quote
          </Link>
          <a
            href={business.phoneHref}
            className="grid h-11 w-11 place-items-center rounded-md border border-rule text-navy sm:hidden"
            aria-label={`Call ${business.phone}`}
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
          </a>
          <button
            ref={toggleRef}
            type="button"
            className="grid h-11 w-11 place-items-center rounded-md border border-rule text-navy lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-[77px] overflow-y-auto bg-white lg:hidden"
      >
        <nav aria-label="Mobile" className="wrap py-6">
          <ul className="divide-y divide-rule border-y border-rule">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`flex items-center justify-between py-4 text-xl heading ${isActive(item.href) ? "text-livery" : "text-navy"}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 grid gap-3">
            <Link href="/quote" className="btn-primary w-full">Get a Free Quote</Link>
            <a href={business.phoneHref} className="btn-ghost w-full">
              <Phone className="h-4 w-4" aria-hidden="true" /> Call {business.phone}
            </a>
          </div>
          <p className="mt-6 text-sm text-steel">Office open {business.officeHours.label}</p>
        </nav>
      </div>
    </header>
  );
}
