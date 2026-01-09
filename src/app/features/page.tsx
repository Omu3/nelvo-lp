import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Metadata } from 'next';
import { LanguageProvider } from '@/contexts/LanguageContext';

export const metadata: Metadata = {
  title: "Features - NELVO | コミュニティ運営ダッシュボードの機能",
  description: "NELVOの主要機能をご紹介。データ統合、メンバー状況の可視化、収益・成長の把握、Todayビューなど、コミュニティ運営に必要な機能を一画面で完結します。",
  alternates: {
    canonical: 'https://nelvo.co/features',
    languages: {
      'ja': 'https://nelvo.co/features',
      'en': 'https://nelvo.co/en',
    },
  },
  openGraph: {
    title: "Features - NELVO | コミュニティ運営ダッシュボードの機能",
    description: "NELVOの主要機能をご紹介。データ統合、メンバー状況の可視化、収益・成長の把握、Todayビューなど、コミュニティ運営に必要な機能を一画面で完結します。",
    url: "https://nelvo.co/features",
    siteName: "NELVO",
    locale: "ja_JP",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "NELVO Features" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Features - NELVO | コミュニティ運営ダッシュボードの機能",
    description: "NELVOの主要機能をご紹介。データ統合、メンバー状況の可視化、収益・成長の把握、Todayビューなど、コミュニティ運営に必要な機能を一画面で完結します。",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function FeaturesPage() {
  return (
    <LanguageProvider initialLanguage="ja">
      <main className="min-h-screen bg-white selection:bg-purple-100 selection:text-purple-900">
        <Header />
        <div className="pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-8">
              Features
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-600 leading-relaxed mb-12">
                NELVOは、複数のツールに散らばったコミュニティ運営データを統合し、ひとつの画面で全体像を把握できるダッシュボードです。日々の運営判断に必要な情報を効率的に確認でき、データに基づいた意思決定を迅速に行えます。各機能は、実際の運営現場で発生する課題を解決するために設計されており、直感的な操作で誰でも簡単に使いこなすことができます。
              </p>

              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  データ統合
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Discord、Patreon、Stripe、Skoolなど、複数のプラットフォームに分散している運営データを自動的に統合します。各ツールのAPIと連携し、リアルタイムでデータを同期するため、手動での集計作業は不要です。異なるプラットフォーム間のデータを横断的に確認でき、全体の運営状況を一目で把握できます。
                </p>
                <p className="text-gray-600 leading-relaxed">
                  連携可能なサービスは順次拡張予定で、現在利用している運営環境に合わせて柔軟に活用できます。認証情報は安全に管理され、必要最小限のデータのみを取得するため、セキュリティ面でも安心です。
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  メンバー状況の可視化
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  コミュニティメンバーの参加・継続・離脱などの状態を、わかりやすいビジュアルで表示します。新規加入者、アクティブメンバー、解約者を自動的に分類し、ステータスごとに管理できます。加入日、更新日、解約日も自動で記録されるため、メンバーの動向を正確に追跡できます。
                </p>
                <p className="text-gray-600 leading-relaxed">
                  コミュニティごとの増減状況もグラフで確認でき、どの時期に成長したか、どの時期に離脱が増えたかを視覚的に把握できます。これらの情報は、運営戦略の見直しや改善施策の検討に活用できます。
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  収益・成長の把握
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  MRR（月次経常収益）、月次売上、LTV（顧客生涯価値）などの重要な収益指標を自動計算し、ダッシュボード上で確認できます。数値の変化を時系列で追跡できるため、成長トレンドを把握しやすく、次の一手を判断する際の根拠となります。
                </p>
                <p className="text-gray-600 leading-relaxed">
                  継続率の推移も6ヶ月、12ヶ月単位で可視化され、長期的な運営状況を分析できます。セグメント別のパフォーマンス分析機能により、Returning、VIP、At Riskなどの顧客グループごとの特徴を把握し、適切な施策を打てます。
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Todayビュー
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  今日確認すべき重要な変化だけをシンプルに表示するTodayビュー機能です。新規加入者、解約者、更新者の情報を一目で確認でき、日々の運営業務を効率化します。不要な情報に惑わされることなく、判断に必要な情報だけに集中できます。
                </p>
                <p className="text-gray-600 leading-relaxed">
                  この機能により、毎日の運営チェック時間を大幅に短縮でき、より重要な意思決定や戦略立案に時間を割けます。シンプルなインターフェースで、初めて利用する方でも迷うことなく操作できます。
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Analytics ダッシュボード
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  詳細な分析機能を提供するAnalyticsダッシュボードでは、継続率の推移、売上指標のトラッキング、セグメント別パフォーマンス分析など、高度な分析が可能です。複数コミュニティの比較グラフや、参加月×継続率のコホート分析（Retention Heatmap）も利用できます。
                </p>
                <p className="text-gray-600 leading-relaxed">
                  これらの分析機能により、データに基づいた運営判断が可能になり、感覚や経験に頼らない再現性の高い意思決定が実現します。成長速度と収益性を最大化するための洞察を得られます。
                </p>
              </section>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </LanguageProvider>
  );
}
