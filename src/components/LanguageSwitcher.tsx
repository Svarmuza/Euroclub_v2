'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { Button } from '@/components/ui/button';
import { useTransition } from 'react';

const languages = [
    { code: 'hr', flag: '🇭🇷' },
    { code: 'en', flag: '🇬🇧' },
    { code: 'de', flag: '🇩🇪' },
    { code: 'fr', flag: '🇫🇷' },
    { code: 'it', flag: '🇮🇹' },
    { code: 'sl', flag: '🇸🇮' },
    { code: 'pl', flag: '🇵🇱' },
    { code: 'cs', flag: '🇨🇿' },
] as const;

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();

    function onSelectChange(nextLocale: string) {
        if (nextLocale === locale) return;
        startTransition(() => {
            router.replace(pathname, { locale: nextLocale });
        });
    }

    return (
        <div className="flex flex-wrap items-center gap-2">
            {languages.map(({ code, flag }) => (
                <Button
                    key={code}
                    variant={locale === code ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => onSelectChange(code)}
                    disabled={isPending}
                    className="min-w-[70px] px-2"
                >
                    <span className="mr-1 text-base leading-none">{flag}</span>
                    <span className="text-xs font-semibold uppercase">{code}</span>
                </Button>
            ))}
        </div>
    );
}
