"use client";

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import {
    Globe, Users, Smartphone, Sparkles, ChevronRight, ChevronDown,
    ChevronLeft, Star, Shield, GraduationCap, Heart, Clock, Calendar,
    MapPin, Plus, X, Quote
} from 'lucide-react';

const galleryImages = [
    '/uploads/naslovnica/galerija/optimized/euroclub_oxford03.webp',
    '/uploads/naslovnica/galerija/optimized/jetski.webp',
    '/uploads/naslovnica/galerija/optimized/euroclub dalmaland trips.webp',
    '/uploads/naslovnica/galerija/optimized/Rafting river cetina.webp',
    '/uploads/naslovnica/galerija/optimized/disco01.webp',
    '/uploads/naslovnica/galerija/optimized/euroclub_oxford.webp',
    '/uploads/naslovnica/galerija/optimized/plaza06.webp',
    '/uploads/naslovnica/galerija/optimized/euroclub_smjestaj001.webp',
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isInView.current) {
                    isInView.current = true;
                    let startTime: number;
                    const duration = 2000;
                    const animate = (currentTime: number) => {
                        if (!startTime) startTime = currentTime;
                        const progress = Math.min((currentTime - startTime) / duration, 1);
                        const easeOut = 1 - Math.pow(1 - progress, 3);
                        setCount(Math.floor(easeOut * value));
                        if (progress < 1) requestAnimationFrame(animate);
                    };
                    requestAnimationFrame(animate);
                }
            },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [value]);

    return <span ref={ref}>{count}{suffix}</span>;
}

