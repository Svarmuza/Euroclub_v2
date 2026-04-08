"use client";

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function HomeFinalCTAV4() {
    const t = useTranslations('Home');

    return (
        <section className="relative py-32 overflow-hidden">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0">
                <motion.div
                    animate={{
                        background: [
                            "linear-gradient(135deg, #0EA5E9 0%, #0369A1 50%, #0EA5E9 100%)",
                            "linear-gradient(135deg, #0369A1 0%, #0EA5E9 50%, #0369A1 100%)",
                            "linear-gradient(135deg, #0EA5E9 0%, #0369A1 50%, #0EA5E9 100%)",
                        ]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0"
                />
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            y: [0, -50, 0],
                            x: [0, Math.random() * 30 - 15, 0],
                            opacity: [0.2, 0.5, 0.2],
                        }}
                        transition={{
                            duration: 5 + Math.random() * 3,
                            repeat: Infinity,
                            delay: i * 0.3,
                        }}
                        className="absolute w-3 h-3 bg-white/30 rounded-full"
                        style={{
                            left: `${10 + i * 12}%`,
                            top: `${20 + (i % 4) * 20}%`,
                        }}
                    />
                ))}
            </div>

            {/* Decorative Circles */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                transition={{ duration: 20, repeat: Infinity }}
                className="absolute top-10 right-10 w-64 h-64 border-2 border-white/10 rounded-full"
            />
            <motion.div
                animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
                transition={{ duration: 25, repeat: Infinity }}
                className="absolute bottom-10 left-10 w-48 h-48 border-2 border-white/10 rounded-full"
            />

            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 bg-white/20 text-white px-6 py-3 rounded-full text-sm font-bold mb-8 backdrop-blur-sm"
                    >
                        <Sparkles className="w-4 h-4" />
                        Rezerviraj svoje mjesto
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight"
                    >
                        Spremni za najbolje ljeto?
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto"
                    >
                        Prijavi se danas i osiguraj svoje mjesto u Euroclubu. Broj mjesta je ograničen!
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <motion.div
                            whileHover={{ scale: 1.05, rotate: -1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                href="/junior-camp"
                                className="inline-flex items-center gap-3 bg-sunset hover:bg-sunset-dark text-white font-black py-5 px-12 rounded-2xl text-lg transition-all shadow-2xl hover:shadow-sunset/50 group"
                            >
                                <span>7-12 GODINA</span>
                                <motion.span
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </motion.span>
                            </Link>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.05, rotate: 1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                href="/teen-camp"
                                className="inline-flex items-center gap-3 bg-white hover:bg-slate-100 text-sea-dark font-black py-5 px-12 rounded-2xl text-lg transition-all shadow-2xl hover:shadow-white/30 group"
                            >
                                <span>13-17 GODINA</span>
                                <motion.span
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                                >
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </motion.span>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Trust Badges */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="mt-12 flex flex-wrap justify-center gap-6 text-white/70 text-sm"
                    >
                        <span className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-sun rounded-full"></span>
                            35 godina iskustva
                        </span>
                        <span className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-sun rounded-full"></span>
                            133,000+ polaznika
                        </span>
                        <span className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-sun rounded-full"></span>
                            Certificirani programi
                        </span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
