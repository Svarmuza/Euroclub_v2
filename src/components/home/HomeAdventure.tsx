"use client";

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';

export default function HomeAdventure() {
    const t = useTranslations('Home.adventure');

    return (
        <section
            className="py-24 px-6 text-center overflow-hidden bg-sea/10"
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-6xl mx-auto"
            >
                <div className="text-center mb-16 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-block px-4 py-1.5 rounded-full bg-sun/20 text-sunset text-sm font-bold tracking-widest uppercase mb-4"
                    >
                        🔥 {t('hotTopic')}
                    </motion.div>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.1]">
                        {t('title')}
                    </h2>
                    <div className="h-2 w-32 bg-gradient-to-r from-sea via-sun to-pine mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-12 space-y-10 text-center">
                        <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-medium max-w-5xl mx-auto">
                            {t.rich('description', {
                                b: (chunks) => <span className="text-sea font-black">{chunks}</span>,
                                br: () => <br className="hidden md:block" />
                            })}
                        </p>
                    </div>
                </div>

                {/* Age Group Buttons */}
                <div className="flex flex-col sm:flex-row gap-10 justify-center items-center">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7, duration: 0.5 }}
                    >
                        <Link
                            href="/junior-camp"
                            className="modern-button modern-button-cta px-12 py-6 flex flex-col items-center min-w-[260px] !rounded-[2rem]"
                        >
                            <span className="text-3xl font-black tracking-tight uppercase">{t('btnJunior').split(' za ')[0]}</span>
                            <span className="text-sm font-bold opacity-80 uppercase tracking-widest mt-1">za 7-12g.</span>
                        </Link>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                    >
                        <Link
                            href="/teen-camp"
                            className="modern-button px-12 py-6 flex flex-col items-center min-w-[260px] bg-sea !rounded-[2rem]"
                        >
                            <span className="text-3xl font-black tracking-tight uppercase">{t('btnTeen').split(' za ')[0]}</span>
                            <span className="text-sm font-bold opacity-80 uppercase tracking-widest mt-1">za 12-17g.</span>
                        </Link>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
