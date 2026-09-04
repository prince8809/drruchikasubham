export interface Service {
  slug: string;
  title: string;
  shortDesc: string;
  icon: string;
  color: string;
  details: string[];
}

export const services: Service[] = [
  {
    slug: "high-risk-pregnancy",
    title: "High-Risk Pregnancy Care",
    shortDesc: "Comprehensive monitoring and protocols for complex pregnancies ensuring maternal and fetal safety.",
    icon: "HeartPulse",
    color: "#FB5A7C",
    details: ["Hypertension & Gestational Diabetes", "Multiple Pregnancies (Twins)", "Advanced Maternal Age", "Recurrent Pregnancy Loss Monitoring"]
  },
  {
    slug: "normal-cesarean-delivery",
    title: "Normal & Cesarean Delivery",
    shortDesc: "Compassionate, patient-centered birthing experience with high success in normal vaginal deliveries.",
    icon: "Baby",
    color: "#2FB2EA",
    details: ["Normal Vaginal Delivery Focus", "Gentle Cesarean Section (LUCS)", "Painless Labor Support", "Postpartum Recovery Guidance"]
  },
  {
    slug: "ivf-infertility",
    title: "IVF & Fertility Solutions",
    shortDesc: "Personalised fertility evaluations, ovulation induction, IUI, and IVF pathways for couples.",
    icon: "Sparkles",
    color: "#FB5A7C",
    details: ["Preconception Counselling", "Follicular Monitoring", "Ovulation Induction & IUI", "Advanced IVF Management"]
  },
  {
    slug: "laparoscopic-surgery",
    title: "Advanced Laparoscopic Surgery",
    shortDesc: "Minimally invasive keyhole procedures for fibroids, cysts, and hysterectomies with quick recovery.",
    icon: "Microscope",
    color: "#2FB2EA",
    details: ["Keyhole Surgeries (FMAS, FIAG)", "Laparoscopic Hysterectomy", "Ovarian Cystectomy", "Myomectomy (Fibroid Removal)"]
  },
  {
    slug: "pcod-pcos",
    title: "PCOD / PCOS Care & Hormonal Health",
    shortDesc: "Holistic, evidence-based management for irregular cycles, weight changes, and acne.",
    icon: "Activity",
    color: "#FB5A7C",
    details: ["Cycle Regularisation", "Weight & Metabolic Management", "Fertility Restoration", "Endocrine Profiling"]
  },
  {
    slug: "endometriosis",
    title: "Endometriosis & Pelvic Pain",
    shortDesc: "Targeted diagnosis and medical or surgical relief for severe period pain and adenomyosis.",
    icon: "ShieldAlert",
    color: "#2FB2EA",
    details: ["Severe Dysmenorrhea Care", "Medical Management", "Laparoscopic Excision", "Fertility Preservation"]
  },
  {
    slug: "menopause-care",
    title: "Menopause & Perimenopause Care",
    shortDesc: "Empathetic guidance through hormonal transitions, bone density, and wellness past 40.",
    icon: "Heart",
    color: "#FB5A7C",
    details: ["Hot Flashes & Mood Changes", "Bone Health & Osteoporosis", "Hormone Replacement Therapy (HRT)", "Preventive Cancer Screenings"]
  },
];
