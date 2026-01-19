import { Metadata } from 'next';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { MembershipRetentionPageContent } from './MembershipRetentionPageContent';

export const metadata: Metadata = {
  title: "メンバーシップ継続率分析 | NELVO | コミュニティ運営ダッシュボード",
  description: "メンバーシップの継続率、解約率、離脱リスクを可視化。NELVOで継続率の推移を追跡し、メンバーシップ運営を最適化します。",
  alternates: {
    canonical: 'https://nelvo.co/membership-retention',
    languages: {
      'ja': 'https://nelvo.co/membership-retention',
      'en': 'https://nelvo.co/en/membership-retention',
      'x-default': 'https://nelvo.co/membership-retention',
    },
  },
  openGraph: {
    title: "メンバーシップ継続率分析 | NELVO",
    description: "メンバーシップの継続率、解約率、離脱リスクを可視化。NELVOで継続率の推移を追跡し、メンバーシップ運営を最適化します。",
    url: "https://nelvo.co/membership-retention",
    siteName: "NELVO",
    type: "website",
    images: [{ url: "https://nelvo.co/og.png", width: 1200, height: 630, alt: "NELVO Membership Retention" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "メンバーシップ継続率分析 | NELVO",
    description: "メンバーシップの継続率、解約率、離脱リスクを可視化。NELVOで継続率の推移を追跡し、メンバーシップ運営を最適化します。",
    images: ["https://nelvo.co/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MembershipRetentionPage() {
  return (
    <LanguageProvider initialLanguage="ja">
      <MembershipRetentionPageContent />
    </LanguageProvider>
  );
}
