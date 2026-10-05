"use client";

import dynamic from "next/dynamic";

/**
 * The enquiry forms render on the official site only. Loading them through next/dynamic keeps
 * their code, and the validation library, out of the demo's JavaScript entirely: a chunk is
 * only fetched when a form is actually rendered. They are still server-rendered when used.
 */
export const LazyQuoteForm = dynamic(() => import("./QuoteForm").then((m) => m.QuoteForm));
export const LazyContactForm = dynamic(() => import("./ContactForm").then((m) => m.ContactForm));
