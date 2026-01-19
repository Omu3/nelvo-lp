import { Metadata } from 'next';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { CommunityAnalyticsPageContent } from './CommunityAnalyticsPageContent';

export const metadata: Metadata = {
  title: "コミュニティ分析ダッシュボード | NELVO | 統合コミュニティ運営",
  description: "Discord、YouTube、Instagramなど複数プラットフォームのコミュニティデータを統合し、包括的なコミュニティ分析を実現。NELVOでコミュニティの成長と収益を一画面で把握します。",
  alternates: {
    canonical: 'https://nelvo.co/community-analytics-dashboard',
    languages: {
      'ja': 'https://nelvo.co/community-analytics-dashboard',
      'en': 'https://nelvo.co/en/community-analytics-dashboard',
      'x-default': 'https://nelvo.co/community-analytics-dashboard',
    },
  },
  openGraph: {
    title: "コミュニティ分析ダッシュボード | NELVO",
    description: "Discord、YouTube、Instagramなど複数プラットフォームのコミュニティデータを統合し、包括的なコミュニティ分析を実現。NELVOでコミュニティの成長と収益を一画面で把握します。",
    url: "https://nelvo.co/community-analytics-dashboard",
    siteName: "NELVO",
    type: "website",
    images: [{ url: "https://nelvo.co/og.png", width: 1200, height: 630, alt: "NELVO Community Analytics" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "コミュニティ分析ダッシュボード | NELVO",
    description: "Discord、YouTube、Instagramなど複数プラットフォームのコミュニティデータを統合し、包括的なコミュニティ分析を実現。NELVOでコミュニティの成長と収益を一画面で把握します。",
    images: ["https://nelvo.co/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CommunityAnalyticsPage() {
  return (
    <LanguageProvider initialLanguage="ja">
      <CommunityAnalyticsPageContent />
    </LanguageProvider>
  );
}
