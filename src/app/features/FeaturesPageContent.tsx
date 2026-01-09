'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PageNavigation } from '@/components/PageNavigation';
import { TableOfContents } from '@/components/TableOfContents';
import { NextPageLink } from '@/components/NextPageLink';
import { Database, Users, TrendingUp, Sun, CheckCircle2, BarChart3 } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { getLocalizedPath } from '@/lib/url';

const iconMap = {
  'データ統合': Database,
  'Data Integration': Database,
  'メンバー状況の可視化': Users,
  'Member Visualization': Users,
  '収益・成長の把握': TrendingUp,
  'Revenue & Growth Tracking': TrendingUp,
  'Todayビュー': Sun,
  'Today View': Sun,
};

export function FeaturesPageContent() {
  const { t, language } = useLanguage();
  const pageT = t.pages.features;

  const mainFeatures = pageT.mainFeatures.map((feature) => ({
    ...feature,
    icon: iconMap[feature.title as keyof typeof iconMap] || Database,
    color: feature === pageT.mainFeatures[0] ? 'blue' : 
           feature === pageT.mainFeatures[1] ? 'green' :
           feature === pageT.mainFeatures[2] ? 'purple' : 'orange',
  }));

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
              { label: pageT.mainFeatures[0].title, href: '#data-integration' },
              { label: pageT.mainFeatures[1].title, href: '#member-visualization' },
              { label: pageT.mainFeatures[2].title, href: '#revenue-growth' },
              { label: pageT.mainFeatures[3].title, href: '#today-view' },
              { label: pageT.analytics.title, href: '#analytics' },
            ]}
          />
        </div>
      </div>

      {/* Main Features */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mainFeatures.map((feature, index) => {
              const sectionIds = ['data-integration', 'member-visualization', 'revenue-growth', 'today-view'];
              const sectionId = sectionIds[index];
              const Icon = feature.icon;
              const colorClasses = {
                blue: "bg-blue-50 text-blue-600 border-blue-100",
                green: "bg-green-50 text-green-600 border-green-100",
                purple: "bg-purple-50 text-purple-600 border-purple-100",
                orange: "bg-orange-50 text-orange-600 border-orange-100",
              };

              return (
                <div key={index} id={sectionId} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md hover:border-gray-300 transition-all duration-200 scroll-mt-24">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-2.5 rounded-lg ${colorClasses[feature.color as keyof typeof colorClasses]} border flex-shrink-0`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-gray-900 mb-2">
                        {feature.title}
                      </h2>
                      <p className="text-sm text-gray-600 leading-relaxed mb-3">
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-2.5">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-2.5">
                        <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${colorClasses[feature.color as keyof typeof colorClasses].split(' ')[1]}`} />
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

      {/* Additional Features */}
      <section id="analytics" className="py-8 md:py-12 bg-gray-50 scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            {pageT.analytics.title}
          </h2>
          <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md hover:border-gray-300 transition-all duration-200">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-2.5 rounded-lg bg-indigo-50 text-indigo-600 border border-indigo-100 flex-shrink-0">
                <BarChart3 className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="text-gray-600 leading-relaxed mb-4">
                  {pageT.analytics.description}
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {pageT.analytics.description2}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 pt-4 border-t border-gray-100">
              {pageT.analytics.highlights.map((highlight, highlightIndex) => (
                <div key={highlightIndex} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0" />
                  <span className="text-sm text-gray-600">{highlight}</span>
                </div>
              ))}
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
          <NextPageLink href="/integrations" label={language === 'ja' ? 'Integrations を見る →' : 'View Integrations →'} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
