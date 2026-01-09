'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { getLocalizedPath } from '@/lib/url';
import Link from 'next/link';

interface TableOfContentsProps {
  items: Array<{
    label: string;
    href: string;
  }>;
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const { language } = useLanguage();

  return (
    <nav className="mb-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
      <h2 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
        {language === 'ja' ? '目次' : 'Table of Contents'}
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {items.map((item, index) => (
          <li key={index}>
            <a
              href={item.href}
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
