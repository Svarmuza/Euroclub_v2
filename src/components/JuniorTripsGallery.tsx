'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, ZoomIn, Image as ImageIcon } from 'lucide-react';

interface TripPhoto {
    title: string;
    thumbnailUrl: string;
    largeUrl: string;
}

const tripPhotos: TripPhoto[] = [
    {
        title: "Boat Trip - Kornati National Park",
        thumbnailUrl: "/uploads/7-12/izleti/boat trip kornati.webp",
        largeUrl: "/uploads/7-12/izleti/izleti_opis/Euroclub_trip_kornati.webp",
    },
    {
        title: "Wind Surfing",
        thumbnailUrl: "/uploads/7-12/izleti/wind_surfing.webp",
        largeUrl: "/uploads/7-12/izleti/izleti_opis/07_wind_surfing.webp",
    },
    {
        title: "Rafting on Cetina River",
        thumbnailUrl: "/uploads/7-12/izleti/Rafting river cetina.webp",
        largeUrl: "/uploads/7-12/izleti/izleti_opis/Euroclub_rafting.webp",
    },
    {
        title: "Split Shopping + Go Kart",
        thumbnailUrl: "/uploads/7-12/izleti/go kart.webp",
        largeUrl: "/uploads/7-12/izleti/izleti_opis/Euroclub_rafting.webp",
    },
    {
        title: "Scuba Diving",
        thumbnailUrl: "/uploads/7-12/euroclub_scuba_diving_brodarica_thumb.webp",
        largeUrl: "/uploads/7-12/izleti/izleti_opis/08_scuba_diving.webp",
    },
    {
        title: "VR LASER TAG",
        thumbnailUrl: "/uploads/7-12/izleti/Laser tag.webp",
        largeUrl: "/uploads/7-12/izleti/izleti_opis/Euroclub_lasertag.webp",
    },
    {
        title: "Krka National Park",
        thumbnailUrl: "/uploads/7-12/izleti/Krka national park.webp",
        largeUrl: "/uploads/7-12/izleti/izleti_opis/Eurolub_krka.webp",
    },
    {
        title: "Jet Ski & Tube",
        thumbnailUrl: "/uploads/7-12/izleti/jetski.webp",
        largeUrl: "/uploads/7-12/izleti/izleti_opis/Euroclub_jetski.webp",
    },
    {
        title: "Dalmaland Amusement Park",
        thumbnailUrl: "/uploads/7-12/izleti/Dalmaland.webp",
        largeUrl: "/uploads/7-12/izleti/izleti_opis/Euroclub_dalmaland.webp",
    },
];

interface JuniorTripsGalleryProps {
    className?: string;
}

export default function JuniorTripsGallery({ className }: JuniorTripsGalleryProps) {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);
    const lightboxRef = useRef<HTMLDivElement>(null);

    const currentPhoto = tripPhotos[currentPhotoIndex];

    const navigatePhoto = useCallback((direction: 'prev' | 'next') => {
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentPhotoIndex((prev) =>
                direction === 'prev'
                    ? (prev - 1 + tripPhotos.length) % tripPhotos.length
                    : (prev + 1) % tripPhotos.length
            );
            setIsAnimating(false);
        }, 150);
    }, []);

    const goToPhoto = useCallback((index: number) => {
        if (index === currentPhotoIndex) return;
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentPhotoIndex(index);
            setIsAnimating(false);
        }, 150);
    }, [currentPhotoIndex]);

    const closeLightbox = useCallback(() => {
        setLightboxOpen(false);
    }, []);

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (!lightboxOpen) return;

        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            navigatePhoto('prev');
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            navigatePhoto('next');
        } else if (e.key === 'Escape') {
            e.preventDefault();
            closeLightbox();
        }
    }, [lightboxOpen, navigatePhoto, closeLightbox]);

    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const minSwipeDistance = 50;

        if (distance > minSwipeDistance) {
            navigatePhoto('next');
        } else if (distance < -minSwipeDistance) {
            navigatePhoto('prev');
        }

        setTouchStart(null);
        setTouchEnd(null);
    };

    const handlePhotoClick = (index: number) => {
        setCurrentPhotoIndex(index);
        setLightboxOpen(true);
    };

    useEffect(() => {
        if (lightboxOpen && lightboxRef.current) {
            lightboxRef.current.focus();
        }
    }, [lightboxOpen]);

    return (
        <div className={className}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tripPhotos.map((photo, index) => (
                    <div
                        key={index}
                        className="group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
                        onClick={() => handlePhotoClick(index)}
                    >
                        <div className="relative aspect-[4/3] overflow-hidden">
                            <Image
                                src={photo.thumbnailUrl}
                                alt={photo.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                                    <ZoomIn className="w-6 h-6 text-white" />
                                </div>
                            </div>
                        </div>

                        <div className="p-4 bg-white border-t border-gray-100">
                            <h3 className="text-sm font-semibold text-gray-800 text-center">
                                {photo.title}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>

            {lightboxOpen && (
                <div
                    ref={lightboxRef}
                    className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex flex-col outline-none"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    role="dialog"
                    aria-modal="true"
                    aria-label={`Photo gallery: ${currentPhoto?.title}`}
                >
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 md:p-6 bg-black/30">
                        <div className="flex items-center gap-3 text-white">
                            <ImageIcon className="w-5 h-5 opacity-70" />
                            <span className="text-sm font-medium opacity-70">
                                {currentPhotoIndex + 1} / {tripPhotos.length}
                            </span>
                        </div>
                        <button
                            onClick={closeLightbox}
                            className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200 hover:scale-110"
                            aria-label="Close gallery"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Main Image Area */}
                    <div className="flex-1 flex items-center justify-center relative px-4 md:px-8 py-4">
                        {/* Prev Button */}
                        {tripPhotos.length > 1 && (
                            <button
                                onClick={() => navigatePhoto('prev')}
                                className="absolute left-2 md:left-6 z-10 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200 hover:scale-110 backdrop-blur-sm"
                                aria-label="Previous photo"
                            >
                                <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
                            </button>
                        )}

                        {/* Image Container */}
                        <div className={`relative w-full h-full max-w-full max-h-full transition-opacity duration-150 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                            <Image
                                src={currentPhoto?.largeUrl || ''}
                                alt={currentPhoto?.title || ''}
                                fill
                                className="object-contain"
                                sizes="(max-width: 1024px) 100vw, 90vw"
                                priority
                            />
                        </div>

                        {/* Next Button */}
                        {tripPhotos.length > 1 && (
                            <button
                                onClick={() => navigatePhoto('next')}
                                className="absolute right-2 md:right-6 z-10 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200 hover:scale-110 backdrop-blur-sm"
                                aria-label="Next photo"
                            >
                                <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
                            </button>
                        )}
                    </div>

                    {/* Photo Info & Thumbnails */}
                    <div className="p-4 md:p-6 bg-black/30">
                        <h2 className="text-lg md:text-xl font-semibold text-white text-center mb-6">
                            {currentPhoto?.title}
                        </h2>

                        {/* Thumbnail Strip */}
                        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
                            {tripPhotos.map((photo, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToPhoto(index)}
                                    className={`relative flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden transition-all duration-200 ${
                                        index === currentPhotoIndex
                                            ? 'ring-2 ring-white scale-110'
                                            : 'opacity-50 hover:opacity-80'
                                    }`}
                                >
                                    <Image
                                        src={photo.thumbnailUrl}
                                        alt={photo.title}
                                        fill
                                        className="object-cover"
                                        sizes="80px"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}