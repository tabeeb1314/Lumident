import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Phone } from 'lucide-react';
import { CLINIC_CONTACT } from '../data/clinicData';

interface NavbarProps {
  onOpenBooking: (serviceId?: string, dentistId?: string) => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, activeSection, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'dentists', label: 'Our Dentists' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-[#FAF9F6]/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs'
          : 'bg-[#FAF9F6] border-b border-slate-200/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          {/* Zone 1: Single text element brand wordmark */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
            className="flex items-center gap-3 whitespace-nowrap shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#123C42] rounded-lg p-1 -ml-1"
          >
            <div className="w-9 h-9 rounded-lg bg-[#123C42] flex items-center justify-center text-[#D6B477] transition-transform duration-200 group-hover:scale-105">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 3C8.5 3 6.5 5.5 6.5 9.5C6.5 13.5 8 18 10 20.5C11 21.8 11.8 21.5 12 19C12.2 21.5 13 21.8 14 20.5C16 18 17.5 13.5 17.5 9.5C17.5 5.5 15.5 3 12 3Z"
                  fill="currentColor"
                  stroke="#FAF9F6"
                  strokeWidth="1.2"
                />
              </svg>
            </div>
            <span className="font-display text-xl font-bold tracking-tight text-[#123C42]">
              Lumident <span className="font-medium text-slate-600">Studio</span>
            </span>
          </a>

          {/* Zone 2: 4-5 clean single-line navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`whitespace-nowrap shrink-0 transition-colors py-1 relative focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#123C42] rounded ${
                    isActive
                      ? 'text-[#123C42] font-semibold'
                      : 'text-slate-600 hover:text-[#123C42]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#123C42] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <a
              href={CLINIC_CONTACT.phoneTel}
              className="hidden lg:flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-[#123C42] transition-colors py-2 px-2"
              title="Call studio concierge"
            >
              <Phone className="w-3.5 h-3.5 text-[#123C42]" />
              <span>{CLINIC_CONTACT.phone}</span>
            </a>
            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[#123C42] hover:bg-[#0E2C31] active:bg-[#0A2226] rounded-lg transition-all duration-150 whitespace-nowrap shrink-0 shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#123C42] focus-visible:ring-offset-2"
            >
              <Calendar className="w-4 h-4 text-[#D6B477]" />
              <span>Book an Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => onOpenBooking()}
              className="sm:hidden px-3 py-1.5 text-xs font-medium text-white bg-[#123C42] rounded-md"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#123C42] rounded-lg hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#123C42]"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 shadow-lg animate-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-[#DDF3EB]/60 text-[#123C42] font-semibold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-3 mt-2 border-t border-slate-100 flex flex-col gap-3">
              <a
                href={CLINIC_CONTACT.phoneTel}
                className="flex items-center gap-2 px-3 py-2 text-sm text-slate-600 hover:text-[#123C42]"
              >
                <Phone className="w-4 h-4 text-[#123C42]" />
                <span>Call Concierge: {CLINIC_CONTACT.phone}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-white bg-[#123C42] rounded-lg shadow-xs"
              >
                <Calendar className="w-4 h-4 text-[#D6B477]" />
                <span>Book an Appointment</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
