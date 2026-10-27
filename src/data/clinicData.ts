import { Dentist, FaqItem, ServiceDetail, Testimonial } from '../types';
import leadDentistImage from '../assets/images/dentist_portrait_lead_1793092932954.jpg';
import orthodontistImage from '../assets/images/dentist_portrait_ortho_1793092933305.jpg';
import implantDentistImage from '../assets/images/dentist_portrait_implant_1793092951456.jpg';

export const CLINIC_CONTACT = {
  name: 'Lumident Dental Studio',
  tagline: 'A Healthier Smile. A More Confident You.',
  address: '428 Orchard Haven Blvd, Suite 300',
  cityStateZip: 'San Francisco, CA 94107',
  phone: '(555) 019-4820',
  phoneTel: 'tel:5550194820',
  emergencyPhone: '(555) 019-4829',
  email: 'care@lumident-demo.example',
  hours: [
    { days: 'Monday – Thursday', time: '8:00 AM – 6:00 PM' },
    { days: 'Friday', time: '8:00 AM – 4:00 PM' },
    { days: 'Saturday', time: '9:00 AM – 2:00 PM (By Appointment)' },
    { days: 'Sunday', time: 'Closed (Emergency On-Call Support)' },
  ],
  demoNotice: 'Lumident Dental Studio is an illustrative portfolio demonstration project. Fictional doctor profiles, appointments, and contact details are used for demo purposes.',
};

