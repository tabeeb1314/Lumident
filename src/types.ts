export interface ServiceDetail {
  id: string;
  name: string;
  tagline: string;
  shortDescription: string;
  fullOverview: string;
  commonReasons: string[];
  consultationSteps: string[];
  benefits: string[];
  considerations: string[];
  faqs: { question: string; answer: string }[];
  durationEstimate: string;
  careType: 'Preventative' | 'Restorative' | 'Cosmetic' | 'Orthodontic' | 'Urgent';
}

export interface Dentist {
  id: string;
  name: string;
  role: string;
  focusArea: string;
  education: string;
  bio: string;
  philosophy: string;
  experienceYears: number;
  image: string;
  daysAvailable: string[];
}

export interface Testimonial {
  id: string;
  author: string;
  category: string;
  quote: string;
  treatment: string;
  tenure: string;
}

export interface FaqItem {
  id: string;
  category: 'Appointments' | 'First Visit' | 'Financing' | 'Emergency';
  question: string;
  answer: string;
}

export interface AppointmentFormData {
  fullName: string;
  email: string;
  phone: string;
  serviceId: string;
  dentistId: string;
  preferredDate: string;
  preferredTime: string;
  isFirstVisit: boolean;
  notes?: string;
}

export type ActivePage = 'home' | 'services' | 'dentists' | 'about' | 'contact';
