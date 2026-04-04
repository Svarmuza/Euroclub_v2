const fs = require('fs');
const langs = ['en', 'hr', 'de', 'fr', 'it', 'sl', 'pl', 'cs'];

const translations = {
    hr: {
        hero: {
            title: "O Nama",
            subtitle: "35 godina tradicije i osmijeha"
        },
        stats: {
            students: "polaznika, nastavnika i izvornih govornika",
            years: "zabavnih ljeta – od 1991. godine",
            hours: "sati radionice po izboru tjedno",
            resort: "resort samo za djecu i mlade"
        },
        mission: {
            title: "Više od zabave, više od učenja!",
            desc: "Tajna našeg uspjeha je naš tim! Od 1991. godine, Euroclub smatra svojim primarnim ciljem uskladiti svoj organizacijski sustav s potrebama koje izražavaju polaznici kampa i nastavnici. Sviesni smo toga da klasična znanja više nisu dovoljna. Zato kod nas dobivaš ono što ti uistinu treba: kritički razmišljaš, samostalno donosiš odluke, razvijaš samopouzdanje i empatiju."
        },
        details: {
            workshops: { title: "Radionice", desc: "Radionice u našem kampu pokrivaju razne interese – tu se rađaju budući lideri, sportaši, poligloti, umjetnici..." },
            activities: { title: "Aktivnosti", desc: "Svaki trenutak je kvalitetno isplaniran. Izleti, turniri, aquapark, talent shows, kvizovi, igre..." },
            digital: { title: "Digitalni balans", desc: "Mobitele koristimo nakon ručka za čavrljanje s roditeljima, a ostatak vremena uživamo u stvarnom druženju." },
            location: { title: "Sve na jednom mjestu", desc: "Kamp se nalazi odvojeno od naselja. Imamo plažu s aquaparkom i vlastiti bazen - sve unutar kampa!" }
        }
    },
    en: {
        hero: {
            title: "Euroclub – international English language summer camp for children and youth",
            subtitle: "Our mission is to ensure you have a summer to remember!"
        },
        stats: {
            students: "participants, teachers and native speakers",
            years: "fun summers – since 1991",
            hours: "workshop hours of choice per week",
            resort: "resort exclusively for children and youth"
        },
        mission: {
            title: "More than fun, more than learning!",
            desc: "We are aware that traditional knowledge is no longer enough. That's why with us you get what you really need: think critically, make independent decisions, develop confidence and empathy, and work on effective communication and problem solving. And there's no traditional school bell – you're in nature surrounded by friends!"
        },
        details: {
            workshops: { title: "Workshops", desc: "Workshops in our camp cover various interests – this is where future leaders, athletes, polyglots, artists, engineers are born..." },
            activities: { title: "Activities", desc: "Every moment is thoughtfully planned. Excursions, tournaments, aquapark, talent shows, quizzes, games, competitions... – you choose your adventure!" },
            digital: { title: "Digital Balance", desc: "We are aware that Generation Alpha lives technology. So we won't completely deny it to them, but we will limit it in favor of laughter and socializing with friends. We use mobile phones after lunch for chatting with parents and in some fun and creative activities, and the rest of the time they are safe – and we don't miss them at all!" },
            location: { title: "Everything in one place", desc: "The camp is located separately from the settlement, yet has all the facilities that will be fun for you – besides the beach with aquapark, we also have our own pool! This means you have everything you need within the camp, but our experienced staff will always be nearby if you need anything. They will also organize walks and visits to the local market for you." }
        }
    },
    de: {
        hero: {
            title: "Euroclub – internationales Englisch Sprach-Sommercamp für Kinder und Jugendliche",
            subtitle: "Unsere Mission ist es, dir einen unvergesslichen Sommer zu garantieren!"
        },
        stats: {
            students: "Teilnehmer, Lehrer und Muttersprachler",
            years: "spaßige Sommer – seit 1991",
            hours: "Workshop-Stunden nach Wahl pro Woche",
            resort: "Resort ausschließlich für Kinder und Jugendliche"
        },
        mission: {
            title: "Mehr als Spaß, mehr als Lernen!",
            desc: "Wir sind uns bewusst, dass traditionelles Wissen nicht mehr ausreicht. Deshalb bekommst du bei uns, was du wirklich brauchst: kritisch denken, unabhängige Entscheidungen treffen, Selbstvertrauen und Empathie entwickeln und an effektiver Kommunikation und Problemlösung arbeiten. Und es gibt keine traditionelle Schulglocke – du bist in der Natur, umgeben von Freunden!"
        },
        details: {
            workshops: { title: "Workshops", desc: "Workshops in unserem Camp decken verschiedene Interessen ab – hier werden zukünftige Führungskräfte, Sportler, Polyglotten, Künstler, Ingenieure geboren..." },
            activities: { title: "Aktivitäten", desc: "Jeder Moment ist sorgfältig geplant. Ausflüge, Turniere, Aquapark, Talentshows, Quiz, Spiele, Wettbewerbe... – du wählst dein Abenteuer!" },
            digital: { title: "Digitale Balance", desc: "Wir sind uns bewusst, dass die Generation Alpha mit Technologie lebt. Also werden wir sie ihnen nicht vollständig verweigern, aber wir werden sie zugunsten von Lachen und Geselligkeit mit Freunden einschränken. Wir benutzen Handys nach dem Mittagessen zum Chatten mit Eltern und bei einigen lustigen und kreativen Aktivitäten, und den Rest der Zeit sind sie sicher – und wir vermissen sie überhaupt nicht!" },
            location: { title: "Alles an einem Ort", desc: "Das Camp befindet sich separat von der Siedlung, hat aber alle Einrichtungen, die Spaß machen werden – neben dem Strand mit Wasserpark haben wir auch unseren eigenen Pool! Das bedeutet, du hast alles, was du brauchst, innerhalb des Camps, aber unser erfahrenes Personal ist immer in der Nähe, falls du etwas brauchst. Sie organisieren auch Spaziergänge und Besuche auf dem lokalen Markt für dich." }
        }
    },
    fr: {
        hero: {
            title: "Notre Histoire",
            subtitle: "Créer des souvenirs inoubliables et des amitiés internationales depuis 1991."
        },
        stats: {
            students: "campeurs heureux",
            years: "années d'expérience",
            hours: "pays représentés",
            resort: "sûr & sécurisé"
        },
        mission: {
            title: "Plus de 30 ans de tradition",
            desc: "Euroclub a été fondé en 1991 avec une vision simple : créer un lieu où les jeunes du monde entier peuvent se rencontrer, apprendre l'anglais et s'amuser dans un environnement sûr et stimulant. Situé sur la magnifique côte Adriatique à Brodarica, près de Šibenik, nous sommes devenus l'un des plus grands et des plus respectés centres de vacances pour jeunes en Europe centrale. Notre complexe est le seul sur l'Adriatique exclusivement réservé aux enfants et aux adolescents."
        },
        details: {
            workshops: { title: "Éducation", desc: "Nous croyons que l'apprentissage des langues doit être naturel et amusant. Notre méthodologie Oxford, combinée à des locuteurs natifs, permet aux campeurs de pratiquer l'anglais toute la journée." },
            activities: { title: "Sécurité", desc: "La sécurité est notre priorité absolue. Avec une surveillance 24h/24 et 7j/7 par des éducateurs professionnels et un complexe sécurisé, les parents peuvent avoir l'esprit tranquille." },
            digital: { title: "Plus", desc: "Chaque moment est soigneusement planifié pour offrir une expérience inoubliable." },
            location: { title: "Emplacement", desc: "Le camp est situé séparément du village, mais dispose de toutes les installations qui vous amuseront." }
        }
    },
    it: {
        hero: {
            title: "Euroclub – campo estivo internazionale di lingua inglese per bambini e giovani",
            subtitle: "La nostra missione è assicurarti un'estate da ricordare!"
        },
        stats: {
            students: "partecipanti, insegnanti e madrelingua",
            years: "estati divertenti – dal 1991",
            hours: "ore di workshop a scelta settimanali",
            resort: "resort esclusivamente per bambini e giovani"
        },
        mission: {
            title: "Più che divertimento, più che apprendimento!",
            desc: "Siamo consapevoli che le conoscenze tradizionali non sono più sufficienti. Ecco perché con noi ottieni ciò di cui hai veramente bisogno: pensare criticamente, prendere decisioni autonome, sviluppare fiducia in te stesso ed empatia, e lavorare su una comunicazione efficace e sulla risoluzione dei problemi. E non c'è il tradizionale campanello scolastico – sei nella natura circondato da amici!"
        },
        details: {
            workshops: { title: "Workshop", desc: "I workshop nel nostro campo coprono vari interessi – qui nascono futuri leader, atleti, poliglotti, artisti, ingegneri..." },
            activities: { title: "Attività", desc: "Ogni momento è pianificato con attenzione. Escursioni, tornei, parco acquatico, talent show, quiz, giochi, competizioni... – scegli la tua avventura!" },
            digital: { title: "Equilibrio Digitale", desc: "Siamo consapevoli che la Generazione Alpha vive la tecnologia. Quindi non la negheremo completamente, ma la limiteremo a favore di risate e socializzazione con gli amici. Utilizziamo i telefoni cellulari dopo pranzo per chattare con i genitori e in alcune attività divertenti e creative, e il resto del tempo sono al sicuro – e non ci mancano affatto!" },
            location: { title: "Tutto in un unico posto", desc: "Il campo si trova separatamente dall'insediamento, ma ha tutte le strutture che saranno divertenti per te – oltre alla spiaggia con parco acquatico, abbiamo anche la nostra piscina! Questo significa che hai tutto ciò di cui hai bisogno all'interno del campo, ma il nostro personale esperto sarà sempre nelle vicinanze se hai bisogno di qualcosa. Organizzeranno anche passeggiate e visite al mercato locale per te." }
        }
    },
    sl: {
        hero: {
            title: "Euroclub – mednarodni poletni tabor angleškega jezika za otroke in mladino",
            subtitle: "Naša misija je zagotoviti vam poletje, ki se ga boste spominjali!"
        },
        stats: {
            students: "udeležencev, učiteljev in domačih govorcev",
            years: "zabavnih poletij – od leta 1991",
            hours: "ur delavnic po izbiri na teden",
            resort: "letovišče izključno za otroke in mladino"
        },
        mission: {
            title: "Več kot zabava, više kot učenje!",
            desc: "Zavedamo se, da tradicionalno znanje ni več dovolj. Zato pri nas dobiš tisto, kar res potrebuješ: kritično razmišljanje, samostojno odločanje, razvijanje samozavesti in empatije ter delo na učinkoviti komunikaciji in reševanju problemov. In ni tradicionalnega šolskega zvonca – si v naravi, obkrožen s prijatelji!"
        },
        details: {
            workshops: { title: "Delavnice", desc: "Delavnice v našem taboru pokrivajo različne interese – tukaj se rojajo prihodnji voditelji, športniki, poligloti, umetniki, inženirji..." },
            activities: { title: "Aktivnosti", desc: "Vsak trenutek je skrbno načrtovan. Izleti, turnirji, aquapark, talent show, kvizi, igre, tekmovanja... – izbiraš svojo pustolovščino!" },
            digital: { title: "Digitalna ravnovesje", desc: "Zavedamo se, da generacija Alpha živi tehnologijo. Zato je jim ne bomo popolnoma odrekli, ampak jo bomo omejili v korist smeha in druženja s prijatelji. Mobilne telefone uporabljamo po kosilu za klepet s starši in v nekaterih zabavnih in ustvarjalnih aktivnostih, ostali čas pa so varni – in sploh nam ne manjkajo!" },
            location: { title: "Vse na enem mestu", desc: "Tabor se nahaja ločeno od naselja, vendar ima vse objekte, ki vam bodo zabavni – poleg plaže z aquaparkom imamo tudi svoj bazen! To pomeni, da imate vse, kar potrebujete, znotraj tabora, naše izkušeno osebje pa bo vedno v bližini, če boste karkoli potrebovali. Organizirali vam bodo tudi sprehode in obiske lokalne tržnice." }
        }
    },
    pl: {
        hero: {
            title: "Euroclub – międzynarodowy obóz letni języka angielskiego dla dzieci i młodzieży",
            subtitle: "Naszą misją jest zapewnienie Ci lata, które zapamiętasz!"
        },
        stats: {
            students: "uczestników, nauczycieli i native speakerów",
            years: "zabawnych lat – od 1991 roku",
            hours: "godzin warsztatów do wyboru tygodniowo",
            resort: "ośrodek wyłącznie dla dzieci i młodzieży"
        },
        mission: {
            title: "Więcej niż zabawa, więcej niż nauka!",
            desc: "Jesteśmy świadomi, że tradycyjna wiedza już nie wystarczy. Dlatego u nas otrzymujesz to, czego naprawdę potrzebujesz: myśl krytycznie, podejmuj samodzielne decyzje, rozwijaj pewność siebie i empatię oraz pracuj nad efektywną komunikacją i rozwiązywaniem problemów. A nie ma tradycyjnego szkolnego dzwonka – jesteś w naturze w otoczeniu przyjaciół!"
        },
        details: {
            workshops: { title: "Warsztaty", desc: "Warsztaty w naszym obozie obejmują różne zainteresowania – to tutaj rodzą się przyszli liderzy, sportowcy, poligoci, artysci, inżynierowie..." },
            activities: { title: "Aktywności", desc: "Każda chwila jest starannie zaplanowana. Wycieczki, turnieje, aquapark, pokazy talentów, quizy, gry, konkursy... – wybierasz swoją przygodę!" },
            digital: { title: "Równowaga Cyfrowa", desc: "Jesteśmy świadomi, że Generacja Alfa żyje technologią. Więc nie będziemy jej całkowicie odmawiać, ale ograniczymy ją na rzecz śmiechu i towarzystwa przyjaciół. Używamy telefonów komórkowych po obiedzie do rozmów z rodzicami i w niektórych zabawnych i kreatywnych aktywnościach, a resztę czasu są bezpieczne – i wcale ich nie brakuje!" },
            location: { title: "Wszystko w jednym miejscu", desc: "Obóz znajduje się oddzielnie od osiedla, a mimo to posiada wszystkie udogodnienia, które będą dla Ciebie zabawne – oprócz plaży z aquaparkom, mamy również własny basen! Oznacza to, że masz wszystko, czego potrzebujesz w obozie, ale nasz doświadczony personel zawsze będzie w pobliżu, jeśli będziesz czegokolwiek potrzebować. Zorganizują również dla Ciebie spacery i wizyty na lokalnym targu." }
        }
    },
    cs: {
        hero: {
            title: "Euroclub – mezinárodní letní tábor s výukou angličtiny pro děti a mládež",
            subtitle: "Naším posláním je zajistit, abyste měli léto, na které nezapomenete!"
        },
        stats: {
            students: "účastníků, učitelů a rodilých mluvčích",
            years: "zábavných léter – od roku 1991",
            hours: "hodin workshopů na výběr týdně",
            resort: "rezort výhradně pro děti a mládež"
        },
        mission: {
            title: "Více než zábava, více než učení!",
            desc: "Uvědomujeme si, że tradiční znalosti už nestačí. Proto u nás získáte to, co opravdu potřebujete: kriticky myslet, samostatně se rozhodovat, rozvíjet sebevědomí a empatii a pracovat na efektivní komunikaci a řešení problémů. A není tu žádný tradiční školní zvonek – jste v přírodě obklopení přáteli!"
        },
        details: {
            workshops: { title: "Workshopy", desc: "Workshopy v našem táboře pokrývají různé zájmy – zde se rodí budoucí lídři, sportovci, polygloti, umělci, inženýři..." },
            activities: { title: "Aktivity", desc: "Každý okamžik je promyšleně naplánován. Výlety, turnaje, aquapark, talentové show, kvízy, hry, soutěže... – vyberte si své dobrodružství!" },
            digital: { title: "Digitální rovnováha", desc: "Uvědomujeme si, že generace Alpha žije technologiemi. Takže jim je nebudeme úplně upírat, ale omezíme je ve prospěch smíchu a socializace s přáteli. Mobilní telefony používáme po obědě pro chatování s rodiči a v některých zábavných a kreativních aktivitách, a po zbytek času jsou v bezpečí – a vůbec nám nechybí!" },
            location: { title: "Vše na jednom místě", desc: "Tábor se nachází odděleně od osady, přesto má všechny zařízení, která vás budou bavit – kromě pláže s aquaparkem máme také vlastní bazén! To znamená, že máte vše, co potřebujete, v rámci tábora, ale náš zkušený personál bude vždy poblíž, pokud budete něco potřebovat. Pro vás také zorganizují procházky a návštěvy místního trhu." }
        }
    }
};

const defaultData = translations.en;

langs.forEach(lang => {
    const file = `messages/${lang}.json`;
    if (fs.existsSync(file)) {
        const data = JSON.parse(fs.readFileSync(file, 'utf8'));
        data.About = translations[lang] || defaultData;
        fs.writeFileSync(file, JSON.stringify(data, null, 2));
    }
});
console.log('About Translations injected.');

