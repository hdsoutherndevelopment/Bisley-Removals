import type { LucideIcon } from "lucide-react";
import { Home, Package, Sofa, Warehouse, Building2, CalendarCheck } from "lucide-react";

export type Service = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  /** false = not explicitly listed on the client's current site; treat as configurable copy. */
  confirmed: boolean;
};

export const services: Service[] = [
  {
    title: "House Removals",
    description:
      "Local and long-distance home moves planned by experienced estimators and carried out by our own full-time team.",
    href: "/removals",
    icon: Home,
    confirmed: true,
  },
  {
    title: "Packing Services",
    description:
      "Full packing, fragile-only packing, or free boxes and materials delivered to your door if you’d rather pack yourself.",
    href: "/removals#packing",
    icon: Package,
    confirmed: true,
  },
  {
    title: "Furniture Removals",
    description:
      "Careful wrapping, dismantling and reassembly of beds, wardrobes and larger pieces, placed exactly where you want them.",
    href: "/removals#furniture",
    icon: Sofa,
    confirmed: false, // CONFIRM: offered as part of house moves; check if quoted as a standalone service
  },
  {
    title: "Storage Solutions",
    description:
      "Secure, inventoried container storage in our supervised warehouse, for a week between completions or a year away.",
    href: "/storage",
    icon: Warehouse,
    confirmed: true,
  },
  {
    title: "Commercial Removals",
    description:
      "Office and business relocations, from a small internal move to a nationwide move, with storage if your premises aren’t ready.",
    href: "/removals#commercial",
    icon: Building2,
    confirmed: true,
  },
  {
    title: "Moving Day Support",
    description:
      "A team leader who walks your home with you, a timed plan for the day and a final walkthrough before we leave.",
    href: "/moving-day",
    icon: CalendarCheck,
    confirmed: true,
  },
];

export type Testimonial = { name: string; quote: string };

/**
 * Verbatim reviews published on bisleyremovals.co.uk (five-star styling as shown there).
 * CONFIRM: attribution read from the source carousel; check names against the originals.
 */
export const testimonials: Testimonial[] = [
  {
    name: "Jessica Jandrell",
    quote:
      "I’ve moved 9 times in the last 15 years and this was the most stress free move, all thanks to Bisley removals! I originally chose them as I loved the fact that all of their employees are directly employed - they don’t use agency staff - and everyone has been with the business for years. This is really apparent with how well they work as a team. …",
  },
  {
    name: "David Gale",
    quote:
      "Everything about our move was done brilliantly by Bisley Removals. The gentleman who came to assess our needs was well informed and aware of issues that could arise (and, even better, how to resolve them). The move happened over three days and we saw a whole cast from the company under Mark’s leadership. All were unfailingly polite, cheerful and competent. …",
  },
  {
    name: "Becky & Toby",
    quote:
      "Could not believe how smooth, stress free and organised our move went thanks to the team at Bisley Removals. We were let down by another company, and within the same day of contacting Bisley we had a quote for our removals at quite short notice. We were happy with the price and very impressed that all boxes, packing paper and tape were included in the quote cost. …",
  },
  {
    name: "Roxie",
    quote:
      "Phenomenal!! We had the full packing service and, from the first phone call to the final box, we were really taken care of by this incredibly hardworking, professional and friendly company. … We couldn’t recommend Bisley Removals more highly - don’t hesitate in booking them and good luck with your move!",
  },
  {
    name: "Jackie Liddiard",
    quote:
      "From the beginning of the whole process Bisley Removals have been 5*. From providing the quote, supplying packing boxes to the actual moving day, everything was seamless. … Stuart and his team were absolutely brilliant! … Placing boxes where I wanted, nothing was too much trouble. Amazing service, would definitely recommend.",
  },
  {
    name: "Haoying Guo",
    quote:
      "… The team was punctual, professional, and incredibly hardworking. They handled all our belongings with care and made the whole moving process so much easier than we expected. We have short period between exchange and completion, they made what could have been a stressful experience feel smooth and well-organised. …",
  },
  {
    name: "Kreena Patel",
    quote:
      "Kane, Stuart and Rob did such a fantastic job and took away so much of the stress of moving for us. … They took care of all of our items, re-assembled our beds and the labels on boxes is made unpacking that bit easier. Highly recommend Bisley Removals.",
  },
  {
    name: "Peter Smith",
    quote:
      "Excellent service for our move from Woking to Devon. A great team of guys who were all really friendly and polite. They also worked their socks off! Overall a great experience. …",
  },
  {
    name: "Tina Cartwright",
    quote:
      "The guys turned up promptly, were polite and considerate. Packed everything really carefully, even fragile glassware. They even helped move around furniture! Would most definitely recommend and would certainly use again in the future.",
  },
  {
    name: "Richard Duncan",
    quote:
      "Very helpful before the move, accommodating all of the last minute house move madness. The packing service was excellent and really took the pressure off. On the day an army of people worked tirelessly to make the day as easy as possible for us. Highly recommended!",
  },
  {
    name: "Eva De Graaff",
    quote:
      "Got lots of quotes, this company came out very competitive. The packers and movers were all very friendly, and our possessions made it to the new house in great condition. Would definitely recommend the packing service it was very stress free. …",
  },
];

export const fleet = [
  { key: "crew", name: "Crew vans", length: 150, use: "Connect and Combo vans for delivering boxes, packing materials and smaller jobs." },
  { key: "luton", name: "Luton vans", length: 230, use: "Compact enough for tight streets and driveways where access is limited." },
  { key: "lowloader", name: "Low loaders", length: 245, use: "Specialist low-floor vehicles for easier loading when access matters." },
  { key: "hgv", name: "HGV lorries", length: 360, use: "Pantechnicons for the largest loads and complex, multi-day moves." },
] as const;

export const propertySizes = [
  "Studio or 1-bed flat",
  "2-bed flat or house",
  "3-bed house",
  "4-bed house",
  "5+ bed house",
  "Part load (a few rooms or items)",
  "Office or commercial premises",
] as const;

export const packingOptions = [
  "Full packing service",
  "Fragile items only",
  "I’ll pack (please supply materials)",
  "Not sure yet",
] as const;
