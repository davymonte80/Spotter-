import type React from "react";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spotter.ai - AI-Powered Analytics Platform",
  description:
    "Transform data into decisions. Spot opportunities before your competition with our intelligent analytics platform.",
  keywords: ["AI", "analytics", "data", "insights", "machine learning"],
  authors: [{ name: " David Monte" }],
  openGraph: {
    title: "Spotter.ai - AI-Powered Analytics Platform",
    description: "Transform data into decisions with intelligent analytics",
    type: "website",
    url: "https://spotter.ai",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head />
      <body className={`${inter.className} antialiased flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        {/* Ensure the footer is always at the bottom */}
            </body>
    </html>
  );
}
