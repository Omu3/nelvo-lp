import { Metadata } from 'next';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { PrivacyPageContent } from '@/app/privacy-policy/PrivacyPageContent';

export const metadata: Metadata = {
  title: "Privacy Policy - NELVO | Privacy Policy",
  description: "This policy sets forth how NELVO handles personal information. This policy sets forth how NELVO (the Service) handles personal information.",
  alternates: {
    canonical: 'https://nelvo.co/en/privacy-policy',
      languages: {
        'ja': 'https://nelvo.co/privacy-policy',
        'en': 'https://nelvo.co/en/privacy-policy',
        'x-default': 'https://nelvo.co/privacy-policy',
      },
  },
  openGraph: {
    title: "Privacy Policy - NELVO | Privacy Policy",
    description: "This policy sets forth how NELVO handles personal information. This policy sets forth how NELVO (the Service) handles personal information.",
    url: "https://nelvo.co/en/privacy-policy",
    siteName: "NELVO",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "NELVO Privacy Policy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy - NELVO | Privacy Policy",
    description: "This policy sets forth how NELVO handles personal information. This policy sets forth how NELVO (the Service) handles personal information.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <LanguageProvider initialLanguage="en">
      <PrivacyPageContent />
    </LanguageProvider>
  );
}
