import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nelvo.co"),
  title: "NELVO | コミュニティ運営の全体像をひとつの画面に",
  description:
    "Discord / Patreon / Stripe / Skool など複数ツールに散らばる運営データを整理・可視化し、意思決定を速くする統合ダッシュボード。",
  alternates: { canonical: "https://nelvo.co/" },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.png", sizes: "any" }, // 既存のfavicon.pngも残す（後方互換性）
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "NELVO | コミュニティ運営の全体像をひとつの画面に",
    description:
      "複数ツールに散らばる運営データを整理・可視化。意思決定を速くする統合ダッシュボード。",
    url: "https://nelvo.co/",
    siteName: "NELVO",
    locale: "ja_JP",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "NELVO" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NELVO | コミュニティ運営の全体像をひとつの画面に",
    description:
      "複数ツールに散らばる運営データを整理・可視化。意思決定を速くする統合ダッシュボード。",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "NELVO",
  "url": "https://nelvo.co",
  "logo": "https://nelvo.co/logo.png",
  "sameAs": [],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "NELVO",
  "url": "https://nelvo.co",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://nelvo.co/?s={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        {children}
      </body>
    </html>
  );
}
