"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Shield, GraduationCap, Smile } from 'lucide-react';

const benefits = [
    { icon: Shield, text: 'Potpuna sigurnost i 24/7 nadzor' },
    { icon: GraduationCap, text: 'Kvalitetno obrazovanje i certificirani nastavnici' },
    { icon: Smile, text: 'Nezaboravna zabava i nova prijateljstva' },
];

export default function HomeParentsV3() {
    const t = useTranslations('Home.parents');

    return (
        <section
            className="relative py-16 flex items-center justify-center overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: "url('/uploads/naslovnica/brodarica_ec.jpg')" }}
        >
            <div className="absolute inset-0 bg-slate-900/60"></div>

            <div className="relative z-10 max-w-5xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-2d p-8 md:p-12"
                >
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        {/* Left - Title and description */}
                        <div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight"
                            >
                                {t('title')}
                            </motion.h2>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="space-y-4"
                            >
                                <p className="text-lg text-white/90 leading-relaxed">
                                    {t('para1')}
                                </p>
                            </motion.div>
                        </div>

                        {/* Right - Benefits */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="space-y-4"
                        >
                            {benefits.map((benefit, index) => {
                                const Icon = benefit.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5 + index * 0.1 }}
                                        className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4"
                                    >
                                        <div className="w-12 h-12 rounded-full bg-sun/20 flex items-center justify-center flex-shrink-0">
                                            <Icon className="w-6 h-6 text-sun" />
                                        </div>
                                        <span className="text-white font-medium">
                                            {benefit.text}
                                        </span>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
