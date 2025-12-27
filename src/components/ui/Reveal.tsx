'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';
import { clsx } from 'clsx';

interface RevealProps {
    children: ReactNode;
    className?: string;
    delay?: number; // ms
    duration?: number; // ms
    width?: "fit-content" | "100%";
    variant?: 'fade-up' | 'fade-left' | 'fade-right' | 'scale-in';
}

export const Reveal = ({
    children,
    className,
    delay = 0,
    duration = 700,
    width = "fit-content",
    variant = 'fade-up'
}: RevealProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Once visible, we can disconnect if we only want it to trigger once
                    observer.disconnect();
                }
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px"
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div
            ref={ref}
            className={clsx(
                className,
                "reveal",
                `reveal-${variant}`,
                isVisible && "reveal-visible"
            )}
            style={{
                width,
                transitionDuration: `${duration}ms`,
                transitionDelay: `${delay}ms`
            }}
        >
            {children}
        </div>
    );
};
