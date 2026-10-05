"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "./Logo";
import { allPages, business, primaryNav } from "@/lib/config";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const close = useCallback((returnFocus = true) => {
    setOpen(false);
    if (returnFocus) requestAnimationFrame(() => toggleRef.current?.focus());
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    const focusables = () =>
      Array.from(panel?.querySelectorAll<HTMLElement>("a[href], button:not([disabled])") ?? []);
    // Start on the Close button, so the way out is announced first.
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
        return;
      }
      if (e.key !== "Tab") return;
      const items = focusables();
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [open, close]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="relative z-40 bg-page">
      <div className="wrap flex min-h-[4.75rem] items-center justify-between gap-6 py-2">
        <Logo eager />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1 xl:gap-2">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`inline-flex min-h-[2.75rem] items-center rounded-sm px-3 font-bold text-fg underline-offset-[0.35em] transition-colors duration-fast ${
                    isActive(item.href) ? "underline decoration-2" : "hover:underline"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={business.phoneHref}
            className="numerals hidden min-h-[2.75rem] items-center gap-2 rounded-sm px-1 font-bold text-fg hover:underline xl:inline-flex"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            <span className="sr-only">Call </span>
            {business.phone}
          </a>
          <Link href="/quote" className="btn btn-primary hidden md:inline-flex">
            Get a free quote
          </Link>
          <button
            ref={toggleRef}
            type="button"
            className="btn btn-secondary min-w-[3rem] !px-4 lg:hidden"
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen(true)}
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
            Menu
          </button>
        </div>
      </div>
      <div className="coachline" aria-hidden="true" />

      {open && (
        <div
          ref={panelRef}
          id="site-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-50 overflow-y-auto bg-page pb-[calc(2rem+var(--safe-bottom))]"
        >
          <div className="wrap flex min-h-[4.75rem] items-center justify-between gap-6 py-2">
            <Logo />
            <button ref={closeRef} type="button" className="btn btn-secondary !px-4" onClick={() => close()}>
              <X className="h-5 w-5" aria-hidden="true" />
              Close
            </button>
          </div>
          <div className="coachline" aria-hidden="true" />
          <nav aria-label="Site" className="wrap pt-4">
            <ul className="divide-y divide-rule">
              {allPages.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className="flex min-h-[3.5rem] items-center font-display text-h3 font-semibold text-heading aria-[current=page]:underline"
                    onClick={() => close(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 grid gap-3">
              <Link href="/quote" className="btn btn-primary w-full" onClick={() => close(false)}>
                Get a free quote
              </Link>
              <a href={business.phoneHref} className="btn btn-secondary w-full">
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call {business.phone}
              </a>
              <a href={business.emailHref} className="btn btn-secondary w-full">
                Email {business.email}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
