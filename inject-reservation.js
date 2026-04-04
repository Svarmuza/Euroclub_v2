const fs = require('fs');
const langs = ['en', 'hr', 'de', 'fr', 'it', 'sl', 'pl', 'cs'];

const reservationData = {
    hr: {
        title: "Rezervirajte svoje mjesto",
        subtitle: "Ispunite obrazac za rezervaciju svog ljetnog kampa.",
        form: {
            personal: "Osobni podaci polaznika",
            firstName: "Ime",
            lastName: "Prezime",
            birthDate: "Datum rođenja",
            email: "Email adresa",
            phone: "Broj telefona",
            program: "Odaberite program",
            term: "Odaberite termin",
            notes: "Napomena",
            submit: "Pošalji rezervaciju"
        }
    },
    en: {
        title: "Reserve Your Spot",
        subtitle: "Complete the form below to book your summer camp adventure.",
        form: {
            personal: "Participant Personal Information",
            firstName: "First Name",
            lastName: "Last Name",
            birthDate: "Birth Date",
            email: "Email Address",
            phone: "Phone Number",
            program: "Choose Program",
            term: "Choose Term",
            notes: "Notes",
            submit: "Submit Reservation"
        }
    }
};

['de', 'fr', 'it', 'sl', 'pl', 'cs'].forEach(lang => {
    reservationData[lang] = reservationData.en;
});

langs.forEach(lang => {
    const file = `messages/${lang}.json`;
    if (fs.existsSync(file)) {
        const data = JSON.parse(fs.readFileSync(file, 'utf8'));
        data.Reservation = reservationData[lang];
        fs.writeFileSync(file, JSON.stringify(data, null, 2));
    }
});
console.log('Reservation Translations injected.');
