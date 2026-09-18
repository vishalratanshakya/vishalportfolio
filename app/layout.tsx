import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { PageTransition } from "@/components/PageTransition";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vishalshakya.dev"),
  title: "Vishal Ratan Shakya — Full Stack Developer",
  description:
    "Production-quality personal portfolio of Vishal Ratan Shakya. Full-stack software developer experienced in React.js, Next.js, Node.js, Express.js, TypeScript, Flutter, Dart, and MongoDB.",
  keywords: [
    "Vishal Ratan Shakya",
    "Full Stack Developer",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "Flutter",
    "Dart",
    "TypeScript",
    "MongoDB",
    "Firebase",
    "Software Engineer Noida",
  ],
  authors: [{ name: "Vishal Ratan Shakya" }],
  openGraph: {
    title: "Vishal Ratan Shakya — Full Stack Developer Portfolio",
    description:
      "I build modern web and mobile applications with clean code, thoughtful interfaces and seamless user experiences.",
    url: "https://vishalshakya.dev",
    siteName: "Vishal Ratan Shakya Portfolio",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${outfit.variable}`}>
      <body className="bg-[#08090B] text-zinc-100 antialiased min-h-screen flex flex-col selection:bg-sky-400 selection:text-black">
        <CustomCursor />
        <Navigation />
        <main className="flex-grow">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
