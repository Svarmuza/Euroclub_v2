import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CookieConsent from '@/components/CookieConsent';
import PageViewTracker from '@/components/PageViewTracker';
import ScrollToTop from '@/components/ScrollToTop';
import MobileContactFooter from '@/components/MobileContactFooter';
import Script from 'next/script';
import '../globals.css';

import { Toaster } from 'sonner';

export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    // Ensure that the incoming `locale` is valid
    if (!routing.locales.includes(locale as any)) {
        notFound();
    }

    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();

    return (
        <html lang={locale} suppressHydrationWarning>
            <head>
                {/* Google Consent Mode v2: Default state set to denied */}
                <Script id="consent-mode" strategy="beforeInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag() { dataLayer.push(arguments); }
                        gtag('consent', 'default', {
                            'ad_storage': 'denied',
                            'ad_user_data': 'denied',
                            'ad_personalization': 'denied',
                            'analytics_storage': 'denied',
                            'wait_for_update': 500
                        });
                    `}
                </Script>

                {/* Google Tag Manager */}
                <Script id="gtm" strategy="beforeInteractive">
                    {`
                        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','GTM-NHG3JQZ');
                    `}
                </Script>

                {/* Meta Pixel (Facebook/Instagram) - GDPR: starts with consent revoked */}
                <Script id="meta-pixel" strategy="beforeInteractive">
                    {`
                        !function(f,b,e,v,n,t,s)
                        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                        n.queue=[];t=b.createElement(e);t.async=!0;
                        t.src=v;s=b.getElementsByTagName(e)[0];
                        s.parentNode.insertBefore(t,s)}(window, document,'script',
                        'https://connect.facebook.net/en_US/fbevents.js');
                        fbq('consent', 'revoke');
                        fbq('init', '435008813366385');
                        fbq('track', 'PageView');
                    `}
                </Script>

                {/* Structured Data - JSON-LD */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": ["TravelAgency", "EducationalOrganization", "Camp"],
                            "name": "Euroclub",
                            "alternateName": "Euroclub Language Camp",
                            "description": "Međunarodni ljetni kamp engleskog jezika za djecu i mlade od 7 do 18 godina u Brodarici, Hrvatska. Nezaboravno iskustvo učenja jezika uz avanture na Jadranskom moru.",
                            "url": "https://euroclub.hr",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://euroclub.hr/uploads/logo.webp",
                                "width": 300,
                                "height": 100
                            },
                            "image": [
                                "https://euroclub.hr/uploads/naslovnica/euroclub_beach.jpg",
                                "https://euroclub.hr/uploads/naslovnica/euroclub_friends.png",
                                "https://euroclub.hr/uploads/about/euroclub_brodarica.webp"
                            ],
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "Brodarica",
                                "addressLocality": "Brodarica",
                                "addressRegion": "Šibenik-Knin",
                                "postalCode": "22000",
                                "addressCountry": "HR"
                            },
                            "geo": {
                                "@type": "GeoCoordinates",
                                "latitude": "43.7350",
                                "longitude": "15.9214"
                            },
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "contactType": "customer service",
                                "availableLanguage": ["Croatian", "English", "German", "Italian", "French"]
                            },
                            "offers": [
                                {
                                    "@type": "Offer",
                                    "name": "Junior Program (7-12 godina)",
                                    "description": "Ljetni kamp engleskog jezika za djecu od 7 do 12 godina",
                                    "category": "Language Learning",
                                    "priceRange": "€€",
                                    "availability": "https://schema.org/InStock"
                                },
                                {
                                    "@type": "Offer",
                                    "name": "Teen Program (13-17 godina)",
                                    "description": "Ljetni kamp engleskog jezika za tinejdžere od 13 do 17 godina",
                                    "category": "Language Learning",
                                    "priceRange": "€€",
                                    "availability": "https://schema.org/InStock"
                                }
                            ],
                            "hasOfferCatalog": {
                                "@type": "OfferCatalog",
                                "name": "Language Programs",
                                "itemListElement": [
                                    { "@type": "OfferCatalog", "name": "Oxford English Academy", "description": "Premium program engleskog jezika s Oxford metodologijom" },
                                    { "@type": "OfferCatalog", "name": "Sports Academy", "description": "Kombinacija jezika i sportskih aktivnosti" },
                                    { "@type": "OfferCatalog", "name": "Digital Academy", "description": "Moderni pristup učenju jezika kroz digitalne tehnologije" }
                                ]
                            },
                            "amenityFeature": [
                                { "@type": "LocationFeatureSpecification", "name": "Smještaj s privatnim kupaonicama", "value": true },
                                { "@type": "LocationFeatureSpecification", "name": "Vodeni sportovi", "value": true },
                                { "@type": "LocationFeatureSpecification", "name": "24/7 nadzor", "value": true }
                            ],
                            "aggregateRating": {
                                "@type": "AggregateRating",
                                "ratingValue": "4.8",
                                "reviewCount": "150",
                                "bestRating": "5"
                            },
                            "foundingDate": "1991",
                            "slogan": "Ljeto koje nikad nećeš zaboraviti!",
                            "knowsAbout": ["English Language Learning", "Summer Camps", "Youth Education", "Croatian Adriatic Coast", "Water Sports", "International Education"],
                            "serviceArea": { "@type": "Place", "name": "Europe" }
                        })
                    }}
                />
            </head>
            <body className="antialiased flex flex-col min-h-screen">
                {/* Google Tag Manager (noscript) */}
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-NHG3JQZ"
                        height="0"
                        width="0"
                        style={{ display: 'none', visibility: 'hidden' }}
                    />
                </noscript>

                {/* Meta Pixel Noscript */}
                <noscript>
                    <img
                        height="1"
                        width="1"
                        style={{ display: 'none' }}
                        src="https://www.facebook.com/tr?id=435008813366385&ev=PageView&noscript=1"
                        alt=""
                    />
                </noscript>

                <NextIntlClientProvider messages={messages}>
                    <PageViewTracker />
                    <Navbar />
                    <main className="flex-grow pt-20">
                        {children}
                    </main>
                    <Footer />
                    <ScrollToTop />
                    <MobileContactFooter />
                    <CookieConsent />
                    <Toaster position="top-center" richColors />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
