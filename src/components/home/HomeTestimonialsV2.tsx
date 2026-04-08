"use client";

import { useTranslations } from 'next-intl';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function HomeTestimonialsV2() {
    const t = useTranslations('Home.testimonials');
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const totalTestimonials = 7;

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalTestimonials);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalTestimonials) % totalTestimonials);
    };

    useEffect(() => {
        if (!isAutoPlaying) return;
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [isAutoPlaying, currentSlide]);

    return (
        <section className="py-12 bg-white overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">
                        {t('title')}
                    </h2>
                    <div className="h-2 w-32 bg-sea/20 rounded-full mx-auto mt-6"></div>
                </motion.div>

                <div className="relative max-w-5xl mx-auto">
                    <motion.div
                        onMouseEnter={() => setIsAutoPlaying(false)}
                        onMouseLeave={() => setIsAutoPlaying(true)}
                        className="modern-card bg-slate-50 p-8 md:p-12 min-h-[350px] flex items-center"
                    >
                        {/* Quote decoration */}
                        <div className="absolute top-4 left-8 text-[10rem] text-sea/5 font-black leading-none select-none pointer-events-none -z-10">
                            "
                        </div>

                        <div className="relative z-10 w-full overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentSlide}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.5 }}
                                    className="text-center space-y-6"
                                >
                                    <div className="flex justify-center gap-2">
                                        {[...Array(5)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                animate={{ scale: [1, 1.2, 1] }}
                                                transition={{ delay: i * 0.1, duration: 1.5, repeat: Infinity }}
                                            >
                                                <Star className="w-6 h-6 fill-sun text-sun drop-shadow-sm" />
                                            </motion.div>
                                        ))}
                                    </div>

                                    <p className="text-xl md:text-3xl font-bold text-slate-800 leading-tight italic max-w-4xl mx-auto tracking-tight">
                                        "{t(`items.${currentSlide}.text`)}"
                                    </p>

                                    <div className="pt-4">
                                        <h4 className="text-2xl font-black text-slate-900 tracking-tight">{t(`items.${currentSlide}.name`)}</h4>
                                        <div className="flex items-center justify-center gap-3 mt-2">
                                            <div className="h-0.5 w-6 bg-sun/40 rounded-full"></div>
                                            <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">{t(`items.${currentSlide}.location`)}</p>
                                            <div className="h-0.5 w-6 bg-sun/40 rounded-full"></div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </motion.div>

                    {/* Navigation Buttons */}
                    <div className="absolute -left-4 md:-left-8 top-1/2 -translate-y-1/2 z-20">
                        <motion.button
                            whileHover={{ scale: 1.1, x: -5 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={prevSlide}
                            className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-modern text-sea border border-slate-100"
                        >
                            <ChevronLeft size={32} />
                        </motion.button>
                    </div>

                    <div className="absolute -right-4 md:-right-8 top-1/2 -translate-y-1/2 z-20">
                        <motion.button
                            whileHover={{ scale: 1.1, x: 5 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={nextSlide}
                            className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-modern text-sea border border-slate-100"
                        >
                            <ChevronRight size={32} />
                        </motion.button>
                    </div>
                </div>

                {/* Progress Indicators */}
                <div className="flex justify-center gap-3 mt-8">
                    {[...Array(totalTestimonials)].map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentSlide(i)}
                            className={`h-3 rounded-full transition-all duration-300 ${currentSlide === i ? 'w-10 bg-sea' : 'w-3 bg-sea/20'}`}
                        />
                    ))}
                </div>
            </div>

            {/* Background elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute top-20 right-20 w-80 h-80 bg-sun rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-20 w-80 h-80 bg-sea rounded-full blur-3xl"></div>
            </div>
        </section>
    );
}
