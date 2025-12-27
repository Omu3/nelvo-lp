'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export function UseCases() {
    const { t } = useLanguage();

    const blocks = [
        {
            // Icon: Bolt (Spark/Intuition)
            icon: (
                <svg className="w-5 h-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            bg: "bg-orange-50/50",
            border: "border-orange-100/60",
            iconBg: "bg-white ring-1 ring-orange-100"
        },
        {
            // Icon: Layers/Squares (Fragmentation)
            icon: (
                <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            ),
            bg: "bg-blue-50/50",
            border: "border-blue-100/60",
            iconBg: "bg-white ring-1 ring-blue-100"
        },
        {
            // Icon: Clock (Delay/Re-work)
            icon: (
                <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            bg: "bg-purple-50/50",
            border: "border-purple-100/60",
            iconBg: "bg-white ring-1 ring-purple-100"
        }
    ];

    return (
        <section className="py-24 bg-white border-b border-gray-100">
            <div className="container mx-auto px-6 md:px-12">

                {/* Header Section */}
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <p className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-6">
                        {t.useCases.eyebrow}
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-[1.25] whitespace-pre-wrap">
                        {t.useCases.title}
                    </h2>
                </div>

                {/* Cards Grid: Equal Height */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {t.useCases.items.map((item: any, index: number) => {
                        const style = blocks[index % blocks.length];
                        const textBlocks = item.desc.split('\n\n');

                        return (
                            <div key={index} className={`flex flex-col items-start p-8 rounded-2xl h-full ${style.bg} border ${style.border} transition-shadow duration-300 hover:shadow-sm`}>
                                {/* Icon Wrapper */}
                                <div className={`mb-6 p-2 rounded-lg shadow-sm ${style.iconBg}`}>
                                    {style.icon}
                                </div>

                                <h3 className="text-lg font-bold text-gray-900 mb-6 leading-snug min-h-[1.75em]">
                                    {item.title}
                                </h3>

                                <div className="space-y-4 text-sm leading-relaxed text-gray-600 font-medium opacity-90">
                                    {textBlocks.map((block: string, i: number) => (
                                        <p key={i}>
                                            {block}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
