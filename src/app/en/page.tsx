import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { UseCases } from '@/components/UseCases';
import { Solution } from '@/components/Solution';
import { Features } from '@/components/Features';
import { HowItWorks } from '@/components/HowItWorks';
import { Pricing } from '@/components/Pricing';
import { FAQ } from '@/components/FAQ';
import { Security } from '@/components/Security';
import { Footer } from '@/components/Footer';
import { Metadata } from 'next';
import { LanguageProvider } from '@/contexts/LanguageContext';

export const metadata: Metadata = {
    title: "NELVO - Community Ops \"Big Picture\" in One View.",
    description: "Grasp operational info scattered across tools from a single, unified perspective. NELVO is the dashboard that completes your daily checks and decisions in one screen.",
    alternates: {
        canonical: 'https://nelvo.co/',
        languages: {
            'ja': 'https://nelvo.co/',
            'en': 'https://nelvo.co/en',
        },
    },
    icons: {
        icon: '/favicon.png',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function EnglishHome() {
    return (
        <LanguageProvider initialLanguage="en">
            <main className="min-h-screen bg-white selection:bg-purple-100 selection:text-purple-900">
                <Header />
                <Hero />
                <UseCases />
                <Solution />
                <Features />
                <HowItWorks />
                <Pricing />
                <FAQ />
                <Security />
                <Footer />
            </main>
        </LanguageProvider>
    );
}
