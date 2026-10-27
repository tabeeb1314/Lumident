import React, { useState } from 'react';
import { 
  FileText, 
  MessageSquare, 
  Heart, 
  CalendarCheck, 
  Users, 
  Sparkles, 
  Check 
} from 'lucide-react';
import { CLINIC_PILLARS } from '../data/clinicData';

export const WhyChooseUs: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  const getPillarIcon = (index: number) => {
    switch (index) {
      case 0:
        return <FileText className="w-5 h-5 text-[#123C42]" />;
      case 1:
        return <MessageSquare className="w-5 h-5 text-[#123C42]" />;
      case 2:
        return <Heart className="w-5 h-5 text-[#123C42]" />;
      case 3:
        return <CalendarCheck className="w-5 h-5 text-[#123C42]" />;
      case 4:
        return <Users className="w-5 h-5 text-[#123C42]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#123C42]" />;
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-[#FAF9F6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#123C42] mb-3">
            <span className="w-2 h-0.5 bg-[#D6B477]" />
            <span>The Lumident Difference</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#123C42]" style={{ textWrap: 'balance' }}>
            A Calmer, More Attentive Dental Experience.
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            We redesigned our clinical philosophy to eliminate rush, anxiety, and opacity. Here is how our studio prioritizes your health, time, and comfort at every stage.
          </p>
        </div>

        {/* 2-Column Split: Operatory Visual + 5 Core Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: High-Resolution Clinic Operatory Visual (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200/80 shadow-md bg-white h-full min-h-[380px]">
              {!imageError ? (
                <img
                  src="/src/assets/images/clinic_interior_treatment_1793092932163.jpg"
                  alt="Lumident Dental Studio state-of-the-art operatory suite overlooking garden greenery"
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full min-h-[380px] bg-gradient-to-br from-[#FAF9F6] to-[#DDF3EB]/50 flex flex-col items-center justify-center p-8 text-center">
                  <Sparkles className="w-10 h-10 text-[#123C42] mb-3" />
                  <h3 className="font-display font-semibold text-slate-800">Garden View Operatory</h3>
                  <p className="text-xs text-slate-500 mt-1 max-w-xs">Designed for tranquility and clinical precision.</p>
                </div>
              )}

              {/* Informative Feature Caption */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent p-6 text-white">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#D6B477]">
                  Clinical Comfort
                </span>
                <p className="font-display font-bold text-base text-white mt-1">
                  Private treatment suites with natural garden exposure
                </p>
                <p className="text-xs text-slate-300 mt-1">
                  Gentle noise-isolated acoustics &amp; modern ultra-low radiation digital sensors.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 5 Pillars List (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
            {CLINIC_PILLARS.map((pillar, index) => (
              <div
                key={index}
                className="p-5 rounded-2xl bg-white border border-slate-200/80 hover:border-[#123C42]/30 transition-all duration-150 hover:shadow-xs flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-[#DDF3EB] flex items-center justify-center shrink-0 mt-0.5">
                  {getPillarIcon(index)}
                </div>
                <div className="space-y-1">
                  <h3 className="font-display text-base font-bold text-[#123C42]">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
