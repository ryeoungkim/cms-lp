import type { Metadata, Viewport } from "next";
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
  title: "CMS — AIを、事業のパートナーに。コンテキストマネジメントシステム ｜ リエゾン",
  description:
    "会社の概要から事業の状況まで、そのすべてをAIが理解できる形に整えるコンテキストマネジメントシステム（CMS）。AIを、事業のパートナーとして自律的に動かす第一歩。",
  openGraph: {
    title: "CMS — AIを、事業のパートナーに。",
    description:
      "会社の概要から事業の状況まで、そのすべてをAIが理解できる形に整えるコンテキストマネジメントシステム（CMS）。",
    type: "website",
    locale: "ja_JP",
  },
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
