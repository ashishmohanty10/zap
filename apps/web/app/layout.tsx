import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navabar } from "@/components/landing-page/navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "ZAPS",
  description: "Automate your workflow with zaps",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-r from-neutral-950 via-slate-900 to-neutral-900`}
      >
        <Navabar />

        <main>{children}</main>
      </body>
    </html>
  );
}
