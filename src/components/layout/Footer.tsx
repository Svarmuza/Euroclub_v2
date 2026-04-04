'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { MapPin, Phone, Mail } from 'lucide-react';

const TikTokIcon = ({ size = 18 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
);

const FacebookIcon = ({ size = 18 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
);

const InstagramIcon = ({ size = 18 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
);

const YouTubeIcon = ({ size = 18 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
);

export default function Footer() {
    const t = useTranslations('Footer');
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-br from-slate-900 to-blue-900 text-white pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 mb-12 lg:mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <div className="text-3xl font-black bg-gradient-to-r from-sea to-sky-400 bg-clip-text text-transparent">
                            EUROCLUB
                        </div>
                        <p className="text-blue-100/70 text-sm leading-relaxed max-w-xs">
                            {t('description')}
                        </p>
                        <div className="flex gap-3 flex-wrap">
                            <a
                                href="https://web.facebook.com/EuroclubDalmatia"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-blue-100 hover:bg-white/20 hover:text-white hover:scale-110 transition-all duration-300 border border-white/5"
                            >
                                <FacebookIcon />
                            </a>
                            <a
                                href="https://www.instagram.com/euroclub_croatia/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-blue-100 hover:bg-white/20 hover:text-white hover:scale-110 transition-all duration-300 border border-white/5"
                            >
                                <InstagramIcon />
                            </a>
                            <a
                                href="https://www.youtube.com/watch?v=WNgjjgMvyIo"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-blue-100 hover:bg-white/20 hover:text-white hover:scale-110 transition-all duration-300 border border-white/5"
                            >
                                <YouTubeIcon />
                            </a>
                            <a
                                href="https://www.tiktok.com/@euroclubdalmatia"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-blue-100 hover:bg-white/20 hover:text-white hover:scale-110 transition-all duration-300 border border-white/5"
                            >
                                <TikTokIcon />
                            </a>
                        </div>
                    </div>

                    {/* Programs Column */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white tracking-wide">
                            {t('programs')}
                        </h4>
                        <div className="space-y-6">
                            <div>
                                <span className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2 block opacity-80">
                                    {t('campTypes')}
                                </span>
                                <ul className="space-y-2">
                                    <li>
                                        <Link
                                            href="/junior-camp"
                                            className="text-blue-100/70 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm"
                                        >
                                            {t('junior')} 7-12 {t('years')}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/teen-camp"
                                            className="text-blue-100/70 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm"
                                        >
                                            {t('teen')} 12-17 {t('years')}
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <span className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2 block opacity-80">
                                    {t('programsList')}
                                </span>
                                <ul className="space-y-2">
                                    <li>
                                        <Link
                                            href="/programs"
                                            className="text-blue-100/70 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm"
                                        >
                                            7-12 {t('years')}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/programs/teen"
                                            className="text-blue-100/70 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm"
                                        >
                                            12-17 {t('years')}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Information Column */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white tracking-wide">
                            {t('information')}
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/about"
                                    className="text-blue-100/70 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm"
                                >
                                    {t('about')}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/accommodation"
                                    className="text-blue-100/70 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm"
                                >
                                    {t('accommodation')}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/prices"
                                    className="text-blue-100/70 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm"
                                >
                                    {t('prices')}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/faq"
                                    className="text-blue-100/70 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm"
                                >
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/daily-schedule"
                                    className="text-blue-100/70 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm"
                                >
                                    {t('dailySchedule')}
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="/uploads/dokumenti/euroclub_opci_uvjeti.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-100/70 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm"
                                >
                                    {t('terms')}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white tracking-wide">
                            {t('contact')}
                        </h4>
                        <div className="space-y-6 text-sm text-blue-100/70">
                            <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                                <p className="font-semibold text-white mb-2">{t('office')}</p>
                                <p>Put Majdana 12, 21 210 Solin</p>
                                <p>Croatia</p>
                            </div>

                            <div>
                                <p className="font-medium text-white mb-2">
                                    {t('campAddress')}:
                                </p>
                                <p>Luša 22, Brodarica Šibenik, Croatia</p>
                            </div>

                            <div className="space-y-3">
                                <div>
                                    <span className="text-xs text-blue-400 font-semibold uppercase tracking-wider block mb-1">
                                        {t('office')}
                                    </span>
                                    <a href="tel:+38521483055" className="hover:text-white transition-colors flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                                        +385 (0)21 483-055
                                    </a>
                                </div>

                                <div>
                                    <span className="text-xs text-blue-400 font-semibold uppercase tracking-wider block mb-1">
                                        {t('mobile')}
                                    </span>
                                    <a href="tel:+385959079116" className="hover:text-white transition-colors flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                                        +385 (0)95 907-9116
                                    </a>
                                </div>

                                <div>
                                    <span className="text-xs text-blue-400 font-semibold uppercase tracking-wider block mb-1">
                                        {t('camp')}
                                    </span>
                                    <a href="tel:+385923232888" className="hover:text-white transition-colors flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                                        +385 (0)92 3232-888
                                    </a>
                                </div>

                                <div className="pt-3 border-t border-white/10 mt-2 space-y-2">
                                    <a href="mailto:info@euroclub.hr" className="block hover:text-white transition-colors font-medium text-blue-200">
                                        info@euroclub.hr
                                    </a>
                                    <a href="https://wa.me/385959079116" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors text-xs">
                                        WhatsApp: +385 (0)95 907-9116
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-blue-100/40">
                    <p>
                        © {currentYear} Euroclub. {t('allRightsReserved')}
                    </p>
                    <div className="flex gap-6">
                        <a href="/uploads/dokumenti/euroclub_gdpr.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                            {t('privacy')}
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
