import type { Metadata } from "next";
import { Geist, Geist_Mono, Newsreader, Figtree} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
});

const figtree = Figtree({
  variable: "--font-urbanist",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Adithya Giri",
  description: "This is my portfolio website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable} ${figtree.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
