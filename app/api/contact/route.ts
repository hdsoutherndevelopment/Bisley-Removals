import { NextResponse } from "next/server";
import { contactSchema, fieldErrors } from "@/lib/validation";
import { deliverLead } from "@/lib/notify";
import { rateLimited, clientIp } from "@/lib/rate-limit";

export async function POST(req: Request) {
  if (rateLimited(`contact:${clientIp(req)}`)) {
    return NextResponse.json(
      { ok: false, message: "Too many messages in a short time. Wait a few minutes or call us on 01483 489611." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, message: "The form data could not be read. Refresh the page and try again." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    const errors = fieldErrors(parsed.error);
    if (errors.website) return NextResponse.json({ ok: true, mode: "demo" });
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  const d = parsed.data;
  try {
    const mode = await deliverLead({
      kind: "contact",
      name: d.name,
      email: d.email,
      phone: d.phone,
      service: "General enquiry",
      message: d.message,
      details: {},
      sourcePage: req.headers.get("referer") || "website",
    });
    return NextResponse.json({ ok: true, mode });
  } catch (err) {
    console.error("Contact delivery failed", err);
    return NextResponse.json(
      { ok: false, message: "Your message could not be sent just now. Try again, or call us on 01483 489611." },
      { status: 502 },
    );
  }
}