export const SERVICES: ServiceDetail[] = [
  {
    id: 'general-dentistry',
    name: 'General Dentistry',
    tagline: 'Comprehensive preventative care and long-term oral health preservation.',
    shortDescription: 'Thorough examinations, low-radiation digital imaging, gentle ultrasonic hygiene cleanings, and proactive gum health assessments for all ages.',
    fullOverview: 'Our general dentistry appointments center on proactive preservation rather than reactive repairs. We take time to map your baseline oral health, assess periodontal structures, and discuss everyday habits that safeguard your natural teeth for decades.',
    commonReasons: [
      'Routine 6-month preventive checkup and hygiene cleanings',
      'Mild tooth sensitivity, localized pain, or early cavity detection',
      'Bleeding gums or concerns regarding early periodontal inflammation',
      'Updating older restorations or replacing worn filling margins',
    ],
    consultationSteps: [
      'Comprehensive dental charting and gentle digital radiography with minimal radiation',
      'Ultrasonic plaque and calculus removal followed by gentle micro-polishing',
      'Periodontal pocket depth measurements and gum tissue evaluation',
      'Personalized oral wellness roadmap and review of diagnostic findings with your dentist',
    ],
    benefits: [
      'Early detection prevents complex, invasive treatments down the line',
      'Preserves original tooth enamel and surrounding bone volume',
      'Personalized home care recommendations tailored to your saliva and tooth enamel profile',
    ],
    considerations: [
      'Deep periodontal therapy may require multiple visits if advanced gum inflammation is present',
      'Preventive checkups do not replace specialized restorative procedures when teeth have structural fractures',
    ],
    faqs: [
      {
        question: 'How often should I schedule a general checkup and cleaning?',
        answer: 'Most patients benefit from visits every 6 months. Patients managing periodontal conditions or high caries risk may be advised a 3- to 4-month maintenance schedule.',
      },
      {
        question: 'Do dental cleanings hurt?',
        answer: 'Modern ultrasonic instruments use gentle micro-vibrations and warm water irrigation. We also offer topical desensitizers and numbing gels for sensitive roots upon request.',
      },
    ],
    durationEstimate: '50 – 60 minutes',
    careType: 'Preventative',
  },
  {
    id: 'teeth-whitening',
    name: 'Teeth Whitening',
    tagline: 'Safe, controlled professional brightening for a luminous, natural glow.',
    shortDescription: 'Clinically calibrated in-office lightening and custom take-home whitening trays designed to preserve enamel integrity and minimize sensitivity.',
    fullOverview: 'Professional whitening utilizes medically buffered carbamide and hydrogen peroxide formulas designed to penetrate beneath the enamel prisms safely, breaking apart stubborn chromogens caused by coffee, tea, and natural aging without eroding dental surfaces.',
    commonReasons: [
      'Deep discoloration from coffee, tea, red wine, or smoking',
      'Preparation for milestone events such as weddings, graduations, or speaking engagements',
      'Desire to refresh tooth color naturally without veneers or crowns',
    ],
    consultationSteps: [
      'Initial shade shade-guide baseline documentation with high-definition clinical photography',
      'Gingival barrier isolation to safeguard sensitive gums and soft tissues',
      'Supervised application of pH-balanced brightening gel with ambient curing',
      'Application of potassium nitrate desensitizing treatment to ensure post-care comfort',
    ],
    benefits: [
      'Lightens shades safely under clinical supervision in a single visit',
      'Customized concentrations tailored specifically to your enamel sensitivity threshold',
      'Custom-molded take-home trays provide long-term touch-up convenience',
    ],
    considerations: [
      'Existing resin fillings, crowns, and veneers do not lighten with peroxide gels and may need replacement afterward to match',
      'Mild transient temperature sensitivity may occur for 24–48 hours post-treatment',
    ],
    faqs: [
      {
        question: 'How many shades brighter can I realistically expect?',
        answer: 'Results vary depending on internal tooth density and stain origins. Patients typically see a noticeable 3 to 7 shade improvement on the VITA dental scale.',
      },
      {
        question: 'Is professional whitening safe for tooth enamel?',
        answer: 'Yes. When formulated at balanced pH levels and applied by clinical professionals, whitening does not alter the structural mineral thickness of enamel.',
      },
    ],
    durationEstimate: '75 – 90 minutes',
    careType: 'Cosmetic',
  },
  {
    id: 'dental-implants',
    name: 'Dental Implants',
    tagline: 'Permanent, biomechanically stable replacements that feel like natural teeth.',
    shortDescription: 'Biocompatible titanium and zirconia implants that fuse naturally with jawbone tissue, restoring chewing confidence, speech, and dental architecture.',
    fullOverview: 'Dental implants represent the modern gold standard for replacing missing teeth. By serving as artificial tooth roots anchored into the alveolar bone, implants stimulate jawbone density, prevent adjacent teeth from shifting, and support lifelike porcelain crowns.',
    commonReasons: [
      'One or more missing teeth caused by trauma, deep decay, or failed root canals',
      'Difficulty chewing favorite foods or speaking clearly due to gaps',
      'Discomfort, slippage, or bone loss associated with traditional removable dentures',
    ],
    consultationSteps: [
      'Low-dose 3D Cone Beam CT (CBCT) scan to assess bone depth, width, and nerve trajectories',
      'Digital surgical guide planning using computer-guided 3D positioning',
      'Gentle implant fixture placement with local anesthesia or comfortable sedation',
      'Healing phase (osseointegration) followed by precision custom porcelain crown attachment',
    ],
    benefits: [
      'Does not require grinding or altering adjacent healthy natural teeth',
      'Stimulates bone growth and prevents facial sagging from bone resorption',
      'High long-term success rates with routine brushing and regular checkups',
    ],
    considerations: [
      'Requires adequate bone density; bone grafting or sinus lift may be recommended if bone volume is thin',
      'Healing and integration typically span 3 to 6 months before final crown placement',
    ],
    faqs: [
      {
        question: 'How long does a dental implant last?',
        answer: 'With diligent oral hygiene and regular dental checkups, the titanium implant fixture can last decades or a lifetime. The porcelain crown may experience natural wear after 12–18 years.',
      },
      {
        question: 'Am I a candidate if I have osteoporosis or diabetes?',
        answer: 'Many patients with managed systemic conditions can safely receive implants. We conduct thorough pre-surgical medical reviews and coordinate with your physician when helpful.',
      },
    ],
    durationEstimate: 'Consultation: 45 min; Procedure varies',
    careType: 'Restorative',
  },
  {
    id: 'orthodontics-aligners',
    name: 'Orthodontics & Clear Aligners',
    tagline: 'Discreet, digitally planned tooth alignment for improved function and aesthetics.',
    shortDescription: 'Virtually invisible aligner therapies and modern orthodontic solutions designed to correct crowding, spacing, and bite alignment with precision comfort.',
    fullOverview: 'Straightening teeth is as much about long-term dental function and joint health as it is about aesthetics. Misaligned teeth harbor plaque traps and create uneven chewing wear. Our digital clear aligner treatment maps every micro-movement using 3D simulations before you begin.',
    commonReasons: [
      'Adult or teen crowding, overlapping teeth, or unwanted gap spacing',
      'Relapse after adolescent braces due to lost or worn retainers',
      'Overbite, underbite, or crossbite causing jaw tension or uneven enamel wear',
    ],
    consultationSteps: [
      'Non-invasive 3D optical intraoral digital scan (no gooey impression trays required)',
      'Digital 3D simulation showing expected week-by-week tooth movement and projected final alignment',
      'Custom fabrication of medical-grade thermoplastic aligner series',
      'Progress checkups every 6 to 8 weeks to monitor movement and deliver new aligners',
    ],
    benefits: [
      'Clear trays are virtually unnoticeable in professional and social settings',
      'Removable for meals, flossing, and brushing, preventing bracket-associated staining',
      'Smooth edges prevent inner cheek abrasion and painful wire pokes',
    ],
    considerations: [
      'Requires patient compliance of 20 to 22 hours of daily wear for predictable movement',
      'Complex skeletal jaw discrepancies may require adjunct orthodontic auxiliaries',
    ],
    faqs: [
      {
        question: 'How long does clear aligner treatment typically take?',
        answer: 'Mild alignment cases often conclude in 4 to 8 months, while moderate crowding or bite corrections typically range between 10 and 18 months.',
      },
      {
        question: 'Can I eat and drink while wearing aligners?',
        answer: 'You should remove aligners when eating or drinking anything other than cool water to avoid warping the trays or trapping sugars against your enamel.',
      },
    ],
    durationEstimate: 'Digital Scan: 30 minutes',
    careType: 'Orthodontic',
  },
  {
    id: 'veneers-smile-design',
    name: 'Veneers & Smile Design',
    tagline: 'Bespoke hand-crafted porcelain shells harmonized to your unique facial aesthetics.',
    shortDescription: 'Ultra-thin, custom-shaded ceramic laminates crafted to address chipping, intrinsic stains, asymmetries, and proportions with conservative enamel preparation.',
    fullOverview: 'Smile design blends artistic proportion with conservative biological dentistry. Rather than uniform artificial chicklets, we analyze lip curvature, facial symmetry, skin tone, and gum scalloping to hand-tailor porcelain veneers with lifelike translucency and natural surface texture.',
    commonReasons: [
      'Severe internal fluorosis or tetracycline staining resistant to bleaching',
      'Worn, chipped, or shortened teeth from bruxism or traumatic injury',
      'Irregular tooth proportions, asymmetry, or persistent midline spacing',
    ],
    consultationSteps: [
      'Aesthetic smile analysis, facial photography, and digital diagnostic smile preview',
      'Trial smile mockup directly on your teeth so you can preview proportions and phonetics before any enamel preparation',
      'Ultra-conservative micro-preparation and master ceramicist shade matching',
      'Permanent resin adhesive bonding and occlusal equilibration check',
    ],
    benefits: [
      'Porcelain mimics natural tooth enamel light reflection and translucency',
      'Stain-resistant glazed surface repels coffee and tobacco pigment',
      'Durable, biocompatible enhancement tailored to your individual facial character',
    ],
    considerations: [
      'Usually irreversible as a minimal layer of outer enamel is lightly prepared to ensure seamless margins',
      'Patients with nocturnal teeth grinding must wear a custom protective nightguard',
    ],
    faqs: [
      {
        question: 'Do teeth look overly fake or bulky with veneers?',
        answer: 'No. At Lumident, our aesthetic philosophy prioritizes natural contours, multi-layered color gradation, and subtle surface micro-texture tailored to your individual anatomy.',
      },
      {
        question: 'How do I care for porcelain veneers?',
        answer: 'Treat them just like natural teeth: daily flossing, non-abrasive fluoride toothpaste, regular cleanings, and avoiding using teeth as tools to crack ice or open packages.',
      },
    ],
    durationEstimate: 'Consultation & Mockup: 60 minutes',
    careType: 'Cosmetic',
  },
  {
    id: 'emergency-care',
    name: 'Emergency Dental Care',
    tagline: 'Prompt, compassionate same-day care for acute pain, trauma, and urgent conditions.',
    shortDescription: 'Immediate diagnostic triage and soothing relief for cracked teeth, severe toothaches, lost restorations, knocked-out teeth, and acute oral swelling.',
    fullOverview: 'Dental emergencies create severe discomfort and natural anxiety. Our clinic reserves dedicated emergency slots every business day so patients facing acute pain, dental trauma, or sudden swelling can be evaluated and stabilized promptly in a calm setting.',
    commonReasons: [
      'Sudden severe, throbbing tooth pain that interrupts sleep or eating',
      'Chipped, broken, or knocked-out tooth from physical activity or accident',
      'Lost filling, loose crown, or broken bridge exposing raw dentin',
      'Gingival abscess, acute swelling, or soft tissue bleeding',
    ],
    consultationSteps: [
      'Immediate triage to diagnose source of pain using focused digital radiography and vitality tests',
      'Rapid anesthetic administration to eliminate acute pain immediately',
      'Stabilization treatment (temporary protective dressing, restorative repair, or pulp therapy)',
      'Clear post-care recovery instructions, prescribed medications if indicated, and follow-up plan',
    ],
    benefits: [
      'Prompt same-day intervention preserves traumatized teeth and prevents spread of infection',
      'Relieves agonizing dental nerve pain swiftly in a tranquil, supportive clinic',
      'Clear, upfront explanation of urgent stabilization costs before proceeding',
    ],
    considerations: [
      'Emergency appointments focus primarily on stabilizing acute pain and trauma; complete elective restorative plans may require a subsequent scheduled visit',
    ],
    faqs: [
      {
        question: 'What should I do if my permanent tooth is knocked out completely?',
        answer: 'Gently rinse the tooth without touching the root surface. If possible, gently place it back into the socket, or store it in cold whole milk or saliva, and contact us immediately within 60 minutes.',
      },
      {
        question: 'Do you accept emergency walk-ins?',
        answer: 'While we strive to accommodate walk-ins, calling ahead allows our team to prepare the operatory and emergency instruments before your arrival.',
      },
    ],
    durationEstimate: 'Same-day urgent triage: 40 – 60 minutes',
    careType: 'Urgent',
  },
];

