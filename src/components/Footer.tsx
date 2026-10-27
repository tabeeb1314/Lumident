import React from 'react';
import { CLINIC_CONTACT, SERVICES } from '../data/clinicData';
import { Phone, Mail, MapPin, Calendar, Clock, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenBooking: (serviceId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <footer className="bg-[#123C42] text-white pt-16 pb-12 border-t border-[#1A525A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#1A525A]">
          
          {/* Brand & Mission (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#FAF9F6] flex items-center justify-center text-[#123C42]">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 3C8.5 3 6.5 5.5 6.5 9.5C6.5 13.5 8 18 10 20.5C11 21.8 11.8 21.5 12 19C12.2 21.5 13 21.8 14 20.5C16 18 17.5 13.5 17.5 9.5C17.5 5.5 15.5 3 12 3Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <span className="font-display text-xl font-bold tracking-tight text-white">
                Lumident <span className="text-slate-300 font-medium">Studio</span>
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              A Healthier Smile. A More Confident You. Providing compassionate, conservative dentistry and advanced digital cosmetic care in a serene clinical setting.
            </p>

            <div className="pt-2">
              <button
                onClick={() => onOpenBooking()}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#123C42] bg-[#DDF3EB] hover:bg-[#cbebe0] rounded-lg transition-colors shadow-xs"
              >
                <Calendar className="w-3.5 h-3.5 text-[#123C42]" />
                <span>Book an Appointment</span>
              </button>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display text-xs font-semibold uppercase tracking-wider text-[#D6B477]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors"
                >
                  Dental Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('dentists')}
                  className="hover:text-white transition-colors"
                >
                  Our Dentists
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors"
                >
                  About Studio
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors"
                >
                  Contact &amp; Location
                </button>
              </li>
            </ul>
          </div>

          {/* Services Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display text-xs font-semibold uppercase tracking-wider text-[#D6B477]">
              Clinical Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => {
                      onNavigate('services');
                    }}
                    className="hover:text-white transition-colors text-left"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details & Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display text-xs font-semibold uppercase tracking-wider text-[#D6B477]">
              Studio Information
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D6B477] shrink-0 mt-0.5" />
                <span>
                  {CLINIC_CONTACT.address}, {CLINIC_CONTACT.cityStateZip}
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D6B477] shrink-0" />
                <a href={CLINIC_CONTACT.phoneTel} className="hover:text-white">
                  {CLINIC_CONTACT.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#D6B477] shrink-0" />
                <a href={`mailto:${CLINIC_CONTACT.email}`} className="hover:text-white">
                  {CLINIC_CONTACT.email}
                </a>
              </p>
              <div className="pt-2 text-[11px] text-slate-400">
                <p className="font-medium text-slate-300">Studio Hours:</p>
                <p>Mon – Thu: 8:00 AM – 6:00 PM</p>
                <p>Fri: 8:00 AM – 4:00 PM · Sat: By Appt</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Portfolio Disclosure */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>
            © {new Date().getFullYear()} Lumident Dental Studio. All rights reserved. Fictional portfolio project.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-slate-400">
            <span>Portfolio Demo Only</span>
            <span aria-hidden="true">·</span>
            <span>No Medical Advice Intended</span>
            <span aria-hidden="true">·</span>
            <span>WCAG 2.1 AA Compliant Design</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
