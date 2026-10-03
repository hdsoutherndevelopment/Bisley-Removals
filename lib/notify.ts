import { business } from "./config";

export type DeliveryMode = "live" | "demo";

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

const escape = (v: string) =>
  v.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string);

async function saveToSupabase(lead: Lead) {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return false;
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
  if (!res.ok) throw new Error(`Supabase insert failed (${res.status})`);
  return true;
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
  if (!res.ok) throw new Error(`Resend failed (${res.status})`);
}

async function emailBusiness(lead: Lead) {
  const to = process.env.BUSINESS_EMAIL;
  if (!process.env.RESEND_API_KEY || !to) return false;

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
        `<tr><td style="padding:6px 12px 6px 0;color:#5B6B82;vertical-align:top">${escape(k)}</td><td style="padding:6px 0;white-space:pre-wrap">${escape(v)}</td></tr>`,
    )
    .join("");

  const title = lead.kind === "quote" ? "New quote request" : "New website message";
  await sendEmail(
    to,
    `${title}: ${lead.name}`,
    `<div style="font-family:Arial,sans-serif;color:#13294B"><h2>${title} for ${escape(business.name)}</h2><table>${rows}</table></div>`,
    lead.email,
  );

  // Customer confirmation only when a verified sending domain is configured.
  if (process.env.RESEND_FROM_EMAIL) {
    await sendEmail(
      lead.email,
      `We’ve received your ${lead.kind === "quote" ? "quote request" : "message"}`,
      `<div style="font-family:Arial,sans-serif;color:#13294B"><p>Hello ${escape(lead.name)},</p><p>Thank you for contacting ${escape(
        business.name,
      )}. A member of our team will be in touch shortly.</p><p>If your move is urgent, call us on ${business.phone}.</p></div>`,
    );
  }
  return true;
}

/** Stores and/or emails the lead. Returns "demo" when no backend is configured. */
export async function deliverLead(lead: Lead): Promise<DeliveryMode> {
  const [stored, emailed] = await Promise.all([saveToSupabase(lead), emailBusiness(lead)]);
  return stored || emailed ? "live" : "demo";
}
