import { useTranslations } from 'next-intl';
import { Calendar, Users, Check, BookOpen, Award, Play, Globe, Sparkles } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { getLocalizedMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    return await getLocalizedMetadata('oxfordEnglish', locale);
}

export default function OxfordEnglishPage() {
    const t = useTranslations('OxfordEnglish');

    const features = [
        {
            icon: Calendar,
            title: t('features.guaranteed.title'),
            description: t('features.guaranteed.desc')
        },
        {
            icon: Users,
            title: t('features.nativeSpeakers.title'),
            description: t('features.nativeSpeakers.desc')
        },
        {
            icon: Check,
            title: t('features.adaptedGroups.title'),
            description: t('features.adaptedGroups.desc')
        },
        {
            icon: BookOpen,
            title: t('features.literature.title'),
            description: t('features.literature.desc')
        }
    ];

    const dates = [
        '21.06.', '28.06.', '05.07.', '12.07.', '19.07.',
        '26.07.', '02.08.', '09.08.', '16.08.', '23.08.'
    ];

    return (
        <main className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: "url(/uploads/programi/oxford/euroclub_oxford_english.webp)",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-slate-900/90" />
                </div>

                <div className="relative z-10 container mx-auto px-4 text-center mt-20">
                    <span className="inline-block py-2 px-6 rounded-full bg-blue-600/30 border border-blue-400/30 backdrop-blur-md text-blue-100 font-semibold mb-6 tracking-wide">
                        {t('hero.badge')}
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight tracking-tight">
                        {t('hero.title')}
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed font-light mb-12">
                        {t('hero.subtitle')}
                    </p>
                    <Link
                        href="/reservation"
                        className="inline-block bg-blue-600 text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:bg-blue-500 transition-all duration-300"
                    >
                        {t('hero.cta')}
                    </Link>
                </div>
            </section>

            {/* Info Grid Section */}
            <section className="py-20 px-4 -mt-20 relative z-20">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, idx) => (
                            <div
                                key={idx}
                                className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 hover:border-blue-200 transition-colors"
                            >
                                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600">
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

            {/* Detailed Program Section */}
            <section className="py-20 px-4 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid lg:grid-cols-3 gap-16 items-start">
                        <div className="lg:col-span-2 space-y-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                                <span className="w-2 h-10 bg-blue-600 rounded-full block"></span>
                                {t('program.title')}
                            </h2>
                            <div className="prose prose-lg text-slate-600 leading-relaxed">
                                <p>{t('program.desc1')}</p>
                                <p>{t('program.desc2')}</p>
                                <p>{t('program.desc3')}</p>
                                <p>{t('program.desc4')}</p>
                            </div>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl border border-amber-100 shadow-lg sticky top-24">
                                <div className="flex items-center gap-3 mb-4 text-amber-600">
                                    <Award size={32} />
                                    <h3 className="text-xl font-bold text-amber-800">{t('note.title')}</h3>
                                </div>
                                <p className="text-amber-900/80 leading-relaxed text-sm">
                                    {t('note.desc')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Availability Table Section */}
            <section className="py-20 px-4 bg-slate-50">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
                        {t('availability.title')}
                    </h2>

                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-slate-900 text-white">
                                        <th className="px-6 py-5 text-left font-bold border-r border-slate-700 min-w-[200px]">{t('availability.program')}</th>
                                        {dates.map((date, idx) => (
                                            <th key={idx} className="px-4 py-5 text-center font-semibold text-sm min-w-[80px] border-r border-slate-700 last:border-0">{date}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="divide-x divide-slate-100">
                                        <td className="px-6 py-6 font-bold text-blue-900 bg-blue-50/50">{t('hero.title')}</td>
                                        {dates.map((_, idx) => (
                                            <td key={idx} className="px-4 py-6 text-center">
                                                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600">
                                                    <Check size={16} strokeWidth={3} />
                                                </div>
                                            </td>
                                        ))}
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <Link
                            href="/reservation"
                            className="bg-blue-600 text-white px-12 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300"
                        >
                            {t('availability.cta')}
                        </Link>
                    </div>
                </div>
            </section>

            {/* Adventure CTA Video Section */}
            <section className="relative py-32 overflow-hidden">
                <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
                    <source src="/uploads/programi/adventure/adventure_program_euroclub.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-blue-900/80 mix-blend-multiply" />

                <div className="relative z-10 container mx-auto px-4 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">{t('adventure.title')}</h2>
                        <p className="text-xl text-blue-100 mb-10 leading-relaxed">
                            {t('adventure.desc')}
                        </p>
                        <Link
                            href="/adventure-package"
                            className="inline-flex items-center gap-3 bg-white text-blue-900 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-colors"
                        >
                            <Play size={20} fill="currentColor" />
                            {t('adventure.cta')}
                        </Link>
                    </div>
                </div>
            </section>

            {/* Programs Links */}
            <section className="py-12 bg-slate-50 border-t border-slate-200">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-gray-600 mb-4">{t('programsLabel')}</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/programs" className="text-blue-600 hover:text-blue-800 font-medium">
                            {t('juniorPrograms')}
                        </Link>
                        <span className="text-gray-400">|</span>
                        <Link href="/programs/teen" className="text-blue-600 hover:text-blue-800 font-medium">
                            {t('teenPrograms')}
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}