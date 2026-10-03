import { AlertCircle, CheckCircle2 } from "lucide-react";
import { business } from "@/lib/config";

export type Status =
  | { state: "idle" }
  | { state: "loading" }
  | { state: "success"; mode: "live" | "demo" }
  | { state: "error"; message: string };

export function SuccessPanel({ mode, what, onReset }: { mode: "live" | "demo"; what: string; onReset: () => void }) {
  return (
    <div role="status" className="rounded-xl border-2 border-navy bg-paper p-8">
      <CheckCircle2 className="h-9 w-9 text-navy" aria-hidden="true" />
      {mode === "live" ? (
        <>
          <h3 className="heading mt-4 text-2xl">{what} sent</h3>
          <p className="mt-2 text-navy/85">
            Thank you. A member of the Bisley team will be in touch shortly. If your move is urgent, call{" "}
            <a href={business.phoneHref} className="link">{business.phone}</a>.
          </p>
        </>
      ) : (
        <>
          <h3 className="heading mt-4 text-2xl">Your details are complete</h3>
          <p className="mt-2 text-navy/85">
            This preview site isn’t connected to an inbox yet, so your {what.toLowerCase()} has not been sent. To speak to
            the team now, call <a href={business.phoneHref} className="link">{business.phone}</a>.
          </p>
        </>
      )}
      <button type="button" onClick={onReset} className="btn-ghost mt-6">Start again</button>
    </div>
  );
}

export function ErrorBanner({ message }: { message: string }) {
  return (
    <div role="alert" className="flex gap-3 rounded-lg border border-livery/40 bg-livery/5 p-4 text-navy">
      <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-livery" aria-hidden="true" />
      <p>{message}</p>
    </div>
  );
}
