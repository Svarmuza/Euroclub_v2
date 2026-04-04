import DailyScheduleContent from './DailyScheduleContent';
import { getLocalizedMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    return await getLocalizedMetadata('dailySchedule', locale);
}

export default function DailySchedulePage() {
    return <DailyScheduleContent />;
}