export const DENTISTS: Dentist[] = [
  {
    id: 'dr-elena-rostova',
    name: 'Dr. Elena Rostova',
    role: 'Lead Restorative & Aesthetic Dentist',
    focusArea: 'Cosmetic Smile Design, Conservative Restorations & Enamel Health',
    education: 'DDS, UCSF School of Dentistry · Fellow, Academy of General Dentistry',
    bio: 'Dr. Rostova has spent over 14 years refining conservative cosmetic dentistry. Her practice emphasizes biomimetic principles—preserving maximum natural tooth structure while achieving balanced, luminous aesthetics.',
    philosophy: 'A truly beautiful smile looks harmonious with who you are. We listen carefully, never rush, and use digital visualization so you are an active partner in your care.',
    experienceYears: 14,
    image: leadDentistImage,
    daysAvailable: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
  },
  {
    id: 'dr-julian-vance',
    name: 'Dr. Julian Vance',
    role: 'Orthodontics & Dento-facial Orthopedics',
    focusArea: 'Digital Clear Aligners, Adolescent Orthodontics & Airway-Centric Alignment',
    education: 'DMD, Harvard School of Dental Medicine · MS Orthodontics, University of Michigan',
    bio: 'Dr. Vance combines digital smile modeling with orthodontic biomechanics. He specializes in discrete clear aligner treatments for busy professionals and comprehensive bite balancing for young adults.',
    philosophy: 'Orthodontics is not only about straight teeth; it is about healthy breathing, balanced jaw posture, and a comfortable bite that lasts a lifetime.',
    experienceYears: 11,
    image: orthodontistImage,
    daysAvailable: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  },
  {
    id: 'dr-marcus-chen',
    name: 'Dr. Marcus Chen',
    role: 'Implantologist & Periodontal Surgeon',
    focusArea: 'Guided Implant Placement, Bone Regeneration & Periodontal Health',
    education: 'DDS, Columbia University College of Dental Medicine · Postdoctoral Periodontics',
    bio: 'Dr. Chen specializes in computer-guided implant surgery and minimally invasive periodontal therapies. He is passionate about restoring functional chewing comfort for patients missing natural teeth.',
    philosophy: 'Surgical dentistry should be gentle, predictable, and transparent. We explain every step beforehand and utilize 3D computer guidance for maximum precision.',
    experienceYears: 12,
    image: implantDentistImage,
    daysAvailable: ['Monday', 'Wednesday', 'Friday', 'Saturday'],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    author: 'Sarah K.',
    category: 'Demonstration Patient Review',
    treatment: 'Clear Aligner Treatment',
    quote: 'The digital preview before starting made all the difference. Dr. Vance was transparent about realistic timelines and kept checkups fast and comfortable. My bite feels completely balanced.',
    tenure: 'Sample review for demonstration',
  },
  {
    id: 'test-2',
    author: 'David M.',
    category: 'Demonstration Patient Review',
    treatment: 'Single-Tooth Dental Implant',
    quote: 'I had severe dental anxiety after a sports injury chipped a molar. The team at Lumident explained each step calmly, and the operatory looking out at the trees made the whole visit surprisingly peaceful.',
    tenure: 'Sample review for demonstration',
  },
  {
    id: 'test-3',
    author: 'Camilla L.',
    category: 'Demonstration Patient Review',
    treatment: 'Preventative Care & Whitening',
    quote: 'Clean, warm, and zero high-pressure sales. They showed me my digital scans, talked through what mattered, and the in-office whitening gave me noticeable results without any pain.',
    tenure: 'Sample review for demonstration',
  },
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'First Visit',
    question: 'What happens during my first appointment at Lumident?',
    answer: 'Your first visit lasts about 60 minutes. We conduct a relaxed discussion of your dental history and any sensitivities, take low-radiation digital imaging, assess gum health, perform an ultrasonic cleaning, and discuss your goals without any pressure.',
  },
  {
    id: 'faq-2',
    category: 'Appointments',
    question: 'How far in advance should I book my appointment?',
    answer: 'For routine hygiene cleanings and consultations, booking 1 to 2 weeks in advance offers the widest selection of morning and late afternoon times. We also maintain reserved daily slots for urgent dental emergencies.',
  },
  {
    id: 'faq-3',
    category: 'Financing',
    question: 'Do you accept dental insurance and offer transparent pricing?',
    answer: 'Yes. We work with most major PPO dental plans and provide a comprehensive itemized cost estimate prior to initiating any treatment. For elective procedures, we offer flexible interest-free payment plans.',
  },
  {
    id: 'faq-4',
    category: 'Appointments',
    question: 'What is your cancellation and rescheduling policy?',
    answer: 'We appreciate at least 24 to 48 hours notice for rescheduling so we can offer that reserved operatory time to another patient awaiting care. There are no fees for emergency cancellations due to illness.',
  },
  {
    id: 'faq-5',
    category: 'Emergency',
    question: 'What qualifies as an emergency dental visit?',
    answer: 'Severe throbbing pain, an avulsed (knocked out) or fractured tooth, uncontrolled gum bleeding, or rapid swelling in the jaw or face. We provide same-day urgent care triage during our operating hours.',
  },
  {
    id: 'faq-6',
    category: 'First Visit',
    question: 'What should I do if I suffer from dental anxiety?',
    answer: 'Please let us know in advance or in the appointment notes! Our team specializes in gentle dentistry: we provide noise-canceling headphones, ceiling monitors, weighted blankets, warm blankets, and allow you to pause treatment at any time with a simple hand gesture.',
  },
];

