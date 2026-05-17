import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, JetBrains_Mono, Lato, Crimson_Pro } from "next/font/google";
import "./globals.css";
import { wedding } from "@/lib/config";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
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
const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-lato",
});
const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-crimson-pro",
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
      className={`${cormorant.variable} ${inter.variable} ${jetbrains.variable} ${lato.variable} ${crimsonPro.variable}`}
    >
      <head>
        {/* LXGW WenKai — Kaiti (classical brush script) for Chinese names. Not on Google Fonts. */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/lxgw-wenkai-webfont@1.7.0/style.css"
        />
        {/* Crash Numbering Serif is self-hosted from /public/fonts — see @font-face in globals.css */}
      </head>
      <body>{children}</body>
    </html>
  );
}
