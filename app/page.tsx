import { Hero } from "@/components/sections/Hero";
import { ServiceBand } from "@/components/sections/ServiceBand";
import { Reassurance } from "@/components/sections/Reassurance";
import { MovingDayTimetable } from "@/components/sections/MovingDayTimetable";
import { ReviewsBlock } from "@/components/sections/ReviewsBlock";
import { StorageFeature } from "@/components/sections/StorageFeature";
import { LocalBlock } from "@/components/sections/LocalBlock";
import { FinalPanel } from "@/components/sections/FinalPanel";
import { JsonLd, businessJsonLd } from "@/components/site/JsonLd";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Bisley Removal Services | Removals and storage near Woking",
  description:
    "Removals, packing and containerised storage from Bisley, near Woking, since 1985. Our own full-time crews and lorries. Call 01483 489611.",
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceBand />
      <Reassurance />
      <MovingDayTimetable />
      <ReviewsBlock />
      <StorageFeature />
      <LocalBlock />
      <FinalPanel />
      <JsonLd data={businessJsonLd()} />
    </>
  );
}
