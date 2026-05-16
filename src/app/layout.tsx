import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, JetBrains_Mono, Italiana } from "next/font/google";
import "./globals.css";
import { wedding } from "@/lib/config";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
});
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
});
const italiana = Italiana({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-italiana",
});

export const metadata: Metadata = {
  metadataBase: new URL(wedding.url),
  title: `${wedding.groom.firstNameEn} & ${wedding.bride.firstNameEn} · ${wedding.date.short}`,
  description: `Join us as we celebrate our wedding on ${wedding.date.full} at ${wedding.venue.nameEn}, Kuala Lumpur.`,
  openGraph: {
    title: `${wedding.groom.firstNameEn} & ${wedding.bride.firstNameEn} · ${wedding.date.short}`,
    description: `Our wedding · ${wedding.date.full} · ${wedding.venue.nameEn}, KL`,
    url: wedding.url,
    siteName: "jomlimteh.com",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    locale: "en_MY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${wedding.groom.firstNameEn} & ${wedding.bride.firstNameEn}`,
    description: `${wedding.date.full} · ${wedding.venue.nameEn}`,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${jetbrains.variable} ${italiana.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
