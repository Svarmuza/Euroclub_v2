import Image from 'next/image';
import { Link } from '@/i18n/routing';
import {
    ArrowDown,
    ArrowRight,
    BookOpen,
    Bus,
    CalendarDays,
    Globe2,
    MapPin,
    Play,
    ShieldCheck,
    Sparkles,
    Star,
    Sun,
    Trophy,
    Users,
    Utensils,
    Waves,
    Zap,
} from 'lucide-react';

const programCards = [
    {
        title: 'OXFORD\nENGLISH ACADEMY',
        tagline: 'Learn. Speak. Connect.',
        description: 'Engleski s izvornim govornicima, međunarodni prijatelji i pravo ljeto na moru.',
        cta: 'ISTRAŽI ENGLISH CAMP',
        href: '/oxford-english' as const,
        image: '/uploads/programi/oxford/euroclub_oxford_english.webp',
        icon: BookOpen,
        accent: 'sea',
    },
    {
        title: 'SPORT ACADEMY',
        tagline: 'Play. Compete. Achieve.',
        description: 'Sport, natjecanja, timski duh, more, akcija i međunarodna ekipa.',
        cta: 'ISTRAŽI SPORT CAMP',
        href: '/sports' as const,
        image: '/uploads/programi/sport/euroclub_sport_1800.webp',
        icon: Trophy,
        accent: 'pine',
    },
    {
        title: 'ACADEMY X',
        tagline: 'Think. Create. Challenge.',
        description: 'Film • Digital • Creative • Leadership\nOne Academy. A different challenge every day.',
        cta: 'OTKRIJ ACADEMY X',
        href: '/digital-academy' as const,
        image: '/uploads/programi/digital academy/euroclub_digital_academy.webp',
        icon: Zap,
        accent: 'sunset',
    },
] as const;

const gallery = [
    { label: 'BEACH', image: '/uploads/naslovnica/galerija/optimized/plaza06.webp' },
    { label: 'POOL', image: '/uploads/naslovnica/galerija/optimized/euroclub_smjestaj02.webp' },
    { label: 'PARTIES', image: '/uploads/naslovnica/galerija/optimized/disco01.webp' },
    { label: 'SPORTS', image: '/uploads/naslovnica/galerija/euroclub_sport_1800.webp' },
    { label: 'CREATE', image: '/uploads/naslovnica/galerija/optimized/junior_animator.webp' },
    { label: 'WATER FUN', image: '/uploads/naslovnica/galerija/optimized/jetski.webp' },
    { label: 'TRIPS', image: '/uploads/naslovnica/brodarica_euroclub.webp' },
    { label: 'FRIENDS', image: '/uploads/naslovnica/euroclub_friends.webp' },
] as const;

const parentReasons = [
    {
        title: 'SIGURNOST',
        lead: '24/7 nadzor',
        text: 'Stručno osoblje i organizirani program.',
        icon: ShieldCheck,
        color: 'text-sea',
        bg: 'bg-sea/10',
    },
    {
        title: 'MEĐUNARODNO ISKUSTVO',
        lead: 'Djeca iz cijelog svijeta',
        text: 'Engleski postaje dio svakodnevnog života.',
        icon: Globe2,
        color: 'text-sea-dark',
        bg: 'bg-sea/10',
    },
    {
        title: 'SAMOSTALNOST',
        lead: 'Više od ljetovanja',
        text: 'Samopouzdanje, komunikacija, odgovornost i prijateljstva.',
        icon: Sparkles,
        color: 'text-pine-dark',
        bg: 'bg-pine/10',
    },
    {
        title: 'SVE NA JEDNOM MJESTU',
        lead: 'More • bazen • sport • aktivnosti',
        text: 'Smještaj, prehrana, nastava i zabava u sigurnom okruženju.',
        icon: Sun,
        color: 'text-sun-dark',
        bg: 'bg-sun/15',
    },
] as const;

const testimonials = [
    {
        quote: '“Best summer ever!”',
        name: 'Emma, 14',
        country: '🇬🇧 UK',
        image: '/uploads/naslovnica/euroclub_friendship1.webp',
    },
    {
        quote: '“I made friends from all over the world.”',
        name: 'Lucas, 15',
        country: '🇩🇪 Germany',
        image: '/uploads/12-17/euroclub_teen_ljetni_kamp01.jpg',
    },
    {
        quote: '“Vratila se kući i odmah pitala može li dogodine ostati dva tjedna.”',
        name: 'Mama',
        country: '🇭🇷 Hrvatska',
        image: '/uploads/naslovnica/dica.webp',
    },
    {
        quote: '“I improved my English and gained so much confidence.”',
        name: 'Sofia, 16',
        country: '🇮🇹 Italy',
        image: '/uploads/naslovnica/euroclub_friends.webp',
    },
] as const;

