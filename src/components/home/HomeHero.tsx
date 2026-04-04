"use client";

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';

export default function HomeHero() {
    const t = useTranslations('Home.hero');

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
            >
                <source src="/uploads/naslovnica/video_2025_naslovnica.mp4" type="video/mp4" />
            </video>

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-sea/30 via-transparent to-background/80 z-10"></div>

            {/* Fallback Image */}
            <div
                className="absolute inset-0 bg-cover bg-center -z-10 opacity-30"
                style={{ backgroundImage: "url('/uploads/naslovnica/brodarica_ec.jpg')" }}
            ></div>

            <div className="relative z-20 w-full max-w-6xl px-4 flex flex-col items-center justify-center text-center mt-16 pb-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-black mb-4 tracking-tight leading-[0.9]">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sun via-sunset to-sun animate-gradient-x drop-shadow-xl">
                            {t('title')}
                        </span>
                    </h1>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-10 text-white drop-shadow-xl leading-tight max-w-4xl mx-auto"
                >
                    {t('subtitle')}
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="glass-2d p-8 md:p-10 mb-12 max-w-3xl mx-auto"
                >
                    <motion.p
                        animate={{ y: [0, -3, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="text-2xl md:text-4xl font-black mb-4 text-sun tracking-tight drop-shadow-sm"
                    >
                        {t('ageRange')}
                    </motion.p>

                    <div className="flex flex-col gap-4">
                        <p className="text-xl md:text-2xl font-bold text-white">
                            {t('teachers')}
                        </p>
                        <div className="h-px w-24 bg-white/20 rounded-full mx-auto"></div>
                        <p className="text-lg md:text-xl font-medium text-white/80 italic">
                            {t('levels')}
                        </p>
                    </div>
                </motion.div>

                <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link
                            href="/junior-camp"
                            className="modern-button modern-button-cta px-12 py-6 min-w-[260px] flex flex-col items-center !rounded-[2rem] shadow-xl"
                        >
                            <span className="text-3xl font-black tracking-tight uppercase">{t('juniorBtn')}</span>
                            <span className="text-xs font-bold opacity-80 uppercase tracking-widest mt-1">{t('juniorAge')}</span>
                        </Link>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link
                            href="/teen-camp"
                            className="modern-button px-12 py-6 min-w-[260px] flex flex-col items-center !rounded-[2rem] bg-sea shadow-xl"
                        >
                            <span className="text-3xl font-black tracking-tight uppercase">{t('teenBtn')}</span>
                            <span className="text-xs font-bold opacity-80 uppercase tracking-widest mt-1">{t('teenAge')}</span>
                        </Link>
                    </motion.div>
                </div>
            </div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/50"
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1 h-2 bg-white rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
}
