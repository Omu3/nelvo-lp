import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Metadata } from 'next';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { DiscordAnalyticsPageContent } from './DiscordAnalyticsPageContent';

export const metadata: Metadata = {
  title: "Discord分析ツール | NELVO | コミュニティ運営ダッシュボード",
  description: "Discordコミュニティのメンバー数、アクティブ率、継続率を可視化。NELVOでDiscordの運営状況を一元管理し、データに基づいたコミュニティ運営を実現します。",
  alternates: {
    canonical: 'https://nelvo.co/discord-analytics',
    languages: {
      'ja': 'https://nelvo.co/discord-analytics',
      'en': 'https://nelvo.co/en/discord-analytics',
      'x-default': 'https://nelvo.co/discord-analytics',
    },
  },
  openGraph: {
    title: "Discord分析ツール | NELVO",
    description: "Discordコミュニティのメンバー数、アクティブ率、継続率を可視化。NELVOでDiscordの運営状況を一元管理し、データに基づいたコミュニティ運営を実現します。",
    url: "https://nelvo.co/discord-analytics",
    siteName: "NELVO",
    type: "website",
    images: [{ url: "https://nelvo.co/og.png", width: 1200, height: 630, alt: "NELVO Discord Analytics" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Discord分析ツール | NELVO",
    description: "Discordコミュニティのメンバー数、アクティブ率、継続率を可視化。NELVOでDiscordの運営状況を一元管理し、データに基づいたコミュニティ運営を実現します。",
    images: ["https://nelvo.co/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function DiscordAnalyticsPage() {
  return (
    <LanguageProvider initialLanguage="ja">
      <DiscordAnalyticsPageContent />
    </LanguageProvider>
  );
}
