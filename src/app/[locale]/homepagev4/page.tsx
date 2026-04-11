import HomeHeroV4 from '@/components/home/HomeHeroV4';
import HomeStatsV4 from '@/components/home/HomeStatsV4';
import HomeProgramsV4 from '@/components/home/HomeProgramsV4';
import HomeUnforgettableV4 from '@/components/home/HomeUnforgettableV4';
import HomeParentsV4 from '@/components/home/HomeParentsV4';
import HomeGalleryV4 from '@/components/home/HomeGalleryV4';
import HomeTestimonialsV4 from '@/components/home/HomeTestimonialsV4';
import HomeFinalCTAV4 from '@/components/home/HomeFinalCTAV4';

import { useTranslations } from 'next-intl';
import { getLocalizedMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    return await getLocalizedMetadata('home', locale);
}

export default function HomePageV4() {
    const t = useTranslations('Home');

    return (
        <div className="bg-white overflow-hidden">
            <HomeHeroV4 />
            <HomeStatsV4 />
            <HomeProgramsV4 />
            <HomeUnforgettableV4 />
            <HomeParentsV4 />
            <HomeGalleryV4 />
            <HomeTestimonialsV4 />
            <HomeFinalCTAV4 />
        </div>
    );
}
