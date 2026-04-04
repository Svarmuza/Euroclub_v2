'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from '@/i18n/routing';
import type { Pathnames } from '@/i18n/routing';

interface Program {
    id: string;
    title: string;
    desc: string;
    cta: string;
    link?: Pathnames;
    image?: string;
}

interface Category {
    name: string;
    key: string;
    programs: Program[];
}

export default function TeenProgramsPage() {
    const t = useTranslations('Programs');
    const [expandedCards, setExpandedCards] = useState<Record<string, string | null>>({
        'ucenje-jezika': 'oxford-teen',
        'sport': 'sports-teen',
        'vjestine': 'digital-teen',
    });

    const toggleCard = (categoryKey: string, cardId: string) => {
        setExpandedCards(prev => ({
            ...prev,
            [categoryKey]: prev[categoryKey] === cardId ? null : cardId,
        }));
    };

    const teenPrograms: Category[] = [
        {
            name: t('teen.categories.languages'),
            key: 'ucenje-jezika',
            programs: [
                {
                    id: 'oxford-teen',
                    title: t('teen.programs.oxford.title'),
                    desc: t('teen.programs.oxford.desc'),
                    cta: t('teen.programs.oxford.cta'),
                    link: '/oxford-english',
                    image: '/uploads/programi/oxford/euroclub_oxford_english.webp',
                },
                {
                    id: 'croatian-teen',
                    title: t('teen.programs.croatian.title'),
                    desc: t('teen.programs.croatian.desc'),
                    cta: t('teen.programs.croatian.cta'),
                    link: '/croatian-language-camp',
                },
                {
                    id: 'german-teen',
                    title: t('teen.programs.german.title'),
                    desc: t('teen.programs.german.desc'),
                    cta: t('teen.programs.german.cta'),
                    link: '/german-language-camp',
                },
                {
                    id: 'italian-teen',
                    title: t('teen.programs.italian.title'),
                    desc: t('teen.programs.italian.desc'),
                    cta: t('teen.programs.italian.cta'),
                    link: '/italian-language-camp',
                },
                {
                    id: 'french-teen',
                    title: t('teen.programs.french.title'),
                    desc: t('teen.programs.french.desc'),
                    cta: t('teen.programs.french.cta'),
                    link: '/french-language-camp',
                },
            ],
        },
        {
            name: t('teen.categories.sports'),
            key: 'sport',
            programs: [
                {
                    id: 'sports-teen',
                    title: t('teen.programs.sports.title'),
                    desc: t('teen.programs.sports.desc'),
                    cta: t('teen.programs.sports.cta'),
                    link: '/sports',
                    image: '/uploads/programi/sport/euroclub_sport_1800.webp',
                },
            ],
        },
        {
            name: t('teen.categories.skills'),
            key: 'vjestine',
            programs: [
                {
                    id: 'digital-teen',
                    title: t('teen.programs.digital.title'),
                    desc: t('teen.programs.digital.desc'),
                    cta: t('teen.programs.digital.cta'),
                    link: '/digital-academy',
                    image: '/uploads/programi/digital academy/euroclub_digital_academy.webp',
                },
                {
                    id: 'challenger-teen',
                    title: t('teen.programs.challenger.title'),
                    desc: t('teen.programs.challenger.desc'),
                    cta: t('teen.programs.challenger.cta'),
                    link: '/teen-challenger',
                },
                {
                    id: 'leadership-teen',
                    title: t('teen.programs.leadership.title'),
                    desc: t('teen.programs.leadership.desc'),
                    cta: t('teen.programs.leadership.cta'),
                    link: '/leadership',
                },
                {
                    id: 'animator-teen',
                    title: t('teen.programs.animator.title'),
                    desc: t('teen.programs.animator.desc'),
                    cta: t('teen.programs.animator.cta'),
                    link: '/junior-animator',
                },
                {
                    id: 'arts-teen',
                    title: t('teen.programs.arts.title'),
                    desc: t('teen.programs.arts.desc'),
                    cta: t('teen.programs.arts.cta'),
                    link: '/art-fashion',
                },
            ],
        },
    ];

    const dates = [
        '14.06.', '21.06.', '28.06.', '05.07.', '12.07.',
        '19.07.', '26.07.', '02.08.', '09.08.', '16.08.', '23.08.'
    ];

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-blue-600 leading-tight">
                            {t('teen.hero.title')}
                        </h1>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                            {t('teen.hero.subtitle')}
                        </p>
                    </div>

                    {/* 3-Column Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {teenPrograms.map((category, categoryIndex) => {
                            const expandedCardId = expandedCards[category.key];

                            return (
                                <div key={categoryIndex} className="category-column">
                                    {/* Category Header */}
                                    <h2 className="text-2xl font-bold mb-6 text-blue-600 text-center border-b-4 border-orange-500 pb-3">
                                        {category.name}
                                    </h2>

                                    {/* Programs in Category */}
                                    <div className="space-y-4">
                                        {category.programs.map((program, programIndex) => {
                                            const isExpanded = expandedCardId === program.id;

                                            return (
                                                <div
                                                    key={program.id}
                                                    className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
                                                >
                                                    {/* Card Header */}
                                                    <button
                                                        onClick={() => toggleCard(category.key, program.id)}
                                                        className="w-full px-6 py-4 text-left bg-gradient-to-r from-orange-50 to-red-50 hover:from-orange-100 hover:to-red-100 transition-all duration-200 flex items-center justify-between"
                                                    >
                                                        <h3 className="text-lg font-bold text-gray-800 leading-tight pr-4">
                                                            {program.title}
                                                        </h3>
                                                        {isExpanded ? (
                                                            <ChevronUp className="h-5 w-5 text-gray-600 flex-shrink-0" />
                                                        ) : (
                                                            <ChevronDown className="h-5 w-5 text-gray-600 flex-shrink-0" />
                                                        )}
                                                    </button>

                                                    {/* Expandable Content */}
                                                    <div className={`px-6 py-4 bg-white ${!isExpanded ? 'hidden' : ''}`}>
                                                        {/* Image for first program in category */}
                                                        {programIndex === 0 && program.image && (
                                                            <div className="mb-4">
                                                                <img
                                                                    src={program.image}
                                                                    alt={program.title}
                                                                    className="w-full h-48 object-cover rounded-lg"
                                                                />
                                                            </div>
                                                        )}

                                                        {/* Description */}
                                                        <p className="text-gray-700 leading-relaxed mb-4">
                                                            {program.desc}
                                                        </p>

                                                        {/* Link */}
                                                        {program.link && (
                                                            <div className="pt-3 border-t border-gray-200">
                                                                <Link
                                                                    href={program.link}
                                                                    className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-200 flex items-center gap-1"
                                                                >
                                                                    {program.cta}
                                                                    <span className="text-xs">›</span>
                                                                </Link>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Programs Availability Table */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-600 leading-tight mb-4">
                            {t('teen.availability.title')}
                        </h2>
                    </div>

                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-orange-600 text-white">
                                        <th className="px-6 py-5 text-left font-bold border-r border-orange-500 min-w-[200px]">Program</th>
                                        {dates.map((date, idx) => (
                                            <th key={idx} className="px-4 py-5 text-center font-semibold text-sm min-w-[70px] border-r border-orange-500 last:border-0">{date}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="divide-x divide-gray-100">
                                        <td className="px-6 py-6 font-bold text-orange-900 bg-orange-50/50">{t('teen.programs.oxford.title')}</td>
                                        {dates.map((_, idx) => (
                                            <td key={idx} className="px-4 py-6 text-center">
                                                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                            </td>
                                        ))}
                                    </tr>
                                    <tr className="divide-x divide-gray-100 bg-gray-50">
                                        <td className="px-6 py-6 font-bold text-orange-900">{t('teen.programs.croatian.title')}</td>
                                        {dates.slice(0, 8).map((_, idx) => (
                                            <td key={idx} className="px-4 py-6 text-center">
                                                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                            </td>
                                        ))}
                                        {dates.slice(8).map((_, idx) => (
                                            <td key={idx} className="px-4 py-6 text-center">
                                                <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center mx-auto text-gray-400">
                                                    <span className="text-xs">–</span>
                                                </div>
                                            </td>
                                        ))}
                                    </tr>
                                    <tr className="divide-x divide-gray-100">
                                        <td className="px-6 py-6 font-bold text-orange-900 bg-orange-50/50">{t('teen.programs.german.title')}</td>
                                        {dates.slice(0, 8).map((_, idx) => (
                                            <td key={idx} className="px-4 py-6 text-center">
                                                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                            </td>
                                        ))}
                                        {dates.slice(8).map((_, idx) => (
                                            <td key={idx} className="px-4 py-6 text-center">
                                                <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center mx-auto text-gray-400">
                                                    <span className="text-xs">–</span>
                                                </div>
                                            </td>
                                        ))}
                                    </tr>
                                    <tr className="divide-x divide-gray-100 bg-gray-50">
                                        <td className="px-6 py-6 font-bold text-orange-900">{t('teen.programs.italian.title')}</td>
                                        {dates.slice(0, 8).map((_, idx) => (
                                            <td key={idx} className="px-4 py-6 text-center">
                                                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                            </td>
                                        ))}
                                        {dates.slice(8).map((_, idx) => (
                                            <td key={idx} className="px-4 py-6 text-center">
                                                <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center mx-auto text-gray-400">
                                                    <span className="text-xs">–</span>
                                                </div>
                                            </td>
                                        ))}
                                    </tr>
                                    <tr className="divide-x divide-gray-100">
                                        <td className="px-6 py-6 font-bold text-orange-900 bg-orange-50/50">{t('teen.programs.french.title')}</td>
                                        {dates.slice(0, 8).map((_, idx) => (
                                            <td key={idx} className="px-4 py-6 text-center">
                                                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                            </td>
                                        ))}
                                        {dates.slice(8).map((_, idx) => (
                                            <td key={idx} className="px-4 py-6 text-center">
                                                <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center mx-auto text-gray-400">
                                                    <span className="text-xs">–</span>
                                                </div>
                                            </td>
                                        ))}
                                    </tr>
                                    <tr className="divide-x divide-gray-100 bg-gray-50">
                                        <td className="px-6 py-6 font-bold text-orange-900">{t('teen.programs.sports.title')}</td>
                                        {dates.map((_, idx) => (
                                            <td key={idx} className="px-4 py-6 text-center">
                                                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                            </td>
                                        ))}
                                    </tr>
                                    <tr className="divide-x divide-gray-100">
                                        <td className="px-6 py-6 font-bold text-orange-900 bg-orange-50/50">{t('teen.programs.digital.title')}</td>
                                        {dates.map((_, idx) => (
                                            <td key={idx} className="px-4 py-6 text-center">
                                                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                            </td>
                                        ))}
                                    </tr>
                                    <tr className="divide-x divide-gray-100 bg-gray-50">
                                        <td className="px-6 py-6 font-bold text-orange-900">{t('teen.programs.challenger.title')}</td>
                                        {dates.slice(0, 4).map((_, idx) => (
                                            <td key={idx} className="px-4 py-6 text-center">
                                                <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center mx-auto text-gray-400">
                                                    <span className="text-xs">–</span>
                                                </div>
                                            </td>
                                        ))}
                                        {dates.slice(4).map((_, idx) => (
                                            <td key={idx} className="px-4 py-6 text-center">
                                                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                            </td>
                                        ))}
                                    </tr>
                                    <tr className="divide-x divide-gray-100">
                                        <td className="px-6 py-6 font-bold text-orange-900 bg-orange-50/50">{t('teen.programs.leadership.title')}</td>
                                        {dates.slice(0, 4).map((_, idx) => (
                                            <td key={idx} className="px-4 py-6 text-center">
                                                <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center mx-auto text-gray-400">
                                                    <span className="text-xs">–</span>
                                                </div>
                                            </td>
                                        ))}
                                        {dates.slice(4, 8).map((_, idx) => (
                                            <td key={idx} className="px-4 py-6 text-center">
                                                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                            </td>
                                        ))}
                                        {dates.slice(8).map((_, idx) => (
                                            <td key={idx} className="px-4 py-6 text-center">
                                                <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center mx-auto text-gray-400">
                                                    <span className="text-xs">–</span>
                                                </div>
                                            </td>
                                        ))}
                                    </tr>
                                    <tr className="divide-x divide-gray-100 bg-gray-50">
                                        <td className="px-6 py-6 font-bold text-orange-900">{t('teen.programs.animator.title')}</td>
                                        {dates.map((_, idx) => (
                                            <td key={idx} className="px-4 py-6 text-center">
                                                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                            </td>
                                        ))}
                                    </tr>
                                    <tr className="divide-x divide-gray-100">
                                        <td className="px-6 py-6 font-bold text-orange-900 bg-orange-50/50">{t('teen.programs.arts.title')}</td>
                                        {dates.slice(0, 8).map((_, idx) => (
                                            <td key={idx} className="px-4 py-6 text-center">
                                                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                            </td>
                                        ))}
                                        {dates.slice(8).map((_, idx) => (
                                            <td key={idx} className="px-4 py-6 text-center">
                                                <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center mx-auto text-gray-400">
                                                    <span className="text-xs">–</span>
                                                </div>
                                            </td>
                                        ))}
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="mt-8 mx-auto max-w-4xl text-center">
                        <p className="text-gray-600 italic text-sm md:text-base leading-relaxed mb-4">
                            * {t('teen.availability.note1')}
                        </p>
                        <p className="text-gray-600 italic text-sm md:text-base leading-relaxed">
                            ** {t('teen.availability.note2')}
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}