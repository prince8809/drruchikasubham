import Image from "next/image";
import { Play, MessageCircle, Sparkles, ExternalLink } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/shared/Icons";
import { socialPosts } from "@/data/social-feed";
import { INSTAGRAM_URL, FACEBOOK_URL, WHATSAPP_SUBHAM } from "@/lib/constants";

export default function SocialHub() {
  return (
    <section id="social-hub" className="py-20 bg-gradient-to-b from-[#F4FAFD] via-white to-[#F4FAFD] border-t border-[#F1E5E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 bg-[#FFE9ED] text-[#C4274C] px-3 py-1 rounded-full text-xs font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#FB5A7C]" />
              <span>Patient Education &amp; Daily Guidance</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#1A2229]">
              Watch Helpful Reels &amp; Medical Tips
            </h2>
            <p className="text-sm sm:text-base text-[#475569] mt-2 max-w-xl">
              From normal delivery preparation to PCOS lifestyle guidance, explore our short educational videos on Instagram &amp; Facebook.
            </p>
          </div>

          {/* Social Follow Actions */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white px-5 py-2.5 rounded-full text-xs font-bold shadow-sm hover:opacity-95 hover:scale-105 transition-all"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>@drruchikasubham</span>
            </a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#1877F2] text-white px-5 py-2.5 rounded-full text-xs font-bold shadow-sm hover:opacity-95 hover:scale-105 transition-all"
            >
              <FacebookIcon className="w-4 h-4" />
              <span>Facebook</span>
            </a>
          </div>
        </div>

        {/* 4 Click-to-Play Video Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialPosts.map((post) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:border-pink-200 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-[9/12] bg-gradient-to-tr from-[#FFF5F7] via-[#F2FAFE] to-[#FFE9ED] flex flex-col justify-between p-5 overflow-hidden">
                {/* Top Badge */}
                <div className="flex justify-between items-center z-10">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-xs text-[#1A2229] px-2.5 py-1 rounded-full shadow-2xs">
                    {post.category}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-[#E1306C] shadow-2xs">
                    <InstagramIcon className="w-4 h-4" />
                  </div>
                </div>

                {/* Center Artwork & Play Button */}
                <div className="flex flex-col items-center justify-center my-auto z-10">
                  <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#FB5A7C] shadow-lg group-hover:scale-115 group-hover:bg-[#FB5A7C] group-hover:text-white transition-all duration-300">
                    <Play className="w-7 h-7 fill-current ml-0.5" />
                  </div>
                  <span className="mt-3 text-[11px] font-bold text-gray-700 bg-white/80 backdrop-blur-xs px-2.5 py-0.5 rounded-full shadow-2xs">
                    Play on Instagram
                  </span>
                </div>

                {/* Bottom Meta */}
                <div className="flex justify-between items-center z-10 text-[11px] font-medium text-gray-600 bg-white/80 backdrop-blur-xs px-3 py-1 rounded-xl">
                  <span>Reel &bull; {post.duration}</span>
                  <span>{post.views} views</span>
                </div>

                {/* Subtle Brand Logo Watermark */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none group-hover:opacity-15 transition-opacity">
                  <Image
                    src="/images/brand/logo.png"
                    alt="Brand emblem watermark"
                    width={180}
                    height={180}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Title & Click-to-Play Action */}
              <div className="p-4 space-y-3 bg-white">
                <h4 className="font-bold text-sm text-[#1A2229] group-hover:text-[#FB5A7C] transition-colors line-clamp-2 leading-snug">
                  {post.title}
                </h4>

                <div className="flex items-center justify-between text-xs font-semibold text-[#0B75A1] pt-2 border-t border-gray-50">
                  <span className="flex items-center gap-1">
                    <ExternalLink className="w-3.5 h-3.5" />
                    Watch on Instagram
                  </span>
                  <span className="text-gray-400 group-hover:translate-x-1 transition-transform">&rarr;</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Have Questions Footer Callout */}
        <div className="mt-12 text-center bg-white border border-[#FFCCD6] rounded-2xl p-6 shadow-sm max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-bold text-sm text-[#1A2229]">Have questions on any of these topics?</h4>
            <p className="text-xs text-[#475569] mt-0.5">Send a quick WhatsApp text to discuss your symptoms directly.</p>
          </div>
          <a
            href={WHATSAPP_SUBHAM}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-xs py-2.5 px-5 shrink-0 shadow-sm"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
