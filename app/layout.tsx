import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Seruyshi Signature Safaris",
  description: "Luxury safari experiences across Africa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}