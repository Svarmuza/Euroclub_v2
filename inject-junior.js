const fs = require('fs');
const langs = ['en', 'hr', 'de', 'fr', 'it', 'sl', 'pl', 'cs'];

const juniorData = {
    hr: {
        title: "Euroclub Junior Kamp",
        subtitle: "Savršeno ljeto za vaše dijete!",
        description: "Tražite mjesto gdje će vaše dijete provesti ljeto ispunjeno zabavom, učenjem i novim iskustvima?\n\nU Euroclubu stvaramo priliku za rast i sigurno okruženje za stjecanje vještina koje će im koristiti cijeli život!",
        features: {
            english: {
                title: "Engleski jezik kroz igru – bez pritiska!",
                nativeSpeakers: {
                    title: "Rad s izvornim govornicima:",
                    desc: "Vaše će dijete učiti od izvornih govornika engleskog jezika kroz interaktivne radionice. To je jedinstvena prilika za usvajanje autentičnog izgovora i stjecanje samopouzdanja u komunikaciji!"
                },
                playBased: "Engleski se ne uči iz knjiga – nego kroz igru, razgovor i timski rad. Djeca usvajaju jezik dok se zabavljaju i sudjeluju u brojnim aktivnostima."
            },
            friendships: {
                title: "Nova prijateljstva i bogat program aktivnosti",
                international: {
                    title: "Međunarodno okruženje:",
                    desc: "Djeca svakodnevno upoznaju i surađuju s vršnjacima iz cijelog svijeta. Kroz timske igre, kvizove i kreativne radionice djeca se povezuju i spontano stvaraju veze koja nadilaze granice."
                },
                confidence: {
                    title: "Samopouzdanje i samostalnost:",
                    desc: "Vaše se dijete vraća kući proširenih pogleda na svijet!"
                }
            },
            digitalBalance: {
                title: "Digitalna ravnoteža: isključite ekrane, uključite doživljaje!",
                focus: {
                    title: "Fokus na stvarne trenutke:",
                    desc: "Mobiteli se koriste samo u dogovoreno vrijeme. Manje ekrana znači više smijeha, druženja i stvaranja nezaboravnih trenutaka."
                },
                activities: {
                    title: "Sport, kreativnost i lice-u-lice:",
                    desc: "Umjesto ekrana, dani su ispunjeni sportskim igrama, kreativnim radionicama i razgovorima."
                }
            },
            adventure: {
                title: "Adventure paket",
                desc: "Za djecu željnu još više uzbuđenja tu je Adventure paket! Uključuje dodatne izlete, istraživanja i posebne avanture koje upotpunjuju ljetno iskustvo. Sve je već uključeno u cijenu i pruža uspomene koje se dugo pamte.",
                safety: "Budite sigurni: Vaše dijete provodi ljeto kvalitetno i smisleno – učeći, družeći se i zabavljajući se u sigurnom i poticajnom okruženju.",
                button: "Više o Adventure paketu"
            }
        },
        cta: {
            title: "Vraća se kući bogatije za znanje, iskustva i uspomene koje će pamtiti cijeli život!",
            button: "Rezervirajte sada"
        }
    },
    en: {
        title: "Euroclub Junior Camp",
        subtitle: "Perfect summer for your child!",
        description: "Looking for a place where your child will spend a summer filled with fun, learning, and new experiences?\n\nAt Euroclub, we create an opportunity for growth and a safe environment for acquiring skills that will benefit them for a lifetime!",
        features: {
            english: {
                title: "English Through Play - Stress-Free!",
                nativeSpeakers: {
                    title: "Work with Native Speakers:",
                    desc: "Your child will learn from native English speakers through interactive workshops. It's a unique opportunity to adopt authentic pronunciation and gain confidence in communication!"
                },
                playBased: "English isn't learned from books - it's learned through play, conversation, and teamwork. Children acquire the language while having fun and participating in numerous activities."
            },
            friendships: {
                title: "New Friendships and a Rich Program of Activities",
                international: {
                    title: "International Environment:",
                    desc: "Children meet and collaborate with peers from all over the world every day. Through team games, quizzes, and creative workshops, children connect and spontaneously create bonds that transcend borders."
                },
                confidence: {
                    title: "Confidence and Independence:",
                    desc: "Your child returns home with an expanded worldview!"
                }
            },
            digitalBalance: {
                title: "Digital Balance: Swapping Screens for Experiences!",
                focus: {
                    title: "Focus on Real Moments:",
                    desc: "Cell phones are used only at agreed-upon times. Less screen time means more laughter, socializing, and creating unforgettable moments."
                },
                activities: {
                    title: "Sports, Creativity, and Face-to-Face:",
                    desc: "Instead of screens, days are filled with sports games, creative workshops, and conversations."
                }
            },
            adventure: {
                title: "Adventure Package",
                desc: "For children seeking even more excitement, there's the Adventure package! It includes additional excursions, explorations, and special adventures that complete the summer experience. Everything is already included in the price and provides memories that last a long time.",
                safety: "Rest assured: Your child spends the summer qualitatively and meaningfully – learning, socializing, and having fun in a safe and supportive environment.",
                button: "More about Adventure Package"
            }
        },
        cta: {
            title: "Returning home richer in knowledge, experience, and memories that will last a lifetime!",
            button: "Book Now"
        }
    }
};

// Fill other languages with English as fallback
['de', 'fr', 'it', 'sl', 'pl', 'cs'].forEach(lang => {
    juniorData[lang] = juniorData.en;
});

langs.forEach(lang => {
    const file = `messages/${lang}.json`;
    if (fs.existsSync(file)) {
        const data = JSON.parse(fs.readFileSync(file, 'utf8'));
        data.JuniorCamp = juniorData[lang];
        fs.writeFileSync(file, JSON.stringify(data, null, 2));
    }
});
console.log('Junior Camp Translations injected.');
