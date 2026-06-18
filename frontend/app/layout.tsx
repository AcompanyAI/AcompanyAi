import { Sora } from "next/font/google";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AcompanyAI",
  description: "AcompanyAI Workspace",
};

const sora = Sora({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
     <body className={sora.className}>
        {children}
      </body>
    </html>
  );
}