import { useTranslations } from 'next-intl';
import { getLocalizedMetadata } from '@/lib/seo';
import { Globe, Users, Smartphone, Heart, Sparkles, Star, ChevronRight } from 'lucide-react';
import { Link } from '@/i18n/routing';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    return await getLocalizedMetadata('junior', locale);
}

export default function JuniorCampPage() {
    const t = useTranslations('JuniorCamp');

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: "url(/uploads/programi/junior/euroclub_ljetni_kamp_za_djecu.jpg)",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="absolute inset-0 bg-black/40" />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white">
                    <div className="inline-block text-6xl mb-6 animate-bounce">☀️</div>
                    <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tight leading-none">
                        {t('title')}
                    </h1>
                    <p className="text-2xl md:text-4xl font-bold mb-8 text-yellow-400">
                        {t('subtitle')}
                    </p>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light opacity-90">
                        {t('description')}
                    </p>
                </div>
            </section>

            {/* English Section */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="flex-1">
                            <div className="relative">
                                <img
                                    src="/uploads/7-12/junior_ljetni_kamp.jpg"
                                    alt="Junior Camp"
                                    className="rounded-[3rem] shadow-2xl relative z-10"
                                />
                                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 rounded-full -z-10" />
                            </div>
                        </div>
                        <div className="flex-1 space-y-8">
                            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                                {t('features.english.title')}
                            </h2>
                            <div className="space-y-6">
                                <div className="flex gap-4 items-start p-6 bg-blue-50 rounded-3xl border border-blue-100">
                                    <Globe className="w-8 h-8 text-blue-600 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-bold text-xl mb-2 text-gray-900">{t('features.english.nativeSpeakers.title')}</h3>
                                        <p className="text-gray-600 leading-relaxed">{t('features.english.nativeSpeakers.desc')}</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start p-6 bg-cyan-50 rounded-3xl border border-cyan-100">
                                    <Sparkles className="w-8 h-8 text-cyan-600 flex-shrink-0" />
                                    <p className="text-gray-600 leading-relaxed font-medium">{t('features.english.playBased')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Friendships Section with Image Background */}
            <section className="relative py-32 text-white overflow-hidden">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: "url(/uploads/7-12/ljetni_kamp_za_djecu_euroclub.jpg)",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="absolute inset-0 bg-blue-900/40" />
                </div>

                <div className="relative z-10 container mx-auto px-4">
                    <div className="max-w-4xl">
                        <div className="bg-white/95 backdrop-blur shadow-2xl p-8 md:p-12 rounded-[2rem] border-l-[12px] border-blue-600 inline-block mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                                {t('features.friendships.title')}
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 pt-12">
                            <div className="bg-white/20 backdrop-blur-md p-8 rounded-3xl border border-white/30 hover:bg-white/30 transition-all group">
                                <Users className="w-12 h-12 mb-6 group-hover:scale-110 transition-transform" />
                                <h3 className="text-2xl font-black mb-4">{t('features.friendships.international.title')}</h3>
                                <p className="leading-relaxed opacity-90">{t('features.friendships.international.desc')}</p>
                            </div>
                            <div className="bg-white/20 backdrop-blur-md p-8 rounded-3xl border border-white/30 hover:bg-white/30 transition-all group">
                                <Sparkles className="w-12 h-12 mb-6 group-hover:scale-110 transition-transform" />
                                <h3 className="text-2xl font-black mb-4">{t('features.friendships.confidence.title')}</h3>
                                <p className="leading-relaxed opacity-90">{t('features.friendships.confidence.desc')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Digital Balance */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl md:text-6xl font-black text-center mb-16 text-gray-900 tracking-tight">
                        {t('features.digitalBalance.title')}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border-l-[12px] border-green-500">
                            <Smartphone className="w-12 h-12 text-green-600 mb-6" />
                            <h3 className="text-2xl font-black mb-4 text-gray-900">{t('features.digitalBalance.focus.title')}</h3>
                            <p className="text-gray-600 text-lg leading-relaxed">{t('features.digitalBalance.focus.desc')}</p>
                        </div>
                        <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border-l-[12px] border-orange-500">
                            <Heart className="w-12 h-12 text-orange-600 mb-6" />
                            <h3 className="text-2xl font-black mb-4 text-gray-900">{t('features.digitalBalance.activities.title')}</h3>
                            <p className="text-gray-600 text-lg leading-relaxed">{t('features.digitalBalance.activities.desc')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Adventure Section */}
            <section className="relative py-40 overflow-hidden">
                <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
                    <source src="/uploads/programi/adventure/adventure_program_euroclub.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />

                <div className="relative z-10 container mx-auto px-4">
                    <div className="max-w-2xl text-white">
                        <div className="flex items-center gap-2 mb-6 bg-yellow-400 text-black px-4 py-1 rounded-full w-fit font-black text-sm uppercase tracking-widest">
                            <Star className="w-4 h-4 fill-black" />
                            Premium
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black mb-8 leading-none italic">{t('features.adventure.title')}</h2>
                        <p className="text-xl md:text-2xl leading-relaxed mb-8 font-light italic opacity-90">
                            {t('features.adventure.desc')}
                        </p>
                        <p className="text-lg md:text-xl font-bold mb-10 text-yellow-400 leading-relaxed italic">
                            {t('features.adventure.safety')}
                        </p>
                        <Link
                            href="/adventure-package"
                            className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-2xl font-black text-xl hover:bg-yellow-400 transition-colors group shadow-2xl"
                        >
                            {t('features.adventure.button')}
                            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-blue-600 text-white text-center rounded-t-[4rem]">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-4xl md:text-6xl font-black mb-10 leading-tight">
                        {t('cta.title')}
                    </h2>
                    <Link
                        href="/reservation"
                        className="inline-block bg-white text-blue-600 px-12 py-6 rounded-2xl font-black text-2xl hover:bg-yellow-400 hover:text-black transition-all transform hover:scale-105 shadow-2xl hover:shadow-yellow-400/20"
                    >
                        {t('cta.button')}
                    </Link>
                </div>
            </section>
        </main>
    );
}
