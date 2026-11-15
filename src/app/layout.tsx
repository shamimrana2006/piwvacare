import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "piwva — Care for Every Little Moment | Gentle Baby Care",
  description:
    "Pure, safe and thoughtful care products for your newborn and growing baby. Introducing piwva Baby Moisture Lotion.",
  keywords: [
    "piwva",
    "baby care",
    "baby lotion",
    "newborn safe",
    "hypoallergenic baby moisturizer",
    "organic baby skin care",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#FAF7F2] text-[#1A3B22] font-sans antialiased selection:bg-[#4D6D2E] selection:text-white">
        {children}
      </body>
    </html>
  );
}
