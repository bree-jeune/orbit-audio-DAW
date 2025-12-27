import React from 'react';

export const BrandIcon = ({ className = "w-8 h-8", color = "currentColor" }: { className?: string, color?: string }) => (
    <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <defs>
            <radialGradient id="aiPlanetGradient" cx="50%" cy="50%" r="50%" fx="30%" fy="30%">
                <stop offset="0%" stopColor="#14b8a6" />
                <stop offset="100%" stopColor="#0d9488" />
            </radialGradient>
            <filter id="aiGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
        </defs>

        <ellipse cx="50" cy="50" rx="45" ry="22" stroke={color} strokeWidth="0.5" opacity="0.3" />
        <ellipse cx="50" cy="50" rx="38" ry="18" stroke={color} strokeWidth="0.5" opacity="0.5" />
        <ellipse cx="50" cy="50" rx="30" ry="14" stroke={color} strokeWidth="0.5" opacity="0.7" />

        <circle cx="50" cy="50" r="16" fill="url(#aiPlanetGradient)" filter="url(#aiGlow)" />

        <circle cx="28" cy="40" r="4" fill="#a78bfa" filter="url(#aiGlow)" />
        <circle cx="32" cy="65" r="5" fill="#c4b5fd" filter="url(#aiGlow)" />
        <circle cx="68" cy="40" r="4.5" fill="#f59e0b" filter="url(#aiGlow)" />
    </svg>
);
