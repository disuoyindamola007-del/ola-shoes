import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  themeColor: "#FAF7F2",
};

export const metadata: Metadata = {
  title: "Ola Shoes — Handcrafted Artisanal Luxury Footwear",
  description:
    "Bespoke comfort and handcrafted Nigerian luxury footwear. Step into your own with master-crafted loafers, sneakers, oxfords, and heels in Lagos, Nigeria.",
  keywords: [
    "Ola Shoes",
    "Luxury Footwear Nigeria",
    "Handcrafted Leather Shoes",
    "Lagos Cordwainers",
    "Sneakers",
    "Loafers",
    "Nigerian Fashion",
  ],
  openGraph: {
    title: "Ola Shoes — Handcrafted Artisanal Luxury Footwear",
    description:
      "Bespoke comfort and handcrafted Nigerian luxury footwear. Step into your own with master-crafted footwear in Lagos, Nigeria.",
    type: "website",
    locale: "en_NG",
  },
};

import { Providers } from "@/components/Providers";
import { NotificationToast } from "@/components/NotificationToast";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="h-full antialiased selection:bg-secondary-container"
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500;1,600;1,700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body className="min-h-full bg-surface text-on-surface flex flex-col items-center">
        {/* Mobile viewport container: 360px-428px touch canvas, centered on desktop */}
        <div className="w-full max-w-md min-h-screen bg-surface flex flex-col relative shadow-[0_0_50px_rgba(36,25,19,0.08)]">
          <Providers>
            {children}
            <NotificationToast />
          </Providers>
        </div>
      </body>
    </html>
  );
}
