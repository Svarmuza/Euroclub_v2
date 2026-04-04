'use client';

import React, { useState, useCallback, useEffect, useRef } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ChevronLeft, ChevronRight, Info } from 'lucide-react';
import { toast } from 'sonner';
import { api } from '@/lib/api';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface ReservationFormData {
  childFirstName: string;
  childLastName: string;
  parentEmail: string;
  parentPhone: string;
  city: string;
  campType: string;
  selectedDate: string;
  stayDuration: string;
  howDidYouHear: string;
  parentName: string;
  completedGrade: string;
  birthDay: string;
  birthMonth: string;
  birthYear: string;
  birthDate: string;
  transportNeeded: string;
  insurance: string[];
  paymentMethod: string;
  termsAccepted: boolean;
  isNotRobot: boolean;
  questions: string;
}

interface ProgramSelection {
  programDate: string;
  programType: string;
}

const programAvailability: Record<string, string[]> = {
  '14.06.': ['OXFORD ENGLISH ACADEMY', 'SPORTS ACADEMY', 'JUNIOR ANIMATOR', 'LEADERSHIP & TEEN BUSINESS'],
  '21.06.': ['OXFORD ENGLISH ACADEMY', 'SPORTS ACADEMY', 'JUNIOR ANIMATOR', 'LEADERSHIP & TEEN BUSINESS', 'DIGITAL ACADEMY'],
  '28.06.': ['OXFORD ENGLISH ACADEMY', 'SPORTS ACADEMY', 'JUNIOR ANIMATOR', 'LEADERSHIP & TEEN BUSINESS', 'DIGITAL ACADEMY'],
  '05.07.': ['OXFORD ENGLISH ACADEMY', 'SPORTS ACADEMY', 'JUNIOR ANIMATOR', 'DIGITAL ACADEMY', 'ARTS & GLAMOUR'],
  '12.07.': ['OXFORD ENGLISH ACADEMY', 'SPORTS ACADEMY', 'JUNIOR ANIMATOR', 'DIGITAL ACADEMY', 'ITALIAN LANGUAGE CAMP'],
  '19.07.': ['OXFORD ENGLISH ACADEMY', 'SPORTS ACADEMY', 'JUNIOR ANIMATOR', 'DIGITAL ACADEMY', 'ARTS & GLAMOUR', 'ITALIAN LANGUAGE CAMP', 'CROATIAN LANGUAGE CAMP'],
  '26.07.': ['OXFORD ENGLISH ACADEMY', 'SPORTS ACADEMY', 'JUNIOR ANIMATOR', 'LEADERSHIP & TEEN BUSINESS', 'DIGITAL ACADEMY', 'ITALIAN LANGUAGE CAMP'],
  '02.08.': ['OXFORD ENGLISH ACADEMY', 'SPORTS ACADEMY', 'JUNIOR ANIMATOR', 'LEADERSHIP & TEEN BUSINESS', 'CHALLENGER', 'DIGITAL ACADEMY', 'ARTS & GLAMOUR', 'ITALIAN LANGUAGE CAMP', 'FRENCH LANGUAGE CAMP'],
  '09.08.': ['OXFORD ENGLISH ACADEMY', 'SPORTS ACADEMY', 'JUNIOR ANIMATOR', 'LEADERSHIP & TEEN BUSINESS', 'CHALLENGER', 'DIGITAL ACADEMY', 'ITALIAN LANGUAGE CAMP', 'GERMAN LANGUAGE CAMP'],
  '16.08.': ['OXFORD ENGLISH ACADEMY', 'JUNIOR ANIMATOR', 'DIGITAL ACADEMY'],
  '23.08.': ['OXFORD ENGLISH ACADEMY', 'JUNIOR ANIMATOR', 'DIGITAL ACADEMY'],
};

