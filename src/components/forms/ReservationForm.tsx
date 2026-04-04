'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { api } from '@/lib/api';
import { ChevronRight, ChevronLeft, Check, Star } from 'lucide-react';
import { toast } from 'sonner';
import { useConsent } from '@/hooks/useConsent';

const programAvailability: Record<string, string[]> = {
    "14.06.": ["OXFORD ENGLISH ACADEMY", "SPORTS ACADEMY", "JUNIOR ANIMATOR", "LEADERSHIP & TEEN BUSINESS"],
    "21.06.": ["OXFORD ENGLISH ACADEMY", "SPORTS ACADEMY", "JUNIOR ANIMATOR", "LEADERSHIP & TEEN BUSINESS", "DIGITAL ACADEMY"],
    "28.06.": ["OXFORD ENGLISH ACADEMY", "SPORTS ACADEMY", "JUNIOR ANIMATOR", "LEADERSHIP & TEEN BUSINESS", "DIGITAL ACADEMY"],
    "05.07.": ["OXFORD ENGLISH ACADEMY", "SPORTS ACADEMY", "JUNIOR ANIMATOR", "DIGITAL ACADEMY", "ARTS & GLAMOUR"],
    "12.07.": ["OXFORD ENGLISH ACADEMY", "SPORTS ACADEMY", "JUNIOR ANIMATOR", "DIGITAL ACADEMY", "ITALIAN LANGUAGE CAMP"],
    "19.07.": ["OXFORD ENGLISH ACADEMY", "SPORTS ACADEMY", "JUNIOR ANIMATOR", "DIGITAL ACADEMY", "ARTS & GLAMOUR", "ITALIAN LANGUAGE CAMP", "CROATIAN LANGUAGE CAMP"],
    "26.07.": ["OXFORD ENGLISH ACADEMY", "SPORTS ACADEMY", "JUNIOR ANIMATOR", "LEADERSHIP & TEEN BUSINESS", "DIGITAL ACADEMY", "ITALIAN LANGUAGE CAMP"],
    "02.08.": ["OXFORD ENGLISH ACADEMY", "SPORTS ACADEMY", "JUNIOR ANIMATOR", "LEADERSHIP & TEEN BUSINESS", "CHALLENGER", "DIGITAL ACADEMY", "ARTS & GLAMOUR", "ITALIAN LANGUAGE CAMP", "FRENCH LANGUAGE CAMP"],
    "09.08.": ["OXFORD ENGLISH ACADEMY", "SPORTS ACADEMY", "JUNIOR ANIMATOR", "LEADERSHIP & TEEN BUSINESS", "CHALLENGER", "DIGITAL ACADEMY", "ITALIAN LANGUAGE CAMP", "GERMAN LANGUAGE CAMP"],
    "16.08.": ["OXFORD ENGLISH ACADEMY", "JUNIOR ANIMATOR", "DIGITAL ACADEMY"],
    "23.08.": ["OXFORD ENGLISH ACADEMY", "JUNIOR ANIMATOR", "DIGITAL ACADEMY"],
};

