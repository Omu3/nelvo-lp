'use client';

import { Reveal } from '@/components/ui/Reveal';
import { useLanguage } from '@/contexts/LanguageContext';
import { Activity } from 'lucide-react';
import Image from 'next/image';

export function Solution() {
    const { t } = useLanguage();

    return (
        <section className="py-16 md:py-24 bg-white relative overflow-hidden" id="solution">
            <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left Column: Text */}
                    <div className="order-2 lg:order-1 text-center lg:text-left">
                        <Reveal variant="fade-left">
                            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#214BCE] uppercase mb-4 sm:mb-6 block">{t.solution.label}</span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6 sm:mb-8 leading-[1.1] whitespace-pre-line">
                                {t.solution.headline}
                            </h2>
                        </Reveal>
                        <Reveal delay={100} variant="fade-left">
                            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8 whitespace-pre-line">
                                {t.solution.desc}
                            </p>
                        </Reveal>

                        <Reveal delay={200} variant="fade-left">
                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-sm font-medium text-gray-500">
                                <div className="flex -space-x-3">
                                    {[
                                        { name: 'Discord', src: '/brands/discord.png' },
                                        { name: 'Patreon', src: '/brands/patreon.png' },
                                        { name: 'Stripe', src: '/brands/stripe.png' },
                                        { name: 'Skool', src: '/brands/skool.png' },
                                    ].map((brand, i) => (
                                        <div key={i} className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center relative overflow-hidden shadow-sm transition-all duration-300 hover:scale-[1.03] hover:z-10 hover:opacity-100 opacity-85">
                                            <Image
                                                src={brand.src}
                                                alt={brand.name}
                                                width={24}
                                                height={24}
                                                className="w-5 h-5 object-contain"
                                            />
                                        </div>
                                    ))}
                                </div>
                                <span>{t.solution.compatible}</span>
                            </div>
                        </Reveal>
                    </div>

                    {/* Right Column: Zoomed UI Animation */}
                    <Reveal delay={200} variant="fade-right" className="order-1 lg:order-2 w-full">
                        <div className="relative w-full">
                            {/* Zoomed Chart Card */}
                            <div className="relative w-full aspect-[4/3] bg-white border border-gray-100 shadow-sm rounded-2xl p-12 md:p-14 overflow-hidden flex flex-col justify-center transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 hover:border-blue-100">
                                <div className="flex justify-between items-start mb-10">
                                    <div>
                                        <div className="text-base md:text-lg text-gray-400 mb-2">{t.solution.chart?.retention || "Retention Rate"}</div>
                                        <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">94.2%</div>
                                        <div className="flex items-center gap-3">
                                            <div className="flex -space-x-2">
                                                {[
                                                    { name: 'Discord', src: '/brands/discord.png' },
                                                    { name: 'Patreon', src: '/brands/patreon.png' },
                                                    { name: 'Stripe', src: '/brands/stripe.png' },
                                                ].map((brand, i) => (
                                                    <div key={i} className="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center relative overflow-hidden shadow-sm">
                                                        <Image
                                                            src={brand.src}
                                                            alt={brand.name}
                                                            width={24}
                                                            height={24}
                                                            className="w-5 h-5 object-contain"
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                            <span className="text-sm text-gray-400">Synced</span>
                                        </div>
                                    </div>
                                    <div className="px-4 py-2 rounded-full bg-green-50 text-green-600 text-sm font-bold flex items-center gap-1.5">
                                        <Activity className="w-4 h-4" /> +2.4%
                                    </div>
                                </div>

                                {/* Chart Area */}
                                {/* Chart Area - Unified Dashboard */}
                                <div className="relative w-full flex-1">
                                    {/* Platform Cards Grid */}
                                    <div className="grid grid-cols-3 gap-4 mb-8">
                                        {/* Discord Card */}
                                        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg p-4 border border-indigo-100">
                                            <div className="flex items-center gap-2 mb-3">
                                                <div className="w-6 h-6 rounded-full bg-white border border-indigo-200 flex items-center justify-center overflow-hidden shadow-sm">
                                                    <Image
                                                        src="/brands/discord.png"
                                                        alt="Discord"
                                                        width={18}
                                                        height={18}
                                                        className="w-4 h-4 object-contain"
                                                    />
                                                </div>
                                                <span className="text-sm font-semibold text-gray-700">Discord</span>
                                            </div>
                                            <div className="text-xl font-bold text-gray-900">1,234</div>
                                            <div className="text-xs font-medium text-gray-500">Members</div>
                                        </div>

                                        {/* Patreon Card */}
                                        <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-4 border border-orange-100">
                                            <div className="flex items-center gap-2 mb-3">
                                                <div className="w-6 h-6 rounded-full bg-white border border-orange-200 flex items-center justify-center overflow-hidden shadow-sm">
                                                    <Image
                                                        src="/brands/patreon.png"
                                                        alt="Patreon"
                                                        width={18}
                                                        height={18}
                                                        className="w-4 h-4 object-contain"
                                                    />
                                                </div>
                                                <span className="text-sm font-semibold text-gray-700">Patreon</span>
                                            </div>
                                            <div className="text-xl font-bold text-gray-900">$8.2k</div>
                                            <div className="text-xs font-medium text-gray-500">MRR</div>
                                        </div>

                                        {/* Stripe Card */}
                                        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg p-4 border border-purple-100">
                                            <div className="flex items-center gap-2 mb-3">
                                                <div className="w-6 h-6 rounded-full bg-white border border-purple-200 flex items-center justify-center overflow-hidden shadow-sm">
                                                    <Image
                                                        src="/brands/stripe.png"
                                                        alt="Stripe"
                                                        width={18}
                                                        height={18}
                                                        className="w-4 h-4 object-contain"
                                                    />
                                                </div>
                                                <span className="text-sm font-semibold text-gray-700">Stripe</span>
                                            </div>
                                            <div className="text-xl font-bold text-gray-900">$12.5k</div>
                                            <div className="text-xs font-medium text-gray-500">Revenue</div>
                                        </div>
                                    </div>

                                    {/* Unified Chart Section */}
                                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-5 border border-blue-100">
                                        <div className="flex justify-between items-center mb-4">
                                            <div>
                                                <div className="text-xs font-medium text-gray-500 mb-1">Overall Retention</div>
                                                <div className="text-3xl font-bold text-gray-900">94.2%</div>
                                            </div>
                                            <div className="px-3 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-bold">
                                                ↑ 2.4%
                                            </div>
                                        </div>

                                        {/* Simple Line Chart */}
                                        <div className="relative h-20 w-full">
                                            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                                                {/* Grid lines */}
                                                <line x1="0" y1="0" x2="100%" y2="0" stroke="#E5E7EB" strokeWidth="1" />
                                                <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#E5E7EB" strokeWidth="1" />
                                                <line x1="0" y1="100%" x2="100%" y2="100%" stroke="#E5E7EB" strokeWidth="1" />

                                                {/* Trend line */}
                                                <path
                                                    d="M 0,60 L 20,55 L 40,58 L 60,45 L 80,35 L 100,20"
                                                    fill="none"
                                                    stroke="#3B82F6"
                                                    strokeWidth="2.5"
                                                    strokeLinecap="round"
                                                />

                                                {/* Area fill */}
                                                <path
                                                    d="M 0,60 L 20,55 L 40,58 L 60,45 L 80,35 L 100,20 L 100,100 L 0,100 Z"
                                                    fill="url(#blueGradient)"
                                                    fillOpacity="0.2"
                                                />

                                                <defs>
                                                    <linearGradient id="blueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                                        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                                                        <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>

                                        {/* Time labels */}
                                        <div className="flex justify-between mt-2 text-xs text-gray-400">
                                            <span>Jan</span>
                                            <span>Mar</span>
                                            <span>May</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                </div>
            </div>
        </section >
    );
}
