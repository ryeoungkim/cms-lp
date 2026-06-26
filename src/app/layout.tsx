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
  title: "CMS — 経営者のための、AI×コンテキスト管理システム ｜ リエゾン",
  description:
    "事業のあらゆる文脈をAIに渡せる状態にするCMS（Context Management System）。IT導入補助金 約2/3 で実質負担を抑えて導入可能。お申込みフォーム・無料相談はこちら。",
  openGraph: {
    title: "CMS — 経営者のための、AI×コンテキスト管理システム",
    description:
      "事業のあらゆる文脈をAIに渡せる状態にするCMS。IT導入補助金 約2/3 で実質負担を抑えて導入可能。",
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
