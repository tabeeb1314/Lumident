import React from 'react';
import { Sparkles, Calendar, ShieldCheck, HeartHandshake, Eye, CheckCircle2 } from 'lucide-react';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-[#FAF9F6] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#123C42] mb-3">
            <span className="w-2 h-0.5 bg-[#D6B477]" />
            <span>Our Philosophy &amp; Practice</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#123C42]" style={{ textWrap: 'balance' }}>
            A Modern Dental Studio Rooted in Calm, Thoughtful Care.
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Lumident Dental Studio was conceived around a simple insight: healthcare should feel reassuring, transparent, and respectful of your autonomy. We replace sterile clinical stress with warm design, unhurried consultations, and proactive preservation of your natural enamel.
          </p>
        </div>

        {/* 3 Philosophy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#DDF3EB] flex items-center justify-center">
              <HeartHandshake className="w-5 h-5 text-[#123C42]" />
            </div>
            <h3 className="font-display text-lg font-bold text-[#123C42]">
              Patient-Centered Autonomy
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We never perform a procedure without walking you through the why, the how, and the alternatives. You are always in control of your treatment pace and decisions.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#DDF3EB] flex items-center justify-center">
              <Eye className="w-5 h-5 text-[#123C42]" />
            </div>
            <h3 className="font-display text-lg font-bold text-[#123C42]">
              Biomimetic &amp; Conservative
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Our clinical protocol seeks to preserve as much natural tooth structure and vitality as biology permits, avoiding over-aggressive preparations.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#DDF3EB] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-[#123C42]" />
            </div>
            <h3 className="font-display text-lg font-bold text-[#123C42]">
              Hospital-Grade Hygiene Standards
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Equipped with medical-grade HEPA filtration, class-B steam autoclaves, continuous water line purification, and sterile single-use barriers for your safety.
            </p>
          </div>
        </div>

        {/* Studio Equipment & Space Highlights */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-8 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold text-[#D6B477] uppercase tracking-wider">
                Technology for Comfort
              </span>
              <h3 className="font-display text-2xl font-bold text-[#123C42]">
                Advanced Equipment That Serves Patient Comfort
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We invest in modern dental technology specifically to make your visit faster, more comfortable, and non-invasive.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#123C42] shrink-0" />
                  <span>Ultra-low dose digital panoramic imaging</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#123C42] shrink-0" />
                  <span>Intraoral 3D color video scanning</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#123C42] shrink-0" />
                  <span>Ergonomic memory-foam patient chairs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#123C42] shrink-0" />
                  <span>Quiet electric handpieces (no high-pitch whine)</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center text-center p-6 bg-[#FAF9F6] rounded-xl border border-slate-200/70">
              <p className="text-xs text-slate-500 font-medium">Have questions or dental anxiety?</p>
              <h4 className="font-display text-base font-bold text-[#123C42] mt-1 mb-3">
                Talk with our friendly care concierge
              </h4>
              <button
                onClick={onOpenBooking}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#123C42] hover:bg-[#0E2C31] rounded-lg transition-colors shadow-xs"
              >
                <Calendar className="w-3.5 h-3.5 text-[#D6B477]" />
                <span>Request Your First Visit</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
