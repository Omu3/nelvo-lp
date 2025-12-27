import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ComingSoon() {
    return (
        <main className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                Coming Soon
            </h1>
            <p className="text-gray-500 text-lg mb-12">
                現在準備中です
            </p>
            <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-gray-900 transition-colors"
            >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
            </Link>
        </main>
    );
}
