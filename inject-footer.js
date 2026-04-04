const fs = require('fs');
const langs = ['en', 'hr', 'de', 'fr', 'it', 'sl', 'pl', 'cs'];
const translations = {
    hr: { description: "Ljetni kampovi uz more", contact: "Kontakt", links: "Korisni linkovi", copyright: "Sva prava pridržana." },
    en: { description: "Summer camps by the sea", contact: "Contact", links: "Useful links", copyright: "All rights reserved." },
    de: { description: "Sommercamps am Meer", contact: "Kontakt", links: "Nützliche Links", copyright: "Alle Rechte vorbehalten." },
    fr: { description: "Camps d'été en bord de mer", contact: "Contact", links: "Liens utiles", copyright: "Tous droits réservés." },
    it: { description: "Campi estivi al mare", contact: "Contatto", links: "Link utili", copyright: "Tutti i diritti riservati." },
    sl: { description: "Poletni tabori ob morju", contact: "Kontakt", links: "Koristne povezave", copyright: "Vse pravice pridržane." },
    pl: { description: "Obozy letnie nad morzem", contact: "Kontakt", links: "Przydatne linki", copyright: "Wszelkie prawa zastrzeżone." },
    cs: { description: "Letní tábory u moře", contact: "Kontakt", links: "Užitečné odkazy", copyright: "Všechna práva vyhrazena." }
};

langs.forEach(lang => {
    const file = `messages/${lang}.json`;
    const data = JSON.parse(fs.readFileSync(file, 'utf8'));
    data.Footer = translations[lang];
    fs.writeFileSync(file, JSON.stringify(data, null, 2));
});
console.log('Footer Translations injected.');
