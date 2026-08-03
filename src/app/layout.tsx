import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vishal Ratan Shakya | Full Stack Engineer",
  description:
    "Modern portfolio for a full stack engineer building scalable web and mobile applications with React, Next.js, Node.js, and TypeScript.",
  openGraph: {
    title: "Vishal Ratan Shakya | Full Stack Engineer",
    description:
      "Modern portfolio for a full stack engineer building scalable web and mobile applications with React, Next.js, Node.js, and TypeScript.",
    type: "website",
    url: "https://example.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
