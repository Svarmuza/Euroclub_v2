import { MetadataRoute } from 'next';

const locales = ['hr', 'en', 'de', 'fr', 'it', 'sl', 'pl', 'cs', 'hu', 'ru'];

const pages = [
    { id: '', path: '' },
    { id: 'about', path: 'o-nama' },
    { id: 'faq', path: 'najcesca-pitanja' },
    { id: 'prices', path: 'cijene' },
    { id: 'reservation', path: 'rezervacija' },
    { id: 'junior', path: 'junior-programi' },
    { id: 'teen', path: 'teen-program' },
    { id: 'programs', path: 'programi' },
    { id: 'programsTeen', path: 'teen-programi' },
    { id: 'whyEuroclub', path: 'zasto-euroclub' },
    { id: 'accommodation', path: 'smjestaj' },
    { id: 'adventurePackage', path: 'adventure-paket' },
    { id: 'dailySchedule', path: 'dnevni-raspored' },
    { id: 'transfer', path: 'transfer' },
    { id: 'oxfordEnglish', path: 'oxford-english' },
    { id: 'sports', path: 'sports' },
    { id: 'digitalAcademy', path: 'digital-academy' },
    { id: 'artFashion', path: 'art-fashion' },
    { id: 'leadership', path: 'leadership' },
    { id: 'teenChallenger', path: 'teen-challenger' },
    { id: 'juniorAnimator', path: 'junior-animator' },
    { id: 'croatianCamp', path: 'kamp-hrvatskog-jezika' },
    { id: 'germanCamp', path: 'kamp-njemackog-jezika' },
    { id: 'italianCamp', path: 'kamp-talijanskog-jezika' },
    { id: 'frenchCamp', path: 'kamp-francuskog-jezika' },
];

export default function sitemap(): MetadataRoute.Sitemap {
    const sitemapEntries: MetadataRoute.Sitemap = [];

    for (const locale of locales) {
        for (const page of pages) {
            const url = page.path
                ? `https://euroclub.hr/${locale}/${page.path}`
                : `https://euroclub.hr/${locale}`;

            sitemapEntries.push({
                url,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: page.path === '' ? 1.0 : 0.8,
            });
        }
    }

    return sitemapEntries;
}
