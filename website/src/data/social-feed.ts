import { INSTAGRAM_URL } from "@/lib/constants";

export interface SocialPost {
  id: string;
  title: string;
  category: string;
  // Full Instagram Reel / Post URL
  instagramUrl: string;
  // Instagram shortcode / Reel ID (e.g. C57A8gLrpK9)
  reelId: string;
  duration?: string;
  views?: string;
}

// NOTE: To add or update reels from @drruchikasubham, simply paste the full Instagram Reel URL 
// (e.g., https://www.instagram.com/reel/YOUR_REEL_ID/) or just the reel ID below!
export const socialPosts: SocialPost[] = [
  {
    id: "reel-1",
    title: "Normal Delivery vs Cesarean: Choosing the Safest Path for You",
    category: "Pregnancy & Delivery",
    instagramUrl: "https://www.instagram.com/reel/C57A8gLrpK9/",
    reelId: "C57A8gLrpK9",
    duration: "1:15",
    views: "12.4K",
  },
  {
    id: "reel-2",
    title: "PCOS Diet & Lifestyle: 5 Myths That Delay Hormonal Recovery",
    category: "PCOD / PCOS Care",
    instagramUrl: "https://www.instagram.com/reel/C-vK-XzN7tL/",
    reelId: "C-vK-XzN7tL",
    duration: "0:58",
    views: "28.1K",
  },
  {
    id: "reel-3",
    title: "The Father's Role in Labor: How Partners Can Support in Delivery",
    category: "The Father's Corner",
    instagramUrl: "https://www.instagram.com/reel/C57A8gLrpK9/",
    reelId: "C57A8gLrpK9",
    duration: "1:42",
    views: "19.5K",
  },
  {
    id: "reel-4",
    title: "When is Period Pain NOT Normal? Signs of Endometriosis",
    category: "Gynae Health",
    instagramUrl: "https://www.instagram.com/reel/C-vK-XzN7tL/",
    reelId: "C-vK-XzN7tL",
    duration: "1:05",
    views: "15.8K",
  }
];
