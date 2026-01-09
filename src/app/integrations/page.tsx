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
    title: "Integrations - NELVO | 連携プラットフォーム",
    description: "NELVOは、主要なコミュニティ運営サービスや決済サービスと連携し、複数のプラットフォームに分散している運営データを統合します。各プラットフォームのAPIと安全に連携し、リアルタイムでデータを同期するため、手動での集計作業は不要です。",
    url: "https://nelvo.co/integrations",
    siteName: "NELVO",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "NELVO Integrations" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Integrations - NELVO | 連携プラットフォーム",
    description: "NELVOは、主要なコミュニティ運営サービスや決済サービスと連携し、複数のプラットフォームに分散している運営データを統合します。各プラットフォームのAPIと安全に連携し、リアルタイムでデータを同期するため、手動での集計作業は不要です。",
    images: ["/og.png"],
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
