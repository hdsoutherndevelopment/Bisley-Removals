import { NextResponse } from "next/server";
import { business } from "./config";

const callUs = `call us on ${business.phone} or email ${business.email}`;

/** Shared responses for the enquiry API routes, so both say the same thing in the same way. */
export const enquiryResponse = {
  /** Demo tier: there is no form, so the endpoint does not exist. */
  notAvailable: () =>
    NextResponse.json({ ok: false, message: `Online enquiries are not available here. Please ${callUs}.` }, { status: 404 }),
  tooMany: () =>
    NextResponse.json({ ok: false, message: `Too many requests in a short time. Wait a few minutes, or ${callUs}.` }, { status: 429 }),
  unreadable: () =>
    NextResponse.json({ ok: false, message: "The form data could not be read. Refresh the page and try again." }, { status: 400 }),
  /** Honeypot filled. Never a fake success: a real visitor whose browser autofilled it is told to call. */
  rejected: () =>
    NextResponse.json({ ok: false, message: `Your enquiry could not be sent. Please ${callUs}.` }, { status: 400 }),
  invalid: (errors: Record<string, string>) => NextResponse.json({ ok: false, errors }, { status: 422 }),
  /** Neither the database nor the office email worked. Nothing was delivered, so say so. */
  notDelivered: () =>
    NextResponse.json(
      { ok: false, message: `Your enquiry could not be sent just now, so nothing has reached us. Please ${callUs}.` },
      { status: 503 },
    ),
  delivered: () => NextResponse.json({ ok: true }),
};