export const CLINIC_PILLARS = [
  {
    title: 'Personalized Treatment Plans',
    description: 'We believe no two mouths are alike. We avoid one-size-fits-all packages, presenting options that honor your biology, budget, and personal priorities.',
    icon: 'FileCheck',
  },
  {
    title: 'Clear Communication & Honest Costs',
    description: 'Before any procedure begins, you receive an itemized overview with no hidden surprises, arbitrary jargon, or unnecessary upsells.',
    icon: 'MessageSquareText',
  },
  {
    title: 'Patient Comfort & Attentive Care',
    description: 'From warm neck pillows to noise-cancelling headphones and gentle local anesthetic techniques, we re-imagine dental visits into calm restorative moments.',
    icon: 'HeartHandshake',
  },
  {
    title: 'Convenient Online Requests',
    description: 'Seamless digital scheduling, prompt text reminders, and dedicated emergency slots ensure your dental health fits into a busy modern life.',
    icon: 'CalendarCheck2',
  },
  {
    title: 'Welcoming Environment for Families',
    description: 'Care tailored for young children experiencing their first visit, teens needing bite alignment, and adults safeguarding long-term smile vitality.',
    icon: 'Users',
  },
];

export const PATIENT_JOURNEY_STEPS = [
  {
    step: '01',
    title: 'Request Your Visit',
    description: 'Select your preferred date, time, and focus area using our streamlined digital request form or a brief call with our studio concierge.',
  },
  {
    step: '02',
    title: 'Discuss Your Goals & Health',
    description: 'Meet your dentist in a relaxed consultation suite. We capture digital 3D scans and discuss your aesthetic and health goals side-by-side.',
  },
  {
    step: '03',
    title: 'Receive Your Tailored Plan',
    description: 'Review your personalized care roadmap with clear timing, transparent estimates, and gentle, attentive execution at every stage.',
  },
];
