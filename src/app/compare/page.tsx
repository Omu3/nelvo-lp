import { Metadata } from 'next';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { ComparePageContent } from './ComparePageContent';

export const metadata: Metadata = {
  title: "NELVO vs 競合比較 | コミュニティ運営ダッシュボード比較",
  description: "NELVOと他のコミュニティ運営ツールを比較。複数プラットフォームのデータ統合、MRR追跡、継続率分析などの機能を比較し、最適なツールを選択してください。",
  alternates: {
    canonical: 'https://nelvo.co/compare',
    languages: {
      'ja': 'https://nelvo.co/compare',
      'en': 'https://nelvo.co/en/compare',
      'x-default': 'https://nelvo.co/compare',
    },
  },
  openGraph: {
    title: "NELVO vs 競合比較 | コミュニティ運営ダッシュボード",
    description: "NELVOと他のコミュニティ運営ツールを比較。複数プラットフォームのデータ統合、MRR追跡、継続率分析などの機能を比較し、最適なツールを選択してください。",
    url: "https://nelvo.co/compare",
    siteName: "NELVO",
    type: "website",
    images: [{ url: "https://nelvo.co/og.png", width: 1200, height: 630, alt: "NELVO vs Competitors" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NELVO vs 競合比較 | コミュニティ運営ダッシュボード",
    description: "NELVOと他のコミュニティ運営ツールを比較。複数プラットフォームのデータ統合、MRR追跡、継続率分析などの機能を比較し、最適なツールを選択してください。",
    images: ["https://nelvo.co/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ComparePage() {
  return (
    <LanguageProvider initialLanguage="ja">
      <ComparePageContent />
    </LanguageProvider>
  );
}
