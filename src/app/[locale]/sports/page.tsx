import { useTranslations } from 'next-intl';
import { Dumbbell, Waves, Shield, Award, Users, Check } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { getLocalizedMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    return await getLocalizedMetadata('sports', locale);
}

export default function SportsPage() {
    const t = useTranslations('Sports');

    const features = [
        {
            icon: Dumbbell,
            title: t('features.sports.title'),
            description: t('features.sports.desc')
        },
        {
            icon: Waves,
            title: t('features.seaLand.title'),
            description: t('features.seaLand.desc')
        },
        {
            icon: Shield,
            title: t('features.safety.title'),
            description: t('features.safety.desc')
        },
        {
            icon: Award,
            title: t('features.certificate.title'),
            description: t('features.certificate.desc')
        }
    ];

    const landSports = ['Nogomet', 'Košarka', 'Odbojka', 'Rukomet', 'Atletika', 'Fitness', 'Timske igre', 'Stolni tenis'];
    const waterSports = ['Plivanje', 'Vaterpolo', 'SUP', 'Kajak', 'Snorkeling', 'Vodene igre'];

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                    poster="/uploads/programi/sport/euroclub_sport_1800.webp"
                >
                    <source src="/uploads/programi/sport/sport_naslovnica.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/40" />

                <div className="relative z-10 container mx-auto px-4 text-center text-white">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
                        {t('hero.title')}
                    </h1>
                    <p className="text-3xl md:text-4xl font-bold mb-8 text-cyan-400">
                        {t('hero.subtitle')}
                    </p>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90 mb-12">
                        {t('hero.desc')}
                    </p>
                    <Link
                        href="/reservation"
                        className="inline-block bg-yellow-400 text-slate-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all"
                    >
                        {t('hero.cta')}
                    </Link>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4 bg-slate-50">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, idx) => (
                            <div
                                key={idx}
                                className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 hover:border-green-200 transition-colors"
                            >
                                <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mb-6 text-green-600">
                                    <feature.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                                <p className="text-slate-600 leading-relaxed text-sm">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sports Showcase */}
            <section className="py-20 px-4 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">
                        {t('sports.title')}
                    </h2>

                    {/* Land Sports */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-bold text-green-600 mb-6 flex items-center gap-3">
                            <span className="text-3xl">⚽</span> {t('sports.land')}
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {landSports.map((sport, idx) => (
                                <div key={idx} className="bg-green-50 p-6 rounded-xl text-center font-bold text-slate-800 hover:bg-green-100 transition-colors">
                                    {sport}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Water Sports */}
                    <div>
                        <h3 className="text-2xl font-bold text-blue-600 mb-6 flex items-center gap-3">
                            <span className="text-3xl">🏊</span> {t('sports.water')}
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {waterSports.map((sport, idx) => (
                                <div key={idx} className="bg-blue-50 p-6 rounded-xl text-center font-bold text-slate-800 hover:bg-blue-100 transition-colors">
                                    {sport}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-20 px-4 bg-slate-50">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">
                        {t('about.title')}
                    </h2>
                    <div className="prose prose-lg text-slate-600 leading-relaxed">
                        <p>{t('about.desc1')}</p>
                        <p>{t('about.desc2')}</p>
                        <p>{t('about.desc3')}</p>
                    </div>
                </div>
            </section>

            {/* Availability */}
            <section className="py-20 px-4 bg-green-50">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl font-bold mb-8 text-slate-900">{t('availability.title')}</h2>
                    <p className="text-lg text-slate-600 mb-8">{t('availability.desc')}</p>
                    <Link
                        href="/reservation"
                        className="inline-block bg-green-600 text-white px-12 py-4 rounded-full font-bold text-lg hover:bg-green-700 transition-colors"
                    >
                        {t('availability.cta')}
                    </Link>
                </div>
            </section>

            {/* Adventure CTA */}
            <section className="relative py-20 overflow-hidden">
                <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
                    <source src="/uploads/programi/adventure/adventure_program_euroclub.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-green-900/80" />

                <div className="relative z-10 container mx-auto px-4 text-center text-white">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">{t('adventure.title')}</h2>
                    <p className="text-xl mb-10 max-w-2xl mx-auto">{t('adventure.desc')}</p>
                    <Link
                        href="/adventure-package"
                        className="inline-block bg-white text-green-900 px-8 py-4 rounded-full font-bold hover:bg-green-50 transition-colors"
                    >
                        {t('adventure.cta')}
                    </Link>
                </div>
            </section>
        </main>
    );
}