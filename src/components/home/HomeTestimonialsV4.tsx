"use client";

import { useTranslations } from 'next-intl';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function HomeTestimonialsV4() {
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
        const interval = setInterval(nextSlide, 6000);
        return () => clearInterval(interval);
    }, [isAutoPlaying, currentSlide]);

    return (
        <section className="py-24 bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden relative">
            {/* Decorative Elements */}
            <div className="absolute top-20 left-10 text-sea/5">
                <Quote className="w-40 h-40" />
            </div>
            <div className="absolute bottom-20 right-10 text-sea/5 rotate-180">
                <Quote className="w-40 h-40" />
            </div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 bg-pine/10 text-pine px-4 py-2 rounded-full text-sm font-bold mb-4"
                    >
                        <Star className="w-4 h-4" />
                        Testimonials
                    </motion.div>
                    <h2 className="text-4xl md:text-6xl font-black text-foreground mb-4">
                        {t('title')}
                    </h2>
                    <div className="h-1.5 w-32 bg-gradient-to-r from-sea via-sun to-sunset rounded-full mx-auto"></div>
                </motion.div>

                {/* Testimonial Card */}
                <div className="relative">
                    <motion.div
                        onMouseEnter={() => setIsAutoPlaying(false)}
                        onMouseLeave={() => setIsAutoPlaying(true)}
                        className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-100"
                    >
                        <div className="relative z-10">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentSlide}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                    className="text-center"
                                >
                                    {/* Stars */}
                                    <div className="flex justify-center gap-1 mb-8">
                                        {[...Array(5)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ delay: i * 0.1, type: "spring" }}
                                            >
                                                <Star className="w-8 h-8 fill-sun text-sun" />
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Quote */}
                                    <p className="text-xl md:text-3xl font-bold text-slate-800 leading-relaxed italic max-w-4xl mx-auto mb-10">
                                        "{t(`items.${currentSlide}.text`)}"
                                    </p>

                                    {/* Author */}
                                    <div className="flex flex-col items-center">
                                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-sea to-sea-dark flex items-center justify-center text-white text-2xl font-black mb-4">
                                            {t(`items.${currentSlide}.name`).charAt(0)}
                                        </div>
                                        <h4 className="text-2xl font-black text-foreground">
                                            {t(`items.${currentSlide}.name`)}
                                        </h4>
                                        <p className="text-slate-500 font-bold uppercase tracking-widest text-sm mt-1">
                                            {t(`items.${currentSlide}.location`)}
                                        </p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </motion.div>

                    {/* Navigation Buttons */}
                    <motion.button
                        whileHover={{ scale: 1.1, x: -5 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={prevSlide}
                        className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl text-sea hover:bg-sea hover:text-white transition-all border border-slate-100"
                    >
                        <ChevronLeft size={28} />
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.1, x: 5 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={nextSlide}
                        className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl text-sea hover:bg-sea hover:text-white transition-all border border-slate-100"
                    >
                        <ChevronRight size={28} />
                    </motion.button>
                </div>

                {/* Progress Indicators */}
                <div className="flex justify-center gap-2 mt-10">
                    {[...Array(totalTestimonials)].map((_, i) => (
                        <motion.button
                            key={i}
                            onClick={() => setCurrentSlide(i)}
                            whileHover={{ scale: 1.2 }}
                            className={`h-3 rounded-full transition-all duration-300 ${currentSlide === i ? 'w-10 bg-sea' : 'w-3 bg-sea/20 hover:bg-sea/40'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
