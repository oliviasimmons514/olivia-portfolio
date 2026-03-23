import type { Metadata } from "next";
import { Manrope, Syne } from "next/font/google";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope"
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://olivia-simmons.vercel.app"),
  title: "Olivia Simmons | iPhone Videographer & Content Creator",
  description:
    "Modern portfolio for Olivia Simmons, a videographer and social media storyteller creating iPhone content, wedding films, church media, and ad creative.",
  keywords: [
    "Olivia Simmons",
    "iPhone videographer",
    "content creator",
    "wedding content creator",
    "social media videography",
    "church content creator",
    "brand video ads"
  ],
  openGraph: {
    title: "Olivia Simmons | iPhone Videographer & Content Creator",
    description:
      "Scroll-stopping iPhone videography, social-first storytelling, and premium content creation for brands, weddings, and church media.",
    url: "https://olivia-simmons.vercel.app",
    siteName: "Olivia Simmons Portfolio",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Olivia Simmons | iPhone Videographer & Content Creator",
    description:
      "Premium portfolio for a modern videographer specializing in iPhone content, social media storytelling, weddings, and ad creation."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${manrope.variable} ${syne.variable} bg-paper font-sans text-ink antialiased`}>
        {children}
      </body>
    </html>
  );
}
