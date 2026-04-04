import fs from 'fs';
const hr = JSON.parse(fs.readFileSync('messages/hr.json', 'utf-8'));

// ===== Sports =====
hr.Sports = {
  hero: {
    title: 'Engleski Ljetni Sportski Kamp',
    subtitle: 'na Moru za Djecu i Mlade',
    desc: '15+ sportova na kopnu i moru. Kamp s noćenjem, u sobama s WC-om. Brodarica, Šibenik, Dalmacija.',
    cta: 'Rezerviraj mjesto za ljeto 2026'
  },
  features: {
    sports: {
      title: '15+ sportova',
      desc: 'Nogomet, košarka, odbojka, plivanje, vodeni sportovi, atletika i još mnogo toga — na kopnu i na moru!'
    },
    seaLand: {
      title: 'Na kopnu i na moru',
      desc: 'Jedini kamp s vlastitom plažom, bazenom i sportskim terenima — sve na engleskom.'
    },
    safety: {
      title: '24/7 nadzor i sigurnost',
      desc: 'Profesionalni pedagozi, treneri i odgajatelji brinu o svakom djetetu — nonstop.'
    },
    certificate: {
      title: 'Certifikat po završetku',
      desc: 'Svaki polaznik dobiva Euroclub certifikat o završenom sportskom kampu.'
    }
  },
  sports: {
    title: 'Sportovi u programu',
    land: 'Sportovi na kopnu',
    water: 'Vodeni sportovi'
  },
  about: {
    title: 'O Sportskom Kampu',
    desc1: 'Euroclub Sportski Kamp nudi djeci i mladima jedinstveno međunarodno sportsko iskustvo u trajanju od 1-8 tjedana.',
    desc2: 'Program uključuje 20 sati tjedno sportskih aktivnosti tjedno na kopnu i u moru, uz voditelje/trenere koji prilagođavaju aktivnosti svakom polazniku. Slobodno vrijeme ispunjeno je kvizovima, plesom, leadership radionicama, igrama za rast i razvoj – u moru, na kopnu ili na bazenu.',
    desc3: 'Slobodno vrijeme, vježbe, treninzi i natjecanja održavaju se na ENGLESKOM JEZIKU, u društvu prijatelja iz cijelog svijeta i izvornih govornika engleskog jezika. Za razliku od specijaliziranih jednosportskih kampova, mi smo višesportski kamp — kamperi isprobavaju i igraju razne sportove svaki dan.'
  },
  availability: {
    title: 'Dostupni termini 2026',
    desc: 'Program je dostupan u svim terminima za Junior (7-12g) i Teen (13-17g) polaznike',
    cta: 'REZERVIRAJ MJESTO'
  },
  adventure: {
    title: 'Želiš još više akcije?',
    desc: 'Dodaj Adventure paket uz sportski kamp — rafting, go-kart, jet ski, scuba diving, windsurfing, zabavni parkovi i još 15 ludih izleta i aktivnosti!',
    cta: 'Saznaj više o Adventure Paketu'
  }
};

// ===== DigitalAcademy =====
hr.DigitalAcademy = {
  hero: {
    title: 'Digital Academy',
    subtitle: 'Stvori, snimi, objavi. Postani dio medijskog svijeta!',
    cta: 'PRIJAVI SE'
  },
  about: {
    title: 'O Programu',
    desc: 'Digital Academy spaja kreativnost, tehnologiju i zabavu u jedinstven program za mlade koji žele zakoračiti u svijet filma, fotografije, novinarstva i digitalnih medija. Program se odvija na engleskom jeziku, što omogućuje sudionicima da svoje ideje, kreativnost i komunikacijske vještine razvijaju na međunarodnoj razini.'
  },
  features: {
    creativity: {
      title: 'Kreiraj vlastite filmove',
      desc: 'Kreiraj vlastite filmove, snimaj reportaže i postani pravi digitalni storyteller kroz interaktivne #DigitalMedia radionicu.'
    },
    media: {
      title: 'Digitalni mediji',
      desc: 'Tijekom kampa polaznici će stvarati video i foto sadržaj, snimati i montirati vlastite uratke, pisati novinske članke i objave za društvene mreže.'
    },
    tech: {
      title: 'Tehnologija i oprema',
      desc: 'Ako želiš ovo ljeto osmisliti scenarij, producirati ga, režirati, odglumiti i snimiti — imamo opremu i znanje.'
    },
    certificate: {
      title: 'Certifikat',
      desc: 'Po završetku programa, svaki sudionik prima Euroclub certifikat – potvrdu o stečenim znanju i kreativnim postignucima.'
    }
  },
  programsLabel: 'Istražite naše ostale programe:',
  juniorPrograms: 'Junior Programi 7-12g',
  teenPrograms: 'Teen Programi 12-17g'
};

