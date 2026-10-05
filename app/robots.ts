import type { MetadataRoute } from "next";
import { isDemo, siteUrl } from "@/lib/config";

export default function robots(): MetadataRoute.Robots {
  // A demo carries the prospect's real business name, so it must never be crawled or indexed.
  if (isDemo) {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }
  return { rules: [{ userAgent: "*", allow: "/", disallow: "/api/" }], sitemap: `${siteUrl}/sitemap.xml` };
}
