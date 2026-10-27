import React, { useState } from 'react';
import heroImage from '../assets/images/hero_lumident_studio_1793092933050.jpg';
import { Calendar, ArrowRight, ShieldCheck, Sparkles, Clock3, Smile } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreServices }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="home" className="relative pt-6 pb-16 lg:pt-12 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Proposition & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Unboxed subtle kicker (Anti-slop: NO pills, clean typography) */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#123C42]">
              <span className="w-2 h-0.5 bg-[#D6B477]" />
              <span>Modern Family &amp; Cosmetic Dentistry</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span className="text-slate-500 font-normal">San Francisco Studio</span>
            </div>

            <div className="space-y-5">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#123C42] leading-[1.12]" style={{ textWrap: 'balance' }}>
                Your Smile Deserves <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#123C42] via-[#1A525A] to-[#246A74]">
                  Exceptional Care.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Experience thoughtful, gentle dental wellness in a calm, modern environment. At Lumident Studio, we combine digital precision with attentive comfort — crafting healthy smiles that feel authentically yours.
              </p>
            </div>

            {/* Action CTAs: One distinct primary action + one secondary link */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-semibold text-white bg-[#123C42] hover:bg-[#0E2C31] active:bg-[#0A2226] rounded-xl transition-all duration-200 shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#123C42] focus-visible:ring-offset-2"
              >
                <Calendar className="w-4 h-4 text-[#D6B477]" />
                <span>Book an Appointment</span>
              </button>

              <button
                onClick={onExploreServices}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-700 bg-white hover:bg-slate-50 hover:text-[#123C42] border border-slate-200 rounded-xl transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Compact Trust Information Area (Truthful, non-fabricated) */}
            <div className="pt-6 border-t border-slate-200/70">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-[#123C42] shrink-0 mt-0.5" />
                  <div>
                    <h2 className="text-xs font-semibold text-slate-900">Transparent Pricing</h2>
                    <p className="text-[11px] text-slate-500 leading-tight mt-0.5">Clear upfront estimates before any procedure</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Smile className="w-5 h-5 text-[#123C42] shrink-0 mt-0.5" />
                  <div>
                    <h2 className="text-xs font-semibold text-slate-900">Patient-First Comfort</h2>
                    <p className="text-[11px] text-slate-500 leading-tight mt-0.5">Gentle techniques &amp; serene private rooms</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 col-span-2 sm:col-span-1">
                  <Clock3 className="w-5 h-5 text-[#123C42] shrink-0 mt-0.5" />
                  <div>
                    <h2 className="text-xs font-semibold text-slate-900">Timely Appointments</h2>
                    <p className="text-[11px] text-slate-500 leading-tight mt-0.5">Dedicated same-day slots for urgent needs</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero High-Definition Visual (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Background ambient architectural card */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 bg-white">
                {!imageError ? (
                  <img
                    src={heroImage}
                    alt="Lumident Dental Studio serene reception and modern clinical suite"
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                    className="w-full h-[400px] sm:h-[460px] lg:h-[500px] object-cover object-center"
                    loading="eager"
                  />
                ) : (
                  <div className="w-full h-[460px] bg-gradient-to-br from-[#FAF9F6] to-[#DDF3EB]/40 flex flex-col items-center justify-center p-8 text-center">
                    <Sparkles className="w-12 h-12 text-[#123C42] mb-3" />
                    <h3 className="font-display font-bold text-lg text-[#123C42]">Lumident Dental Studio</h3>
                    <p className="text-xs text-slate-500 max-w-xs mt-1">Serene, modern healthcare designed around your comfort.</p>
                  </div>
                )}

                {/* Subtle, tasteful overlay caption at bottom */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent p-5 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-medium text-slate-200">The Lumident Experience</p>
                      <p className="text-sm font-semibold text-white">Serene suites &amp; state-of-the-art care</p>
                    </div>
                    <span className="text-[11px] font-medium text-[#D6B477] bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-md border border-white/10">
                      Suite 300
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative subtle brass accent corner badge */}
              <div className="hidden sm:block absolute -top-3 -right-3 w-16 h-16 bg-[#DDF3EB] rounded-2xl -z-10 transform rotate-3" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
