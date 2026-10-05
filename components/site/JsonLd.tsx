import { brand, business, photos, siteUrl } from "@/lib/config";

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe here: it contains no user input, and "<" is escaped below.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

/** MovingCompany is the schema.org LocalBusiness subtype for a removals firm. Home page only. */
export function businessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "@id": `${siteUrl}/#business`,
    name: business.name,
    legalName: business.legalName,
    url: siteUrl,
    telephone: business.phoneIntl,
    email: business.email,
    logo: `${siteUrl}${brand.logo.ink}`,
    image: `${siteUrl}${photos.lorryDriveway.src}`,
    foundingDate: String(business.established),
    address: {
      "@type": "PostalAddress",
      streetAddress: `${business.address.line1}, ${business.address.street}`,
      addressLocality: business.address.locality,
      addressRegion: business.address.county,
      postalCode: business.address.postcode,
      addressCountry: business.address.country,
    },
    areaServed: { "@type": "AdministrativeArea", name: "Surrey" },
    sameAs: [business.instagram],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Removals, packing and storage",
      itemListElement: [
        ["House removals", "/removals"],
        ["Packing", "/packing"],
        ["Containerised storage", "/storage"],
        ["Office and commercial moves", "/commercial"],
      ].map(([name, path]) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name, url: `${siteUrl}${path}` },
      })),
    },
  };
}

export function breadcrumbJsonLd(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: t.path === "/" ? siteUrl : `${siteUrl}${t.path}`,
    })),
  };
}
