import { isDemo } from "@/lib/config";
import { enquiryResponse as respond } from "@/lib/enquiry-response";
import { deliverLead } from "@/lib/notify";
import { clientIp, rateLimited } from "@/lib/rate-limit";
import { fieldErrors, quoteSchema } from "@/lib/validation";

export async function POST(req: Request) {
  if (isDemo) return respond.notAvailable();
  if (rateLimited(`quote:${clientIp(req)}`)) return respond.tooMany();

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return respond.unreadable();
  }

  const parsed = quoteSchema.safeParse(body);
  if (!parsed.success) {
    const errors = fieldErrors(parsed.error);
    if (errors.website) return respond.rejected();
    return respond.invalid(errors);
  }

  const d = parsed.data;
  try {
    await deliverLead({
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
        Consent: "Agreed to be contacted about this enquiry",
      },
      sourcePage: req.headers.get("referer") || "website",
    });
    return respond.delivered();
  } catch (err) {
    console.error("Quote request not delivered", err);
    return respond.notDelivered();
  }
}
