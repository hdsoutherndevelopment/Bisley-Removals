import { isDemo } from "@/lib/config";
import { enquiryResponse as respond } from "@/lib/enquiry-response";
import { deliverLead } from "@/lib/notify";
import { clientIp, rateLimited } from "@/lib/rate-limit";
import { contactSchema, fieldErrors } from "@/lib/validation";

export async function POST(req: Request) {
  if (isDemo) return respond.notAvailable();
  if (rateLimited(`contact:${clientIp(req)}`)) return respond.tooMany();

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return respond.unreadable();
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    const errors = fieldErrors(parsed.error);
    if (errors.website) return respond.rejected();
    return respond.invalid(errors);
  }

  const d = parsed.data;
  try {
    await deliverLead({
      kind: "contact",
      name: d.name,
      email: d.email,
      phone: d.phone,
      service: "General enquiry",
      message: d.message,
      details: { Consent: "Agreed to be contacted about this enquiry" },
      sourcePage: req.headers.get("referer") || "website",
    });
    return respond.delivered();
  } catch (err) {
    console.error("Contact message not delivered", err);
    return respond.notDelivered();
  }
}
