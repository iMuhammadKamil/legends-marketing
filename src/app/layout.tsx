import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import WhatsAppCTA from "@/components/cta/WhatsAppCTA";
import StickyMobileCTA from "@/components/cta/StickyMobileCTA";
import FloatingLeadCTA from "@/components/cta/FloatingLeadCTA";
import ScrollReveal from "@/components/shared/ScrollReveal/ScrollReveal";
import { contact } from "@/data/contact";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Legends Marketing | Real Estate Sales & Investment Consultancy",
    template: "%s | Legends Marketing",
  },
  description:
    "Legends Marketing - Turning Properties into Profitable Opportunities. Real estate sales & marketing, property investment consultancy and investor advisory in Rawalpindi & Islamabad.",
  keywords: [
    "Legends Marketing",
    "real estate investment",
    "property consultancy",
    "Islamabad property",
    "Rawalpindi real estate",
    "overseas Pakistanis investment",
  ],
  openGraph: {
    title: "Legends Marketing | Real Estate Investment Platform",
    description: contact.tagline,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable}`}>
      <body>
        <ScrollReveal />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppCTA />
        <StickyMobileCTA />
        <FloatingLeadCTA />
      </body>
    </html>
  );
}