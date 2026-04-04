import { useTranslations } from 'next-intl';
import { SectionHeading } from '@/components/ui/section-heading';
import { Accordion } from '@/components/ui/accordion';
import FAQSchema from '@/components/FAQSchema';

import { getLocalizedMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    return await getLocalizedMetadata('faq', locale);
}

export default function FAQPage() {
    const t = useTranslations('FAQ');

    return (
        <>
            <FAQSchema />
            <div className="bg-white min-h-screen py-24 px-4 font-sans">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-16 text-center text-gray-900 tracking-tight">
                        {t('title')}
                    </h1>

                    <div className="space-y-16">
                        {t.raw('categories').map((category: any, i: number) => (
                            <div key={i} className="space-y-8">
                                <h2 className="text-2xl md:text-3xl font-black text-center text-blue-900 bg-blue-50 py-4 rounded-2xl">
                                    {category.category}
                                </h2>

                                <div className="space-y-4">
                                    {category.questions.map((faq: any, j: number) => (
                                        <Accordion
                                            key={faq.id}
                                            title={faq.question}
                                            theme="adriatic"
                                            className="border-none shadow-lg rounded-2xl"
                                        >
                                            <p className="text-gray-700 leading-relaxed whitespace-pre-line text-lg">
                                                {faq.answer}
                                            </p>
                                        </Accordion>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-24 p-12 bg-blue-600 rounded-[3rem] text-white text-center shadow-2xl relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-3xl font-black mb-6">
                                {t('categories.questions.faq-16.question') || "Još uvijek imate pitanja?"}
                            </h3>
                            <p className="text-xl mb-8 opacity-90 font-light max-w-2xl mx-auto">
                                {t('categories.questions.faq-16.answer') || "Slobodno nam se obratite za sve dodatne informacije."}
                            </p>
                            <a
                                href="mailto:office@euroclub.hr"
                                className="inline-block bg-white text-blue-600 font-black py-4 px-10 rounded-2xl text-xl hover:bg-gray-100 transition-all shadow-xl hover:-translate-y-1"
                            >
                                office@euroclub.hr
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
