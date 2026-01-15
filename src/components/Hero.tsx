'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, BarChart3, Users, CreditCard, Activity, Settings, Home, PieChart } from 'lucide-react';
import { clsx } from 'clsx';
import { useLanguage } from '@/contexts/LanguageContext';
import { trackEvent } from '@/lib/ga';

export function Hero() {
    const { t, language } = useLanguage();
    const formUrl = language === 'ja'
        ? 'https://forms.gle/nwGEboEsGpD84R2u8'
        : 'https://forms.gle/SHyrFNxLrGZM1piU7';

    const [animationState, setAnimationState] = useState<'initial' | 'converging' | 'revealed'>('initial');
    const [animationKey, setAnimationKey] = useState(0);

    useEffect(() => {
        const runAnimation = () => {
            setAnimationState('initial');
            setAnimationKey(prev => prev + 1);
            // Start animation sequence
            const timer1 = setTimeout(() => setAnimationState('converging'), 500);
            const timer2 = setTimeout(() => setAnimationState('revealed'), 2500); // 2s convergence
            return [timer1, timer2];
        };

        // Initial run
        let timers = runAnimation();

        // Loop every 8 seconds
        const interval = setInterval(() => {
            timers = runAnimation();
        }, 8000);

        return () => {
            timers.forEach(clearTimeout);
            clearInterval(interval);
        };
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-24 pb-16 md:pt-32 md:pb-32">
            {/* Background: Abstract Layer Rotation */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] opacity-[0.03] pointer-events-none">
                <div className="w-full h-full border border-black rounded-[100px] animate-[rotateLayer_60s_linear_infinite]" />
                <div className="absolute inset-[10%] border border-black rounded-[80px] animate-[rotateLayer_40s_linear_infinite_reverse]" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left Column: Typography */}
                    <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6 md:mb-8 animate-fade-in-up">
                            {t.hero.headline.part1}<br />
                            {t.hero.headline.part2 && <>{t.hero.headline.part2}<br /></>}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#214BCE] to-[#6C2BD9]">
                                {t.hero.headline.highlight}
                            </span><br />
                            {t.hero.headline.part3}
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-gray-500 mb-8 md:mb-10 leading-[1.8] max-w-lg mx-auto lg:mx-0 animate-fade-in-up delay-100 opacity-0" style={{ animationFillMode: 'forwards' }}>
                            {t.hero.subheadLines.map((line, index) => (
                                <span key={index}>
                                    {line}
                                    {index < t.hero.subheadLines.length - 1 && <br />}
                                </span>
                            ))}
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-5 animate-fade-in-up delay-200 opacity-0" style={{ animationFillMode: 'forwards' }}>
                            {/* 主CTA */}
                            <button onClick={() => {
                                trackEvent('cta_click', {
                                    cta_text: t.hero.cta.start,
                                    cta_location: 'hero',
                                    destination_url: formUrl,
                                });
                                window.open(formUrl, '_blank');
                            }} className="group w-full sm:w-auto px-8 h-12 bg-[#0a0a0a] text-white rounded-full font-medium text-lg hover:bg-gray-700 hover:shadow-lg transition-all flex items-center justify-center gap-2">
                                {t.hero.cta.start}
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            
                            {/* 副CTA */}
                            <div className="flex flex-col items-center sm:items-start">
                                <Link href={`/demo?lang=${language}`} onClick={() => {
                                    trackEvent('cta_click', {
                                        cta_id: 'hero_demo',
                                        cta_label: t.hero.cta.demo,
                                        locale: language,
                                        page: 'lp_home',
                                    });
                                }} className="w-full sm:w-auto px-8 h-12 bg-white text-gray-600 border border-gray-200 rounded-full font-medium text-lg hover:bg-gray-100 hover:border-gray-300 transition-all flex items-center justify-center">
                                    {t.hero.cta.demo}
                                </Link>
                                <span className="mt-1.5 text-xs text-gray-400 text-center sm:text-left">
                                    {t.hero.cta.demoNote}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Virtual Dashboard Animation */}
                    <div className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full max-w-lg lg:max-w-none mx-auto flex items-center justify-center perspective-[2000px] mt-8 lg:mt-0 p-4 sm:p-0">

                        {/* Converging Cards (Only visible during 'converging' state) */}
                        <div key={animationKey} className={clsx("absolute inset-0 pointer-events-none transition-opacity duration-500", animationState === 'revealed' ? 'opacity-0' : 'opacity-100')}>
                            {/* Card 1: Discord */}
                            <div className="absolute top-0 left-0 animate-[convergeCard_2s_cubic-bezier(0.16,1,0.3,1)_forwards]" style={{ '--start-x': '-100px', '--start-y': '-100px' } as any}>
                                <div className="w-32 h-20 bg-[#5865F2] rounded-xl shadow-lg flex items-center justify-center text-white font-bold">Discord</div>
                            </div>
                            {/* Card 2: YouTube */}
                            <div className="absolute top-0 right-0 animate-[convergeCard_2s_cubic-bezier(0.16,1,0.3,1)_forwards]" style={{ '--start-x': '100px', '--start-y': '-100px' } as any}>
                                <div className="w-32 h-20 bg-[#FF0000] rounded-xl shadow-lg flex items-center justify-center text-white font-bold">YouTube</div>
                            </div>
                            {/* Card 3: Stripe */}
                            <div className="absolute bottom-0 left-0 animate-[convergeCard_2s_cubic-bezier(0.16,1,0.3,1)_forwards]" style={{ '--start-x': '-100px', '--start-y': '100px' } as any}>
                                <div className="w-32 h-20 bg-[#635BFF] rounded-xl shadow-lg flex items-center justify-center text-white font-bold">Stripe</div>
                            </div>
                            {/* Card 4: Skool */}
                            <div className="absolute bottom-0 right-0 animate-[convergeCard_2s_cubic-bezier(0.16,1,0.3,1)_forwards]" style={{ '--start-x': '100px', '--start-y': '100px' } as any}>
                                <div className="w-32 h-20 bg-[#FCD34D] rounded-xl shadow-lg flex items-center justify-center text-black font-bold">Skool</div>
                            </div>
                        </div>

                        {/* The Virtual Dashboard (Revealed after convergence) */}
                        <div className={clsx(
                            "w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-1000",
                            animationState === 'revealed' ? 'opacity-100 scale-100 blur-0 translate-y-0' : 'opacity-0 scale-95 blur-sm translate-y-10'
                        )}>
                            {/* Dashboard Header */}
                            <div className="h-14 border-b border-gray-100 flex items-center justify-between px-6 bg-white/50 backdrop-blur-sm">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 rounded-full bg-red-400" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                    <div className="w-3 h-3 rounded-full bg-green-400" />
                                </div>
                                <div className="text-xs font-medium text-gray-400">NELVO Dashboard</div>
                            </div>

                            <div className="flex h-[340px]">
                                {/* Sidebar */}
                                <div className="w-16 border-r border-gray-100 flex flex-col items-center py-6 gap-6 bg-gray-50/50">
                                    <Home className="w-5 h-5 text-gray-400 hover:text-[#214BCE] transition-colors cursor-pointer" />
                                    <Users className="w-5 h-5 text-gray-400 hover:text-[#214BCE] transition-colors cursor-pointer" />
                                    <PieChart className="w-5 h-5 text-[#214BCE] cursor-pointer" />
                                    <Settings className="w-5 h-5 text-gray-400 hover:text-[#214BCE] transition-colors cursor-pointer mt-auto" />
                                </div>

                                {/* Main Content */}
                                <div className="flex-1 p-6 bg-white">
                                    {/* Top Controls */}
                                    <div className="flex justify-between items-center mb-6">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-100 to-purple-100" />
                                            <span className="font-bold text-gray-800">My Community</span>
                                        </div>
                                        <div className="px-3 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-500">Last 30 Days</div>
                                    </div>

                                    {/* Metrics Grid */}
                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        <div className="p-4 rounded-xl border border-gray-100 bg-gray-50/30">
                                            <div className="text-xs text-gray-400 mb-1">MRR</div>
                                            <div className="text-xl font-bold text-gray-900">¥1,230,000</div>
                                            <div className="text-xs text-green-500 flex items-center gap-1 mt-1">
                                                <Activity className="w-3 h-3" /> +12.5%
                                            </div>
                                        </div>
                                        <div className="p-4 rounded-xl border border-gray-100 bg-gray-50/30">
                                            <div className="text-xs text-gray-400 mb-1">Active Members</div>
                                            <div className="text-xl font-bold text-gray-900">1,280</div>
                                            <div className="text-xs text-green-500 flex items-center gap-1 mt-1">
                                                <Users className="w-3 h-3" /> +5.2%
                                            </div>
                                        </div>
                                    </div>

                                    {/* Chart Area (Abstract) */}
                                    <div className="h-32 rounded-xl border border-gray-100 bg-gray-50/30 p-4 relative overflow-hidden">
                                        <div className="text-xs text-gray-400 mb-2">Revenue Growth</div>
                                        {/* CSS Line Chart */}
                                        <div className="absolute bottom-0 left-0 right-0 h-20 flex items-end px-4 gap-1">
                                            {[40, 60, 45, 70, 65, 85, 80, 95, 90, 100].map((h, i) => (
                                                <div key={i} className="flex-1 bg-gradient-to-t from-[#214BCE]/20 to-[#6C2BD9]/20 rounded-t-sm" style={{ height: `${h}%` }} />
                                            ))}
                                        </div>
                                        {/* Line Overlay */}
                                        <svg className="absolute bottom-0 left-0 right-0 h-20 w-full px-4" preserveAspectRatio="none">
                                            <path d="M0,60 L30,40 L60,55 L90,30 L120,35 L150,15 L180,20 L210,5 L240,10 L270,0" fill="none" stroke="#214BCE" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
