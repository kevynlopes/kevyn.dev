import type { Metadata } from "next";
import { Syne } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

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
      <body className={`${syne.className} antialiased bg--topography`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
