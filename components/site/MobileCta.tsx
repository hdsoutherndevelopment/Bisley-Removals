import Link from "next/link";
import { Phone } from "lucide-react";
import { business } from "@/lib/config";

export function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-rule bg-white/95 p-3 backdrop-blur md:hidden">
      <div className="grid grid-cols-2 gap-3">
        <a href={business.phoneHref} className="btn-ghost !min-h-[48px] !px-3">
          <Phone className="h-4 w-4" aria-hidden="true" /> Call us
        </a>
        <Link href="/quote" className="btn-primary !min-h-[48px] !px-3">Free quote</Link>
      </div>
    </div>
  );
}
