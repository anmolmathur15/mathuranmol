import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Anmol Mathur — Portfolio",
  description:
    "Portfolio of Anmol Mathur, Computer Engineering master's student, research assistant, and software developer working across machine learning, embedded systems, and software engineering."
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
