export interface Stat {
  value: string;
  label: string;
  icon: string;
  color: string;
}

export const stats: Stat[] = [
  {
    value: "1000+",
    label: "Normal Deliveries",
    icon: "Baby",
    color: "#FB5A7C",
  },
  {
    value: "1000+",
    label: "Cesarean Sections (LUCS)",
    icon: "Activity",
    color: "#2FB2EA",
  },
  {
    value: "100+",
    label: "Hysterectomies",
    icon: "HeartPulse",
    color: "#FB5A7C",
  },
  {
    value: "100+",
    label: "Gynaecological Procedures",
    icon: "Stethoscope",
    color: "#2FB2EA",
  },
  {
    value: "100+",
    label: "Minimally Invasive Surgeries",
    icon: "Microscope",
    color: "#FB5A7C",
  },
  {
    value: "6+",
    label: "Years of Experience",
    icon: "Award",
    color: "#2FB2EA",
  },
];
