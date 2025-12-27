'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';

export function FAQ() {
    const { t } = useLanguage();
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-32 bg-white">
            <div className="container mx-auto px-6 max-w-3xl">
                <h2 className="text-3xl font-bold text-center mb-16 tracking-tight text-gray-900">
                    {t.faq.title}
                </h2>
                <div className="space-y-4">
                    {t.faq.items.map((item: any, index: number) => (
                        <div key={index} className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-200 hover:border-gray-300">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                            >
                                <span className="font-medium text-gray-900 pr-8">{item.q}</span>
                                <span className={`flex-shrink-0 transform transition-transform duration-200 text-gray-400 ${openIndex === index ? 'rotate-180' : ''}`}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </button>
                            <div
                                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="p-6 pt-0 text-gray-600 leading-relaxed bg-white">
                                    {item.a}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
