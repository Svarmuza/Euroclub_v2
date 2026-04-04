'use client';

import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

export interface AccordionProps {
    title: string;
    children: React.ReactNode;
    defaultOpen?: boolean;
    className?: string;
    theme?: 'coastal' | 'adriatic';
}

export function Accordion({ title, children, defaultOpen = false, className, theme = 'coastal' }: AccordionProps) {
    const [isOpen, setIsOpen] = React.useState(defaultOpen);

    const themeClasses = {
        coastal: {
            button: "bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 text-white",
            content: "bg-gray-50",
        },
        adriatic: {
            button: "bg-cyan-600 hover:bg-cyan-700 focus:bg-cyan-700 text-white",
            content: "bg-gray-50",
        }
    };

    return (
        <div className={cn("rounded-lg shadow-md overflow-hidden bg-white mb-4", className)}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "w-full flex items-center justify-between p-4 transition-colors duration-300",
                    themeClasses[theme].button
                )}
            >
                <span className="text-lg font-semibold">{title}</span>
                <ChevronDown
                    className={cn(
                        "h-5 w-5 transition-transform duration-300",
                        isOpen ? "transform rotate-180" : ""
                    )}
                />
            </button>

            <div
                className={cn(
                    "grid transition-all duration-300 ease-in-out",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                )}
            >
                <div className={cn("overflow-hidden", themeClasses[theme].content)}>
                    <div className="p-4 space-y-2">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
