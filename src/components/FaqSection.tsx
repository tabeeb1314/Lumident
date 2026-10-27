import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircleQuestion } from 'lucide-react';
import { FAQS } from '../data/clinicData';

export const FaqSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1']);
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'First Visit' | 'Appointments' | 'Financing' | 'Emergency'>('All');

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const categories = ['All', 'First Visit', 'Appointments', 'Financing', 'Emergency'] as const;

  const filteredFaqs = selectedCategory === 'All'
    ? FAQS
    : FAQS.filter((f) => f.category === selectedCategory);

  return (
    <section className="py-16 lg:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#123C42] mb-3">
            <span className="w-2 h-0.5 bg-[#D6B477]" />
            <span>Got Questions?</span>
            <span className="w-2 h-0.5 bg-[#D6B477]" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#123C42]">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Answers to common questions about preparing for your visit, billing, and scheduling.
          </p>
        </div>

        {/* Category Filter Pills (Functional Buttons per Constitution) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#123C42] ${
                selectedCategory === cat
                  ? 'bg-[#123C42] text-white shadow-2xs font-semibold'
                  : 'bg-[#FAF9F6] text-slate-600 hover:text-[#123C42] hover:bg-slate-100 border border-slate-200/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className="rounded-xl border border-slate-200/90 bg-[#FAF9F6] overflow-hidden transition-all duration-150"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#123C42] group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold text-slate-400 group-hover:text-[#123C42] transition-colors">
                      [{faq.category}]
                    </span>
                    <span className="text-sm font-semibold text-slate-800 group-hover:text-[#123C42] transition-colors">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180 text-[#123C42]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    role="region"
                    className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/50"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-xs text-slate-400">
          Have an individual clinical question? Our dentists discuss all specific diagnosis during in-person examinations.
        </p>

      </div>
    </section>
  );
};
