const fs = require('fs');
const langs = ['en', 'hr', 'de', 'fr', 'it', 'sl', 'pl', 'cs'];
const translations = {
    hr: {
        hero: {
            title: "Euroclub",
            subtitle: "Međunarodni ljetni kamp engleskog jezika",
            ageRange: "Za djecu i mlade od 7 do 18 godina",
            teachers: "S izvornim govornicima",
            levels: "Za sve razine znanja - početni do 'native speaker'",
            juniorBtn: "JUNIOR",
            juniorAge: "program 7-12g",
            teenBtn: "TEEN",
            teenAge: "program 12-17g"
        },
        unforgettable: {
            title: "Ljeto koje ćeš pamtiti zauvijek!",
            desc: "Druži se, veseli se! Koristi engleski, dobro se zabavi, bavi se sportom, stekni nove prijatelje iz raznih krajeva svijeta, pleši na Mega Pool partiju i, naravno, uživaj na osunčanoj plaži – što ti više treba za ljeto iz snova?"
        },
        adventure: {
            title: "Nikad dosadno – uvijek avantura!",
            desc: "Engleski je naš službeni jezik. Nastavnici su IZVORNI GOVORNICI. Optimalan boravak je 2 tjedna i više, ali moguće je u kampu provesti 1-8 tjedana. Odaberi svoj kamp i program po želji. Dodaj tome igre, kvizove, sport i smijeh te nikako ne zaobiđi mega popularne Pool partije za Euroclubovce. Želiš još više akcije, adrenalina i nezaboravnih trenutaka? Onda je ADVENTURE PAKET stvoren baš za tebe! Čeka te dodatnih 15 ludih izleta i aktivnosti koje dižu zabavu na potpuno novu razinu – rafting, go-kart, jet ski, scuba diving, windsurfing, zabavni parkovi i još puno toga! Pripremi se za turbo doživljaje i uspomene koje se ne zaboravljaju!",
            btnJunior: "PROGRAMI za 7-12g.",
            btnTeen: "PROGRAMI za 12-17g."
        },
        story: {
            title: "Ljetni kamp s jedinstvenom pričom",
            desc: "Još od 1991. smo ljetni dom brojnim generacijama djece i tinejdžera. Tu su rođena brojna prijateljstva, naučene vještine, stečena iskustva i stvorene uspomene koje naši kamperi nose cijelog života. Saznaj više o nama i našoj priči!",
            btn: "O NAMA"
        },
        future: {
            title: "Budućnost počinje sad!",
            desc: "Ljetni kamp je početak tvoje avanture prema budućnosti: razvija tvoju samostalnost, samopouzdanje, vještine kritičkog razmišljanja, emocionalne inteligencije, timski rad, kreativno rješavanje problema i digitalne pismenosti - vještine koje će 'sutra' biti najtraženije."
        },
        parents: {
            label: "Za roditelje",
            title: "Zašto roditelji biraju baš Euroclub?",
            card1Title: "Iskustvo & Povjerenje",
            card1Desc: "Zato što Euroclub nije samo kamp – to je iskustvo koje mijenja djecu i priprema ih za život. Već više od 30 godina (od 1991.), Euroclub gradi povjerenje među roditeljima i osmijehe među tisućama djece. Siguran i izdvojen kamp, posebno je osmišljen samo za djecu i mlade.",
            card2Title: "Edukacija & Razvoj",
            card2Desc: "Engleski je službeni jezik kampa – uz izvorne govornike. Programi potiču samostalnost, emocionalnu inteligenciju i timski duh, a uz pametno postavljen digitalni balans (mobiteli max 90 minuta dnevno), djeca ponovno otkrivaju čari stvarnog druženja.",
            card3Title: "Smještaj & Zabava",
            card3Desc: "Euroclub je kamp bez šatora – smješteni smo u paviljonima u kojima svaka soba ima vlastiti tuš i WC. A uz to: besplatni vodeni park u moru, bazen, sportovi, kvizovi, natjecanja i najbolje večernje zabave!",
            card3Footer: "Jer Euroclub je više od kampa – to je ulaganje u budućnost tvog djeteta."
        }
    },
    en: {
        hero: {
            title: "Euroclub",
            subtitle: "International English Summer Camp",
            ageRange: "For kids and teens aged 7 to 18",
            teachers: "With native speakers",
            levels: "For all levels - beginner to native speaker",
            juniorBtn: "JUNIOR",
            juniorAge: "program 7-12y",
            teenBtn: "TEEN",
            teenAge: "program 12-17y"
        },
        unforgettable: {
            title: "A summer you'll remember forever!",
            desc: "Meet new people and have fun! Use real English, play sports, make friends from all over the world, dance at the Mega Pool party, and enjoy the sunny beach – what more could you need for a dream summer?"
        },
        adventure: {
            title: "Never boring – always an adventure!",
            desc: "English is our official language. All teachers are NATIVE SPEAKERS. The optimal stay is 2 weeks, but you can stay 1-8 weeks. Choose your camp and program. Add games, quizzes, sports, and don't miss our famous Pool Parties! Want more action? The ADVENTURE PACKAGE gives you 15 crazy trips: rafting, go-karts, jet ski, scuba diving, and more!",
            btnJunior: "PROGRAMS 7-12y",
            btnTeen: "PROGRAMS 12-17y"
        },
        story: {
            title: "A summer camp with a unique story",
            desc: "Since 1991, we have been the summer home for generations. Friendships are born here, skills are learned, and memories are made that last a lifetime. Find out more about our story!",
            btn: "ABOUT US"
        },
        future: {
            title: "The future starts now!",
            desc: "Summer camp is the beginning of your adventure into the future: it develops independence, confidence, critical thinking, emotional intelligence, teamwork, problem solving, and digital literacy."
        },
        parents: {
            label: "For parents",
            title: "Why do parents choose Euroclub?",
            card1Title: "Experience & Trust",
            card1Desc: "Because we have over 30 years of experience. Euroclub builds trust among parents and smiles among thousands of children safely.",
            card2Title: "Education & Growth",
            card2Desc: "English is the official language. Programs encourage independence and emotional intelligence with smart digital balance.",
            card3Title: "Accommodation & Fun",
            card3Desc: "We offer real rooms with private bathrooms, a free water park, a pool, sports, and the best evening parties.",
            card3Footer: "Euroclub is an investment in your child's future."
        }
    },
    de: {
        hero: {
            title: "Euroclub",
            subtitle: "Internationales Englisch-Sommercamp",
            ageRange: "Für Kinder und Jugendliche von 7 bis 18 Jahren",
            teachers: "Mit Muttersprachlern",
            levels: "Für alle Niveaus",
            juniorBtn: "JUNIOR",
            juniorAge: "Programm 7-12J",
            teenBtn: "TEEN",
            teenAge: "Programm 12-17J"
        },
        unforgettable: {
            title: "Ein unvergesslicher Sommer!",
            desc: "Triff neue Leute und hab Spaß! Übe Englisch, treibe Sport, finde Freunde aus der ganzen Welt und genieße den sonnigen Strand."
        },
        adventure: {
            title: "Immer ein Abenteuer!",
            desc: "Englisch ist unsere offizielle Sprache. Optimiere deinen Aufenthalt für 2 Wochen. Wähle dein Camp und genieße unsere Poolpartys! Das ABENTEUER-PAKET bietet 15 tolle Ausflüge: Rafting, Kartfahren, Jet-Ski und mehr!",
            btnJunior: "PROGRAMME 7-12J",
            btnTeen: "PROGRAMME 12-17J"
        },
        story: {
            title: "Ein Sommercamp mit Geschichte",
            desc: "Seit 1991 sind wir das Sommerzuhause für viele Generationen. Hier entstehen Freundschaften und Erinnerungen fürs Leben.",
            btn: "ÜBER UNS"
        },
        future: {
            title: "Die Zukunft beginnt jetzt!",
            desc: "Das Sommercamp entwickelt Selbstständigkeit, Selbstbewusstsein, kritisches Denken und Teamarbeit."
        },
        parents: {
            label: "Für Eltern",
            title: "Warum Eltern Euroclub wählen?",
            card1Title: "Erfahrung & Vertrauen",
            card1Desc: "Über 30 Jahre Erfahrung im Aufbau von Vertrauen bei Eltern und Kindern.",
            card2Title: "Bildung & Entwicklung",
            card2Desc: "Englisch ist offizielle Sprache. Wir fördern das soziale Miteinander mit smarter Mediennutzung.",
            card3Title: "Unterkunft & Spaß",
            card3Desc: "Feste Zimmer mit Bad, kostenloser Wasserpark, Pool und tolle Abendpartys.",
            card3Footer: "Eine Investition in die Zukunft Ihres Kindes."
        }
    },
    fr: {
        hero: {
            title: "Euroclub",
            subtitle: "Camp d'été international d'anglais",
            ageRange: "Pour les enfants de 7 à 18 ans",
            teachers: "Avec des locuteurs natifs",
            levels: "Pour tous les niveaux",
            juniorBtn: "JUNIOR",
            juniorAge: "programme 7-12 ans",
            teenBtn: "TEEN",
            teenAge: "programme 12-17 ans"
        },
        unforgettable: {
            title: "Un été inoubliable !",
            desc: "Rencontrez de nouvelles personnes et amusez-vous ! Pratiquez l'anglais, faites du sport, et profitez de la plage ensoleillée."
        },
        adventure: {
            title: "Toujours une aventure !",
            desc: "L'anglais est notre langue officielle. Choisissez votre camp et profitez de nos fêtes ! Le FORFAIT AVENTURE offre 15 excursions incroyables : rafting, karting, jet ski et plus !",
            btnJunior: "PROGRAMMES 7-12 ans",
            btnTeen: "PROGRAMMES 12-17 ans"
        },
        story: {
            title: "Un camp avec une histoire",
            desc: "Depuis 1991, nous sommes la maison d'été de plusieurs générations.",
            btn: "À PROPOS"
        },
        future: {
            title: "Le futur commence maintenant !",
            desc: "Le camp développe l'indépendance, la confiance en soi, et le travail d'équipe."
        },
        parents: {
            label: "Pour les parents",
            title: "Pourquoi choisir Euroclub ?",
            card1Title: "Expérience et Confiance",
            card1Desc: "Plus de 30 ans d'expérience au service de vos enfants.",
            card2Title: "Éducation et Développement",
            card2Desc: "L'anglais est la langue officielle. Nous encourageons l'interaction sociale réelle.",
            card3Title: "Hébergement et Plaisir",
            card3Desc: "Chambres avec salle de bain, parc aquatique, piscine et grandes fêtes.",
            card3Footer: "Un investissement pour l'avenir de votre enfant."
        }
    },
    it: {
        hero: {
            title: "Euroclub",
            subtitle: "Campo estivo internazionale di inglese",
            ageRange: "Per bambini e ragazzi dai 7 ai 18 anni",
            teachers: "Con madrelingua",
            levels: "Per tutti i livelli",
            juniorBtn: "JUNIOR",
            juniorAge: "programma 7-12 anni",
            teenBtn: "TEEN",
            teenAge: "programma 12-17 anni"
        },
        unforgettable: {
            title: "Un'estate indimenticabile!",
            desc: "Incontra nuove persone, pratica l'inglese, fai sport e goditi la spiaggia assolata."
        },
        adventure: {
            title: "Sempre un'avventura!",
            desc: "L'inglese è la lingua ufficiale. Scegli il tuo campo e divertiti con feste incredibili! Aggiungi il pacchetto AVVENTURA per 15 gite pazzesche: rafting, kart, jet ski e altro!",
            btnJunior: "PROGRAMMI 7-12 anni",
            btnTeen: "PROGRAMMI 12-17 anni"
        },
        story: {
            title: "Un campo con una storia",
            desc: "Dal 1991 siamo la casa estiva di molte generazioni di ragazzi. Scopri di più su di noi.",
            btn: "CHI SIAMO"
        },
        future: {
            title: "Il futuro inizia ora!",
            desc: "Il campo estivo sviluppa l'indipendenza, la fiducia, e il lavoro di squadra."
        },
        parents: {
            label: "Per i genitori",
            title: "Perché scegliere Euroclub?",
            card1Title: "Esperienza e Fiducia",
            card1Desc: "Costruiamo fiducia da oltre 30 anni, in un ambiente sicuro e dedicato.",
            card2Title: "Educazione e Crescita",
            card2Desc: "Tutti gli insegnanti sono madrelingua. Incoraggiamo bilanciamento digitale corretto.",
            card3Title: "Alloggio e Divertimento",
            card3Desc: "Camere comode con bagni, parco acquatico gratuito e sport.",
            card3Footer: "Un investimento per il futuro di tuo figlio."
        }
    },
    sl: {
        hero: {
            title: "Euroclub",
            subtitle: "Mednarodni poletni tabor angleščine",
            ageRange: "Za otroke in mladino od 7 do 18 let",
            teachers: "Z rojenimi govorci",
            levels: "Za vse ravni znanja",
            juniorBtn: "JUNIOR",
            juniorAge: "program 7-12 let",
            teenBtn: "TEEN",
            teenAge: "program 13-17 let"
        },
        unforgettable: {
            title: "Poletje, ki si ga boš nepozabno zapomnil!",
            desc: "Spoznaj nove prijatelje! Uporabljaj angleščino, se zabavaj na plaži in uživaj."
        },
        adventure: {
            title: "Vedno avantura!",
            desc: "Angleščina je uradni jezik. Izberi svoj tabor! Si želiš več adrenalina? ADVENTURE PAKET ti ponuja rafting, karting in še veliko več!",
            btnJunior: "PROGRAMI 7-12 let",
            btnTeen: "PROGRAMI 13-17 let"
        },
        story: {
            title: "Tabor z edinstveno zgodbo",
            desc: "Od leta 1991 smo poletni dom za številne generacije. Preberite našo zgodbo.",
            btn: "O NAS"
        },
        future: {
            title: "Prihodnost se začne zdaj!",
            desc: "Razvijamo samostojnost, čustveno inteligenco in timsko delo."
        },
        parents: {
            label: "Za starše",
            title: "Zakaj starši izberejo Euroclub?",
            card1Title: "Izkušnje in zaupanje",
            card1Desc: "Več kot 30 let izkušenj in nasmejanih otrok.",
            card2Title: "Izobraževanje in razvoj",
            card2Desc: "Uradni jezik je angleščina, uporaba mobilnikov pa pametno omejena.",
            card3Title: "Nastanitev in zabava",
            card3Desc: "Udobne sobe s kopalnico, vodni park, bazen in super zabave.",
            card3Footer: "Naložba v prihodnost vašega otroka."
        }
    },
    pl: {
        hero: {
            title: "Euroclub",
            subtitle: "Miedzynarodowy Oboz Jezyka Angielskiego",
            ageRange: "Dla dzieci i mlodziezy od 7 do 18 lat",
            teachers: "Z native speakerami",
            levels: "Dla wszystkich poziomow uwansowania",
            juniorBtn: "JUNIOR",
            juniorAge: "program 7-12 lat",
            teenBtn: "TEEN",
            teenAge: "program 12-17 lat"
        },
        unforgettable: {
            title: "Lato, ktore zapamietasz na zawsze!",
            desc: "Poznaj nowych przyjaciół, mów po angielsku, ciesz się słońcem i plażą!"
        },
        adventure: {
            title: "Zawsze przygoda!",
            desc: "Angielski to język urzędowy. Wybierz swój obóz i baw się! Pakiet PRZYGODA to 15 wspaniałych wycieczek: rafting, gokarty, jet ski i wiele więcej!",
            btnJunior: "PROGRAMY 7-12 lat",
            btnTeen: "PROGRAMY 12-17 lat"
        },
        story: {
            title: "Obóz z unikalną historią",
            desc: "Od 1991 roku jesteśmy letnim domem dla wielu pokoleń. Zobacz naszą historię.",
            btn: "O NAS"
        },
        future: {
            title: "Przyszłość zaczyna się teraz!",
            desc: "Letni obóz rozwija niezależność, inteligencję emocjonalną i pewność siebie."
        },
        parents: {
            label: "Dla rodziców",
            title: "Dlaczego wybrać Euroclub?",
            card1Title: "Doświadczenie i zaufanie",
            card1Desc: "Ponad 30 lat budowania uśmiechów na twarzach dzieci i zaufania rodziców.",
            card2Title: "Edukacja",
            card2Desc: "Uczymy angielskiego w praktyce. Ograniczamy smartfony dla prawdziwych relacji.",
            card3Title: "Zakwaterowanie",
            card3Desc: "Każdy pokój ma własną łazienkę. Plus aquapark i dużo zabawy.",
            card3Footer: "Inwestycja w rozwój Twojego dziecka."
        }
    },
    cs: {
        hero: {
            title: "Euroclub",
            subtitle: "Mezinárodní Letní Tábor Angličtiny",
            ageRange: "Pro děti a mládež od 7 do 18 let",
            teachers: "S rodilými mluvčími",
            levels: "Pro všechny úrovně",
            juniorBtn: "JUNIOR",
            juniorAge: "program 7-12 let",
            teenBtn: "TEEN",
            teenAge: "program 12-17 let"
        },
        unforgettable: {
            title: "Léto, které si budete pamatovat!",
            desc: "Poznejte nové přátele, procvičte angličtinu, sportujte a užívejte pláže."
        },
        adventure: {
            title: "Vždy dobrodružství!",
            desc: "Angličtina je náš úřední jazyk. ADVENTURE BALÍČEK nabízí 15 extra aktivit: rafting, motokáry, potápění a další!",
            btnJunior: "PROGRAMY 7-12 let",
            btnTeen: "PROGRAMY 12-17 let"
        },
        story: {
            title: "Tábor s historií",
            desc: "Od roku 1991 tvoříme přátelství a zážitky pro generace.",
            btn: "O NÁS"
        },
        future: {
            title: "Budoucnost začíná teď!",
            desc: "Letní tábor rozvíjí samostatnost, kritické myšlení a týmovou práci."
        },
        parents: {
            label: "Pro rodiče",
            title: "Proč vybrat Euroclub?",
            card1Title: "Zkušenosti a důvěra",
            card1Desc: "Bezpečný tábor s více než 30 lety zkušeností.",
            card2Title: "Výuka a rozvoj",
            card2Desc: "Chytrý digitální balanc a výuka s rodilými mluvčími.",
            card3Title: "Ubytování a zábava",
            card3Desc: "Pokoje s koupelnou, vodní park, a každodenní aktivity.",
            card3Footer: "Investice do budoucnosti vašeho dítěte."
        }
    }
};

langs.forEach(lang => {
    const file = `messages/${lang}.json`;
    const data = JSON.parse(fs.readFileSync(file, 'utf8'));
    data.Home = translations[lang];
    fs.writeFileSync(file, JSON.stringify(data, null, 2));
});
console.log('Homepage Translations injected.');
