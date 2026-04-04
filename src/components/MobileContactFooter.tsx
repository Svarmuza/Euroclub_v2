'use client';

import { useState } from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import ContactFormModal from './ContactFormModal';

export default function MobileContactFooter() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    return (
        <>
            <div className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-lg border-t border-gray-200 md:hidden">
                <div className="flex divide-x divide-gray-200">
                    <a
                        href="tel:+385959079116"
                        className="flex-1 flex items-center justify-center py-4 hover:bg-gray-50 transition-colors"
                    >
                        <Phone className="h-5 w-5 text-sea mr-2" />
                        <span className="text-sm font-medium text-slate-700">Call</span>
                    </a>
                    <button
                        onClick={() => setIsContactModalOpen(true)}
                        className="flex-1 flex items-center justify-center py-4 hover:bg-gray-50 transition-colors"
                    >
                        <Mail className="h-5 w-5 text-sea mr-2" />
                        <span className="text-sm font-medium text-slate-700">Email</span>
                    </button>
                    <a
                        href="https://wa.me/385959079116"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center py-4 hover:bg-gray-50 transition-colors"
                    >
                        <MessageCircle className="h-5 w-5 text-green-600 mr-2" />
                        <span className="text-sm font-medium text-slate-700">WhatsApp</span>
                    </a>
                </div>
            </div>

            <ContactFormModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
            />
        </>
    );
}
