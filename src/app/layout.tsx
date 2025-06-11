import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "./CustomCursor";


export const metadata: Metadata = {
  title: "The Cube Studio",
  description: "The Cube Studio - Your all in one marketing studio",
  openGraph: {
    title: "The Cube Studio",
    description: "The Cube Studio - Your all in one marketing studio",
    url: "https://thecube-one.vercel.app",
    siteName: "The Cube Studio",
    images: [
      {
        url: "https://thecube-one.vercel.app/Logo.png",
        alt: "The Cube Studio",
        width: 1200,
        height: 630,
      },
    ],
    type: "website", 
  },
  twitter: {
    card: "summary_large_image",
    title: "The Cube Studio",
    description: "The Cube Studio - Your all in one marketing studio",
    images: ["https://thecube-one.vercel.app/Logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en">
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
