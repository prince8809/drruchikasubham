import { WHATSAPP_SUBHAM, WHATSAPP_RUCHIKA, PHONE_SUBHAM, PHONE_RUCHIKA } from "@/lib/constants";

export interface Doctor {
  id: string;
  name: string;
  degrees: string;
  role: string;
  bio: string;
  photo: string;
  whatsapp: string;
  phone: string;
  hospital: string;
  hospitalShort: string;
  timings: string;
  languages: string[];
  specialties: string[];
  accentColor: string;
}

export const doctors: Doctor[] = [
  {
    id: "subham",
    name: "Dr. Subham Agarwal",
    degrees: "M.B.B.S, M.S, F.M.A.S, F.I.A.G",
    role: "Consultant Obstetrician, Gynaecologist & Advanced Laparoscopic Surgeon",
    bio: "Specialising in high-risk pregnancies, minimally invasive laparoscopic surgery, and complex gynaecological care. Dr. Subham brings surgical precision and reassuring calm to every patient's birthing and surgical journey.",
    photo: "/images/doctors/dr-subham-headshot.png",
    whatsapp: WHATSAPP_SUBHAM,
    phone: PHONE_SUBHAM,
    hospital: "Manipal Hospital, Meghnad Saha Sarani, Ward 2, Pradhan Nagar, Siliguri, West Bengal 734003",
    hospitalShort: "Manipal Hospital, Siliguri",
    timings: "Mon – Fri: 10:00 AM – 6:00 PM",
    languages: ["English", "Hindi", "Bengali", "Nepali"],
    specialties: [
      "High-Risk Pregnancy",
      "Normal & Cesarean Delivery",
      "Advanced Laparoscopic Surgery",
      "Hysterectomy & Fibroids",
      "Endometriosis Care",
      "Father's Support & Antenatal Guidance"
    ],
    accentColor: "#2FB2EA",
  },
  {
    id: "ruchika",
    name: "Dr. Ruchika Agarwal",
    degrees: "M.B.B.S, M.S",
    role: "Consultant Obstetrician, Gynaecologist & Fertility Specialist",
    bio: "Dedicated to compassionate women's wellness, fertility management, and respectful maternity care. Dr. Ruchika provides empathetic support for menstrual issues, PCOS, IVF counseling, and natural birth planning.",
    photo: "/images/doctors/dr-ruchika-headshot.jpg",
    whatsapp: WHATSAPP_RUCHIKA,
    phone: PHONE_RUCHIKA,
    hospital: "Zivah Fertility & Women's Wellness Centre, 2nd Floor, The Crest, Meghnad Saha Sarani, Siliguri - 734003",
    hospitalShort: "Zivah Fertility & Wellness Centre",
    timings: "Mon – Fri: 10:00 AM – 2:00 PM",
    languages: ["English", "Hindi", "Bengali", "Nepali"],
    specialties: [
      "Fertility Evaluation & IVF",
      "PCOD / PCOS Holistic Care",
      "Normal Vaginal Delivery",
      "Adolescent Gynaecology",
      "Antenatal Nutrition & Wellness",
      "Menopause Management"
    ],
    accentColor: "#FB5A7C",
  },
];