export default function ReservationForm({ onClose }: { onClose?: () => void }) {
  const t = useTranslations('Reservation');
  const locale = useLocale();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<ReservationFormData>({
    childFirstName: '',
    childLastName: '',
    parentEmail: '',
    parentPhone: '',
    city: '',
    campType: '',
    selectedDate: '',
    stayDuration: '',
    howDidYouHear: '',
    parentName: '',
    completedGrade: '',
    birthDay: '',
    birthMonth: '',
    birthYear: '',
    birthDate: '',
    transportNeeded: '',
    insurance: [],
    paymentMethod: '',
    termsAccepted: false,
    isNotRobot: false,
    questions: '',
  });

  const [selectedPrograms, setSelectedPrograms] = useState<ProgramSelection[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationErrors, setValidationErrors] = useState<{ [key: string]: string }>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [openTooltips, setOpenTooltips] = useState<Set<string>>(new Set());
  const tooltipRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const formTopRef = useRef<HTMLDivElement>(null);

  const availableDates = Object.keys(programAvailability);

  const handleInputChange = (field: keyof ReservationFormData, value: string | boolean | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const getNumWeeks = (duration: string) => {
    const match = duration.match(/(\d+)/);
    return match ? parseInt(match[1]) : 1;
  };

  const getWeekDates = useCallback(() => {
    if (!formData.selectedDate || !formData.stayDuration) return [];
    const numWeeks = getNumWeeks(formData.stayDuration);
    const dates = [formData.selectedDate];
    const dateList = Object.keys(programAvailability);
    const startIndex = dateList.indexOf(formData.selectedDate);
    if (startIndex === -1) return dates;
    for (let i = 1; i < numWeeks; i++) {
      if (startIndex + i < dateList.length) {
        dates.push(dateList[startIndex + i]);
      }
    }
    return dates;
  }, [formData.selectedDate, formData.stayDuration]);

  const handleProgramSelection = (programName: string, weekDate: string) => {
    setSelectedPrograms((prev) => {
      const existing = prev.find((p) => p.programDate === weekDate);
      if (existing) {
        return prev.map((p) => (p.programDate === weekDate ? { ...p, programType: programName } : p));
      } else {
        return [...prev, { programDate: weekDate, programType: programName }];
      }
    });
  };

  const handleInsuranceChange = (insuranceOption: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      insurance: checked ? [...prev.insurance, insuranceOption] : prev.insurance.filter((item) => item !== insuranceOption),
    }));
  };

  const validateStep1 = () => {
    const errors: { [key: string]: string } = {};
    const requiredFields = ['childFirstName', 'childLastName', 'parentEmail', 'parentPhone', 'city', 'selectedDate', 'stayDuration', 'howDidYouHear', 'parentName'];

    for (const field of requiredFields) {
      if (!formData[field as keyof ReservationFormData]) {
        errors[field] = t('errors.required');
      }
    }

    const weekDates = getWeekDates();
    const allWeeksSelected = weekDates.every((date) => selectedPrograms.some((p) => p.programDate === date && p.programType));

    if (formData.selectedDate && !allWeeksSelected) {
      errors.programs = t('errors.selectProgram');
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateStep2 = () => {
    const errors: { [key: string]: string } = {};
    const requiredFields = ['parentName', 'completedGrade', 'paymentMethod'];

    for (const field of requiredFields) {
      if (!formData[field as keyof ReservationFormData]) {
        errors[field] = t('errors.required');
      }
    }

    const hasBirthDate = formData.birthDate || (formData.birthDay && formData.birthMonth && formData.birthYear);
    if (!hasBirthDate) {
      errors.birthDate = t('errors.birthDate');
    }

    if (!formData.termsAccepted) {
      errors.termsAccepted = t('errors.acceptTerms');
    }

    if (!formData.isNotRobot) {
      errors.isNotRobot = t('errors.notRobot');
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNextStep = async () => {
    setValidationErrors({});
    if (currentStep === 1 && validateStep1()) {
      try {
        await api.reservations.saveStep1({
          formData: {
            childFirstName: formData.childFirstName,
            childLastName: formData.childLastName,
            parentEmail: formData.parentEmail,
            parentPhone: formData.parentPhone,
            city: formData.city,
            campType: formData.campType,
            selectedDate: formData.selectedDate,
            stayDuration: formData.stayDuration,
            howDidYouHear: formData.howDidYouHear,
            questions: formData.questions,
          },
          programs: selectedPrograms.filter((p) => getWeekDates().includes(p.programDate)),
          language: locale,
        });
      } catch (error) {
        console.error('Failed to save page 1 data:', error);
      }

      setCurrentStep(2);

      setTimeout(() => {
        formTopRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } else if (currentStep === 1) {
      toast.error(t('errors.fixErrors'));
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setValidationErrors({});
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationErrors({});
    setSubmitAttempted(true);

    if (!validateStep2()) {
      toast.error(t('errors.fixErrors'));
      return;
    }

    setIsSubmitting(true);

    try {
      const combinedBirthDate =
        formData.birthDay && formData.birthMonth && formData.birthYear
          ? `${formData.birthDay}.${formData.birthMonth}.${formData.birthYear}`
          : formData.birthDate || '';

      const reservationData = {
        firstName: formData.childFirstName,
        lastName: formData.childLastName,
        email: formData.parentEmail,
        phone: formData.parentPhone,
        city: formData.city,
        accommodationType: formData.campType,
        startDate: formData.selectedDate,
        stayDuration: formData.stayDuration,
        howDidYouHear: formData.howDidYouHear,
        questions: formData.questions,
        termsAccepted: formData.termsAccepted,
        parentName: formData.parentName,
        completedGrade: formData.completedGrade,
        birthDate: combinedBirthDate,
        transportNeeded: formData.transportNeeded,
        insurance: formData.insurance.join(', '),
        paymentMethod: formData.paymentMethod,
        programs: selectedPrograms.filter((p) => getWeekDates().includes(p.programDate)),
      };

      const response = await api.reservations.create({
        ...reservationData,
        language: locale,
      });

      toast.success(t('messages.success'));

      setFormData({
        childFirstName: '',
        childLastName: '',
        parentEmail: '',
        parentPhone: '',
        city: '',
        campType: '',
        selectedDate: '',
        stayDuration: '',
        howDidYouHear: '',
        parentName: '',
        completedGrade: '',
        birthDay: '',
        birthMonth: '',
        birthYear: '',
        birthDate: '',
        transportNeeded: '',
        insurance: [],
        paymentMethod: '',
        termsAccepted: false,
        isNotRobot: false,
        questions: '',
      });
      setSelectedPrograms([]);
      setCurrentStep(1);
      setSubmitAttempted(false);

      if (onClose) onClose();
    } catch (error) {
      console.error('Error submitting reservation:', error);
      toast.error(t('messages.error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleTooltip = useCallback((tooltipId: string) => {
    setOpenTooltips((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(tooltipId)) {
        newSet.delete(tooltipId);
      } else {
        newSet.add(tooltipId);
      }
      return newSet;
    });
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const clickedOutside = Array.from(tooltipRefs.current.values()).every((ref) => ref && !ref.contains(event.target as Node));
      if (clickedOutside && openTooltips.size > 0) {
        setOpenTooltips(new Set());
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openTooltips]);

  return (
    <div ref={formTopRef} className="w-full max-w-4xl mx-auto">
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <div className="flex space-x-2">
            <div className="flex justify-end space-x-2">
              <div className={`w-4 h-4 rounded-full ${currentStep >= 1 ? 'bg-sea' : 'bg-slate-200'}`} />
              <div className={`w-4 h-4 rounded-full ${currentStep >= 2 ? 'bg-sea' : 'bg-slate-200'}`} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <form onSubmit={handleSubmit} className="reservation-form">
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="childFirstName">{t('form.childFirstName')} *</Label>
                  <Input
                    id="childFirstName"
                    value={formData.childFirstName}
                    onChange={(e) => handleInputChange('childFirstName', e.target.value)}
                    required
                    className="bg-white border-2 border-slate-200 focus:border-sea"
                  />
                  {validationErrors.childFirstName && <p className="text-red-500 text-sm mt-1">{validationErrors.childFirstName}</p>}
                </div>
                <div>
                  <Label htmlFor="childLastName">{t('form.childLastName')} *</Label>
                  <Input
                    id="childLastName"
                    value={formData.childLastName}
                    onChange={(e) => handleInputChange('childLastName', e.target.value)}
                    required
                    className="bg-white border-2 border-slate-200 focus:border-sea"
                  />
                  {validationErrors.childLastName && <p className="text-red-500 text-sm mt-1">{validationErrors.childLastName}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="parentEmail">{t('form.parentEmail')} *</Label>
                  <Input
                    id="parentEmail"
                    type="email"
                    value={formData.parentEmail}
                    onChange={(e) => handleInputChange('parentEmail', e.target.value)}
                    required
                    className="bg-white border-2 border-slate-200 focus:border-sea"
                  />
                  {validationErrors.parentEmail && <p className="text-red-500 text-sm mt-1">{validationErrors.parentEmail}</p>}
                </div>
                <div>
                  <Label htmlFor="parentPhone">{t('form.parentPhone')} *</Label>
                  <Input
                    id="parentPhone"
                    value={formData.parentPhone}
                    onChange={(e) => handleInputChange('parentPhone', e.target.value)}
                    required
                    className="bg-white border-2 border-slate-200 focus:border-sea"
                  />
                  {validationErrors.parentPhone && <p className="text-red-500 text-sm mt-1">{validationErrors.parentPhone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="parentName">{t('form.parentName')} *</Label>
                  <Input
                    id="parentName"
                    value={formData.parentName}
                    onChange={(e) => handleInputChange('parentName', e.target.value)}
                    required
                    className="bg-white border-2 border-slate-200 focus:border-sea"
                  />
                  {validationErrors.parentName && <p className="text-red-500 text-sm mt-1">{validationErrors.parentName}</p>}
                </div>
                <div>
                  <Label htmlFor="city">{t('form.city')} *</Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    required
                    className="bg-white border-2 border-slate-200 focus:border-sea"
                  />
                  {validationErrors.city && <p className="text-red-500 text-sm mt-1">{validationErrors.city}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-2 border-yellow-200 rounded-lg p-4 shadow-sm">
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id="premium-package"
                        checked={formData.campType === 'adventure'}
                        onCheckedChange={(checked) => handleInputChange('campType', checked ? 'adventure' : '')}
                        className="border-2 border-yellow-400 data-[state=checked]:bg-yellow-500"
                      />
                      <Label htmlFor="premium-package" className="text-base font-semibold cursor-pointer flex items-center gap-2">
                        <span className="text-2xl">★</span>
                        <span className="text-gray-800">{t('form.adventurePackage')}</span>
                      </Label>
                    </div>
                    <p className="text-xs text-gray-600 mt-2 ml-9">{t('form.adventureDesc')}</p>
                  </div>
                </div>
                <div>
                  <Label htmlFor="selectedDate">{t('form.term')} *</Label>
                  <Select value={formData.selectedDate} onValueChange={(value) => handleInputChange('selectedDate', value)}>
                    <SelectTrigger className="bg-white border-2 border-slate-200 focus:border-sea">
                      <SelectValue placeholder={t('form.selectTerm')} />
                    </SelectTrigger>
                    <SelectContent className="z-50">
                      {availableDates.map((date) => (
                        <SelectItem key={date} value={date}>
                          {date}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {validationErrors.selectedDate && <p className="text-red-500 text-sm mt-1">{validationErrors.selectedDate}</p>}
                </div>
              </div>

              {formData.selectedDate && getWeekDates().map((weekDate, index) => {
                const availableForWeek = programAvailability[weekDate] || [];
                return (
                  <div key={weekDate} className="mt-4 p-4 border-2 border-blue-100 rounded-xl bg-blue-50/30">
                    <Label className="text-blue-800 font-bold mb-3 block flex items-center gap-2">
                      <span className="bg-sea text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">{index + 1}</span>
                      {t('form.programForWeek')} {weekDate} *
                    </Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                      {availableForWeek.map((program) => (
                        <div
                          key={program}
                          className={`flex items-center space-x-3 p-2 rounded-lg border-2 transition-all cursor-pointer ${
                            selectedPrograms.some((p) => p.programDate === weekDate && p.programType === program)
                              ? 'border-sea bg-white shadow-sm'
                              : 'border-transparent bg-white/50 hover:bg-white'
                          }`}
                          onClick={() => handleProgramSelection(program, weekDate)}
                        >
                          <input
                            type="radio"
                            id={`program-${weekDate}-${program}`}
                            name={`program-selection-${weekDate}`}
                            checked={selectedPrograms.some((p) => p.programDate === weekDate && p.programType === program)}
                            onChange={() => handleProgramSelection(program, weekDate)}
                            className="w-4 h-4 text-sea border-gray-300 focus:ring-sea"
                          />
                          <Label htmlFor={`program-${weekDate}-${program}`} className="text-sm font-medium cursor-pointer flex-1">
                            {program}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
              {validationErrors.programs && <p className="text-red-500 text-sm mt-1 font-semibold">{validationErrors.programs}</p>}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="stayDuration">{t('form.stayDuration')} *</Label>
                  <Select value={formData.stayDuration} onValueChange={(value) => handleInputChange('stayDuration', value)}>
                    <SelectTrigger className="bg-white border-2 border-slate-200 focus:border-sea">
                      <SelectValue placeholder={t('form.selectDuration')} />
                    </SelectTrigger>
                    <SelectContent className="z-50">
                      {formData.campType === 'adventure' ? (
                        <>
                          <SelectItem value="2-tjedna">{t('options.2weeks')}</SelectItem>
                          <SelectItem value="3-tjedna">{t('options.3weeks')}</SelectItem>
                          <SelectItem value="4-tjedna">{t('options.4weeks')}</SelectItem>
                          <SelectItem value="5-tjedana">{t('options.5weeks')}</SelectItem>
                          <SelectItem value="6-tjedana">{t('options.6weeks')}</SelectItem>
                          <SelectItem value="7-tjedana">{t('options.7weeks')}</SelectItem>
                          <SelectItem value="8-tjedana">{t('options.8weeks')}</SelectItem>
                        </>
                      ) : (
                        <>
                          <SelectItem value="1-tjedan">{t('options.1week')}</SelectItem>
                          <SelectItem value="2-tjedna">{t('options.2weeks')}</SelectItem>
                          <SelectItem value="3-tjedna">{t('options.3weeks')}</SelectItem>
                          <SelectItem value="4-tjedna">{t('options.4weeks')}</SelectItem>
                          <SelectItem value="5-tjedana">{t('options.5weeks')}</SelectItem>
                          <SelectItem value="6-tjedana">{t('options.6weeks')}</SelectItem>
                          <SelectItem value="7-tjedana">{t('options.7weeks')}</SelectItem>
                          <SelectItem value="8-tjedana">{t('options.8weeks')}</SelectItem>
                        </>
                      )}
                    </SelectContent>
                  </Select>
                  {validationErrors.stayDuration && <p className="text-red-500 text-sm mt-1">{validationErrors.stayDuration}</p>}
                </div>
                <div>
                  <Label htmlFor="howDidYouHear">{t('form.howDidYouHear')} *</Label>
                  <Select value={formData.howDidYouHear} onValueChange={(value) => handleInputChange('howDidYouHear', value)}>
                    <SelectTrigger className="bg-white border-2 border-slate-200 focus:border-sea">
                      <SelectValue placeholder={t('form.selectOption')} />
                    </SelectTrigger>
                    <SelectContent className="z-50">
                      <SelectItem value="social-media">{t('options.socialMedia')}</SelectItem>
                      <SelectItem value="ai-preporuka">{t('options.aiRecommendation')}</SelectItem>
                      <SelectItem value="friends">{t('options.friendRecommendation')}</SelectItem>
                      <SelectItem value="google">{t('options.googleSearch')}</SelectItem>
                      <SelectItem value="oglasi">{t('options.ads')}</SelectItem>
                      <SelectItem value="other">{t('options.other')}</SelectItem>
                    </SelectContent>
                  </Select>
                  {validationErrors.howDidYouHear && <p className="text-red-500 text-sm mt-1">{validationErrors.howDidYouHear}</p>}
                </div>
              </div>

              <div>
                <Label htmlFor="questions">{t('form.questions')}</Label>
                <Textarea
                  id="questions"
                  value={formData.questions}
                  onChange={(e) => handleInputChange('questions', e.target.value)}
                  placeholder={t('form.questionsPlaceholder')}
                  className="bg-white border-2 border-slate-200 focus:border-sea min-h-[100px]"
                />
              </div>
              {currentStep === 1 && (
                <div className="flex justify-end mt-6">
                  <Button type="button" onClick={handleNextStep} className="modern-button">
                    {t('form.nextStep')}
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              )}
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 mb-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 leading-relaxed">{t('messages.almostThere')}</p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">{t('form.step2Title')}</h3>

              <div>
                <Label className="text-sm font-medium text-gray-700 mb-2 block">{t('form.birthDate')} *</Label>
                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <Select value={formData.birthDay} onValueChange={(value) => handleInputChange('birthDay', value)}>
                      <SelectTrigger className="bg-white border-2 border-slate-200 focus:border-sea">
                        <SelectValue placeholder={t('form.day')} />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                          <SelectItem key={day} value={day.toString().padStart(2, '0')}>
                            {day}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Select value={formData.birthMonth} onValueChange={(value) => handleInputChange('birthMonth', value)}>
                      <SelectTrigger className="bg-white border-2 border-slate-200 focus:border-sea">
                        <SelectValue placeholder={t('form.month')} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="01">{t('months.01')}</SelectItem>
                        <SelectItem value="02">{t('months.02')}</SelectItem>
                        <SelectItem value="03">{t('months.03')}</SelectItem>
                        <SelectItem value="04">{t('months.04')}</SelectItem>
                        <SelectItem value="05">{t('months.05')}</SelectItem>
                        <SelectItem value="06">{t('months.06')}</SelectItem>
                        <SelectItem value="07">{t('months.07')}</SelectItem>
                        <SelectItem value="08">{t('months.08')}</SelectItem>
                        <SelectItem value="09">{t('months.09')}</SelectItem>
                        <SelectItem value="10">{t('months.10')}</SelectItem>
                        <SelectItem value="11">{t('months.11')}</SelectItem>
                        <SelectItem value="12">{t('months.12')}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Select value={formData.birthYear} onValueChange={(value) => handleInputChange('birthYear', value)}>
                      <SelectTrigger className="bg-white border-2 border-slate-200 focus:border-sea">
                        <SelectValue placeholder={t('form.year')} />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 20 }, (_, i) => 2026 - i).map((year) => (
                          <SelectItem key={year} value={year.toString()}>
                            {year}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                {validationErrors.birthDate && <p className="text-red-500 text-sm mt-1">{validationErrors.birthDate}</p>}
              </div>

              <div>
                <Label htmlFor="completedGrade">{t('form.completedGrade')} *</Label>
                <Input
                  id="completedGrade"
                  value={formData.completedGrade}
                  onChange={(e) => handleInputChange('completedGrade', e.target.value)}
                  placeholder={t('form.completedGradePlaceholder')}
                  required
                  className="bg-white border-2 border-slate-200 focus:border-sea"
                />
                {validationErrors.completedGrade && <p className="text-red-500 text-sm mt-1">{validationErrors.completedGrade}</p>}
              </div>

              <div>
                <Label htmlFor="transportNeeded">{t('form.transportNeeded')}</Label>
                <Select value={formData.transportNeeded} onValueChange={(value) => handleInputChange('transportNeeded', value)}>
                  <SelectTrigger className="bg-white border-2 border-slate-200 focus:border-sea">
                    <SelectValue placeholder={t('form.selectTransport')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ne-treba">{t('options.noTransport')}</SelectItem>
                    <SelectItem value="A)Zagreb - Brodarica - Zagreb">{t('options.transportA')}</SelectItem>
                    <SelectItem value="B) Dobra - Brodarica - Dobra">{t('options.transportB')}</SelectItem>
                    <SelectItem value="C) Zagreb - Brodarica (jedan smjer)">{t('options.transportC')}</SelectItem>
                    <SelectItem value="C1) Brodarica - Zagreb (jedan smjer)">{t('options.transportC1')}</SelectItem>
                    <SelectItem value="D) Dobra - Brodarica (jedan smjer)">{t('options.transportD')}</SelectItem>
                    <SelectItem value="D1) Brodarica - Dobra (jedan smjer)">{t('options.transportD1')}</SelectItem>
                    <SelectItem value="E) Zračna luka Zadar - Brodarica - Zračna luka Zadar">{t('options.transportE')}</SelectItem>
                    <SelectItem value="F) Zračna luka Split - Brodarica - Zračna luka Split">{t('options.transportF')}</SelectItem>
                    <SelectItem value="G) Autobusni kolodvor Šibenik - Brodarica -Autobusni kolodvor Šibenik">{t('options.transportG')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>{t('form.insurance')}</Label>
                <div className="space-y-2 mt-2">
                  {[
                    { key: 'insuranceA', desc: t('options.insuranceADesc') },
                    { key: 'insuranceB', desc: t('options.insuranceBDesc') },
                    { key: 'insuranceC', desc: t('options.insuranceCDesc') },
                    { key: 'insuranceD', desc: t('options.insuranceDDesc') },
                  ].map((option) => (
                    <div key={option.key} className="flex items-center space-x-2">
                      <Checkbox
                        id={option.key}
                        checked={formData.insurance.includes(option.desc)}
                        onCheckedChange={(checked) => handleInsuranceChange(option.desc, checked as boolean)}
                        className="border-2 border-gray-300"
                      />
                      <Label htmlFor={option.key} className="text-sm">{option.desc}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Label htmlFor="paymentMethod" className="flex items-center gap-2">
                  {t('form.paymentMethod')} *
                  <TooltipProvider>
                    <Tooltip open={openTooltips.has('payment-info')} onOpenChange={(open: boolean) => { if (!open) setOpenTooltips(new Set()); }}>
                      <TooltipTrigger asChild>
                        <Info
                          className="h-4 w-4 text-sea cursor-pointer"
                          onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleTooltip('payment-info'); }}
                        />
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs p-3">
                        <p className="text-sm">{t('tooltip.paymentInfo')}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Label>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="payment-once"
                      checked={formData.paymentMethod === 'Odjednom'}
                      onCheckedChange={(checked) => { if (checked) handleInputChange('paymentMethod', 'Odjednom'); }}
                      className="border-2 border-gray-300"
                    />
                    <Label htmlFor="payment-once" className="text-sm font-normal cursor-pointer">{t('options.paymentOnce')}</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="payment-installments-before"
                      checked={formData.paymentMethod === 'Na rate do polaska'}
                      onCheckedChange={(checked) => { if (checked) handleInputChange('paymentMethod', 'Na rate do polaska'); }}
                      className="border-2 border-gray-300"
                    />
                    <Label htmlFor="payment-installments-before" className="text-sm font-normal cursor-pointer">{t('options.paymentInstallmentsBefore')}</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="payment-installments-after"
                      checked={formData.paymentMethod === 'Na rate i nakon polaska (do 10 rata)'}
                      onCheckedChange={(checked) => { if (checked) handleInputChange('paymentMethod', 'Na rate i nakon polaska (do 10 rata)'); }}
                      className="border-2 border-gray-300"
                    />
                    <Label htmlFor="payment-installments-after" className="text-sm font-normal cursor-pointer">{t('options.paymentInstallmentsAfter')}</Label>
                  </div>
                </div>
                {validationErrors.paymentMethod && <p className="text-red-500 text-sm mt-1">{validationErrors.paymentMethod}</p>}
              </div>

              <div>
                <Label htmlFor="questions">{t('form.questions')}</Label>
                <Textarea
                  id="questions"
                  value={formData.questions}
                  onChange={(e) => handleInputChange('questions', e.target.value)}
                  className="bg-white border-2 border-slate-200 focus:border-sea"
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="termsAccepted"
                    checked={formData.termsAccepted}
                    onCheckedChange={(checked) => handleInputChange('termsAccepted', checked as boolean)}
                    className="border-2 border-gray-300"
                  />
                  <Label htmlFor="termsAccepted" className="text-sm">
                    {t('form.acceptTerms1')}{' '}
                    <a href="/uploads/dokumenti/euroclub_opci_uvjeti.pdf" target="_blank" rel="noopener noreferrer" className="text-sea hover:text-sea-dark underline">
                      {t('form.termsLink')}
                    </a>{' '}
                    *
                  </Label>
                </div>
                {submitAttempted && validationErrors.termsAccepted && <p className="text-red-500 text-sm mt-1">{validationErrors.termsAccepted}</p>}

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="isNotRobot"
                    checked={formData.isNotRobot}
                    onCheckedChange={(checked) => handleInputChange('isNotRobot', checked as boolean)}
                    className="border-2 border-gray-300"
                  />
                  <Label htmlFor="isNotRobot" className="text-sm">{t('form.notRobot')} *</Label>
                </div>
                {submitAttempted && validationErrors.isNotRobot && <p className="text-red-500 text-sm mt-1">{validationErrors.isNotRobot}</p>}
              </div>

              <div className="flex justify-between">
                <Button type="button" variant="outline" onClick={handlePrevStep} className="border-2 border-slate-200">
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  {t('form.previousStep')}
                </Button>
                <Button type="submit" disabled={isSubmitting} className="modern-button">
                  {isSubmitting ? t('form.submitting') : t('form.submit')}
                </Button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}