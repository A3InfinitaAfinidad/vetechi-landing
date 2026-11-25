'use client';

import { ReactNode } from 'react';

interface PremiumServiceContainerProps {
  children: ReactNode;
  isEmergency?: boolean;
  className?: string;
}

export default function PremiumServiceContainer({
  children,
  isEmergency = false,
  className = ''
}: PremiumServiceContainerProps) {
  return (
    <div
      className="group"
    >
      <div
        className={`relative rounded-3xl overflow-hidden transition-all duration-500 cursor-pointer
          shadow-[0_8px_30px_rgba(0,0,0,0.12)]
          hover:shadow-[0_16px_48px_rgba(0,0,0,0.18)]
          ${isEmergency
            ? 'bg-dark-900 border border-red-500/30 hover:border-red-500/60'
            : 'bg-white border border-primary-700/20 hover:border-primary-700/60'
          }
          ${className}
        `}
      >
        {/* Glow effect on hover */}
        <div
          className={`absolute inset-0 rounded-3xl pointer-events-none transition-all duration-500 opacity-0 group-hover:opacity-100
            ${isEmergency
              ? 'ring-2 ring-red-500/40 ring-inset'
              : 'ring-2 ring-primary-700/40 ring-inset'
            }
          `}
        />

        {/* Inner content */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </div>
  );
}
