import React, { useState } from 'react';
import { 
  Shield, 
  Sparkles, 
  Layers, 
  Smile, 
  Wand2, 
  Activity, 
  ArrowUpRight, 
  Clock, 
  Calendar 
} from 'lucide-react';
import { SERVICES } from '../data/clinicData';
import { ServiceDetail } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: ServiceDetail) => void;
  onBookService: (serviceId?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onBookService,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Preventative' | 'Cosmetic' | 'Restorative' | 'Orthodontic' | 'Urgent'>('All');

  const filteredServices = selectedFilter === 'All'
    ? SERVICES
    : SERVICES.filter((s) => s.careType === selectedFilter);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'general-dentistry':
        return <Shield className="w-5 h-5 text-[#123C42]" />;
      case 'teeth-whitening':
        return <Sparkles className="w-5 h-5 text-[#123C42]" />;
      case 'dental-implants':
        return <Layers className="w-5 h-5 text-[#123C42]" />;
      case 'orthodontics-aligners':
        return <Smile className="w-5 h-5 text-[#123C42]" />;
      case 'veneers-smile-design':
        return <Wand2 className="w-5 h-5 text-[#123C42]" />;
      case 'emergency-care':
        return <Activity className="w-5 h-5 text-[#123C42]" />;
      default:
        return <Shield className="w-5 h-5 text-[#123C42]" />;
    }
  };

  return (
    <section id="services" className="py-16 lg:py-24 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#123C42] mb-3">
              <span className="w-2 h-0.5 bg-[#D6B477]" />
              <span>Comprehensive Studio Services</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#123C42]">
              Modern Dentistry, Tailored to You.
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              From routine preventive hygiene cleanings to comprehensive smile rehabilitation, every treatment is guided by gentle techniques, conservative preservation, and transparent pricing.
            </p>
          </div>

          {/* Functional Filter Tabs (Buttons with click handlers per constitution) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#FAF9F6] border border-slate-200 rounded-xl">
            {(['All', 'Preventative', 'Cosmetic', 'Restorative', 'Orthodontic', 'Urgent'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#123C42] ${
                  selectedFilter === filter
                    ? 'bg-[#123C42] text-white shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-[#123C42] hover:bg-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* 6 Attractive Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className="group relative flex flex-col justify-between bg-[#FAF9F6] hover:bg-white rounded-2xl p-7 border border-slate-200/80 hover:border-[#123C42]/30 transition-all duration-200 hover:shadow-md"
            >
              <div>
                {/* Header row: Icon & Care Type unboxed metadata */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-[#DDF3EB] flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
                    {getServiceIcon(service.id)}
                  </div>
                  <div className="text-[11px] font-medium text-slate-500 flex items-center gap-1.5">
                    <span>{service.careType}</span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {service.durationEstimate.split(';')[0]}
                    </span>
                  </div>
                </div>

                {/* Service Title & Tagline */}
                <h3 className="font-display text-xl font-bold text-[#123C42] group-hover:text-[#0E2C31] transition-colors">
                  {service.name}
                </h3>
                <p className="text-xs font-medium text-[#D6B477] mt-1 mb-3">
                  {service.tagline}
                </p>

                {/* Concise Description */}
                <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {service.shortDescription}
                </p>

                {/* Common Highlights List */}
                <div className="mt-4 pt-4 border-t border-slate-200/60 space-y-1.5">
                  {service.commonReasons.slice(0, 2).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D6B477] mt-1.5 shrink-0" />
                      <span className="line-clamp-1">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons: Detail trigger + Quick book */}
              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between gap-3">
                <button
                  onClick={() => onSelectService(service)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#123C42] hover:text-[#0E2C31] group-hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#123C42] rounded py-1"
                >
                  <span>View Details &amp; Guide</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#123C42] transition-colors" />
                </button>

                <button
                  onClick={() => onBookService(service.id)}
                  className="inline-flex items-center gap-1 text-xs font-medium text-slate-600 hover:text-[#123C42] bg-white hover:bg-[#DDF3EB]/50 border border-slate-200 rounded-lg px-2.5 py-1.5 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#123C42]"
                  title={`Schedule consultation for ${service.name}`}
                >
                  <Calendar className="w-3 h-3 text-[#123C42]" />
                  <span>Request</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Informative Sub-banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#FAF9F6] border border-slate-200/80 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-display text-base font-bold text-[#123C42]">
              Unsure which care fits your oral health goals?
            </h4>
            <p className="text-xs text-slate-600">
              Schedule a comprehensive diagnostic consultation. We evaluate your teeth and gums with non-invasive digital scans and review all suitable options side-by-side.
            </p>
          </div>
          <button
            onClick={() => onBookService()}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#123C42] hover:bg-[#0E2C31] rounded-xl transition-colors whitespace-nowrap shadow-xs shrink-0"
          >
            <Calendar className="w-3.5 h-3.5 text-[#D6B477]" />
            <span>Schedule Initial Consultation</span>
          </button>
        </div>

      </div>
    </section>
  );
};
