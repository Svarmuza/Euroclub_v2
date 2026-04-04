'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useConsent } from './useConsent';

export function usePageView() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const { consent, isLoaded } = useConsent();

    useEffect(() => {
        if (!isLoaded) return;

        const url = pathname + (searchParams?.toString() ? `?${searchParams}` : '');

        if (consent.marketing && typeof window !== 'undefined' && (window as any).fbq) {
            (window as any).fbq('track', 'PageView', {
                content_name: document.title,
                content_url: window.location.href,
            });
        }

        if (typeof window !== 'undefined' && (window as any).dataLayer) {
            (window as any).dataLayer.push({
                event: 'page_view',
                page_location: window.location.href,
                page_path: pathname,
                page_title: document.title,
                marketing_consent: consent.marketing,
            });
        }
    }, [pathname, searchParams, isLoaded, consent.marketing]);
}

export function usePageTracking(pageName: string, additionalData?: Record<string, any>) {
    const { consent } = useConsent();

    const trackPageView = () => {
        if (consent.marketing && typeof window !== 'undefined' && (window as any).fbq) {
            (window as any).fbq('track', 'PageView', {
                content_name: pageName,
                ...additionalData,
            });
        }
    };

    return { trackPageView };
}

export function useFormTracking(formName: string) {
    const { consent } = useConsent();

    const trackFormStart = () => {
        if (consent.marketing && typeof window !== 'undefined' && (window as any).fbq) {
            (window as any).fbq('track', 'FormStart', {
                content_category: 'form',
                content_name: formName,
            });
        }
    };

    const trackFormSubmit = (success: boolean = true) => {
        if (consent.marketing && typeof window !== 'undefined' && (window as any).fbq) {
            (window as any).fbq('track', success ? 'FormSubmit' : 'FormError', {
                content_category: 'form',
                content_name: formName,
                success: success,
            });
        }
    };

    const trackLead = (value?: number) => {
        if (consent.marketing && typeof window !== 'undefined' && (window as any).fbq) {
            (window as any).fbq('track', 'Lead', {
                content_category: 'form',
                content_name: formName,
                value: value,
            });
        }
    };

    return { trackFormStart, trackFormSubmit, trackLead };
}
