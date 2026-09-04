export interface PatientReview {
  id: string;
  name: string;
  location: string;
  doctor: "Dr. Subham Agarwal" | "Dr. Ruchika Agarwal" | "Both Doctors (Joint Care)";
  treatment: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}

export const patientReviews: PatientReview[] = [
  {
    id: "rev-1",
    name: "First-Time Parents",
    location: "Sevoke Road, Siliguri",
    doctor: "Both Doctors (Joint Care)",
    treatment: "Normal Vaginal Delivery",
    rating: 5,
    comment:
      "We were anxious first-time parents. Dr. Ruchika guided my antenatal care with extreme warmth, while Dr. Subham's calm confidence during labor helped me deliver normally without fear. Best couple doctor team in North Bengal!",
    date: "2 months ago",
    verified: true,
  },
  {
    id: "rev-2",
    name: "Mother of Twins (High-Risk)",
    location: "Jalpaiguri",
    doctor: "Dr. Subham Agarwal",
    treatment: "High-Risk Pregnancy Care",
    rating: 5,
    comment:
      "Had gestational hypertension and previous miscarriage history. Dr. Subham at Manipal Hospital monitored every scan meticulously. Delivered a healthy baby via planned, safe cesarean.",
    date: "1 month ago",
    verified: true,
  },
  {
    id: "rev-3",
    name: "Patient (PCOS & Fertility)",
    location: "Pradhan Nagar, Siliguri",
    doctor: "Dr. Ruchika Agarwal",
    treatment: "PCOD & Natural Conception",
    rating: 5,
    comment:
      "Struggled with irregular periods and PCOS for 3 years. Dr. Ruchika at Zivah Centre never rushed to heavy treatments — she regulated my hormones step-by-step and we conceived naturally within 6 months!",
    date: "3 weeks ago",
    verified: true,
  },
  {
    id: "rev-4",
    name: "Patient (Keyhole Surgery)",
    location: "Hakimpara, Siliguri",
    doctor: "Dr. Subham Agarwal",
    treatment: "Laparoscopic Keyhole Surgery",
    rating: 5,
    comment:
      "Underwent keyhole surgery for a large ovarian cyst at Manipal Hospital. Minimal incisions, virtually no postoperative pain, and I was discharged the next day. Dr. Subham's surgical skills are unmatched.",
    date: "2 months ago",
    verified: true,
  },
  {
    id: "rev-5",
    name: "Expecting Couple",
    location: "Gangtok, Sikkim",
    doctor: "Both Doctors (Joint Care)",
    treatment: "Pre-Conception & Joint Care",
    rating: 5,
    comment:
      "Traveled from Gangtok for a joint consultation. Having both a female gynaecologist and male specialist in the same practice made both me and my husband feel equally heard and supported.",
    date: "Just recently",
    verified: true,
  },
];
