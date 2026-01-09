'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/Button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';
import { getLocalizedPath, getBasePath, getLanguageFromPath } from '@/lib/url';
import { usePathname, useRouter } from 'next/navigation';

export function Header() {
    const { language, setLanguage, t } = useLanguage();
    const pathname = usePathname();
    const router = useRouter();

    const formUrl = language === 'ja'
        ? 'https://forms.gle/nwGEboEsGpD84R2u8'
        : 'https://forms.gle/SHyrFNxLrGZM1piU7';

    const toggleLanguage = () => {
        const newLanguage = language === 'ja' ? 'en' : 'ja';
        
        // Cookieを先に更新
        document.cookie = `language=${newLanguage}; path=/; max-age=31536000`; // 1年
        
        // Contextを更新
        setLanguage(newLanguage);
        
        // 現在のパスを取得してベースパスに変換
        const basePath = getBasePath(pathname);
        
        // 新しい言語のURLを生成
        const newPath = getLocalizedPath(basePath, newLanguage);
        
        // URL遷移
        router.push(newPath);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 md:px-12 py-4 bg-white/50 backdrop-blur-sm border-b border-transparent transition-all duration-200">
            <div className="flex items-center gap-2">
                <Link href={getLocalizedPath('/', language)} className="flex items-center gap-2 group">
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
                <Link href={getLocalizedPath('/#product', language)} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                    Product
                </Link>
                <Link href={getLocalizedPath('/#pricing', language)} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                    {t.header.pricing}
                </Link>
                <span className="text-sm font-medium text-gray-400 cursor-not-allowed opacity-60">
                    {t.header.login}
                </span>
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
