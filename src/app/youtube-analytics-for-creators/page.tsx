import { Metadata } from 'next';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { YoutubeAnalyticsPageContent } from './YoutubeAnalyticsPageContent';

export const metadata: Metadata = {
  title: "YouTubeクリエイター向け分析 | NELVO | コミュニティ運営ダッシュボード",
  description: "YouTubeチャンネルの登録者数、視聴回数、エンゲージメント率を可視化。NELVOでYouTubeデータと収益データを統合し、クリエイターの意思決定を支援します。",
  alternates: {
    canonical: 'https://nelvo.co/youtube-analytics-for-creators',
    languages: {
      'ja': 'https://nelvo.co/youtube-analytics-for-creators',
      'en': 'https://nelvo.co/en/youtube-analytics-for-creators',
      'x-default': 'https://nelvo.co/youtube-analytics-for-creators',
    },
  },
  openGraph: {
    title: "YouTubeクリエイター向け分析 | NELVO",
    description: "YouTubeチャンネルの登録者数、視聴回数、エンゲージメント率を可視化。NELVOでYouTubeデータと収益データを統合し、クリエイターの意思決定を支援します。",
    url: "https://nelvo.co/youtube-analytics-for-creators",
    siteName: "NELVO",
    type: "website",
    images: [{ url: "https://nelvo.co/og.png", width: 1200, height: 630, alt: "NELVO YouTube Analytics" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "YouTubeクリエイター向け分析 | NELVO",
    description: "YouTubeチャンネルの登録者数、視聴回数、エンゲージメント率を可視化。NELVOでYouTubeデータと収益データを統合し、クリエイターの意思決定を支援します。",
    images: ["https://nelvo.co/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function YoutubeAnalyticsPage() {
  return (
    <LanguageProvider initialLanguage="ja">
      <YoutubeAnalyticsPageContent />
    </LanguageProvider>
  );
}
