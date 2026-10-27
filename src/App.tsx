/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { DemoNoticeBanner } from './components/DemoNoticeBanner';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { WhyChooseUs } from './components/WhyChooseUs';
import { DentistsSection } from './components/DentistsSection';
import { PatientExperience } from './components/PatientExperience';
import { TestimonialsSection } from './components/TestimonialsSection';
import { AboutSection } from './components/AboutSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { AppointmentModal } from './components/AppointmentModal';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { ServiceDetail } from './types';
import { Calendar, Phone, Sparkles } from 'lucide-react';
import { CLINIC_CONTACT } from './data/clinicData';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [preselectedServiceId, setPreselectedServiceId] = useState<string | undefined>();
  const [preselectedDentistId, setPreselectedDentistId] = useState<string | undefined>();
  const [selectedServiceDetail, setSelectedServiceDetail] = useState<ServiceDetail | null>(null);

  // Smooth navigation handler
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Open booking modal with pre-selections
  const handleOpenBooking = (serviceId?: string, dentistId?: string) => {
    setPreselectedServiceId(serviceId);
    setPreselectedDentistId(dentistId);
    setBookingModalOpen(true);
  };

  // Scroll spy to highlight active section in navbar
  useEffect(() => {
    const sections = ['home', 'services', 'dentists', 'about', 'contact'];
    const handleScrollSpy = () => {
      const scrollY = window.scrollY;
      const headerOffset = 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.offsetTop - headerOffset;
          if (scrollY >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-slate-800 antialiased selection:bg-[#DDF3EB] selection:text-[#123C42]">
      {/* Top Portfolio Notice */}
      <DemoNoticeBanner />

      {/* Main Sticky Navbar (Top Bar Contract: 3 zones, single-line links, primary CTA) */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onExploreServices={() => handleNavigate('services')}
        />

        {/* 6 Services Overview Cards & Categorized Filters */}
        <ServicesSection
          onSelectService={(service) => setSelectedServiceDetail(service)}
          onBookService={(serviceId) => handleOpenBooking(serviceId)}
        />

        {/* Why Choose Us & Clinical Operatory Visual */}
        <WhyChooseUs />

        {/* Meet the Dentists Profiles */}
        <DentistsSection
          onBookWithDentist={(dentistId) => handleOpenBooking(undefined, dentistId)}
        />

        {/* Patient Experience 3-Step Journey & Consultation Preview */}
        <PatientExperience onOpenBooking={() => handleOpenBooking()} />

        {/* About Studio Philosophy & Technology */}
        <AboutSection onOpenBooking={() => handleOpenBooking()} />

        {/* Sample Patient Testimonials (Transparent Demo) */}
        <TestimonialsSection />

        {/* High-Converting Final CTA Section */}
        <section className="py-16 lg:py-20 bg-[#123C42] text-white relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#D6B477]">
              Start Your Oral Wellness Journey
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white" style={{ textWrap: 'balance' }}>
              Your Healthier, More Confident Smile Begins Here.
            </h2>
            <p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Book a comfortable comprehensive examination, discuss clear aligners, or refresh your smile with personalized cosmetic care. Our studio team looks forward to welcoming you.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={() => handleOpenBooking()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-[#123C42] bg-[#FAF9F6] hover:bg-white rounded-xl transition-all shadow-md hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6B477]"
              >
                <Calendar className="w-4 h-4 text-[#123C42]" />
                <span>Request an Appointment</span>
              </button>
              <a
                href={CLINIC_CONTACT.phoneTel}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white hover:text-[#DDF3EB] bg-[#1A525A]/60 hover:bg-[#1A525A] border border-white/10 rounded-xl transition-colors"
              >
                <Phone className="w-4 h-4 text-[#D6B477]" />
                <span>Call Studio: {CLINIC_CONTACT.phone}</span>
              </a>
            </div>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D6B477]" />
                Transparent itemized estimates
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D6B477]" />
                Same-day emergency support
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D6B477]" />
                Gentle, unhurried appointments
              </span>
            </div>
          </div>

          {/* Subtle architectural background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#1A525A]/40 rounded-full blur-3xl pointer-events-none" />
        </section>

        {/* Practical FAQs Accordion */}
        <FaqSection />

        {/* Contact & Location Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={(serviceId) => handleOpenBooking(serviceId)}
      />

      {/* Floating Scroll to Top */}
      <ScrollToTop />

      {/* In-Depth Service Detail Modal */}
      <ServiceDetailModal
        service={selectedServiceDetail}
        onClose={() => setSelectedServiceDetail(null)}
        onBookService={(serviceId) => {
          setSelectedServiceDetail(null);
          handleOpenBooking(serviceId);
        }}
      />

      {/* Validated Appointment Booking Request Modal */}
      <AppointmentModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        preselectedServiceId={preselectedServiceId}
        preselectedDentistId={preselectedDentistId}
      />
    </div>
  );
}
