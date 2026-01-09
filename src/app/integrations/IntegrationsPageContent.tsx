'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PageNavigation } from '@/components/PageNavigation';
import { TableOfContents } from '@/components/TableOfContents';
import { NextPageLink } from '@/components/NextPageLink';
import { MessageSquare, CreditCard, Youtube, Instagram, Shield, Zap } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { getLocalizedPath } from '@/lib/url';

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
            ]}
          />
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

              return (
                <div key={index} id={integration.name.toLowerCase()} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md hover:border-gray-300 transition-all duration-200 scroll-mt-24">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-2.5 rounded-lg ${colorClasses[color as keyof typeof colorClasses]} border flex-shrink-0`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-gray-900 mb-2">
                        {integration.name}{language === 'ja' ? '連携' : ' Integration'}
                      </h2>
                      <p className="text-sm text-gray-600 leading-relaxed mb-3">
                        {integration.description}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-2.5">
                    {integration.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-2.5">
                        <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${color === 'blue' ? 'bg-blue-500' : color === 'red' ? 'bg-red-500' : color === 'indigo' ? 'bg-indigo-500' : color === 'pink' ? 'bg-pink-500' : 'bg-yellow-500'}`} />
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
