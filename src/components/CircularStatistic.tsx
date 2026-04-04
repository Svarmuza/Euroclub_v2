'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface CircularStatisticProps {
    value: number;
    maxValue: number;
    label: string;
    color?: string;
    bgColor?: string;
    duration?: number;
    size?: number;
    strokeWidth?: number;
}

export default function CircularStatistic({
    value,
    maxValue,
    label,
    color = '#168CC4',
    bgColor = '#E5E7EB',
    duration = 2000,
    size = 120,
    strokeWidth = 8,
}: CircularStatisticProps) {
    const [progress, setProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [displayValue, setDisplayValue] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    setIsVisible(true);
                    hasAnimated.current = true;
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        const startTime = Date.now();
        const endTime = startTime + duration;

        const animate = () => {
            const now = Date.now();
            const elapsed = now - startTime;
            const remaining = Math.min(elapsed / duration, 1);

            const easeOutQuart = 1 - Math.pow(1 - remaining, 4);
            setProgress(easeOutQuart);

            setDisplayValue(Math.floor(easeOutQuart * value));

            if (now < endTime) {
                requestAnimationFrame(animate);
            } else {
                setProgress(1);
                setDisplayValue(value);
            }
        };

        requestAnimationFrame(animate);
    }, [isVisible, value, duration]);

    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const strokeDashoffset = circumference - progress * circumference;

    const svgSize = size;
    const center = svgSize / 2;

    return (
        <div ref={ref} className="flex flex-col items-center">
            <div className="relative" style={{ width: svgSize, height: svgSize }}>
                <svg
                    width={svgSize}
                    height={svgSize}
                    className="transform -rotate-90"
                >
                    <circle
                        cx={center}
                        cy={center}
                        r={radius}
                        fill="none"
                        stroke={bgColor}
                        strokeWidth={strokeWidth}
                    />
                    <circle
                        cx={center}
                        cy={center}
                        r={radius}
                        fill="none"
                        stroke={color}
                        strokeWidth={strokeWidth}
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        style={{
                            transition: 'stroke-dashoffset 0.1s ease-out',
                        }}
                    />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl md:text-3xl font-black text-slate-900">
                        {displayValue.toLocaleString()}
                    </span>
                </div>
            </div>
            <span className="mt-3 text-sm font-medium text-slate-600 text-center max-w-[120px]">
                {label}
            </span>
        </div>
    );
}
