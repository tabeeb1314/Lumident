import React from 'react';
import { X, Calendar, CheckCircle2, AlertCircle, Clock, ChevronRight } from 'lucide-react';
import { ServiceDetail } from '../types';

interface ServiceDetailModalProps {
  service: ServiceDetail | null;
  onClose: () => void;
  onBookService: (serviceId: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookService,
}) => {
  if (!service) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
    >
      <div
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-5 bg-[#FAF9F6] border-b border-slate-200 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#123C42] uppercase tracking-wider mb-1">
              <span>{service.careType} Dentistry</span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1 text-slate-500 font-normal">
                <Clock className="w-3.5 h-3.5" />
                {service.durationEstimate}
              </span>
            </div>
            <h2 id="service-modal-title" className="font-display text-2xl font-bold text-[#123C42]">
              {service.name}
            </h2>
            <p className="text-sm text-slate-600 mt-1">{service.tagline}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#123C42]"
            aria-label="Close service details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-700 text-sm">
          {/* Overview */}
          <div className="space-y-2">
            <h3 className="font-semibold text-slate-900 text-base">Service Overview</h3>
            <p className="text-slate-600 leading-relaxed">{service.fullOverview}</p>
          </div>

          {/* Common Reasons */}
          <div className="space-y-3 bg-[#FAF9F6] p-4 rounded-xl border border-slate-200/70">
            <h3 className="font-semibold text-slate-900 text-sm">When to Consider This Care</h3>
            <ul className="space-y-2">
              {service.commonReasons.map((reason, index) => (
                <li key={index} className="flex items-start gap-2.5 text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#123C42] mt-2 shrink-0" />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What a Consultation Involves */}
          <div className="space-y-3">
            <h3 className="font-semibold text-slate-900 text-sm">What Your Visit Involves</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.consultationSteps.map((step, idx) => (
                <div key={idx} className="p-3 rounded-lg border border-slate-200/90 bg-white">
                  <span className="text-xs font-bold text-[#D6B477] font-display">Step 0{idx + 1}</span>
                  <p className="text-xs text-slate-700 mt-1 leading-snug">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits & Considerations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#DDF3EB]/30 border border-[#DDF3EB]">
              <div className="flex items-center gap-1.5 font-semibold text-[#123C42] mb-2 text-xs">
                <CheckCircle2 className="w-4 h-4 text-[#123C42]" />
                <span>Primary Clinical Benefits</span>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {service.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#123C42] font-bold">✓</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-1.5 font-semibold text-slate-800 mb-2 text-xs">
                <AlertCircle className="w-4 h-4 text-slate-600" />
                <span>Important Considerations</span>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-600">
                {service.considerations.map((c, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-slate-400">·</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* FAQs for this Service */}
          {service.faqs && service.faqs.length > 0 && (
            <div className="space-y-3 pt-2">
              <h3 className="font-semibold text-slate-900 text-sm">Frequently Asked Questions</h3>
              <div className="space-y-2.5">
                {service.faqs.map((faq, i) => (
                  <div key={i} className="p-3.5 rounded-lg border border-slate-200/80 bg-slate-50/50">
                    <h4 className="font-medium text-slate-900 text-xs mb-1">{faq.question}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Informative Disclaimer */}
          <p className="text-[11px] text-slate-400 italic">
            Note: Clinical outcomes vary by individual physiology. Information provided is for educational consultation overview and does not constitute a guaranteed prognosis or definitive medical prescription.
          </p>
        </div>

        {/* Modal Footer / Contextual CTA */}
        <div className="px-6 py-4 bg-[#FAF9F6] border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-slate-500">
            Consultation time: <strong className="text-slate-700 font-medium">{service.durationEstimate}</strong>
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-200/50 transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onBookService(service.id);
              }}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#123C42] hover:bg-[#0E2C31] rounded-lg transition-colors shadow-xs w-full sm:w-auto"
            >
              <Calendar className="w-3.5 h-3.5 text-[#D6B477]" />
              <span>Request Appointment for {service.name}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
