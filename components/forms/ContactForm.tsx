"use client";

import { useRef, useState } from "react";
import { Loader2 } from "lucide-react";
import { business } from "@/lib/config";
import { contactSchema, fieldErrors } from "@/lib/validation";
import { ConsentCheckbox, FieldWrap, Honeypot, describedBy } from "./Field";
import { ErrorBanner, ErrorSummary, SuccessPanel, type Status } from "./FormResult";

type TextKey = "name" | "email" | "phone" | "message";
const empty = { name: "", email: "", phone: "", message: "", website: "", consent: false };

/** Official tier only. Never rendered on a demo. */
export function ContactForm() {
  const [v, setV] = useState(empty);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>({ state: "idle" });
  const summaryRef = useRef<HTMLDivElement>(null);

  const set = (k: TextKey) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setV((s) => ({ ...s, [k]: e.target.value }));
    if (errors[k]) setErrors((x) => ({ ...x, [k]: "" }));
  };

  function showErrors(errs: Record<string, string>) {
    setErrors(errs);
    requestAnimationFrame(() => summaryRef.current?.focus());
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = contactSchema.safeParse(v);
    if (!parsed.success) {
      showErrors(fieldErrors(parsed.error));
      return;
    }
    setStatus({ state: "loading" });
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(v) });
      const data = await res.json();
      if (res.ok && data.ok) setStatus({ state: "success" });
      else if (data.errors) {
        setStatus({ state: "idle" });
        showErrors(data.errors);
      } else setStatus({ state: "error", message: data.message || `Your message could not be sent. Please call ${business.phone}.` });
    } catch {
      setStatus({
        state: "error",
        message: `We could not reach the server, so your message has not been sent. Check your connection and try again, or call ${business.phone}.`,
      });
    }
  }

  if (status.state === "success") {
    return (
      <SuccessPanel
        what="Message"
        onReset={() => {
          setV(empty);
          setErrors({});
          setStatus({ state: "idle" });
        }}
      />
    );
  }

  const field = (k: Exclude<TextKey, "message">, label: string, type: string, autoComplete: string) => (
    <FieldWrap id={`c-${k}`} label={label} error={errors[k]} required>
      <input
        id={`c-${k}`}
        name={k}
        type={type}
        value={v[k]}
        onChange={set(k)}
        autoComplete={autoComplete}
        inputMode={type === "tel" ? "tel" : undefined}
        aria-required
        aria-invalid={Boolean(errors[k])}
        aria-describedby={describedBy(`c-${k}`, errors[k])}
        className="field"
      />
    </FieldWrap>
  );

  const loading = status.state === "loading";

  return (
    <form onSubmit={onSubmit} noValidate aria-busy={loading} className="relative space-y-5">
      <Honeypot value={v.website} onChange={(x) => setV((s) => ({ ...s, website: x }))} />
      <ErrorSummary ref={summaryRef} errors={errors} idPrefix="c" />
      {field("name", "Name", "text", "name")}
      {field("phone", "Phone number", "tel", "tel")}
      {field("email", "Email", "email", "email")}
      <FieldWrap id="c-message" label="How can we help?" error={errors.message} required>
        <textarea
          id="c-message"
          name="message"
          rows={5}
          value={v.message}
          onChange={set("message")}
          aria-required
          aria-invalid={Boolean(errors.message)}
          aria-describedby={describedBy("c-message", errors.message)}
          className="field resize-y"
        />
      </FieldWrap>
      <ConsentCheckbox
        id="c-consent"
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
            <Loader2 className="h-5 w-5 animate-spin motion-reduce:animate-none" aria-hidden="true" /> Sending message
          </>
        ) : (
          "Send message"
        )}
      </button>
    </form>
  );
}
