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
            {pageT.title}
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            {pageT.description}
          </p>
          <TableOfContents
            items={[
              { label: pageT.plans.basic.title, href: '#basic-plan' },
              { label: pageT.plans.pro.title, href: '#pro-plan' },
              { label: pageT.comparison.title, href: '#comparison' },
              ...pageT.otherSections.map((section, i) => ({ label: section.title, href: `#section-${i + 1}` })),
              { label: language === 'ja' ? 'よくある質問' : 'FAQ', href: '#faq' },
            ]}
          />
        </div>
      </div>

      {/* Pricing Plans */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-4xl">
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
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.title}
                    </h2>
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
            {pageT.comparison.title}
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

      {/* Other Sections */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-4xl">
          <div className="space-y-8">
            {pageT.otherSections.map((section, index) => (
              <div key={index} id={`section-${index + 1}`} className="bg-gray-50 rounded-xl border border-gray-200 p-6 scroll-mt-24">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  {section.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {section.description}
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
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-8 md:py-12 bg-gray-50 scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            {t.faq.title}
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
          <NextPageLink href="/use-cases" label={language === 'ja' ? 'Use Cases を見る →' : 'View Use Cases →'} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
