import React from 'react';
import { Quote, AlertCircle } from 'lucide-react';
import { TESTIMONIALS } from '../data/clinicData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#123C42] mb-3">
            <span className="w-2 h-0.5 bg-[#D6B477]" />
            <span>Sample Patient Experiences</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#123C42]">
            Reflecting on Real Comfort
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Every clinical decision at Lumident is shaped by patient feedback, clarity in billing, and gentle chairside manners.
          </p>

          {/* Honest Demo Disclaimer Notice */}
          <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-50/70 border border-amber-200/80 text-[11px] text-amber-900">
            <AlertCircle className="w-3.5 h-3.5 text-amber-700 shrink-0" />
            <span>The following excerpts are illustrative portfolio sample entries for website presentation purposes.</span>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-[#FAF9F6] rounded-2xl p-7 border border-slate-200/80 flex flex-col justify-between relative shadow-2xs hover:border-[#123C42]/20 transition-colors"
            >
              <div>
                <Quote className="w-6 h-6 text-[#D6B477] mb-4 opacity-80" />
                <p className="text-slate-700 text-sm leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Author attribution (Anti-slop: clean unboxed metadata) */}
              <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs">
                <div>
                  <h3 className="font-display font-bold text-slate-900">{item.author}</h3>
                  <p className="text-slate-500 text-[11px] mt-0.5">{item.treatment}</p>
                </div>
                <span className="text-[10px] text-slate-400 font-medium">Demo Profile</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
