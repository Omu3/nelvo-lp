'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PageNavigation } from '@/components/PageNavigation';
import { TableOfContents } from '@/components/TableOfContents';
import { NextPageLink } from '@/components/NextPageLink';
import { MessageSquare, CreditCard, Youtube, Instagram, Shield, Zap, Info } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { getLocalizedPath } from '@/lib/url';
import { useState, Fragment } from 'react';

const iconMap = {
  'Discord': MessageSquare,
  'Stripe': CreditCard,
  'YouTube': Youtube,
  'Instagram': Instagram,
};

const colorMap = {
  'Discord': 'blue',
  'Stripe': 'indigo',
  'YouTube': 'red',
  'Instagram': 'pink',
};

export function IntegrationsPageContent() {
  const { t, language } = useLanguage();
  const pageT = t.pages.integrations;
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

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
            items={[
              ...pageT.platforms.map((p, i) => ({ label: `${p.name}${language === 'ja' ? '連携' : ' Integration'}`, href: `#${p.name.toLowerCase()}` })),
              { label: pageT.security.title, href: '#security' },
              { label: pageT.future.title, href: '#future' },
              ...(pageT.faq ? [{ label: pageT.faq.title, href: '#faq' }] : []),
            ]}
          />

          {/* Overview Section */}
          {pageT.overview && (() => {
            // 「取得データ」項目の範囲を特定
            const dataRetrievedIndex = pageT.overview.items.findIndex(
              (item: any) => item.label === "取得データ" || item.label === "Data Retrieved"
            );
            const dataRetrievedEndIndex = dataRetrievedIndex >= 0 
              ? pageT.overview.items.findIndex(
                  (item: any, idx: number) => idx > dataRetrievedIndex && item.label && item.label !== ""
                )
              : -1;
            const dataRetrievedRange = dataRetrievedIndex >= 0 
              ? (dataRetrievedEndIndex >= 0 ? dataRetrievedEndIndex : pageT.overview.items.length)
              : -1;
            
            // 「取得データ」項目の各行をパース
            const dataRetrievedItems = dataRetrievedIndex >= 0
              ? pageT.overview.items.slice(dataRetrievedIndex, dataRetrievedRange).map((item: any) => {
                  const valueParts = item.value.match(/^([^：:]+)[：:](.+)$/);
                  if (valueParts) {
                    return {
                      label: valueParts[1].trim(),
                      content: valueParts[2].trim(),
                      hasMainLabel: item.label === "取得データ" || item.label === "Data Retrieved"
                    };
                  }
                  return null;
                }).filter(Boolean)
              : [];
            
            return (
              <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
                <div className="flex items-start gap-3 mb-3">
                  <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <h2 className="text-lg font-semibold text-gray-900">{pageT.overview.title}</h2>
                </div>
                <dl className="space-y-3">
                  {pageT.overview.items.map((item: any, index: number) => {
                    // 「取得データ」項目の処理
                    if (index === dataRetrievedIndex) {
                      return (
                        <div key={index}>
                          <div className="flex flex-col md:flex-row gap-2 md:gap-4 mb-2">
                            <dt className="text-sm font-medium text-gray-700 md:w-32 flex-shrink-0">
                              {pageT.overview.items[dataRetrievedIndex].label}:
                            </dt>
                            <dd className="text-sm text-gray-600 flex-1">
                              <div className="grid grid-cols-1 md:grid-cols-[96px_1fr] gap-y-2 gap-x-3">
                                {dataRetrievedItems.map((dataItem: any, dataIdx: number) => (
                                  <Fragment key={dataIdx}>
                                    <div className="text-sm font-medium text-slate-700 whitespace-nowrap">
                                      {dataItem.label}:
                                    </div>
                                    <div className="text-sm text-slate-700">
                                      {dataItem.content}
                                    </div>
                                  </Fragment>
                                ))}
                              </div>
                            </dd>
                          </div>
                        </div>
                      );
                    }
                    
                    // 「取得データ」項目の範囲外の場合のみ通常処理
                    if (dataRetrievedIndex >= 0 && index > dataRetrievedIndex && index < dataRetrievedRange) {
                      return null; // 取得データ項目の続きは上で処理済みなのでスキップ
                    }
                    
                    // 通常の項目
                    return (
                      <div key={index} className="flex flex-col md:flex-row gap-2 md:gap-4">
                        {item.label && (
                          <dt className="text-sm font-medium text-gray-700 md:w-32 flex-shrink-0">{item.label}:</dt>
                        )}
                        <dd className={`text-sm text-gray-600 ${item.label ? 'flex-1' : 'flex-1'}`}>{item.value}</dd>
                      </div>
                    );
                  })}
                </dl>
              </div>
            );
          })()}
        </div>
      </div>

      {/* Integrations Grid */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pageT.platforms.map((integration, index) => {
              const Icon = iconMap[integration.name as keyof typeof iconMap] || MessageSquare;
              const color = colorMap[integration.name as keyof typeof colorMap] || 'blue';
              const colorClasses = {
                blue: "bg-blue-50 text-blue-600 border-blue-100",
                red: "bg-red-50 text-red-600 border-red-100",
                indigo: "bg-indigo-50 text-indigo-600 border-indigo-100",
                yellow: "bg-yellow-50 text-yellow-600 border-yellow-100",
                pink: "bg-pink-50 text-pink-600 border-pink-100",
              };

              const bulletColorClasses = {
                blue: "bg-blue-500",
                red: "bg-red-500",
                indigo: "bg-indigo-500",
                pink: "bg-pink-500",
                yellow: "bg-yellow-500",
              };

              // 描画前に空要素を完全に除去
              const cleanedDetails = (integration.details ?? []).filter((d): d is string => {
                if (d == null || typeof d !== "string") return false;
                // 全角/半角スペースのみを空として扱う
                return d.replace(/\s+/g, "").length > 0;
              });

              return (
                <div key={index} id={integration.name.toLowerCase()} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md hover:border-gray-300 transition-all duration-200 scroll-mt-24 flex flex-col h-full">
                  <div className="flex flex-col">
                    <div className="flex items-start gap-4 mb-3">
                      <div className={`p-2.5 rounded-lg ${colorClasses[color as keyof typeof colorClasses]} border flex-shrink-0`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h2 className="text-xl font-bold text-gray-900 flex-1">
                        {integration.name}{language === 'ja' ? '連携' : ' Integration'}
                      </h2>
                    </div>
                    <div className="min-h-[52px]">
                      <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 clamp-2">
                        {integration.description}
                      </p>
                    </div>
                  </div>

                  {cleanedDetails.length > 0 && (
                    <ul className="mt-4 space-y-1.5 list-none p-0 m-0">
                      {cleanedDetails.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 my-0">
                          <span className={`mt-[9px] h-2 w-2 shrink-0 rounded-full ${bulletColorClasses[color as keyof typeof bulletColorClasses]}`} />
                          <p className="text-sm leading-5 text-slate-700 m-0">{detail}</p>
                        </li>
                      ))}
                    </ul>
                  )}
                  {integration.name === 'Discord' && (
                    <div className="mt-4 pt-4 border-t border-gray-200 relative z-10">
                      <p className="text-sm text-gray-600">
                        {language === 'ja' ? (
                          <>Discord分析の詳細は<Link href={getLocalizedPath('/discord-analytics', language)} className="text-[#214BCE] hover:text-[#6C2BD9] font-medium underline underline-offset-2 relative z-10">Discord分析ツール</Link>のページをご覧ください。</>
                        ) : (
                          <>For Discord analytics details, see our <Link href={getLocalizedPath('/discord-analytics', language)} className="text-[#214BCE] hover:text-[#6C2BD9] font-medium underline underline-offset-2 relative z-10">Discord Analytics Tool</Link> page.</>
                        )}
                      </p>
                    </div>
                  )}
                  {integration.name === 'YouTube' && (
                    <div className="mt-4 pt-4 border-t border-gray-200 relative z-10">
                      <p className="text-sm text-gray-600">
                        {language === 'ja' ? (
                          <>YouTubeクリエイター向け分析の詳細は<Link href={getLocalizedPath('/youtube-analytics-for-creators', language)} className="text-[#214BCE] hover:text-[#6C2BD9] font-medium underline underline-offset-2 relative z-10">YouTubeクリエイター向け分析</Link>のページをご覧ください。</>
                        ) : (
                          <>For YouTube creator analytics details, see our <Link href={getLocalizedPath('/youtube-analytics-for-creators', language)} className="text-[#214BCE] hover:text-[#6C2BD9] font-medium underline underline-offset-2 relative z-10">YouTube Analytics for Creators</Link> page.</>
                        )}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Security & Future */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-4xl">
          <div className="space-y-6">
            <div id="security" className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md hover:border-gray-300 transition-all duration-200 scroll-mt-24">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2.5 rounded-lg bg-gray-50 text-gray-600 border border-gray-100 flex-shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-gray-900 mb-3">
                    {pageT.security.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {pageT.security.description}
                  </p>
                </div>
              </div>

              <ul className="space-y-2.5">
                {pageT.security.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                    <span className="text-sm text-gray-600 leading-relaxed">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div id="future" className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md hover:border-gray-300 transition-all duration-200 scroll-mt-24">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2.5 rounded-lg bg-gray-50 text-gray-600 border border-gray-100 flex-shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-gray-900 mb-3">
                    {pageT.future.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {pageT.future.description}
                  </p>
                </div>
              </div>

              <ul className="space-y-2.5">
                {pageT.future.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                    <span className="text-sm text-gray-600 leading-relaxed">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {pageT.faq && pageT.faq.items && pageT.faq.items.length > 0 && (
        <section id="faq" className="py-8 md:py-12 bg-white border-t border-gray-100 scroll-mt-24">
          <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              {pageT.faq.title}
            </h2>
            <div className="space-y-3">
              {pageT.faq.items.map((item: any, index: number) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-gray-300 transition-all duration-200">
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium text-gray-900 pr-8">{item.q}</span>
                    <span className={`flex-shrink-0 transform transition-transform duration-200 text-gray-400 ${openFaqIndex === index ? 'rotate-180' : ''}`}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      openFaqIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="p-5 pt-0 text-gray-600 leading-relaxed bg-white">
                      {item.a}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

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
          <NextPageLink href="/pricing" label={language === 'ja' ? 'Pricing を見る →' : 'View Pricing →'} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
