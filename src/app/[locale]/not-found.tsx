'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
    const t = useTranslations('NotFound');

    return (
        <div className="min-h-[60vh] flex items-center justify-center px-4">
            <div className="text-center">
                <div className="mb-8">
                    <span className="text-[120px] md:text-[180px] font-black text-sea/10 select-none">
                        404
                    </span>
                </div>
                <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                    {t('title')}
                </h1>
                <p className="text-slate-600 mb-8 max-w-md mx-auto">
                    {t('description')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                        asChild
                        className="bg-sea hover:bg-sea-dark text-white font-semibold px-6 py-3 rounded-xl"
                    >
                        <Link href="/">
                            <Home className="w-4 h-4 mr-2" />
                            {t('goHome')}
                        </Link>
                    </Button>
                    <Button
                        variant="outline"
                        onClick={() => window.history.back()}
                        className="border-2 border-slate-200 hover:bg-slate-50 font-semibold px-6 py-3 rounded-xl"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        {t('goBack')}
                    </Button>
                </div>
            </div>
        </div>
    );
}
