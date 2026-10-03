import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Services } from "@/components/sections/Services";
import { Difference } from "@/components/sections/Difference";
import { FleetTeam } from "@/components/sections/FleetTeam";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { StorageCalculator } from "@/components/sections/StorageCalculator";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { ContactBlock } from "@/components/sections/ContactBlock";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <Difference />
      <FleetTeam />
      <Process />
      <Testimonials />
      <StorageCalculator />
      <QuoteSection />
      <ContactBlock />
    </>
  );
}
