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
    '/uploads/naslovnica/galerija/optimized/euroclub_smjestaj003.webp',
    '/uploads/naslovnica/galerija/optimized/euroclub_smjestaj004.webp',
    '/uploads/naslovnica/galerija/optimized/euroclub_smjestaj005.webp',
    '/uploads/naslovnica/galerija/optimized/euroclub_smjestaj02.webp',
];

export default function HomeGalleryV4() {
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
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-sea/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-sunset/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* Section Header */}
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
                        Galerija
                    </motion.span>
                    <h2 className="text-4xl md:text-6xl font-black text-foreground mb-4">
                        Trenuci iz kampa
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Pogledaj atmosferu i aktivnosti koje čekaju te u Euroclubu
                    </p>
                </motion.div>

                {/* Enhanced Masonry Grid */}
                <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                    {allImages.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: index * 0.05,
                                type: "spring",
                                stiffness: 100
                            }}
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
                                        <motion.div
                                            initial={{ y: 20, opacity: 0 }}
                                            whileHover={{ y: 0, opacity: 1 }}
                                            className="flex items-center gap-2 text-white"
                                        >
                                            <Plus className="w-5 h-5" />
                                            <span className="font-medium">Pogledaj</span>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
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
                        className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center"
                        onClick={() => setLightboxOpen(false)}
                    >
                        <motion.button
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            onClick={(e) => {
                                e.stopPropagation();
                                setLightboxOpen(false);
                            }}
                            className="fixed top-6 right-6 text-white hover:text-logo z-[100] p-3 bg-white/10 hover:bg-logo rounded-full backdrop-blur-md transition-all duration-200"
                        >
                            <X size={24} strokeWidth={3} />
                        </motion.button>

                        {allImages.length > 1 && (
                            <>
                                <motion.button
                                    initial={{ x: -50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: -50, opacity: 0 }}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        prevImage();
                                    }}
                                    className="fixed left-6 top-1/2 -translate-y-1/2 text-white hover:text-sea z-[90] p-4 bg-white/10 hover:bg-white rounded-full backdrop-blur-md transition-all duration-200"
                                >
                                    <ChevronLeft size={32} strokeWidth={2} />
                                </motion.button>
                                <motion.button
                                    initial={{ x: 50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: 50, opacity: 0 }}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        nextImage();
                                    }}
                                    className="fixed right-6 top-1/2 -translate-y-1/2 text-white hover:text-sea z-[90] p-4 bg-white/10 hover:bg-white rounded-full backdrop-blur-md transition-all duration-200"
                                >
                                    <ChevronRight size={32} strokeWidth={2} />
                                </motion.button>
                            </>
                        )}

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
                                src={allImages[currentIndex]}
                                alt={`Gallery ${currentIndex + 1}`}
                                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="fixed bottom-6 left-1/2 -translate-x-1/2 text-white bg-white/10 backdrop-blur-md px-6 py-3 rounded-full z-[90]"
                        >
                            {currentIndex + 1} / {allImages.length}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
