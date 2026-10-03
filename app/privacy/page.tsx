import type { Metadata } from "next";
import { business, fullAddress } from "@/lib/config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Bisley Removals & Storage Services uses the information you send through this website.",
  alternates: { canonical: "/privacy" },
};

// CONFIRM: have the client review this policy, add their contact email and the date it takes effect.
export default function PrivacyPage() {
  return (
    <section className="py-16 sm:py-24">
      <div className="wrap max-w-3xl">
        <h1 className="display text-[clamp(2.2rem,5vw,3.25rem)]">Privacy policy</h1>
        <div className="mt-8 space-y-6 text-lg text-navy/85 [&_h2]:heading [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:text-navy">
          <p>
            This policy explains how {business.name} (“we”, “us”) uses the personal information you give us through this
            website.
          </p>
          <h2>What we collect</h2>
          <p>
            When you request a quote or send a message, we collect the details you enter: your name, email address, phone
            number, postcodes, moving date and any information about your move or storage needs.
          </p>
          <h2>How we use it</h2>
          <p>
            We use your details only to respond to your enquiry, prepare a quotation and arrange your move or storage. We
            don’t sell your information or use it for unrelated marketing.
          </p>
          <h2>How long we keep it</h2>
          <p>
            We keep enquiry details for as long as needed to provide our services and meet legal and accounting obligations,
            then delete them.
          </p>
          <h2>Your rights</h2>
          <p>
            Under UK data protection law you can ask to see, correct or delete the information we hold about you, or object
            to how we use it. To make a request, call us on {business.phone} or write to us at {fullAddress}.
          </p>
          <h2>Cookies</h2>
          <p>This website uses only the cookies needed for it to work. We don’t use advertising or tracking cookies.</p>
          <p>
            If you’re unhappy with how we’ve handled your information, you can complain to the Information Commissioner’s
            Office at ico.org.uk.
          </p>
        </div>
      </div>
    </section>
  );
}
