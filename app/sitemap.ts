import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/config";

const routes: { path: string; priority: number }[] = [
  { path: "", priority: 1 },
  { path: "/removals", priority: 0.9 },
  { path: "/packing", priority: 0.8 },
  { path: "/storage", priority: 0.9 },
  { path: "/commercial", priority: 0.7 },
  { path: "/moving-day", priority: 0.6 },
  { path: "/moving-tips", priority: 0.6 },
  { path: "/insurance", priority: 0.6 },
  { path: "/reviews", priority: 0.7 },
  { path: "/about", priority: 0.7 },
  { path: "/careers", priority: 0.4 },
  { path: "/contact", priority: 0.7 },
  { path: "/quote", priority: 0.9 },
  { path: "/privacy", priority: 0.2 },
  { path: "/terms", priority: 0.2 },
  { path: "/cookies", priority: 0.2 },
  { path: "/accessibility", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-04");
  return routes.map((r) => ({ url: `${siteUrl}${r.path}`, lastModified, changeFrequency: "monthly", priority: r.priority }));
}
