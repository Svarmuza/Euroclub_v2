"use client";

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ChevronDown } from 'lucide-react';

export default function HomeHeroV4() {
    const t = useTranslations('Home.hero');
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Animated Background Video */}
            <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="/uploads/naslovnica/video_2025_naslovnica.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50"></div>
            </motion.div>

            {/* Floating Animated Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 5, 0],
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-20 left-10 w-20 h-20 bg-sun/20 rounded-full blur-xl"
                />
                <motion.div
                    animate={{
                        y: [0, 30, 0],
                        rotate: [0, -5, 0],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-40 right-20 w-32 h-32 bg-sea/20 rounded-full blur-xl"
                />
                <motion.div
                    animate={{
                        y: [0, -15, 0],
                        x: [0, 10, 0],
                    }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-40 left-1/4 w-24 h-24 bg-sunset/20 rounded-full blur-xl"
                />
            </div>

            {/* Content */}
            <motion.div
                style={{ opacity }}
                className="relative z-10 max-w-6xl mx-auto px-6 text-center"
            >
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {/* Animated Gradient Text */}
                    <motion.h1
                        className="text-5xl md:text-8xl lg:text-9xl font-black mb-6 leading-none"
                        style={{
                            background: "linear-gradient(135deg, #FACC15 0%, #FB923C 50%, #0EA5E9 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, type: "spring" }}
                    >
                        EUROCLUB
                    </motion.h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-2xl md:text-4xl font-black text-white mb-4 drop-shadow-2xl"
                >
                    {t('subtitle')}
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="text-lg md:text-2xl text-sun font-bold mb-8 drop-shadow-lg"
                >
                    {t('age')}
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    className="text-base md:text-lg text-white/90 italic mb-12 max-w-2xl mx-auto"
                >
                    {t('note')}
                </motion.p>

                {/* Animated CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.1 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <motion.div
                        whileHover={{ scale: 1.05, rotate: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link
                            href="/junior-camp"
                            className="inline-flex items-center gap-2 bg-logo hover:bg-logo-dark text-white font-black py-4 px-10 rounded-2xl text-lg transition-all shadow-2xl hover:shadow-logo/50"
                        >
                            <span>JUNIOR</span>
                            <span className="text-sm opacity-80">7-12g</span>
                        </Link>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link
                            href="/teen-camp"
                            className="inline-flex items-center gap-2 bg-sea hover:bg-sea-dark text-white font-black py-4 px-10 rounded-2xl text-lg transition-all shadow-2xl hover:shadow-sea/50"
                        >
                            <span>TEEN</span>
                            <span className="text-sm opacity-80">13-17g</span>
                        </Link>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="flex flex-col items-center text-white/70"
                >
                    <span className="text-sm mb-2">Scroll</span>
                    <ChevronDown className="w-6 h-6" />
                </motion.div>
            </motion.div>
        </section>
    );
}
