import { Metadata } from 'next';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { IntegrationsPageContent } from './IntegrationsPageContent';

export const metadata: Metadata = {
  title: "Integrations - NELVO | 連携プラットフォーム",
  description: "NELVOは、主要なコミュニティ運営サービスや決済サービスと連携し、複数のプラットフォームに分散している運営データを統合します。各プラットフォームのAPIと安全に連携し、リアルタイムでデータを同期するため、手動での集計作業は不要です。",
  alternates: {
    canonical: 'https://nelvo.co/integrations',
    languages: {
      'ja': 'https://nelvo.co/integrations',
      'en': 'https://nelvo.co/en/integrations',
      'x-default': 'https://nelvo.co/integrations',
    },
  },
  openGraph: {
    title: "NELVO Integrations | Connect your stack in minutes",
    description: "NELVOは、主要なコミュニティ運営サービスや決済サービスと連携し、複数のプラットフォームに分散している運営データを統合します。Discord • Stripe • YouTube • Instagramと接続できます。",
    url: "https://nelvo.co/integrations",
    siteName: "NELVO",
    type: "website",
    images: [{ url: "https://nelvo.co/og/og-integrations-ja.png", width: 1200, height: 630, alt: "NELVO Integrations" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NELVO Integrations | Connect your stack in minutes",
    description: "NELVOは、主要なコミュニティ運営サービスや決済サービスと連携し、複数のプラットフォームに分散している運営データを統合します。Discord • Stripe • YouTube • Instagramと接続できます。",
    images: ["https://nelvo.co/og/og-integrations-ja.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function IntegrationsPage() {
  return (
    <LanguageProvider initialLanguage="ja">
      <IntegrationsPageContent />
    </LanguageProvider>
  );
}
