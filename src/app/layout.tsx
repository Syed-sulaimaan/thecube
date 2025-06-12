import type { Metadata } from "next";
import "./globals.css";
import ClientCursor from "./components/ClientCursor";


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
        {children}
        <ClientCursor />
      </body>
    </html>
  );
}
