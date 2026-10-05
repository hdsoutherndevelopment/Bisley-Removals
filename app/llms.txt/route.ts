import { business, fullAddress, siteUrl } from "@/lib/config";

export const dynamic = "force-static";

export function GET() {
  const body = `# ${business.name}

> Removals, packing and containerised storage from Bisley, near Woking, Surrey, since ${business.established}. Own full-time crews (no agency staff or subcontractors) and own fleet, from crew vans to HGV lorries.

- Phone: ${business.phone}
- Email: ${business.email}
- Yard and office: ${fullAddress}
- Area served: homes and businesses across Surrey and beyond, including long-distance moves
- Company: ${business.legalName}, company number ${business.companyNumber}

## Services

- [House removals](${siteUrl}/removals): full or part house moves, local or long distance
- [Packing](${siteUrl}/packing): full packing, fragile items only, or free boxes and materials to pack yourself
- [Containerised storage](${siteUrl}/storage): sealed containers packed at your home and kept in a guarded warehouse; no self storage
- [Office and commercial moves](${siteUrl}/commercial): internal moves to relocations across the country, with storage

## Useful pages

- [Get a free quote](${siteUrl}/quote)
- [What happens on moving day](${siteUrl}/moving-day)
- [Moving house checklist](${siteUrl}/moving-tips)
- [Insurance](${siteUrl}/insurance): goods insured up to £100,000 as standard; the company pays the claim excess
- [Customer reviews](${siteUrl}/reviews)
- [Contact](${siteUrl}/contact)
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
