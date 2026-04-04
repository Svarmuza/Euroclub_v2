import HomeHero from '@/components/home/HomeHero';
import HomeParents from '@/components/home/HomeParents';
import HomeUnforgettable from '@/components/home/HomeUnforgettable';
import HomeAdventure from '@/components/home/HomeAdventure';
import HomeStory from '@/components/home/HomeStory';
import HomeFuture from '@/components/home/HomeFuture';
import HomeGallery from '@/components/home/HomeGallery';
import HomeTestimonials from '@/components/home/HomeTestimonials';

import { useTranslations } from 'next-intl';

import { getLocalizedMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    return await getLocalizedMetadata('home', locale);
}

export default function HomePage() {
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
