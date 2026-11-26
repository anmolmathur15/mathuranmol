import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Anmol Mathur — Portfolio",
  description:
    "Anmol Mathur is a software engineer and research assistant working on cloud systems and machine learning for wearable signals."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
