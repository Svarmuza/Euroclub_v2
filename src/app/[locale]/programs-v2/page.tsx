'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from '@/i18n/routing';
import { ChevronDown, ChevronUp, BookOpen, Trophy, Sparkles, ArrowRight, Check, Calendar } from 'lucide-react';

import type { Pathnames } from '@/i18n/routing';

interface Program {
    id: string;
    title: string;
    desc: string;
    cta: string;
    link?: Pathnames;
    image?: string;
    icon?: React.ElementType;
}

interface Category {
    name: string;
    key: string;
    programs: Program[];
    icon: React.ElementType;
    color: string;
}

export default function ProgramsPageV2() {
    const t = useTranslations('Programs');
    const [expandedCards, setExpandedCards] = useState<Record<string, string | null>>({
        'ucenje-jezika': 'oxford-junior',
        'sport': 'sports-junior',
        'vjestine': 'digital-junior',
    });

    const toggleCard = (categoryKey: string, cardId: string) => {
        setExpandedCards(prev => ({
            ...prev,
            [categoryKey]: prev[categoryKey] === cardId ? null : cardId,
        }));
    };

    const juniorPrograms: Category[] = [
        {
            name: t('junior.categories.languages'),
            key: 'ucenje-jezika',
            icon: BookOpen,
            color: 'sea',
            programs: [
                {
                    id: 'oxford-junior',
                    title: t('junior.programs.oxford.title'),
                    desc: t('junior.programs.oxford.desc'),
                    cta: t('junior.programs.oxford.cta'),
                    link: '/oxford-english',
                    image: '/uploads/programi/oxford/euroclub_oxford_english.webp',
                },
                {
                    id: 'croatian-junior',
                    title: t('junior.programs.croatian.title'),
                    desc: t('junior.programs.croatian.desc'),
                    cta: t('junior.programs.croatian.cta'),
                    link: '/croatian-language-camp',
                },
                {
                    id: 'german-junior',
                    title: t('junior.programs.german.title'),
                    desc: t('junior.programs.german.desc'),
                    cta: t('junior.programs.german.cta'),
                    link: '/german-language-camp',
                },
                {
                    id: 'italian-junior',
                    title: t('junior.programs.italian.title'),
                    desc: t('junior.programs.italian.desc'),
                    cta: t('junior.programs.italian.cta'),
                    link: '/italian-language-camp',
                },
                {
                    id: 'french-junior',
                    title: t('junior.programs.french.title'),
                    desc: t('junior.programs.french.desc'),
                    cta: t('junior.programs.french.cta'),
                    link: '/french-language-camp',
                },
            ],
        },
        {
            name: t('junior.categories.sports'),
            key: 'sport',
            icon: Trophy,
            color: 'pine',
            programs: [
                {
                    id: 'sports-junior',
                    title: t('junior.programs.sports.title'),
                    desc: t('junior.programs.sports.desc'),
                    cta: t('junior.programs.sports.cta'),
                    link: '/sports',
                    image: '/uploads/programi/sport/euroclub_sport_1800.webp',
                },
            ],
        },
        {
            name: t('junior.categories.skills'),
            key: 'vjestine',
            icon: Sparkles,
            color: 'sunset',
            programs: [
                {
                    id: 'digital-junior',
                    title: t('junior.programs.digital.title'),
                    desc: t('junior.programs.digital.desc'),
                    cta: t('junior.programs.digital.cta'),
                    link: '/digital-academy',
                    image: '/uploads/programi/digital academy/euroclub_digital_academy.webp',
                },
                {
                    id: 'challenger-junior',
                    title: t('junior.programs.challenger.title'),
                    desc: t('junior.programs.challenger.desc'),
                    cta: t('junior.programs.challenger.cta'),
                    link: '/teen-challenger',
                },
                {
                    id: 'arts-junior',
                    title: t('junior.programs.arts.title'),
                    desc: t('junior.programs.arts.desc'),
                    cta: t('junior.programs.arts.cta'),
                    link: '/art-fashion',
                },
            ],
        },
    ];

    const dates = [
        '14.06.', '21.06.', '28.06.', '05.07.', '12.07.',
        '19.07.', '26.07.', '02.08.', '09.08.', '16.08.', '23.08.'
    ];

    const availabilityData = [
        { name: 'Oxford English Academy', available: dates.map(() => true) },
        { name: 'Learn Croatian', available: [...dates.slice(0, 8).map(() => true), ...dates.slice(8).map(() => false)] },
        { name: 'Learn German', available: [...dates.slice(0, 8).map(() => true), ...dates.slice(8).map(() => false)] },
        { name: 'Learn Italian', available: [...dates.slice(0, 8).map(() => true), ...dates.slice(8).map(() => false)] },
        { name: 'Learn French', available: [...dates.slice(0, 8).map(() => true), ...dates.slice(8).map(() => false)] },
        { name: 'Sports Academy', available: dates.map(() => true) },
        { name: 'Digital Academy', available: dates.map(() => true) },
        { name: 'Challenger program', available: [...dates.slice(0, 4).map(() => false), ...dates.slice(4).map(() => true)] },
        { name: 'Arts & Glamour', available: [...dates.slice(0, 8).map(() => true), ...dates.slice(8).map(() => false)] },
    ];

    return (
        <main className="min-h-screen bg-white overflow-hidden">
            {/* Hero Section with Video Background */}
            <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
                {/* Video Background */}
                <div className="absolute inset-0">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                    >
                        <source src="/uploads/naslovnica/video_2025_naslovnica.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
                </div>

                {/* Floating Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <motion.div
                        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                        transition={{ duration: 6, repeat: Infinity }}
                        className="absolute top-20 left-10 w-32 h-32 bg-sea/20 rounded-full blur-3xl"
                    />
                    <motion.div
                        animate={{ y: [0, 30, 0], rotate: [0, -5, 0] }}
                        transition={{ duration: 8, repeat: Infinity, delay: 1 }}
                        className="absolute top-40 right-20 w-40 h-40 bg-sun/20 rounded-full blur-3xl"
                    />
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-full text-sm font-bold mb-8"
                        >
                            <Calendar className="w-4 h-4" />
                            Junior Programi
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight"
                        >
                            {t('junior.hero.title')}
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
                        >
                            {t('junior.hero.subtitle')}
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Programs Section */}
            <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative">
                {/* Background Decorations */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-sea/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-sunset/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 bg-sea/10 text-sea px-4 py-2 rounded-full text-sm font-bold mb-4"
                        >
                            <Sparkles className="w-4 h-4" />
                            Odaberi svoj program
                        </motion.div>
                        <div className="h-1.5 w-32 bg-gradient-to-r from-sea via-sun to-sunset rounded-full mx-auto"></div>
                    </motion.div>

                    {/* Programs Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {juniorPrograms.map((category, categoryIndex) => {
                            const CategoryIcon = category.icon;
                            const expandedCardId = expandedCards[category.key];

                            return (
                                <motion.div
                                    key={category.key}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: categoryIndex * 0.15, type: "spring" }}
                                    className="flex flex-col"
                                >
                                    {/* Category Header Card */}
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        className={`bg-gradient-to-br from-${category.color} to-${category.color}-dark rounded-2xl p-6 mb-6 shadow-xl`}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                                                <CategoryIcon className="w-7 h-7 text-white" />
                                            </div>
                                            <h2 className="text-xl font-black text-white">
                                                {category.name}
                                            </h2>
                                        </div>
                                    </motion.div>

                                    {/* Programs List */}
                                    <div className="space-y-4 flex-grow">
                                        {category.programs.map((program, programIndex) => {
                                            const isExpanded = expandedCardId === program.id;

                                            return (
                                                <motion.div
                                                    key={program.id}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: programIndex * 0.1 }}
                                                    className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-100 hover:shadow-xl transition-shadow"
                                                >
                                                    {/* Card Header */}
                                                    <motion.button
                                                        onClick={() => toggleCard(category.key, program.id)}
                                                        whileHover={{ backgroundColor: 'rgba(14, 165, 233, 0.05)' }}
                                                        className="w-full px-6 py-4 text-left flex items-center justify-between"
                                                    >
                                                        <h3 className="text-lg font-bold text-foreground pr-4">
                                                            {program.title}
                                                        </h3>
                                                        <motion.div
                                                            animate={{ rotate: isExpanded ? 180 : 0 }}
                                                            transition={{ duration: 0.3 }}
                                                        >
                                                            <ChevronDown className="h-5 w-5 text-slate-400" />
                                                        </motion.div>
                                                    </motion.button>

                                                    {/* Expandable Content */}
                                                    <AnimatePresence>
                                                        {isExpanded && (
                                                            <motion.div
                                                                initial={{ height: 0, opacity: 0 }}
                                                                animate={{ height: 'auto', opacity: 1 }}
                                                                exit={{ height: 0, opacity: 0 }}
                                                                transition={{ duration: 0.3 }}
                                                                className="overflow-hidden"
                                                            >
                                                                <div className="px-6 pb-6">
                                                                    {/* Image */}
                                                                    {programIndex === 0 && program.image && (
                                                                        <motion.div
                                                                            initial={{ scale: 0.9, opacity: 0 }}
                                                                            animate={{ scale: 1, opacity: 1 }}
                                                                            className="mb-4 rounded-xl overflow-hidden"
                                                                        >
                                                                            <img
                                                                                src={program.image}
                                                                                alt={program.title}
                                                                                className="w-full h-48 object-cover"
                                                                            />
                                                                        </motion.div>
                                                                    )}

                                                                    {/* Description */}
                                                                    <p className="text-slate-600 leading-relaxed mb-4">
                                                                        {program.desc}
                                                                    </p>

                                                                    {/* CTA Link */}
                                                                    {program.link && (
                                                                        <Link
                                                                            href={program.link}
                                                                            className={`inline-flex items-center gap-2 text-${category.color} font-bold hover:gap-3 transition-all`}
                                                                        >
                                                                            {program.cta}
                                                                            <motion.span
                                                                                animate={{ x: [0, 5, 0] }}
                                                                                transition={{ duration: 1.5, repeat: Infinity }}
                                                                            >
                                                                                <ArrowRight className="w-4 h-4" />
                                                                            </motion.span>
                                                                        </Link>
                                                                    )}
                                                                </div>
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </motion.div>
                                            );
                                        })}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Availability Section */}
            <section className="py-24 bg-slate-900 relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-full">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                        className="absolute top-10 left-10 w-64 h-64 border border-white/5 rounded-full"
                    />
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                        className="absolute bottom-10 right-10 w-80 h-80 border border-white/5 rounded-full"
                    />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-bold mb-4"
                        >
                            <Calendar className="w-4 h-4" />
                            Dostupnost
                        </motion.div>
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                            Dostupnost programa po terminima
                        </h2>
                    </motion.div>

                    {/* Table */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10"
                    >
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-gradient-to-r from-sea to-sea-dark">
                                        <th className="px-6 py-5 text-left font-bold text-white border-r border-white/20 min-w-[200px]">Program</th>
                                        {dates.map((date, idx) => (
                                            <th key={idx} className="px-3 py-5 text-center font-semibold text-white text-sm border-r border-white/20 last:border-0 min-w-[60px]">
                                                {date}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {availabilityData.map((program, idx) => (
                                        <motion.tr
                                            key={program.name}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.05 }}
                                            className={`border-b border-white/5 ${idx % 2 === 0 ? 'bg-white/5' : ''}`}
                                        >
                                            <td className="px-6 py-5 font-bold text-white">{program.name}</td>
                                            {program.available.map((available, dateIdx) => (
                                                <td key={dateIdx} className="px-3 py-5 text-center">
                                                    {available ? (
                                                        <motion.div
                                                            initial={{ scale: 0 }}
                                                            whileInView={{ scale: 1 }}
                                                            viewport={{ once: true }}
                                                            transition={{ delay: dateIdx * 0.02, type: "spring" }}
                                                            className="w-6 h-6 bg-pine rounded-full flex items-center justify-center mx-auto"
                                                        >
                                                            <Check className="w-4 h-4 text-white" />
                                                        </motion.div>
                                                    ) : (
                                                        <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center mx-auto">
                                                            <span className="text-white/30 text-xs">–</span>
                                                        </div>
                                                    )}
                                                </td>
                                            ))}
                                        </motion.tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>

                    {/* Notes */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-10 max-w-4xl mx-auto text-center"
                    >
                        <p className="text-white/60 italic text-sm md:text-base leading-relaxed mb-4">
                            * Oxford English i Digital Academy su garantirani programi u svim terminima. Za ostale programe – minimalna grupa je 8. Za manje od 8 prijavljene djece za pojedini program u nekom terminu, zadržavamo pravo promjene istog – ponudit ćemo da se odabere neki od programa koji se organiziraju u tom terminu.
                        </p>
                        <p className="text-white/60 italic text-sm md:text-base leading-relaxed">
                            **Za grupe 8+ možemo organizirati bilo koji program u bilo kojem željenom terminu, ukoliko u kampu ima mjesta.
                        </p>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
