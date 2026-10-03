import { z } from "zod";

const ukPostcode = /^[A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}$/i;
const phone = /^(?:\+?44\s?|0)(?:\d\s?){9,10}$/;

const trimmed = (max: number) => z.string().trim().max(max, `Keep this under ${max} characters.`);

export const quoteSchema = z.object({
  fullName: trimmed(80).min(2, "Enter your full name."),
  email: trimmed(120).email("Enter a valid email address, like name@example.co.uk."),
  phone: trimmed(20).regex(phone, "Enter a UK phone number, like 01483 489611 or 07700 900123."),
  fromPostcode: trimmed(10).regex(ukPostcode, "Enter a full UK postcode, like GU24 9EW."),
  toPostcode: trimmed(10)
    .refine((v) => v === "" || ukPostcode.test(v), "Enter a full UK postcode, or leave blank if going into storage.")
    .optional()
    .default(""),
  service: z.enum(["Removal", "Storage", "Removal and storage"], { errorMap: () => ({ message: "Choose a service." }) }),
  propertySize: trimmed(60).min(1, "Choose the size of your property."),
  moveDate: trimmed(10)
    .refine((v) => v === "" || !Number.isNaN(Date.parse(v)), "Enter a valid date.")
    .optional()
    .default(""),
  packing: trimmed(60).min(1, "Choose your packing preference."),
  details: trimmed(2000).optional().default(""),
  website: z.string().max(0).optional().default(""), // honeypot
});

export const contactSchema = z.object({
  name: trimmed(80).min(2, "Enter your name."),
  email: trimmed(120).email("Enter a valid email address, like name@example.co.uk."),
  phone: trimmed(20).regex(phone, "Enter a UK phone number, like 01483 489611."),
  message: trimmed(2000).min(10, "Tell us a little more, at least 10 characters."),
  website: z.string().max(0).optional().default(""),
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
