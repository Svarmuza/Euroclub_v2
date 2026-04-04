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

export default function ProgramsPage() {
    const t = useTranslations('Programs');
    const [expandedCards, setExpandedCards] = useState<Record<string, string | null>>({
        'ucenje-jezika': 'oxford-junior',
        'sport': 'sports-junior',
        'vjestine': 'digital-junior',
    });

    const toggleCard = (categoryKey: string, cardId: string) => {
        setExpandedCards(prev => ({
            ...prev,
            [categoryKey]: prev[categoryKey] === cardId ? null : cardId,
        }));
    };

    const juniorPrograms: Category[] = [
        {
            name: t('junior.categories.languages'),
            key: 'ucenje-jezika',
            programs: [
                {
                    id: 'oxford-junior',
                    title: t('junior.programs.oxford.title'),
                    desc: t('junior.programs.oxford.desc'),
                    cta: t('junior.programs.oxford.cta'),
                    link: '/oxford-english',
                    image: '/uploads/programi/oxford/euroclub_oxford_english.webp',
                },
                {
                    id: 'croatian-junior',
                    title: t('junior.programs.croatian.title'),
                    desc: t('junior.programs.croatian.desc'),
                    cta: t('junior.programs.croatian.cta'),
                    link: '/croatian-language-camp',
                },
                {
                    id: 'german-junior',
                    title: t('junior.programs.german.title'),
                    desc: t('junior.programs.german.desc'),
                    cta: t('junior.programs.german.cta'),
                    link: '/german-language-camp',
                },
                {
                    id: 'italian-junior',
                    title: t('junior.programs.italian.title'),
                    desc: t('junior.programs.italian.desc'),
                    cta: t('junior.programs.italian.cta'),
                    link: '/italian-language-camp',
                },
                {
                    id: 'french-junior',
                    title: t('junior.programs.french.title'),
                    desc: t('junior.programs.french.desc'),
                    cta: t('junior.programs.french.cta'),
                    link: '/french-language-camp',
                },
            ],
        },
        {
            name: t('junior.categories.sports'),
            key: 'sport',
            programs: [
                {
                    id: 'sports-junior',
                    title: t('junior.programs.sports.title'),
                    desc: t('junior.programs.sports.desc'),
                    cta: t('junior.programs.sports.cta'),
                    link: '/sports',
                    image: '/uploads/programi/sport/euroclub_sport_1800.webp',
                },
            ],
        },
        {
            name: t('junior.categories.skills'),
            key: 'vjestine',
            programs: [
                {
                    id: 'digital-junior',
                    title: t('junior.programs.digital.title'),
                    desc: t('junior.programs.digital.desc'),
                    cta: t('junior.programs.digital.cta'),
                    link: '/digital-academy',
                    image: '/uploads/programi/digital academy/euroclub_digital_academy.webp',
                },
                {
                    id: 'challenger-junior',
                    title: t('junior.programs.challenger.title'),
                    desc: t('junior.programs.challenger.desc'),
                    cta: t('junior.programs.challenger.cta'),
                    link: '/teen-challenger',
                },
                {
                    id: 'arts-junior',
                    title: t('junior.programs.arts.title'),
                    desc: t('junior.programs.arts.desc'),
                    cta: t('junior.programs.arts.cta'),
                    link: '/art-fashion',
                },
            ],
        },
    ];

    const dates = [
        '14.06.', '21.06.', '28.06.', '05.07.', '12.07.',
        '19.07.', '26.07.', '02.08.', '09.08.', '16.08.', '23.08.'
    ];

    const guaranteedPrograms = ['oxford-junior', 'digital-junior'];

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section
                className="py-20"
                style={{ backgroundColor: '#D1F1FF' }}
            >
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800 leading-tight">
                            {t('junior.hero.title')}
                        </h1>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                            {t('junior.hero.subtitle')}
                        </p>
                    </div>

                    {/* 3-Column Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {juniorPrograms.map((category, categoryIndex) => {
                            const expandedCardId = expandedCards[category.key];

                            return (
                                <div key={categoryIndex} className="category-column">
                                    {/* Category Header */}
                                    <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center border-b-4 border-blue-500 pb-3">
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
                                                        className="w-full px-6 py-4 text-left bg-gradient-to-r from-blue-50 to-cyan-50 hover:from-blue-100 hover:to-cyan-100 transition-all duration-200 flex items-center justify-between"
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
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-4">
                            Dostupnost programa po terminima
                        </h2>
                    </div>

                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-blue-600 text-white">
                                        <th className="px-6 py-5 text-left font-bold border-r border-blue-500 min-w-[200px]">Program</th>
                                        {dates.map((date, idx) => (
                                            <th key={idx} className="px-4 py-5 text-center font-semibold text-sm min-w-[70px] border-r border-blue-500 last:border-0">{date}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="divide-x divide-gray-100">
                                        <td className="px-6 py-6 font-bold text-blue-900 bg-blue-50/50">Oxford English Academy</td>
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
                                        <td className="px-6 py-6 font-bold text-blue-900">Learn Croatian</td>
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
                                        <td className="px-6 py-6 font-bold text-blue-900 bg-blue-50/50">Learn German</td>
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
                                        <td className="px-6 py-6 font-bold text-blue-900">Learn Italian</td>
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
                                        <td className="px-6 py-6 font-bold text-blue-900 bg-blue-50/50">Learn French</td>
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
                                        <td className="px-6 py-6 font-bold text-blue-900">Sports Academy</td>
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
                                        <td className="px-6 py-6 font-bold text-blue-900 bg-blue-50/50">Digital Academy</td>
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
                                        <td className="px-6 py-6 font-bold text-blue-900">Challenger program</td>
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
                                        <td className="px-6 py-6 font-bold text-blue-900 bg-blue-50/50">Arts & Glamour</td>
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
                            * Oxford English i Digital Academy su garantirani programi u svim terminima. Za ostale programe – minimalna grupa je 8. Za manje od 8 prijavljene djece za pojedini program u nekom terminu, zadržavamo pravo promjene istog – ponudit ćemo da se odabere neki od programa koji se organiziraju u tom terminu.
                        </p>
                        <p className="text-gray-600 italic text-sm md:text-base leading-relaxed">
                            **Za grupe 8+ možemo organizirati bilo koji program u bilo kojem željenom terminu, ukoliko u kampu ima mjesta.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}