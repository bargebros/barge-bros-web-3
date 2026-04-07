import type { Metadata } from "next";
import { Nunito, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";

const nunito = Nunito({
  variable: "--font-inter", // keep var name — all components reference --font-inter
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700", "900"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Barge Bros | Dock Cleaning & Lakefront Services Okanagan",
  description:
    "Barge Bros provides professional dock cleaning, maintenance, and shoreline services across Okanagan Lake. Call 778-805-9888.",
  keywords: [
    "dock cleaning Okanagan",
    "shoreline cleanup Okanagan Lake",
    "lakefront property services BC",
    "dock pressure washing Okanagan",
    "dock services Okanagan Lake",
  ],
  openGraph: {
    title: "Barge Bros | Dock Cleaning & Lakefront Services Okanagan",
    description:
      "Professional dock cleaning, maintenance, and shoreline services across Okanagan Lake. Call 778-805-9888.",
    url: "https://bargebros.ca",
    siteName: "Barge Bros",
    locale: "en_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable} ${bebasNeue.variable}`}>
      <body className="min-h-full flex flex-col antialiased">
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
