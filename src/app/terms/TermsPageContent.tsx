'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PageNavigation } from '@/components/PageNavigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail } from 'lucide-react';

export function TermsPageContent() {
  const { t, language } = useLanguage();
  const pageT = t.pages.terms;

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
          <p className="text-lg text-gray-600 leading-relaxed mb-2">
            {pageT.description}
          </p>
          <p className="text-sm text-gray-500 mb-6">
            {pageT.lastUpdated}
          </p>
        </div>
      </div>

      {/* Terms Sections */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-4xl">
          <div className="space-y-6">
            {pageT.sections.map((section, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 hover:shadow-md transition-shadow">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  {section.title}
                </h2>
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>
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
                ? '本規約に関するご質問は、お気軽にお問い合わせください。'
                : 'If you have any questions about these Terms, please feel free to contact us.'}
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
