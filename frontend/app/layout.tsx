import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AcompanyAI",
  description: "AcompanyAI Workspace",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}