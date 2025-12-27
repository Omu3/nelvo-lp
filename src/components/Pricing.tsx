'use client';

import { Reveal } from '@/components/ui/Reveal';
import { Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function Pricing() {
    const { t, language } = useLanguage();
    // ... formUrl ...
    const formUrl = language === 'ja'
        ? 'https://forms.gle/nwGEboEsGpD84R2u8'
        : 'https://forms.gle/SHyrFNxLrGZM1piU7';

    return (
        <section id="pricing" className="py-32 bg-white text-gray-900 border-t border-gray-100">
            <div className="w-full mb-16 md:mb-24">
                <div className="flex flex-col items-center text-center w-full">
                    <Reveal variant="fade-up">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4 md:mb-6">{t.pricing.title}</h2>
                        <p className="text-gray-500 text-base md:text-lg">
                            {t.pricing.desc}
                        </p>
                    </Reveal>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto items-stretch">
                    {/* Basic Plan */}
                    <Reveal width="100%" className="h-full" variant="scale-in">
                        <div className="p-8 rounded-2xl border border-gray-200 bg-white hover:shadow-lg hover:border-blue-200 hover:-translate-y-0.5 transition-all duration-300 relative group flex flex-col shadow-sm h-full">
                            <div className="mb-8">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-2 h-2 rounded-full bg-gray-400" />
                                    <h3 className="text-xl font-bold text-gray-900">{t.pricing.plans.basic.name}</h3>
                                </div>
                                <div className="flex items-baseline gap-1 mb-6">
                                    <span className="text-5xl font-extrabold tracking-tight text-gray-900">{t.pricing.plans.basic.price}</span>
                                    <span className="text-lg text-gray-500 font-medium transition-colors duration-300">{t.pricing.plans.basic.period}</span>
                                </div>
                                <p className="text-gray-500 text-sm leading-relaxed min-h-[72px]">
                                    {t.pricing.plans.basic.desc}
                                </p>
                            </div>

                            <div>
                                <a
                                    href={formUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-center w-full py-3 rounded-full border border-gray-200 font-medium text-gray-900 hover:bg-gray-50 transition-colors mb-8"
                                >
                                    {t.pricing.plans.basic.cta}
                                </a>

                                <ul className="space-y-4">
                                    {t.pricing.plans.basic.features.map((item: string, i: number) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                                            <Check className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </Reveal>

                    {/* Pro Plan */}
                    <Reveal delay={100} width="100%" className="h-full" variant="scale-in">
                        <div className="p-8 rounded-2xl border border-blue-100 bg-white shadow-md relative group flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 h-full">
                            <div className="absolute -top-3 right-6 px-5 py-2 bg-[#214BCE] text-white text-xs font-extrabold rounded-lg shadow-md border border-blue-700 z-10">
                                {t.pricing.plans.pro.badge}
                            </div>
                            <div className="absolute top-0 left-0 w-full h-1 bg-blue-500 rounded-t-2xl" />

                            <div className="mb-8">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                                    <h3 className="text-xl font-bold text-gray-900">{t.pricing.plans.pro.name}</h3>
                                </div>
                                <div className="flex items-baseline gap-1 mb-6">
                                    <span className="text-5xl font-extrabold tracking-tight text-gray-900">{t.pricing.plans.pro.price}</span>
                                    <span className="text-lg text-gray-500 font-medium transition-colors duration-300">{t.pricing.plans.pro.period}</span>
                                </div>
                                <p className="text-gray-500 text-sm leading-relaxed min-h-[72px]">
                                    {t.pricing.plans.pro.desc}
                                </p>
                            </div>

                            <div>
                                <a
                                    href={formUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-center w-full py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors mb-8 shadow-sm"
                                >
                                    {t.pricing.plans.pro.cta}
                                </a>

                                <ul className="space-y-4">
                                    {t.pricing.plans.pro.features.map((item: string, i: number) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                                            <Check className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </Reveal>
                </div>

                <div className="mt-12 text-center">
                    <p className="text-gray-500 text-sm">
                        {t.pricing.note}
                    </p>
                </div>
            </div>
        </section>
    );
}
