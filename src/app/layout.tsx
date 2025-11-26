import type { Metadata } from "next";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
