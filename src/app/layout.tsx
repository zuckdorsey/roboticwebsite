import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import BackToTop from "@/components/BackToTop";

export const metadata: Metadata = {
  title: "Polibatam Robotics - Robotic Technology Program",
  description: "Premier robotics education program at Politeknik Negeri Batam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <Providers>
          {children}
          <BackToTop />
        </Providers>
      </body>
    </html>
  );
}
