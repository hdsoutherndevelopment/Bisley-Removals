import Link from "next/link";
import { Phone } from "lucide-react";
import { business } from "@/lib/config";

/** The one primary action, worded the same everywhere. */
export function QuoteButton({ className = "" }: { className?: string }) {
  return (
    <Link href="/quote" className={`btn btn-primary ${className}`}>
      Get a free quote
    </Link>
  );
}

/** The phone number set like the signwriting on the lorries. */
export function PhoneLettering({ className = "" }: { className?: string }) {
  return (
    <a href={business.phoneHref} className={`phone-lettering ${className}`}>
      <span className="sr-only">Call </span>
      {business.phone}
    </a>
  );
}

export function PhoneButton({ className = "", label = "Call" }: { className?: string; label?: string }) {
  return (
    <a href={business.phoneHref} className={`btn btn-secondary ${className}`}>
      <Phone className="h-5 w-5" aria-hidden="true" />
      {label}
      <span className="sr-only"> {business.phone}</span>
    </a>
  );
}
