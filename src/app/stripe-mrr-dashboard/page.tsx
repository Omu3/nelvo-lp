import { Metadata } from 'next';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { StripeMrrPageContent } from './StripeMrrPageContent';

export const metadata: Metadata = {
  title: "Stripe MRRダッシュボード | NELVO | コミュニティ運営ダッシュボード",
  description: "StripeのMRR（月次経常収益）、解約率、継続率を可視化。NELVOでStripeデータとコミュニティ成長を統合し、収益と成長の相関を分析します。",
  alternates: {
    canonical: 'https://nelvo.co/stripe-mrr-dashboard',
    languages: {
      'ja': 'https://nelvo.co/stripe-mrr-dashboard',
      'en': 'https://nelvo.co/en/stripe-mrr-dashboard',
      'x-default': 'https://nelvo.co/stripe-mrr-dashboard',
    },
  },
  openGraph: {
    title: "Stripe MRRダッシュボード | NELVO",
    description: "StripeのMRR（月次経常収益）、解約率、継続率を可視化。NELVOでStripeデータとコミュニティ成長を統合し、収益と成長の相関を分析します。",
    url: "https://nelvo.co/stripe-mrr-dashboard",
    siteName: "NELVO",
    type: "website",
    images: [{ url: "https://nelvo.co/og.png", width: 1200, height: 630, alt: "NELVO Stripe MRR Dashboard" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stripe MRRダッシュボード | NELVO",
    description: "StripeのMRR（月次経常収益）、解約率、継続率を可視化。NELVOでStripeデータとコミュニティ成長を統合し、収益と成長の相関を分析します。",
    images: ["https://nelvo.co/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function StripeMrrPage() {
  return (
    <LanguageProvider initialLanguage="ja">
      <StripeMrrPageContent />
    </LanguageProvider>
  );
}
