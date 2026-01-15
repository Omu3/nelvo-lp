import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const url = new URL(request.url);
    const host = request.headers.get('host') || '';
    const pathname = url.pathname;

    // 静的ファイル（画像、CSS、JS等）はmiddlewareをスキップして直接配信
    const staticFileExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp', '.ico', '.css', '.js', '.json', '.xml', '.txt'];
    const isStaticFile = staticFileExtensions.some(ext => pathname.toLowerCase().endsWith(ext));
    if (isStaticFile) {
        return NextResponse.next();
    }

    // Guard for local development: Disable redirects on localhost/127.0.0.1/0.0.0.0
    if (
        host.includes('localhost') ||
        host.startsWith('127.0.0.1') ||
        host.startsWith('0.0.0.0') ||
        host.endsWith('.local')
    ) {
        return NextResponse.next();
    }

    // 1. 下層ページ（/features, /pricing, /en/features等）は最優先で処理
    // SEO上の安定性を優先するため、下層ページでのAccept-LanguageやCookieによるリダイレクトは一切行わない
    const seoPages = ['/features', '/pricing', '/use-cases', '/integrations', '/faq', '/status', '/privacy-policy', '/terms', '/demo'];
    const isSeoPage = seoPages.some(page => pathname === page || pathname === `/en${page}`);
    
    if (isSeoPage) {
        // 下層ページは常に200を返す（リダイレクトしない）
        // www削除やHTTP → HTTPS リダイレクトでも、パスは維持する
        if (host.startsWith('www.')) {
            const newHost = host.replace('www.', '');
            url.host = newHost;
            // 下層ページのパスは維持する（/に変更しない）
            return NextResponse.redirect(url.toString(), 301);
        }
        
        const proto = request.headers.get('x-forwarded-proto');
        if (proto === 'http') {
            url.protocol = 'https:';
            // 下層ページのパスは維持する（/に変更しない）
            return NextResponse.redirect(url.toString(), 301);
        }
        
        return NextResponse.next();
    }

    // 2. Unify Domain: Only allow nelvo.co (トップページまたは未知のパスのみ)
    if (host.startsWith('www.')) {
        const newHost = host.replace('www.', '');
        url.host = newHost;
        url.pathname = '/'; // トップページまたは未知のパスは / にリダイレクト
        return NextResponse.redirect(url.toString(), 301);
    }

    // 3. HTTP -> HTTPS redirect (トップページまたは未知のパスのみ)
    const proto = request.headers.get('x-forwarded-proto');
    if (proto === 'http') {
        url.protocol = 'https:';
        // トップページ以外の未知のパスは / にリダイレクト（下層ページは既に処理済み）
        if (pathname !== '/' && pathname !== '/en') {
            url.pathname = '/';
        }
        return NextResponse.redirect(url.toString(), 301);
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
    // Allowed paths: "/", "/en", "/features", "/pricing", "/use-cases", "/integrations", "/faq", "/status", "/privacy-policy", "/terms", "/demo", etc.
    const allowedPaths = [
        '/', '/en',
        '/features', '/pricing', '/use-cases', '/integrations', '/faq', '/status', '/privacy-policy', '/terms', '/demo',
        '/en/features', '/en/pricing', '/en/use-cases', '/en/integrations', '/en/faq', '/en/status', '/en/privacy-policy', '/en/terms', '/en/demo'
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
