'use client';

import { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BookingModal from '@/components/BookingModal';

export default function Navbar() {
    const t = useTranslations('Navbar');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [bookingModalOpen, setBookingModalOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpenDropdown(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleDropdownToggle = (name: string) => {
        setOpenDropdown(openDropdown === name ? null : name);
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-100' : 'bg-white/80 backdrop-blur-md'}`}>
            <nav className="container mx-auto px-4 md:px-6 py-4" ref={dropdownRef}>
                <div className="flex justify-between items-center">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="text-2xl font-black bg-gradient-to-r from-sea to-sea-dark bg-clip-text text-transparent transition-transform hover:scale-105 active:scale-95">
                            EUROCLUB
                        </div>
                    </Link>

                    {/* Desktop Nav Links */}
                    <div className="hidden lg:flex items-center gap-1">
                        {/* O NAMA Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => handleDropdownToggle('onama')}
                                className="flex items-center gap-1 h-12 px-3 text-sm font-bold uppercase tracking-wider text-slate-600 hover:text-sea transition-colors"
                            >
                                {t('onama')}
                                <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'onama' ? 'rotate-180' : ''}`} />
                            </button>
                            {openDropdown === 'onama' && (
                                <div className="absolute left-0 top-full mt-0 w-64 bg-white shadow-xl rounded-lg border border-slate-100 py-3 pl-4 pr-6 z-50">
                                    <Link href="/why-euroclub" className="block px-3 py-2.5 text-slate-600 hover:bg-slate-50 hover:text-sea transition-colors text-sm border border-gray-100 rounded-md mb-1.5">
                                        {t('whyEuroclub')}
                                    </Link>
                                    <Link href="/about" className="block px-3 py-2.5 text-slate-600 hover:bg-slate-50 hover:text-sea transition-colors text-sm border border-gray-100 rounded-md mb-1.5">
                                        {t('about')}
                                    </Link>
                                    <Link href="/faq" className="block px-3 py-2.5 text-slate-600 hover:bg-slate-50 hover:text-sea transition-colors text-sm border border-gray-100 rounded-md mb-1.5">
                                        FAQ
                                    </Link>
                                    <Link href="/accommodation" className="block px-3 py-2.5 text-slate-600 hover:bg-slate-50 hover:text-sea transition-colors text-sm border border-gray-100 rounded-md mb-1.5">
                                        {t('accommodation')}
                                    </Link>
                                    <Link href="/transfer" className="block px-3 py-2.5 text-slate-600 hover:bg-slate-50 hover:text-sea transition-colors text-sm border border-gray-100 rounded-md mb-1.5">
                                        {t('transfer')}
                                    </Link>
                                    <Link href="/daily-schedule" className="block px-3 py-2.5 text-slate-600 hover:bg-slate-50 hover:text-sea transition-colors text-sm border border-gray-100 rounded-md">
                                        {t('dailySchedule')}
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* JUNIOR */}
                        <Link href="/junior-camp" className="flex flex-col items-center h-12 px-3 justify-center group transition-colors">
                            <span className="text-sm font-bold uppercase tracking-wider text-slate-600 group-hover:text-sea">{t('junior')}</span>
                            <span className="text-[10px] text-slate-400 group-hover:text-sea/70 font-medium">{t('juniorAge')}</span>
                        </Link>

                        {/* TEEN */}
                        <Link href="/teen-camp" className="flex flex-col items-center h-12 px-3 justify-center group transition-colors">
                            <span className="text-sm font-bold uppercase tracking-wider text-slate-600 group-hover:text-sea">{t('teen')}</span>
                            <span className="text-[10px] text-slate-400 group-hover:text-sea/70 font-medium">{t('teenAge')}</span>
                        </Link>

                        {/* ADVENTURE */}
                        <Link href="/adventure-package" className="flex flex-col items-center h-12 px-3 justify-center group transition-colors">
                            <span className="text-sm font-bold uppercase tracking-wider text-sunset group-hover:text-sea flex items-center gap-1">
                                <span className="text-yellow-500">★</span> {t('adventure')}
                            </span>
                            <span className="text-[10px] text-sunset/70 group-hover:text-sea/70 font-medium uppercase">{t('premium')}</span>
                        </Link>

                        {/* PROGRAMI Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => handleDropdownToggle('programi')}
                                className="flex items-center gap-1 h-12 px-3 text-sm font-bold uppercase tracking-wider text-slate-600 hover:text-sea transition-colors"
                            >
                                {t('programs')}
                                <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'programi' ? 'rotate-180' : ''}`} />
                            </button>
                            {openDropdown === 'programi' && (
                                <div className="absolute left-0 top-full mt-0 w-64 bg-white shadow-xl rounded-lg border border-slate-100 py-3 pl-4 pr-6 z-50">
                                    <Link href="/programs" className="block px-3 py-2.5 text-slate-600 hover:bg-slate-50 hover:text-sea transition-colors text-sm border border-gray-100 rounded-md mb-1.5">
                                        {t('junior')} 7-12g
                                    </Link>
                                    <Link href="/programs/teen" className="block px-3 py-2.5 text-slate-600 hover:bg-slate-50 hover:text-sea transition-colors text-sm border border-gray-100 rounded-md">
                                        {t('teen')} 12-17g
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* CIJENE */}
                        <Link href="/prices" className="h-12 px-3 flex items-center text-sm font-bold uppercase tracking-wider text-slate-600 hover:text-sea transition-colors">
                            {t('prices')}
                        </Link>

                        {/* PRIJAVI SE */}
                        <button
                            onClick={() => setBookingModalOpen(true)}
                            className="h-12 px-4 flex items-center text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 rounded-lg shadow-md hover:shadow-lg transition-all"
                        >
                            {t('bookNow')}
                        </button>
                    </div>

                    {/* Right Side Controls */}
                    <div className="hidden md:flex items-center gap-4">
                        <Button onClick={() => setBookingModalOpen(true)} className="border-2 border-red-500 text-red-500 bg-transparent px-6 py-2 rounded-md hover:bg-red-50 transition-colors font-medium text-base h-10">
                            {t('bookNow')}
                        </Button>
                    </div>

                    {/* Mobile menu trigger */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden p-2 text-slate-600 hover:text-sea transition-colors"
                    >
                        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {/* Mobile Dropdown Menu */}
                {mobileMenuOpen && (
                    <div className="lg:hidden mt-4 animate-fade-in">
                        <div className="flex flex-col space-y-3 bg-white border border-slate-100 p-6 rounded-2xl shadow-xl">
                            <div className="border-b border-slate-100 pb-3">
                                <p className="text-xs font-bold uppercase text-slate-400 mb-2">{t('onama')}</p>
                                <Link href="/why-euroclub" onClick={() => setMobileMenuOpen(false)} className="block text-slate-600 font-medium py-2 hover:text-sea">{t('whyEuroclub')}</Link>
                                <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block text-slate-600 font-medium py-2 hover:text-sea">{t('about')}</Link>
                                <Link href="/faq" onClick={() => setMobileMenuOpen(false)} className="block text-slate-600 font-medium py-2 hover:text-sea">FAQ</Link>
                                <Link href="/accommodation" onClick={() => setMobileMenuOpen(false)} className="block text-slate-600 font-medium py-2 hover:text-sea">{t('accommodation')}</Link>
                                <Link href="/transfer" onClick={() => setMobileMenuOpen(false)} className="block text-slate-600 font-medium py-2 hover:text-sea">{t('transfer')}</Link>
                                <Link href="/daily-schedule" onClick={() => setMobileMenuOpen(false)} className="block text-slate-600 font-medium py-2 hover:text-sea">{t('dailySchedule')}</Link>
                            </div>

                            <Link href="/junior-camp" onClick={() => setMobileMenuOpen(false)} className="text-slate-600 font-bold text-lg hover:text-sea py-2">
                                {t('junior')} {t('juniorAge')}
                            </Link>
                            <Link href="/teen-camp" onClick={() => setMobileMenuOpen(false)} className="text-slate-600 font-bold text-lg hover:text-sea py-2">
                                {t('teen')} {t('teenAge')}
                            </Link>
                            <Link href="/adventure-package" onClick={() => setMobileMenuOpen(false)} className="text-sunset font-bold text-lg hover:text-sea py-2 flex items-center gap-1">
                                <span className="text-yellow-500">★</span> {t('adventure')} {t('premium')}
                            </Link>

                            <div className="border-b border-slate-100 pb-3">
                                <p className="text-xs font-bold uppercase text-slate-400 mb-2">{t('programs')}</p>
                                <Link href="/programs" onClick={() => setMobileMenuOpen(false)} className="block text-slate-600 font-medium py-2 hover:text-sea">{t('junior')} 7-12g</Link>
                                <Link href="/programs/teen" onClick={() => setMobileMenuOpen(false)} className="block text-slate-600 font-medium py-2 hover:text-sea">{t('teen')} 12-17g</Link>
                            </div>

                            <Link href="/prices" onClick={() => setMobileMenuOpen(false)} className="text-slate-600 font-bold text-lg hover:text-sea py-2">
                                {t('prices')}
                            </Link>

                            <Button onClick={() => { setMobileMenuOpen(false); setBookingModalOpen(true); }} className="border-2 border-red-500 text-red-500 bg-transparent w-full py-3 text-lg font-medium mt-2">
                                {t('bookNow')}
                            </Button>
                        </div>
                    </div>
                )}
            </nav>

            {/* Booking Modal */}
            <BookingModal isOpen={bookingModalOpen} onClose={() => setBookingModalOpen(false)} />
        </header>
    );
}
