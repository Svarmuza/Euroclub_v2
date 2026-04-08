"use client";

import { useTranslations } from 'next-intl';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Users, Calendar, Clock, MapPin } from 'lucide-react';

const stats = [
    { key: 'students', value: 133, suffix: 'k', icon: Users, color: 'sea', labelKey: 'POLAZNIKA' },
    { key: 'years', value: 35, suffix: '', icon: Calendar, color: 'sun', labelKey: 'GODINA' },
    { key: 'hours', value: 20, suffix: '', icon: Clock, color: 'sunset', labelKey: 'SATI/TJEDNO' },
    { key: 'resort', value: 1, suffix: '', icon: MapPin, color: 'pine', labelKey: 'RESORT' },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (!isInView) return;

        let startTime: number;
        const duration = 2000;

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeOut * value));

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [isInView, value]);

    return (
        <span ref={ref}>
            {count}{suffix}
        </span>
    );
}

export default function HomeStatsV4() {
    const t = useTranslations('WhyEuroclub.stats');

    return (
        <section className="relative py-20 bg-white overflow-hidden">
            {/* Diagonal Divider Top */}
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/5 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
                >
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <motion.div
                                key={stat.key}
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: index * 0.1,
                                    duration: 0.5,
                                    type: "spring",
                                    stiffness: 200
                                }}
                                whileHover={{ y: -10, scale: 1.05 }}
                                className="relative group"
                            >
                                <div className="bg-gradient-to-br from-white to-slate-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100">
                                    {/* Floating Icon */}
                                    <motion.div
                                        animate={{ y: [0, -5, 0] }}
                                        transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                                        className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-${stat.color}/10 flex items-center justify-center`}
                                    >
                                        <Icon className={`w-7 h-7 text-${stat.color}`} />
                                    </motion.div>

                                    {/* Animated Number */}
                                    <div className={`text-4xl md:text-5xl font-black text-${stat.color} mb-2 text-center`}>
                                        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                                    </div>

                                    {/* Label */}
                                    <div className="text-sm text-slate-500 font-bold uppercase tracking-wider text-center">
                                        {t(stat.key)}
                                    </div>

                                    {/* Hover Glow Effect */}
                                    <div className={`absolute inset-0 rounded-2xl bg-${stat.color}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl`}></div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
