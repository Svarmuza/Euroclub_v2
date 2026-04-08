"use client";

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import { BookOpen, Trophy, Smartphone, ArrowRight, Sparkles } from 'lucide-react';

const programs = [
    {
        id: 'oxford',
        title: 'Oxford English Academy',
        desc: 'Najbolji program za učenje engleskog jezika s certificiranim nastavnicima',
        image: '/uploads/programi/oxford/euroclub_oxford_english.webp',
        icon: BookOpen,
        link: '/oxford-english',
        color: 'sea',
        gradient: 'from-sea/20 to-sea/5',
    },
    {
        id: 'sports',
        title: 'Sports Academy',
        desc: 'Raznoliki sportski programi na moru i kopnu za sve uzraste',
        image: '/uploads/programi/sport/euroclub_sport_1800.webp',
        icon: Trophy,
        link: '/sports',
        color: 'pine',
        gradient: 'from-pine/20 to-pine/5',
    },
    {
        id: 'digital',
        title: 'Digital Academy',
        desc: 'Uči digitalne vještine kreativnosti, programiranja i multimedije',
        image: '/uploads/programi/digital academy/euroclub_digital_academy.webp',
        icon: Smartphone,
        link: '/digital-academy',
        color: 'sunset',
        gradient: 'from-sunset/20 to-sunset/5',
    },
];

export default function HomeProgramsV4() {
    const t = useTranslations('Home');

    return (
        <section className="py-24 px-4 bg-slate-50 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-sea/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-sunset/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto relative z-10">
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
                        transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                        className="inline-flex items-center gap-2 bg-sea/10 text-sea px-4 py-2 rounded-full text-sm font-bold mb-6"
                    >
                        <Sparkles className="w-4 h-4" />
                        Izaberi svoj program
                    </motion.div>

                    <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6">
                        Naši Programi
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
                        Odaberi program koji ti najviše odgovara i provedi nezaboravno ljeto učeći, se družeći i zabavljajući
                    </p>
                </motion.div>

                {/* Program Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {programs.map((program, index) => {
                        const Icon = program.icon;
                        return (
                            <motion.div
                                key={program.id}
                                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: index * 0.15,
                                    duration: 0.6,
                                    type: "spring",
                                    stiffness: 100
                                }}
                                whileHover={{ y: -15, scale: 1.02 }}
                                className="group perspective-1000"
                            >
                                <div className={`relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 h-full border border-slate-100`}>
                                    {/* Gradient Overlay on Hover */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${program.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                                    {/* Image */}
                                    <div className="relative h-56 overflow-hidden">
                                        <motion.img
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.6 }}
                                            src={program.image}
                                            alt={program.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                                        {/* Floating Icon */}
                                        <motion.div
                                            animate={{ y: [0, -5, 0] }}
                                            transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
                                            className={`absolute top-4 right-4 w-14 h-14 rounded-2xl bg-${program.color} flex items-center justify-center shadow-lg`}
                                        >
                                            <Icon className="w-7 h-7 text-white" />
                                        </motion.div>
                                    </div>

                                    {/* Content */}
                                    <div className="relative p-8">
                                        <h3 className="text-2xl font-black text-foreground mb-3 group-hover:text-sea transition-colors">
                                            {program.title}
                                        </h3>
                                        <p className="text-slate-600 mb-6 leading-relaxed">
                                            {program.desc}
                                        </p>

                                        {/* Animated Link */}
                                        <Link
                                            href={program.link as any}
                                            className={`inline-flex items-center gap-2 text-${program.color} font-bold group/link`}
                                        >
                                            <span className="relative">
                                                Saznaj više
                                                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-${program.color} group-hover/link:w-full transition-all duration-300`}></span>
                                            </span>
                                            <motion.span
                                                animate={{ x: [0, 5, 0] }}
                                                transition={{ duration: 1.5, repeat: Infinity }}
                                            >
                                                <ArrowRight className="w-5 h-5" />
                                            </motion.span>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