export default function ReservationForm() {
    const t = useTranslations('Reservation');
    const locale = useLocale();
    const { consent } = useConsent();
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formStarted, setFormStarted] = useState(false);
    const formTopRef = useRef<HTMLDivElement>(null);

    const [formData, setFormData] = useState({
        childFirstName: '',
        childLastName: '',
        parentEmail: '',
        parentPhone: '',
        parentName: '',
        city: '',
        campType: '',
        selectedDate: '',
        stayDuration: '',
        selectedProgram: '',
        howDidYouHear: '',
        completedGrade: '',
        birthDate: '',
        transportNeeded: '',
        paymentMethod: '',
        termsAccepted: false,
        questions: ''
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleChange = (name: string, value: any) => {
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }

        if (name === 'selectedDate') {
            setFormData(prev => ({ ...prev, selectedProgram: '' }));
        }
    };

    const validateStep1 = () => {
        const newErrors: Record<string, string> = {};
        const required = ['childFirstName', 'childLastName', 'parentEmail', 'parentPhone', 'city', 'selectedDate', 'stayDuration', 'selectedProgram'];

        required.forEach(field => {
            if (!formData[field as keyof typeof formData]) {
                newErrors[field] = 'Required';
            }
        });

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = async () => {
        if (validateStep1()) {
            if (!formStarted) {
                setFormStarted(true);
                if (consent.marketing && typeof window !== 'undefined' && (window as any).fbq) {
                    (window as any).fbq('track', 'FormStart', {
                        content_category: 'reservation',
                        content_name: 'Reservation Form'
                    });
                }
            }

            if (consent.marketing && typeof window !== 'undefined' && (window as any).fbq) {
                (window as any).fbq('track', 'StepComplete', {
                    content_category: 'reservation',
                    content_name: 'Step 1 Complete',
                    step_number: 1
                });
            }

            try {
                await api.reservations.saveStep1({
                    ...formData,
                    language: locale,
                    programs: [{ programDate: formData.selectedDate, programType: formData.selectedProgram }]
                });
            } catch (err) {
                console.error("Step 1 save error:", err);
            }
            setStep(2);
            formTopRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.termsAccepted) {
            toast.error(t('form.acceptTerms') || "Please accept the terms and conditions");
            return;
        }

        setIsSubmitting(true);

        if (consent.marketing && typeof window !== 'undefined' && (window as any).fbq) {
            (window as any).fbq('track', 'FormSubmit', {
                content_category: 'reservation',
                content_name: 'Reservation Form Submit'
            });
        }

        try {
            await api.reservations.create({
                ...formData,
                language: locale,
                firstName: formData.childFirstName,
                lastName: formData.childLastName,
                email: formData.parentEmail,
                phone: formData.parentPhone,
                accommodationType: formData.campType === 'adventure' ? 'Adventure' : 'English Camp',
                startDate: formData.selectedDate,
                programs: [{ programDate: formData.selectedDate, programType: formData.selectedProgram }]
            });
            toast.success(t('messages.success') || "Reservation submitted successfully!");

            if (consent.marketing && typeof window !== 'undefined' && (window as any).fbq) {
                (window as any).fbq('track', 'Lead', {
                    content_category: 'reservation',
                    content_name: 'Reservation Complete',
                    value: formData.campType === 'adventure' ? 2120 : 760,
                    currency: 'EUR'
                });
            }

            setStep(3); // Show success state
        } catch (err) {
            toast.error(t('messages.error') || "Submission failed. Please try again.");

            if (consent.marketing && typeof window !== 'undefined' && (window as any).fbq) {
                (window as any).fbq('track', 'FormError', {
                    content_category: 'reservation',
                    content_name: 'Reservation Form Error'
                });
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    if (step === 3) {
        return (
            <div className="bg-white p-12 rounded-[2.5rem] shadow-modern text-center border border-sea/10">
                <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-600">
                    <Check className="w-10 h-10" />
                </div>
                <h2 className="text-3xl font-black text-slate-900 mb-4">{t('messages.thankYou')}</h2>
                <p className="text-slate-600 text-lg max-w-md mx-auto font-medium">
                    {t('messages.successDetail')}
                </p>
            </div>
        );
    }

    const availableDates = Object.keys(programAvailability);
    const availablePrograms = formData.selectedDate ? programAvailability[formData.selectedDate] : [];

    return (
        <div ref={formTopRef} className="bg-white p-6 md:p-12 rounded-[2.5rem] shadow-modern border border-slate-50">
            {/* Step Indicator */}
            <div className="flex gap-2 mb-10 justify-center">
                <div className={`h-2 w-12 rounded-full transition-colors ${step >= 1 ? 'bg-sea' : 'bg-slate-100'}`} />
                <div className={`h-2 w-12 rounded-full transition-colors ${step >= 2 ? 'bg-sea' : 'bg-slate-100'}`} />
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
                {step === 1 ? (
                    <div className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label className="text-slate-700 font-bold ml-1">{t('form.firstName')} *</Label>
                                <Input
                                    className={`h-12 border-2 rounded-2xl focus:border-sea transition-all ${errors.childFirstName ? 'border-red-400' : 'border-slate-50'}`}
                                    placeholder="Jane"
                                    value={formData.childFirstName}
                                    onChange={(e) => handleChange('childFirstName', e.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label className="text-slate-700 font-bold ml-1">{t('form.lastName')} *</Label>
                                <Input
                                    className={`h-12 border-2 rounded-2xl focus:border-sea transition-all ${errors.childLastName ? 'border-red-400' : 'border-slate-50'}`}
                                    placeholder="Doe"
                                    value={formData.childLastName}
                                    onChange={(e) => handleChange('childLastName', e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label className="text-slate-700 font-bold ml-1">{t('form.email')} *</Label>
                                <Input
                                    type="email"
                                    className={`h-12 border-2 rounded-2xl focus:border-sea transition-all ${errors.parentEmail ? 'border-red-400' : 'border-slate-50'}`}
                                    placeholder="parent@example.com"
                                    value={formData.parentEmail}
                                    onChange={(e) => handleChange('parentEmail', e.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label className="text-slate-700 font-bold ml-1">{t('form.phone')} *</Label>
                                <Input
                                    className={`h-12 border-2 rounded-2xl focus:border-sea transition-all ${errors.parentPhone ? 'border-red-400' : 'border-slate-50'}`}
                                    placeholder="+385..."
                                    value={formData.parentPhone}
                                    onChange={(e) => handleChange('parentPhone', e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label className="text-slate-700 font-bold ml-1">{t('form.city')} *</Label>
                            <Input
                                className={`h-12 border-2 rounded-2xl focus:border-sea transition-all ${errors.city ? 'border-red-400' : 'border-slate-50'}`}
                                value={formData.city}
                                onChange={(e) => handleChange('city', e.target.value)}
                            />
                        </div>

                        <div className="bg-sky-50 p-6 rounded-[2rem] border border-sea/10">
                            <div className="flex items-center gap-4">
                                <Checkbox
                                    id="adventure"
                                    className="w-6 h-6 border-sea/40 data-[state=checked]:bg-sea"
                                    checked={formData.campType === 'adventure'}
                                    onCheckedChange={(checked) => handleChange('campType', checked ? 'adventure' : '')}
                                />
                                <Label htmlFor="adventure" className="text-lg font-black text-sea-dark cursor-pointer flex items-center gap-2">
                                    <Star className="w-5 h-5 fill-sea text-sea" />
                                    Adventure Package
                                </Label>
                            </div>
                            <p className="mt-2 ml-10 text-sea-dark/70 font-medium text-sm">
                                2-week premium program with all excursions included.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label className="text-slate-700 font-bold ml-1">{t('form.term')} *</Label>
                                <Select value={formData.selectedDate} onValueChange={(v) => handleChange('selectedDate', v)}>
                                    <SelectTrigger className={`h-12 border-2 rounded-2xl focus:border-sea ${errors.selectedDate ? 'border-red-400' : 'border-slate-50'}`}>
                                        <SelectValue placeholder={t('form.term')} />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-2xl">
                                        {availableDates.map(date => (
                                            <SelectItem key={date} value={date}>{date}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label className="text-slate-700 font-bold ml-1">{t('form.stayDuration')} *</Label>
                                <Select value={formData.stayDuration} onValueChange={(v) => handleChange('stayDuration', v)}>
                                    <SelectTrigger className={`h-12 border-2 rounded-2xl focus:border-sea ${errors.stayDuration ? 'border-red-400' : 'border-slate-50'}`}>
                                        <SelectValue placeholder={t('form.stayDuration')} />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-2xl">
                                        {formData.campType === 'adventure' ? (
                                            [t('options.duration2Weeks'), t('options.duration3Weeks'), t('options.duration4Weeks')].map(d => <SelectItem key={d} value={d}>{d}</SelectItem>)
                                        ) : (
                                            [t('options.duration1Week'), t('options.duration2Weeks'), t('options.duration3Weeks'), t('options.duration4Weeks')].map(d => <SelectItem key={d} value={d}>{d}</SelectItem>)
                                        )}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        {formData.selectedDate && (
                            <div className="space-y-4 pt-4 border-t border-slate-50">
                                <Label className="text-slate-700 font-bold ml-1">{t('form.program')} *</Label>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {availablePrograms.map(program => (
                                        <button
                                            key={program}
                                            type="button"
                                            onClick={() => handleChange('selectedProgram', program)}
                                            className={`p-4 rounded-2xl border-2 text-left transition-all font-bold text-sm ${formData.selectedProgram === program ? 'border-sea bg-sky-50 text-sea-dark' : 'border-slate-50 hover:border-sea/20'}`}
                                        >
                                            {program}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        <Button
                            type="button"
                            onClick={handleNext}
                            className="modern-button w-full h-14 !rounded-2xl text-xl font-black shadow-lg"
                        >
                            {t('form.nextStep')}
                            <ChevronRight className="w-6 h-6 ml-2" />
                        </Button>
                    </div>
                ) : (
                    <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                        <div className="bg-sun/10 border border-sun/20 p-6 rounded-[2rem]">
                            <p className="text-slate-800 font-medium leading-relaxed">
                                Almost there! Please provide a few more details to help us prepare your reservation quote.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label className="text-slate-700 font-bold ml-1">{t('form.parentName')} *</Label>
                                <Input
                                    className="h-12 border-2 border-slate-50 rounded-2xl focus:border-sea"
                                    value={formData.parentName}
                                    onChange={(e) => handleChange('parentName', e.target.value)}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label className="text-slate-700 font-bold ml-1">{t('form.birthDate')} *</Label>
                                <Input
                                    className="h-12 border-2 border-slate-50 rounded-2xl focus:border-sea"
                                    type="date"
                                    value={formData.birthDate}
                                    onChange={(e) => handleChange('birthDate', e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label className="text-slate-700 font-bold ml-1">{t('form.gradeCompleted')}</Label>
                                <Input
                                    className="h-12 border-2 border-slate-50 rounded-2xl focus:border-sea"
                                    value={formData.completedGrade}
                                    onChange={(e) => handleChange('completedGrade', e.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label className="text-slate-700 font-bold ml-1">{t('form.transportNeeded')}</Label>
                                <Select value={formData.transportNeeded} onValueChange={(v) => handleChange('transportNeeded', v)}>
                                    <SelectTrigger className="h-12 border-2 border-slate-50 rounded-2xl focus:border-sea">
                                        <SelectValue placeholder={t('form.transportNeeded')} />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-2xl">
                                        <SelectItem value="none">{t('options.noTransport')}</SelectItem>
                                        <SelectItem value="zagreb">{t('options.busFromZagreb')}</SelectItem>
                                        <SelectItem value="airport">{t('options.airportPickup')}</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label className="text-slate-700 font-bold ml-1">{t('form.notes')}</Label>
                            <Textarea
                                className="border-2 border-slate-50 rounded-2xl min-h-[120px] focus:border-sea"
                                placeholder="Any allergies, special requests, or questions?"
                                name="questions"
                                value={formData.questions}
                                onChange={(e) => handleChange('questions', e.target.value)}
                            />
                        </div>

                        <div className="flex items-center gap-4 py-4 px-2">
                            <Checkbox
                                id="terms"
                                className="w-6 h-6 border-slate-300 data-[state=checked]:bg-sea"
                                checked={formData.termsAccepted}
                                onCheckedChange={(checked) => handleChange('termsAccepted', !!checked)}
                            />
                            <Label htmlFor="terms" className="text-sm font-medium text-slate-500 cursor-pointer">
                                {t('form.acceptTerms')}
                            </Label>
                        </div>

                        <div className="flex gap-4">
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => setStep(1)}
                                className="h-14 flex-1 rounded-2xl border-2 font-bold text-slate-400 hover:bg-slate-50"
                            >
                                <ChevronLeft className="w-5 h-5 mr-2" />
                                {t('form.back')}
                            </Button>
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="modern-button h-14 flex-[2] !rounded-2xl font-black text-xl shadow-lg"
                            >
                                {isSubmitting ? (
                                    <div className="flex items-center gap-2">
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        {t('sending') || 'Šaljem...'}
                                    </div>
                                ) : (
                                    t('form.submit')
                                )}
                            </Button>
                        </div>
                    </div>
                )}
            </form>
        </div>
    );
}

