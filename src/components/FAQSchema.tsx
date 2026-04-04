'use client';

import { useTranslations } from 'next-intl';

interface FAQItem {
    id: string;
    question: string;
    answer: string;
}

interface FAQCategory {
    category: string;
    questions: FAQItem[];
}

export default function FAQSchema() {
    const t = useTranslations('FAQ');

    const faqData = t.raw('categories') as FAQCategory[];

    const faqPageSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqData.flatMap((category) =>
            category.questions.map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: faq.answer,
                },
            }))
        ),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(faqPageSchema),
            }}
        />
    );
}
