'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import Link from 'next/link';
import { getLocalizedPath } from '@/lib/url';

export function Footer() {
    const { t, language } = useLanguage();

    return (
        <footer className="py-12 md:py-24 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4 sm:px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12">
                    {/* Logo & Copyright */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Image
                                src="/logo.png"
                                alt="NELVO Logo"
                                width={40}
                                height={40}
                                className="w-10 h-10 object-contain"
                            />
                            <span className="text-2xl font-bold tracking-tight text-gray-900">NELVO</span>
                        </div>
                        <p className="text-sm text-gray-400">
                            {t.footer.copyright}
                        </p>
                    </div>

                    {/* Links */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-12 w-full md:w-auto">
                        {/* Product */}
                        <div className="flex flex-col gap-4">
                            <h4 className="font-bold text-gray-900 text-sm">{t.footer.links.product.title}</h4>
                            {t.footer.links.product.items.map((item: any, index: number) => (
                                <Link key={index} href={getLocalizedPath(item.href, language)} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                                    {item.label}
                                </Link>
                            ))}
                        </div>

                        {/* Resources */}
                        <div className="flex flex-col gap-4">
                            <h4 className="font-bold text-gray-900 text-sm">{t.footer.links.resources.title}</h4>
                            {t.footer.links.resources.items.map((item: any, index: number) => (
                                <Link key={index} href={getLocalizedPath(item.href, language)} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                                    {item.label}
                                </Link>
                            ))}
                        </div>

                        {/* Legal */}
                        <div className="flex flex-col gap-4">
                            <h4 className="font-bold text-gray-900 text-sm">{t.footer.links.legal.title}</h4>
                            {t.footer.links.legal.items.map((item: any, index: number) => (
                                <Link key={index} href={getLocalizedPath(item.href, language)} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                                    {item.label}
                                </Link>
                            ))}
                        </div>

                        {/* Contact */}
                        <div className="flex flex-col gap-4">
                            <h4 className="font-bold text-gray-900 text-sm">{t.footer.links.contact.title}</h4>
                            <a
                                href={`mailto:${t.footer.links.contact.email}`}
                                className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                            >
                                {t.footer.links.contact.email}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
