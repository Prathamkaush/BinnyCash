import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BinnyCash - Earn Real Money & Rewards Online",
  description: "Earn real money online by taking surveys, testing apps, playing games, and completing simple tasks. Fast, secure, and reliable payouts with BinnyCash.",
  keywords: ["earn money online", "get paid to", "rewards platform", "surveys for cash", "play games for money", "BinnyCash"],
  authors: [{ name: "BinnyCash" }],
  openGraph: {
    type: "website",
    title: "Earn Money Online with BinnyCash",
    description: "Turn your spare time into real cash rewards. Fast and secure payouts via PayPal, Crypto, and Gift Cards.",
    siteName: "BinnyCash",
    images: [{ url: "/logo.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Earn Money Online with BinnyCash",
    description: "Start earning today with surveys, apps, and simple tasks.",
    images: ["/logo.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#09070f",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-bg-primary text-text-primary">
        {children}
      </body>
    </html>
  );
}
