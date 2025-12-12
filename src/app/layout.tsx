import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Global Video | Stream Videos Like Never Before",
  description:
    "Discover millions of videos from around the world. Experience crystal-clear streaming, personalized recommendations, and seamless playback on any device with Global Video.",
  keywords: [
    "video streaming",
    "global video",
    "4K streaming",
    "watch videos online",
    "video platform",
  ],
  openGraph: {
    title: "Global Video | Stream Videos Like Never Before",
    description:
      "Discover millions of videos from around the world. Experience crystal-clear streaming on any device.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Video | Stream Videos Like Never Before",
    description:
      "Discover millions of videos from around the world. Experience crystal-clear streaming on any device.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