const practicalInfo = [
    { title: '1–6 tjedana', text: 'Fleksibilni termini', icon: CalendarDays },
    { title: 'Puni pansion', text: 'Doručak, ručak, večera', icon: Utensils },
    { title: 'Transfer', text: 'Organizirani dolasci', icon: Bus },
    { title: 'Vodice, Hrvatska', text: 'Prekrasna lokacija na moru', icon: MapPin },
    { title: 'Međunarodno okruženje', text: 'Djeca iz 35+ zemalja', icon: Users },
] as const;

const accentStyles = {
    sea: {
        icon: 'bg-sea text-white',
        tagline: 'text-sea-dark',
        button: 'bg-sea hover:bg-sea-dark',
    },
    pine: {
        icon: 'bg-sun text-sea-dark',
        tagline: 'text-pine-dark',
        button: 'bg-pine hover:bg-pine-dark',
    },
    sunset: {
        icon: 'bg-sunset text-white',
        tagline: 'text-sunset-dark',
        button: 'bg-sunset hover:bg-sunset-dark',
    },
} as const;

function HandUnderline({ className = '' }: { className?: string }) {
    return <span aria-hidden="true" className={`block h-1.5 rounded-full bg-sun -rotate-1 ${className}`} />;
}

export default function HomeV5() {
    return (
        <div className="min-w-[1180px] overflow-hidden bg-white text-sea-dark">
            <section className="relative h-[680px] overflow-hidden bg-sea-dark">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover"
                >
                    <source src="/uploads/naslovnica/video_2025_naslovnica.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-r from-sea-dark/95 via-sea-dark/65 to-sea-dark/5" />
                <div className="absolute inset-0 bg-gradient-to-t from-sea-dark/80 via-transparent to-transparent" />

                <div className="relative mx-auto flex h-full max-w-[1440px] flex-col px-14 pb-6 pt-14 text-white">
                    <div className="max-w-[760px]">
                        <p className="mb-3 text-xl font-extrabold tracking-wide">EUROCLUB SUMMER CAMP 2027</p>
                        <h1 className="max-w-[730px] text-[76px] font-black italic leading-[0.92] tracking-[-0.045em] drop-shadow-lg">
                            Ljeto koje ćeš
                            <br />
                            pamtiti zauvijek.
                        </h1>
                        <HandUnderline className="ml-12 mt-4 w-80" />

                        <p className="mt-6 text-xl font-bold leading-tight drop-shadow-md">
                            Međunarodni ljetni kamp za djecu i tinejdžere
                            <br />
                            7–18 godina u Vodicama, Hrvatska
                        </p>

                        <div className="mt-5 flex items-center gap-5 text-[17px] font-bold">
                            <span>🇬🇧 English</span>
                            <span className="flex items-center gap-1.5"><Trophy className="h-5 w-5 text-sun" /> Sport</span>
                            <span className="flex items-center gap-1.5"><Zap className="h-5 w-5 text-sun" /> Academy X</span>
                            <span className="flex items-center gap-1.5"><Waves className="h-5 w-5 text-sea" /> Sea</span>
                            <span className="flex items-center gap-1.5"><Users className="h-5 w-5" /> International Friends</span>
                        </div>

                        <div className="mt-7 flex gap-5">
                            <Link
                                href="/programs"
                                className="inline-flex items-center gap-2 rounded-lg bg-sunset px-7 py-4 text-base font-black text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-sunset-dark"
                            >
                                ISTRAŽI KAMPOVE <ArrowDown className="h-5 w-5" />
                            </Link>
                            <Link
                                href="/prices"
                                className="inline-flex items-center rounded-lg bg-sea px-7 py-4 text-base font-black text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-sea-dark"
                            >
                                TERMINI I CIJENE
                            </Link>
                        </div>
                    </div>

                    <p className="absolute right-16 top-14 rotate-[-8deg] text-right text-3xl font-black italic leading-tight text-sea-dark drop-shadow-[0_2px_1px_rgba(255,255,255,0.8)]">
                        See you
                        <br />
                        in Vodice! ♡
                    </p>

                    <div className="mt-auto grid max-w-[820px] grid-cols-4 gap-6 border-t border-white/30 pt-5">
                        {[
                            [Star, '35+', 'godina iskustva'],
                            [Users, '135.000+', 'polaznika'],
                            [Globe2, '35+', 'zemalja'],
                            [ShieldCheck, '24/7', 'nadzor i sigurnost'],
                        ].map(([Icon, value, label]) => {
                            const HeroIcon = Icon as typeof Star;
                            return (
                                <div key={String(label)} className="flex items-center gap-3">
                                    <HeroIcon className="h-8 w-8 shrink-0 fill-white/15" />
                                    <div>
                                        <p className="text-2xl font-black leading-none">{String(value)}</p>
                                        <p className="mt-1 text-xs font-medium">{String(label)}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="bg-white px-10 py-14">
                <div className="mx-auto max-w-[1440px]">
                    <div className="mb-9 flex items-end justify-between">
                        <div>
                            <h2 className="text-5xl font-black italic tracking-tight text-sea-dark">CHOOSE YOUR SUMMER</h2>
                            <HandUnderline className="mt-2 w-[520px]" />
                        </div>
                        <div className="flex items-center gap-4 pb-1 text-right">
                            <p className="text-base font-medium leading-tight text-sea-dark/80">
                                Tri jedinstvena kampa.
                                <br />
                                Isto nezaboravno iskustvo.
                            </p>
                            <Sun className="h-16 w-16 text-sun" strokeWidth={1.8} />
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-5">
                        {programCards.map((program) => {
                            const Icon = program.icon;
                            const styles = accentStyles[program.accent];
                            return (
                                <article key={program.title} className="group overflow-hidden rounded-2xl border border-sea/10 bg-white shadow-[0_8px_30px_rgba(3,105,161,0.12)]">
                                    <div className="relative h-60 overflow-hidden">
                                        <Image src={program.image} alt="" fill sizes="33vw" className="object-cover transition duration-700 group-hover:scale-105" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-sea-dark/55 via-transparent to-transparent" />
                                    </div>
                                    <div className="relative px-8 pb-8 pt-10 text-center">
                                        <div className={`absolute left-8 top-0 flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full border-[5px] border-white shadow-lg ${styles.icon}`}>
                                            <Icon className="h-8 w-8" />
                                        </div>
                                        <h3 className="whitespace-pre-line text-3xl font-black leading-[0.9] tracking-tight text-sea-dark">{program.title}</h3>
                                        <p className={`mt-2 text-xl font-black italic ${styles.tagline}`}>{program.tagline}</p>
                                        <p className="mx-auto mt-5 min-h-16 max-w-sm whitespace-pre-line text-left text-[15px] font-medium leading-snug text-sea-dark/85">{program.description}</p>
                                        <Link href={program.href} className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg px-5 py-3.5 text-sm font-black text-white transition ${styles.button}`}>
                                            {program.cta} <ArrowRight className="h-4 w-4" />
                                        </Link>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="bg-sea/10 px-10 py-9">
                <div className="mx-auto grid max-w-[1440px] grid-cols-[300px_1fr] gap-4">
                    <div className="flex flex-col justify-center px-6">
                        <h2 className="text-5xl font-black italic leading-[0.98] tracking-tight text-sea-dark">
                            Ovdje
                            <br />
                            nema
                            <br />
                            dosadnog
                            <br />
                            ljeta. <span className="text-sunset">♡</span>
                        </h2>
                        <HandUnderline className="ml-8 mt-3 w-32" />
                        <Link href="/daily-schedule" className="mt-8 inline-flex items-center gap-3 text-sm font-black text-sea-dark">
                            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sea-dark text-white"><Play className="ml-0.5 h-5 w-5 fill-white" /></span>
                            <span>POGLEDAJ KAKO<br />IZGLEDA JEDAN DAN <ArrowRight className="ml-1 inline h-4 w-4" /></span>
                        </Link>
                    </div>

                    <div className="grid h-[510px] grid-cols-4 grid-rows-2 gap-2">
                        {gallery.map((item) => (
                            <div key={item.label} className="group relative overflow-hidden rounded-lg bg-sea-dark">
                                <Image src={item.image} alt="" fill sizes="25vw" className="object-cover transition duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-sea-dark/70 via-transparent to-transparent" />
                                <p className="absolute bottom-4 left-0 right-0 -rotate-2 text-center text-2xl font-black italic text-white drop-shadow-lg">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-white px-10 py-14">
                <div className="mx-auto max-w-[1440px]">
                    <div className="mb-10 text-center">
                        <h2 className="text-4xl font-black text-sea-dark">Zašto roditelji biraju Euroclub?</h2>
                        <HandUnderline className="mx-auto mt-2 w-72" />
                    </div>
                    <div className="grid grid-cols-4">
                        {parentReasons.map((reason, index) => {
                            const Icon = reason.icon;
                            return (
                                <div key={reason.title} className={`px-8 text-center ${index > 0 ? 'border-l border-sea/20' : ''}`}>
                                    <div className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl ${reason.bg} ${reason.color}`}>
                                        <Icon className="h-9 w-9" />
                                    </div>
                                    <h3 className={`text-sm font-black ${reason.color}`}>{reason.title}</h3>
                                    <p className="mt-2 text-[15px] font-bold text-sea-dark">{reason.lead}</p>
                                    <p className="mt-1 text-sm leading-snug text-sea-dark/80">{reason.text}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="relative h-[280px] overflow-hidden bg-sea-dark">
                <Image src="/uploads/naslovnica/brodarica_euroclub.webp" alt="" fill sizes="100vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-sea-dark/80 via-sea-dark/35 to-sea-dark/70" />
                <div className="relative mx-auto grid h-full max-w-[1440px] grid-cols-[1fr_1.2fr] items-center gap-12 px-12 text-white">
                    <div>
                        <h2 className="-rotate-2 text-5xl font-black italic leading-[1.05] drop-shadow-lg">
                            More than a summer camp.
                            <br />
                            <span className="ml-28">Since 1991.</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-4 divide-x divide-white/50">
                        {[
                            ['35+', 'godina\niskustva'],
                            ['135.000+', 'djece i mladih'],
                            ['35+', 'zemalja'],
                            ['1991.', 'kada je sve\npočelo'],
                        ].map(([value, label]) => (
                            <div key={value} className="px-7 text-center">
                                <p className="text-4xl font-black">{value}</p>
                                <p className="mt-2 whitespace-pre-line text-sm font-bold leading-tight">{label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-white px-10 py-12">
                <div className="mx-auto max-w-[1440px]">
                    <div className="mb-7 flex items-end justify-between px-3">
                        <h2 className="text-4xl font-black text-sea-dark">Ne vjeruj samo nama...</h2>
                        <p className="text-base text-sea-dark/70">Pogledaj što kažu naši polaznici i roditelji.</p>
                    </div>
                    <div className="grid grid-cols-4 gap-5">
                        {testimonials.map((testimonial) => (
                            <article key={testimonial.name} className="grid min-h-[190px] grid-cols-[42%_1fr] overflow-hidden rounded-2xl border border-sea/10 bg-white shadow-[0_6px_24px_rgba(3,105,161,0.10)]">
                                <div className="relative">
                                    <Image src={testimonial.image} alt="" fill sizes="18vw" className="object-cover" />
                                    <span className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-sea-dark/70 text-white">
                                        <Play className="ml-0.5 h-5 w-5 fill-white" />
                                    </span>
                                </div>
                                <div className="flex flex-col p-5">
                                    <p className="text-[14px] font-medium leading-snug text-sea-dark">{testimonial.quote}</p>
                                    <div className="mt-3 flex gap-0.5 text-sun">
                                        {[0, 1, 2, 3, 4].map((star) => <Star key={star} className="h-4 w-4 fill-sun" />)}
                                    </div>
                                    <div className="mt-auto pt-3 text-xs text-sea-dark/75">
                                        <p className="font-bold">{testimonial.name}</p>
                                        <p>{testimonial.country}</p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-white px-10 pb-12 pt-5">
                <div className="mx-auto max-w-[1370px]">
                    <div className="mb-7">
                        <h2 className="text-4xl font-black text-sea-dark">Tko može sudjelovati?</h2>
                        <HandUnderline className="mt-2 w-72" />
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                        <article className="grid h-[190px] grid-cols-[44%_1fr] overflow-hidden rounded-2xl bg-sea/10">
                            <div className="relative"><Image src="/uploads/7-12/djeca_euroclub.webp" alt="" fill sizes="30vw" className="object-cover" /></div>
                            <div className="flex flex-col justify-center p-7">
                                <h3 className="w-fit rounded-md bg-sea px-4 py-2 text-xl font-black text-white">Junior 7–12 godina</h3>
                                <p className="mt-4 text-[15px] leading-snug text-sea-dark/85">Učenje, zabava, nove vještine i prvi koraci prema samostalnosti.</p>
                            </div>
                        </article>
                        <article className="grid h-[190px] grid-cols-[44%_1fr] overflow-hidden rounded-2xl bg-sunset/10">
                            <div className="relative"><Image src="/uploads/12-17/euroclub_teen_ljetni_kamp.jpg" alt="" fill sizes="30vw" className="object-cover" /></div>
                            <div className="flex flex-col justify-center p-7">
                                <h3 className="w-fit rounded-md bg-sunset px-4 py-2 text-xl font-black text-white">Teen 13–18 godina</h3>
                                <p className="mt-4 text-[15px] leading-snug text-sea-dark/85">Više slobode, veći izazovi, međunarodna ekipa i nezaboravna iskustva.</p>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            <section className="border-t border-sea/10 bg-sea/10 px-10 py-9">
                <div className="mx-auto grid max-w-[1370px] grid-cols-5 gap-8">
                    {practicalInfo.map((item) => {
                        const Icon = item.icon;
                        return (
                            <div key={item.title} className="text-center text-sea-dark">
                                <Icon className="mx-auto h-9 w-9" />
                                <p className="mt-3 text-sm font-black">{item.title}</p>
                                <p className="mt-1 text-xs">{item.text}</p>
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
}
