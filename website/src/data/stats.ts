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
    color: "#F57B94",
  },
  {
    value: "1000+",
    label: "Cesarean Sections (LUCS)",
    icon: "Activity",
    color: "#F57B94",
  },
  {
    value: "100+",
    label: "Hysterectomies",
    icon: "HeartPulse",
    color: "#F57B94",
  },
  {
    value: "100+",
    label: "Gynaecological Procedures",
    icon: "Stethoscope",
    color: "#F57B94",
  },
  {
    value: "100+",
    label: "Minimally Invasive Surgeries",
    icon: "Microscope",
    color: "#F57B94",
  },
  {
    value: "6+",
    label: "Years of Experience",
    icon: "Award",
    color: "#F57B94",
  },
];
