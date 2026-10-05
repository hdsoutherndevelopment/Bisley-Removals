"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { business } from "@/lib/config";

/**
 * Phone-width action bar: one tap from a quote or a call.
 *
 * It stays out of the way while a page's own actions (marked data-primary-actions) are on
 * screen, so the same button never appears twice at once, and slides up once they scroll away.
 * Pages without such actions show it straight away. While hidden it is inert, so keyboard and
 * screen reader users never land on buttons they cannot see. Padded for the home indicator,
 * and hidden while a form field has focus (see globals.css).
 */
export function MobileBar() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const targets = Array.from(document.querySelectorAll("[data-primary-actions]"));
    if (!targets.length) {
      setVisible(true);
      return;
    }
    const onScreen = new Set<Element>();
    const observer = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) onScreen.add(e.target);
        else onScreen.delete(e.target);
      }
      setVisible(onScreen.size === 0);
    });
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <nav
      aria-label="Quick contact"
      inert={!visible}
      className={`mobile-bar fixed inset-x-0 bottom-0 z-30 border-t border-rule bg-page px-3 pt-3 shadow-float transition-transform duration-base ease-brand md:hidden ${
        visible ? "translate-y-0" : "translate-y-[calc(100%+1rem)]"
      }`}
    >
      <div className="grid grid-cols-[1.4fr_1fr] gap-3 pb-[calc(0.75rem+var(--safe-bottom))]">
        <Link href="/quote" className="btn btn-primary w-full">
          Get a free quote
        </Link>
        <a href={business.phoneHref} className="btn btn-secondary w-full">
          <Phone className="h-5 w-5" aria-hidden="true" />
          Call
          <span className="sr-only"> {business.phone}</span>
        </a>
      </div>
    </nav>
  );
}
