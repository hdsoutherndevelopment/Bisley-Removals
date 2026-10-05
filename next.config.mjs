/** @type {import('next').NextConfig} */

const isOfficial = process.env.SITE_TIER === "official";
const isProd = process.env.NODE_ENV === "production";

// Content Security Policy. The official site also allows the client's Calcumate storage calculator.
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isOfficial ? " https://production.calcumate.co" : ""}`,
  `style-src 'self' 'unsafe-inline'${isOfficial ? " https://production.calcumate.co" : ""}`,
  `img-src 'self' data: blob:${isOfficial ? " https://*.calcumate.co" : ""}`,
  "font-src 'self' data:",
  `connect-src 'self'${isOfficial ? " https://*.calcumate.co" : ""}`,
  "frame-src https://player.vimeo.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  ...(isProd ? [{ key: "Content-Security-Policy", value: csp }] : []),
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()" },
  // Demo tier: belt and braces alongside the meta robots tag and robots.txt.
  ...(isOfficial ? [] : [{ key: "X-Robots-Tag", value: "noindex, nofollow" }]),
];

// Every URL on the client's current site keeps working: same path, or a 301 to its closest equivalent.
const legacyRedirects = [
  ["/about-us", "/about"],
  ["/contact-us", "/contact"],
  ["/privacy-policy", "/privacy"],
  ["/testimonials", "/reviews"],
  ["/porters", "/about#crews"],
  ["/video", "/about#videos"],
  ["/storage-calculator", "/storage#space"],
  ["/removals-in-bisley.html", "/removals"],
];

const nextConfig = {
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2678400,
  },
  async redirects() {
    return legacyRedirects.map(([source, destination]) => ({ source, destination, statusCode: 301 }));
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
