'use client';

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import ReservationForm from '@/components/forms/ReservationForm';

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-center text-slate-800">
                        Rezervacija kampa
                    </DialogTitle>
                </DialogHeader>
                <ReservationForm onClose={onClose} />
            </DialogContent>
        </Dialog>
    );
}