import { INSTAGRAM_URL } from "@/lib/constants";

export interface SocialPost {
  id: string;
  title: string;
  category: string;
  url: string;
  duration?: string;
  views?: string;
  // Direct video URL for smooth in-page HTML5 playback (zero external tracking)
  videoUrl?: string;
  // Or Instagram Post / Reel ID for native Instagram in-page embed
  instagramId?: string;
}

export const socialPosts: SocialPost[] = [
  {
    id: "reel-1",
    title: "Normal Delivery vs Cesarean: Choosing the Safest Path for You",
    category: "Pregnancy & Delivery",
    url: INSTAGRAM_URL,
    duration: "1:15",
    views: "12.4K",
    // Sample high-quality educational maternity/care video for immediate in-page preview
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  },
  {
    id: "reel-2",
    title: "PCOS Diet & Lifestyle: 5 Myths That Delay Hormonal Recovery",
    category: "PCOD / PCOS Care",
    url: INSTAGRAM_URL,
    duration: "0:58",
    views: "28.1K",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  },
  {
    id: "reel-3",
    title: "The Father's Role in Labor: How Partners Can Support in Delivery",
    category: "The Father's Corner",
    url: INSTAGRAM_URL,
    duration: "1:42",
    views: "19.5K",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  },
  {
    id: "reel-4",
    title: "When is Period Pain NOT Normal? Signs of Endometriosis",
    category: "Gynae Health",
    url: INSTAGRAM_URL,
    duration: "1:05",
    views: "15.8K",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4",
  }
];
