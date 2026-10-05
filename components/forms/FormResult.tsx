"use client";

import { forwardRef } from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { business } from "@/lib/config";

export type Status = { state: "idle" } | { state: "loading" } | { state: "success" } | { state: "error"; message: string };

export function SuccessPanel({ what, onReset }: { what: string; onReset: () => void }) {
  return (
    <div role="status" className="rounded-md border-2 border-success bg-page p-6 sm:p-8">
      <CheckCircle2 className="h-8 w-8 text-success" aria-hidden="true" />
      <p className="mt-4 font-display text-h3 font-semibold text-heading">{what} sent</p>
      <p className="mt-2 text-fg-muted">
        Thank you. Someone from the office will be in touch shortly. If your move is urgent, call{" "}
        <a href={business.phoneHref} className="link">{business.phone}</a>.
      </p>
      <button type="button" onClick={onReset} className="btn btn-secondary mt-6">
        Send another
      </button>
    </div>
  );
}

export function ErrorBanner({ message }: { message: string }) {
  return (
    <div role="alert" className="flex gap-3 rounded-md border-2 border-error bg-page p-4">
      <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-error" aria-hidden="true" />
      <p>{message}</p>
    </div>
  );
}

/**
 * Lists every problem as a link to its field, so nothing relies on spotting a red border.
 * Receives focus after a failed attempt, so screen readers announce it straight away.
 */
export const ErrorSummary = forwardRef<HTMLDivElement, { errors: Record<string, string>; idPrefix: string }>(
  function ErrorSummary({ errors, idPrefix }, ref) {
    const entries = Object.entries(errors).filter(([, message]) => Boolean(message));
    if (!entries.length) return null;
    return (
      <div ref={ref} tabIndex={-1} role="alert" className="rounded-md border-2 border-error bg-page p-5">
        <p className="flex items-center gap-2 font-bold">
          <AlertCircle className="h-5 w-5 shrink-0 text-error" aria-hidden="true" />
          {entries.length === 1 ? "One thing needs checking" : `${entries.length} things need checking`}
        </p>
        <ul className="mt-3 space-y-2 pl-7">
          {entries.map(([key, message]) => (
            <li key={key}>
              <a
                href={`#${idPrefix}-${key}`}
                className="link"
                onClick={(e) => {
                  const target = document.getElementById(`${idPrefix}-${key}`);
                  if (!target) return;
                  e.preventDefault();
                  target.focus();
                }}
              >
                {message}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  },
);
