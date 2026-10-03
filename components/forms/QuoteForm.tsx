"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { Loader2 } from "lucide-react";
import { quoteSchema, fieldErrors } from "@/lib/validation";
import { packingOptions, propertySizes } from "@/lib/content";
import { FieldWrap, Honeypot, describedBy } from "./Field";
import { ErrorBanner, SuccessPanel, type Status } from "./FormResult";

type Values = {
  fullName: string;
  email: string;
  phone: string;
  fromPostcode: string;
  toPostcode: string;
  service: string;
  propertySize: string;
  moveDate: string;
  packing: string;
  details: string;
  website: string;
};

const services = ["Removal", "Storage", "Removal and storage"] as const;

export function QuoteForm({ initial }: { initial?: Partial<Values> }) {
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
    ...initial,
  };
  const [v, setV] = useState<Values>(empty);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>({ state: "idle" });
  const formRef = useRef<HTMLFormElement>(null);

  const set = (k: keyof Values) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setV((s) => ({ ...s, [k]: e.target.value }));
    if (errors[k]) setErrors((x) => ({ ...x, [k]: "" }));
  };

  const today = new Date().toISOString().split("T")[0];

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = quoteSchema.safeParse(v);
    if (!parsed.success) {
      const errs = fieldErrors(parsed.error);
      setErrors(errs);
      const first = Object.keys(errs)[0];
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
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
        setStatus({ state: "success", mode: data.mode });
      } else if (data.errors) {
        setErrors(data.errors);
        setStatus({ state: "idle" });
      } else {
        setStatus({ state: "error", message: data.message || "Something went wrong. Try again, or call us." });
      }
    } catch {
      setStatus({ state: "error", message: "We couldn’t reach the server. Check your connection and try again, or call 01483 489611." });
    }
  }

  if (status.state === "success") {
    return <SuccessPanel mode={status.mode} what="Quote request" onReset={() => { setV(empty); setStatus({ state: "idle" }); }} />;
  }

  const input = (k: keyof Values, label: string, opts: { type?: string; required?: boolean; autoComplete?: string; hint?: string; className?: string; inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"]; min?: string } = {}) => (
    <FieldWrap id={`q-${k}`} label={label} error={errors[k]} hint={opts.hint} required={opts.required} className={opts.className}>
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

  const select = (k: keyof Values, label: string, options: readonly string[], required = true) => (
    <FieldWrap id={`q-${k}`} label={label} error={errors[k]} required={required}>
      <select
        id={`q-${k}`}
        name={k}
        value={v[k]}
        onChange={set(k)}
        aria-required={required}
        aria-invalid={Boolean(errors[k])}
        aria-describedby={describedBy(`q-${k}`, errors[k])}
        className="field appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%228%22><path d=%22M1 1l5 5 5-5%22 stroke=%22%2313294B%22 stroke-width=%222%22 fill=%22none%22/></svg>')] bg-[right_1rem_center] bg-no-repeat pr-10"
      >
        <option value="" disabled>
          Choose one
        </option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </FieldWrap>
  );

  return (
    <form ref={formRef} id="quote-form" onSubmit={onSubmit} noValidate className="relative space-y-6">
      <Honeypot value={v.website} onChange={(x) => setV((s) => ({ ...s, website: x }))} />

      <fieldset className="space-y-5">
        <legend className="heading mb-4 text-lg">Your details</legend>
        {input("fullName", "Full name", { required: true, autoComplete: "name" })}
        <div className="grid gap-5 sm:grid-cols-2">
          {input("email", "Email address", { type: "email", required: true, autoComplete: "email" })}
          {input("phone", "Telephone number", { type: "tel", required: true, autoComplete: "tel", inputMode: "tel" })}
        </div>
      </fieldset>

      <hr className="border-rule" />
      <fieldset className="space-y-5">
        <legend className="heading mb-4 text-lg">Your move</legend>
        <div>
          <p className="label" id="q-service-label">What do you need?</p>
          <div role="radiogroup" aria-labelledby="q-service-label" className="grid gap-2 sm:grid-cols-3">
            {services.map((s) => (
              <label
                key={s}
                className={`flex min-h-[48px] cursor-pointer items-center justify-center rounded-md border-2 px-3 text-center text-[0.95rem] font-semibold transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-[3px] has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-livery ${
                  v.service === s ? "border-navy bg-navy text-white" : "border-rule hover:border-steel-light"
                }`}
              >
                <input type="radio" name="service" value={s} checked={v.service === s} onChange={set("service")} className="sr-only" />
                {s}
              </label>
            ))}
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {input("fromPostcode", "Current postcode", { required: true, autoComplete: "postal-code", hint: "For example GU24 9EW" })}
          {input("toPostcode", "Destination postcode", { autoComplete: "off", hint: "Leave blank if everything is going into storage" })}
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {select("propertySize", "Property size", propertySizes)}
          {input("moveDate", "Preferred moving date", { type: "date", min: today, hint: "Leave blank if you don’t have a date yet" })}
        </div>
        {select("packing", "Packing requirements", packingOptions)}
        <FieldWrap id="q-details" label="Additional information" error={errors.details} hint="Access, parking, large or fragile items, anything going into storage">
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

      {Object.values(errors).some(Boolean) && (
        <ErrorBanner message="Some details need checking. The fields to fix are marked in red." />
      )}
      {status.state === "error" && <ErrorBanner message={status.message} />}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <button type="submit" className="btn-primary shrink-0 whitespace-nowrap text-lg disabled:cursor-wait disabled:opacity-80" disabled={status.state === "loading"}>
          {status.state === "loading" ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" /> Sending request…
            </>
          ) : (
            "Request my free quote"
          )}
        </button>
        <p className="text-sm text-steel">
          We use your details only to prepare your quote. <Link href="/privacy" className="underline">Privacy policy</Link>
        </p>
      </div>
    </form>
  );
}
