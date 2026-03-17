import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kavin Nishanthan P D | Full Stack Developer",
  description:
    "Portfolio of Kavin Nishanthan P D — Full Stack Developer specializing in React, Next.js, Node.js, and building scalable web applications.",
  keywords: [
    "Kavin Nishanthan",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "Portfolio",
    "Web Developer",
  ],
  authors: [{ name: "Kavin Nishanthan P D" }],
  openGraph: {
    title: "Kavin Nishanthan P D | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, Node.js, and building scalable web applications.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kavin Nishanthan P D | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, Node.js, and building scalable web applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
