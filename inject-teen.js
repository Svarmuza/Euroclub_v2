const fs = require('fs');
const langs = ['en', 'hr', 'de', 'fr', 'it', 'sl', 'pl', 'cs'];

const teenData = {
    hr: {
        title: "EUROCLUB TEEN SUMMER CAMP",
        subtitle: "Ljeto koje mijenja sve!",
        description: "Znaš ono kad ti netko kaže da mu je bilo najbolje ljeto ikad? Sada je red na tebi da to doživiš – i to upravo u Euroclubu u Šibeniku! Nema dosade uz ekipu iz cijelog svijeta i raspored pun akcije koji te svaki dan iznenadi nečim novim!",
        features: {
            english: {
                title: "Engleski kroz iskustvo, ne iz knjiga.",
                desc: "Engleski se ne uči iz knjiga – nego kroz igru, razgovor i timski rad. Djeca usvajaju jezik dok se zabavljaju i sudjeluju u brojnim aktivnostima.",
                active: {
                    title: "Aktivni engleski:",
                    desc: "Cijeli program se odvija na engleskom jeziku. To nije školska nastava, već prirodno usvajanje jezika kroz razgovor s vršnjacima i nastavnicima-izvornim govornicima."
                },
                nativeSpeakers: {
                    title: "Izvorni govornici:",
                    desc: "Naši voditelji su izvorni govornici engleskog jezika, što ti daje jedinstvenu priliku za usvajanje autentičnog izgovora i sigurnost u komunikaciji – i to u opuštenoj atmosferi."
                }
            },
            friendships: {
                title: "Ekipa iz cijelog svijeta i dnevna doza adrenalina",
                lifeLong: {
                    title: "Prijateljstva za život",
                    desc: "Upoznat ćeš tinejdžere iz svih krajeva svijeta. Kroz timske igre, sportske izazove i večernja druženja, stvaraš povezanosti i prijateljstva koja traju."
                },
                action: {
                    title: "Raspored pun akcije",
                    desc: "Kod nas nema mjesta dosadi. Svaki dan je ispunjen sportskim turnirima, kreativnim radionicama, kvizovima i novim iskustvima. Smijeh i izazovi su zagarantirani."
                }
            },
            digitalBalance: {
                title: "Pametni digitalni balans",
                desc1: "Razumijemo potrebu za povezanošću, ali u Euroclubu vjerujemo u balans. Mobiteli su dostupni maksimalno 90 minuta dnevno – dovoljno za ostati u kontaktu, ali ne toliko da propustiš pravu zabavu!",
                desc2: "Ovako imaš priliku stvarno upoznati nove prijatelje, biti dio tima i živjeti u trenutku – bez stalnog pritiska društvenih mreža."
            },
            adventure: {
                title: "Adventure paket",
                desc: "Dodaj još više akcije! Rafting, jet ski, scuba diving, windsurfing, go-kart i zabavni parkovi – turbo doživljaji koje nećeš zaboraviti!",
                button: "Više o Adventure paketu"
            }
        },
        cta: {
            title: "Spreman/na si za najbolje ljeto tvog života?",
            subtitle: "Pridruži se tinejdžerima iz cijelog svijeta i stvori uspomene koje traju zauvijek!",
            button: "PRIJAVI SE SADA"
        }
    },
    en: {
        title: "EUROCLUB TEEN SUMMER CAMP",
        subtitle: "The summer that changes everything!",
        description: "You know when someone tells you it was their best summer ever? Now it's your turn to experience it – right here at Euroclub in Šibenik! There's no boredom with a crew from all over the world and an action-packed schedule that surprises you with something new every day!",
        features: {
            english: {
                title: "English through experience, not from books.",
                desc: "English isn't learned from books – but through play, conversation, and teamwork. Teens acquire the language while having fun and participating in numerous activities.",
                active: {
                    title: "Active English:",
                    desc: "The entire program is conducted in English. It's not school lessons, but natural language acquisition through conversation with peers and native-speaker teachers."
                },
                nativeSpeakers: {
                    title: "Native Speakers:",
                    desc: "Our leaders are native English speakers, giving you a unique opportunity to adopt authentic pronunciation and confidence in communication – all in a relaxed atmosphere."
                }
            },
            friendships: {
                title: "Crew from all over the world and a daily dose of adrenaline",
                lifeLong: {
                    title: "Friendships for Life",
                    desc: "You'll meet teenagers from all corners of the world. Through team games, sports challenges, and evening hangouts, you build connections and friendships that last."
                },
                action: {
                    title: "Action-Packed Schedule",
                    desc: "There's no room for boredom here. Every day is filled with sports tournaments, creative workshops, quizzes, and new experiences. Laughter and challenges are guaranteed."
                }
            },
            digitalBalance: {
                title: "Smart Digital Balance",
                desc1: "We understand the need for connection, but at Euroclub we believe in balance. Phones are available for a maximum of 90 minutes a day – enough to stay in touch, but not so much that you miss the real fun!",
                desc2: "This gives you the chance to truly meet new friends, be part of a team, and live in the moment – without the constant pressure of social media."
            },
            adventure: {
                title: "Adventure Package",
                desc: "Add even more action! Rafting, jet-skiing, scuba diving, windsurfing, go-karting, and amusement parks – turbo experiences you won't forget!",
                button: "More about Adventure Package"
            }
        },
        cta: {
            title: "Are you ready for the best summer of your life?",
            subtitle: "Join teenagers from all over the world and create memories that last forever!",
            button: "REGISTER NOW"
        }
    }
};

// Fill other languages with English as fallback
['de', 'fr', 'it', 'sl', 'pl', 'cs'].forEach(lang => {
    teenData[lang] = teenData.en;
});

langs.forEach(lang => {
    const file = `messages/${lang}.json`;
    if (fs.existsSync(file)) {
        const data = JSON.parse(fs.readFileSync(file, 'utf8'));
        data.TeenCamp = teenData[lang];
        fs.writeFileSync(file, JSON.stringify(data, null, 2));
    }
});
console.log('Teen Camp Translations injected.');
