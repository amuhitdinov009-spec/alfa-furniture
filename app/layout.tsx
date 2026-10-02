import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ALFA FURNITURE",
  description: "ALFA FURNITURE — mebel va uy mahsulotlari",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz">
      <body>{children}</body>
    </html>
  );
}