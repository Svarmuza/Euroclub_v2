const fs = require('fs');
const langs = ['en', 'hr', 'de', 'fr', 'it', 'sl', 'pl', 'cs'];

const pricesData = {
    hr: {
        title: "Termini i Cijene 2026.",
        subtitle: "Investirajte u ljeto prepuno znanja, avanture i novih prijateljstava.",
        intro: "U kampu je moguće boraviti od 1 do 8 tjedana. Optimalna duljina boravka za aktivaciju pasivnog znanja engleskog jezika jest minimalno 2 tjedana.",
        basic: {
            title: "Engleski Ljetni Kamp",
            badge: "Osnovni Paket",
            desc: "Fleksibilno trajanje od 1 do 8 tjedana",
            table: {
                date: "Datum",
                full: "Plaćanje odjednom",
                installments: "Rate",
                monthly: "10 | 6 Rata",
                data: [
                    { date: "14.06.", full: "695€", installments: "765€", monthly: "76€ | 127€" },
                    { date: "21.06.", full: "695€", installments: "765€", monthly: "76€ | 127€" },
                    { date: "28.06.", full: "740€", installments: "814€", monthly: "81€ | 136€" },
                    { date: "05.07.", full: "760€", installments: "836€", monthly: "84€ | 139€" },
                    { date: "12.07.", full: "760€", installments: "836€", monthly: "84€ | 139€" },
                    { date: "19.07.", full: "760€", installments: "836€", monthly: "84€ | 139€" },
                    { date: "26.07.", full: "760€", installments: "836€", monthly: "84€ | 139€" },
                    { date: "02.08.", full: "760€", installments: "836€", monthly: "84€ | 139€" },
                    { date: "09.08.", full: "710€", installments: "781€", monthly: "78€ | 130€" },
                    { date: "16.08.", full: "710€", installments: "781€", monthly: "78€ | 130€" },
                    { date: "23.08.", full: "695€", installments: "765€", monthly: "76€ | 127€" }
                ]
            },
            includes: {
                title: "7-Dnevni Program Uključuje:",
                items: [
                    "Smještaj u međunarodnom ljetnom kampu Euroclub u Brodarici kod Šibenika",
                    "Sobe s 4 kreveta - s vlastitim WC-om i tušem",
                    "Puni pansion s 3 obroka dnevno (izbor od 3 jela po obroku)",
                    "Intenzivni tečaj jezika ili kreativne radionice (20 + 5 sati)",
                    "Korištenje materijala za učenje, opreme, sportskih i zabavnih sadržaja",
                    "Besplatno korištenje bazena i morskog zabavnog parka",
                    "Večernja i dnevna animacija na engleskom jeziku",
                    "Igre, turnire i ostale aktivnosti tijekom dana",
                    "Organizirani večernji spektakli na bazenu ili na plaži",
                    "Liječnička skrb dostupna 24h - dežurna ambulanta",
                    "Osiguranje od ozljeda",
                    "PDV"
                ]
            }
        },
        adventure: {
            title: "Adventure Paket",
            badge: "Premium Iskustvo",
            desc: "2-8 tjedana engleskog kampa obogaćeno adrenalinom i izletima",
            table: {
                date: "Datum",
                full: "Plaćanje odjednom",
                installments: "Rate",
                monthly: "10 | 6 Rata",
                data: [
                    { date: "14.06.", full: "2.120€", installments: "2.270€", monthly: "227€ | 454€" },
                    { date: "21.06.", full: "2.120€", installments: "2.270€", monthly: "227€ | 454€" },
                    { date: "28.06.", full: "2.165€", installments: "2.315€", monthly: "232€ | 463€" },
                    { date: "05.07.", full: "2.230€", installments: "2.380€", monthly: "238€ | 476€" },
                    { date: "12.07.", full: "2.250€", installments: "2.400€", monthly: "240€ | 480€" }
                ]
            },
            includes: {
                title: "Adventure Dodatno Uključuje:",
                items: [
                    "Adrenalin park - niski i visoki konopi sa zip line-om",
                    "Cjelodnevni izlet brodom Nacionalnom parku Kornati",
                    "James bond - turnir u streličarstvu",
                    "Rafting na Cetini",
                    "Posjet Nacionalnom parku Krka",
                    "Laser tag",
                    "Tube i jet ski",
                    "Fun Park Biograd"
                ]
            }
        },
        discounts: {
            title: "Popusti i Pogodnosti",
            desc: "Nagradjujemo vjernost i dolazak u društvu.",
            loyalty: {
                title: "Loyalty Popust",
                items: [
                    { value: "15€", text: "tjedno za svaku godinu koju si proveo/la kod nas" },
                    { value: "30€", text: "tjedno za drugi i svaki slijedeći tjedan boravka" }
                ]
            },
            family: {
                title: "Family Popust",
                items: [
                    { value: "15€", text: "tjedno po polazniku za više djece iz iste obitelji" }
                ]
            }
        }
    },
    en: {
        title: "Dates and Prices 2026",
        subtitle: "Invest in a summer full of knowledge, adventure and new friendships.",
        intro: "It is possible to stay in the camp from 1 to 8 weeks. The optimal length for activating passive knowledge is minimum 2 weeks.",
        basic: {
            title: "English Summer Camp",
            badge: "Basic Package",
            desc: "Flexible duration from 1 to 8 weeks",
            table: {
                date: "Date",
                full: "One-time payment",
                installments: "Installments",
                monthly: "10 | 6 Installments",
                data: [
                    { date: "14.06.", full: "770€", installments: "847€", monthly: "85€ | 141€" },
                    { date: "21.06.", full: "770€", installments: "847€", monthly: "85€ | 141€" },
                    { date: "28.06.", full: "830€", installments: "913€", monthly: "91€ | 152€" },
                    { date: "05.07.", full: "880€", installments: "968€", monthly: "97€ | 161€" },
                    { date: "12.07.", full: "880€", installments: "968€", monthly: "97€ | 161€" }
                ]
            },
            includes: {
                title: "7-Day Program Includes:",
                items: [
                    "Accommodation in Euroclub international camp",
                    "4-bed rooms with private bathroom and shower",
                    "Full board with 3 meals per day",
                    "Intensive language course (20 + 5 hours)",
                    "Learning materials and equipment",
                    "Free use of pool and aqua park",
                    "Animation in English",
                    "Games and tournaments",
                    "Evening spectacles",
                    "24h medical care",
                    "Injury insurance",
                    "VAT"
                ]
            }
        },
        adventure: {
            title: "Adventure Package",
            badge: "Premium Experience",
            desc: "2-8 weeks of English camp enriched with adrenaline and tours",
            table: {
                date: "Date",
                full: "One-time payment",
                installments: "Installments",
                monthly: "10 | 6 Installments",
                data: [
                    { date: "14.06. - 29.06.", full: "€ 2.230", installments: "€ 2.453", monthly: "€ 245 | € 409" },
                    { date: "21.06. - 05.07.", full: "€ 2.290", installments: "€ 2.519", monthly: "€ 252 | € 420" }
                ]
            },
            includes: {
                title: "Adventure Additionally Includes:",
                items: [
                    "Adrenaline park and zip line",
                    "Full-day boat trip to Kornati National Park",
                    "Archery tournament",
                    "Rafting on Cetina River",
                    "Visit to Krka National Park",
                    "Laser tag",
                    "Tube and jet ski",
                    "Fun Park Biograd"
                ]
            }
        },
        discounts: {
            title: "Discounts and Benefits",
            desc: "We reward loyalty and coming with family or friends.",
            loyalty: {
                title: "Loyalty Discount",
                items: [
                    { value: "15€", text: "weekly for each year spent with us" },
                    { value: "30€", text: "weekly for the second and each subsequent week" }
                ]
            },
            family: {
                title: "Family Discount",
                items: [
                    { value: "15€", text: "weekly per participant for same family members" }
                ]
            }
        }
    }
};

['de', 'fr', 'it', 'sl', 'pl', 'cs'].forEach(lang => {
    pricesData[lang] = pricesData.en;
});

langs.forEach(lang => {
    const file = `messages/${lang}.json`;
    if (fs.existsSync(file)) {
        const data = JSON.parse(fs.readFileSync(file, 'utf8'));
        data.Prices = pricesData[lang];
        fs.writeFileSync(file, JSON.stringify(data, null, 2));
    }
});
console.log('Prices Translations injected.');
