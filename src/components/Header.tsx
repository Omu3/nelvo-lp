'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/Button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

export function Header() {
    const { language, setLanguage, t } = useLanguage();

    const formUrl = language === 'ja'
        ? 'https://forms.gle/nwGEboEsGpD84R2u8'
        : 'https://forms.gle/SHyrFNxLrGZM1piU7';

    const toggleLanguage = () => {
        setLanguage(language === 'ja' ? 'en' : 'ja');
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 md:px-12 py-4 bg-white/50 backdrop-blur-sm border-b border-transparent transition-all duration-200">
            <div className="flex items-center gap-2">
                <Link href="/" className="flex items-center gap-2 group">
                    <Image
                        src="/logo.png"
                        alt="NELVO Logo"
                        width={48}
                        height={48}
                        className="w-10 h-10 md:w-12 md:h-12 object-contain"
                    />
                    <span className="font-bold text-lg md:text-xl tracking-tight text-gray-900">NELVO</span>
                </Link>
            </div>

            <nav className="hidden md:flex items-center gap-8">
                <Link href="/features" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                    {t.header.features}
                </Link>
                <Link href="/pricing" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                    {t.header.pricing}
                </Link>
                <Link href="/use-cases" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                    Use Cases
                </Link>
                <Link href="/integrations" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                    Integrations
                </Link>
                <button disabled className="text-sm font-medium text-gray-400 cursor-not-allowed opacity-60">
                    {t.header.login}
                </button>
            </nav>

            <div className="flex items-center gap-3 md:gap-4">
                <button
                    onClick={toggleLanguage}
                    className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                >
                    <Globe className="w-4 h-4" />
                    {language === 'ja' ? 'JP' : 'EN'}
                </button>
                <Button
                    variant="primary"
                    size="sm"
                    className="whitespace-nowrap text-xs px-3 py-2 h-auto md:text-sm md:px-4"
                    onClick={() => window.open(formUrl, '_blank')}
                >
                    {t.header.getStarted}
                </Button>
            </div>
        </header>
    );
}
