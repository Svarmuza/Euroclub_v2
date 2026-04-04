const fs = require('fs');
const langs = ['en', 'hr', 'de', 'fr', 'it', 'sl', 'pl', 'cs'];

const hrData = {
    junior: {
        hero: {
            title: "Junior Programi 7-12g",
            subtitle: "Raznovrsni programi prilagođeni djeci od 7 do 12 godina"
        },
        categories: {
            languages: "Učenje jezika",
            sports: "Sport",
            skills: "Vještine budućnosti"
        },
        programs: {
            "oxford": { title: "Oxford English Academy", desc: "Odabir najvažnijeg svjetskog jezika za ljetno učenje je sigurno ulaganje u budućnost vašeg djeteta. Imamo programe za sve uzraste i sve razine znanja!", cta: "Kliknite za više informacija" },
            "croatian": { title: "Learn Croatian", desc: "Ako dolazite iz inozemstva i želite da se vaše dijete pobliže upozna s hrvatskim jezikom, ovo je idealna radionica.", cta: "Kliknite za više informacija" },
            "german": { title: "Learn German", desc: "Iako će neki reći da je ovaj jezik težak, mi dokazujemo suprotno – i to kroz brojne igre, pjesme, zabavne aktivnosti i puuuno komunikacije!", cta: "Kliknite za više informacija" },
            "italian": { title: "Learn Italian", desc: "Ovaj pjevni susjedni jezik idealan je za vaše mališane!", cta: "Kliknite za više informacija" },
            "french": { title: "Learn French", desc: "Najbolji način za učenje jezika, pa čak i onog kompleksnijeg kao što je to francuski, jest taj da na njemu komuniciramo u poticajnoj atmosferi!", cta: "Kliknite za više informacija" },
            "sports": { title: "Sports Academy", desc: "#ACTIVEsummer i na moru i na kopnu! Na ovoj radionici prolazimo kroz razne sportove, od osnova do utakmica i turnira.", cta: "Kliknite za više informacija" },
            "digital": { title: "Digital Academy", desc: "Digital Academy je program koji povezuje kreativnost i tehnologiju, omogućujući mladima da razviju medijske vještine.", cta: "Kliknite za više informacija" },
            "challenger": { title: "Challenger program", desc: "Dvotjedni kamp pun adrenalina, akcije i uzbuđenja za mlade pustolovce koji žele više od običnog ljeta.", cta: "Kliknite za više informacija" },
            "arts": { title: "Arts & Glamour", desc: "Ova glamurozna radionica idealna je za sve male misice koje žele naučiti više o šminkanju, plesu, dizajnu odjeće, pjevanju i šetanju modnim pistama!", cta: "Kliknite za više informacija" }
        }
    },
    teen: {
        hero: {
            title: "Teen Programi 12-17g",
            subtitle: "Izazovni i kreativni programi prilagođeni tinejdžerima"
        },
        categories: {
            languages: "Učenje jezika",
            sports: "Sport",
            skills: "Vještine budućnosti"
        },
        programs: {
            "oxford": { title: "Oxford English Academy", desc: "Odabir najvažnijeg svjetskog jezika za ljetno učenje je sigurno ulaganje u budućnost vašeg djeteta.", cta: "Kliknite za više informacija" },
            "croatian": { title: "Learn Croatian", desc: "Ako dolazite iz inozemstva i želite da se vaše dijete pobliže upozna s hrvatskim jezikom.", cta: "Kliknite za više informacija" },
            "german": { title: "Learn German", desc: "Iako će neki reći da je ovaj jezik težak, mi dokazujemo suprotno!", cta: "Kliknite za više informacija" },
            "italian": { title: "Learn Italian", desc: "Ovaj pjevni susjedni jezik idealan je za tinejdžere!", cta: "Kliknite za više informacija" },
            "french": { title: "Learn French", desc: "Najbolji način za učenje jezika u poticajnoj atmosferi.", cta: "Kliknite za više informacija" },
            "sports": { title: "Sports Academy", desc: "#ACTIVEsummer i na moru i na kopnu!", cta: "Kliknite za više informacija" },
            "digital": { title: "Digital Academy", desc: "Program koji povezuje kreativnost i tehnologiju.", cta: "Kliknite za više informacija" },
            "challenger": { title: "Challenger program", desc: "Dvotjedni kamp pun adrenalina i akcije.", cta: "Kliknite za više informacija" },
            "leadership": { title: "Leadership & Teen Business", desc: "Program za razvoj liderskih vještina kroz praktične vježbe i projekte.", cta: "Kliknite za više informacija" },
            "animator": { title: "Junior Counselor", desc: "Idealno za mlade ljude koji žele naučiti osnove rada s djecom.", cta: "Kliknite za više informacija" },
            "arts": { title: "Arts & Glamour", desc: "Glamurozna radionica za one koji vole modu i dizajn.", cta: "Kliknite za više informacija" }
        }
    }
};

