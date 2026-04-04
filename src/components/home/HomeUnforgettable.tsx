"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function HomeUnforgettable() {
    const t = useTranslations('Home.unforgettable');

    return (
        <section
            className="relative min-h-[70vh] py-20 flex items-center justify-center overflow-hidden bg-fixed bg-cover bg-center"
            style={{ backgroundImage: "url('/uploads/naslovnica/dica.jpg')" }}
        >
            {/* Refined Dark Glass Overlay */}
            <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-[2px]"></div>

            {/* Content Container */}
            <div className="relative z-10 max-w-5xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="glass-2d p-10 md:p-16 text-center"
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-4xl md:text-7xl font-black mb-8 text-white leading-tight"
                    >
                        {t('title')}
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="h-1.5 w-32 bg-sun rounded-full mx-auto mb-10"
                    ></motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="text-xl md:text-3xl leading-relaxed text-white font-medium max-w-4xl mx-auto"
                    >
                        {t('desc')}
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
}
