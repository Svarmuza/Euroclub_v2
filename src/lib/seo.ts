import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';

const locales = ['hr', 'en', 'de', 'fr', 'it', 'sl', 'pl', 'cs', 'hu', 'ru'];

const localeNames: Record<string, string> = {
    'hr': 'hr',
    'en': 'en',
    'de': 'de',
    'fr': 'fr',
    'it': 'it',
    'sl': 'sl',
    'pl': 'pl',
    'cs': 'cs',
    'hu': 'hu',
    'ru': 'ru',
};

export async function getLocalizedMetadata(pageId: string, locale: string): Promise<Metadata> {
    const t = await getTranslations({ locale, namespace: 'SEO' });

    const translations: Record<string, Record<string, string>> = {};
    for (const loc of locales) {
        translations[loc] = {
            title: `${pageId}.title`,
            desc: `${pageId}.desc`,
        };
    }

    const languages: Record<string, string> = {};
    for (const loc of locales) {
        languages[loc] = `https://euroclub.hr/${loc}/${pageId === 'programs' ? 'programi' : pageId === 'programsTeen' ? 'teen-programi' : pageId}`;
    }

    const pageTitle = t(`${pageId}.title`) as string || 'Euroclub Summer Camp';
    const pageDesc = t(`${pageId}.desc`) as string || '';

    return {
        title: pageTitle,
        description: pageDesc,
        openGraph: {
            title: pageTitle,
            description: pageDesc,
            url: `https://euroclub.hr/${locale}/${pageId}`,
            siteName: 'Euroclub Summer Camp',
            locale: locale,
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: pageTitle,
            description: pageDesc,
        },
        alternates: {
            canonical: `https://euroclub.hr/${locale}/${pageId}`,
            languages: languages,
        }
    };
}
