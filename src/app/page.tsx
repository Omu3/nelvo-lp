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

export default function Home() {
  return (
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
  );
}
