import HomeHero from '@/components/home/HomeHero';
import HomeStatsV3 from '@/components/home/HomeStatsV3';
import HomeProgramsV3 from '@/components/home/HomeProgramsV3';
import HomeUnforgettableV3 from '@/components/home/HomeUnforgettableV3';
import HomeParentsV3 from '@/components/home/HomeParentsV3';
import HomeGalleryV3 from '@/components/home/HomeGalleryV3';
import HomeTestimonialsV3 from '@/components/home/HomeTestimonialsV3';
import HomeFinalCTAV3 from '@/components/home/HomeFinalCTAV3';

import { useTranslations } from 'next-intl';
import { getLocalizedMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    return await getLocalizedMetadata('home', locale);
}

export default function HomePageV3() {
    const t = useTranslations('Home');

    return (
        <div className="bg-white">
            <HomeHero />
            <HomeStatsV3 />
            <HomeProgramsV3 />
            <HomeUnforgettableV3 />
            <HomeParentsV3 />
            <HomeGalleryV3 />
            <HomeTestimonialsV3 />
            <HomeFinalCTAV3 />
        </div>
    );
}
