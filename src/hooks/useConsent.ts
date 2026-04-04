'use client';

import { useState, useEffect, useCallback } from 'react';

export type ConsentType = 'necessary' | 'analytics' | 'marketing';

export interface ConsentState {
    necessary: boolean;
    analytics: boolean;
    marketing: boolean;
}

const CONSENT_KEY = 'euroclub-cookie-consent';

const defaultConsent: ConsentState = {
    necessary: true,
    analytics: false,
    marketing: false,
};

export function useConsent() {
    const [consent, setConsent] = useState<ConsentState>(defaultConsent);
    const [isLoaded, setIsLoaded] = useState(false);
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem(CONSENT_KEY);
        if (stored) {
            try {
                const parsed = JSON.parse(stored);
                setConsent({ ...defaultConsent, ...parsed });
            } catch {
                setShowBanner(true);
            }
        } else {
            setShowBanner(true);
        }
        setIsLoaded(true);
    }, []);

    const saveConsent = useCallback((newConsent: ConsentState) => {
        setConsent(newConsent);
        localStorage.setItem(CONSENT_KEY, JSON.stringify(newConsent));
        setShowBanner(false);

        if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('consent', 'update', {
                'analytics_storage': newConsent.analytics ? 'granted' : 'denied',
                'ad_storage': newConsent.marketing ? 'granted' : 'denied',
            });
        }

        if (typeof window !== 'undefined' && (window as any).fbq) {
            if (newConsent.marketing) {
                (window as any).fbq('consent', 'grant');
            } else {
                (window as any).fbq('consent', 'revoke');
            }
        }
    }, []);

    const acceptAll = useCallback(() => {
        saveConsent({
            necessary: true,
            analytics: true,
            marketing: true,
        });
    }, [saveConsent]);

    const declineAll = useCallback(() => {
        saveConsent({
            necessary: true,
            analytics: false,
            marketing: false,
        });
    }, [saveConsent]);

    const showBannerFn = useCallback(() => {
        setShowBanner(true);
    }, []);

    return {
        consent,
        isLoaded,
        showBanner,
        saveConsent,
        acceptAll,
        declineAll,
        showBannerSettings: showBannerFn,
    };
}

declare global {
    interface Window {
        gtag?: (...args: any[]) => void;
        dataLayer?: any[];
    }
}
