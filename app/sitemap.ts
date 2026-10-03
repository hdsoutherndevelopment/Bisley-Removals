import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/removals", "/storage", "/moving-day", "/about", "/contact", "/quote", "/privacy"];
  return routes.map((r) => ({
    url: `${siteUrl}${r}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: r === "" ? 1 : r === "/privacy" ? 0.3 : 0.8,
  }));
}
