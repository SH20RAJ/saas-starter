import type { Metadata } from "next";
import { StackProvider, StackTheme } from "@stackframe/stack";
import { stackServerApp } from "../stack";
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
  title: "SaaS Starter Template - Build Your MVP Fast",
  description: "Complete SaaS starter template with authentication, components, and modern stack. Built with Next.js, TypeScript, Tailwind CSS, and Stack Auth.",
  keywords: ["SaaS", "starter template", "Next.js", "TypeScript", "authentication", "MVP", "React"],
  authors: [{ name: "SaaS Starter" }],
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "SaaS Starter",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: "SaaS Starter Template",
    title: "SaaS Starter Template - Build Your MVP Fast",
    description: "Complete SaaS starter template with authentication, components, and modern stack.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SaaS Starter Template",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SaaS Starter Template - Build Your MVP Fast",
    description: "Complete SaaS starter template with authentication, components, and modern stack.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="theme-color" content="#3B82F6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="SaaS Starter" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#3B82F6" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      ><StackProvider app={stackServerApp}><StackTheme>
        {children}
      </StackTheme></StackProvider></body>
    </html>
  );
}
