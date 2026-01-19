'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PageNavigation } from '@/components/PageNavigation';
import { TableOfContents } from '@/components/TableOfContents';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { getLocalizedPath } from '@/lib/url';
import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import Script from 'next/script';

export function MembershipRetentionPageContent() {
  const { t, language } = useLanguage();
  const pageT = t.pages.membershipRetention;
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const formUrl = language === 'ja'
    ? 'https://forms.gle/nwGEboEsGpD84R2u8'
    : 'https://forms.gle/SHyrFNxLrGZM1piU7';

  const tocItems = [
    ...pageT.sections.map((section, index) => ({
      label: section.title,
      href: `#section-${index + 1}`,
    })),
    { label: pageT.faq.title, href: '#faq' },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": pageT.faq.items.map((item: any) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a,
      },
    })),
  };

  return (
    <>
      <Script
        id="faq-schema-membership-retention"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <main className="min-h-screen bg-white selection:bg-purple-100 selection:text-purple-900" data-language={language}>
        <Header />
        
        <div className="pt-24 pb-12 md:pt-32 md:pb-16">
          <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-4xl">
            <PageNavigation />
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
              {pageT.h1Title}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              {pageT.description}
            </p>
            <TableOfContents items={tocItems} />
          </div>
        </div>

        {pageT.sections.map((section, index) => (
          <section key={index} id={`section-${index + 1}`} className="py-8 md:py-12 bg-white scroll-mt-24">
            <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-4xl">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {section.title}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {section.content}
              </p>
              <ul className="space-y-3">
                {section.details.map((detail: string, detailIndex: number) => (
                  <li key={detailIndex} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0" />
                    <span className="text-gray-600">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}

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
              <Link href={getLocalizedPath('/stripe-mrr-dashboard', language)} className="text-[#214BCE] hover:text-[#6C2BD9] font-medium underline underline-offset-2">
                {language === 'ja' ? 'MRRダッシュボードを見る →' : 'View MRR Dashboard →'}
              </Link>
              <span className="text-gray-300">|</span>
              <Link href={getLocalizedPath('/community-analytics-dashboard', language)} className="text-[#214BCE] hover:text-[#6C2BD9] font-medium underline underline-offset-2">
                {language === 'ja' ? 'コミュニティ分析ダッシュボードを見る →' : 'View Community Analytics →'}
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
