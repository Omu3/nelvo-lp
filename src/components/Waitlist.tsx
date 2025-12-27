'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Check } from 'lucide-react';

export function Waitlist() {
    const { t } = useLanguage();
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <section id="waitlist" className="py-24 bg-white border-t border-gray-100 text-center">
                <div className="container mx-auto px-6">
                    <div className="max-w-md mx-auto bg-green-50 border border-green-200 p-8 rounded-2xl">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Check className="w-6 h-6 text-green-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{t.waitlist.form.success}</h3>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="waitlist" className="py-24 bg-white border-t border-gray-100">
            <div className="container mx-auto px-6">
                <div className="max-w-xl mx-auto text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
                        {t.waitlist.title}
                    </h2>
                    <p className="text-gray-500 text-lg">
                        {t.waitlist.desc}
                    </p>
                </div>

                <div className="max-w-md mx-auto bg-gray-50 border border-gray-200 rounded-2xl p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                {t.waitlist.form.email}
                            </label>
                            <input
                                type="email"
                                id="email"
                                required
                                placeholder={t.waitlist.form.emailPlaceholder}
                                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                {t.waitlist.form.plan}
                            </label>
                            <div className="grid grid-cols-2 gap-3">
                                <label className="flex items-center justify-center gap-2 p-3 bg-white border border-gray-200 rounded-lg cursor-pointer hover:border-gray-400 transition-colors">
                                    <input type="radio" name="plan" value="basic" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" defaultChecked />
                                    <span className="text-sm text-gray-700">{t.pricing.plans.basic.name}</span>
                                </label>
                                <label className="flex items-center justify-center gap-2 p-3 bg-white border border-gray-200 rounded-lg cursor-pointer hover:border-gray-400 transition-colors">
                                    <input type="radio" name="plan" value="pro" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" />
                                    <span className="text-sm text-gray-700">{t.pricing.plans.pro.name}</span>
                                </label>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                {t.waitlist.form.platforms}
                            </label>
                            <div className="space-y-2">
                                {['discord', 'patreon', 'stripe', 'skool', 'other'].map((platform) => (
                                    <label key={platform} className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                                        <input type="checkbox" name="platform" value={platform} className="w-4 h-4 rounded border-gray-300 bg-white text-blue-600 focus:ring-offset-white" />
                                        <span className="text-sm text-gray-700">
                                            {t.waitlist.platforms[platform as keyof typeof t.waitlist.platforms]}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gray-900 text-white font-bold py-3.5 rounded-full hover:bg-gray-800 transition-colors mt-4"
                        >
                            {t.waitlist.form.submit}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
