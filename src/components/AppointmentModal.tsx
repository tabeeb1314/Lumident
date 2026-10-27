import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, User, Mail, Phone, Stethoscope, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { SERVICES, DENTISTS } from '../data/clinicData';
import { AppointmentFormData } from '../types';

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/tabeebwasit99@gmail.com';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string;
  preselectedDentistId?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  preselectedServiceId,
  preselectedDentistId,
}) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    email: '',
    phone: '',
    serviceId: preselectedServiceId || 'general-dentistry',
    dentistId: preselectedDentistId || 'any',
    preferredDate: '',
    preferredTime: 'morning',
    isFirstVisit: true,
    notes: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof AppointmentFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<AppointmentFormData | null>(null);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    if (preselectedServiceId) {
      setFormData((prev) => ({ ...prev, serviceId: preselectedServiceId }));
    }
    if (preselectedDentistId) {
      setFormData((prev) => ({ ...prev, dentistId: preselectedDentistId }));
    }
  }, [preselectedServiceId, preselectedDentistId, isOpen]);

  // Set minimum date to tomorrow
  const getMinDate = () => {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    return today.toISOString().split('T')[0];
  };

  if (!isOpen) return null;

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof AppointmentFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide an email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (formData.phone.trim() && !/^[0-9+()\-.\s]{7,20}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number (or leave blank).';
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select a preferred date.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError('');
    const serviceName = SERVICES.find((service) => service.id === formData.serviceId)?.name || formData.serviceId;
    const dentistName = DENTISTS.find((dentist) => dentist.id === formData.dentistId)?.name || 'First Available Clinician';
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `[Lumident Appointment Request] ${formData.fullName.trim()} — ${formData.preferredDate}`,
          _replyto: formData.email.trim(),
          _template: 'table',
          form_type: 'Appointment request (not yet confirmed)',
          full_name: formData.fullName.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim() || 'Not provided',
          requested_service: serviceName,
          dentist_preference: dentistName,
          preferred_date: formData.preferredDate,
          preferred_time_window: formData.preferredTime,
          first_visit: formData.isFirstVisit ? 'Yes' : 'No',
          notes: formData.notes.trim() || 'None',
          _honey: '',
        }),
      });
      const result = await response.json();
      if (!response.ok || String(result.success) !== 'true') {
        throw new Error(result.message || 'The appointment request could not be sent. Please try again.');
      }
      setSubmittedData({ ...formData });
      setIsSubmitted(true);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSubmittedData(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      serviceId: 'general-dentistry',
      dentistId: 'any',
      preferredDate: '',
      preferredTime: 'morning',
      isFirstVisit: true,
      notes: '',
    });
    setErrors({});
    onClose();
  };

  const selectedService = SERVICES.find((s) => s.id === (submittedData?.serviceId || formData.serviceId));
  const selectedDentist = DENTISTS.find((d) => d.id === (submittedData?.dentistId || formData.dentistId));

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-6 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 bg-[#FAF9F6] border-b border-slate-200 flex items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#123C42] uppercase tracking-wider mb-1">
              <span className="w-2 h-0.5 bg-[#D6B477]" />
              <span>Direct Studio Request</span>
            </div>
            <h2 id="booking-modal-title" className="font-display text-2xl font-bold text-[#123C42]">
              {isSubmitted ? 'Request Submitted' : 'Request an Appointment'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#123C42]"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto">
          {isSubmitted && submittedData ? (
            /* Submission Confirmation State (Honest & Informative per brief) */
            <div className="space-y-6">
              <div className="p-5 rounded-2xl bg-[#DDF3EB]/40 border border-[#DDF3EB] text-[#123C42] flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-[#123C42] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h3 className="font-display font-bold text-lg text-[#123C42]">
                    Appointment Request Sent
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Thank you, <strong className="font-semibold">{submittedData.fullName}</strong>. Your request has been emailed to the studio. This is a request only; the appointment is not booked until the clinic confirms it.
                  </p>
                </div>
              </div>

              {/* Submitted Details Summary Card */}
              <div className="p-5 rounded-xl bg-[#FAF9F6] border border-slate-200 space-y-3">
                <h4 className="font-semibold text-xs uppercase tracking-wider text-slate-500">
                  Request Parameters
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-slate-400">Selected Service:</span>
                    <p className="font-medium text-slate-800">{selectedService?.name || 'General Care'}</p>
                  </div>
                  <div>
                    <span className="text-slate-400">Dentist Preference:</span>
                    <p className="font-medium text-slate-800">
                      {selectedDentist ? selectedDentist.name : 'First Available Doctor'}
                    </p>
                  </div>
                  <div>
                    <span className="text-slate-400">Preferred Date:</span>
                    <p className="font-medium text-slate-800">{submittedData.preferredDate}</p>
                  </div>
                  <div>
                    <span className="text-slate-400">Time Window:</span>
                    <p className="font-medium text-slate-800 capitalize">{submittedData.preferredTime} Slot</p>
                  </div>
                  <div>
                    <span className="text-slate-400">Contact Email:</span>
                    <p className="font-medium text-slate-800">{submittedData.email}</p>
                  </div>
                  <div>
                    <span className="text-slate-400">Phone:</span>
                    <p className="font-medium text-slate-800">{submittedData.phone || 'Not provided'}</p>
                  </div>
                </div>

                {submittedData.notes && (
                  <div className="pt-2 border-t border-slate-200/60 text-xs">
                    <span className="text-slate-400">Patient Notes:</span>
                    <p className="text-slate-700 italic mt-0.5">"{submittedData.notes}"</p>
                  </div>
                )}
              </div>

              {/* Request status note */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-2">
                <div className="flex items-center gap-2 font-semibold text-slate-800">
                  <AlertCircle className="w-4 h-4 text-slate-600" />
                  <span>What happens next?</span>
                </div>
                <p className="leading-relaxed">
                  The studio will review your preferred date and time and contact you at {submittedData.email}. No appointment is confirmed automatically by this form.
                </p>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 text-xs font-semibold text-white bg-[#123C42] hover:bg-[#0E2C31] rounded-xl transition-colors shadow-xs"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleSubmit} noValidate className="space-y-4 text-slate-700">
              
              {/* Notice Banner */}
              <div className="p-3 bg-[#FAF9F6] border border-slate-200/80 rounded-xl text-xs text-slate-600 flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-[#123C42] shrink-0 mt-0.5" />
                <span>
                  Send an appointment request to the studio. Your preferred date and time are not confirmed until the team replies.
                </span>
              </div>

              {/* Full Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fullName" className="block text-xs font-medium text-slate-700 mb-1">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                    <input
                      type="text"
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                      }}
                      placeholder="e.g. Eleanor Vance"
                      className={`w-full pl-9 pr-3 py-2.5 text-sm bg-white border rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#123C42] transition-colors ${
                        errors.fullName ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                      }`}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="text-[11px] text-rose-500 mt-1">{errors.fullName}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-slate-700 mb-1">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      placeholder="eleanor@example.com"
                      className={`w-full pl-9 pr-3 py-2.5 text-sm bg-white border rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#123C42] transition-colors ${
                        errors.email ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-[11px] text-rose-500 mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Phone & First Visit */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-xs font-medium text-slate-700 mb-1">
                    Phone Number <span className="text-slate-400 font-normal">(for appointment reminders)</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: undefined });
                      }}
                      placeholder="(555) 000-0000"
                      className={`w-full pl-9 pr-3 py-2.5 text-sm bg-white border rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#123C42] transition-colors ${
                        errors.phone ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-[11px] text-rose-500 mt-1">{errors.phone}</p>
                  )}
                </div>

                <div className="flex items-center pt-6">
                  <label className="flex items-center gap-2.5 cursor-pointer text-xs text-slate-700 select-none">
                    <input
                      type="checkbox"
                      checked={formData.isFirstVisit}
                      onChange={(e) => setFormData({ ...formData, isFirstVisit: e.target.checked })}
                      className="w-4 h-4 text-[#123C42] rounded border-slate-300 focus:ring-[#123C42]"
                    />
                    <span>This will be my first visit to Lumident Studio</span>
                  </label>
                </div>
              </div>

              {/* Service & Dentist Selectors */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="serviceSelect" className="block text-xs font-medium text-slate-700 mb-1">
                    Requested Service <span className="text-rose-500">*</span>
                  </label>
                  <select
                    id="serviceSelect"
                    value={formData.serviceId}
                    onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                    className="w-full px-3 py-2.5 text-sm bg-white border border-slate-300 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#123C42]"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name} ({s.careType})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="dentistSelect" className="block text-xs font-medium text-slate-700 mb-1">
                    Dentist Preference
                  </label>
                  <select
                    id="dentistSelect"
                    value={formData.dentistId}
                    onChange={(e) => setFormData({ ...formData, dentistId: e.target.value })}
                    className="w-full px-3 py-2.5 text-sm bg-white border border-slate-300 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#123C42]"
                  >
                    <option value="any">First Available Clinician</option>
                    {DENTISTS.map((d) => (
                      <option key={d.id} value={d.id}>
                        {d.name} — {d.role.split('&')[0]}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="preferredDate" className="block text-xs font-medium text-slate-700 mb-1">
                    Preferred Date <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                    <input
                      type="date"
                      id="preferredDate"
                      min={getMinDate()}
                      value={formData.preferredDate}
                      onChange={(e) => {
                        setFormData({ ...formData, preferredDate: e.target.value });
                        if (errors.preferredDate) setErrors({ ...errors, preferredDate: undefined });
                      }}
                      className={`w-full pl-9 pr-3 py-2.5 text-sm bg-white border rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#123C42] transition-colors ${
                        errors.preferredDate ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                      }`}
                    />
                  </div>
                  {errors.preferredDate && (
                    <p className="text-[11px] text-rose-500 mt-1">{errors.preferredDate}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="timeSlot" className="block text-xs font-medium text-slate-700 mb-1">
                    Preferred Time Window
                  </label>
                  <select
                    id="timeSlot"
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3 py-2.5 text-sm bg-white border border-slate-300 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#123C42]"
                  >
                    <option value="morning">Morning (8:00 AM – 11:00 AM)</option>
                    <option value="midday">Midday (11:00 AM – 2:00 PM)</option>
                    <option value="afternoon">Afternoon (2:00 PM – 5:00 PM)</option>
                    <option value="evening">Late (5:00 PM – 6:00 PM)</option>
                  </select>
                </div>
              </div>

              {/* Optional Short Notes */}
              <div>
                <label htmlFor="notes" className="block text-xs font-medium text-slate-700 mb-1">
                  Optional Questions or Specific Sensitivities
                </label>
                <textarea
                  id="notes"
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. Mild sensitivity to cold water, interested in aligners timeline..."
                  className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#123C42]"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-slate-200 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-800 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold text-white bg-[#123C42] hover:bg-[#0E2C31] active:bg-[#0A2226] rounded-xl transition-all shadow-xs disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-[#D6B477]" />
                      <span>Sending Request...</span>
                    </>
                  ) : (
                    <>
                      <Calendar className="w-4 h-4 text-[#D6B477]" />
                      <span>Submit Appointment Request</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
};
