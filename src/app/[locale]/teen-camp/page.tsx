import { useTranslations } from 'next-intl';
import { getLocalizedMetadata } from '@/lib/seo';
import { Globe, Users, Smartphone, Sparkles, Star, ChevronRight } from 'lucide-react';
import { Link } from '@/i18n/routing';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    return await getLocalizedMetadata('teen', locale);
}

export default function TeenCampPage() {
    const t = useTranslations('TeenCamp');

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: "url(/uploads/12-17/euroclub_teen_ljetni_kamp01.jpg)",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white">
                    <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter leading-none uppercase italic">
                        {t('title')}
                    </h1>
                    <p className="text-3xl md:text-5xl font-black mb-8 text-orange-500 drop-shadow-lg">
                        {t('subtitle')}
                    </p>
                    <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-medium opacity-90 drop-shadow">
                        {t('description')}
                    </p>
                    <div className="mt-12">
                        <Link
                            href="/reservation"
                            className="inline-flex items-center gap-3 bg-orange-600 text-white px-10 py-5 rounded-full font-black text-xl hover:bg-orange-700 transition-all transform hover:scale-105 shadow-2xl"
                        >
                            {t('cta.button')}
                            <ChevronRight className="w-6 h-6" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section className="py-24 overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="flex-1 relative">
                            <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-100 rounded-full blur-3xl opacity-50 -z-10" />
                            <img
                                src="/uploads/12-17/euroclub_ljetni_kamp_za_tinejdzere.jpg"
                                alt="Teen Camp experience"
                                className="rounded-[2.5rem] shadow-2xl skew-y-1 hover:skew-y-0 transition-transform duration-700"
                            />
                        </div>
                        <div className="flex-1 space-y-8">
                            <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight tracking-tight">
                                {t('features.english.title')}
                            </h2>
                            <p className="text-xl text-gray-600 leading-relaxed font-medium">
                                {t('features.english.desc')}
                            </p>
                            <div className="space-y-6">
                                <div className="p-8 bg-gradient-to-br from-blue-50 to-white rounded-[2rem] border-2 border-blue-100 shadow-sm relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform">
                                        <Globe className="w-24 h-24 text-blue-600" />
                                    </div>
                                    <h3 className="font-black text-2xl mb-3 text-blue-900">{t('features.english.active.title')}</h3>
                                    <p className="text-blue-800/80 leading-relaxed font-medium relative z-10">{t('features.english.active.desc')}</p>
                                </div>
                                <div className="p-8 bg-gradient-to-br from-purple-50 to-white rounded-[2rem] border-2 border-purple-100 shadow-sm relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform">
                                        <Users className="w-24 h-24 text-purple-600" />
                                    </div>
                                    <h3 className="font-black text-2xl mb-3 text-purple-900">{t('features.english.nativeSpeakers.title')}</h3>
                                    <p className="text-purple-800/80 leading-relaxed font-medium relative z-10">{t('features.english.nativeSpeakers.desc')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Crew Section */}
            <section className="relative py-32 text-white overflow-hidden">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: "url(/uploads/programi/teen/kamp_engleskog_jezika_euroclub.webp)",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
                </div>

                <div className="relative z-10 container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center mb-20">
                        <div className="inline-block bg-white text-black px-8 py-4 rounded-2xl transform -rotate-1 mb-8 shadow-2xl">
                            <h2 className="text-3xl md:text-5xl font-black tracking-tighter">
                                {t('features.friendships.title')}
                            </h2>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        <div className="group">
                            <div className="bg-white/10 backdrop-blur-xl p-10 rounded-[3rem] border border-white/20 hover:border-orange-500/50 transition-all duration-500 hover:-translate-y-2">
                                <Users className="w-16 h-16 text-orange-500 mb-8" />
                                <h3 className="text-3xl font-black mb-6">{t('features.friendships.lifeLong.title')}</h3>
                                <p className="text-lg leading-relaxed opacity-80 font-medium">{t('features.friendships.lifeLong.desc')}</p>
                            </div>
                        </div>
                        <div className="group">
                            <div className="bg-white/10 backdrop-blur-xl p-10 rounded-[3rem] border border-white/20 hover:border-orange-500/50 transition-all duration-500 hover:-translate-y-2">
                                <Sparkles className="w-16 h-16 text-orange-500 mb-8" />
                                <h3 className="text-3xl font-black mb-6">{t('features.friendships.action.title')}</h3>
                                <p className="text-lg leading-relaxed opacity-80 font-medium">{t('features.friendships.action.desc')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Digital Balance */}
            <section className="py-32 bg-gray-50 overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto bg-white rounded-[4rem] shadow-2xl p-12 md:p-20 relative border border-gray-100">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-100 rounded-full blur-[100px] opacity-30 -z-10" />
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter mb-8">
                                {t('features.digitalBalance.title')}
                            </h2>
                            <Smartphone className="w-16 h-16 text-gray-900 mx-auto mb-8 animate-pulse" />
                        </div>
                        <div className="space-y-8 text-center max-w-3xl mx-auto">
                            <p className="text-2xl text-gray-700 leading-relaxed font-black">
                                {t('features.digitalBalance.desc1')}
                            </p>
                            <p className="text-xl text-gray-500 leading-relaxed font-medium italic">
                                {t('features.digitalBalance.desc2')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Adventure Section */}
            <section className="relative py-48 overflow-hidden group">
                <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-110">
                    <source src="/uploads/programi/adventure/adventure_program_euroclub.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80" />

                <div className="relative z-10 container mx-auto px-4 text-center">
                    <div className="max-w-3xl mx-auto text-white">
                        <div className="bg-orange-600 text-white px-6 py-2 rounded-full w-fit mx-auto mb-8 font-black text-sm uppercase tracking-[0.3em] shadow-xl">
                            Elite
                        </div>
                        <h2 className="text-6xl md:text-9xl font-black mb-8 leading-none italic uppercase tracking-tighter drop-shadow-2xl">
                            {t('features.adventure.title')}
                        </h2>
                        <p className="text-2xl md:text-3xl leading-relaxed mb-12 font-black italic text-orange-100">
                            {t('features.adventure.desc')}
                        </p>
                        <Link
                            href="/adventure-package"
                            className="inline-flex items-center gap-4 bg-white text-black px-12 py-6 rounded-[2rem] font-black text-2xl hover:bg-orange-600 hover:text-white transition-all transform hover:scale-110 shadow-[0_20px_50px_rgba(255,255,255,0.2)]"
                        >
                            {t('features.adventure.button')}
                            <ChevronRight className="w-8 h-8" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 bg-black text-white text-center">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-5xl md:text-8xl font-black mb-10 leading-none tracking-tighter uppercase italic">
                        {t('cta.title')}
                    </h2>
                    <p className="text-2xl md:text-3xl font-medium mb-16 text-gray-400">
                        {t('cta.subtitle')}
                    </p>
                    <Link
                        href="/reservation"
                        className="inline-block bg-orange-600 text-white px-16 py-8 rounded-[3rem] font-black text-3xl hover:bg-white hover:text-black transition-all transform hover:rotate-2 shadow-2xl hover:shadow-orange-600/30"
                    >
                        {t('cta.button')}
                    </Link>
                </div>
            </section>
        </main>
    );
}
