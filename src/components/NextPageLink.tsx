'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getLocalizedPath } from '@/lib/url';

interface NextPageLinkProps {
  href: string;
  label: string;
}

export function NextPageLink({ href, label }: NextPageLinkProps) {
  const { language } = useLanguage();

  return (
    <div className="mt-12 pt-8 border-t border-gray-200">
      <Link
        href={getLocalizedPath(href, language)}
        className="inline-flex items-center gap-2 text-sm font-medium text-[#214BCE] hover:text-[#6C2BD9] transition-colors group"
      >
        <span>{label}</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}
