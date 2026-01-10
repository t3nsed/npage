import type React from "react";
import type { Metadata } from "next";
import { Noto_Serif } from "next/font/google";
import "./globals.css";
import { Footer } from "./components/footer";
import { Header } from "./components/header";

export const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-serif",
});

export const metadata: Metadata = {
  title: "Johann Hipp",
  description: "Portfolio website of Johann Hipp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${notoSerif.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
