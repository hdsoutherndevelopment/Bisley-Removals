import type { Metadata } from "next";
import { business, siteUrl } from "./config";

type PageMetaInput = {
  /** Page title. The layout template adds " | Bisley Removal Services". */
  title: string;
  description: string;
  path: string;
  /** Use the title exactly as given, without the template (home page). */
  absoluteTitle?: boolean;
};

export const ogImage = { url: "/og.jpg", width: 1200, height: 630, alt: `${business.name}: removals, packing and storage from Bisley, near Woking` };

export function pageMeta({ title, description, path, absoluteTitle = false }: PageMetaInput): Metadata {
  const url = path === "/" ? siteUrl : `${siteUrl}${path}`;
  const fullTitle = absoluteTitle ? title : `${title} | ${business.name}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_GB",
      siteName: business.name,
      url,
      title: fullTitle,
      description,
      images: [ogImage],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [ogImage.url] },
  };
}
