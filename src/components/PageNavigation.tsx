'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft, Home } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getLocalizedPath } from '@/lib/url';
import Link from 'next/link';

export function PageNavigation() {
  const { language, t } = useLanguage();
  const router = useRouter();

  return (
    <div className="flex items-center gap-4 mb-8">
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        {language === 'ja' ? '戻る' : 'Back'}
      </button>
      <Link
        href={getLocalizedPath('/', language)}
        className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
      >
        <Home className="w-4 h-4" />
        {language === 'ja' ? 'ホーム' : 'Home'}
      </Link>
    </div>
  );
}
