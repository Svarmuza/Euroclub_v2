"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function HomeParentsV2() {
    const t = useTranslations('Home.parents');

    return (
        <section
            className="relative py-12 flex items-center justify-center overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: "url('/uploads/naslovnica/brodarica_ec.jpg')" }}
        >
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <h2 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tight">
                        {t('title')}
                    </h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="space-y-4"
                    >
                        <p className="text-base md:text-lg leading-relaxed text-white font-medium bg-white/10 p-4 rounded-lg shadow-lg">
                            {t('para1')}
                        </p>

                        <p className="text-base md:text-lg leading-relaxed text-white font-medium bg-white/10 p-4 rounded-lg shadow-lg">
                            {t('para2')}
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
