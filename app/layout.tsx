import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] ,
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Marvins20",
  description: "Marcus Abrante's Portolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(inter.variable, "bg-background text-foreground")}>{children}</body>
    </html>
  );
}
