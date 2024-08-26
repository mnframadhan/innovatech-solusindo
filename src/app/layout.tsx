import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Innovatech Solusindo",
  manifest: "https://i.imgur.com/9d53YLH.png",
  description: "Surabaya Software House",
  applicationName: "Innovatech Solusindo",
  authors: [
    {url: "linkedin/in/fitrah-ramadhan", name: "Fitrah"},
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
