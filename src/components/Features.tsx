'use client';

import { Reveal } from '@/components/ui/Reveal';
import { Database, Users, Sun, TrendingUp } from 'lucide-react';

import { useLanguage } from '@/contexts/LanguageContext';

export function Features() {
    const { t } = useLanguage();
    const features = [
        {
            icon: Database,
            title: t.features.items[0].title,
            desc: t.features.items[0].desc,
            ui: (
                <div className="w-full h-full p-4 flex items-center justify-center gap-2">
                    <div className="flex flex-col gap-2">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-[10px] font-bold text-blue-600">D</div>
                        <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-[10px] font-bold text-red-600">P</div>
                        <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-[10px] font-bold text-indigo-600">S</div>
                    </div>
                    <div className="text-gray-300">→</div>
                    <div className="w-20 h-24 bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col p-2 gap-1">
                        <div className="w-full h-2 bg-gray-100 rounded-full" />
                        <div className="w-2/3 h-2 bg-gray-100 rounded-full" />
                        <div className="w-full h-8 bg-blue-50 rounded mt-auto" />
                    </div>
                </div>
            )
        },
        {
            icon: Users,
            title: t.features.items[1].title,
            desc: t.features.items[1].desc,
            ui: (
                <div className="w-full h-full p-4 flex items-center justify-center gap-2">
                    <div className="w-16 h-20 bg-white border border-gray-200 rounded-lg shadow-sm p-2 flex flex-col items-center justify-center gap-1">
                        <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-bold">A</div>
                        <div className="w-10 h-1.5 bg-gray-100 rounded-full" />
                    </div>
                    <div className="w-16 h-20 bg-white border border-gray-200 rounded-lg shadow-sm p-2 flex flex-col items-center justify-center gap-1 opacity-50">
                        <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs font-bold">C</div>
                        <div className="w-10 h-1.5 bg-gray-100 rounded-full" />
                    </div>
                </div>
            )
        },
        {
            icon: Sun,
            title: t.features.items[2].title,
            desc: t.features.items[2].desc,
            ui: (
                <div className="w-full h-full p-4 flex items-center justify-center">
                    <div className="w-48 h-24 bg-white border border-gray-200 rounded-lg shadow-sm p-3 flex flex-col gap-2">
                        <div className="flex justify-between items-center">
                            <div className="w-16 h-2 bg-gray-100 rounded-full" />
                            <div className="w-8 h-4 bg-green-50 text-green-600 text-[10px] rounded flex items-center justify-center font-bold">+12%</div>
                        </div>
                        <div className="flex gap-2 mt-auto">
                            <div className="w-8 h-8 rounded bg-blue-50" />
                            <div className="w-8 h-8 rounded bg-gray-50" />
                            <div className="w-8 h-8 rounded bg-gray-50" />
                        </div>
                    </div>
                </div>
            )
        },
        {
            icon: TrendingUp,
            title: t.features.items[3].title,
            desc: t.features.items[3].desc,
            ui: (
                <div className="w-full h-full p-4 flex items-end justify-center pb-6 px-6">
                    <div className="w-full h-24 border-l border-b border-gray-200 relative">
                        <svg className="absolute inset-0 w-full h-full overflow-visible">
                            <path d="M0,80 C20,70 40,60 60,65 C80,70 100,30 120,20" fill="none" stroke="#214BCE" strokeWidth="2" />
                        </svg>
                        <div className="absolute top-4 right-0 w-2 h-2 bg-blue-500 rounded-full" />
                    </div>
                </div>
            )
        },
    ];

    return (
        <section id="features" className="py-20 md:py-32 bg-gray-50 border-t border-gray-100">
            <div className="container mx-auto px-6 md:px-12">
                <div className="mb-16 md:mb-24">
                    <Reveal variant="fade-up">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">{t.features.title}</h2>
                        <div className="w-24 h-px bg-[#214BCE]" />
                    </Reveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {features.map((feature, index) => (
                        <Reveal key={index} delay={index * 100} width="100%" className="h-full" variant="scale-in">
                            <div className="group bg-white rounded-2xl border border-gray-100 p-1 overflow-hidden hover:shadow-lg hover:border-blue-200 hover:-translate-y-0.5 transition-all duration-300 h-full">
                                {/* Mini UI Area */}
                                <div className="h-48 bg-gray-50/50 rounded-xl mb-6 overflow-hidden relative group-hover:bg-blue-50/30 transition-colors flex items-center justify-center">
                                    {feature.ui}
                                </div>

                                {/* Content */}
                                <div className="px-6 pb-8">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 rounded-lg bg-blue-50 text-[#214BCE]">
                                            <feature.icon className="w-5 h-5" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900">
                                            {feature.title}
                                        </h3>
                                    </div>
                                    <p className="text-gray-500 leading-relaxed text-sm">
                                        {feature.desc}
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
