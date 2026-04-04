import { cn } from "@/lib/utils"
import React from "react"

export interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    subtitle?: string;
    align?: 'left' | 'center' | 'right';
}

export function SectionHeading({
    title,
    subtitle,
    align = 'center',
    className,
    ...props
}: SectionHeadingProps) {
    const alignmentClasses = {
        left: 'text-left',
        center: 'text-center mx-auto',
        right: 'text-right ml-auto',
    };

    return (
        <div className={cn("mb-12 max-w-3xl", alignmentClasses[align], className)} {...props}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                {title}
            </h2>
            {subtitle && (
                <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                    {subtitle}
                </p>
            )}
            <div className={cn(
                "h-1 w-20 bg-blue-500 rounded mt-6",
                align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : ''
            )} />
        </div>
    )
}
