"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Shield, GraduationCap, Smile, Heart, Star, CheckCircle } from 'lucide-react';

const benefits = [
    { icon: Shield, text: 'Potpuna sigurnost i 24/7 nadzor', color: 'sea' },
    { icon: GraduationCap, text: 'Kvalitetno obrazovanje i certificirani nastavnici', color: 'sun' },
    { icon: Smile, text: 'Nezaboravna zabava i nova prijateljstva', color: 'sunset' },
    { icon: Heart, text: 'Briga o zdravlju i ishrani', color: 'logo' },
];

export default function HomeParentsV4() {
    const t = useTranslations('Home.parents');

    return (
        <section
            className="relative py-32 overflow-hidden"
            style={{
                background: "linear-gradient(135deg, #0EA5E9 0%, #0369A1 100%)"
            }}
        >
            {/* Animated Wave Pattern */}
            <div className="absolute inset-0 overflow-hidden">
                <svg
                    className="absolute bottom-0 left-0 w-full"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                >
                    <motion.path
                        initial={{ d: "M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,138.7C672,128,768,160,864,181.3C960,203,1056,213,1152,192C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" }}
                        animate={{
                            d: [
                                "M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,138.7C672,128,768,160,864,181.3C960,203,1056,213,1152,192C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                                "M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                                "M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,138.7C672,128,768,160,864,181.3C960,203,1056,213,1152,192C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                            ]
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        fill="rgba(255,255,255,0.1)"
                    />
                </svg>
            </div>

            {/* Floating Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                    transition={{ duration: 6, repeat: Infinity }}
                    className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"
                />
                <motion.div
                    animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
                    transition={{ duration: 8, repeat: Infinity, delay: 2 }}
                    className="absolute bottom-40 right-20 w-40 h-40 bg-white/5 rounded-full blur-2xl"
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-bold mb-6"
                        >
                            <Star className="w-4 h-4" />
                            Za roditelje
                        </motion.div>

                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                            {t('title')}
                        </h2>

                        <p className="text-xl text-white/90 leading-relaxed mb-8">
                            {t('para1')}
                        </p>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="text-lg text-white/80"
                        >
                            {t('para2')}
                        </motion.p>
                    </motion.div>

                    {/* Right - Benefits Cards */}
                    <div className="grid gap-4">
                        {benefits.map((benefit, index) => {
                            const Icon = benefit.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 50, scale: 0.9 }}
                                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: index * 0.1,
                                        type: "spring",
                                        stiffness: 100
                                    }}
                                    whileHover={{ x: 10, scale: 1.02 }}
                                    className="group"
                                >
                                    <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 hover:bg-white/20 transition-all duration-300">
                                        <motion.div
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.5 }}
                                            className={`w-14 h-14 rounded-xl bg-${benefit.color} flex items-center justify-center flex-shrink-0 shadow-lg`}
                                        >
                                            <Icon className="w-7 h-7 text-white" />
                                        </motion.div>
                                        <span className="text-white font-bold text-lg">
                                            {benefit.text}
                                        </span>
                                        <CheckCircle className="w-6 h-6 text-white/50 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
