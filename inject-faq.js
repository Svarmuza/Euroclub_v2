const fs = require('fs');
const langs = ['en', 'hr', 'de', 'fr', 'it', 'sl', 'pl', 'cs'];

const faqData = {
    hr: [
        {
            category: "Općenite informacije",
            questions: [
                { id: "faq-1", question: "Za koji je uzrast kamp prikladan?", answer: "Kamp je za djecu i mlade od 7-17 godina. Bez obzira na to, aktivnosti u kampu su prilagođene tako da ima ponešto za svakoga – i za malce i za starije." },
                { id: "faq-2", question: "Za koga nije kamp?", answer: "Kamp nije za RODITELJE:). To što ste vi preplašeni ne znači da se to treba odraziti na djecu. Dobro ih pripremite da znaju što se od njih očekuje, što da oni očekuju i zatražite od njih odgovornost za vrijeme kampa: poštovati sva pravila kampa, vremena obroka i nastave, voditi računa o svome krevetu/sobi/bungalovu/učionici…" }
            ]
        },
        {
            category: "Programi i radionice",
            questions: [
                { id: "faq-3", question: "Može li kamper odabrati dvije ili više radionica u istom tjednu?", answer: "Odabrati više radionica u istome tjednu nije moguće pošto se sve radionice odvijaju u isto vrijeme tako da se odabrati može samo jedna – Ili Oxford English ili neka druga od ponuđenih radionica koje su također na engleskom. Ipak, svaki sljedeći tjedan možete odabrati različitu radionicu." },
                { id: "faq-5", question: "Koji program odabrati ovisno o uzrastu?", answer: "7 - 10 godina: Preporučamo Oxford English Academy... 10 - 17 godina: Ovaj uzrast može odabrati bilo koju radionicu po volji... 12 - 17 godina: Adventure English... 15 - 18 godina: Junior Animator Academy." },
                { id: "faq-6", question: "Može li dijete promjeniti program u kampu?", answer: "Ukoliko mu zbilja ne odgovara, program se može promijeniti tijekom prva dva dana. Molimo zahtjeve za promjenom poslati na office@euroclub.hr ili na 095-907-9116 (od 10-11sati)" },
                { id: "faq-8", question: "Hoće li moje dijete naučiti engleski u kampu?", answer: "Iako neće naučiti jezik u sedam dana, djeca će ga u tom periodu POČETI KORISTITI. Pasivno znanje koje najčešće dobijaju u školi će postati aktivno." },
                { id: "faq-9", question: "Da li je nastava obvezna?", answer: "DA. NASTAVA JE OBAVEZNA! Osim što je to jedan od ciljeva kampa, prisustvovanjem na nastavi i radimo 'provjeru' prisutnosti i aktivnosti djece." }
            ]
        },
        {
            category: "Rezervacija i plaćanje",
            questions: [
                { id: "faq-7", question: "Koji je proces rezervacije?", answer: "1. Popunite obrazac... 2.administrator će vam se javiti... 3. Dobit ćete upute za plaćanje... 4. Dobit ćete pismo s informacijama... 5. Dobit ćete upute o polasku/dolasku." },
                { id: "faq-14", question: "Što u slučaju odustajanja od aranžmana?", answer: "Pri rezervaciji na raspolaganju vam je dodatno PUTNO OSIGURANJE... Bez uplate osiguranja, povrat se vrši prema skali: do 60 dana (85%), 59-21 dan (50%), 20-8 dana (30%), 7-0 dana (0%)." },
                { id: "faq-15", question: "Da li je prijevoz uključen u cijenu?", answer: "Prijevoz nije uključen u cijenu. Ukoliko dijete sami dovedete tako nećete platiti nikakve prijevozne troškove. Organiziramo prijevoz UZ PRATNJU za veće grupe iz većih gradova." }
            ]
        },
        {
            category: "Boravak u kampu",
            questions: [
                { id: "faq-4", question: "Koja je optimalna duljina boravka u kampu?", answer: "To varira od osobe do osobe. Djeci do 10 godina dovoljno je jedan tjedan, dok je starijoj djeci dva do tri tjedna optimalna." },
                { id: "faq-10", question: "Da li je prisustvovanje obrocima obvezno?", answer: "DA. Čak i u slučaju da ne žele jesti, djeca su obvezna prisustvovati na obrocima. Njihov voditelj će na taj način imati uvid u njihovu prehranu." },
                { id: "faq-11", question: "Kakav je smještaj?", answer: "Polaznici su smješteni u paviljonima u Luša naselju, u Brodarici kraj Šibenika. Sobe imaju tri ili četiri kreveta, vlastiti WC i tuš. Naselje ima vlastitu plažu." },
                { id: "faq-12", question: "Kako je organizirano funkcioniranje kampa?", answer: "Kamp nije vojska, ali određena pravila se moraju poštivati. Hrana je na principu samoposluživanja. Korištenje mobitela je zabranjeno na nastavi i obrocima." },
                { id: "faq-13", question: "Kako kontaktirati voditelje u kampu?", answer: "Dobiti ćete broj voditelja te e-mail koji će biti na raspolaganju od 10:30-12:00 svaki dan, u ostalo vrijeme SAMO ZA HITNE SLUČAJEVE." }
            ]
        },
        {
            category: "Ostalo",
            questions: [
                { id: "faq-16", question: "Pošaljite dodatno pitanje", answer: "Imate li dodatnih pitanja na koje želite znati odgovor, pošaljite ga office@euroclub.hr" }
            ]
        }
    ],
    en: [
        {
            category: "General Information",
            questions: [
                { id: "faq-1", question: "What age is the camp suitable for?", answer: "The camp is for children and young people aged 7-17. Activities are adapted for everyone - both for the little ones and for the older ones." },
                { id: "faq-2", question: "Who is the camp not for?", answer: "The camp is not for PARENTS :). Prepare them well so they know what is expected of them and ask them to be responsible during the camp: respect all camp rules, meal and class times..." }
            ]
        },
        {
            category: "Programs and Workshops",
            questions: [
                { id: "faq-3", question: "Can a camper choose two or more workshops in the same week?", answer: "Choosing multiple workshops in the same week is not possible since all workshops take place at the same time. However, each following week you can choose a different workshop." },
                { id: "faq-5", question: "Which program to choose depending on age?", answer: "7 - 10 years: Oxford English Academy... 10 - 17 years: Any workshop... 12 - 17 years: Adventure English... 15 - 18 years: Junior Animator Academy." },
                { id: "faq-6", question: "Can a child change programs in camp?", answer: "If it really doesn't suit them, the program can be changed during the first two days. Please send requests to office@euroclub.hr." },
                { id: "faq-8", question: "Will my child learn English in camp?", answer: "In seven days children will START USING the language. Passive knowledge will become active in the company of teachers and international friends." },
                { id: "faq-9", question: "Is attendance at classes mandatory?", answer: "YES. CLASSES ARE MANDATORY! Apart from being one of the camp's goals, we use class attendance to check children's presence." }
            ]
        },
        {
            category: "Reservation and Payment",
            questions: [
                { id: "faq-7", question: "What is the reservation process?", answer: "1. Fill out the form... 2. Administrator contacts you... 3. Payment instructions... 4. Letter with camp info... 5. Departure/arrival instructions." },
                { id: "faq-14", question: "What in case of cancellation?", answer: "Travel insurance is available. Without insurance, refunds are: up to 60 days (85%), 59-21 days (50%), 20-8 days (30%), 7-0 days (0%)." },
                { id: "faq-15", question: "Is transportation included?", answer: "Transportation is not included. We organize transportation WITH ESCORT from larger cities for groups." }
            ]
        },
        {
            category: "Stay at Camp",
            questions: [
                { id: "faq-4", question: "What is the optimal length of stay?", answer: "One week for children up to 10 years who are not used to being without parents; two to three weeks for older children." },
                { id: "faq-10", question: "Is meal attendance mandatory?", answer: "YES. Even if they don't want to eat, children are required to attend meals so leaders can monitor them." },
                { id: "faq-11", question: "What is the accommodation like?", answer: "Participants are accommodated in pavilions in Luša settlement near Šibenik. Rooms have 3-4 beds, private toilet and shower." },
                { id: "faq-12", question: "How is the camp functioning organized?", answer: "Rules must be respected. Nutrition is self-service. Mobile phones are prohibited in classes and during meals." },
                { id: "faq-13", question: "How to contact leaders in camp?", answer: "You will get contact details available from 10:30-12:00 every day, other times ONLY FOR EMERGENCIES." }
            ]
        },
        {
            category: "Other",
            questions: [
                { id: "faq-16", question: "Send an additional question", answer: "If you have additional questions, send them to office@euroclub.hr" }
            ]
        }
    ]
};

// Fill other languages with English data as fallback
['de', 'fr', 'it', 'sl', 'pl', 'cs'].forEach(lang => {
    faqData[lang] = faqData.en;
});

langs.forEach(lang => {
    const file = `messages/${lang}.json`;
    if (fs.existsSync(file)) {
        const data = JSON.parse(fs.readFileSync(file, 'utf8'));
        data.FAQ = {
            title: lang === 'hr' ? "Najčešća pitanja" : "Frequently Asked Questions",
            categories: faqData[lang]
        };
        fs.writeFileSync(file, JSON.stringify(data, null, 2));
    }
});
console.log('FAQ Translations injected.');
