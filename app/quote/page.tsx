import type { Metadata } from "next";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { Testimonials } from "@/components/sections/Testimonials";

export const metadata: Metadata = {
  title: "Get a Free Removals or Storage Quote",
  description: "Request a free, no-obligation removals or storage quote from Bisley Removals, near Woking. Or call 01483 489611.",
  alternates: { canonical: "/quote" },
};

const services = ["Removal", "Storage", "Removal and storage"];

export default async function QuotePage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const sp = await searchParams;
  const one = (k: string) => (typeof sp[k] === "string" ? (sp[k] as string) : undefined);
  const service = one("service");
  const details = one("details")?.slice(0, 2000);

  return (
    <>
      <QuoteSection
        headingLevel="h1"
        initial={{
          ...(service && services.includes(service) ? { service } : {}),
          ...(details ? { details } : {}),
        }}
      />
      <Testimonials />
    </>
  );
}
