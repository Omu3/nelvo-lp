import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const url = new URL(request.url);
    const host = request.headers.get('host') || '';
    const pathname = url.pathname;

    // Guard for local development: Disable redirects on localhost/127.0.0.1/0.0.0.0
    if (
        host.includes('localhost') ||
        host.startsWith('127.0.0.1') ||
        host.startsWith('0.0.0.0') ||
        host.endsWith('.local')
    ) {
        return NextResponse.next();
    }

    // 1. Unify Domain: Only allow nelvo.co
    if (host.startsWith('www.')) {
        const newHost = host.replace('www.', '');
        url.host = newHost;
        url.pathname = '/'; // Force redirect to root to resolve unknown sub-paths on www
        return NextResponse.redirect(url.toString(), 301);
    }

    // 2. HTTP -> HTTPS redirect
    const proto = request.headers.get('x-forwarded-proto');
    if (proto === 'http') {
        url.protocol = 'https:';
        // If it's a random path on HTTP, force it to root as well
        if (pathname !== '/' && pathname !== '/en') {
            url.pathname = '/';
        }
        return NextResponse.redirect(url.toString(), 301);
    }

    // 3. 下層ページ（/features, /pricing, /en/features等）は常に200を返す（リダイレクトしない）
    // SEO上の安定性を優先するため、下層ページでのAccept-LanguageやCookieによるリダイレクトは一切行わない
    const seoPages = ['/features', '/pricing', '/use-cases', '/integrations', '/faq', '/status', '/privacy-policy', '/terms'];
    const isSeoPage = seoPages.some(page => pathname === page || pathname === `/en${page}`);
    
    if (isSeoPage) {
        // 下層ページは常に200を返す（リダイレクトしない）
        return NextResponse.next();
    }

    // 4. Language routing for TOP PAGE ONLY (/, /en)
    // トップページのみ、Accept-Language や Cookie を見てリダイレクト
    if (pathname === '/' || pathname === '/en') {
        // 優先順位: Cookie > Accept-Language > デフォルト（日本語）
        const cookieLang = request.cookies.get('language')?.value;
        const acceptLanguage = request.headers.get('accept-language') || '';
        const prefersEnglish = acceptLanguage.includes('en') && !acceptLanguage.includes('ja');
        
        let targetLanguage: 'ja' | 'en' = 'ja'; // デフォルトは日本語
        if (cookieLang === 'en' || (prefersEnglish && !cookieLang)) {
            targetLanguage = 'en';
        }
        
        // Cookieが日本語の場合は / へ、英語の場合は /en へ
        if (targetLanguage === 'ja' && pathname === '/en') {
            url.pathname = '/';
            const response = NextResponse.redirect(url.toString(), 301);
            response.cookies.set('language', 'ja', { path: '/', maxAge: 31536000 });
            return response;
        }
        if (targetLanguage === 'en' && pathname === '/') {
            url.pathname = '/en';
            const response = NextResponse.redirect(url.toString(), 301);
            response.cookies.set('language', 'en', { path: '/', maxAge: 31536000 });
            return response;
        }
        
        // 既に正しい言語URLの場合はそのまま
        return NextResponse.next();
    }

    // 5. Path Consolidation (Suppress 404s by redirecting unknown paths to /)
    // Allowed paths: "/", "/en", "/features", "/pricing", "/use-cases", "/integrations", "/faq", "/status", "/privacy-policy", "/terms", etc.
    const allowedPaths = [
        '/', '/en',
        '/features', '/pricing', '/use-cases', '/integrations', '/faq', '/status', '/privacy-policy', '/terms',
        '/en/features', '/en/pricing', '/en/use-cases', '/en/integrations', '/en/faq', '/en/status', '/en/privacy-policy', '/en/terms'
    ];
    // 未知のパスは / にリダイレクト（404を避ける）
    if (!allowedPaths.includes(pathname) && !pathname.startsWith('/en/')) {
        url.pathname = '/';
        return NextResponse.redirect(url.toString(), 301);
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico, favicon.png, logo.png, etc. (public assets)
         * - sitemap.xml, robots.txt
         */
        '/((?!api|_next/static|_next/image|favicon.ico|favicon.png|logo.png|brands|sitemap.xml|robots.txt).*)',
    ],
};
