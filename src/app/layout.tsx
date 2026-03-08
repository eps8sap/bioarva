import type { Metadata } from "next";
import { Playfair_Display, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BioArva | Organic Seeds, Living Soil & Regenerative Growing",
  description:
    "America's most complete organic heirloom brassica seed collection. Soil science, composting, and regenerative gardening tools from experts in the Soil Food Web methodology.",
  openGraph: {
    title: "BioArva | Where Living Soil Meets Heritage Seeds",
    description:
      "Organic soil science, heirloom seeds, and regenerative gardening tools.",
    url: "https://bioarva.com",
    siteName: "BioArva",
    type: "website",
  },
};

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} ${jetbrains.variable} antialiased bg-bone-white text-soil-dark`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