// ===== ArtFashion =====
hr.ArtFashion = {
  hero: {
    title: 'Art & Glamour Academy',
    subtitle: 'Umjetnost, stil i samopouzdanje u jednom!',
    cta: 'PRIJAVI SE'
  },
  about: {
    title: 'O Programu',
    desc: 'Arts & Glamour Academy spaja umjetnost i modu u jedinstveno iskustvo koje mladima omogućuje da istraže svoje talente, razviju osobni stil i izraze sebe na potpuno novi način. Kroz praktične radionice slikanja, crtanja, modeliranja, dizajna, make-upa i stylinga, polaznici uče kako ideje pretvoriti u stvarne umjetničke i modne kreacije.'
  },
  features: {
    makeup: {
      title: 'Makeup & Styling',
      desc: 'Otkrijte svoju kreativnu stranu kroz umjetnost i modu, naučite dizajnirati i kreirati jedinstvene stilove koji izražavaju tvoju ličnost.'
    },
    dance: {
      title: 'Ples & Nastup',
      desc: 'Za sve one koji uživaju u glamuru - modnim pistama, revijama, šminkanju, izrađivanju odjeće, plesu, pjevanju…'
    },
    fashion: {
      title: 'Modni dizajn',
      desc: 'Kroz praktične radionice slikanja, crtanja, modeliranja, dizajna, make-upa i stylinga, polaznici uče kako ideje pretvoriti u stvarne umjetničke i modne kreacije.'
    },
    runway: {
      title: 'Modna pista',
      desc: 'Vrhunac akademije je modna revija i izložba umjetničkih radova – događaj u kojem polaznici predstavljaju vlastite kreacije pred publikom.'
    }
  },
  programsLabel: 'Istražite naše ostale programe:',
  juniorPrograms: 'Junior Programi 7-12g',
  teenPrograms: 'Teen Programi 12-17g'
};

// ===== Leadership =====
hr.Leadership = {
  hero: {
    title: 'Leadership Academy',
    subtitle: 'Današnji teenageri – sutra lideri!',
    cta: 'PRIJAVI SE'
  },
  about: {
    title: 'O Programu',
    desc: 'Leadership & Teen Business Academy osmišljena je za mlade od 12 do 17 godina koji žele razviti vještine vođenja, timskog rada i uspješne komunikacije – kvalitete koje čine razliku u svakom području života. Ovaj jedinstveni program spaja sportske izazove, praktične radionice i motivacijske aktivnosti.'
  },
  features: {
    skills: {
      title: 'Liderske vještine',
      desc: 'Razvij liderske vještine kroz praktične projekte, nauči kako motivirati tim i postani vizionar koji pokreće pozitivne promjene u svojoj zajednici.'
    },
    teamwork: {
      title: 'Timski rad',
      desc: 'Kroz sportske aktivnosti, simulacije i timske projekte, mladi uče važnost suradnje, poštovanja i odgovornosti.'
    },
    projects: {
      title: 'Pravi projekti',
      desc: 'Program traje dva tjedna, sudionici razvijaju kreativno razmišljanje, emocionalnu inteligenciju i vještine rješavanja problema, uz fokus na stvarne životne situacije.'
    },
    future: {
      title: 'Budućnost',
      desc: 'Ovo je kombinacija sportskih i mentalnih aktivnosti za teenagere od 13-17 godina! Nastava se izvodi na engleskom jeziku uz vodstvo izvornih govornika.'
    }
  },
  programsLabel: 'Istražite naše ostale programe:',
  teenPrograms: 'Teen Programi 12-17g'
};

