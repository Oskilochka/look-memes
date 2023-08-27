import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { siteConfig } from "@/constant/config";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`
  },
  description: siteConfig.description
};

type RootLayoutProps = {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {children}
      <div id="portal" />
      </body>
    </html>
  );
}
