"use client";

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';

export default function HomeStory() {
    const t = useTranslations('Home.story');

    return (
        <section
            className="relative min-h-[80vh] py-24 flex items-center justify-center overflow-hidden bg-cover bg-center"
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
                    className="glass-2d p-10 md:p-16"
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-5xl md:text-8xl font-black mb-8 text-white leading-tight tracking-tight capitalize"
                    >
                        {t('title')}
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="h-1.5 w-40 bg-sun rounded-full mx-auto mb-10"
                    ></motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="text-xl md:text-3xl leading-relaxed text-slate-100 mb-12 max-w-4xl mx-auto font-medium"
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
                            className="modern-button modern-button-cta px-12 py-5 text-xl tracking-tight !rounded-2xl"
                        >
                            {t('btn')}
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
