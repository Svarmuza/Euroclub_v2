import { getLocalizedMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    return await getLocalizedMetadata('programsTeen', locale);
}

export default function ProgramsTeenLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
