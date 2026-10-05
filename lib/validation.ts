import { z } from "zod";

const ukPostcode = /^[A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}$/i;
const phone = /^(?:\+?44\s?|0)(?:\d\s?){9,10}$/;

const trimmed = (max: number) => z.string().trim().max(max, `Keep this under ${max} characters.`);

/** The choices offered in the quote form. Kept here so the form and the server agree. */
export const quoteServices = ["Removal", "Storage", "Removal and storage"] as const;

export const quotePropertySizes = [
  "Flat or maisonette",
  "1 bedroom house",
  "2 bedroom house",
  "3 bedroom house",
  "4 bedroom house",
  "5 or more bedrooms",
  "Office or business premises",
  "A few items only",
] as const;

export const quotePackingChoices = [
  "Full packing service",
  "Fragile items only",
  "I will pack myself",
  "Not sure yet",
] as const;

// Required, separate and unticked by default. Sent as a real boolean, never assumed.
const consent = z.literal(true, {
  errorMap: () => ({ message: "Tick the box to confirm we can contact you about your enquiry." }),
});

// Honeypot: real visitors never see it, so anything in it means a bot filled the form.
const honeypot = z.string().max(0).optional().default("");

export const quoteSchema = z.object({
  fullName: trimmed(80).min(2, "Enter your full name."),
  email: trimmed(120).email("Enter a valid email address, like name@example.co.uk."),
  phone: trimmed(20).regex(phone, "Enter a UK phone number, like 01483 489611 or 07700 900123."),
  fromPostcode: trimmed(10).regex(ukPostcode, "Enter a full UK postcode, like GU24 9EW."),
  toPostcode: trimmed(10)
    .refine((v) => v === "" || ukPostcode.test(v), "Enter a full UK postcode, or leave blank if going into storage.")
    .optional()
    .default(""),
  service: z.enum(quoteServices, { errorMap: () => ({ message: "Choose a service." }) }),
  propertySize: z.enum(quotePropertySizes, { errorMap: () => ({ message: "Choose the size of your property." }) }),
  moveDate: trimmed(10)
    .refine((v) => v === "" || !Number.isNaN(Date.parse(v)), "Enter a valid date.")
    .optional()
    .default(""),
  packing: z.enum(quotePackingChoices, { errorMap: () => ({ message: "Choose your packing preference." }) }),
  details: trimmed(2000).optional().default(""),
  consent,
  website: honeypot,
});

export const contactSchema = z.object({
  name: trimmed(80).min(2, "Enter your name."),
  email: trimmed(120).email("Enter a valid email address, like name@example.co.uk."),
  phone: trimmed(20).regex(phone, "Enter a UK phone number, like 01483 489611."),
  message: trimmed(2000).min(10, "Tell us a little more, at least 10 characters."),
  consent,
  website: honeypot,
});

export type QuoteInput = z.infer<typeof quoteSchema>;
export type ContactInput = z.infer<typeof contactSchema>;

export function fieldErrors(error: z.ZodError): Record<string, string> {
  const out: Record<string, string> = {};
  for (const issue of error.issues) {
    const key = String(issue.path[0] ?? "form");
    if (!out[key]) out[key] = issue.message;
  }
  return out;
}
