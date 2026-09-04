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
  {
    id: "rev-6",
    name: "Mother & Baby",
    location: "Matigara, Siliguri",
    doctor: "Dr. Ruchika Agarwal",
    treatment: "Normal Delivery & Antenatal Care",
    rating: 5,
    comment:
      "Dr. Ruchika's gentle, reassuring presence throughout my 9 months made all the difference. She encouraged normal delivery exercises and patiently answered all my midnight worries. Delivered a healthy baby boy naturally!",
    date: "1 month ago",
    verified: true,
  },
  {
    id: "rev-7",
    name: "Surgical Patient",
    location: "Khalpara, Siliguri",
    doctor: "Dr. Subham Agarwal",
    treatment: "Total Laparoscopic Hysterectomy",
    rating: 5,
    comment:
      "I had persistent severe bleeding and fibroids. Dr. Subham performed a laparoscopic hysterectomy at Manipal Hospital. He explained everything clearly to my family. Walked the same evening and experienced painless recovery!",
    date: "2 months ago",
    verified: true,
  },
  {
    id: "rev-8",
    name: "Gynaec Patient",
    location: "Darjeeling",
    doctor: "Dr. Ruchika Agarwal",
    treatment: "Endometriosis & Chronic Pain",
    rating: 5,
    comment:
      "Suffered from severe pelvic pain for years. Dr. Ruchika listened patiently, diagnosed my endometriosis, and started tailored medical therapy. My pain is completely managed now. Truly compassionate doctor.",
    date: "3 weeks ago",
    verified: true,
  },
  {
    id: "rev-9",
    name: "High-Risk Delivery Patient",
    location: "Bagdogra",
    doctor: "Dr. Subham Agarwal",
    treatment: "Cesarean Delivery with Fibroids",
    rating: 5,
    comment:
      "Had a high-risk pregnancy complicated with uterine fibroids. Dr. Subham handled the delivery at Manipal Hospital with supreme surgical precision. Baby and mother both came home safe and healthy!",
    date: "Just recently",
    verified: true,
  },
];
