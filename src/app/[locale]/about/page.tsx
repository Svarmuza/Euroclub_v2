import { useTranslations } from 'next-intl';
import { SectionHeading } from '@/components/ui/section-heading';
import { Card, CardContent } from '@/components/ui/card';
import { getLocalizedMetadata } from '@/lib/seo';
import { Link } from '@/i18n/routing';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    return await getLocalizedMetadata('about', locale);
}

const StatCircle = ({ value, label, color, suffix = "" }: { value: string | number, label: string, color: string, suffix?: string }) => (
    <div className="flex flex-col items-center">
        <div className={`w-40 h-40 rounded-full border-[12px] flex items-center justify-center text-2xl font-black mb-6 shadow-inset`} style={{ borderColor: color }}>
            <span className="text-gray-800">{value}{suffix}</span>
        </div>
        <p className="text-sm font-bold text-gray-600 uppercase tracking-wider max-w-[160px] leading-tight px-2">{label}</p>
    </div>
);

export default function AboutPage() {
    const t = useTranslations('About');
    const navT = useTranslations('Navbar');

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
                className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4"
                style={{
                    backgroundImage: "url('/uploads/about/euroclub-brodarica-drone2.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-black/50 z-0"></div>
                <div className="relative z-10 max-w-6xl mx-auto text-center text-white">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight drop-shadow-2xl">
                        {t('hero.title')}
                    </h1>
                    <p className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto font-light drop-shadow-lg opacity-90">
                        {t('hero.subtitle')}
                    </p>
                </div>
            </section>

            {/* Statistics Section */}
            <section className="py-24 px-4 bg-white">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-2xl md:text-4xl font-black text-gray-800 mb-20 px-4 leading-tight max-w-5xl mx-auto">
                        {t('mission.title')}
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
                        {stats.map((stat, i) => (
                            <StatCircle key={i} {...stat} />
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
                    <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 md:p-16 shadow-2xl text-center">
                        <p className="text-lg md:text-2xl text-gray-800 leading-relaxed font-medium">
                            {t('mission.desc')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Detailed Grid Details */}
            <section className="py-24 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {details.map((item) => (
                        <Card key={item.id} className="p-10 hover:shadow-2xl transition-all duration-300 border-none bg-white rounded-3xl group">
                            <CardContent className="flex flex-col md:flex-row gap-8 p-0">
                                <div className="text-6xl group-hover:scale-110 transition-transform duration-300 shrink-0">{item.icon}</div>
                                <div>
                                    <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">
                                        {t(`details.${item.id}.title`)}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed text-lg">
                                        {t(`details.${item.id}.desc`)}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* CTAs Section */}
            <section className="py-20 bg-blue-600 text-white px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-black mb-12">
                        {t('mission.title')}
                    </h2>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link
                            href="/junior-camp"
                            className="bg-orange-500 hover:bg-orange-600 text-white font-black py-5 px-10 rounded-2xl text-xl transition-all shadow-xl hover:-translate-y-1"
                        >
                            7-12 {t('hero.title').includes('Junior') ? 'YEARS' : 'GODINA'}
                        </Link>
                        <Link
                            href="/teen-camp"
                            className="bg-orange-600 hover:bg-orange-700 text-white font-black py-5 px-10 rounded-2xl text-xl transition-all shadow-xl hover:-translate-y-1"
                        >
                            13-17 {t('hero.title').includes('Junior') ? 'YEARS' : 'GODINA'}
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

