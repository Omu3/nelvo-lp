'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { ShieldCheck, Lock, FileSearch, Server } from 'lucide-react';

export function Security() {
    const { t } = useLanguage();

    const icons = [ShieldCheck, Lock, FileSearch, Server];

    return (
        <section className="py-32 bg-slate-50 border-t border-slate-100">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">
                        {t.security.title}
                    </h2>
                    <p className="text-slate-500 text-lg">
                        {t.security.lead}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {t.security.items.map((item: any, index: number) => {
                        const Icon = icons[index];
                        return (
                            <div key={index} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                                    <Icon size={24} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-slate-500 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
