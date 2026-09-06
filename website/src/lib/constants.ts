export const WHATSAPP_SUBHAM = "https://wa.me/919883368764?text=Hey%20I%20want%20to%20Book%20an%20appointment";
export const WHATSAPP_RUCHIKA = "https://wa.me/917872969660?text=Hey%20I%20want%20to%20Book%20an%20appointment";
export const PHONE_SUBHAM = "+91-9883368764";
export const PHONE_RUCHIKA = "+91-7872969660";
export const INSTAGRAM_URL = "https://www.instagram.com/drruchikasubham";
export const INSTAGRAM_HANDLE = "@drruchikasubham";
export const FACEBOOK_URL = "https://www.facebook.com/drruchikasubham";
export const ADDRESS_MANIPAL = "Manipal Hospital, Meghnad Saha Sarani, Ward 2, Pradhan Nagar, Siliguri, West Bengal 734003";
export const ADDRESS_ZIVAH = "Zivah Fertility & Women's Wellness Centre, 2nd Floor, The Crest, Meghnad Saha Sarani, Opposite Deokta Sangha, Pradhan Nagar, Siliguri - 734003";
export const WHATSAPP_JOINT = "https://wa.me/919883368764?text=Hey%2C%20I%20would%20like%20to%20inquire%20about%20a%20Joint%20Consultation%20with%20both%20Dr.%20Ruchika%20Agarwal%20%26%20Dr.%20Subham%20Agarwal";

export const PRIMARY_CONCERN_OPTIONS = [
  "Pregnancy & Antenatal Checkup",
  "Normal / C-Section Delivery Planning",
  "High-Risk Pregnancy Consultation",
  "Lower abdominal pain",
  "Abnormal vaginal discharge",
  "Urinary problems",
  "PCOD / PCOS & Irregular Periods",
  "Fertility & IVF Planning",
  "Advanced Laparoscopic Surgery (Fibroid, Cyst, etc.)",
  "Second Opinion on Surgery / Delivery",
  "Joint Couple Consultation (Pre-conception / Birthing)",
  "Menopause & General Well-Woman Visit",
] as const;

// Single Source of Truth for Brand Colors (Forensically extracted from website logo.png)
export const BRAND_COLORS = {
  // Dr. Ruchika Agarwal / Mother / Maternal Blossom Rose
  ruchika: {
    primary: "#F57B94",
    hover: "#E6627E",
    dark: "#C73859",
    light: "#FFE4E8",
    wash: "#FFF0F3",
    border: "#FFD3DC",
    gradient: "from-[#F57B94] to-[#E6627E]",
  },
  // Dr. Subham Agarwal / Partner / Surgical Azure Blue
  subham: {
    primary: "#4384C6",
    hover: "#3271B2",
    dark: "#1E518A",
    light: "#E1EEFE",
    wash: "#EBF4FC",
    border: "#BCD7F5",
    gradient: "from-[#4384C6] to-[#2E6EA8]",
  },
} as const;

