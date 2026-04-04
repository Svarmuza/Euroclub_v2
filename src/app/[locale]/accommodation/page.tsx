import AccommodationContent from './AccommodationContent';
import { getLocalizedMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    return await getLocalizedMetadata('accommodation', locale);
}

export default function AccommodationPage() {
    return <AccommodationContent />;
}
