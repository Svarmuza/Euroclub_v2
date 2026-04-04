'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MessageCircle, Send, Check, AlertCircle } from 'lucide-react';

interface ContactFormModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ContactFormModal({ isOpen, onClose }: ContactFormModalProps) {
    const t = useTranslations('ContactForm');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleChange = (name: string, value: string) => {
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.name.trim()) {
            newErrors.name = t('required');
        }

        if (!formData.email.trim()) {
            newErrors.email = t('required');
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = t('invalidEmail');
        }

        if (!formData.message.trim()) {
            newErrors.message = t('required');
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch('/api/contact-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', phone: '', message: '' });

                if (typeof window !== 'undefined' && (window as any).dataLayer) {
                    (window as any).dataLayer.push({
                        event: 'contact_form_submit',
                        form_location: 'contact_modal'
                    });
                }

                if (typeof window !== 'undefined' && (window as any).fbq) {
                    (window as any).fbq('track', 'Contact', {
                        content_category: 'Contact Form',
                        content_name: 'Contact Modal'
                    });
                }

                setTimeout(() => {
                    onClose();
                    setSubmitStatus('idle');
                }, 2000);
            } else {
                setSubmitStatus('error');
            }
        } catch (err) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleClose = () => {
        setFormData({ name: '', email: '', phone: '', message: '' });
        setErrors({});
        setSubmitStatus('idle');
        onClose();
    };

    return (
        <Dialog open={isOpen} onOpenChange={handleClose}>
            <DialogContent className="sm:max-w-md rounded-3xl p-0 overflow-hidden border-none shadow-2xl">
                <DialogHeader className="p-6 pb-0">
                    <DialogTitle className="text-xl font-bold flex items-center gap-2">
                        <Mail className="h-5 w-5 text-sea" />
                        {t('title')}
                    </DialogTitle>
                </DialogHeader>

                <div className="p-6 pt-4">
                    {submitStatus === 'success' ? (
                        <div className="text-center py-8">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Check className="w-8 h-8 text-green-600" />
                            </div>
                            <p className="text-lg font-semibold text-green-700">{t('success')}</p>
                        </div>
                    ) : submitStatus === 'error' ? (
                        <div className="text-center py-8">
                            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <AlertCircle className="w-8 h-8 text-red-600" />
                            </div>
                            <p className="text-lg font-semibold text-red-700">{t('error')}</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="name" className="font-semibold">{t('name')}</Label>
                                <Input
                                    id="name"
                                    type="text"
                                    placeholder={t('namePlaceholder')}
                                    value={formData.name}
                                    onChange={(e) => handleChange('name', e.target.value)}
                                    className={`border-2 rounded-xl ${errors.name ? 'border-red-400' : 'border-slate-100'} focus:border-sea`}
                                />
                                {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email" className="font-semibold">{t('email')}</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder={t('emailPlaceholder')}
                                    value={formData.email}
                                    onChange={(e) => handleChange('email', e.target.value)}
                                    className={`border-2 rounded-xl ${errors.email ? 'border-red-400' : 'border-slate-100'} focus:border-sea`}
                                />
                                {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="phone" className="font-semibold">{t('phone')}</Label>
                                <Input
                                    id="phone"
                                    type="tel"
                                    placeholder={t('phonePlaceholder')}
                                    value={formData.phone}
                                    onChange={(e) => handleChange('phone', e.target.value)}
                                    className="border-2 border-slate-100 rounded-xl focus:border-sea"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="message" className="font-semibold">{t('message')}</Label>
                                <Textarea
                                    id="message"
                                    placeholder={t('messagePlaceholder')}
                                    value={formData.message}
                                    onChange={(e) => handleChange('message', e.target.value)}
                                    className={`border-2 rounded-xl min-h-[100px] ${errors.message ? 'border-red-400' : 'border-slate-100'} focus:border-sea`}
                                />
                                {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
                            </div>

                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-sea hover:bg-sea-dark text-white font-semibold py-3 rounded-xl shadow-lg"
                            >
                                {isSubmitting ? (
                                    <div className="flex items-center gap-2">
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        {t('sending')}
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-2">
                                        <Send className="w-4 h-4" />
                                        {t('submit')}
                                    </div>
                                )}
                            </Button>
                        </form>
                    )}

                    <div className="mt-6 pt-6 border-t border-slate-100">
                        <p className="text-sm text-slate-500 text-center mb-4">{t('orContact')}</p>
                        <div className="flex justify-center gap-4">
                            <a
                                href="tel:+385959079116"
                                className="flex items-center gap-2 text-slate-600 hover:text-sea transition-colors"
                            >
                                <Phone className="w-4 h-4" />
                                <span className="text-sm font-medium">+385 95 907 9116</span>
                            </a>
                            <a
                                href="https://wa.me/385959079116"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-slate-600 hover:text-green-600 transition-colors"
                            >
                                <MessageCircle className="w-4 h-4" />
                                <span className="text-sm font-medium">WhatsApp</span>
                            </a>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