// ===== TeenChallenger =====
hr.TeenChallenger = {
  hero: {
    badge: 'Adrenalinska Avantura',
    title: 'Teen Challenger Academy',
    subtitle: 'Tvoj izazov. Tvoja avantura. Tvoje ljeto!',
    cta: 'Rezerviraj Sada'
  },
  about: {
    title: 'O Programu',
    desc: 'Teen Challenger Academy je dvotjedni kamp pun adrenalina, akcije i uzbuđenja, stvoren za tinejdžere koji žele više od običnog ljeta. Camp spaja zabavu, timske izazove i istraživanje Dalmacije, dok sudionici otkrivaju svoje granice, snagu i samopouzdanje.'
  },
  features: {
    adrenaline: {
      title: 'Adrenalin',
      desc: 'Svaki dan donosi nešto novo – od sportskih turnira i vodenih sportova poput windsurfinga, SUP-a, ronjenja i jet skija.'
    },
    challenges: {
      title: 'Timski izazovi',
      desc: 'Fizički izazovi, timska natjecanja i prepreke koje testiraju izdržljivost i upornost. Sudionici sudjeluju u timskim misijama koje potiču suradnju i kritičko razmišljanje.'
    },
    safety: {
      title: 'Sigurna avantura',
      desc: 'Sve aktivnosti su pod nadzorom certificiranih instruktora koji osiguravaju maksimalnu sigurnost.'
    },
    excitement: {
      title: 'Neprestana uzbuđenja',
      desc: 'Tinejdžeri istražuju Nacionalni park Krka, doživljavaju rafting, karting utrke, dan u zabavnom parku Dalmaland, te avanture na otoku Krapnju.'
    }
  },
  programsLabel: 'Istražite naše ostale programe:',
  teenPrograms: 'Teen Programi 12-17g'
};

// ===== JuniorAnimator =====
hr.JuniorAnimator = {
  hero: {
    title: 'Junior Animator Academy',
    subtitle: 'Nauči biti animator i priključi se animatorskom timu Euroclub-a.',
    cta: 'PRIJAVI SE'
  },
  about: {
    title: 'O Programu',
    desc: 'Junior Animator Academy pruža mladima od 16 godina i više priliku da razviju animatorske vještine kroz bogat programa aktivnosti. Polaznici će učiti organizirati sportske igre, kreativne radionice, te aktivnosti kao što su gluma, pjevanje, ples i upravljanje društvenim mrežama.'
  },
  features: {
    children: {
      title: 'Rad s djecom',
      desc: 'Organiziranje sportsko-zabavnih aktivnosti i natjecanja. Kroz rad s grupama, polaznici stječu iskustvo u vođenju, timskom radu i komunikaciji.'
    },
    tourism: {
      title: 'Turističke vještine',
      desc: 'Stjecanje iskustva za budući rad kao turistički animator. Savladavanje scenskog nastupa i javnog govora.'
    },
    skills: {
      title: 'Profesionalne vještine',
      desc: 'Iskustvo u glumi, pjevanju, plesu i radio programu. Vođenje programa i administriranje društvenih mreža.'
    },
    future: {
      title: 'Buduća karijera',
      desc: 'Mogućnost zaposlenja u Euroclub programima. Nakon završetka programa, polaznici dobivaju Euroclub certifikat.'
    }
  },
  programsLabel: 'Istražite naše ostale programe:',
  teenPrograms: 'Teen Programi 12-17g'
};

// ===== CroatianCamp =====
hr.CroatianCamp = {
  hero: {
    badge: 'Jezik i Kultura',
    title: 'Kamp Hrvatskog Jezika',
    subtitle: 'Program je namijenjen prvenstveno djeci Hrvatske dijaspore, te djeci stranaca koji borave u Hrvatskoj.',
    cta: 'PRIJAVI SE'
  },
  about: {
    title: 'O Programu',
    desc: 'Ljetni kamp hrvatskog jezika u Euroclubu savršena je prilika za djecu iz hrvatske dijaspore i stranu djecu koja borave u Hrvatskoj da aktivno uče hrvatski jezik kroz igru, zabavu i druženje. Program obuhvaća 20 sati nastave tjedno, a vode ga iskusni nastavnici – izvorni govornici hrvatskog jezika. Kroz interaktivne igre, pjesme, kvizove, grupni rad i kreativne radionice, djeca brzo i s lakoćom usvajaju jezik.'
  },
  programsLabel: 'Istražite naše ostale programe:',
  juniorPrograms: 'Junior Programi 7-12g',
  teenPrograms: 'Teen Programi 12-17g'
};

