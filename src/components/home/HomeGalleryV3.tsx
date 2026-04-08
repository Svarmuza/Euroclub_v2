"use client";

import { Plus, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const allImages = [
    '/uploads/naslovnica/galerija/optimized/brod 4.webp',
    '/uploads/naslovnica/galerija/optimized/disco01.webp',
    '/uploads/naslovnica/galerija/optimized/euroclub-brodarica-drone2.webp',
    '/uploads/naslovnica/galerija/optimized/euroclub dalmaland trips.webp',
    '/uploads/naslovnica/galerija/optimized/euroclub_oxford03.webp',
    '/uploads/naslovnica/galerija/optimized/euroclub_oxford.webp',
    '/uploads/naslovnica/galerija/optimized/euroclub_smjestaj001.webp',
    '/uploads/naslovnica/galerija/optimized/euroclub_smjestaj002.webp',
];

export default function HomeGalleryV3() {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openLightbox = (index: number) => {
        setCurrentIndex(index);
        setLightboxOpen(true);
    };

    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % allImages.length);
    };

    const prevImage = () => {
        setCurrentIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
    };

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
        <section className="py-16 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4">
                        Galerija
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Pogledaj trenutke iz našeg kampa
                    </p>
                </motion.div>

                {/* Masonry Grid */}
                <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                    {allImages.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="break-inside-avoid"
                        >
                            <div
                                className="relative cursor-pointer group overflow-hidden rounded-xl"
                                onClick={() => openLightbox(index)}
                            >
                                <img
                                    src={img}
                                    alt={`Gallery ${index + 1}`}
                                    className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-2">
                                        <Plus className="w-6 h-6 text-gray-800" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {lightboxOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center pt-16"
                        onClick={() => setLightboxOpen(false)}
                    >
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setLightboxOpen(false);
                            }}
                            className="fixed top-20 right-6 text-white hover:text-logo z-[100] p-4 bg-black/90 rounded-full border-2 border-white shadow-2xl transition-all duration-200 hover:bg-logo hover:border-logo hover:scale-110"
                        >
                            <X size={28} strokeWidth={3} />
                        </button>

                        {allImages.length > 1 && (
                            <>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        prevImage();
                                    }}
                                    className="fixed left-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-[90] p-3 bg-black/80 rounded-full border border-white/30 transition-all duration-200"
                                >
                                    <ChevronLeft size={28} strokeWidth={2} />
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        nextImage();
                                    }}
                                    className="fixed right-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-[90] p-3 bg-black/80 rounded-full border border-white/30 transition-all duration-200"
                                >
                                    <ChevronRight size={28} strokeWidth={2} />
                                </button>
                            </>
                        )}

                        <div
                            className="relative max-w-full max-h-full p-8"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={allImages[currentIndex]}
                                alt={`Gallery ${currentIndex + 1}`}
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>

                        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 text-white bg-black/80 px-4 py-2 rounded-full border border-white/30 z-[90]">
                            {currentIndex + 1} / {allImages.length}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
