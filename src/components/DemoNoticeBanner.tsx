import React, { useState } from 'react';
import { Info, X } from 'lucide-react';

export const DemoNoticeBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <aside aria-label="Demonstration site notice" className="bg-[#123C42] text-white border-b border-[#1A525A] text-xs py-2 px-4 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Info className="w-3.5 h-3.5 text-[#D6B477] shrink-0" aria-hidden="true" />
          <p className="leading-snug">
            <span className="font-semibold text-[#D6B477]">Portfolio Demonstration:</span>{' '}
            Lumident Dental Studio is a concept clinic designed to showcase modern healthcare web design, accessibility, and booking flows. Dentist profiles, reviews, and booking forms are for demonstration.
          </p>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-slate-300 hover:text-white p-1 rounded hover:bg-[#1A525A]/60 transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D6B477]"
          aria-label="Dismiss demo banner"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
};
