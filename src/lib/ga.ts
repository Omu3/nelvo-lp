/**
 * Google Analytics Event Tracking
 * 
 * Sends events to GA4 using gtag.
 * Returns early if window.gtag is not available (e.g., in SSR or when GA is disabled).
 */

const DEBUG = process.env.NEXT_PUBLIC_GA_DEBUG === 'true';

export const trackEvent = (
  name: string,
  params?: Record<string, any>
): void => {
  if (typeof window === 'undefined') return;
  
  // @ts-ignore - gtag is added by Google Tag Manager
  if (!window.gtag) {
    if (DEBUG) console.warn('[GA] gtag is not available');
    return;
  }
  
  if (DEBUG) console.log('[GA] Event:', name, params || {});
  
  // @ts-ignore
  window.gtag('event', name, params || {});
};
