'use client';

import { Reveal } from '@/components/ui/Reveal';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

export function HowItWorks() {
    const { t } = useLanguage();
    const steps = [
        {
            num: "01",
            title: t.howItWorks.steps[0].title,
            desc: t.howItWorks.steps[0].desc,
            ui: (
                <div className="w-full h-full flex items-center justify-center">
                    <div className="w-full h-full bg-white flex flex-col gap-3 justify-center px-8">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-white border border-gray-100 rounded-full flex items-center justify-center overflow-hidden relative shadow-sm transition-all duration-300 hover:scale-[1.03] hover:opacity-100 opacity-85">
                                    <Image
                                        src="/brands/discord.png"
                                        alt="Discord"
                                        width={24}
                                        height={24}
                                        className="object-contain p-0.5"
                                    />
                                </div>
                                <div className="text-sm font-bold text-gray-700">Discord</div>
                            </div>
                            <div className="w-10 h-5 bg-green-500 rounded-full relative">
                                <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow-sm" />
                            </div>
                        </div>
                        <div className="flex items-center justify-between opacity-50 hover:opacity-100 transition-opacity">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-white border border-gray-100 rounded-full flex items-center justify-center overflow-hidden relative shadow-sm transition-all duration-300 hover:scale-[1.03] hover:opacity-100 opacity-85">
                                    <Image
                                        src="/brands/stripe.png"
                                        alt="Stripe"
                                        width={24}
                                        height={24}
                                        className="object-contain p-0.5"
                                    />
                                </div>
                                <div className="text-sm font-bold text-gray-700">Stripe</div>
                            </div>
                            <div className="w-10 h-5 bg-gray-200 rounded-full relative">
                                <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow-sm" />
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            num: "02",
            title: t.howItWorks.steps[1].title,
            desc: t.howItWorks.steps[1].desc,
            ui: (
                <div className="w-full h-full flex items-center justify-center">
                    <div className="w-full h-full bg-white flex items-center justify-center px-6">
                        <div className="flex items-center gap-3">
                            {/* Platform Icons */}
                            <div className="flex flex-col gap-2">
                                <div className="w-7 h-7 bg-white border border-indigo-200 rounded-full flex items-center justify-center overflow-hidden shadow-sm">
                                    <Image
                                        src="/brands/discord.png"
                                        alt="Discord"
                                        width={18}
                                        height={18}
                                        className="object-contain"
                                    />
                                </div>
                                <div className="w-7 h-7 bg-white border border-orange-200 rounded-full flex items-center justify-center overflow-hidden shadow-sm">
                                    <Image
                                        src="/brands/patreon.png"
                                        alt="Patreon"
                                        width={18}
                                        height={18}
                                        className="object-contain"
                                    />
                                </div>
                                <div className="w-7 h-7 bg-white border border-purple-200 rounded-full flex items-center justify-center overflow-hidden shadow-sm">
                                    <Image
                                        src="/brands/stripe.png"
                                        alt="Stripe"
                                        width={18}
                                        height={18}
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            {/* Arrows */}
                            <div className="flex flex-col gap-2">
                                <svg className="w-6 h-2" viewBox="0 0 24 8" fill="none">
                                    <path d="M0 4 L20 4 L16 1 M20 4 L16 7" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <svg className="w-6 h-2" viewBox="0 0 24 8" fill="none">
                                    <path d="M0 4 L20 4 L16 1 M20 4 L16 7" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <svg className="w-6 h-2" viewBox="0 0 24 8" fill="none">
                                    <path d="M0 4 L20 4 L16 1 M20 4 L16 7" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>

                            {/* Central Database Icon */}
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-indigo-100 border-2 border-blue-300 rounded-lg flex items-center justify-center shadow-md">
                                <svg className="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            num: "03",
            title: t.howItWorks.steps[2].title,
            desc: t.howItWorks.steps[2].desc,
            ui: (
                <div className="w-full h-full flex items-center justify-center">
                    <div className="w-full h-full bg-white flex flex-col border border-gray-50 rounded-lg overflow-hidden shadow-sm">
                        <div className="h-7 border-b border-gray-100 bg-gray-50 flex items-center px-4 gap-1.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-gray-200" />
                            <div className="w-1.5 h-1.5 rounded-full bg-gray-200" />
                            <div className="w-1.5 h-1.5 rounded-full bg-gray-200" />
                        </div>
                        <div className="flex-1 p-4 flex flex-col gap-4">
                            {/* Metric Cards */}
                            <div className="flex gap-3">
                                <div className="flex-1 p-3 rounded-xl bg-blue-50/50 border border-blue-100/50">
                                    <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">Revenue</div>
                                    <div className="text-base font-extrabold text-gray-900">$24,500</div>
                                </div>
                                <div className="flex-1 p-3 rounded-xl bg-indigo-50/50 border border-indigo-100/50">
                                    <div className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mb-1">Growth</div>
                                    <div className="text-base font-extrabold text-gray-900">+12.4%</div>
                                </div>
                            </div>

                            {/* Main Chart Card */}
                            <div className="flex-1 p-4 rounded-xl bg-gray-50/50 border border-gray-100 relative overflow-hidden">
                                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Operational Summary</div>
                                <div className="absolute inset-0 top-10 flex items-end">
                                    <svg className="w-full h-[60%] px-4" viewBox="0 0 100 40" preserveAspectRatio="none">
                                        <defs>
                                            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="#214BCE" stopOpacity="0.2" />
                                                <stop offset="100%" stopColor="#214BCE" stopOpacity="0" />
                                            </linearGradient>
                                        </defs>
                                        <path
                                            d="M0,35 C15,30 25,10 45,15 S75,5 100,20"
                                            fill="none"
                                            stroke="#214BCE"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M0,35 C15,30 25,10 45,15 S75,5 100,20 V40 H0 Z"
                                            fill="url(#chartGradient)"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
    ];

    return (
        <section className="py-16 md:py-32 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-16 md:mb-24 text-center">
                        <Reveal variant="fade-up">
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">{t.howItWorks.title}</h2>
                            <div className="w-px h-16 bg-gray-300 mx-auto" />
                        </Reveal>
                    </div>

                    <div className="relative space-y-16 md:space-y-32">
                        {/* Connecting Line */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-100 -translate-x-1/2 hidden md:block" />

                        {steps.map((step, index) => (
                            <Reveal key={index} width="100%" variant={index % 2 === 0 ? 'fade-left' : 'fade-right'}>
                                <div className={`relative flex flex-col md:flex-row items-center gap-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>

                                    {/* Text Side */}
                                    <div className={`flex-1 text-center ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                        <div className="inline-block px-3 py-1 rounded-full bg-gray-100 text-xs font-bold text-gray-500 mb-4">
                                            STEP {step.num}
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                                        <p className="text-gray-500 leading-relaxed">{step.desc}</p>
                                    </div>

                                    {/* Center Marker */}
                                    <div className="relative z-10 flex-shrink-0 w-4 h-4 rounded-full bg-white border-4 border-[#214BCE] shadow-sm hidden md:block" />

                                    {/* Visual Side */}
                                    <div className="flex-1 w-full">
                                        <div className="aspect-video bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden relative group hover:border-blue-200 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                                            {step.ui}
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
