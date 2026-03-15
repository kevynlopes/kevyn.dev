import type { Metadata } from "next";
import { Syne } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MainSection from "@/components/MainSection";

const syne = Syne({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kevyn Dev",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${syne.className} antialiased bg--sla`}>
        <Header />
        <HeroSection />
        <MainSection />
      </body>
    </html>
  );
}
