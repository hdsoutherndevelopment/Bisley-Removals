"use client";

import { useEffect, useRef, useState } from "react";
import { Loader2 } from "lucide-react";
import { fieldErrors, quotePackingChoices, quotePropertySizes, quoteSchema, quoteServices } from "@/lib/validation";
import { business } from "@/lib/config";
import { ConsentCheckbox, FieldWrap, Honeypot, describedBy } from "./Field";
import { ErrorBanner, ErrorSummary, SuccessPanel, type Status } from "./FormResult";

type TextKey = "fullName" | "email" | "phone" | "fromPostcode" | "toPostcode" | "service" | "propertySize" | "moveDate" | "packing" | "details";
type Values = Record<TextKey, string> & { website: string; consent: boolean };

const empty: Values = {
  fullName: "",
  email: "",
  phone: "",
  fromPostcode: "",
  toPostcode: "",
  service: "Removal",
  propertySize: "",
  moveDate: "",
  packing: "",
  details: "",
  website: "",
  consent: false,
};

const chevron =
  "bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%228%22><path d=%22M1 1l5 5 5-5%22 stroke=%22%23262b2f%22 stroke-width=%222%22 fill=%22none%22/></svg>')] bg-[right_1rem_center] bg-no-repeat pr-10";

/** Official tier only. Never rendered on a demo. */
export function QuoteForm() {
  const [v, setV] = useState<Values>(empty);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>({ state: "idle" });
  // Set after hydration so the server and browser render identical markup.
  const [today, setToday] = useState<string>();
  const summaryRef = useRef<HTMLDivElement>(null);

  useEffect(() => setToday(new Date().toISOString().split("T")[0]), []);

  const set = (k: TextKey) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setV((s) => ({ ...s, [k]: e.target.value }));
    if (errors[k]) setErrors((x) => ({ ...x, [k]: "" }));
  };

  function showErrors(errs: Record<string, string>) {
    setErrors(errs);
    // Wait for the summary to render, then move focus to it.
    requestAnimationFrame(() => summaryRef.current?.focus());
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = quoteSchema.safeParse(v);
    if (!parsed.success) {
      showErrors(fieldErrors(parsed.error));
      return;
    }
    setStatus({ state: "loading" });
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(v),
      });
      const data = await res.json();
      if (res.ok && data.ok) {
        setStatus({ state: "success" });
      } else if (data.errors) {
        setStatus({ state: "idle" });
        showErrors(data.errors);
      } else {
        setStatus({ state: "error", message: data.message || `Your quote request could not be sent. Please call ${business.phone}.` });
      }
    } catch {
      setStatus({
        state: "error",
        message: `We could not reach the server, so your request has not been sent. Check your connection and try again, or call ${business.phone}.`,
      });
    }
  }

  if (status.state === "success") {
    return (
      <SuccessPanel
        what="Quote request"
        onReset={() => {
          setV(empty);
          setErrors({});
          setStatus({ state: "idle" });
        }}
      />
    );
  }

  const input = (
    k: TextKey,
    label: string,
    opts: {
      type?: string;
      required?: boolean;
      autoComplete?: string;
      hint?: string;
      inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
      min?: string;
    } = {},
  ) => (
    <FieldWrap id={`q-${k}`} label={label} error={errors[k]} hint={opts.hint} required={opts.required}>
      <input
        id={`q-${k}`}
        name={k}
        type={opts.type ?? "text"}
        value={v[k]}
        onChange={set(k)}
        autoComplete={opts.autoComplete}
        inputMode={opts.inputMode}
        min={opts.min}
        aria-required={opts.required}
        aria-invalid={Boolean(errors[k])}
        aria-describedby={describedBy(`q-${k}`, errors[k], opts.hint)}
        className="field"
      />
    </FieldWrap>
  );

  const select = (k: TextKey, label: string, options: readonly string[]) => (
    <FieldWrap id={`q-${k}`} label={label} error={errors[k]} required>
      <select
        id={`q-${k}`}
        name={k}
        value={v[k]}
        onChange={set(k)}
        aria-required
        aria-invalid={Boolean(errors[k])}
        aria-describedby={describedBy(`q-${k}`, errors[k])}
        className={`field appearance-none ${chevron}`}
      >
        <option value="" disabled>
          Choose one
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </FieldWrap>
  );

  const loading = status.state === "loading";

  return (
    <form id="quote-form" onSubmit={onSubmit} noValidate aria-busy={loading} className="relative space-y-8">
      <Honeypot value={v.website} onChange={(x) => setV((s) => ({ ...s, website: x }))} />
      <ErrorSummary ref={summaryRef} errors={errors} idPrefix="q" />

      <fieldset className="space-y-5">
        <legend className="mb-5 font-display text-h3 font-semibold text-heading">Your details</legend>
        {input("fullName", "Full name", { required: true, autoComplete: "name" })}
        <div className="grid gap-5 md:grid-cols-2">
          {input("email", "Email address", { type: "email", required: true, autoComplete: "email" })}
          {input("phone", "Telephone number", { type: "tel", required: true, autoComplete: "tel", inputMode: "tel" })}
        </div>
      </fieldset>

      <fieldset className="space-y-5">
        <legend className="mb-5 font-display text-h3 font-semibold text-heading">Your move</legend>

        <fieldset aria-describedby={errors.service ? "q-service-error" : undefined}>
          <legend className="label">What do you need?</legend>
          <div className="grid gap-2 sm:grid-cols-3">
            {quoteServices.map((s, i) => {
              const checked = v.service === s;
              return (
                <label
                  key={s}
                  className={`flex min-h-12 cursor-pointer items-center justify-center rounded-md border-2 px-3 text-center font-bold transition-colors duration-fast has-[:focus-visible]:outline has-[:focus-visible]:outline-[3px] has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-[color:var(--focus)] ${
                    checked ? "border-panel bg-panel text-cream" : "border-input bg-page text-fg hover:border-tyre"
                  }`}
                >
                  <input
                    id={i === 0 ? "q-service" : undefined}
                    type="radio"
                    name="service"
                    value={s}
                    checked={checked}
                    onChange={set("service")}
                    className="sr-only"
                  />
                  {s}
                </label>
              );
            })}
          </div>
          {errors.service && (
            <p id="q-service-error" className="mt-2 text-small font-bold text-error">
              {errors.service}
            </p>
          )}
        </fieldset>

        <div className="grid gap-5 md:grid-cols-2">
          {input("fromPostcode", "Current postcode", { required: true, autoComplete: "postal-code", hint: "For example GU24 9EW" })}
          {input("toPostcode", "Destination postcode", { autoComplete: "off", hint: "Leave blank if everything is going into storage" })}
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {select("propertySize", "Property size", quotePropertySizes)}
          {input("moveDate", "Preferred moving date", { type: "date", min: today, hint: "Leave blank if you do not have a date yet" })}
        </div>
        {select("packing", "Packing", quotePackingChoices)}
        <FieldWrap
          id="q-details"
          label="Anything else we should know?"
          error={errors.details}
          hint="Access, parking, large or fragile items, anything going into storage"
        >
          <textarea
            id="q-details"
            name="details"
            rows={5}
            value={v.details}
            onChange={set("details")}
            aria-invalid={Boolean(errors.details)}
            aria-describedby={describedBy("q-details", errors.details, "hint")}
            className="field resize-y"
          />
        </FieldWrap>
      </fieldset>

      <ConsentCheckbox
        id="q-consent"
        checked={v.consent}
        onChange={(c) => {
          setV((s) => ({ ...s, consent: c }));
          if (errors.consent) setErrors((x) => ({ ...x, consent: "" }));
        }}
        error={errors.consent}
      />

      {status.state === "error" && <ErrorBanner message={status.message} />}

      <button type="submit" className="btn btn-primary w-full sm:w-auto" disabled={loading}>
        {loading ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin motion-reduce:animate-none" aria-hidden="true" /> Sending quote request
          </>
        ) : (
          "Send quote request"
        )}
      </button>
    </form>
  );
}
