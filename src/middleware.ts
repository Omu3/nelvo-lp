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

    // 3. Language routing for SEO pages
    // 言語情報なしのURL（/features, /pricing等）を適切な言語URLにリダイレクト
    const seoPages = ['/features', '/pricing', '/use-cases', '/integrations'];
    const isSeoPage = seoPages.some(page => pathname === page);
    
    if (isSeoPage) {
        // 優先順位: Cookie > Accept-Language > デフォルト（英語）
        const cookieLang = request.cookies.get('language')?.value;
        const acceptLanguage = request.headers.get('accept-language') || '';
        const prefersJapanese = acceptLanguage.includes('ja') && !acceptLanguage.includes('en');
        
        let targetLanguage: 'ja' | 'en' = 'en'; // デフォルトは英語
        if (cookieLang === 'ja' || (prefersJapanese && !cookieLang)) {
            targetLanguage = 'ja';
        }
        
        // 既に正しい言語URLの場合はリダイレクトしない
        if (targetLanguage === 'en' && pathname.startsWith('/en/')) {
            return NextResponse.next();
        }
        if (targetLanguage === 'ja' && !pathname.startsWith('/en')) {
            return NextResponse.next();
        }
        
        // リダイレクト
        const newPath = targetLanguage === 'en' ? `/en${pathname}` : pathname;
        url.pathname = newPath;
        const response = NextResponse.redirect(url.toString(), 301);
        // Cookieに言語を保存
        response.cookies.set('language', targetLanguage, { path: '/', maxAge: 31536000 });
        return response;
    }
    
    // 4. 既に言語プレフィックスがあるURL（/en/...）の整合性チェック
    // CookieとURLの言語が一致しない場合、Cookieを優先してリダイレクト
    // 仕様: Cookie優先。Cookieが日本語なら日本語URLへ、英語なら英語URLへ
    if (pathname.startsWith('/en/')) {
        const cookieLang = request.cookies.get('language')?.value;
        // Cookieが日本語の場合、日本語URLへリダイレクト
        if (cookieLang === 'ja') {
            const basePath = pathname.replace('/en', '') || '/';
            url.pathname = basePath;
            const response = NextResponse.redirect(url.toString(), 301);
            response.cookies.set('language', 'ja', { path: '/', maxAge: 31536000 });
            return response;
        }
        // Cookieが英語または未設定の場合はそのまま（既に正しい言語URL）
        return NextResponse.next();
    }
    
    // 5. 日本語URL（/features等、ルート以外）でCookieが英語の場合、英語URLへリダイレクト
    if (!pathname.startsWith('/en') && pathname !== '/' && pathname !== '/en') {
        const cookieLang = request.cookies.get('language')?.value;
        if (cookieLang === 'en') {
            url.pathname = `/en${pathname}`;
            const response = NextResponse.redirect(url.toString(), 301);
            response.cookies.set('language', 'en', { path: '/', maxAge: 31536000 });
            return response;
        }
    }
    
    // 6. ルートパス（/ または /en）の整合性チェック
    if (pathname === '/' || pathname === '/en') {
        const cookieLang = request.cookies.get('language')?.value;
        // Cookieが英語で / にいる場合、/en へリダイレクト
        if (cookieLang === 'en' && pathname === '/') {
            url.pathname = '/en';
            const response = NextResponse.redirect(url.toString(), 301);
            response.cookies.set('language', 'en', { path: '/', maxAge: 31536000 });
            return response;
        }
        // Cookieが日本語で /en にいる場合、/ へリダイレクト
        if (cookieLang === 'ja' && pathname === '/en') {
            url.pathname = '/';
            const response = NextResponse.redirect(url.toString(), 301);
            response.cookies.set('language', 'ja', { path: '/', maxAge: 31536000 });
            return response;
        }
    }

    // 4. Path Consolidation (Suppress 404s by redirecting unknown paths to /)
    // Allowed paths: "/", "/en", "/features", "/pricing", "/use-cases", "/integrations", "/faq", "/status", "/privacy-policy", "/terms", etc.
    const allowedPaths = [
        '/', '/en',
        '/features', '/pricing', '/use-cases', '/integrations', '/faq', '/status', '/privacy-policy', '/terms',
        '/en/features', '/en/pricing', '/en/use-cases', '/en/integrations', '/en/faq', '/en/status', '/en/privacy-policy', '/en/terms'
    ];
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
