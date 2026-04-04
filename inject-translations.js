const fs = require('fs');
const langs = ['en', 'hr', 'de', 'fr', 'it', 'sl', 'pl', 'cs'];
const translations = {
    hr: { about: "O nama", programs: "Programi", junior: "Junior", teen: "Teen", prices: "Cijene", bookNow: "Prijavi se", adventure: "Adventure" },
    en: { about: "About", programs: "Programs", junior: "Junior", teen: "Teen", prices: "Prices", bookNow: "Apply Now", adventure: "Adventure" },
    de: { about: "Über uns", programs: "Programme", junior: "Junior", teen: "Teen", prices: "Preise", bookNow: "Anmelden", adventure: "Abenteuer" },
    fr: { about: "À Propos", programs: "Programmes", junior: "Junior", teen: "Ado", prices: "Prix", bookNow: "Inscription", adventure: "Aventure" },
    it: { about: "Chi Siamo", programs: "Programmi", junior: "Junior", teen: "Teen", prices: "Prezzi", bookNow: "Iscriviti", adventure: "Avventura" },
    sl: { about: "O Nas", programs: "Programi", junior: "Junior", teen: "Teen", prices: "Cene", bookNow: "Prijavi Se", adventure: "Adventure" },
    pl: { about: "O Nas", programs: "Programy", junior: "Junior", teen: "Teen", prices: "Cennik", bookNow: "Zarezerwuj", adventure: "Przygoda" },
    cs: { about: "O Nás", programs: "Programy", junior: "Junior", teen: "Teen", prices: "Ceny", bookNow: "Rezervace", adventure: "Dobrodružství" }
};

langs.forEach(lang => {
    const file = `messages/${lang}.json`;
    const data = JSON.parse(fs.readFileSync(file, 'utf8'));
    data.Navbar = translations[lang];
    fs.writeFileSync(file, JSON.stringify(data, null, 2));
});
console.log('Translations injected.');
