import { WHATSAPP_SUBHAM, WHATSAPP_RUCHIKA, PHONE_SUBHAM, PHONE_RUCHIKA } from "@/lib/constants";

export interface SpecialtyItem {
  title: string;
  desc: string;
  icon: string;
  image?: string;
  tags?: string[];
}

export interface DoctorFAQ {
  question: string;
  answer: string;
}

export interface Doctor {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  degrees: string;
  role: string;
  tagline: string;
  bio: string;
  fullBio: string;
  philosophyTitle: string;
  philosophyDesc: string;
  philosophyImage?: string;
  specialHighlightTitle?: string;
  specialHighlightDesc?: string;
  specialHighlightImage?: string;
  photo: string;
  extendedPhoto?: string;
  whatsapp: string;
  phone: string;
  hospital: string;
  hospitalShort: string;
  timings: string;
  experience: string;
  languages: string[];
  qualificationsList: string[];
  specialties: string[];
  specialtyDetails: SpecialtyItem[];
  milestones: string[];
  accentColor: string;
  accentBg: string;
  accentBorder: string;
  accentText: string;
  partnerDoctorSlug: string;
  partnerDoctorName: string;
  partnerDoctorHospital: string;
  instagram?: string;
  instagramHandle?: string;
  faqs: DoctorFAQ[];
}

