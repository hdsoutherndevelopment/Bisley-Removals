import type { Metadata } from "next";
import { ContactBlock } from "@/components/sections/ContactBlock";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Bisley Removals & Storage Services at Bullhousen Farm, Bisley, Woking GU24 9EW. Call 01483 489611 or send us a message.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <ContactBlock title="Contact Bisley Removals" headingLevel="h1" />
      <FinalCta title="Looking for a moving quote?" text="Our quote form asks for everything an estimator needs, so we can come back to you quickly." />
    </>
  );
}
