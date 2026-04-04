import AdventurePackageContent from './AdventurePackageContent';
import { getLocalizedMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    return await getLocalizedMetadata('adventurePackage', locale);
}

export default function AdventurePackagePage() {
    return <AdventurePackageContent />;
}