"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

const colorMap: Record<string, { bg: string; border: string; text: string }> = {
    yellow: { bg: 'bg-yellow-50', border: 'border-yellow-400', text: 'text-yellow-600' },
    blue: { bg: 'bg-blue-50', border: 'border-blue-400', text: 'text-blue-600' },
    green: { bg: 'bg-green-50', border: 'border-green-400', text: 'text-green-600' },
    orange: { bg: 'bg-orange-50', border: 'border-orange-400', text: 'text-orange-600' },
    purple: { bg: 'bg-purple-50', border: 'border-purple-400', text: 'text-purple-600' },
    red: { bg: 'bg-red-50', border: 'border-red-400', text: 'text-red-600' },
    indigo: { bg: 'bg-indigo-50', border: 'border-indigo-400', text: 'text-indigo-600' },
    gray: { bg: 'bg-gray-50', border: 'border-gray-400', text: 'text-gray-600' },
};

export default function DailyScheduleContent() {
    const t = useTranslations('DailySchedule');

    const schedule = [
        { time: "08:00 - 08:30", color: "yellow", activities: "BUĐENJE\nMORNING ZUMBA\nDORUČAK" },
        { time: "09:00 - 10:30", color: "blue", activities: "1. LEKCIJA" },
        { time: "10:30 - 12:00", color: "green", activities: "SLOBODNO VRIJEME\nKUPANJE, IGRE NA PLAŽI I BAZENU" },
        { time: "12:00 - 13:15", color: "blue", activities: "2. LEKCIJA" },
        { time: "13:30 - 15:00", color: "orange", activities: "RUČAK\nODMOR U SOBAMA" },
        { time: "15:00 - 15:45", color: "blue", activities: "3. LEKCIJA\nUŽINA" },
        { time: "16:00 - 19:00", color: "purple", activities: "SLOBODNO VRIJEME\nSPORT, KUPANJE, NATJECANJA, OLIMPIJSKE IGRE" },
        { time: "19:30 - 20:00", color: "red", activities: "VEČERA" },
        { time: "21:00 - 22:45", color: "indigo", activities: "VEČERNJA ZABAVA\ntematski zabavni programi - disko" },
        { time: "23:00 - 23:30", color: "gray", activities: "PRIPREMA ZA POČINAK\ngašenje svjetla" },
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-black mb-6">
                        {t('hero.title')}
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90">
                        {t('hero.subtitle')}
                    </p>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <p className="text-lg leading-relaxed mb-6 text-gray-700">
                        {t('intro.desc1')}
                    </p>
                    <p className="text-lg leading-relaxed mb-6 text-gray-700">
                        {t('intro.desc2')}
                    </p>
                    <p className="text-lg leading-relaxed text-gray-700">
                        {t('intro.desc3')}
                    </p>
                </div>
            </section>

            {/* Daily Schedule */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-black text-center mb-12 text-gray-800">
                        {t('scheduleTitle')}
                    </h2>

                    <div className="space-y-6">
                        {schedule.map((item, index) => {
                            const colors = colorMap[item.color];
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className={`${colors.bg} border-l-4 ${colors.border} p-6 rounded-r-lg`}
                                >
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                        <div className="md:w-1/4 mb-2 md:mb-0">
                                            <span className={`text-2xl font-bold ${colors.text}`}>
                                                {item.time}
                                            </span>
                                        </div>
                                        <div className="md:w-3/4">
                                            <div className="text-lg text-gray-800 font-semibold whitespace-pre-line">
                                                {item.activities}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-blue-600 text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h3 className="text-2xl md:text-3xl font-black mb-4">
                        {t('cta.title')}
                    </h3>
                    <p className="text-xl mb-8 opacity-90">
                        {t('cta.subtitle')}
                    </p>
                    <a
                        href="/cijene"
                        className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    >
                        {t('cta.button')}
                    </a>
                </div>
            </section>
        </div>
    );
}