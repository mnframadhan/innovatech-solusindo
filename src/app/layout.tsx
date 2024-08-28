import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Innovatech Solusindo",
  description: "Surabaya Software House",
  applicationName: "Innovatech Solusindo",
  authors: [
    {url: "https://www.linkedin.com/in/fitrah-ramadhan", name: "Fitrah"},
    {url: "", name: "Titus"},
    {url: "", name: "Fajar"}
  ],
  keywords: ["jasa pembuatan website", "jasa pembuatana aplikasi", "surabaya" ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth focus:scroll-auto">
      <link rel="icon" href="/logo.png" sizes="any" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Handjet:wght@100..900&display=swap" rel="stylesheet" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
