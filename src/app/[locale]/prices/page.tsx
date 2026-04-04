import { useTranslations } from 'next-intl';
import { Card } from '@/components/ui/card';
import { Check, Star, Users } from 'lucide-react';
import { getLocalizedMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    return await getLocalizedMetadata('prices', locale);
}

export default function PricesPage() {
    const t = useTranslations('Prices');

    return (
        <div className="bg-white min-h-screen font-sans">
            {/* Header Section */}
            <section
                className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden"
                style={{
                    backgroundImage: "url(/uploads/cijene/glavna.webp)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px]" />
                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-black text-blue-900 mb-4 tracking-tight">
                        {t('title')}
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-800 font-light max-w-2xl mx-auto">
                        {t('subtitle')}
                    </p>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium italic">
                        {t('intro')}
                    </p>
                </div>
            </section>

            {/* English Camp Section */}
            <section className="py-20 bg-gray-50 border-y border-gray-100 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12 text-center md:text-left">
                        <span className="text-blue-500 font-bold tracking-wider uppercase text-sm">{t('basic.badge')}</span>
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mt-2">
                            {t('basic.title')}
                        </h2>
                        <p className="text-gray-500 mt-4 text-lg">{t('basic.desc')}</p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Pricing Table */}
                        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm text-left">
                                    <thead className="bg-blue-600 text-white uppercase text-xs">
                                        <tr>
                                            <th className="px-6 py-5 font-black tracking-wider">{t('basic.table.date')}</th>
                                            <th className="px-6 py-5 font-black tracking-wider text-center">{t('basic.table.full')}</th>
                                            <th className="px-6 py-5 font-black tracking-wider text-center">{t('basic.table.installments')}</th>
                                            <th className="px-6 py-5 font-black tracking-wider text-right">{t('basic.table.monthly')}</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {t.raw('basic.table.data').map((row: any, idx: number) => (
                                            <tr key={idx} className="hover:bg-blue-50/50 transition-colors">
                                                <td className="px-6 py-5 font-black text-gray-900">{row.date}</td>
                                                <td className="px-6 py-5 text-center font-black text-green-600 tracking-tight">{row.full}</td>
                                                <td className="px-6 py-5 text-center text-gray-600">{row.installments}</td>
                                                <td className="px-6 py-5 text-right text-gray-500 font-medium">{row.monthly}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Program Details */}
                        <Card className="p-10 border-none shadow-xl bg-white rounded-3xl h-fit">
                            <h3 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-3">
                                <Check className="w-8 h-8 text-green-500" />
                                {t('basic.includes.title')}
                            </h3>
                            <div className="grid gap-5">
                                {t.raw('basic.includes.items').map((item: string, idx: number) => (
                                    <div key={idx} className="flex gap-4 text-gray-700">
                                        <span className="w-2 h-2 rounded-full bg-blue-400 mt-2.5 shrink-0" />
                                        <span className="leading-relaxed text-lg font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Adventure Camp Section */}
            <section className="py-24 bg-gray-900 text-white px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12 text-center md:text-left">
                        <span className="text-amber-400 font-bold tracking-wider uppercase text-sm">{t('adventure.badge')}</span>
                        <h2 className="text-3xl md:text-5xl font-black mt-2">
                            {t('adventure.title')}
                        </h2>
                        <p className="text-gray-400 mt-4 text-lg">{t('adventure.desc')}</p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Adventure Table */}
                        <div className="bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-700">
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm text-left">
                                    <thead className="bg-amber-600 text-white uppercase text-xs">
                                        <tr>
                                            <th className="px-6 py-5 font-black tracking-wider">{t('adventure.table.date')}</th>
                                            <th className="px-6 py-5 font-black tracking-wider text-center">{t('adventure.table.full')}</th>
                                            <th className="px-6 py-5 font-black tracking-wider text-center">{t('adventure.table.installments')}</th>
                                            <th className="px-6 py-5 font-black tracking-wider text-right">{t('adventure.table.monthly')}</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-700">
                                        {t.raw('adventure.table.data').map((row: any, idx: number) => (
                                            <tr key={idx} className="hover:bg-amber-900/10 transition-colors">
                                                <td className="px-6 py-5 font-black text-gray-100">{row.date}</td>
                                                <td className="px-6 py-5 text-center font-black text-amber-400 tracking-tight">{row.full}</td>
                                                <td className="px-6 py-5 text-center text-gray-400">{row.installments}</td>
                                                <td className="px-6 py-5 text-right text-gray-500 font-medium">{row.monthly}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Adventure Details */}
                        <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl shadow-xl p-10 border border-gray-700 h-fit">
                            <h3 className="text-2xl font-black text-amber-400 mb-8 flex items-center gap-3">
                                <Star className="w-8 h-8 fill-amber-400" />
                                {t('adventure.includes.title')}
                            </h3>
                            <div className="grid gap-5">
                                {t.raw('adventure.includes.items').map((item: string, idx: number) => (
                                    <div key={idx} className="flex gap-4 text-gray-300">
                                        <span className="w-2 h-2 rounded-full bg-amber-500 mt-2.5 shrink-0" />
                                        <span className="leading-relaxed text-lg font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Discounts Section */}
            <section className="py-24 bg-blue-50 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight">{t('discounts.title')}</h2>
                        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-xl font-light">
                            {t('discounts.desc')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        {/* Loyalty */}
                        <Card className="p-10 rounded-[2.5rem] shadow-xl border-none bg-white hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-8 text-blue-600">
                                <Star className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-black text-gray-900 mb-8">{t('discounts.loyalty.title')}</h3>
                            <div className="space-y-8">
                                {t.raw('discounts.loyalty.items').map((item: any, i: number) => (
                                    <div key={i}>
                                        <div className="flex items-start gap-6">
                                            <div className="text-4xl font-black text-blue-600">{item.value}</div>
                                            <p className="text-gray-600 text-lg leading-snug pt-1">{item.text}</p>
                                        </div>
                                        <div className="w-full h-px bg-gray-100 mt-8 last:hidden" />
                                    </div>
                                ))}
                            </div>
                        </Card>

                        {/* Family */}
                        <Card className="p-10 rounded-[2.5rem] shadow-xl border-none bg-white hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mb-8 text-pink-600">
                                <Users className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-black text-gray-900 mb-8">{t('discounts.family.title')}</h3>
                            <div className="space-y-8">
                                {t.raw('discounts.family.items').map((item: any, i: number) => (
                                    <div key={i} className="flex items-start gap-6">
                                        <div className="text-4xl font-black text-pink-600">{item.value}</div>
                                        <p className="text-gray-600 text-lg leading-snug pt-1">{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
}

