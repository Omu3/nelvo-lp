'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PageNavigation } from '@/components/PageNavigation';
import { TableOfContents } from '@/components/TableOfContents';
import { NextPageLink } from '@/components/NextPageLink';
import { Lightbulb, Layers, Clock, TrendingUp, Users, BarChart3 } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { getLocalizedPath } from '@/lib/url';

const iconMap = {
  '判断を「感覚」から「数字」へ切り替える': Lightbulb,
  'ツール分断をなくし「全体像」を一括把握': Layers,
  '共有のたびに「集計し直す」をやめる': Clock,
  '毎日の運営チェックを「1画面」で完了': TrendingUp,
  '成長・継続率・収益をまとめて分析': BarChart3,
  'チームの情報共有を「標準化」する': Users,
  // English fallbacks
  'Solving the Challenge of Decisions Relying on Intuition': Lightbulb,
  'Solving the Challenge of Information Fragmented by Tool': Layers,
  'Solving the Challenge of Re-aggregating Every Time': Clock,
  'Streamlining Daily Operational Checks': TrendingUp,
  'Achieving Data-Driven Operations': BarChart3,
  'Improving Team Information Sharing': Users,
};

const colorMap = [
  'orange', 'blue', 'purple', 'green', 'indigo', 'teal'
];

export function UseCasesPageContent() {
  const { t, language } = useLanguage();
  const pageT = t.pages.useCases;

  return (
    <main className="min-h-screen bg-white selection:bg-purple-100 selection:text-purple-900" data-language={language}>
      <Header />
      
      {/* Page Header */}
      <div className="pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-4xl">
          <PageNavigation />
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
            {pageT.title}
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            {pageT.description}
          </p>
          <TableOfContents
            items={pageT.cases.map((useCase, index) => ({
              label: useCase.title,
              href: `#use-case-${index + 1}`,
            }))}
          />
        </div>
      </div>

      {/* Use Cases Grid */}
      <section className="usecases-section py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pageT.cases.map((useCase, index) => {
              const Icon = iconMap[useCase.title as keyof typeof iconMap] || Lightbulb;
              const color = colorMap[index % colorMap.length];
              const colorClasses = {
                orange: "bg-orange-50 text-orange-600 border-orange-100",
                blue: "bg-blue-50 text-blue-600 border-blue-100",
                purple: "bg-purple-50 text-purple-600 border-purple-100",
                green: "bg-green-50 text-green-600 border-green-100",
                indigo: "bg-indigo-50 text-indigo-600 border-indigo-100",
                teal: "bg-teal-50 text-teal-600 border-teal-100",
              };
              const bulletColorClasses = {
                orange: "bg-orange-500",
                blue: "bg-blue-500",
                purple: "bg-purple-500",
                green: "bg-green-500",
                indigo: "bg-indigo-500",
                teal: "bg-teal-500",
              };

              return (
                <div key={index} id={`use-case-${index + 1}`} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md hover:border-gray-300 transition-all duration-200 scroll-mt-24 flex flex-col h-full">
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-start gap-4 mb-3">
                      <div className={`p-2.5 rounded-lg ${colorClasses[color as keyof typeof colorClasses]} border flex-shrink-0`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h2 className="text-xl font-bold text-gray-900 flex-1">
                        {useCase.title}
                      </h2>
                    </div>
                    <div className="min-h-[72px] md:min-h-[78px]">
                      <p className="text-sm text-gray-600 leading-6 line-clamp-3 clamp-3">
                        {useCase.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    {useCase.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start gap-3">
                        <span className={`mt-[9px] h-2 w-2 shrink-0 rounded-full ${bulletColorClasses[color as keyof typeof bulletColorClasses]}`} />
                        <p className="text-sm leading-6 text-slate-700">{detail}</p>
                      </div>
                    ))}
                    {index === 0 && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <p className="text-sm text-gray-600">
                          {language === 'ja' ? (
                            <>継続率分析の詳細は<Link href={getLocalizedPath('/membership-retention', language)} className="text-[#214BCE] hover:text-[#6C2BD9] font-medium underline underline-offset-2">メンバーシップ継続率分析</Link>、統合ダッシュボードについては<Link href={getLocalizedPath('/community-analytics-dashboard', language)} className="text-[#214BCE] hover:text-[#6C2BD9] font-medium underline underline-offset-2">コミュニティ分析ダッシュボード</Link>をご覧ください。</>
                          ) : (
                            <>For retention analysis details, see our <Link href={getLocalizedPath('/membership-retention', language)} className="text-[#214BCE] hover:text-[#6C2BD9] font-medium underline underline-offset-2">Membership Retention Analysis</Link> page. For unified dashboard features, see our <Link href={getLocalizedPath('/community-analytics-dashboard', language)} className="text-[#214BCE] hover:text-[#6C2BD9] font-medium underline underline-offset-2">Community Analytics Dashboard</Link> page.</>
                          )}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 md:py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-4xl">
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              {pageT.footerCta}{' '}
              <Link href={getLocalizedPath('/#pricing', language)} className="text-[#214BCE] hover:text-[#6C2BD9] font-medium underline underline-offset-2">
                {pageT.footerCtaLink}
              </Link>
              {' '}{pageT.footerCtaSuffix}
            </p>
          </div>
          <NextPageLink href="/features" label={language === 'ja' ? 'Features を見る →' : 'View Features →'} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