export const doctors: Doctor[] = [
  {
    id: "ruchika",
    slug: "dr-ruchika-agarwal",
    name: "Dr. Ruchika Agarwal",
    shortName: "Dr. Ruchika",
    degrees: "M.B.B.S, M.S",
    role: "Consultant Obstetrician, Gynaecologist & Fertility Specialist",
    tagline: "Empathetic, Complete Healthcare for Every Stage of Womanhood.",
    bio: "Dedicated to compassionate women's wellness, fertility management, and respectful maternity care. Dr. Ruchika provides empathetic support for menstrual issues, PCOS, IVF counseling, and natural birth planning.",
    fullBio: "Dr. Ruchika Agarwal is dedicated to providing warm, comprehensive, and compassionate women's healthcare. With specialized focus in adolescent gynaecology, fertility and infertility evaluations, PCOS reversal, gentle normal vaginal delivery, and perimenopause transitions, Dr. Ruchika creates an environment where women feel truly heard, respected, and expertly cared for.",
    philosophyTitle: "Empathy, Listening & Evidence-Based Maternity Care",
    philosophyDesc: "Every woman's body and reproductive journey is unique. Many women feel anxious or hesitant to discuss intimate hormonal, menstrual, or fertility challenges. My clinic is designed to be a safe, compassionate space where you can speak openly without feeling rushed or judged. From adolescent menstrual problems to joyful deliveries and menopausal wellbeing, I am here as your trusted partner.",
    philosophyImage: "/images/doctors/pillars/ruchika-philosophy.webp",
    specialHighlightTitle: "Gentle Maternity & Adolescent Well-Woman Care",
    specialHighlightDesc: "Dr. Ruchika prioritizes emotional comfort, continuous labor reassurance, and natural birth preparedness. She also provides gentle guidance for teenagers experiencing painful or irregular cycles, helping young women build long-term reproductive confidence.",
    specialHighlightImage: "/images/doctors/pillars/ruchika-special-focus.webp",
    photo: "/images/doctors/dr-ruchika-headshot.webp",
    instagram: "https://www.instagram.com/dr.rhea_ag21/",
    instagramHandle: "@dr.rhea_ag21",
    whatsapp: WHATSAPP_RUCHIKA,
    phone: PHONE_RUCHIKA,
    hospital: "Zivah Fertility & Women's Wellness Centre, 2nd Floor, The Crest, Meghnad Saha Sarani, Opposite Deokta Sangha, Pradhan Nagar, Siliguri - 734003",
    hospitalShort: "Zivah Fertility & Wellness Centre",
    timings: "Monday – Friday: 10:00 AM – 2:00 PM",
    experience: "6+ Years",
    languages: ["English", "Hindi", "Bengali", "Nepali"],
    qualificationsList: [
      "M.B.B.S — Bachelor of Medicine, Bachelor of Surgery",
      "M.S (Obstetrics & Gynaecology) — Master of Surgery"
    ],
    specialties: [
      "Fertility Evaluation & IVF Guidance",
      "PCOD / PCOS & Hormonal Balance",
      "Normal Vaginal Delivery",
      "High-Risk Pregnancy Care",
      "Adolescent Gynaecology & Period Health",
      "Antenatal Nutrition & Wellness",
      "Menopause & Perimenopause Care",
      "Cervical Cancer Screening"
    ],
    specialtyDetails: [
      {
        title: "Fertility Evaluation & Conception Care",
        desc: "Sensitive, structured workup for couples trying to conceive, including ovulation monitoring, hormonal profiling, semen analysis interpretation, and IVF counseling.",
        icon: "Dna",
        image: "/images/services/ivf-infertility.webp",
        tags: ["Follicular Tracking", "Hormonal Panels", "Ovulation Induction", "IVF Counseling"]
      },
      {
        title: "PCOD / PCOS Reversal & Hormonal Health",
        desc: "Holistic, evidence-based management addressing irregular cycles, acne, weight struggles, and metabolic imbalances with compassionate long-term support.",
        icon: "Pill",
        image: "/images/services/pcod-pcos.webp",
        tags: ["Cycle Regularity", "Lifestyle Interventions", "Fertility Restoration", "Insulin Health"]
      },
      {
        title: "Normal Vaginal Delivery & Antenatal Care",
        desc: "Continuous, patient-guided pregnancy monitoring with focus on maternal wellbeing, fetal development, nutrition, pelvic floor preparedness, and calm natural birth.",
        icon: "Baby",
        image: "/images/services/normal-cesarean-delivery.webp",
        tags: ["Antenatal Visits", "Gentle Birth Planning", "Pelvic Floor Care", "Postpartum Recovery"]
      },
      {
        title: "Adolescent Gynaecology & Menstrual Health",
        desc: "Safe, supportive consultations for teenagers and young adults dealing with severe dysmenorrhea, heavy flow, irregular periods, and puberty concerns.",
        icon: "Sparkles",
        image: "/images/services/adolescent-gynaecology.webp",
        tags: ["Painful Periods", "Heavy Bleeding", "Puberty Health", "Compassionate Care"]
      },
      {
        title: "High-Risk Pregnancy Surveillance",
        desc: "Careful monitoring of maternal medical conditions, thyroid disorders, gestational hypertension, and previous pregnancy complications.",
        icon: "HeartPulse",
        image: "/images/services/high-risk-pregnancy.webp",
        tags: ["Thyroid in Pregnancy", "Hypertension", "Close Monitoring", "Safety Protocols"]
      },
      {
        title: "Menopause & Perimenopause Transition",
        desc: "Supportive care for hot flashes, night sweats, mood fluctuations, bone density loss, and vaginal dryness to keep your golden years vibrant and healthy.",
        icon: "Thermometer",
        image: "/images/services/menopause-care.webp",
        tags: ["Hot Flashes", "Bone Health", "Hormone Therapy Guidance", "Well-Woman Screening"]
      }
    ],
    milestones: [
      "1,000+ Normal Deliveries Conducted",
      "Hundreds of Successful Fertility & PCOS Journeys",
      "6+ Years of Compassionate Women's Healthcare",
      "Trusted by Families Across Siliguri, Sikkim & North Bengal"
    ],
    accentColor: "#F57B94",
    accentBg: "bg-[#FFF0F3]",
    accentBorder: "border-[#FFD3DC]",
    accentText: "text-[#C73859]",
    partnerDoctorSlug: "dr-subham-agarwal",
    partnerDoctorName: "Dr. Subham Agarwal",
    partnerDoctorHospital: "Manipal Hospital, Siliguri",
    faqs: [
      {
        question: "Where does Dr. Ruchika Agarwal consult?",
        answer: "Dr. Ruchika consults at Zivah Fertility & Women's Wellness Centre, 2nd Floor, The Crest, Meghnad Saha Sarani (opposite Deokta Sangha), Pradhan Nagar, Siliguri from Monday to Friday between 10:00 AM and 2:00 PM."
      },
      {
        question: "How do I book an OPD consultation with Dr. Ruchika?",
        answer: "You can book your consultation directly on WhatsApp by clicking the 'Book on WhatsApp' button on this page, or by contacting the clinic desk."
      },
      {
        question: "I have painful periods or PCOS. What happens during the first visit?",
        answer: "Your initial consultation is completely unhurried. Dr. Ruchika will listen to your symptoms, menstrual history, and lifestyle factors, review any past ultrasound reports or blood tests, and prepare a personalized, step-by-step treatment plan."
      },
      {
        question: "Where are deliveries and surgical procedures conducted?",
        answer: "Hospital deliveries and advanced gynaecological procedures are conducted in collaboration with Dr. Subham Agarwal at Manipal Hospital, Siliguri with cashless/TPA insurance coverage and 24/7 neonatal/ICU backup."
      }
    ]
  },
  {
    id: "subham",
    slug: "dr-subham-agarwal",
    name: "Dr. Subham Agarwal",
    shortName: "Dr. Subham",
    degrees: "M.B.B.S, M.S, F.M.A.S, F.I.A.G",
    role: "Consultant Obstetrician, Gynaecologist & Advanced Laparoscopic Surgeon",
    tagline: "Your Health. Your Fertility. Your Pregnancy. Expertly Cared For.",
    bio: "Specialising in high-risk pregnancies, minimally invasive laparoscopic surgery, and complex gynaecological care. Dr. Subham brings surgical precision and reassuring calm to every patient's birthing and surgical journey.",
    fullBio: "Dr. Subham Agarwal provides comprehensive and personalised care for women at every stage of life, with advanced clinical expertise in pregnancy and antenatal care, normal vaginal and caesarean delivery, high-risk pregnancy management, fertility evaluation, and minimally invasive laparoscopic gynaecological surgery. Committed to holistic family-centered obstetrics, Dr. Subham also actively guides and supports husbands and partners through labor and postpartum care.",
    philosophyTitle: "Surgical Precision & Reassuring Family-Centered Care",
    philosophyDesc: "Healthcare shouldn't feel hurried or intimidating. My approach combines evidence-based surgical precision with warm, unhurried bedside listening. Whether managing a complex high-risk pregnancy, performing keyhole surgery with minimal tissue disruption, or helping an anxious partner understand how to support their wife during labor, every patient deserves clarity, dignity, and unwavering clinical dedication.",
    philosophyImage: "/images/doctors/pillars/subham-philosophy.webp",
    specialHighlightTitle: "The Father's Corner: Active Partner Inclusivity",
    specialHighlightDesc: "Pregnancy is a shared journey. Dr. Subham actively encourages husbands and partners to participate in prenatal consultations, ultrasound reviews, and labor preparation. He provides clear, practical advice on emotional support, warning signs, labor coaching, and postpartum recovery so fathers feel confident, informed, and engaged.",
    specialHighlightImage: "/images/doctors/pillars/subham-fathers-corner.webp",
    photo: "/images/doctors/dr-subham-headshot.webp",
    extendedPhoto: "/images/doctors/dr-subham-extended.webp",
    instagram: "https://www.instagram.com/drruchikasubham/",
    instagramHandle: "@drruchikasubham",
    whatsapp: WHATSAPP_SUBHAM,
    phone: PHONE_SUBHAM,
    hospital: "Manipal Hospital, Meghnad Saha Sarani, Ward 2, Pradhan Nagar, Siliguri, West Bengal 734003",
    hospitalShort: "Manipal Hospital, Siliguri",
    timings: "Monday – Friday: 10:00 AM – 6:00 PM",
    experience: "6+ Years",
    languages: ["English", "Hindi", "Bengali", "Nepali"],
    qualificationsList: [
      "M.B.B.S — Bachelor of Medicine, Bachelor of Surgery",
      "M.S (Obstetrics & Gynaecology) — Master of Surgery",
      "F.M.A.S — Fellowship in Minimal Access Surgery",
      "F.I.A.G — Fellowship in Aesthetic Gynaecology"
    ],
    specialties: [
      "High-Risk Pregnancy",
      "Normal & Cesarean Delivery",
      "Advanced Laparoscopic Surgery",
      "Hysterectomy & Fibroid Removal",
      "Endometriosis & Adenomyosis",
      "IVF & Infertility Workup",
      "PCOD / PCOS Management",
      "The Father's Corner & Partner Support"
    ],
    specialtyDetails: [
      {
        title: "High-Risk Pregnancy Care",
        desc: "Specialized clinical surveillance for hypertension (preeclampsia), gestational diabetes, multiple gestation, previous cesareans, and intrauterine growth restriction.",
        icon: "HeartPulse",
        image: "/images/services/high-risk-pregnancy.webp",
        tags: ["Preeclampsia", "Gestational Diabetes", "Twin Pregnancies", "Fetal Monitoring"]
      },
      {
        title: "Normal & Cesarean (LUCS) Delivery",
        desc: "Compassionate, patient-centered labor management promoting safe vaginal birth where possible, with expert surgical delivery at Manipal Hospital when medically necessary.",
        icon: "Baby",
        image: "/images/services/normal-cesarean-delivery.webp",
        tags: ["Painless Normal Delivery", "Planned LUCS", "Emergency C-Section", "Labor Room Care"]
      },
      {
        title: "Advanced Laparoscopic Surgery",
        desc: "State-of-the-art keyhole procedures with minimal incisions, less post-op pain, reduced blood loss, and faster discharge back to your daily routine.",
        icon: "Microscope",
        image: "/images/services/laparoscopic-surgery.webp",
        tags: ["TLH Hysterectomy", "Ovarian Cystectomy", "Myomectomy", "Ectopic Pregnancy"]
      },
      {
        title: "Endometriosis & Adenomyosis",
        desc: "Accurate diagnosis and targeted laparoscopic excision for deep pelvic endometriosis, severe dysmenorrhea, and chronic pelvic discomfort.",
        icon: "Activity",
        image: "/images/services/endometriosis.webp",
        tags: ["Pelvic Pain", "Chocolate Cysts", "Excision Surgery", "Long-term Relief"]
      },
      {
        title: "PCOD / PCOS & Hormonal Balance",
        desc: "Personalized medical management targeting insulin resistance, irregular cycles, hyperandrogenism, and lifestyle-led ovulation induction.",
        icon: "Pill",
        image: "/images/services/pcod-pcos.webp",
        tags: ["Cycle Regulation", "Metabolic Health", "Ovulation Induction", "Weight Support"]
      },
      {
        title: "Fertility Evaluation & IVF Guidance",
        desc: "Comprehensive male and female reproductive workup, tubal patency evaluation, follicular monitoring, and collaborative fertility planning.",
        icon: "Dna",
        image: "/images/services/ivf-infertility.webp",
        tags: ["Follicular Scans", "Tubal Testing", "Sperm Analysis Guidance", "IVF Referrals"]
      }
    ],
    milestones: [
      "1,000+ Normal Deliveries Conducted",
      "1,000+ LUCS Cesarean Sections Performed",
      "100+ Minimally Invasive Keyhole Surgeries",
      "100+ Laparoscopic Hysterectomies",
      "6+ Years of Proven Clinical Excellence"
    ],
    accentColor: "#4384C6",
    accentBg: "bg-[#EBF4FC]",
    accentBorder: "border-[#BCD7F5]",
    accentText: "text-[#1E518A]",
    partnerDoctorSlug: "dr-ruchika-agarwal",
    partnerDoctorName: "Dr. Ruchika Agarwal",
    partnerDoctorHospital: "Zivah Fertility & Women's Wellness Centre",
    faqs: [
      {
        question: "Where does Dr. Subham Agarwal consult and conduct surgeries?",
        answer: "Dr. Subham consults OPD patients at Manipal Hospital, Siliguri from Monday to Friday between 10:00 AM and 6:00 PM. All deliveries and surgical procedures are conducted at Manipal Hospital with full ICU and NICU support."
      },
      {
        question: "Is cashless health insurance accepted for procedures?",
        answer: "Yes. Cashless and TPA insurance claims are fully supported for all inpatient admissions, deliveries (normal and cesarean), and laparoscopic surgeries at Manipal Hospital."
      },
      {
        question: "Can husbands and partners join the consultation and labor room?",
        answer: "Absolutely! Dr. Subham strongly believes in active partner participation. Husbands are warmly encouraged to attend consultations, ask questions, and learn how to best support their partner through pregnancy, labor, and postpartum care."
      },
      {
        question: "Can I consult both Dr. Ruchika and Dr. Subham together?",
        answer: "Yes. Through the Couple Doctor Advantage, you can request a joint consultation where both specialists review your medical history and collaborate on your treatment or birth plan."
      }
    ]
  },
];

