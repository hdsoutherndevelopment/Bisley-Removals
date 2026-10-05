import Link from "next/link";
import { AlertCircle } from "lucide-react";

type Base = { id: string; label: string; error?: string; hint?: string; required?: boolean; className?: string };

export function FieldWrap({ id, label, error, hint, required, className, children }: Base & { children: React.ReactNode }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="label">
        {label} {!required && <span className="font-normal text-fg-muted">(optional)</span>}
      </label>
      {children}
      {hint && !error && (
        <p id={`${id}-hint`} className="mt-2 text-small text-fg-muted">
          {hint}
        </p>
      )}
      {error && <FieldError id={`${id}-error`} message={error} />}
    </div>
  );
}

/** Errors are announced, tied to their field, and never signalled by colour alone. */
export function FieldError({ id, message }: { id: string; message: string }) {
  return (
    <p id={id} className="mt-2 flex gap-2 text-small font-bold text-error">
      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
      <span>{message}</span>
    </p>
  );
}

export function describedBy(id: string, error?: string, hint?: string) {
  return error ? `${id}-error` : hint ? `${id}-hint` : undefined;
}

/** A separate, unticked consent box in plain English, linked to the privacy policy. */
export function ConsentCheckbox({
  id,
  checked,
  onChange,
  error,
}: {
  id: string;
  checked: boolean;
  onChange: (v: boolean) => void;
  error?: string;
}) {
  return (
    <div>
      <div className="flex items-start gap-3">
        <input
          id={id}
          name="consent"
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className="mt-1 h-6 w-6 shrink-0 accent-[var(--c-panel)]"
        />
        <label htmlFor={id}>
          I agree to Bisley Removal Services using these details to reply to me, as set out in the{" "}
          <Link href="/privacy" className="link">privacy policy</Link>.
        </label>
      </div>
      {error && <FieldError id={`${id}-error`} message={error} />}
    </div>
  );
}

/** Visually hidden honeypot. Real visitors never see or fill it. */
export function Honeypot({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
      <label htmlFor="website">Leave this field empty</label>
      <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}
