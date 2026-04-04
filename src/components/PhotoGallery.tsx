'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PhotoGalleryProps {
    images: {
        src: string;
        alt: string;
        width?: number;
        height?: number;
    }[];
    columns?: {
        desktop?: number;
        tablet?: number;
        mobile?: number;
    };
    className?: string;
}

export default function PhotoGallery({
    images,
    columns = { desktop: 4, tablet: 2, mobile: 2 },
    className,
}: PhotoGalleryProps) {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openLightbox = (index: number) => {
        setCurrentIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = useCallback(() => {
        setLightboxOpen(false);
    }, []);

    const goToPrevious = useCallback(() => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }, [images.length]);

    const goToNext = useCallback(() => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, [images.length]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!lightboxOpen) return;

            switch (e.key) {
                case 'Escape':
                    closeLightbox();
                    break;
                case 'ArrowLeft':
                    goToPrevious();
                    break;
                case 'ArrowRight':
                    goToNext();
                    break;
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [lightboxOpen, closeLightbox, goToPrevious, goToNext]);

    useEffect(() => {
        if (lightboxOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [lightboxOpen]);

    return (
        <>
            <div
                className={cn(
                    'grid gap-4',
                    `grid-cols-${columns.mobile || 2}`,
                    'md:grid-cols-' + (columns.tablet || 2),
                    'lg:grid-cols-' + (columns.desktop || 4),
                    className
                )}
                style={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(${columns.mobile || 2}, 1fr)`,
                }}
            >
                {images.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => openLightbox(index)}
                        className="relative aspect-square overflow-hidden rounded-2xl group cursor-pointer"
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    </button>
                ))}
            </div>

            {lightboxOpen && (
                <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
                    <button
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors"
                        aria-label="Close lightbox"
                    >
                        <X className="w-8 h-8" />
                    </button>

                    <button
                        onClick={goToPrevious}
                        className="absolute left-4 p-2 text-white/70 hover:text-white transition-colors"
                        aria-label="Previous image"
                    >
                        <ChevronLeft className="w-10 h-10" />
                    </button>

                    <div className="relative w-full h-full max-w-5xl max-h-[90vh] mx-4">
                        <Image
                            src={images[currentIndex].src}
                            alt={images[currentIndex].alt}
                            fill
                            className="object-contain"
                            sizes="100vw"
                            priority
                        />
                    </div>

                    <button
                        onClick={goToNext}
                        className="absolute right-4 p-2 text-white/70 hover:text-white transition-colors"
                        aria-label="Next image"
                    >
                        <ChevronRight className="w-10 h-10" />
                    </button>

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={cn(
                                    'w-2 h-2 rounded-full transition-colors',
                                    index === currentIndex ? 'bg-white' : 'bg-white/30'
                                )}
                                aria-label={`Go to image ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}
