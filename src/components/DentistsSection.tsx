import React, { useState } from 'react';
import { Calendar, GraduationCap, Award, CalendarDays, Sparkles, Quote } from 'lucide-react';
import { DENTISTS } from '../data/clinicData';
import { Dentist } from '../types';

interface DentistsSectionProps {
  onBookWithDentist: (dentistId: string) => void;
}

export const DentistsSection: React.FC<DentistsSectionProps> = ({ onBookWithDentist }) => {
  const [selectedDentist, setSelectedDentist] = useState<Dentist | null>(null);

  return (
    <section id="dentists" className="py-16 lg:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#123C42] mb-3">
            <span className="w-2 h-0.5 bg-[#D6B477]" />
            <span>Fictional Clinical Team (Demo)</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#123C42]">
            Meet Our Care Team
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Our clinicians share a commitment to gentle communication, conservative treatment options, and continuous study in modern digital dentistry.
          </p>
          <p className="text-xs text-slate-400 mt-2 italic">
            *Demonstration note: The clinicians below are fictional personas created to model medical profile architecture and booking routing.
          </p>
        </div>

        {/* 3 Dentist Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DENTISTS.map((dentist) => (
            <div
              key={dentist.id}
              className="bg-[#FAF9F6] rounded-2xl overflow-hidden border border-slate-200/80 flex flex-col justify-between hover:shadow-lg transition-all duration-200 group"
            >
              <div>
                {/* Photo container */}
                <div className="relative aspect-[3/4] overflow-hidden bg-slate-100">
                  <img
                    src={dentist.image}
                    alt={`${dentist.name} - ${dentist.role}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-102"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  
                  {/* Overlay name and role */}
                  <div className="absolute bottom-4 inset-x-4 text-white">
                    <span className="text-[11px] font-medium text-[#D6B477] uppercase tracking-wider">
                      {dentist.role}
                    </span>
                    <h3 className="font-display text-xl font-bold text-white mt-0.5">
                      {dentist.name}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4">
                  {/* Focus Area */}
                  <div>
                    <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider text-[10px] text-slate-500 mb-1">
                      Focus Area
                    </h4>
                    <p className="text-xs font-medium text-[#123C42]">
                      {dentist.focusArea}
                    </p>
                  </div>

                  {/* Education / Credentials */}
                  <div className="flex items-start gap-2 text-xs text-slate-600">
                    <GraduationCap className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <span className="leading-snug">{dentist.education}</span>
                  </div>

                  {/* Biography */}
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {dentist.bio}
                  </p>

                  {/* Clinical Philosophy Quote */}
                  <div className="p-3 rounded-xl bg-white border border-slate-200/60 relative">
                    <Quote className="w-3.5 h-3.5 text-[#D6B477] absolute top-2.5 right-2.5 opacity-60" />
                    <p className="text-[11px] text-slate-600 italic leading-normal pr-4">
                      "{dentist.philosophy}"
                    </p>
                  </div>

                  {/* Available Days */}
                  <div className="flex items-center gap-2 text-[11px] text-slate-500 pt-1">
                    <CalendarDays className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>In-studio: {dentist.daysAvailable.join(', ')}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onBookWithDentist(dentist.id)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#123C42] bg-[#DDF3EB] hover:bg-[#cdeee3] active:bg-[#bde8dc] rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#123C42]"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#123C42]" />
                  <span>Request Visit with {dentist.name.split(' ')[0]} {dentist.name.split(' ')[2] || dentist.name.split(' ')[1]}</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
