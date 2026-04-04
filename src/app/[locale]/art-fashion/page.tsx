import { useTranslations } from 'next-intl';
import { Sparkles, Palette, Music, Heart } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { getLocalizedMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    return await getLocalizedMetadata('artFashion', locale);
}

export default function ArtFashionPage() {
    const t = useTranslations('ArtFashion');

    const features = [
        { icon: Palette, title: t('features.makeup.title'), desc: t('features.makeup.desc') },
        { icon: Music, title: t('features.dance.title'), desc: t('features.dance.desc') },
        { icon: Sparkles, title: t('features.fashion.title'), desc: t('features.fashion.desc') },
        { icon: Heart, title: t('features.runway.title'), desc: t('features.runway.desc') }
    ];

    return (
        <main className="min-h-screen bg-white">
            <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0" style={{
                    backgroundImage: "url(/uploads/programi/art/euroclub_art.webp)",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-pink-900/80" />
                </div>
                <div className="relative z-10 container mx-auto px-4 text-center text-white mt-20">
                    <h1 className="text-5xl md:text-7xl font-black mb-6">{t('hero.title')}</h1>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 opacity-90">{t('hero.subtitle')}</p>
                    <Link href="/reservation" className="inline-block bg-pink-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-pink-500 transition-all">
                        {t('hero.cta')}
                    </Link>
                </div>
            </section>

            <section className="py-20 px-4">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">{t('about.title')}</h2>
                    <p className="text-lg text-slate-600 leading-relaxed text-center max-w-3xl mx-auto mb-12">{t('about.desc')}</p>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((f, i) => (
                            <div key={i} className="bg-pink-50 p-8 rounded-2xl border border-pink-100">
                                <f.icon className="w-12 h-12 text-pink-600 mb-4" />
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{f.title}</h3>
                                <p className="text-slate-600 text-sm">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-pink-50 border-t border-pink-100 text-center">
                <p className="text-gray-600 mb-4">{t('programsLabel')}</p>
                <div className="flex flex-wrap justify-center gap-4">
                    <Link href="/programs" className="text-pink-600 hover:text-pink-800 font-medium">{t('juniorPrograms')}</Link>
                    <span className="text-gray-400">|</span>
                    <Link href="/programs/teen" className="text-pink-600 hover:text-pink-800 font-medium">{t('teenPrograms')}</Link>
                </div>
            </section>
        </main>
    );
}