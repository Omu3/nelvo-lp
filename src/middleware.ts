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

    // 3. Path Consolidation (Suppress 404s by redirecting unknown paths to /)
    // Allowed paths: "/", "/en"
    if (pathname !== '/' && pathname !== '/en') {
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
