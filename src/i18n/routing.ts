import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
    locales: ['hr', 'en', 'de', 'fr', 'it', 'sl', 'pl', 'cs', 'hu', 'ru'],
    defaultLocale: 'hr',
    pathnames: {
        '/': '/',
        '/about': {
            hr: '/o-nama',
            en: '/about-us',
            de: '/about',
            fr: '/a-propos',
            it: '/about',
            sl: '/about',
            pl: '/about',
            cs: '/o-nas',
            hu: '/rolunk',
            ru: '/o-nas'
        },
        '/prices': {
            hr: '/cijene',
            en: '/prices',
            de: '/preise',
            fr: '/tarifs-euroclub',
            it: '/prezzi',
            sl: '/cene',
            pl: '/cennik',
            cs: '/ceny',
            hu: '/arak',
            ru: '/tseny'
        },
        '/junior-camp': {
            hr: '/junior-programi',
            en: '/junior-programs',
            de: '/junior-programme',
            fr: '/programme-junior',
            it: '/junior-programmi',
            sl: '/junior-programs',
            pl: '/junior-programs',
            cs: '/junior-programs',
            hu: '/junior-programs',
            ru: '/detskie-programmy'
        },
        '/teen-camp': {
            hr: '/teen-program',
            en: '/teen-program',
            de: '/teen-programm',
            fr: '/programme-ado',
            it: '/teen-programma',
            sl: '/teen-program',
            pl: '/teen-program',
            cs: '/teen-program',
            hu: '/teen-program',
            ru: '/molodezhnyy-programm'
        },
        '/programs': {
            hr: '/programi',
            en: '/programs',
            de: '/programme',
            fr: '/programmes',
            it: '/programmi',
            sl: '/programi',
            pl: '/programy',
            cs: '/junior-programs',
            hu: '/junior-programs',
            ru: '/programmy'
        },
        '/programs/teen': {
            hr: '/teen-programi',
            en: '/teen-programs-list',
            de: '/teen-programme-liste',
            fr: '/liste-programmes-ado',
            it: '/lista-teen-programmi',
            sl: '/teen-programs-list',
            pl: '/lista-programow-teen',
            cs: '/teen-programs-seznam',
            hu: '/teen-programs-lista',
            ru: '/spisok-molodezhnykh-programm'
        },
        '/faq': {
            hr: '/najcesca-pitanja',
            en: '/faq',
            de: '/haufige-fragen',
            fr: '/faq',
            it: '/domande-frequenti',
            sl: '/pogosta-vprasanja',
            pl: '/faq',
            cs: '/caste-dotazy',
            hu: '/gyakori-kerdesek',
            ru: '/chasto-zadavaemye-voprosy'
        },
        '/reservation': {
            hr: '/rezervacija',
            en: '/reservation',
            de: '/buchen',
            fr: '/reservation',
            it: '/prenotazione',
            sl: '/rezervacija',
            pl: '/rezerwacja',
            cs: '/rezervace',
            hu: '/foglalas',
            ru: '/bronirovaniye'
        },
        '/why-euroclub': {
            hr: '/zasto-euroclub',
            en: '/why-euroclub',
            de: '/warum-euroclub',
            fr: '/pourquoi-euroclub',
            it: '/perche-euroclub',
            sl: '/zakaj-euroclub',
            pl: '/dlaczego-euroclub',
            cs: '/proc-euroclub',
            hu: '/miert-euroclub',
            ru: '/pochemu-euroclub'
        },
        '/accommodation': {
            hr: '/smjestaj',
            en: '/accommodation',
            de: '/unterkunft',
            fr: '/hebergement',
            it: '/alloggio',
            sl: '/nastanitev',
            pl: '/zakwaterowanie',
            cs: '/ubytovani',
            hu: '/szallas',
            ru: '/prozhivanie'
        },
        '/daily-schedule': {
            hr: '/dnevni-raspored',
            en: '/daily-schedule',
            de: '/tagesablauf',
            fr: '/emploi-du-temps',
            it: '/programma-giornaliero',
            sl: '/dnevni-urnik',
            pl: '/plan-dnia',
            cs: '/denni-rozvrh',
            hu: '/napi-program',
            ru: '/rasporyadok-dnya'
        },
        '/adventure-package': {
            hr: '/adventure-paket',
            en: '/adventure-package',
            de: '/abenteuer-paket',
            fr: '/forfait-aventure',
            it: '/pacchetto-avventura',
            sl: '/pustolovski-paket',
            pl: '/pakiet-przygodowy',
            cs: '/dobrodruzny-balik',
            hu: '/kaland-csomag',
            ru: '/paket-priklyucheniy'
        },
        '/transfer': {
            hr: '/transfer',
            en: '/transfer-service',
            de: '/transfer',
            fr: '/service-navette',
            it: '/servizio-transfer',
            sl: '/transfer',
            pl: '/transfer',
            cs: '/transfer',
            hu: '/transzfer',
            ru: '/transfer'
        },
        '/oxford-english': {
            hr: '/oxford-english',
            en: '/oxford-english',
            de: '/oxford-english',
            fr: '/oxford-english',
            it: '/oxford-english',
            sl: '/oxford-english',
            pl: '/oxford-english',
            cs: '/oxford-english',
            hu: '/oxford-english',
            ru: '/oxford-english'
        },
        '/sports': {
            hr: '/sports',
            en: '/sports',
            de: '/sports',
            fr: '/sports',
            it: '/sports',
            sl: '/sports',
            pl: '/sports',
            cs: '/sports',
            hu: '/sports',
            ru: '/sports'
        },
        '/digital-academy': {
            hr: '/digital-academy',
            en: '/digital-academy',
            de: '/digital-akademie',
            fr: '/academie-digitale',
            it: '/accademia-digitale',
            sl: '/digital-academy',
            pl: '/akademia-cyfrowa',
            cs: '/digitalni-akademie',
            hu: '/digitalis-akademia',
            ru: '/tsifrovaya-akademiya'
        },
        '/art-fashion': {
            hr: '/art-fashion',
            en: '/art-fashion',
            de: '/kunst-mode',
            fr: '/art-mode',
            it: '/arte-moda',
            sl: '/art-fashion',
            pl: '/art-fashion',
            cs: '/art-fashion',
            hu: '/art-fashion',
            ru: '/iskusstvo-i-moda'
        },
        '/leadership': {
            hr: '/leadership',
            en: '/leadership',
            de: '/leadership',
            fr: '/leadership',
            it: '/leadership',
            sl: '/leadership',
            pl: '/leadership',
            cs: '/leadership',
            hu: '/leadership',
            ru: '/liderstvo'
        },
        '/teen-challenger': {
            hr: '/teen-challenger',
            en: '/teen-challenger',
            de: '/teen-challenger',
            fr: '/teen-challenger',
            it: '/teen-challenger',
            sl: '/teen-challenger',
            pl: '/teen-challenger',
            cs: '/teen-challenger',
            hu: '/teen-challenger',
            ru: '/teen-challenger'
        },
        '/junior-animator': {
            hr: '/junior-animator',
            en: '/junior-animator',
            de: '/junior-animator',
            fr: '/junior-animateur',
            it: '/junior-animator',
            sl: '/junior-animator',
            pl: '/junior-animator',
            cs: '/junior-animator',
            hu: '/junior-animator',
            ru: '/mladshiy-animator'
        },
        '/croatian-language-camp': {
            hr: '/kamp-hrvatskog-jezika',
            en: '/croatian-language-camp',
            de: '/kroatisch-lernen',
            fr: '/campo-croato',
            it: '/campo-croato',
            sl: '/hrvaski-tabor',
            pl: '/oboz-k Chorwackiego',
            cs: '/chorvatsky-tabor',
            hu: '/horvat-tabor',
            ru: '/lager-khorvatskogo-yazyka'
        },
        '/german-language-camp': {
            hr: '/kamp-njemackog-jezika',
            en: '/german-language-camp',
            de: '/deutsch-lernen',
            fr: '/championat-allemand',
            it: '/campo-tedesco',
            sl: '/nemski-tabor',
            pl: '/oboz-niemiecki',
            cs: '/nemecky-tabor',
            hu: '/nemet-tabor',
            ru: '/lager-nemetskogo-yazyka'
        },
        '/italian-language-camp': {
            hr: '/kamp-talijanskog-jezika',
            en: '/italian-language-camp',
            de: '/italienisch-lernen',
            fr: '/campo-italien',
            it: '/campo-italiano',
            sl: '/italski-tabor',
            pl: '/oboz-wloski',
            cs: '/italsky-tabor',
            hu: '/olasz-tabor',
            ru: '/lager-italyanskogo-yazyka'
        },
        '/french-language-camp': {
            hr: '/kamp-francuskog-jezika',
            en: '/french-language-camp',
            de: '/franzoesisch-lernen',
            fr: '/championnat-francais',
            it: '/campo-francese',
            sl: '/francoski-tabor',
            pl: '/oboz-francuski',
            cs: '/francouzsky-tabor',
            hu: '/francia-tabor',
            ru: '/lager-frantsuzskogo-yazyka'
        }
    }
});

export type Locale = (typeof routing.locales)[number];
export type Pathnames = keyof typeof routing.pathnames;

export const { Link, redirect, usePathname, useRouter } =
    createNavigation(routing);