// ===== GermanCamp =====
hr.GermanCamp = {
  hero: {
    badge: 'Jezik i Kultura',
    title: 'Kamp Njemačkog Jezika',
    subtitle: 'Lernen, lachen und erleben!',
    cta: 'PRIJAVI SE'
  },
  about: {
    title: 'O Programu',
    desc: 'Ljetni kamp njemačkog jezika u Euroclubu pruža djeci priliku da poboljšaju svoje znanje njemačkog kroz zabavu, komunikaciju i timski rad. Program uključuje 20 sati nastave tjedno, a vodi ga tim iskusnih nastavnika i izvornih govornika koji učenje pretvaraju u nezaboravno iskustvo. Nastava se temelji na konverzaciji i stvarnim situacijama, uz pomoć interaktivnih igara, projekata i grupnih aktivnosti.'
  },
  programsLabel: 'Istražite naše ostale programe:',
  juniorPrograms: 'Junior Programi 7-12g',
  teenPrograms: 'Teen Programi 12-17g'
};

// ===== ItalianCamp =====
hr.ItalianCamp = {
  hero: {
    badge: 'Jezik i Kultura',
    title: 'Kamp Talijanskog Jezika',
    subtitle: "Impara l'italiano con stile!",
    cta: 'PRIJAVI SE'
  },
  about: {
    title: 'O Programu',
    desc: 'U Ljetnom kampu talijanskog jezika u Euroclubu, djeca otkrivaju ljepotu talijanskog jezika i kulture kroz zabavne, interaktivne i dinamične lekcije na otvorenom. Program uključuje 20 sati nastave koju vode izvorni govornici i iskusni profesori talijanskog jezika, uz naglasak na konverzaciju i svakodnevnu komunikaciju. Učenje se odvija kroz igre, pjesme, scenske improvizacije i timske aktivnosti.'
  },
  programsLabel: 'Istražite naše ostale programe:',
  juniorPrograms: 'Junior Programi 7-12g',
  teenPrograms: 'Teen Programi 12-17g'
};

// ===== FrenchCamp =====
hr.FrenchCamp = {
  hero: {
    badge: 'Jezik i Kultura',
    title: 'Ljetni Kamp Francuskog Jezika',
    subtitle: 'Parlez français en été!',
    cta: 'PRIJAVI SE'
  },
  about: {
    title: 'O Programu',
    desc: 'Ljetni kamp francuskog jezika u Euroclubu pruža djeci i mladima priliku da uče i koriste francuski jezik kroz igru, glazbu i druženje u prekrasnom okruženju uz more. Program uključuje 20 sati nastave na otvorenom, s fokusom na govornu praksu i svakodnevne situacije. Kroz igre u parovima, grupne aktivnosti i zabavne radionice, polaznici uče francuski prirodno i s lakoćom.'
  },
  programsLabel: 'Istražite naše ostale programe:',
  juniorPrograms: 'Junior Programi 7-12g',
  teenPrograms: 'Teen Programi 12-17g'
};

// ===== CookieConsent =====
hr.CookieConsent = {
  title: 'Cijenimo vašu privatnost',
  description: 'Koristimo kolačiće za poboljšanje vašeg iskustva pregledavanja, pružanje personaliziranog sadržaja i analizu našeg prometa.',
  accept: 'Prihvati',
  decline: 'Odbij',
  settings: 'Postavke kolačića',
  necessary: 'Neophodni kolačići',
  necessaryDesc: 'Potrebni za ispravno funkcioniranje web stranice',
  analytics: 'Analitika',
  analyticsDesc: 'Pomažu nam razumjeti kako posjetitelji koriste našu web stranicu',
  marketing: 'Marketing',
  marketingDesc: 'Koriste se za pružanje personaliziranih oglasa',
  saveSettings: 'Spremi postavke',
  viewPreferences: 'Prikaži postavke'
};

// ===== ContactForm =====
hr.ContactForm = {
  title: 'Kontaktirajte nas',
  subtitle: 'Imate pitanje? Rado bismo čuli od vas!',
  form: {
    name: 'Vaše ime',
    email: 'Email adresa',
    subject: 'Predmet',
    message: 'Poruka',
    submit: 'Pošalji poruku'
  },
  success: 'Hvala! Vaša poruka je poslana.',
  error: 'Nešto je pošlo po krivu. Molimo pokušajte ponovo.',
  info: {
    phone: 'Telefon',
    email: 'Email',
    whatsapp: 'WhatsApp'
  }
};

// ===== NotFound =====
hr.NotFound = {
  title: 'Stranica nije pronađena',
  subtitle: 'Stranica koju tražite ne postoji ili je premještena.',
  button: 'Idi na početnu stranicu'
};

// Write back
fs.writeFileSync('messages/hr.json', JSON.stringify(hr, null, 2), 'utf-8');
console.log('Added all remaining namespaces!');
console.log('Total namespaces:', Object.keys(hr).length);
console.log('Namespaces:', Object.keys(hr).join(', '));
