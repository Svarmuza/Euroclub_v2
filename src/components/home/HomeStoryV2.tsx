"use client";

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';

export default function HomeStoryV2() {
    const t = useTranslations('Home.story');

    return (
        <section
            className="relative py-12 flex items-center justify-center overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: "url('/uploads/naslovnica/euroclub_beach.jpg')" }}
        >
            {/* Refined Glass Overlay */}
            <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]"></div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="glass-2d p-8 md:p-12"
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-4xl md:text-6xl font-black mb-6 text-white leading-tight tracking-tight capitalize"
                    >
                        {t('title')}
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="h-1.5 w-32 bg-sun rounded-full mx-auto mb-8"
                    ></motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="text-lg md:text-2xl leading-relaxed text-slate-100 mb-8 max-w-4xl mx-auto font-medium"
                    >
                        {t('desc')}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                    >
                        <Link
                            href="/about"
                            className="modern-button modern-button-cta px-10 py-4 text-lg tracking-tight !rounded-xl"
                        >
                            {t('btn')}
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
