import type { Metadata } from "next";

import "./globals.css";
import { Inter } from 'next/font/google';

import { TheHeader } from "@/components/TheHeader";
import { TheFooter } from "@/components/TheFooter";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: "Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <TheHeader />
        <div className="container main">
          {children}
        </div>
          <TheFooter />
      </body>
    </html>
  );
}
