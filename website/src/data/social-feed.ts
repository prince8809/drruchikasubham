import { INSTAGRAM_URL } from "@/lib/constants";

export interface SocialPost {
  id: string;
  title: string;
  category: string;
  instagramUrl: string;
  reelId: string;
  duration?: string;
  views?: string;
}

export const socialPosts: SocialPost[] = [
  {
    id: "reel-1",
    title: "Clinical Care & Patient Guidance by Dr. Ruchika & Dr. Subham",
    category: "Pregnancy & Women's Care",
    instagramUrl: "https://www.instagram.com/reel/Dc2l3etREc9/",
    reelId: "Dc2l3etREc9",
    duration: "Reel",
    views: "Featured",
  },
  {
    id: "reel-2",
    title: "Normal Delivery vs Cesarean: What Expectant Parents Should Know",
    category: "Delivery Preparation",
    instagramUrl: "https://www.instagram.com/reel/Dc2l3etREc9/",
    reelId: "Dc2l3etREc9",
    duration: "Reel",
    views: "Recent",
  },
  {
    id: "reel-3",
    title: "The Father's Role in Labor: How Partners Can Support in Delivery",
    category: "The Father's Corner",
    instagramUrl: "https://www.instagram.com/reel/Dc2l3etREc9/",
    reelId: "Dc2l3etREc9",
    duration: "Reel",
    views: "Guidance",
  },
  {
    id: "reel-4",
    title: "PCOS & Hormonal Health: Practical Steps for Cycle Recovery",
    category: "PCOS & Fertility",
    instagramUrl: "https://www.instagram.com/reel/Dc2l3etREc9/",
    reelId: "Dc2l3etREc9",
    duration: "Reel",
    views: "Medical Advice",
  }
];
