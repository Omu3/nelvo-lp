import { Metadata } from 'next';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { PricingPageContent } from './PricingPageContent';

export const metadata: Metadata = {
  title: "NELVO料金プラン｜Basic・Proの価格と機能比較、選び方",
  description: "NELVOの料金プラン（Basic/Pro）を価格と機能で比較。MRR・継続率・解約率（Churn）を可視化する運営ダッシュボード。変更・解約はいつでも可能。",
  alternates: {
    canonical: 'https://nelvo.co/pricing',
    languages: {
      'ja': 'https://nelvo.co/pricing',
      'en': 'https://nelvo.co/en/pricing',
      'x-default': 'https://nelvo.co/pricing',
    },
  },
  openGraph: {
    title: "NELVO料金プラン｜Basic・Proの価格と機能比較、選び方",
    description: "NELVOの料金プラン（Basic/Pro）を価格と機能で比較。MRR・継続率・解約率（Churn）を可視化する運営ダッシュボード。変更・解約はいつでも可能。",
    url: "https://nelvo.co/pricing",
    siteName: "NELVO",
    type: "website",
    images: [{ url: "https://nelvo.co/og/og-pricing-ja.png", width: 1200, height: 630, alt: "NELVO Pricing" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NELVO料金プラン｜Basic・Proの価格と機能比較、選び方",
    description: "NELVOの料金プラン（Basic/Pro）を価格と機能で比較。MRR・継続率・解約率（Churn）を可視化する運営ダッシュボード。変更・解約はいつでも可能。",
    images: ["https://nelvo.co/og/og-pricing-ja.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PricingPage() {
  return (
    <LanguageProvider initialLanguage="ja">
      <PricingPageContent />
    </LanguageProvider>
  );
}
