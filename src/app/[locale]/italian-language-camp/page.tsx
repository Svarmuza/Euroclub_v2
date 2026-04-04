import { useTranslations } from 'next-intl';
import { Globe, Users, BookOpen, Award } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { getLocalizedMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    return await getLocalizedMetadata('italianCamp', locale);
}

export default function ItalianLanguageCampPage() {
    const t = useTranslations('ItalianCamp');

    return (
        <main className="min-h-screen bg-white">
            <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0" style={{
                    backgroundImage: "url(/uploads/programi/italian/euroclub_italian.webp)",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-green-900/80" />
                </div>
                <div className="relative z-10 container mx-auto px-4 text-center text-white mt-20">
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                        <span className="text-2xl">🇮🇹</span>
                        <span className="font-semibold">{t('hero.badge')}</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black mb-6">{t('hero.title')}</h1>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 opacity-90">{t('hero.subtitle')}</p>
                    <Link href="/reservation" className="inline-block bg-green-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-green-500 transition-all">
                        {t('hero.cta')}
                    </Link>
                </div>
            </section>

            <section className="py-20 px-4 bg-slate-50">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-slate-900">{t('about.title')}</h2>
                    <p className="text-lg text-slate-600 leading-relaxed">{t('about.desc')}</p>
                </div>
            </section>

            <section className="py-16 bg-slate-50 border-t border-slate-200 text-center">
                <p className="text-gray-600 mb-4">{t('programsLabel')}</p>
                <div className="flex flex-wrap justify-center gap-4">
                    <Link href="/programs" className="text-green-600 hover:text-green-800 font-medium">{t('juniorPrograms')}</Link>
                    <span className="text-gray-400">|</span>
                    <Link href="/programs/teen" className="text-green-600 hover:text-green-800 font-medium">{t('teenPrograms')}</Link>
                </div>
            </section>
        </main>
    );
}