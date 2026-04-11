"use client";

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';

export default function HomeFinalCTAV3() {
    const t = useTranslations('Home');

    return (
        <section className="relative py-20 overflow-hidden">
            {/* Background with gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-sea via-sea-dark to-slate-900"></div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-sun/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight"
                    >
                        Spremni za najbolje ljeto?
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-xl text-white/80 mb-10 max-w-2xl mx-auto"
                    >
                        Prijavi se danas i rezerviraj svoje mjesto u Euroclubu
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link
                            href="/junior-camp"
                            className="inline-flex items-center justify-center bg-sunset hover:bg-sunset-dark text-white font-black py-4 px-10 rounded-xl text-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
                        >
                            7-12 GODINA
                        </Link>
                        <Link
                            href="/teen-camp"
                            className="inline-flex items-center justify-center bg-white hover:bg-slate-100 text-sea-dark font-black py-4 px-10 rounded-xl text-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
                        >
                            13-17 GODINA
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
