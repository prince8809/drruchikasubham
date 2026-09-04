import { INSTAGRAM_URL } from "@/lib/constants";

export interface SocialPost {
  id: string;
  title: string;
  category: string;
  caption: string;
  instagramUrl: string;
  reelId: string;
  likes?: string;
  tagline?: string;
}

export const socialPosts: SocialPost[] = [
  {
    id: "reel-1",
    title: "A Healthy Mother is Just as Important as a Healthy Baby",
    category: "Maternal Wellness",
    caption: "Listen. Support. Reassure. Never dismiss her struggles. 🩷 — Dr. Subham Agarwal & Dr. Ruchika Agarwal",
    instagramUrl: "https://www.instagram.com/reel/Dc2l3etREc9/",
    reelId: "Dc2l3etREc9",
    likes: "Featured",
    tagline: "Empathetic Maternity Care",
  },
  {
    id: "reel-2",
    title: "Early Fetal Heartbeat & Ultrasound Milestones",
    category: "Ultrasound & Fetal Care",
    caption: "When the heartbeat is detectable on ultrasound, rapid embryonic brain, limb, and skeletal development begins.",
    instagramUrl: "https://www.instagram.com/reel/Dc0osbQTJm-/",
    reelId: "Dc0osbQTJm-",
    likes: "Milestone",
    tagline: "Antenatal Scan Guidance",
  },
  {
    id: "reel-3",
    title: "Pregnancy is About Fatherhood Too: The Partner's Journey",
    category: "The Father's Corner",
    caption: "Pregnancy changes a woman's body, but it changes a man's heart too. When a baby is born, a father is born too. 👶❤️",
    instagramUrl: "https://www.instagram.com/reel/Dc0EIuHxWDt/",
    reelId: "Dc0EIuHxWDt",
    likes: "Partner Support",
    tagline: "Dr. Subham's Guidance for Dads",
  },
  {
    id: "reel-4",
    title: "Epidural-Assisted Vaginal Delivery: Pain Relief in Labor",
    category: "Normal Delivery & Labor",
    caption: "How epidural analgesia reduces labour pain while keeping the mother awake, comfortable, and active during delivery.",
    instagramUrl: "https://www.instagram.com/reel/Dcx7-VnzziB/",
    reelId: "Dcx7-VnzziB",
    likes: "180+ Likes",
    tagline: "Pain-Relieved Birthing",
  }
];
