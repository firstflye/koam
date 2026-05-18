import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KOAM | The Nexus of Cognition",
  description: "A distributed intelligence system for synthetic cognition.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black">{children}</body>
    </html>
  );
}
