"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function HomeFuture() {
    const t = useTranslations('Home.future');

    return (
        <section className="relative py-24 px-6 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
                    {/* Left Column - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-2"
                    >
                        <div className="modern-card bg-sky-50 p-10 md:p-12 border-none">
                            {/* Title decoration */}
                            <div className="flex items-center mb-10">
                                <motion.div
                                    animate={{ width: [0, 80] }}
                                    transition={{ duration: 1 }}
                                    className="h-2 bg-sea rounded-full"
                                ></motion.div>
                                <motion.div
                                    animate={{ width: [0, 40] }}
                                    transition={{ duration: 1, delay: 0.2 }}
                                    className="h-2 bg-sea/30 rounded-full ml-3"
                                ></motion.div>
                            </div>

                            <p className="text-xl md:text-3xl leading-relaxed text-slate-800 font-bold tracking-tight mb-0">
                                {t('desc')}
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Column - Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="lg:col-span-3 relative"
                    >
                        <div className="relative group">
                            <motion.img
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                src="/uploads/naslovnica/Euroclub_youth_summer_camp_01.png"
                                alt="Euroclub Future"
                                className="w-full h-auto object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
                            />

                            {/* Bubbly interactive elements - Now 2D Modern */}
                            <motion.div
                                animate={{ scale: [1, 1.1, 1], rotate: [0, 45, 0] }}
                                transition={{ duration: 8, repeat: Infinity }}
                                className="absolute -top-8 -right-8 w-16 h-16 bg-sun/20 rounded-full backdrop-blur-sm border border-white/50"
                            ></motion.div>

                            <motion.div
                                animate={{ x: [0, 15, 0], y: [0, -15, 0] }}
                                transition={{ duration: 10, repeat: Infinity }}
                                className="absolute -bottom-10 -left-10 w-24 h-24 bg-sea/10 rounded-full backdrop-blur-sm border border-white/50"
                            ></motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Background decorative blobs */}
            <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-gradient-to-br from-sea/5 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl p-10"></div>
            <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-gradient-to-tr from-sun/5 to-transparent rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl p-10"></div>
        </section>
    );
}
