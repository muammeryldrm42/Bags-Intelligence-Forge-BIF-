import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap"
});

export const metadata: Metadata = {
  title: "BIF Protocol | Bags Intelligence Forge",
  description: "Industrial strategy-forging dashboard for Bags intelligence simulation."
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={geistMono.variable}>
      <body>{children}</body>
    </html>
  );
}
