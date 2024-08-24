import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Innovatech Solusindo",
  description: "Software House Surabaya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth focus:scroll-auto">
      <link rel="icon" href="/logo.png" sizes="any" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
