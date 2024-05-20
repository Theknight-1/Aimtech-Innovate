import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import localFont  from "next/font/local";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aimtech",
  description: "The best Disgital Marketting Agency in US",
};

const satoshi = localFont({
  src: "./satoshi.ttf",
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/brand/favicon.png" type="image/x-icon" />
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500&display=swap" rel="stylesheet"></link>
      </head>
      <body className={satoshi.className}>{children}</body>
    </html>
  );
}
