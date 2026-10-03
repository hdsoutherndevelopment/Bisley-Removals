import type { Metadata, Viewport } from "next";
import "@fontsource-variable/archivo/wdth.css";
import "./globals.css";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MobileCta } from "@/components/site/MobileCta";
import { JsonLd } from "@/components/site/JsonLd";
import { business, photos, siteUrl } from "@/lib/config";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Removals & Storage in Woking and Surrey | Bisley Removals, est. 1985",
    template: "%s | Bisley Removals & Storage",
  },
  description:
    "Family-run removals and secure storage from Bisley, near Woking, since 1985. Full-time moving teams, packing services and containerised storage across Surrey and beyond. Call 01483 489611.",
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: business.name,
    images: [{ url: photos.hero.src, alt: photos.hero.alt }],
  },
  twitter: { card: "summary_large_image", images: [photos.hero.src] },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = { themeColor: "#13294B" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <body className="pb-[72px] md:pb-0">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-white focus:px-4 focus:py-3 focus:font-semibold focus:shadow-card">
          Skip to content
        </a>
        <JsonLd />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MobileCta />
      </body>
    </html>
  );
}
