'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations } from '@/lib/translations';
import { usePathname } from 'next/navigation';
import { getLanguageFromPath } from '@/lib/url';

type Language = 'ja' | 'en';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: typeof translations.ja;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children, initialLanguage = 'en' }: { children: ReactNode, initialLanguage?: Language }) {
    const pathname = usePathname();
    const pathLanguage = getLanguageFromPath(pathname);
    
    // Cookieから言語を取得（優先）
    const getCookieLanguage = (): Language | null => {
        if (typeof document === 'undefined') return null;
        const cookies = document.cookie.split(';');
        const languageCookie = cookies.find(c => c.trim().startsWith('language='));
        if (languageCookie) {
            const value = languageCookie.split('=')[1]?.trim();
            return value === 'ja' || value === 'en' ? value : null;
        }
        return null;
    };
    
    const cookieLang = typeof document !== 'undefined' ? getCookieLanguage() : null;
    const initialLang = cookieLang || initialLanguage || pathLanguage;
    const [language, setLanguage] = useState<Language>(initialLang);
    
    // パスから言語を自動判定して同期（Cookie優先）
    useEffect(() => {
        const cookieLang = getCookieLanguage();
        const pathLang = getLanguageFromPath(pathname);
        // CookieがあればCookieを優先、なければパスから判定
        const targetLang = cookieLang || pathLang;
        if (targetLang !== language) {
            setLanguage(targetLang);
        }
    }, [pathname]);
    
    // 言語変更時にCookieに保存（HeaderのtoggleLanguageで既に保存されるが、念のため）
    useEffect(() => {
        if (typeof document !== 'undefined') {
            document.cookie = `language=${language}; path=/; max-age=31536000`; // 1年
            // body要素にdata-language属性を設定（CSSで英語ページの背景パターンを削除するため）
            document.body.setAttribute('data-language', language);
        }
    }, [language]);

    const value: LanguageContextType = {
        language,
        setLanguage,
        t: translations[language],
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
