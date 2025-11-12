import type { Metadata } from "next";
import "./globals.css";
import site from "@/content/site.json";

export const metadata: Metadata = {
  title: `${site.brand} | ${site.tagline}`,
  description: "Modern barbershop: fades, shaves, and style.",
  openGraph: {
    title: `${site.brand} | ${site.tagline}`,
    description: "Modern barbershop: fades, shaves, and style.",
    url: "https://kings-barbershop.vercel.app",
    siteName: site.brand,
    images: [{ url: "/brand/og-image.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website"
  },
  icons: { icon: "/favicon.ico" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const ld = {
    "@context": "https://schema.org",
    "@type": "Barbershop",
    name: site.brand,
    address: site.address,
    telephone: site.phone,
    url: "https://kings-barbershop.vercel.app"
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-dark text-light">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
        />
        {children}
      </body>
    </html>
  );
}