function GallerySection() {
    const tGallery = useTranslations('TeenCamp.gallery');
    const t = useTranslations('TeenCamp');
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openLightbox = (index: number) => {
        setCurrentIndex(index);
        setLightboxOpen(true);
    };

    const nextImage = () => setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    const prevImage = () => setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (!lightboxOpen) return;
            if (e.key === 'Escape') setLightboxOpen(false);
            if (e.key === 'ArrowLeft') prevImage();
            if (e.key === 'ArrowRight') nextImage();
        };
        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [lightboxOpen]);

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-72 h-72 bg-sea/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-sunset/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.span
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-2 bg-sunset/10 text-sunset rounded-full text-sm font-bold mb-4"
                    >
                        {tGallery('badge')}
                    </motion.span>
                    <h2 className="text-4xl md:text-6xl font-black text-foreground mb-4">
                        {tGallery('title')}
                    </h2>
                    <div className="h-1.5 w-32 bg-gradient-to-r from-sea via-sun to-sunset rounded-full mx-auto" />
                </motion.div>

                <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                    {galleryImages.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, type: "spring", stiffness: 100 }}
                            className="break-inside-avoid"
                        >
                            <motion.div
                                whileHover={{ scale: 1.02, y: -5 }}
                                className="relative cursor-pointer group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                                onClick={() => openLightbox(index)}
                            >
                                <img
                                    src={img}
                                    alt={`Gallery ${index + 1}`}
                                    className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <div className="flex items-center gap-2 text-white">
                                            <Plus className="w-5 h-5" />
                                            <span className="font-medium">{tGallery('view')}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {lightboxOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center"
                        onClick={() => setLightboxOpen(false)}
                    >
                        <motion.button
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            onClick={(e) => { e.stopPropagation(); setLightboxOpen(false); }}
                            className="fixed top-6 right-6 text-white hover:text-logo z-[100] p-3 bg-white/10 hover:bg-logo rounded-full backdrop-blur-md transition-all duration-200"
                        >
                            <X size={24} strokeWidth={3} />
                        </motion.button>

                        <motion.button
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            onClick={(e) => { e.stopPropagation(); prevImage(); }}
                            className="fixed left-6 top-1/2 -translate-y-1/2 text-white hover:text-sea z-[90] p-4 bg-white/10 hover:bg-white rounded-full backdrop-blur-md transition-all duration-200"
                        >
                            <ChevronLeft size={32} strokeWidth={2} />
                        </motion.button>
                        <motion.button
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            onClick={(e) => { e.stopPropagation(); nextImage(); }}
                            className="fixed right-6 top-1/2 -translate-y-1/2 text-white hover:text-sea z-[90] p-4 bg-white/10 hover:bg-white rounded-full backdrop-blur-md transition-all duration-200"
                        >
                            <ChevronRight size={32} strokeWidth={2} />
                        </motion.button>

                        <motion.div
                            key={currentIndex}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="relative max-w-5xl max-h-[80vh] p-4"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={galleryImages[currentIndex]}
                                alt={`Gallery ${currentIndex + 1}`}
                                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="fixed bottom-6 left-1/2 -translate-x-1/2 text-white bg-white/10 backdrop-blur-md px-6 py-3 rounded-full z-[90]"
                        >
                            {currentIndex + 1} / {galleryImages.length}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

export default function TeenCampV2Page() {
    const t = useTranslations('TeenCamp');
    const tStats = useTranslations('WhyEuroclub.stats');
    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });
    const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    const stats = [
        { key: 'students', value: 133, suffix: 'k', icon: Users, color: 'sea' },
        { key: 'years', value: 35, suffix: '', icon: Calendar, color: 'sun' },
        { key: 'hours', value: 20, suffix: '', icon: Clock, color: 'sunset' },
        { key: 'resort', value: 1, suffix: '', icon: MapPin, color: 'pine' },
    ];

    return (
        <main className="min-h-screen bg-white">

            {/* ============ SECTION 1: HERO ============ */}
            <section
                ref={heroRef}
                className="relative min-h-screen flex items-center justify-center overflow-hidden"
            >
                <motion.div style={{ y: heroY }} className="absolute inset-0 w-full h-full">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: "url('/uploads/12-17/euroclub_teen_ljetni_kamp01.jpg')" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-sea/10 to-black/60" />
                </motion.div>

                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <motion.div
                        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-20 left-10 w-20 h-20 bg-sun/20 rounded-full blur-xl"
                    />
                    <motion.div
                        animate={{ y: [0, 30, 0], rotate: [0, -5, 0] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute top-40 right-20 w-32 h-32 bg-sea/20 rounded-full blur-xl"
                    />
                </div>

                <motion.div
                    style={{ opacity: heroOpacity }}
                    className="relative z-10 max-w-6xl mx-auto px-6 text-center"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8, type: "spring" }}
                            className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md text-white/90 rounded-full text-sm font-bold tracking-widest uppercase border border-white/20 mb-8"
                        >
                            {t('ageRange')}
                        </motion.div>

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
                            {t('title')}
                        </motion.h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="text-2xl md:text-4xl font-black text-white mb-6 drop-shadow-2xl"
                    >
                        {t('subtitle')}
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className="text-base md:text-lg text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed"
                    >
                        {t('description')}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.0 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <motion.div whileHover={{ scale: 1.05, rotate: -1 }} whileTap={{ scale: 0.95 }}>
                            <Link
                                href="/reservation"
                                className="inline-flex items-center gap-3 bg-logo hover:bg-logo-dark text-white font-black py-4 px-10 rounded-2xl text-lg transition-all shadow-2xl hover:shadow-logo/50"
                            >
                                {t('cta.button')}
                                <ChevronRight className="w-5 h-5" />
                            </Link>
                        </motion.div>
                    </motion.div>
                </motion.div>

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
                        <span className="text-sm mb-2">{t('scroll')}</span>
                        <ChevronDown className="w-6 h-6" />
                    </motion.div>
                </motion.div>
            </section>

            {/* ============ SECTION 2: STATS ============ */}
            <section className="relative py-20 bg-white overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/5 to-transparent" />
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
                                    transition={{ delay: index * 0.1, duration: 0.5, type: "spring", stiffness: 200 }}
                                    whileHover={{ y: -10, scale: 1.05 }}
                                    className="relative group"
                                >
                                    <div className={`bg-gradient-to-br from-white to-slate-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100`}>
                                        <motion.div
                                            animate={{ y: [0, -5, 0] }}
                                            transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                                            className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-${stat.color}/10 flex items-center justify-center`}
                                        >
                                            <Icon className={`w-7 h-7 text-${stat.color}`} />
                                        </motion.div>
                                        <div className={`text-4xl md:text-5xl font-black text-${stat.color} mb-2 text-center`}>
                                            <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                                        </div>
                                        <div className="text-sm text-slate-500 font-bold uppercase tracking-wider text-center">
                                            {tStats(stat.key)}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* ============ SECTION 3: ENGLISH THROUGH EXPERIENCE ============ */}
            <section className="py-24 px-4 bg-slate-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-sea/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-sunset/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="flex-1"
                        >
                            <div className="relative">
                                <motion.img
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.6 }}
                                    src="/uploads/12-17/euroclub_ljetni_kamp_za_tinejdzere.jpg"
                                    alt="Teen Camp experience"
                                    className="rounded-3xl shadow-2xl w-full"
                                />
                                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-sea/20 rounded-full blur-2xl" />
                                <div className="absolute -top-6 -left-6 w-24 h-24 bg-sun/20 rounded-full blur-2xl" />
                            </div>
                        </motion.div>

                        <div className="flex-1 space-y-8">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-center lg:text-left"
                            >
                                <motion.span
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    className="inline-flex items-center gap-2 bg-sea/10 text-sea px-4 py-2 rounded-full text-sm font-bold mb-6"
                                >
                                    <Globe className="w-4 h-4" />
                                    {t('englishBadge')}
                                </motion.span>
                                <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight mb-4">
                                    {t('features.english.title')}
                                </h2>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    {t('features.english.desc')}
                                </p>
                            </motion.div>

                            <div className="space-y-4">
                                <motion.div
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                    whileHover={{ x: 10 }}
                                    className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-lg border border-sea/10 hover:border-sea/30 transition-all"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-sea/10 flex items-center justify-center flex-shrink-0">
                                        <Globe className="w-6 h-6 text-sea" />
                                    </div>
                                    <div>
                                        <h3 className="font-black text-xl mb-2 text-foreground">{t('features.english.active.title')}</h3>
                                        <p className="text-slate-600 leading-relaxed">{t('features.english.active.desc')}</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                    whileHover={{ x: 10 }}
                                    className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-lg border border-sunset/10 hover:border-sunset/30 transition-all"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-sunset/10 flex items-center justify-center flex-shrink-0">
                                        <Users className="w-6 h-6 text-sunset" />
                                    </div>
                                    <div>
                                        <h3 className="font-black text-xl mb-2 text-foreground">{t('features.english.nativeSpeakers.title')}</h3>
                                        <p className="text-slate-600 leading-relaxed">{t('features.english.nativeSpeakers.desc')}</p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============ SECTION 4: FRIENDSHIPS & ACTION ============ */}
            <section className="relative min-h-[80vh] py-32 flex items-center justify-center overflow-hidden">
                <motion.div
                    className="absolute inset-0 w-full h-[120%] -top-[10%]"
                    style={{
                        backgroundImage: "url('/uploads/programi/teen/kamp_engleskog_jezika_euroclub.webp')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <div className="absolute inset-0 bg-slate-900/60" />

                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{
                                y: [0, -30, 0],
                                x: [0, (i % 2 === 0 ? 10 : -10), 0],
                                opacity: [0.3, 0.6, 0.3],
                            }}
                            transition={{ duration: 4 + i * 0.5, repeat: Infinity, delay: i * 0.5 }}
                            className="absolute w-2 h-2 bg-white/30 rounded-full"
                            style={{ left: `${15 + i * 15}%`, top: `${20 + (i % 3) * 25}%` }}
                        />
                    ))}
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, type: "spring" }}
                        className="text-center mb-16"
                    >
                        <motion.div
                            initial={{ y: -20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="inline-block mb-6"
                        >
                            <span className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-white/90 font-bold text-sm tracking-widest uppercase border border-white/20">
                                {t('features.friendships.title')}
                            </span>
                        </motion.div>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            whileHover={{ y: -5 }}
                            className="group"
                        >
                            <div className="bg-white/10 backdrop-blur-xl p-10 rounded-3xl border border-white/20 hover:border-sun/50 transition-all duration-500 h-full">
                                <motion.div
                                    animate={{ y: [0, -5, 0] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                    className="w-16 h-16 rounded-2xl bg-sun/20 flex items-center justify-center mb-6"
                                >
                                    <Users className="w-8 h-8 text-sun" />
                                </motion.div>
                                <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
                                    {t('features.friendships.lifeLong.title')}
                                </h3>
                                <p className="text-lg leading-relaxed text-white/80">
                                    {t('features.friendships.lifeLong.desc')}
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            whileHover={{ y: -5 }}
                            className="group"
                        >
                            <div className="bg-white/10 backdrop-blur-xl p-10 rounded-3xl border border-white/20 hover:border-sunset/50 transition-all duration-500 h-full">
                                <motion.div
                                    animate={{ y: [0, -5, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                                    className="w-16 h-16 rounded-2xl bg-sunset/20 flex items-center justify-center mb-6"
                                >
                                    <Sparkles className="w-8 h-8 text-sunset" />
                                </motion.div>
                                <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
                                    {t('features.friendships.action.title')}
                                </h3>
                                <p className="text-lg leading-relaxed text-white/80">
                                    {t('features.friendships.action.desc')}
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ============ SECTION 5: DIGITAL BALANCE ============ */}
            <section
                className="relative py-24 overflow-hidden"
                style={{ background: "linear-gradient(135deg, #0EA5E9 0%, #0369A1 100%)" }}
            >
                <div className="absolute inset-0 overflow-hidden">
                    <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
                        <motion.path
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

                <div className="relative z-10 max-w-5xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-14 border border-white/20"
                    >
                        <div className="text-center mb-8">
                            <motion.div
                                animate={{ y: [0, -5, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-white/20 flex items-center justify-center"
                            >
                                <Smartphone className="w-8 h-8 text-white" />
                            </motion.div>
                            <h2 className="text-3xl md:text-5xl font-black text-white mb-2">
                                {t('features.digitalBalance.title')}
                            </h2>
                        </div>
                        <div className="space-y-6 text-center max-w-3xl mx-auto">
                            <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-bold">
                                {t('features.digitalBalance.desc1')}
                            </p>
                            <p className="text-lg text-white/70 leading-relaxed">
                                {t('features.digitalBalance.desc2')}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ============ SECTION 6: GALLERY ============ */}
            <GallerySection />

            {/* ============ SECTION 7: ADVENTURE PACKAGE ============ */}
            <section className="relative py-40 overflow-hidden group">
                <video
                    autoPlay loop muted playsInline
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-110"
                >
                    <source src="/uploads/programi/adventure/adventure_program_euroclub.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80" />

                <div className="relative z-10 container mx-auto px-4 text-center">
                    <div className="max-w-3xl mx-auto text-white">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-sunset text-white px-6 py-2 rounded-full w-fit mx-auto mb-8 font-black text-sm uppercase tracking-[0.3em] shadow-xl">
                                {t('elite')}
                            </div>
                            <h2 className="text-5xl md:text-8xl font-black mb-8 leading-none tracking-tighter drop-shadow-2xl">
                                {t('features.adventure.title')}
                            </h2>
                            <p className="text-xl md:text-2xl leading-relaxed mb-12 font-bold text-sun">
                                {t('features.adventure.desc')}
                            </p>
                            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    href="/adventure-package"
                                    className="inline-flex items-center gap-4 bg-white text-black px-12 py-6 rounded-2xl font-black text-xl hover:bg-sun transition-all shadow-[0_20px_50px_rgba(255,255,255,0.2)]"
                                >
                                    {t('features.adventure.button')}
                                    <ChevronRight className="w-6 h-6" />
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ============ SECTION 8: FINAL CTA ============ */}
            <section className="relative py-32 overflow-hidden"
                style={{ background: "linear-gradient(135deg, #0EA5E9 0%, #0369A1 100%)" }}
            >
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

                <div className="relative z-10 container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, type: "spring" }}
                    >
                        <h2 className="text-4xl md:text-7xl font-black text-white mb-6 leading-tight">
                            {t('cta.title')}
                        </h2>
                        <div className="h-1.5 w-40 bg-gradient-to-r from-sun via-sunset to-white rounded-full mx-auto mb-10" />
                        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
                            {t('cta.subtitle')}
                        </p>

                        <motion.div whileHover={{ scale: 1.05, rotate: -1 }} whileTap={{ scale: 0.95 }}>
                            <Link
                                href="/reservation"
                                className="inline-flex items-center gap-3 bg-logo hover:bg-logo-dark text-white font-black py-5 px-14 rounded-2xl text-xl transition-all shadow-2xl hover:shadow-logo/50"
                            >
                                {t('cta.button')}
                                <ChevronRight className="w-6 h-6" />
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-wrap justify-center gap-6 md:gap-10 mt-16 text-white/60 text-sm font-bold uppercase tracking-widest"
                        >
                            <span>{t('trusted.years')}</span>
                            <span className="hidden md:inline">|</span>
                            <span>{t('trusted.students')}</span>
                            <span className="hidden md:inline">|</span>
                            <span>{t('trusted.certified')}</span>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
