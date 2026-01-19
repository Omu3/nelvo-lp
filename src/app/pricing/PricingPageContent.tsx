'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PageNavigation } from '@/components/PageNavigation';
import { TableOfContents } from '@/components/TableOfContents';
import { NextPageLink } from '@/components/NextPageLink';
import { useLanguage } from '@/contexts/LanguageContext';
import { Check, X, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { useState } from 'react';
import { getLocalizedPath } from '@/lib/url';
import { trackEvent } from '@/lib/ga';

export function PricingPageContent() {
  const { t, language } = useLanguage();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const formUrl = language === 'ja'
    ? 'https://forms.gle/nwGEboEsGpD84R2u8'
    : 'https://forms.gle/SHyrFNxLrGZM1piU7';

  const pageT = t.pages.pricing;
  const pricingSections = [
    {
      ...pageT.plans.basic,
      price: t.pricing.plans.basic.price,
      period: t.pricing.plans.basic.period,
      badge: undefined as string | undefined,
    },
    {
      ...pageT.plans.pro,
      price: t.pricing.plans.pro.price,
      period: t.pricing.plans.pro.period,
    },
  ];

  return (
    <main className="min-h-screen bg-white selection:bg-purple-100 selection:text-purple-900" data-language={language}>
      <Header />
      
      {/* Page Header */}
      <div className="pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-4xl">
          <PageNavigation />
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
            {language === 'ja' ? 'NELVO 料金プラン｜Basic・Proの価格と機能比較、選び方' : pageT.title}
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            {language === 'ja' 
              ? 'NELVOは2つの料金プラン（Basic 月額¥2,980・Pro 月額¥6,980）を提供しています。Discord/Stripe/YouTube/Instagramの運営データを統合し、MRR・継続率・解約率を運営ダッシュボードで可視化します。プラン変更・解約はいつでも可能です。'
              : pageT.description
            }
          </p>
          <TableOfContents
            items={[
              { label: language === 'ja' ? '料金プラン（Basic/Pro）' : pageT.plans.basic.title, href: '#pricing-plans' },
              { label: pageT.comparison.title, href: '#comparison' },
              ...(pageT.planSelection ? [{ label: pageT.planSelection.title, href: '#plan-selection' }] : []),
              ...pageT.otherSections.map((section, i) => {
                const sectionId = i === 0 ? 'plan-change' : i === 1 ? 'supported-platforms' : `section-${i + 1}`;
                return { label: section.title, href: `#${sectionId}` };
              }),
              { label: language === 'ja' ? 'よくある質問' : 'FAQ', href: '#faq' },
            ]}
          />
        </div>
      </div>

      {/* Pricing Plans */}
      <section id="pricing-plans" className="py-8 md:py-12 bg-white scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            {language === 'ja' ? '料金プラン（Basic/Pro）' : 'Pricing Plans'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pricingSections.map((plan, index) => {
              const planId = index === 0 ? 'basic-plan' : 'pro-plan';
              return (
                <div key={index} id={planId} className={`bg-white rounded-xl border p-6 hover:shadow-md hover:border-gray-300 transition-all duration-200 relative scroll-mt-24 ${plan.badge ? 'border-blue-200 shadow-sm' : 'border-gray-200'}`}>
                  {plan.badge && (
                    <div className="absolute -top-3 right-6 px-4 py-1.5 bg-[#214BCE] text-white text-xs font-bold rounded-lg shadow-sm">
                      {plan.badge}
                    </div>
                  )}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.title}
                    </h3>
                    <div className="flex items-baseline gap-1 mb-4">
                      <span className="text-4xl font-extrabold tracking-tight text-gray-900">{plan.price}</span>
                      <span className="text-base text-gray-500 font-medium">{plan.period}</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                      {plan.description}
                    </p>
                  </div>

                  <a
                    href={formUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      trackEvent('cta_click', {
                        cta_text: t.pricing.plans[plan.badge ? 'pro' : 'basic'].cta,
                        cta_location: plan.badge ? 'pricing_page_pro' : 'pricing_page_basic',
                        destination_url: formUrl,
                      });
                    }}
                    className={`block text-center w-full py-3 rounded-full font-medium transition-colors mb-6 ${
                      plan.badge
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'border border-gray-200 text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    {t.pricing.plans[plan.badge ? 'pro' : 'basic'].cta}
                  </a>

                  <ul className="space-y-2.5">
                    {plan.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-2.5">
                        <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${plan.badge ? 'bg-blue-500' : 'bg-gray-400'}`} />
                        <span className="text-sm text-gray-600 leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              {t.pricing.note}
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="comparison" className="py-8 md:py-12 bg-gray-50 scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            {language === 'ja' ? 'プラン比較（機能一覧）' : pageT.comparison.title}
          </h2>
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">{language === 'ja' ? '機能' : 'Feature'}</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Basic</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Pro</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {pageT.comparison.features.map((feature, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 text-sm text-gray-600">{feature.name}</td>
                      <td className="px-6 py-4 text-center">
                        {typeof feature.basic === 'boolean' ? (
                          feature.basic ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-gray-300 mx-auto" />
                        ) : (
                          <span className="text-sm text-gray-900">{feature.basic}</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {typeof feature.pro === 'boolean' ? (
                          feature.pro ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-gray-300 mx-auto" />
                        ) : (
                          <span className="text-sm text-gray-900">{feature.pro}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Plan Selection Section */}
      {pageT.planSelection && (
        <section id="plan-selection" className="py-8 md:py-12 bg-white scroll-mt-24">
          <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              {pageT.planSelection.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {pageT.planSelection.basic.title}
                </h3>
                <ul className="space-y-2.5">
                  {pageT.planSelection.basic.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-blue-50 rounded-xl border border-blue-200 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {pageT.planSelection.pro.title}
                </h3>
                <ul className="space-y-2.5">
                  {pageT.planSelection.pro.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Other Sections */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-4xl">
          <div className="space-y-8">
            {pageT.otherSections.map((section, index) => {
              const sectionId = index === 0 ? 'plan-change' : index === 1 ? 'supported-platforms' : `section-${index + 1}`;
              return (
              <div key={index} id={sectionId} className="bg-white rounded-xl border border-gray-200 p-6 scroll-mt-24">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  {section.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {section.description}
                  {index === 0 && (
                    <>
                      {' '}{language === 'ja' ? (
                        <>StripeのMRR追跡については、<Link href={getLocalizedPath('/stripe-mrr-dashboard', language)} className="text-[#214BCE] hover:text-[#6C2BD9] font-medium underline underline-offset-2">Stripe MRRダッシュボード</Link>のページをご覧ください。料金プランの詳細比較は<Link href={getLocalizedPath('/compare', language)} className="text-[#214BCE] hover:text-[#6C2BD9] font-medium underline underline-offset-2">競合比較ページ</Link>を参照してください。</>
                      ) : (
                        <> For Stripe MRR tracking, see our <Link href={getLocalizedPath('/stripe-mrr-dashboard', language)} className="text-[#214BCE] hover:text-[#6C2BD9] font-medium underline underline-offset-2">Stripe MRR Dashboard</Link> page. For detailed pricing plan comparisons, see our <Link href={getLocalizedPath('/compare', language)} className="text-[#214BCE] hover:text-[#6C2BD9] font-medium underline underline-offset-2">comparison page</Link>.</>
                      )}
                    </>
                  )}
                </p>
                <ul className="space-y-2.5">
                  {section.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600 leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-8 md:py-12 bg-gray-50 scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            {language === 'ja' ? 'よくある質問（料金/請求/解約/データ/セキュリティ）' : t.faq.title}
          </h2>
          <div className="space-y-3">
            {t.faq.items.map((item: any, index: number) => (
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

      {/* Footer CTA */}
      <section className="py-12 md:py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-4xl">
          <div className="text-center">
            <p className="text-gray-600 mb-6">
              {pageT.footerCta}
            </p>
            <Button
              variant="primary"
              size="lg"
              onClick={() => window.open(formUrl, '_blank')}
              className="inline-flex items-center"
            >
              {pageT.footerCtaButton}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link href={getLocalizedPath('/features', language)} className="text-[#214BCE] hover:text-[#6C2BD9] font-medium underline underline-offset-2">
              {language === 'ja' ? '機能一覧を見る（Features）' : 'View Features →'}
            </Link>
            <span className="text-gray-300">|</span>
            <Link href={getLocalizedPath('/integrations', language)} className="text-[#214BCE] hover:text-[#6C2BD9] font-medium underline underline-offset-2">
              {language === 'ja' ? '対応プラットフォームを見る' : 'View Integrations →'}
            </Link>
            <span className="text-gray-300">|</span>
            <Link href={getLocalizedPath('/use-cases', language)} className="text-[#214BCE] hover:text-[#6C2BD9] font-medium underline underline-offset-2">
              {language === 'ja' ? 'Use Cases を見る' : 'View Use Cases →'}
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      {/* Structured Data - FAQ JSON-LD */}
      {language === 'ja' && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": t.faq.items.map((item: any) => ({
                "@type": "Question",
                "name": item.q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": item.a
                }
              }))
            })
          }}
        />
      )}

      {language === 'en' && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": t.faq.items.map((item: any) => ({
                "@type": "Question",
                "name": item.q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": item.a
                }
              }))
            })
          }}
        />
      )}

      {/* Structured Data - SoftwareApplication JSON-LD */}
      {language === 'ja' && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "NELVO",
              "applicationCategory": "BusinessApplication",
              "description": "Discord/Stripe/YouTube/Instagramの運営データを統合し、MRR・継続率・解約率を運営ダッシュボードで可視化するコミュニティ運営ダッシュボード",
              "url": "https://nelvo.co/pricing",
              "brand": {
                "@type": "Brand",
                "name": "NELVO"
              },
              "offers": [
                {
                  "@type": "Offer",
                  "name": "Basicプラン",
                  "price": 2980,
                  "priceCurrency": "JPY",
                  "billingDuration": "P1M",
                  "description": "最大3サービスまで連携可能なエントリープラン"
                },
                {
                  "@type": "Offer",
                  "name": "Proプラン",
                  "price": 6980,
                  "priceCurrency": "JPY",
                  "billingDuration": "P1M",
                  "description": "最大7サービスまで連携可能で高度な分析機能を利用できるプラン"
                }
              ]
            })
          }}
        />
      )}

      {language === 'en' && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "NELVO",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "description": "Unified dashboard for community operations across Discord, Stripe, YouTube, and Instagram.",
              "url": "https://nelvo.co/en/pricing",
              "brand": {
                "@type": "Brand",
                "name": "NELVO"
              },
              "offers": [
                {
                  "@type": "Offer",
                  "name": "Basic Plan",
                  "price": "15",
                  "priceCurrency": "USD",
                  "url": "https://nelvo.co/en/pricing#basic-plan",
                  "priceSpecification": {
                    "@type": "UnitPriceSpecification",
                    "price": "15",
                    "priceCurrency": "USD",
                    "unitText": "MONTH"
                  }
                },
                {
                  "@type": "Offer",
                  "name": "Pro Plan",
                  "price": "49",
                  "priceCurrency": "USD",
                  "url": "https://nelvo.co/en/pricing#pro-plan",
                  "priceSpecification": {
                    "@type": "UnitPriceSpecification",
                    "price": "49",
                    "priceCurrency": "USD",
                    "unitText": "MONTH"
                  }
                }
              ]
            })
          }}
        />
      )}
    </main>
  );
}
