import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Metadata } from 'next';
import { LanguageProvider } from '@/contexts/LanguageContext';

export const metadata: Metadata = {
  title: "Use Cases - NELVO | 活用事例・ユースケース",
  description: "NELVOの活用事例をご紹介。判断が感覚に寄ってしまう課題、情報がツールごとに分断される課題、共有のたびに集計し直す課題を解決します。",
  alternates: {
    canonical: 'https://nelvo.co/use-cases',
    languages: {
      'ja': 'https://nelvo.co/use-cases',
      'en': 'https://nelvo.co/en',
    },
  },
  openGraph: {
    title: "Use Cases - NELVO | 活用事例・ユースケース",
    description: "NELVOの活用事例をご紹介。判断が感覚に寄ってしまう課題、情報がツールごとに分断される課題、共有のたびに集計し直す課題を解決します。",
    url: "https://nelvo.co/use-cases",
    siteName: "NELVO",
    locale: "ja_JP",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "NELVO Use Cases" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Use Cases - NELVO | 活用事例・ユースケース",
    description: "NELVOの活用事例をご紹介。判断が感覚に寄ってしまう課題、情報がツールごとに分断される課題、共有のたびに集計し直す課題を解決します。",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function UseCasesPage() {
  return (
    <LanguageProvider initialLanguage="ja">
      <main className="min-h-screen bg-white selection:bg-purple-100 selection:text-purple-900">
        <Header />
        <div className="pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-8">
              Use Cases
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-600 leading-relaxed mb-12">
                コミュニティ運営において、運営判断が遅れる原因は「能力」ではなく「構造」の問題であることが多いです。NELVOは、この構造的な課題を解決し、データに基づいた迅速な意思決定を実現します。ここでは、NELVOが解決する主な課題と、その活用事例をご紹介します。
              </p>

              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  判断が感覚に寄ってしまう課題の解決
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  明確な根拠となる数字があちこちに分散しているため、経験や勘に頼った判断が増えていきます。これにより、判断に再現性がなくなり、成果も安定しません。NELVOを使用することで、複数のツールに散らばった運営データを統合し、明確な根拠に基づいた判断が可能になります。
                </p>
                <p className="text-gray-600 leading-relaxed">
                  例えば、メンバー数の増減や収益の変化を、時系列で確認できるため、感覚ではなくデータに基づいて判断できます。継続率の推移やセグメント別のパフォーマンス分析により、どの施策が効果的だったかを定量的に評価でき、再現性の高い運営が実現します。
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  情報がツールごとに分断される課題の解決
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  SNS・決済・コミュニティなど、運営データがツールごとに散らばっているため、現状を把握するだけで時間がかかり、判断すべきタイミングを逃してしまいます。NELVOは、これらのデータを自動的に統合し、ひとつの画面で全体像を把握できます。
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Discordのメンバー情報、Patreonのサブスクリプション状況、Stripeの決済データなど、異なるプラットフォームの情報を横断的に確認できます。ツールを行き来することなく、判断に必要な情報だけを効率的に確認でき、意思決定のスピードが大幅に向上します。
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  共有のたびに集計し直す課題の解決
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  チームへの共有や報告のたびに、手作業でデータを集め直す必要があります。この遅れが積み重なり、意思決定が後ろ倒しになります。NELVOでは、データが自動的に集計されるため、共有や報告の準備時間を大幅に短縮できます。
                </p>
                <p className="text-gray-600 leading-relaxed">
                  ダッシュボード上で最新の運営状況を確認でき、必要な情報をすぐに共有できます。グラフや数値は自動で更新されるため、手動での集計作業は不要です。これにより、報告の準備に時間を取られることなく、より重要な意思決定や戦略立案に集中できます。
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  日々の運営チェックの効率化
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Todayビュー機能により、今日確認すべき重要な変化だけをシンプルに表示します。新規加入者、解約者、更新者の情報を一目で確認でき、日々の運営業務を効率化します。不要な情報に惑わされることなく、判断に必要な情報だけに集中できます。
                </p>
                <p className="text-gray-600 leading-relaxed">
                  この機能により、毎日の運営チェック時間を大幅に短縮でき、より重要な意思決定や戦略立案に時間を割けます。シンプルなインターフェースで、初めて利用する方でも迷うことなく操作できます。運営の負担を減らし、本来の業務に集中できる環境を提供します。
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  データドリブンな運営の実現
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  NELVOのAnalytics機能により、継続率の推移、売上指標のトラッキング、セグメント別パフォーマンス分析など、高度な分析が可能です。これらの分析機能により、データに基づいた運営判断が可能になり、感覚や経験に頼らない再現性の高い意思決定が実現します。
                </p>
                <p className="text-gray-600 leading-relaxed">
                  複数コミュニティの比較グラフや、参加月×継続率のコホート分析（Retention Heatmap）も利用でき、成長速度と収益性を最大化するための洞察を得られます。データドリブンな運営により、コミュニティの成長を加速させることができます。
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  チームでの情報共有の改善
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  NELVOのダッシュボードは、チーム全体で共有できるため、運営状況を全員が同じ視点で確認できます。これにより、情報の非対称性が解消され、チーム全体で一貫した判断が可能になります。
                </p>
                <p className="text-gray-600 leading-relaxed">
                  報告や共有の準備時間を短縮でき、チームメンバーがより重要な業務に集中できます。データに基づいた議論が可能になり、より建設的な意思決定が実現します。チーム全体の生産性向上に貢献します。
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
