'use client';

import { useTranslations } from 'next-intl';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';

const StatCircle = ({ value, label, color }: { value: string | number, label: string, color: string }) => (
    <div className="flex flex-col items-center">
        <div 
            className="w-44 h-44 rounded-full border-[12px] flex items-center justify-center text-3xl font-black mb-6 shadow-lg"
            style={{ borderColor: color, backgroundColor: 'white' }}
        >
            <span className="text-gray-800">{value}</span>
        </div>
        <p className="text-sm font-bold text-gray-600 uppercase tracking-wider max-w-[160px] leading-tight px-2 text-center">{label}</p>
    </div>
);

export default function WhyEuroclubPage() {
    const t = useTranslations('WhyEuroclub');

    const stats = [
        { value: "133k", label: t('stats.students'), color: "#FF6B6B" },
        { value: "35", label: t('stats.years'), color: "#4ECDC4" },
        { value: "20", label: t('stats.hours'), color: "#45B7D1" },
        { value: "1", label: t('stats.resort'), color: "#96CEB4" },
    ];

    const details = [
        { id: 'workshops', icon: '🎨' },
        { id: 'activities', icon: '🎮' },
        { id: 'digital', icon: '📱' },
        { id: 'location', icon: '📍' },
    ];

    return (
        <div className="bg-white min-h-screen font-sans">
            {/* Hero Section */}
            <section
                className="relative min-h-screen flex items-center justify-center overflow-hidden"
                style={{
                    backgroundImage: "url('/uploads/about/euroclub-brodarica-drone2.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-black/50 z-0"></div>
                <div className="relative z-10 max-w-6xl mx-auto px-4 text-center text-white">
                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight drop-shadow-2xl"
                    >
                        {t('hero.title')}
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto font-light drop-shadow-lg"
                    >
                        {t('hero.subtitle')}
                    </motion.p>
                </div>
            </section>

            {/* Statistics Section */}
            <section className="py-24 px-4 bg-white">
                <div className="max-w-6xl mx-auto text-center">
                    <motion.h2 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-4xl font-black text-gray-800 mb-20 px-4 leading-tight max-w-5xl mx-auto"
                    >
                        Engleski je naš službeni jezik. Veseli smo, zabavni, poučni i imamo pregršt programa, aktivnosti i izleta kojima se možeš priključiti!
                    </motion.h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.6 }}
                            >
                                <StatCircle {...stat} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission / Brand Identity Section */}
            <section
                className="py-24 relative overflow-hidden px-4"
                style={{
                    backgroundImage: "url('/uploads/about/kamp_engleskog_jezika_euroclub.webp')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed'
                }}
            >
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl text-center"
                    >
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
                            {t('mission.title')}
                        </h2>
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                            {t('mission.desc')}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Details Grid */}
            <section className="py-16 bg-gray-50 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {details.slice(0, 3).map((item, i) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <Card className="p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-none bg-white rounded-2xl group">
                                    <CardContent className="flex flex-col gap-6 p-0">
                                        <div className="text-6xl group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                                        <div>
                                            <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">
                                                {t(`details.${item.id}.title`)}
                                            </h3>
                                            <p className="text-gray-700 leading-relaxed text-lg">
                                                {t(`details.${item.id}.desc`)}
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                    
                    {/* Location - full width */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="mt-8"
                    >
                        <Card className="p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-none bg-white rounded-2xl group md:col-span-2 lg:col-span-3">
                            <CardContent className="flex flex-col md:flex-row gap-6 p-0 items-start">
                                <div className="text-6xl group-hover:scale-110 transition-transform duration-300 shrink-0">{details[3].icon}</div>
                                <div>
                                    <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">
                                        {t(`details.${details[3].id}.title`)}
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        {t(`details.${details[3].id}.desc`)}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-blue-600 text-white px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-black mb-4">
                        {t('cta.title')}
                    </h2>

                    <p className="text-xl mb-8 opacity-90">
                        {t('cta.subtitle')}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/programs"
                            className="bg-orange-500 hover:bg-orange-600 text-white font-black py-4 px-8 rounded-lg text-lg transition-all inline-block text-center"
                        >
                            7-12 GODINA
                        </Link>

                        <Link
                            href="/programs/teen"
                            className="bg-orange-500 hover:bg-orange-600 text-white font-black py-4 px-8 rounded-lg text-lg transition-all inline-block text-center"
                        >
                            13-18 GODINA
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}