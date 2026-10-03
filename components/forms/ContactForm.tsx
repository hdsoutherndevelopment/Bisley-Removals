"use client";

import { useRef, useState } from "react";
import { Loader2 } from "lucide-react";
import { contactSchema, fieldErrors } from "@/lib/validation";
import { FieldWrap, Honeypot, describedBy } from "./Field";
import { ErrorBanner, SuccessPanel, type Status } from "./FormResult";

const empty = { name: "", email: "", phone: "", message: "", website: "" };

export function ContactForm() {
  const [v, setV] = useState(empty);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>({ state: "idle" });
  const formRef = useRef<HTMLFormElement>(null);

  const set = (k: keyof typeof empty) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setV((s) => ({ ...s, [k]: e.target.value }));
    if (errors[k]) setErrors((x) => ({ ...x, [k]: "" }));
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = contactSchema.safeParse(v);
    if (!parsed.success) {
      const errs = fieldErrors(parsed.error);
      setErrors(errs);
      formRef.current?.querySelector<HTMLElement>(`[name="${Object.keys(errs)[0]}"]`)?.focus();
      return;
    }
    setStatus({ state: "loading" });
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(v) });
      const data = await res.json();
      if (res.ok && data.ok) setStatus({ state: "success", mode: data.mode });
      else if (data.errors) {
        setErrors(data.errors);
        setStatus({ state: "idle" });
      } else setStatus({ state: "error", message: data.message || "Something went wrong. Try again, or call us." });
    } catch {
      setStatus({ state: "error", message: "We couldn’t reach the server. Check your connection and try again, or call 01483 489611." });
    }
  }

  if (status.state === "success") {
    return <SuccessPanel mode={status.mode} what="Message" onReset={() => { setV(empty); setStatus({ state: "idle" }); }} />;
  }

  const field = (k: "name" | "email" | "phone", label: string, type: string, autoComplete: string) => (
    <FieldWrap id={`c-${k}`} label={label} error={errors[k]} required>
      <input
        id={`c-${k}`}
        name={k}
        type={type}
        value={v[k]}
        onChange={set(k)}
        autoComplete={autoComplete}
        aria-required
        aria-invalid={Boolean(errors[k])}
        aria-describedby={describedBy(`c-${k}`, errors[k])}
        className="field"
      />
    </FieldWrap>
  );

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="relative space-y-5">
      <Honeypot value={v.website} onChange={(x) => setV((s) => ({ ...s, website: x }))} />
      {field("name", "Name", "text", "name")}
      <div className="grid gap-5 sm:grid-cols-2">
        {field("phone", "Contact number", "tel", "tel")}
        {field("email", "Email", "email", "email")}
      </div>
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
      {status.state === "error" && <ErrorBanner message={status.message} />}
      <button type="submit" className="btn-navy disabled:cursor-wait disabled:opacity-80" disabled={status.state === "loading"}>
        {status.state === "loading" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" /> Sending message…
          </>
        ) : (
          "Send message"
        )}
      </button>
    </form>
  );
}
