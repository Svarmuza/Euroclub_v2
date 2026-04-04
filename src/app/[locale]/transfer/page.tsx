import { useTranslations } from 'next-intl';
import { Bus, Users, MapPin, Phone, Mail, Clock, Shield, Check } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { getLocalizedMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    return await getLocalizedMetadata('transfer', locale);
}

export default function TransferPage() {
    const t = useTranslations('Transfer');

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: "url(/uploads/about/euroclub-brodarica-drone2.jpg)",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-blue-900/80" />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600/30 backdrop-blur-md rounded-full mb-8">
                        <Bus className="w-10 h-10" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
                        {t('hero.title')}
                    </h1>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
                        {t('hero.subtitle')}
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        {/* Intro */}
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                {t('intro.title')}
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                {t('intro.desc')}
                            </p>
                        </div>

                        {/* Features Grid */}
                        <div className="grid md:grid-cols-2 gap-8 mb-16">
                            <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                                        <Bus className="w-7 h-7 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">{t('features.supervised.title')}</h3>
                                        <p className="text-gray-600 leading-relaxed">{t('features.supervised.desc')}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-green-50 p-8 rounded-3xl border border-green-100">
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 bg-green-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-7 h-7 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">{t('features.cities.title')}</h3>
                                        <p className="text-gray-600 leading-relaxed">{t('features.cities.desc')}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-orange-50 p-8 rounded-3xl border border-orange-100">
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 bg-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                                        <Users className="w-7 h-7 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">{t('features.groups.title')}</h3>
                                        <p className="text-gray-600 leading-relaxed">{t('features.groups.desc')}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-purple-50 p-8 rounded-3xl border border-purple-100">
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 bg-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                                        <Shield className="w-7 h-7 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">{t('features.safety.title')}</h3>
                                        <p className="text-gray-600 leading-relaxed">{t('features.safety.desc')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Pricing Info */}
                        <div className="bg-gray-50 p-8 md:p-12 rounded-3xl mb-16">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                                {t('pricing.title')}
                            </h2>
                            <div className="space-y-4 max-w-2xl mx-auto">
                                <div className="flex items-center gap-4 p-4 bg-white rounded-xl">
                                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                        <Check className="w-5 h-5 text-green-600" />
                                    </div>
                                    <p className="text-gray-700">{t('pricing.option1')}</p>
                                </div>
                                <div className="flex items-center gap-4 p-4 bg-white rounded-xl">
                                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                        <Bus className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <p className="text-gray-700">{t('pricing.option2')}</p>
                                </div>
                                <div className="flex items-center gap-4 p-4 bg-white rounded-xl">
                                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                                        <Users className="w-5 h-5 text-orange-600" />
                                    </div>
                                    <p className="text-gray-700">{t('pricing.option3')}</p>
                                </div>
                            </div>
                        </div>

                        {/* How to Book */}
                        <div className="mb-16">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                                {t('booking.title')}
                            </h2>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-2xl font-bold text-blue-600">1</span>
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-2">{t('booking.step1.title')}</h3>
                                    <p className="text-gray-600 text-sm">{t('booking.step1.desc')}</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-2xl font-bold text-blue-600">2</span>
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-2">{t('booking.step2.title')}</h3>
                                    <p className="text-gray-600 text-sm">{t('booking.step2.desc')}</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-2xl font-bold text-blue-600">3</span>
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-2">{t('booking.step3.title')}</h3>
                                    <p className="text-gray-600 text-sm">{t('booking.step3.desc')}</p>
                                </div>
                            </div>
                        </div>

                        {/* Contact CTA */}
                        <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 md:p-12 rounded-3xl text-center">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">{t('contact.title')}</h2>
                            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">{t('contact.desc')}</p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="tel:+38522350600"
                                    className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-colors"
                                >
                                    <Phone className="w-5 h-5" />
                                    +385 22 350 600
                                </a>
                                <a
                                    href="mailto:info@euroclub.hr"
                                    className="inline-flex items-center justify-center gap-2 bg-blue-700 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-600 transition-colors"
                                >
                                    <Mail className="w-5 h-5" />
                                    info@euroclub.hr
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reservation CTA */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-gray-600 mb-6">{t('reservation.note')}</p>
                    <Link
                        href="/reservation"
                        className="inline-block bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-colors"
                    >
                        {t('reservation.button')}
                    </Link>
                </div>
            </section>
        </main>
    );
}