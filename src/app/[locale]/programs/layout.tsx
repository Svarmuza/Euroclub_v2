import { getLocalizedMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    return await getLocalizedMetadata('programs', locale);
}

export default function ProgramsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
