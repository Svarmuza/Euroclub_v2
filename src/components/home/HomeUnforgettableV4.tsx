"use client";

import { useTranslations } from 'next-intl';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function HomeUnforgettableV4() {
    const t = useTranslations('Home.unforgettable');
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 1, 1, 0.5]);

    return (
        <section
            ref={containerRef}
            className="relative min-h-[80vh] py-32 flex items-center justify-center overflow-hidden"
        >
            {/* Parallax Background */}
            <motion.div
                style={{ y, scale }}
                className="absolute inset-0 w-full h-[120%] -top-[10%]"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/uploads/naslovnica/dica.jpg')" }}
                />
                <div className="absolute inset-0 bg-slate-900/60"></div>
            </motion.div>

            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            y: [0, -30, 0],
                            x: [0, Math.random() * 20 - 10, 0],
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: 4 + Math.random() * 2,
                            repeat: Infinity,
                            delay: i * 0.5,
                        }}
                        className="absolute w-2 h-2 bg-white/30 rounded-full"
                        style={{
                            left: `${15 + i * 15}%`,
                            top: `${20 + (i % 3) * 25}%`,
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            <motion.div
                style={{ opacity }}
                className="relative z-10 max-w-5xl mx-auto px-6"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className="text-center"
                >
                    {/* Animated Badge */}
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="inline-block mb-8"
                    >
                        <span className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-white/90 font-bold text-sm tracking-widest uppercase border border-white/20">
                            Iskustvo koje traje cijeli život
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-4xl md:text-7xl font-black text-white mb-8 leading-tight"
                    >
                        {t('title')}
                    </motion.h2>

                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="h-1.5 w-40 bg-gradient-to-r from-sun via-sunset to-sea rounded-full mx-auto mb-10"
                    ></motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                        className="text-xl md:text-2xl leading-relaxed text-white/90 font-medium max-w-4xl mx-auto"
                    >
                        {t('desc')}
                    </motion.p>
                </motion.div>
            </motion.div>
        </section>
    );
}
