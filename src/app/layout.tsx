/*
╭──────────────────────────────────────────────────────────────────╮
│                        PORTFOLIO PROJECT                          │
╰──────────────────────────────────────────────────────────────────╯

Project : Polibatam Robotic Major Website
Author  : zuckdorsey
Website : https://ababil.is-not-a.dev
GitHub  : zuckdorsey
Year    : 2025

This project showcases my technical skills and coding style.
Feel free to explore and provide feedback!
*/

import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import BackToTop from "@/components/BackToTop";
import JsonLd from "@/components/JsonLd";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Polibatam Robotics - Robotic Technology Program",
    template: "%s | Polibatam Robotics"
  },
  description: "Premier robotics education program at Politeknik Negeri Batam. Leading the way in robotics technology education, research, and innovation in Indonesia.",
  keywords: ["Robotics", "Polibatam", "Engineering", "Technology", "Education", "Indonesia", "Batam", "Mechatronics", "Automation", "AI"],
  authors: [{ name: "Polibatam Robotics Team" }],
  creator: "Politeknik Negeri Batam",
  publisher: "Politeknik Negeri Batam",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://robotics.polibatam.ac.id"), // Replace with actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Polibatam Robotics - Robotic Technology Program",
    description: "Premier robotics education program at Politeknik Negeri Batam. Leading the way in robotics technology education, research, and innovation in Indonesia.",
    url: "https://robotics.polibatam.ac.id",
    siteName: "Polibatam Robotics",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // Ensure this image exists in public folder
        width: 1200,
        height: 630,
        alt: "Polibatam Robotics Program",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Polibatam Robotics - Robotic Technology Program",
    description: "Premier robotics education program at Politeknik Negeri Batam.",
    images: ["/og-image.jpg"], // Ensure this image exists in public folder
    creator: "@polibatam", // Replace with actual handle if available
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.className} antialiased`}>
        <Providers>
          <JsonLd />
          {children}
          <BackToTop />
        </Providers>
      </body>
    </html>
  );
}
