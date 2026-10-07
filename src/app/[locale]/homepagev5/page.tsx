import HomeV5 from '@/components/home/HomeV5';
import { getLocalizedMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    return await getLocalizedMetadata('home', locale);
}

export default function HomePageV5() {
    return <HomeV5 />;
}
