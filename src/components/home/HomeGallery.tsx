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

export default function HomeGallery() {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentSet, setCurrentSet] = useState(0);
    const [isDesktop, setIsDesktop] = useState(true);

    const imagesPerSet = 4;
    const totalSets = Math.ceil(allImages.length / imagesPerSet);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsDesktop(window.innerWidth >= 768);
        };
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    useEffect(() => {
        if (!isDesktop || totalSets <= 1) return;
        const timer = setInterval(() => {
            setCurrentSet((prev) => (prev + 1) % totalSets);
        }, 4000);
        return () => clearInterval(timer);
    }, [isDesktop, totalSets]);

    const getCurrentSetImages = () => {
        const startIndex = currentSet * imagesPerSet;
        return allImages.slice(startIndex, startIndex + imagesPerSet);
    };

    const openLightbox = (index: number) => {
        const absoluteIndex = currentSet * imagesPerSet + index;
        setCurrentIndex(absoluteIndex);
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

    const currentSetImages = getCurrentSetImages();

    return (
        <section className="py-20 overflow-hidden" style={{ backgroundColor: '#168CC4' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {isDesktop ? (
                    <div className="relative h-96 w-full overflow-hidden rounded-lg">
                        <div className="flex h-full transition-all duration-800 ease-in-out">
                            {currentSetImages.map((img, index) => (
                                <div key={`${currentSet}-${index}`} className="w-1/4 flex-shrink-0 h-full">
                                    <div
                                        className="relative w-full h-full cursor-pointer group overflow-hidden"
                                        onClick={() => openLightbox(index)}
                                    >
                                        <img
                                            src={img}
                                            alt={`Gallery ${currentSet * imagesPerSet + index + 1}`}
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-90 rounded-full p-2">
                                                <Plus className="w-6 h-6 text-gray-800" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="relative h-96 w-full overflow-hidden rounded-lg">
                        <div className="grid grid-cols-2 gap-1 h-full">
                            {currentSetImages.map((img, index) => (
                                <div key={`mobile-${index}`} className="relative h-full">
                                    <div
                                        className="relative w-full h-full cursor-pointer group overflow-hidden"
                                        onClick={() => openLightbox(index)}
                                    >
                                        <img
                                            src={img}
                                            alt={`Gallery ${index + 1}`}
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-90 rounded-full p-2">
                                                <Plus className="w-4 h-4 text-gray-800" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {isDesktop && totalSets > 1 && (
                    <div className="flex justify-center mt-6 pb-8 space-x-2">
                        {Array.from({ length: totalSets }, (_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSet(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    index === currentSet
                                        ? 'bg-white scale-125'
                                        : 'bg-white/40 hover:bg-white/60'
                                }`}
                            />
                        ))}
                    </div>
                )}
            </div>

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
                            className="fixed top-20 right-6 text-white hover:text-red-400 z-[100] p-4 bg-black/90 rounded-full border-2 border-white shadow-2xl transition-all duration-200 hover:bg-red-600 hover:border-red-400 hover:scale-110"
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
                                    className="fixed left-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-[90] p-3 bg-black/80 rounded-full border border-white/30 transition-all duration-200 hover:bg-opacity-100 hover:border-white/50"
                                >
                                    <ChevronLeft size={28} strokeWidth={2} />
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        nextImage();
                                    }}
                                    className="fixed right-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-[90] p-3 bg-black/80 rounded-full border border-white/30 transition-all duration-200 hover:bg-opacity-100 hover:border-white/50"
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