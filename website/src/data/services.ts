import { WHATSAPP_SUBHAM, WHATSAPP_RUCHIKA } from "@/lib/constants";

export interface Service {
  slug: string;
  title: string;
  shortDesc: string;
  icon: string;
  color: string;
  category: "Pregnancy & Delivery" | "Fertility & Hormones" | "Advanced Surgery" | "Well-Woman";
  doctorLead: string;
  whatsappUrl: string;
  details: string[];
}

export const services: Service[] = [
  {
    slug: "high-risk-pregnancy",
    title: "High-Risk Pregnancy Care",
    shortDesc: "Comprehensive monitoring and protocols for complex pregnancies ensuring maternal and fetal safety.",
    icon: "HeartPulse",
    color: "#FB5A7C",
    category: "Pregnancy & Delivery",
    doctorLead: "Dr. Subham & Dr. Ruchika",
    whatsappUrl: WHATSAPP_SUBHAM,
    details: ["Hypertension & Gestational Diabetes", "Twin Pregnancies & Advanced Age", "Recurrent Loss Monitoring"]
  },
  {
    slug: "normal-cesarean-delivery",
    title: "Normal & Cesarean Delivery",
    shortDesc: "Compassionate, patient-centered birthing experience with high success in normal vaginal deliveries.",
    icon: "Baby",
    color: "#2FB2EA",
    category: "Pregnancy & Delivery",
    doctorLead: "Dr. Subham Agarwal",
    whatsappUrl: WHATSAPP_SUBHAM,
    details: ["Normal Vaginal Delivery Focus", "Gentle Cesarean Section (LUCS)", "Painless Epidural Labor Support"]
  },
  {
    slug: "ivf-infertility",
    title: "IVF & Fertility Solutions",
    shortDesc: "Personalised fertility evaluations, ovulation induction, IUI, and IVF pathways for couples.",
    icon: "Sparkles",
    color: "#FB5A7C",
    category: "Fertility & Hormones",
    doctorLead: "Dr. Ruchika Agarwal",
    whatsappUrl: WHATSAPP_RUCHIKA,
    details: ["Preconception Counselling", "Follicular Monitoring & IUI", "Advanced IVF Pathways"]
  },
  {
    slug: "pcod-pcos",
    title: "PCOD / PCOS & Hormonal Health",
    shortDesc: "Holistic, evidence-based management for irregular cycles, weight changes, and acne.",
    icon: "Activity",
    color: "#FB5A7C",
    category: "Fertility & Hormones",
    doctorLead: "Dr. Ruchika Agarwal",
    whatsappUrl: WHATSAPP_RUCHIKA,
    details: ["Cycle Regularisation & Acne", "Metabolic & Weight Guidance", "Fertility Restoration"]
  },
  {
    slug: "laparoscopic-surgery",
    title: "Advanced Laparoscopic Surgery",
    shortDesc: "Minimally invasive keyhole procedures for fibroids, cysts, and hysterectomies with quick recovery.",
    icon: "Microscope",
    color: "#2FB2EA",
    category: "Advanced Surgery",
    doctorLead: "Dr. Subham Agarwal",
    whatsappUrl: WHATSAPP_SUBHAM,
    details: ["Laparoscopic Hysterectomy", "Ovarian Cystectomy", "Myomectomy (Fibroid Removal)"]
  },
  {
    slug: "endometriosis",
    title: "Endometriosis & Pelvic Pain",
    shortDesc: "Targeted diagnosis and medical or surgical relief for severe period pain and adenomyosis.",
    icon: "ShieldAlert",
    color: "#2FB2EA",
    category: "Advanced Surgery",
    doctorLead: "Dr. Subham Agarwal",
    whatsappUrl: WHATSAPP_SUBHAM,
    details: ["Severe Dysmenorrhea Care", "Medical Pain Management", "Laparoscopic Excision"]
  },
  {
    slug: "menopause-care",
    title: "Menopause & Perimenopause Care",
    shortDesc: "Empathetic guidance through hormonal transitions, bone density, and wellness past 40.",
    icon: "Heart",
    color: "#FB5A7C",
    category: "Well-Woman",
    doctorLead: "Dr. Ruchika Agarwal",
    whatsappUrl: WHATSAPP_RUCHIKA,
    details: ["Hot Flashes & Mood Balance", "Bone Density & Osteoporosis", "Preventive Health Screenings"]
  },
  {
    slug: "second-opinion",
    title: "Second Opinion on Surgery",
    shortDesc: "Facing a recommendation for hysterectomy or high-risk delivery? Get an unbiased expert surgical review.",
    icon: "Sparkles",
    color: "#0B75A1",
    category: "Advanced Surgery",
    doctorLead: "Both Specialists",
    whatsappUrl: WHATSAPP_SUBHAM,
    details: ["Review of Prior Scans & Reports", "Minimally Invasive Alternatives", "Personalized Treatment Plan"]
  },
];
