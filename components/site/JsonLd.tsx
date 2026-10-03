import { business, photos, siteUrl } from "@/lib/config";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "@id": `${siteUrl}/#business`,
    name: business.name,
    url: siteUrl,
    telephone: business.phoneIntl,
    image: photos.hero.src,
    foundingDate: String(business.established),
    slogan: business.motto,
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
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
