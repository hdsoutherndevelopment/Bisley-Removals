/**
 * Central business details. Anything marked CONFIRM was not verifiable from the
 * client's public website and must be checked with Bisley Removals before launch.
 */

const IMG = "https://img1.wsimg.com/isteam/ip/0dd21fa5-5e86-4ccb-990b-80a56993cee8";

export const business = {
  name: "Bisley Removals & Storage Services",
  shortName: "Bisley Removals",
  established: 1985,
  motto: "Your move is our business",
  phone: "01483 489611",
  phoneHref: "tel:01483489611",
  phoneIntl: "+441483489611",
  address: {
    line1: "Unit 7, Bullhousen Farm",
    street: "Shaftsbury Road",
    locality: "Bisley",
    town: "Woking",
    county: "Surrey",
    postcode: "GU24 9EW",
    country: "GB",
  },
  serviceArea: "Surrey and beyond",
  // CONFIRM: the current site shows "09:00 – 17:00" but does not publish which days.
  officeHours: { label: "9am – 5pm", opens: "09:00", closes: "17:00" },
  instagram: "https://www.instagram.com/bisleyremovals",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Bisley+Removals+%26+Storage+Services%2C+Shaftsbury+Road%2C+Bisley%2C+Woking+GU24+9EW",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Bullhousen+Farm%2C+Shaftsbury+Road%2C+Bisley%2C+Woking+GU24+9EW&output=embed",
} as const;

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://bisleyremovals.co.uk").replace(/\/$/, "");

export const fullAddress = `${business.address.line1}, ${business.address.street}, ${business.address.locality}, ${business.address.town}, ${business.address.postcode}`;

/**
 * CONFIRM: these photographs are the client's own, taken from their current site.
 * Request full-resolution originals (plus team and yard shots) and move them into /public.
 */
export const photos = {
  hero: { src: `${IMG}/IMG_5069.JPG`, alt: "A Bisley Removals vehicle ready for a house move" },
  unloading: {
    src: `${IMG}/f6ec121f-3325-40c2-8224-cf076465a951.JPEG`,
    alt: "Bisley Removals vans unloading at a customer's property",
  },
  warehouse: { src: `${IMG}/IMG_4210.JPG`, alt: "A Bisley Removals van unloading into the storage warehouse" },
  containers: { src: `${IMG}/IMG_5802.JPG`, alt: "Insulated steel storage containers at the Bisley yard" },
  storageYard: { src: `${IMG}/IMG_5788.JPEG`, alt: "The Bisley Removals storage facility" },
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/removals", label: "Removals" },
  { href: "/storage", label: "Storage" },
  { href: "/moving-day", label: "Moving Day" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
] as const;
