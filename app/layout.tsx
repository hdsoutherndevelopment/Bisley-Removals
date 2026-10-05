import type { Metadata, Viewport } from "next";
import "./globals.css";
import { atkinson, besley } from "./fonts";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MobileBar } from "@/components/site/MobileBar";
import { business, isDemo, siteUrl } from "@/lib/config";
import { ogImage } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${business.name} | Removals and storage near Woking`,
    template: `%s | ${business.name}`,
  },
  description:
    "Removals, packing and containerised storage from Bisley, near Woking, since 1985. Our own full-time crews and lorries. Call 01483 489611.",
  applicationName: business.name,
  // Demo tier: never indexable. A demo carrying the prospect's name must not appear in search.
  robots: isDemo ? { index: false, follow: false, googleBot: { index: false, follow: false } } : undefined,
  openGraph: { type: "website", locale: "en_GB", siteName: business.name, images: [ogImage] },
  twitter: { card: "summary_large_image", images: [ogImage.url] },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${besley.variable} ${atkinson.variable}`}>
      <body className="pb-[calc(4.75rem+var(--safe-bottom))] md:pb-0">
        <a
          href="#main"
          className="btn btn-primary sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60]"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <Footer />
        <MobileBar />
      </body>
    </html>
  );
}
