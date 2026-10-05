import { business } from "./config";

type Lead = {
  kind: "quote" | "contact";
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  details: Record<string, string>;
  sourcePage: string;
};

/** Thrown when an enquiry reached neither the database nor the office inbox. */
export class LeadNotDeliveredError extends Error {
  constructor(reasons: string[]) {
    super(`Enquiry not delivered: ${reasons.join("; ")}`);
    this.name = "LeadNotDeliveredError";
  }
}

const escape = (v: string) =>
  v.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string);

async function saveToSupabase(lead: Lead) {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) throw new Error("database not configured (SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)");
  const res = await fetch(`${url.replace(/\/$/, "")}/rest/v1/enquiries`, {
    method: "POST",
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify({
      kind: lead.kind,
      name: lead.name,
      email: lead.email,
      phone: lead.phone,
      service: lead.service,
      message: lead.message,
      details: lead.details,
      source: lead.sourcePage,
    }),
  });
  if (!res.ok) throw new Error(`database insert failed (${res.status})`);
}

async function sendEmail(to: string, subject: string, html: string, replyTo?: string) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.RESEND_FROM_EMAIL || "Website enquiries <onboarding@resend.dev>",
      to: [to],
      subject,
      html,
      ...(replyTo ? { reply_to: replyTo } : {}),
    }),
  });
  if (!res.ok) throw new Error(`email failed (${res.status})`);
}

async function emailOffice(lead: Lead) {
  const to = process.env.BUSINESS_EMAIL;
  if (!process.env.RESEND_API_KEY || !to) throw new Error("email not configured (RESEND_API_KEY, BUSINESS_EMAIL)");

  const rows = Object.entries({
    Name: lead.name,
    Email: lead.email,
    Phone: lead.phone,
    Service: lead.service,
    ...lead.details,
    Message: lead.message || "None",
    Received: new Date().toLocaleString("en-GB", { timeZone: "Europe/London" }),
    "Source page": lead.sourcePage,
  })
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px 6px 0;color:#4a5258;vertical-align:top">${escape(k)}</td><td style="padding:6px 0;white-space:pre-wrap">${escape(v)}</td></tr>`,
    )
    .join("");

  const title = lead.kind === "quote" ? "New quote request" : "New website message";
  await sendEmail(
    to,
    `${title}: ${lead.name}`,
    `<div style="font-family:Arial,sans-serif;color:#1f2326"><h2 style="color:#262b2f">${title} for ${escape(business.name)}</h2><table>${rows}</table></div>`,
    lead.email,
  );
}

/** Best effort: the office already has the enquiry, so a failure here is logged, not shown. */
async function confirmToCustomer(lead: Lead) {
  if (!process.env.RESEND_API_KEY || !process.env.RESEND_FROM_EMAIL) return;
  try {
    await sendEmail(
      lead.email,
      `We have received your ${lead.kind === "quote" ? "quote request" : "message"}`,
      `<div style="font-family:Arial,sans-serif;color:#1f2326"><p>Hello ${escape(lead.name)},</p><p>Thank you for contacting ${escape(
        business.name,
      )}. Someone from the office will be in touch shortly.</p><p>If your move is urgent, call us on ${business.phone}.</p></div>`,
    );
  } catch (err) {
    console.error("Customer confirmation email failed", err);
  }
}

/**
 * Stores the enquiry and emails the office. Succeeds if at least one of the two worked.
 * Throws LeadNotDeliveredError if neither did, including when neither is configured, so the
 * route returns a 5xx and the visitor is told to call. Never reports success for a lost enquiry.
 */
export async function deliverLead(lead: Lead): Promise<void> {
  const [stored, emailed] = await Promise.allSettled([saveToSupabase(lead), emailOffice(lead)]);
  const failures = [stored, emailed].filter((r): r is PromiseRejectedResult => r.status === "rejected");

  if (failures.length === 2) {
    throw new LeadNotDeliveredError(failures.map((f) => String(f.reason instanceof Error ? f.reason.message : f.reason)));
  }
  for (const f of failures) console.error("Enquiry delivered by one route only", f.reason);
  await confirmToCustomer(lead);
}
