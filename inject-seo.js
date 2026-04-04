const fs = require('fs');
const langs = ['en', 'hr', 'de', 'fr', 'it', 'sl', 'pl', 'cs'];

const seoData = {
    hr: {
        about: {
            title: "O nama - Euroclub | Više od 30 godina tradicije",
            desc: "Upoznajte Euroclub - vodeći međunarodni ljetni kamp za djecu i mlade u Hrvatskoj. Saznajte više o našoj misiji, stručnom timu i tradiciji."
        },
        faq: {
            title: "Često postavljana pitanja - Euroclub",
            desc: "Pronađite odgovore na sva vaša pitanja o kampu Euroclub. Informacije o smještaju, aktivnostima, sigurnosti i još mnogo toga."
        },
        prices: {
            title: "Cijene i termini - Euroclub Ljetni Kamp",
            desc: "Pregledajte cijene, dostupne termine i popuste za ljetni kamp Euroclub. Rezervirajte ljeto iz snova po najboljim uvjetima."
        },
        reservation: {
            title: "Rezervacija - Ljetni Kamp Euroclub",
            desc: "Osigurajte mjesto u najzabavnijem ljetnom kampu. Jednostavna i brza rezervacija za Junior i Teen programe."
        },
        junior: {
            title: "Junior Kamp - Euroclub | Engleski za djecu 7-12 godina",
            desc: "Junior kamp Euroclub za djecu 7-12 godina - siguran početak učenja engleskog uz igru, sport i zabavu. Nadzor 24/7."
        },
        teen: {
            title: "Teen Summer Camp 13-17 - Euroclub | Ljetni kamp za tinejdžere",
            desc: "Euroclub Teen Summer Camp - ljeto koje mijenja sve! Engleski kroz iskustvo, prijatelji iz cijelog svijeta i nezaboravne avanture."
        }
    },
    en: {
        about: {
            title: "About Us - Euroclub | More than 30 Years of Tradition",
            desc: "Meet Euroclub - the leading international summer camp for children and youth in Croatia. Learn about our mission, expert team, and tradition."
        },
        faq: {
            title: "Frequently Asked Questions - Euroclub",
            desc: "Find answers to all your questions about Euroclub camp. Information on accommodation, activities, safety, and more."
        },
        prices: {
            title: "Prices and Dates - Euroclub Summer Camp",
            desc: "View prices, available dates, and discounts for Euroclub summer camp. Book your dream summer with the best conditions."
        },
        reservation: {
            title: "Reservation - Euroclub Summer Camp",
            desc: "Secure your place in the funnest summer camp. Quick and easy reservation for Junior and Teen programs."
        },
        junior: {
            title: "Junior Camp - Euroclub | English for Children 7-12 Years",
            desc: "Euroclub Junior camp for children aged 7-12 - a safe start to learning English through play, sports, and fun. 24/7 supervision."
        },
        teen: {
            title: "Teen Summer Camp 13-17 - Euroclub | Summer Camp for Teenagers",
            desc: "Euroclub Teen Summer Camp - the summer that changes everything! English through experience, friends from all over the world, and unforgettable adventures."
        }
    }
};

// Fill other languages with English as fallback
['de', 'fr', 'it', 'sl', 'pl', 'cs'].forEach(lang => {
    seoData[lang] = seoData.en;
});

langs.forEach(lang => {
    const file = `messages/${lang}.json`;
    if (fs.existsSync(file)) {
        const data = JSON.parse(fs.readFileSync(file, 'utf8'));
        data.SEO = seoData[lang];
        fs.writeFileSync(file, JSON.stringify(data, null, 2));
    }
});
console.log('SEO Translations injected.');
