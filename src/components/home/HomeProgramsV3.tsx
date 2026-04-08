"use client";

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import { BookOpen, Trophy, Smartphone, ArrowRight } from 'lucide-react';

const programs = [
    {
        id: 'oxford',
        title: 'Oxford English Academy',
        desc: 'Najbolji program za učenje engleskog jezika s certificiranim nastavnicima',
        image: '/uploads/programi/oxford/euroclub_oxford_english.webp',
        icon: BookOpen,
        link: '/oxford-english',
        color: 'sea',
    },
    {
        id: 'sports',
        title: 'Sports Academy',
        desc: 'Raznoliki sportski programi na moru i kopnu za sve uzraste',
        image: '/uploads/programi/sport/euroclub_sport_1800.webp',
        icon: Trophy,
        link: '/sports',
        color: 'pine',
    },
    {
        id: 'digital',
        title: 'Digital Academy',
        desc: 'Uči digitalne vještine kreativnosti, programiranja i multimedije',
        image: '/uploads/programi/digital academy/euroclub_digital_academy.webp',
        icon: Smartphone,
        link: '/digital-academy',
        color: 'sunset',
    },
];

export default function HomeProgramsV3() {
    const t = useTranslations('Home');

    return (
        <section className="py-16 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4">
                        Naši Programi
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Odaberi program koji ti najviše odgovara i provedi nezaboravno ljeto učeći, se družeći i zabavljajući
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                    {programs.map((program, index) => {
                        const Icon = program.icon;
                        return (
                            <motion.div
                                key={program.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15, duration: 0.5 }}
                                whileHover={{ y: -8 }}
                                className="group"
                            >
                                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                                    {/* Image */}
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={program.image}
                                            alt={program.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className={`absolute top-4 right-4 w-12 h-12 rounded-full bg-${program.color} flex items-center justify-center shadow-lg`}>
                                            <Icon className="w-6 h-6 text-white" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-xl font-black text-foreground mb-3">
                                            {program.title}
                                        </h3>
                                        <p className="text-slate-600 mb-6 flex-grow">
                                            {program.desc}
                                        </p>
                                        <Link
                                            href={program.link as any}
                                            className={`inline-flex items-center gap-2 text-${program.color} font-bold hover:gap-3 transition-all`}
                                        >
                                            Saznaj više
                                            <ArrowRight className="w-5 h-5" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <Link
                        href="/programs"
                        className="modern-button px-10 py-4 text-lg"
                    >
                        Pogledaj sve programe
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
