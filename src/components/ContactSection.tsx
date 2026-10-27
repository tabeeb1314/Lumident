import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Navigation, 
  Car, 
  Train, 
  Loader2 
} from 'lucide-react';
import { CLINIC_CONTACT } from '../data/clinicData';

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/tabeebwasit99@gmail.com';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: 'General Question',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validate = (): boolean => {
    const errs: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.name.trim()) {
      errs.name = 'Please enter your name.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email format.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide a brief message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError('');
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `[Lumident Contact] ${formData.subject}`,
          _replyto: formData.email.trim(),
          _template: 'table',
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject,
          message: formData.message.trim(),
          form_type: 'Contact message',
          _honey: '',
        }),
      });
      const result = await response.json();
      if (!response.ok || String(result.success) !== 'true') {
        throw new Error(result.message || 'The message could not be sent. Please try again.');
      }
      setIsSubmitted(true);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-[#FAF9F6] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#123C42] mb-3">
            <span className="w-2 h-0.5 bg-[#D6B477]" />
            <span>Studio Location &amp; Inquiries</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#123C42]">
            Contact Our Care Team
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Whether you have questions regarding treatment plans, dental insurance coverage, or directions to our studio, our team is pleased to assist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Contact Cards & Hours (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address & Direct Phone */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs space-y-5">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#DDF3EB] flex items-center justify-center shrink-0 text-[#123C42]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-display font-bold text-slate-900 text-sm">Studio Location</h3>
                    <span className="text-[10px] text-slate-400 font-medium">Demo Address</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    {CLINIC_CONTACT.address}<br />
                    {CLINIC_CONTACT.cityStateZip}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#DDF3EB] flex items-center justify-center shrink-0 text-[#123C42]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-slate-900 text-sm">Direct Telephone</h3>
                  <a
                    href={CLINIC_CONTACT.phoneTel}
                    className="text-xs font-semibold text-[#123C42] hover:underline mt-1 block"
                  >
                    {CLINIC_CONTACT.phone}
                  </a>
                  <p className="text-[11px] text-slate-400">Reception desk during studio hours</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#DDF3EB] flex items-center justify-center shrink-0 text-[#123C42]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-slate-900 text-sm">Email Inquiries</h3>
                  <a
                    href={`mailto:${CLINIC_CONTACT.email}`}
                    className="text-xs font-semibold text-[#123C42] hover:underline mt-1 block"
                  >
                    {CLINIC_CONTACT.email}
                  </a>
                  <p className="text-[11px] text-slate-400">Response within 1 business day</p>
                </div>
              </div>
            </div>

            {/* Studio Hours */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs space-y-4">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#123C42]" />
                <h3 className="font-display font-bold text-slate-900 text-sm">Studio Hours</h3>
              </div>
              
              <div className="space-y-2 text-xs divide-y divide-slate-100">
                {CLINIC_CONTACT.hours.map((schedule, i) => (
                  <div key={i} className={`flex items-center justify-between pt-2 ${i === 0 ? 'pt-0' : ''}`}>
                    <span className="text-slate-600 font-medium">{schedule.days}</span>
                    <span className="text-slate-800 font-semibold">{schedule.time}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-[11px] text-slate-500 bg-[#FAF9F6] p-3 rounded-xl border border-slate-200/60 flex items-start gap-2">
                <AlertCircle className="w-3.5 h-3.5 text-[#D6B477] shrink-0 mt-0.5" />
                <span>
                  Emergency On-Call: Urgent triage support available 7 days a week for severe acute pain or dental trauma at {CLINIC_CONTACT.emergencyPhone}.
                </span>
              </div>
            </div>

            {/* Transit & Parking Details */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs space-y-3">
              <h3 className="font-display font-bold text-slate-900 text-sm">Getting Here</h3>
              <div className="space-y-2 text-xs text-slate-600">
                <div className="flex items-start gap-2">
                  <Car className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span>Validated parking garage located underneath building (enter via Orchard Blvd).</span>
                </div>
                <div className="flex items-start gap-2">
                  <Train className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span>3-minute walk from 4th &amp; King / Caltrain &amp; Muni T-Line stops.</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive General Contact Form + Location Map Visual (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Contact Form Card */}
            <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-2xs">
              <h3 className="font-display font-bold text-lg text-[#123C42] mb-1">
                Send an Inquiry
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Have a question regarding insurance, records transfer, or new patient registration? Send us a note.
              </p>

              {isSubmitted ? (
                <div className="p-6 rounded-xl bg-[#DDF3EB]/40 border border-[#DDF3EB] text-[#123C42] space-y-3 text-center sm:text-left">
                  <div className="flex items-center gap-2 justify-center sm:justify-start">
                    <CheckCircle2 className="w-5 h-5 text-[#123C42]" />
                    <h4 className="font-display font-bold text-base text-[#123C42]">
                      Message Sent
                    </h4>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. Your message has been submitted to the Lumident inbox. We’ll be able to reply to {formData.email}.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setSubmitError('');
                      setFormData({ name: '', email: '', subject: 'General Question', message: '' });
                    }}
                    className="mt-2 px-4 py-2 text-xs font-semibold text-white bg-[#123C42] rounded-lg hover:bg-[#0E2C31] transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contactName" className="block text-xs font-medium text-slate-700 mb-1">
                        Your Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="contactName"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: undefined });
                        }}
                        placeholder="Dr. / Mr. / Ms. ..."
                        className={`w-full px-3 py-2.5 text-sm bg-white border rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#123C42] ${
                          errors.name ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                        }`}
                      />
                      {errors.name && <p className="text-[11px] text-rose-500 mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="contactEmail" className="block text-xs font-medium text-slate-700 mb-1">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="contactEmail"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        placeholder="you@example.com"
                        className={`w-full px-3 py-2.5 text-sm bg-white border rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#123C42] ${
                          errors.email ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                        }`}
                      />
                      {errors.email && <p className="text-[11px] text-rose-500 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contactSubject" className="block text-xs font-medium text-slate-700 mb-1">
                      Subject
                    </label>
                    <select
                      id="contactSubject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3 py-2.5 text-sm bg-white border border-slate-300 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#123C42]"
                    >
                      <option value="General Question">General Question</option>
                      <option value="Insurance Coverage">Dental Insurance &amp; Billing</option>
                      <option value="Records Transfer">Transferring Existing Dental Records</option>
                      <option value="Accessibility">Accessibility Accommodations</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contactMessage" className="block text-xs font-medium text-slate-700 mb-1">
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="contactMessage"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      placeholder="How can our studio team assist you?"
                      className={`w-full px-3 py-2.5 text-sm bg-white border rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#123C42] ${
                        errors.message ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                      }`}
                    />
                    {errors.message && <p className="text-[11px] text-rose-500 mt-1">{errors.message}</p>}
                  </div>

                  {submitError && <p role="alert" className="text-xs text-rose-600 bg-rose-50 border border-rose-200 rounded-lg p-3">{submitError} If this is the first submission, the inbox owner may need to activate the form from the confirmation email.</p>}
                  <div className="flex items-center justify-between pt-2">
                    <p className="text-[11px] text-slate-400">
                      Your message will be emailed securely via our form service.
                    </p>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#123C42] hover:bg-[#0E2C31] active:bg-[#0A2226] rounded-xl transition-all shadow-xs disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-3.5 h-3.5 animate-spin text-[#D6B477]" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5 text-[#D6B477]" />
                          <span>Submit Message</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Fictional Studio Location Map Representation */}
            <div className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-2xs">
              <div className="p-4 bg-[#FAF9F6] border-b border-slate-200/80 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#123C42]">
                  <Navigation className="w-3.5 h-3.5 text-[#D6B477]" />
                  <span>Neighborhood Map Preview (Illustrative)</span>
                </div>
                <span className="text-[10px] text-slate-500 font-medium">South of Market / Mission Bay</span>
              </div>
              
              <div className="relative h-48 bg-slate-100 flex items-center justify-center overflow-hidden">
                {/* Clean stylized SVG map graphic */}
                <svg className="w-full h-full opacity-60" viewBox="0 0 600 200" preserveAspectRatio="none">
                  {/* Grid blocks */}
                  <rect x="20" y="20" width="100" height="70" fill="#E2E8F0" rx="4" />
                  <rect x="140" y="20" width="160" height="70" fill="#E2E8F0" rx="4" />
                  <rect x="320" y="20" width="120" height="70" fill="#E2E8F0" rx="4" />
                  <rect x="460" y="20" width="120" height="70" fill="#E2E8F0" rx="4" />

                  <rect x="20" y="110" width="140" height="70" fill="#E2E8F0" rx="4" />
                  <rect x="180" y="110" width="120" height="70" fill="#DDF3EB" rx="4" />
                  <rect x="320" y="110" width="160" height="70" fill="#E2E8F0" rx="4" />
                  <rect x="500" y="110" width="80" height="70" fill="#E2E8F0" rx="4" />

                  {/* Street avenues */}
                  <line x1="0" y1="100" x2="600" y2="100" stroke="#CBD5E1" strokeWidth="10" />
                  <line x1="170" y1="0" x2="170" y2="200" stroke="#CBD5E1" strokeWidth="8" />
                  <line x1="310" y1="0" x2="310" y2="200" stroke="#CBD5E1" strokeWidth="8" />
                  <line x1="450" y1="0" x2="450" y2="200" stroke="#CBD5E1" strokeWidth="8" />
                </svg>

                {/* Studio Location Pin Marker */}
                <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="px-2.5 py-1 bg-[#123C42] text-white text-[11px] font-bold rounded-md shadow-md mb-1 whitespace-nowrap flex items-center gap-1.5 border border-[#D6B477]/40">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D6B477]" />
                    <span>Lumident Studio (Suite 300)</span>
                  </div>
                  <div className="w-3.5 h-3.5 bg-[#123C42] rounded-full border-2 border-white shadow-md" />
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
