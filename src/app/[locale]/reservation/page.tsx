import { useTranslations } from 'next-intl';
import ReservationForm from '@/components/forms/ReservationForm';

import { getLocalizedMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    return await getLocalizedMetadata('reservation', locale);
}

export default function ReservationPage() {
    const t = useTranslations('Reservation');

    return (
        <div className="bg-gray-50 min-h-screen py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
                        {t('title')}
                    </h1>
                    <p className="text-xl text-gray-600 font-light">
                        {t('subtitle')}
                    </p>
                </div>

                <ReservationForm />
            </div>
        </div>
    );
}
