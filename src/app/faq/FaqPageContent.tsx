'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PageNavigation } from '@/components/PageNavigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronDown, Mail } from 'lucide-react';
import { useState } from 'react';

export function FaqPageContent() {
  const { t, language } = useLanguage();
  const pageT = t.pages.faq;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
          <p className="text-lg text-gray-600 leading-relaxed">
            {pageT.description}
          </p>
        </div>
      </div>

      {/* FAQ Items */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-4xl">
          <div className="space-y-4">
            {pageT.items.map((item, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                <button
                  className="flex justify-between items-center w-full px-6 py-4 text-left font-medium text-gray-900 hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="pr-4">{item.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 text-gray-500 transform transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4 text-gray-600 leading-relaxed whitespace-pre-line">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-16 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-4xl">
          <div className="text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              {pageT.contactLabel}
            </h2>
            <p className="text-gray-600 mb-4">
              {language === 'ja' 
                ? 'ご不明な点やご質問がございましたら、お気軽にお問い合わせください。'
                : 'If you have any questions or concerns, please feel free to contact us.'}
            </p>
            <a
              href={`mailto:${pageT.contactEmail}`}
              className="inline-flex items-center gap-2 text-[#214BCE] hover:text-[#6C2BD9] font-medium transition-colors"
            >
              <Mail className="w-5 h-5" />
              {pageT.contactEmail}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