const enData = {
    junior: {
        hero: { title: "Junior Programs 7-12y", subtitle: "Diverse programs tailored for children from 7 to 12 years old" },
        categories: { languages: "Language Learning", sports: "Sports", skills: "Future Skills" },
        programs: {
            "oxford": { title: "Oxford English Academy", desc: "Choosing the world's most important language for summer learning is a safe investment in your child's future.", cta: "Click for more info" },
            "croatian": { title: "Learn Croatian", desc: "Ideal for foreign students to get basic knowledge and conversational skills in Croatian.", cta: "Click for more info" },
            "german": { title: "Learn German", desc: "Fun way to learn German through games and communication.", cta: "Click for more info" },
            "italian": { title: "Learn Italian", desc: "Melodic language learning for kids.", cta: "Click for more info" },
            "french": { title: "Learn French", desc: "Communicate in French in an encouraging atmosphere.", cta: "Click for more info" },
            "sports": { title: "Sports Academy", desc: "Active summer for kids on land and sea.", cta: "Click for more info" },
            "digital": { title: "Digital Academy", desc: "Combining creativity and technology for youth.", cta: "Click for more info" },
            "challenger": { title: "Challenger program", desc: "Adrenaline and action for young adventurers.", cta: "Click for more info" },
            "arts": { title: "Arts & Glamour", desc: "Creativity, fashion and dance for young missees.", cta: "Click for more info" }
        }
    },
    teen: {
        hero: { title: "Teen Programs 12-17y", subtitle: "Challenging and creative programs tailored for teenagers" },
        categories: { languages: "Language Learning", sports: "Sports", skills: "Future Skills" },
        programs: {
            "oxford": { title: "Oxford English Academy", desc: "Master the global language this summer.", cta: "Click for more info" },
            "croatian": { title: "Learn Croatian", desc: "Specifically designed for international teens.", cta: "Click for more info" },
            "german": { title: "Learn German", desc: "Boost your German skills in Croatia.", cta: "Click for more info" },
            "italian": { title: "Learn Italian", desc: "Italian language for older students.", cta: "Click for more info" },
            "french": { title: "Learn French", desc: "Speak French with confidence.", cta: "Click for more info" },
            "sports": { title: "Sports Academy", desc: "High energy sports camp.", cta: "Click for more info" },
            "digital": { title: "Digital Academy", desc: "Modern techniques and digital creations.", cta: "Click for more info" },
            "challenger": { title: "Challenger program", desc: "The ultimate adventure for teens.", cta: "Click for more info" },
            "leadership": { title: "Leadership & Teen Business", desc: "Develop skills for your future career.", cta: "Click for more info" },
            "animator": { title: "Junior Counselor", desc: "Learn how to be a leader and work with kids.", cta: "Click for more info" },
            "arts": { title: "Arts & Glamour", desc: "Fashion and creative arts for teens.", cta: "Click for more info" }
        }
    }
};

const defaultData = enData;

langs.forEach(lang => {
    const file = `messages/${lang}.json`;
    const data = JSON.parse(fs.readFileSync(file, 'utf8'));

    if (lang === 'hr') {
        data.Programs = hrData;
    } else if (lang === 'en') {
        data.Programs = enData;
    } else {
        data.Programs = JSON.parse(JSON.stringify(defaultData));
    }

    fs.writeFileSync(file, JSON.stringify(data, null, 2));
});
console.log('Comprehensive Programs Translations injected.');
