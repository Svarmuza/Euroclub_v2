'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

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

    const handlePhotoClick = (index: number) => {
        setCurrentPhotoIndex(index);
        setLightboxOpen(true);
    };

    const navigatePhoto = (direction: 'prev' | 'next') => {
        const newIndex =
            direction === 'prev'
                ? (currentPhotoIndex - 1 + tripPhotos.length) % tripPhotos.length
                : (currentPhotoIndex + 1) % tripPhotos.length;
        setCurrentPhotoIndex(newIndex);
    };

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (!lightboxOpen) return;

        if (e.key === 'ArrowLeft') {
            navigatePhoto('prev');
        } else if (e.key === 'ArrowRight') {
            navigatePhoto('next');
        } else if (e.key === 'Escape') {
            setLightboxOpen(false);
        }
    }, [lightboxOpen, currentPhotoIndex, navigatePhoto]);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

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
        <div className={className}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tripPhotos.map((photo, index) => (
                    <div
                        key={index}
                        className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                        onClick={() => handlePhotoClick(index)}
                    >
                        <div className="relative aspect-[4/3] overflow-hidden">
                            <Image
                                src={photo.thumbnailUrl}
                                alt={photo.title}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
                        </div>

                        <div className="p-4 bg-white">
                            <h3 className="text-sm font-medium text-gray-800 text-center leading-tight">
                                {photo.title}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>

            {lightboxOpen && (
                <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
                    <button
                        onClick={() => setLightboxOpen(false)}
                        className="absolute top-4 right-4 p-2 text-white hover:bg-white/20 rounded-full transition-colors z-50"
                        aria-label="Close lightbox"
                    >
                        <X size={24} />
                    </button>

                    {tripPhotos.length > 1 && (
                        <>
                            <button
                                onClick={() => navigatePhoto('prev')}
                                className="absolute left-4 z-50 text-white hover:bg-white/20 rounded-full p-2 transition-colors"
                                aria-label="Previous image"
                            >
                                <ChevronLeft size={32} />
                            </button>
                            <button
                                onClick={() => navigatePhoto('next')}
                                className="absolute right-4 z-50 text-white hover:bg-white/20 rounded-full p-2 transition-colors"
                                aria-label="Next image"
                            >
                                <ChevronRight size={32} />
                            </button>
                        </>
                    )}

                    <div className="relative w-full h-full flex items-center justify-center p-4 md:p-8">
                        <Image
                            src={tripPhotos[currentPhotoIndex]?.largeUrl}
                            alt={tripPhotos[currentPhotoIndex]?.title}
                            fill
                            className="object-contain"
                            sizes="100vw"
                            priority
                        />
                    </div>

                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
                        <p className="text-lg font-medium mb-1">
                            {tripPhotos[currentPhotoIndex]?.title}
                        </p>
                        <p className="text-sm opacity-75">
                            {currentPhotoIndex + 1} / {tripPhotos.length}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}