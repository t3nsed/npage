import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "./components/footer";

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
      <body className="font-sans">
        {children}
        <Footer />
      </body>
    </html>
  );
}

import "./globals.css";
