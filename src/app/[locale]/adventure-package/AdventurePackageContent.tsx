"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

const tripImages = [
    { src: '/uploads/naslovnica/galerija/optimized/Rafting river cetina.webp', title: 'Rafting on Cetina River' },
    { src: '/uploads/naslovnica/galerija/optimized/jetski.webp', title: 'Jet Ski & Tube' },
    { src: '/uploads/naslovnica/galerija/optimized/euroclub dalmaland trips.webp', title: 'Dalmaland Amusement Park' },
    { src: '/uploads/naslovnica/galerija/optimized/euroclub-brodarica-drone2.webp', title: 'Boat Trip' },
];

const activityImages = [
    { src: '/uploads/naslovnica/galerija/optimized/brod 4.webp', title: 'Windsurfing' },
    { src: '/uploads/naslovnica/galerija/optimized/disco01.webp', title: 'Evening Entertainment' },
    { src: '/uploads/naslovnica/galerija/optimized/oxford_english.webp', title: 'Scuba Diving' },
    { src: '/uploads/naslovnica/galerija/optimized/plaza06.webp', title: 'Beach Activities' },
];

export default function AdventurePackageContent() {
    const t = useTranslations('AdventurePackage');

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="/uploads/programi/adventure/adventure_program_euroclub.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/30"></div>
                
                <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-black mb-6 text-white leading-tight drop-shadow-2xl"
                    >
                        {t('hero.title')}
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-2xl md:text-3xl text-white/95 mb-4 drop-shadow-lg font-semibold"
                    >
                        {t('hero.subtitle')}
                    </motion.p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 bg-gradient-to-b from-white to-blue-50">
                <div className="max-w-5xl mx-auto px-4">
                    <p className="text-xl md:text-2xl text-gray-800 mb-8 leading-relaxed text-center font-medium">
                        {t('intro.desc1')}
                    </p>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                        {t('intro.desc2')}
                    </p>
                    <p className="text-xl text-blue-600 mb-12 leading-relaxed text-center font-bold italic">
                        {t('intro.desc3')}
                    </p>
                </div>
            </section>

            {/* Trips Gallery */}
            <section className="py-16 bg-blue-50">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-black text-center mb-12" style={{ color: "#07598C" }}>
                        {t('gallery.title')}
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {tripImages.map((img, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="aspect-square rounded-lg overflow-hidden cursor-pointer group"
                            >
                                <img
                                    src={img.src}
                                    alt={img.title}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-12">
                        <h3 className="text-3xl md:text-4xl font-black text-center mb-8" style={{ color: "#07598C" }}>
                            {t('gallery.subtitle')}
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {activityImages.map((img, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="aspect-square rounded-lg overflow-hidden cursor-pointer group"
                                >
                                    <img
                                        src={img.src}
                                        alt={img.title}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="py-16 bg-white">
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-black text-center mb-12" style={{ color: "#07598C" }}>
                        {t('whyChoose.title')}
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {t.raw('whyChoose.items').map((item: any, index: number) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-gradient-to-br from-blue-100 to-blue-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <div className="text-4xl mb-4">{item.icon}</div>
                                <h3 className="text-2xl font-black text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-black mb-6">
                        {t('cta.title')}
                    </h2>
                    <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                        {t('cta.subtitle')}
                    </p>
                    <a
                        href="/cijene"
                        className="inline-block bg-white text-blue-600 px-10 py-4 rounded-full font-black text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                        {t('cta.button')}
                    </a>
                </div>
            </section>
        </div>
    );
}