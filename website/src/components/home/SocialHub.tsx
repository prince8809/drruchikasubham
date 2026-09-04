"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Play,
  X,
  Maximize2,
  ExternalLink,
  MessageCircle,
  Sparkles,
  RotateCcw,
  RefreshCw
} from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/shared/Icons";
import { socialPosts, SocialPost } from "@/data/social-feed";
import { INSTAGRAM_URL, FACEBOOK_URL, WHATSAPP_SUBHAM } from "@/lib/constants";

// Helper to extract clean Reel ID from URL or ID string
function getReelId(urlOrId: string): string {
  if (!urlOrId) return "";
  const match = urlOrId.match(/\/(?:reel|p)\/([A-Za-z0-9_-]+)/);
  if (match && match[1]) return match[1];
  return urlOrId.replace(/[^A-Za-z0-9_-]/g, "");
}

export default function SocialHub() {
  // Currently playing card ID
  const [activeCardId, setActiveCardId] = useState<string | null>(null);
  // Theater modal video
  const [theaterPost, setTheaterPost] = useState<SocialPost | null>(null);

  const handlePlayCard = (postId: string) => {
    setActiveCardId(postId);
  };

  const handleStopCard = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveCardId(null);
  };

  const handleOpenTheater = (post: SocialPost, e: React.MouseEvent) => {
    e.stopPropagation();
    setTheaterPost(post);
  };

  return (
    <section id="social-hub" className="py-20 bg-gradient-to-b from-[#F4FAFD] via-white to-[#F4FAFD] border-t border-[#F1E5E8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 bg-[#FFE9ED] text-[#C4274C] px-3 py-1 rounded-full text-xs font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#FB5A7C]" />
              <span>Patient Education &bull; Live Instagram Reels</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#1A2229]">
              Watch Helpful Reels &amp; Medical Tips
            </h2>
            <p className="text-sm sm:text-base text-[#475569] mt-2 max-w-xl">
              Play actual Instagram Reels directly on this page on demand, or follow along on Instagram and Facebook.
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

        {/* 4 Instagram Reel Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialPosts.map((post) => {
            const isPlaying = activeCardId === post.id;
            const reelCode = getReelId(post.reelId || post.instagramUrl);

            return (
              <div
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:border-pink-200 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Media Container: Thumbnail vs Native Instagram Embed Player */}
                <div className="relative aspect-[9/14] bg-neutral-900 overflow-hidden flex flex-col justify-between">
                  
                  {isPlaying ? (
                    /* NATIVE INSTAGRAM REEL EMBED PLAYER (Loads actual Reel from Instagram) */
                    <div className="relative w-full h-full bg-white flex flex-col">
                      
                      {/* Top Action Bar */}
                      <div className="absolute top-0 inset-x-0 z-30 p-2.5 bg-gradient-to-b from-black/80 via-black/40 to-transparent flex items-center justify-between text-white">
                        <div className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-400 bg-black/60 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                          <span>Instagram Reel</span>
                        </div>

                        <div className="flex items-center gap-1.5">
                          {/* Theater Expand */}
                          <button
                            onClick={(e) => handleOpenTheater(post, e)}
                            className="p-1 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors"
                            title="Expand to Theater View"
                            aria-label="Expand video"
                          >
                            <Maximize2 className="w-3.5 h-3.5" />
                          </button>

                          {/* Close Player */}
                          <button
                            onClick={handleStopCard}
                            className="p-1 rounded-full bg-red-600/90 hover:bg-red-600 text-white transition-colors"
                            title="Close Player"
                            aria-label="Stop video"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      {/* Official Instagram Reel Embed Iframe */}
                      <iframe
                        src={`https://www.instagram.com/reel/${reelCode}/embed/`}
                        className="w-full h-full border-0 bg-white"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        allowFullScreen
                        scrolling="no"
                      />
                    </div>
                  ) : (
                    /* FACADE CARD (0KB Instagram load until user clicks) */
                    <div
                      onClick={() => handlePlayCard(post.id)}
                      className="relative w-full h-full bg-gradient-to-tr from-[#FFF5F7] via-[#F2FAFE] to-[#FFE9ED] flex flex-col justify-between p-5 cursor-pointer group select-none"
                    >
                      {/* Top Badges */}
                      <div className="flex justify-between items-center z-10">
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-xs text-[#1A2229] px-2.5 py-1 rounded-full shadow-2xs border border-gray-100">
                          {post.category}
                        </span>
                        <div className="w-7 h-7 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-[#E1306C] shadow-2xs">
                          <InstagramIcon className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Center Instagram Play Button with Pulse */}
                      <div className="flex flex-col items-center justify-center my-auto z-10 text-center">
                        <div className="relative">
                          <span className="absolute -inset-2.5 rounded-full bg-[#FB5A7C]/25 animate-ping"></span>
                          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-[#FB5A7C] shadow-xl group-hover:scale-110 group-hover:bg-[#FB5A7C] group-hover:text-white transition-all duration-300 relative border border-pink-100">
                            <Play className="w-7 h-7 fill-current ml-0.5" />
                          </div>
                        </div>

                        <span className="mt-3 text-xs font-bold text-[#1A2229] bg-white/95 backdrop-blur-xs px-3.5 py-1.5 rounded-full shadow-sm border border-pink-100 group-hover:bg-[#FB5A7C] group-hover:text-white group-hover:border-transparent transition-all">
                          ▶ Play Instagram Reel
                        </span>
                      </div>

                      {/* Bottom Meta */}
                      <div className="flex justify-between items-center z-10 text-[11px] font-medium text-gray-600 bg-white/90 backdrop-blur-xs px-3 py-1 rounded-xl border border-gray-100">
                        <span>{post.duration || "Reel"}</span>
                        <span>{post.views || "10K+ views"}</span>
                      </div>

                      {/* Watermark Logo */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none group-hover:opacity-15 transition-opacity">
                        <Image
                          src="/images/brand/logo.png"
                          alt="Brand Watermark"
                          width={160}
                          height={160}
                          className="object-contain"
                        />
                      </div>
                    </div>
                  )}

                </div>

                {/* Card Info & Links */}
                <div className="p-4 space-y-3 bg-white">
                  <h4 className="font-bold text-sm text-[#1A2229] leading-snug line-clamp-2">
                    {post.title}
                  </h4>

                  <div className="flex items-center justify-between text-xs pt-2 border-t border-gray-100">
                    {/* Play In-Page Toggle */}
                    <button
                      onClick={() => handlePlayCard(post.id)}
                      className="font-bold text-[#FB5A7C] hover:text-[#E54366] flex items-center gap-1 transition-colors"
                    >
                      {isPlaying ? (
                        <>
                          <RefreshCw className="w-3.5 h-3.5" />
                          <span>Playing</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-3.5 h-3.5 fill-current" />
                          <span>Watch Reel</span>
                        </>
                      )}
                    </button>

                    {/* External Instagram App Link */}
                    <a
                      href={post.instagramUrl || INSTAGRAM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-[#0B75A1] font-semibold flex items-center gap-1 transition-colors"
                      title="Open in Instagram App"
                    >
                      <span>Instagram</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* THEATER MODAL (Expanded View) */}
        {theaterPost && (
          <div
            onClick={() => setTheaterPost(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-[#1A2229] text-white rounded-3xl overflow-hidden max-w-lg w-full shadow-2xl border border-gray-700 flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="p-4 bg-gray-900 flex items-center justify-between border-b border-gray-800">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider bg-[#FB5A7C] text-white px-2.5 py-0.5 rounded-full">
                    {theaterPost.category}
                  </span>
                  <span className="text-xs text-gray-400">@drruchikasubham</span>
                </div>
                <button
                  onClick={() => setTheaterPost(null)}
                  className="p-1.5 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Instagram Reel Player in Modal */}
              <div className="relative aspect-[9/13] bg-white w-full flex items-center justify-center overflow-hidden">
                <iframe
                  src={`https://www.instagram.com/reel/${getReelId(theaterPost.reelId || theaterPost.instagramUrl)}/embed/`}
                  className="w-full h-full border-0 bg-white"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                  scrolling="no"
                />
              </div>

              {/* Modal Footer */}
              <div className="p-5 space-y-3 bg-[#1A2229]">
                <h3 className="font-bold text-base text-white leading-snug">
                  {theaterPost.title}
                </h3>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-gray-800">
                  <a
                    href={`${WHATSAPP_SUBHAM}&text=Hey%20Dr%20I%20watched%20your%20reel%20on%20${encodeURIComponent(theaterPost.title)}%20and%20had%20a%20question.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp text-xs py-2.5 px-4 shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Ask Doctor About This Video</span>
                  </a>

                  <a
                    href={theaterPost.instagramUrl || INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gray-400 hover:text-white flex items-center gap-1 underline underline-offset-2"
                  >
                    <span>View on Instagram</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Bottom Callout */}
        <div className="mt-12 text-center bg-white border border-[#FFCCD6] rounded-2xl p-6 shadow-sm max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-bold text-sm text-[#1A2229]">Have questions on any of these topics?</h4>
            <p className="text-xs text-[#475569] mt-0.5">Send a quick WhatsApp text to discuss your symptoms directly with our clinic.</p>
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
