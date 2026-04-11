"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Users, Calendar, Clock, MapPin } from 'lucide-react';

const stats = [
    { key: 'students', value: '133k', icon: Users, color: 'sea' },
    { key: 'years', value: '35', icon: Calendar, color: 'sun' },
    { key: 'hours', value: '20', icon: Clock, color: 'sunset' },
    { key: 'resort', value: '1', icon: MapPin, color: 'pine' },
];

export default function HomeStatsV3() {
    const t = useTranslations('WhyEuroclub.stats');

    return (
        <section className="relative z-20 -mt-16 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-2xl shadow-2xl p-6 md:p-8"
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                        {stats.map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <motion.div
                                    key={stat.key}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    className="text-center"
                                >
                                    <div className={`w-14 h-14 mx-auto mb-3 rounded-full bg-${stat.color}/10 flex items-center justify-center`}>
                                        <Icon className={`w-7 h-7 text-${stat.color}`} />
                                    </div>
                                    <div className="text-3xl md:text-4xl font-black text-foreground mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">
                                        {t(stat.key)}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
