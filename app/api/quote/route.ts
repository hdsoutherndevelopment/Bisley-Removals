import { NextResponse } from "next/server";
import { quoteSchema, fieldErrors } from "@/lib/validation";
import { deliverLead } from "@/lib/notify";
import { rateLimited, clientIp } from "@/lib/rate-limit";

export async function POST(req: Request) {
  if (rateLimited(`quote:${clientIp(req)}`)) {
    return NextResponse.json(
      { ok: false, message: "Too many requests in a short time. Wait a few minutes or call us on 01483 489611." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, message: "The form data could not be read. Refresh the page and try again." }, { status: 400 });
  }

  const parsed = quoteSchema.safeParse(body);
  if (!parsed.success) {
    const errors = fieldErrors(parsed.error);
    // Honeypot filled: pretend nothing happened, but never deliver.
    if (errors.website) return NextResponse.json({ ok: true, mode: "demo" });
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  const d = parsed.data;
  try {
    const mode = await deliverLead({
      kind: "quote",
      name: d.fullName,
      email: d.email,
      phone: d.phone,
      service: d.service,
      message: d.details,
      details: {
        "Moving from": d.fromPostcode.toUpperCase(),
        "Moving to": d.toPostcode ? d.toPostcode.toUpperCase() : "Not given",
        "Property size": d.propertySize,
        "Preferred date": d.moveDate || "Not decided",
        Packing: d.packing,
      },
      sourcePage: req.headers.get("referer") || "website",
    });
    return NextResponse.json({ ok: true, mode });
  } catch (err) {
    console.error("Quote delivery failed", err);
    return NextResponse.json(
      { ok: false, message: "Your request could not be sent just now. Try again, or call us on 01483 489611." },
      { status: 502 },
    );
  }
}
