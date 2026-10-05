/**
 * Central business details and site settings.
 *
 * Anything marked CONFIRM was taken from the client's public website or public records
 * and must be checked with Bisley Removal Services before the site goes live.
 */

/**
 * Site tier, from the HD Southern build standard.
 * - "demo": an unsolicited example on a vercel.app address. Noindex, robots Disallow, and no
 *   working enquiry forms: visitors reach the business directly by phone, email and its own
 *   Removals Manager quote form.
 * - "official": the launched site on the client's domain. Forms are rendered and must deliver.
 * Anything other than SITE_TIER=official is treated as a demo, so a misconfigured deploy can
 * never accidentally publish live forms in the prospect's name.
 */
export const siteTier: "demo" | "official" = process.env.SITE_TIER === "official" ? "official" : "demo";
export const isDemo = siteTier === "demo";

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://bisleyremovals.co.uk").replace(/\/$/, "");

export const business = {
  // CONFIRM: public trading name. The logo, lorries and quote form use "Bisley Removal Services";
  // the current website title uses "Bisley Removals & Storage Services".
  name: "Bisley Removal Services",
  shortName: "Bisley Removals",
  legalName: "Bisley Removal Services Ltd",
  // Companies House, checked 4 Oct 2026. CONFIRM with the client before launch.
  companyNumber: "09356138",
  registeredOffice: "Unit 7 Bullhousen Farm, Bisley Green, Bisley, Woking, Surrey GU24 9EW",
  // CONFIRM: "since 1985" and "family-run" are the client's own wording on their current site.
  established: 1985,
  phone: "01483 489611",
  phoneHref: "tel:+441483489611",
  phoneIntl: "+441483489611",
  email: "info@bisleyremovals.co.uk",
  emailHref: "mailto:info@bisleyremovals.co.uk",
  address: {
    line1: "Unit 7, Bullhousen Farm",
    // CONFIRM spelling: the current site says "Shaftsbury", the privacy policy and postcode
    // records say "Shaftesbury".
    street: "Shaftesbury Road",
    locality: "Bisley",
    town: "Woking",
    county: "Surrey",
    postcode: "GU24 9EW",
    country: "GB",
  },
  serviceArea: "Surrey and beyond",
  instagram: "https://www.instagram.com/bisleyremovals",
  // The short link the current site uses for its Google reviews.
  googleReviews: "https://share.google/x8C5szV4tM0XrtHvN",
  // Removals Manager is the client's own quote system. Keep these links working.
  quoteUrl: "https://rm-bisleyremovals.co.uk/survey.php",
  partLoadQuoteUrl: "https://rm-bisleyremovals.co.uk/survey.php?p=11",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Bullhousen+Farm%2C+Bisley%2C+Woking+GU24+9EW",
} as const;

export const fullAddress = `${business.address.line1}, ${business.address.street}, ${business.address.locality}, ${business.address.town}, ${business.address.county} ${business.address.postcode}`;

/**
 * The client's own logo and photographs, copied from their current website and served from
 * /public, so the site does not depend on the old host. Camera metadata has been removed.
 * CONFIRM: before launch, ask for the full-resolution originals and the vector logo.
 */
export const brand = {
  // The client's logo with its white background removed, in their burgundy and in signwriter
  // cream for charcoal surfaces. 1200 x 564.
  logo: { ink: "/brand/logo-ink.png", cream: "/brand/logo-cream.png", width: 1200, height: 564 },
} as const;

export type Photo = { src: string; alt: string; width: number; height: number };

export const photos = {
  lorryDriveway: {
    src: "/photos/lorry-driveway.jpg",
    alt: "A Bisley Removal Services lorry on the block-paved drive of a large red-brick house",
    width: 2000,
    height: 1500,
  },
  lorryStreet: {
    src: "/photos/lorry-street.jpg",
    alt: "A Bisley Removal Services lorry in burgundy livery on a tree-lined road",
    width: 2000,
    height: 1500,
  },
  lorriesAtHouse: {
    src: "/photos/lorries-outside-house.jpg",
    alt: "Two Bisley Removal Services lorries parked outside a house",
    width: 2000,
    height: 923,
  },
  crew: {
    src: "/photos/crew.jpg",
    alt: "The Bisley Removal Services crew in burgundy uniforms, lined up in front of a Luton van at the yard",
    width: 2000,
    height: 1500,
  },
  fleet: {
    src: "/photos/fleet.webp",
    alt: "Rows of Bisley Removal Services vans and Luton lorries parked in the yard",
    width: 1179,
    height: 755,
  },
  yard: {
    src: "/photos/yard-sign.jpg",
    alt: "The Bisley Removal Services yard sign with the phone number, and the fleet parked behind it",
    width: 2000,
    height: 1450,
  },
  vanAtContainers: {
    src: "/photos/van-and-containers.jpg",
    alt: "A Bisley Removal Services Luton van beside a row of green steel storage containers",
    width: 2000,
    height: 1500,
  },
  containers: {
    src: "/photos/container-row.jpg",
    alt: "A long row of green steel storage containers at the Bisley yard",
    width: 1500,
    height: 2000,
  },
  steelContainers: {
    src: "/photos/steel-containers-open.jpg",
    alt: "Three steel storage containers at the Bisley yard with their doors open",
    width: 2000,
    height: 2000,
  },
  packingBox: {
    src: "/photos/packing-box.jpg",
    alt: "An open removal box filled with items individually wrapped in packing paper",
    width: 1220,
    height: 915,
  },
} satisfies Record<string, Photo>;

export const primaryNav = [
  { href: "/removals", label: "Removals" },
  { href: "/packing", label: "Packing" },
  { href: "/storage", label: "Storage" },
  { href: "/commercial", label: "Commercial" },
  { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "About" },
] as const;

export const allPages = [
  { href: "/removals", label: "House removals" },
  { href: "/packing", label: "Packing" },
  { href: "/storage", label: "Storage" },
  { href: "/commercial", label: "Office and commercial moves" },
  { href: "/moving-day", label: "Moving day" },
  { href: "/moving-tips", label: "Moving checklist" },
  { href: "/insurance", label: "Insurance" },
  { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "About us" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
] as const;
