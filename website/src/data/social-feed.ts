export interface SocialPost {
  id: string;
  title: string;
  category: string;
  caption: string;
  instagramUrl: string;
  reelId: string;
  videoSrc: string;
  thumbnailSrc: string;
  likes?: string;
  tagline?: string;
  doctorId?: "ruchika" | "subham" | "joint";
  doctorName?: string;
  authorHandle?: string;
}

export const socialPosts: SocialPost[] = [
  {
    id: "reel-1",
    title: "A Healthy Mother is Just as Important as a Healthy Baby",
    category: "Maternal Wellness",
    caption: "Listen. Support. Reassure. Never dismiss her struggles. 🩷 — Dr. Subham Agarwal & Dr. Ruchika Agarwal",
    instagramUrl: "https://www.instagram.com/reel/Dc2l3etREc9/",
    reelId: "Dc2l3etREc9",
    videoSrc: "/videos/reel-1.mp4",
    thumbnailSrc: "/images/reels/reel-1.jpg",
    likes: "Featured",
    tagline: "Empathetic Maternity Care",
    doctorId: "joint",
    doctorName: "Dr. Ruchika & Dr. Subham Agarwal",
    authorHandle: "@drruchikasubham",
  },
  {
    id: "reel-ruchika-1",
    title: "Missed Period: Pregnancy Sign or Your Body Trying to Tell You Something?",
    category: "Menstrual Health & Guidance",
    caption: "Missed period?? Is it pregnancy or your body trying to tell you something?? Know your body and its signs a little better with me.",
    instagramUrl: "https://www.instagram.com/reel/Da8Yuf_zsHx/",
    reelId: "Da8Yuf_zsHx",
    videoSrc: "/videos/dr-ruchika-missed-period.mp4",
    thumbnailSrc: "/images/reels/dr-ruchika-missed-period.jpg",
    likes: "Must Watch",
    tagline: "Dr. Ruchika's Clinical Guide",
    doctorId: "ruchika",
    doctorName: "Dr. Ruchika Agarwal",
    authorHandle: "@dr.rhea_ag21",
  },
  {
    id: "reel-3",
    title: "Pregnancy is About Fatherhood Too: The Partner's Journey",
    category: "The Father's Corner",
    caption: "Pregnancy changes a woman's body, but it changes a man's heart too. When a baby is born, a father is born too. 👶❤️",
    instagramUrl: "https://www.instagram.com/reel/Dc0EIuHxWDt/",
    reelId: "Dc0EIuHxWDt",
    videoSrc: "/videos/reel-3.mp4",
    thumbnailSrc: "/images/reels/reel-3.jpg",
    likes: "Partner Support",
    tagline: "Dr. Subham's Guidance for Dads",
    doctorId: "subham",
    doctorName: "Dr. Subham Agarwal",
    authorHandle: "@drruchikasubham",
  },
  {
    id: "reel-ruchika-2",
    title: "Vaginal Health & Preventive Intimate Wellness",
    category: "Well-Woman Health",
    caption: "Let’s talk about vaginal health. Know your body a lil’ better with me — practical, stigma-free gynaecological care.",
    instagramUrl: "https://www.instagram.com/reel/DbgLwWRSBse/",
    reelId: "DbgLwWRSBse",
    videoSrc: "/videos/dr-ruchika-vaginal-health.mp4",
    thumbnailSrc: "/images/reels/dr-ruchika-vaginal-health.jpg",
    likes: "Clinical Tips",
    tagline: "Preventive Gynaecology",
    doctorId: "ruchika",
    doctorName: "Dr. Ruchika Agarwal",
    authorHandle: "@dr.rhea_ag21",
  },
  {
    id: "reel-2",
    title: "Early Fetal Heartbeat & Ultrasound Milestones",
    category: "Ultrasound & Fetal Care",
    caption: "When the heartbeat is detectable on ultrasound, rapid embryonic brain, limb, and skeletal development begins.",
    instagramUrl: "https://www.instagram.com/reel/Dc0osbQTJm-/",
    reelId: "Dc0osbQTJm-",
    videoSrc: "/videos/reel-2.mp4",
    thumbnailSrc: "/images/reels/reel-2.jpg",
    likes: "Milestone",
    tagline: "Antenatal Scan Guidance",
    doctorId: "ruchika",
    doctorName: "Dr. Ruchika Agarwal",
    authorHandle: "@drruchikasubham",
  },
  {
    id: "reel-4",
    title: "Epidural-Assisted Vaginal Delivery: Pain Relief in Labor",
    category: "Normal Delivery & Labor",
    caption: "How epidural analgesia reduces labour pain while keeping the mother awake, comfortable, and active during delivery.",
    instagramUrl: "https://www.instagram.com/reel/Dcx7-VnzziB/",
    reelId: "Dcx7-VnzziB",
    videoSrc: "/videos/reel-4.mp4",
    thumbnailSrc: "/images/reels/reel-4.jpg",
    likes: "180+ Likes",
    tagline: "Pain-Relieved Birthing",
    doctorId: "subham",
    doctorName: "Dr. Subham Agarwal",
    authorHandle: "@drruchikasubham",
  },
  {
    id: "reel-subham-spinal",
    title: "Backache After Spinal Anaesthesia in Pregnancy: Myth vs Fact",
    category: "Obstetric Anaesthesia",
    caption: "Does spinal anaesthesia during delivery cause permanent backache? Discover why temporary soreness happens and what truly causes postpartum back strain.",
    instagramUrl: "https://www.instagram.com/reel/DLu-b0WTN_9/",
    reelId: "DLu-b0WTN_9",
    videoSrc: "/videos/dr-subham-spinal-anaesthesia.mp4",
    thumbnailSrc: "/images/reels/dr-subham-spinal-anaesthesia.jpg",
    likes: "Myth Buster",
    tagline: "Delivery Myths Debunked",
    doctorId: "subham",
    doctorName: "Dr. Subham Agarwal",
    authorHandle: "@drruchikasubham",
  },
  {
    id: "reel-subham-hookah",
    title: "Flavoured Hookah & Smoke Risks During Breastfeeding",
    category: "Safe Motherhood & Lactation",
    caption: "Even nicotine-free or herbal hookahs produce toxic carbon monoxide and heavy metals that pass into breast milk. Essential guidance for nursing mothers.",
    instagramUrl: "https://www.instagram.com/reel/DL6aXLDxnDt/",
    reelId: "DL6aXLDxnDt",
    videoSrc: "/videos/dr-subham-hookah-breastfeeding.mp4",
    thumbnailSrc: "/images/reels/dr-subham-hookah-breastfeeding.jpg",
    likes: "Doctor's Advice",
    tagline: "Postnatal Wellness",
    doctorId: "subham",
    doctorName: "Dr. Subham Agarwal",
    authorHandle: "@drruchikasubham",
  },
  {
    id: "reel-subham-alcohol",
    title: "Alcohol Safety & Infant Health During Breastfeeding",
    category: "Postnatal Care & Lactation",
    caption: "Alcohol passes directly into breast milk, impacting infant sleep, digestion, and motor development. Dr. Subham explains safe intervals and feeding precautions.",
    instagramUrl: "https://www.instagram.com/reel/DL6XmlnzyE1/",
    reelId: "DL6XmlnzyE1",
    videoSrc: "/videos/dr-subham-alcohol-breastfeeding.mp4",
    thumbnailSrc: "/images/reels/dr-subham-alcohol-breastfeeding.jpg",
    likes: "Clinical Tips",
    tagline: "Infant Safety Guide",
    doctorId: "subham",
    doctorName: "Dr. Subham Agarwal",
    authorHandle: "@drruchikasubham",
  }
];

export function getDoctorPosts(doctorId: "ruchika" | "subham") {
  const specific = socialPosts.filter((post) => post.doctorId === doctorId);
  const joint = socialPosts.filter((post) => post.doctorId === "joint");
  return [...specific, ...joint];
}
