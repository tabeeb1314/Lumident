import React, { useState } from 'react';
import { Calendar, MessageSquare, Sparkles, ArrowRight } from 'lucide-react';
import { PATIENT_JOURNEY_STEPS } from '../data/clinicData';

interface PatientExperienceProps {
  onOpenBooking: () => void;
}

export const PatientExperience: React.FC<PatientExperienceProps> = ({ onOpenBooking }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="py-16 lg:py-24 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#123C42] mb-3">
            <span className="w-2 h-0.5 bg-[#D6B477]" />
            <span>The Patient Journey</span>
            <span className="w-2 h-0.5 bg-[#D6B477]" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#123C42]">
            What to Expect at Lumident
          </h2>
          <p className="mt-3 text-base text-slate-600">
            A transparent, three-step pathway designed to respect your schedule, clarify treatment options, and restore confidence.
          </p>
        </div>

        {/* 3 Steps Bento Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {PATIENT_JOURNEY_STEPS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-xs relative flex flex-col justify-between"
            >
              <div>
                <span className="font-display text-3xl font-extrabold text-[#D6B477]/80">
                  {item.step}
                </span>
                <h3 className="font-display text-xl font-bold text-[#123C42] mt-3 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-medium text-[#123C42]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#123C42]" />
                <span>Stage {idx + 1} of 3</span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Consultation Feature Spotlight */}
        <div className="rounded-2xl bg-white border border-slate-200/80 overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12 items-center">
          
          {/* Photo Column (6 cols) */}
          <div className="lg:col-span-6 relative aspect-[4/3] lg:aspect-auto lg:h-full bg-slate-100 min-h-[300px]">
            {!imageError ? (
              <img
                src="/src/assets/images/patient_consultation_scene_1793092933907.jpg"
                alt="Patient and dentist reviewing digital 3D aligner plan on tablet"
                referrerPolicy="no-referrer"
                onError={() => setImageError(true)}
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center p-8 bg-[#DDF3EB]/30">
                <Sparkles className="w-10 h-10 text-[#123C42]" />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent lg:hidden" />
          </div>

          {/* Copy Column (6 cols) */}
          <div className="lg:col-span-6 p-8 sm:p-12 space-y-5">
            <span className="text-xs font-bold text-[#D6B477] uppercase tracking-wider">
              Visual Clarity
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#123C42]">
              Digital 3D Smile Modeling
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              We never ask you to commit to treatments without understanding the progression. In our consultation suites, high-definition digital simulations illustrate current occlusal dynamics and projected results side-by-side.
            </p>

            <div className="space-y-2.5 pt-1 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <span className="text-[#123C42] font-bold">✓</span>
                <span>No messy physical impression putty — fast 3D optical scans</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#123C42] font-bold">✓</span>
                <span>Collaborative review on high-resolution displays</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#123C42] font-bold">✓</span>
                <span>Full copy of your digital treatment simulation emailed to you</span>
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#123C42] hover:bg-[#0E2C31] rounded-xl transition-colors shadow-xs"
              >
                <Calendar className="w-3.5 h-3.5 text-[#D6B477]" />
                <span>Reserve a Consultation</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
