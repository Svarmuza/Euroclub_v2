'use client';

import { useTranslations } from 'next-intl';
import { useConsent } from '@/hooks/useConsent';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Settings, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from '@/components/ui/dialog';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

export default function CookieConsent() {
    const t = useTranslations('CookieConsent');
    const { consent, showBanner, saveConsent, acceptAll, declineAll, showBannerSettings } = useConsent();
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [localConsent, setLocalConsent] = useState(consent);

    if (!showBanner && consent.necessary && (consent.analytics || consent.marketing)) {
        return null;
    }

    if (!showBanner) {
        return null;
    }

    const handleSaveSettings = () => {
        saveConsent(localConsent);
        setIsSettingsOpen(false);
    };

    const openSettings = () => {
        setLocalConsent(consent);
        setIsSettingsOpen(true);
    };

    return (
        <>
            <AnimatePresence>
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-8 md:max-w-md"
                >
                    <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-blue-100 p-6">
                        <div className="flex items-start gap-4">
                            <div className="p-2 bg-blue-50 rounded-lg">
                                <Shield className="h-6 w-6 text-blue-600" />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-slate-900 mb-1">{t('title')}</h3>
                                <p className="text-sm text-slate-600 mb-4">{t('message')}</p>
                                <div className="flex flex-col sm:flex-row gap-2">
                                    <Button
                                        onClick={acceptAll}
                                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-xl shadow-lg"
                                    >
                                        {t('acceptAll')}
                                    </Button>
                                    <Button
                                        onClick={openSettings}
                                        variant="outline"
                                        className="flex-1 border border-slate-200 hover:bg-slate-50 font-medium py-2.5 rounded-xl"
                                    >
                                        <Settings className="h-4 w-4 mr-2" />
                                        {t('manage')}
                                    </Button>
                                    <Button
                                        onClick={declineAll}
                                        variant="ghost"
                                        className="text-slate-500 hover:text-slate-700 hover:bg-slate-100 py-2.5"
                                    >
                                        {t('decline')}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            <Dialog open={isSettingsOpen} onOpenChange={setIsSettingsOpen}>
                <DialogContent className="sm:max-w-[500px] rounded-3xl p-0 overflow-hidden border-none shadow-2xl">
                    <DialogHeader className="p-6 pb-0">
                        <DialogTitle className="text-xl font-bold">{t('title')}</DialogTitle>
                        <DialogDescription className="text-slate-600">
                            {t('subtitle')}
                        </DialogDescription>
                    </DialogHeader>
                    <div className="p-6 space-y-4">
                        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                            <div className="flex items-center justify-between">
                                <div>
                                    <Label className="font-semibold text-slate-900">{t('necessary')}</Label>
                                    <p className="text-sm text-slate-600 mt-0.5">{t('necessaryDesc')}</p>
                                </div>
                                <Switch checked={localConsent.necessary} disabled />
                            </div>
                        </div>

                        <div className="p-4 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                            <div className="flex items-center justify-between">
                                <div>
                                    <Label className="font-semibold text-slate-900">{t('analytics')}</Label>
                                    <p className="text-sm text-slate-600 mt-0.5">{t('analyticsDesc')}</p>
                                </div>
                                <Switch
                                    checked={localConsent.analytics}
                                    onCheckedChange={(checked: boolean) => setLocalConsent(prev => ({ ...prev, analytics: checked }))}
                                />
                            </div>
                        </div>

                        <div className="p-4 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                            <div className="flex items-center justify-between">
                                <div>
                                    <Label className="font-semibold text-slate-900">{t('marketing')}</Label>
                                    <p className="text-sm text-slate-600 mt-0.5">{t('marketingDesc')}</p>
                                </div>
                                <Switch
                                    checked={localConsent.marketing}
                                    onCheckedChange={(checked: boolean) => setLocalConsent(prev => ({ ...prev, marketing: checked }))}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="p-6 pt-0 flex gap-3">
                        <Button
                            onClick={handleSaveSettings}
                            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-xl"
                        >
                            {t('save')}
                        </Button>
                        <Button
                            onClick={() => setIsSettingsOpen(false)}
                            variant="outline"
                            className="flex-1 border border-slate-200 hover:bg-slate-50 font-medium py-2.5 rounded-xl"
                        >
                            {t('cancel')}
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}
