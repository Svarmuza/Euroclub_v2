import HomeHero from '@/components/home/HomeHero';
import HomeParents from '@/components/home/HomeParentsV2';
import HomeUnforgettable from '@/components/home/HomeUnforgettableV2';
import HomeAdventure from '@/components/home/HomeAdventureV2';
import HomeStory from '@/components/home/HomeStoryV2';
import HomeFuture from '@/components/home/HomeFutureV2';
import HomeGallery from '@/components/home/HomeGalleryV2';
import HomeTestimonials from '@/components/home/HomeTestimonialsV2';

import { useTranslations } from 'next-intl';

import { getLocalizedMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    return await getLocalizedMetadata('home', locale);
}

export default function HomePageV2() {
    const t = useTranslations('Home');

    return (
        <div className="bg-white">
            <HomeHero />
            <HomeUnforgettable />
            <HomeAdventure />
            <HomeStory />
            <HomeFuture />
            <HomeParents />
            <HomeGallery />
            <HomeTestimonials />
        </div>
    );
}
