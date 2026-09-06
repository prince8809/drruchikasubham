"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  Play,
  X,
  Maximize2,
  Volume2,
  VolumeX,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { InstagramIcon } from "@/components/shared/Icons";
import { socialPosts, SocialPost } from "@/data/social-feed";
import { INSTAGRAM_URL, WHATSAPP_SUBHAM } from "@/lib/constants";

export default function SocialHub() {
  const sectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [theaterPost, setTheaterPost] = useState<SocialPost | null>(null);
  const [unmutedCardId, setUnmutedCardId] = useState<string | null>(null);
  const [isAutoScrollPaused, setIsAutoScrollPaused] = useState(false);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  // 1. Intersection Observer: Lazy load videos ONLY when user scrolls to section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToSlide = (index: number) => {
    const safeIndex = (index + socialPosts.length) % socialPosts.length;
    setActiveSlideIndex(safeIndex);
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.children[0]?.clientWidth || 300;
      const gap = 24; // 1.5rem
      carouselRef.current.scrollTo({
        left: safeIndex * (cardWidth + gap),
        behavior: "smooth",
      });
    }
  };

  const handleNextSlide = () => {
    scrollToSlide(activeSlideIndex + 1);
  };

  const handlePrevSlide = () => {
    scrollToSlide(activeSlideIndex - 1);
  };

  // 2. Auto-scroll carousel timer (pauses when user hovers or interacts)
  useEffect(() => {
    if (!isInView || isAutoScrollPaused || theaterPost) return;

    const interval = setInterval(() => {
      handleNextSlide();
    }, 4500);

    return () => clearInterval(interval);
  }, [isInView, isAutoScrollPaused, activeSlideIndex, theaterPost]);

  // 3. Escape key listener & body scroll lock for theater modal
  useEffect(() => {
    if (!theaterPost) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setTheaterPost(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [theaterPost]);

  const toggleSound = (postId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setUnmutedCardId((prev) => (prev === postId ? null : postId));
  };

  const openTheater = (post: SocialPost, e: React.MouseEvent) => {
    e.stopPropagation();
    setTheaterPost(post);
  };

  return (
    <section
      ref={sectionRef}
      id="social-hub"
      className="py-20 bg-gradient-to-b from-[#F4FAFD] via-white to-[#F4FAFD] border-t border-[#F1E5E8] relative overflow-hidden scroll-mt-24 sm:scroll-mt-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 bg-[#FFE9ED] text-[#C4274C] px-3 py-1 rounded-full text-xs font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#FB5A7C]" />
              <span>Patient Education &bull; Autoplay Video Previews</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#1A2229]">
              Watch Helpful Reels &amp; Medical Tips
            </h2>
            <p className="text-sm sm:text-base text-[#475569] mt-2 max-w-xl">
              Automatic previews play live as you scroll. Tap any reel to listen with sound, expand, or follow on Instagram.
            </p>
          </div>

          {/* Social Follow Actions & Carousel Controls */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Arrow Nav */}
            <div className="flex items-center gap-1.5 bg-white p-1 rounded-full border border-gray-200 shadow-2xs mr-2">
              <button
                onClick={handlePrevSlide}
                className="w-8 h-8 rounded-full flex items-center justify-center text-gray-700 hover:bg-[#FFE9ED] hover:text-[#FB5A7C] transition-colors"
                aria-label="Previous reel"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNextSlide}
                className="w-8 h-8 rounded-full flex items-center justify-center text-gray-700 hover:bg-[#FFE9ED] hover:text-[#FB5A7C] transition-colors"
                aria-label="Next reel"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white px-5 py-2.5 rounded-full text-xs font-bold shadow-sm hover:opacity-95 hover:scale-105 transition-all"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>@drruchikasubham</span>
            </a>
          </div>
        </div>

        {/* Carousel Container (Auto-scrolls & allows smooth swiping) */}
        <div
          className="relative"
          onMouseEnter={() => setIsAutoScrollPaused(true)}
          onMouseLeave={() => setIsAutoScrollPaused(false)}
          onTouchStart={() => setIsAutoScrollPaused(true)}
          onTouchEnd={() => setIsAutoScrollPaused(false)}
        >
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto scrollbar-none pb-6 pt-2 snap-x snap-mandatory scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {socialPosts.map((post, index) => {
              const isUnmuted = unmutedCardId === post.id;

              return (
                <div
                  key={post.id}
                  onClick={(e) => openTheater(post, e)}
                  className="w-[285px] sm:w-[320px] lg:w-[340px] shrink-0 snap-start bg-white rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-[#FFCCD6] shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                >
                  {/* Video Player Container */}
                  <div className="relative aspect-[9/14] bg-neutral-900 overflow-hidden flex flex-col justify-between">
                    
                    {isInView ? (
                      /* AUTOPLAY MUTED PREVIEW (Lazy loaded once reached) */
                      <video
                        key={post.videoSrc}
                        src={post.videoSrc}
                        poster={post.thumbnailSrc}
                        autoPlay
                        loop
                        playsInline
                        muted={!isUnmuted}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      /* POSTER PLACEHOLDER BEFORE SCROLLING INTO VIEW */
                      <Image
                        src={post.thumbnailSrc}
                        alt={post.title}
                        fill
                        sizes="350px"
                        className="object-cover"
                      />
                    )}

                    {/* Top Overlay Controls */}
                    <div className="absolute top-0 inset-x-0 z-20 p-3 bg-gradient-to-b from-black/80 via-black/40 to-transparent flex items-center justify-between text-white">
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-xs text-[#1A2229] px-2.5 py-1 rounded-full shadow-2xs">
                        {post.category}
                      </span>

                      <div className="flex items-center gap-1.5">
                        {/* Audio Toggle Button */}
                        <button
                          onClick={(e) => toggleSound(post.id, e)}
                          className={`p-2 rounded-full transition-all ${
                            isUnmuted
                              ? "bg-[#FB5A7C] text-white shadow-md scale-110"
                              : "bg-black/60 hover:bg-black/80 text-white backdrop-blur-xs"
                          }`}
                          title={isUnmuted ? "Mute audio" : "Listen with sound"}
                          aria-label="Toggle sound"
                        >
                          {isUnmuted ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
                        </button>

                        {/* Expand Button */}
                        <button
                          onClick={(e) => openTheater(post, e)}
                          className="p-2 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-xs transition-colors"
                          title="Expand Reel"
                          aria-label="Expand video"
                        >
                          <Maximize2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Bottom Status Pill */}
                    <div className="absolute bottom-3 inset-x-3 z-20 flex justify-between items-center text-[11px] font-medium text-white">
                      <span className="flex items-center gap-1 bg-black/60 backdrop-blur-xs px-2.5 py-0.5 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                        <span>Previewing</span>
                      </span>

                      <span className="bg-black/60 backdrop-blur-xs px-2.5 py-0.5 rounded-full font-bold">
                        {post.likes}
                      </span>
                    </div>

                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
                  </div>

                  {/* Card Info */}
                  <div className="p-5 space-y-2 bg-white flex flex-col justify-between flex-grow">
                    <div>
                      <span className="text-[10px] font-bold text-[#FB5A7C] uppercase tracking-wider block">
                        {post.tagline || post.category}
                      </span>
                      <h4 className="font-bold text-sm sm:text-base text-[#1A2229] leading-snug line-clamp-2 mt-1 group-hover:text-[#FB5A7C] transition-colors">
                        {post.title}
                      </h4>
                      <p className="text-xs text-[#64748B] line-clamp-2 leading-relaxed mt-1.5">
                        {post.caption}
                      </p>
                    </div>

                    {/* Action Bar */}
                    <div className="flex items-center justify-between text-xs pt-4 border-t border-gray-100 mt-2">
                      <button
                        onClick={(e) => openTheater(post, e)}
                        className="font-bold text-[#FB5A7C] hover:text-[#E54366] flex items-center gap-1 transition-colors"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Watch with Sound</span>
                      </button>

                      <a
                        href={post.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-gray-500 hover:text-[#FB5A7C] font-semibold flex items-center gap-1 transition-colors"
                        title="View on official Instagram"
                      >
                        <span>{post.authorHandle || "Instagram"}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Carousel Progress Dots */}
          <div className="flex justify-center items-center gap-2 mt-4">
            {socialPosts.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToSlide(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeSlideIndex === i
                    ? "w-8 bg-[#FB5A7C]"
                    : "w-2 bg-gray-200 hover:bg-gray-300"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* THEATER MODAL (Full quality video stream with native sound) */}
        {theaterPost && (
          <div
            onClick={() => setTheaterPost(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-[#1A2229] text-white rounded-3xl overflow-hidden max-w-md w-full shadow-2xl border border-gray-700 flex flex-col max-h-[92vh] overflow-y-auto"
            >
              {/* Modal Header */}
              <div className="p-4 bg-gray-900 flex items-center justify-between border-b border-gray-800 shrink-0">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider bg-[#FB5A7C] text-white px-2.5 py-0.5 rounded-full">
                    {theaterPost.category}
                  </span>
                  <span className="text-xs text-gray-400 font-medium">
                    {theaterPost.authorHandle || "@drruchikasubham"}
                  </span>
                </div>
                <button
                  onClick={() => setTheaterPost(null)}
                  className="p-1.5 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Video Player */}
              <div className="relative max-h-[58vh] aspect-[9/14] bg-black w-full overflow-hidden shrink-0 flex items-center justify-center mx-auto">
                <video
                  src={theaterPost.videoSrc}
                  poster={theaterPost.thumbnailSrc}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Modal Footer */}
              <div className="p-4 space-y-2.5 bg-[#1A2229] shrink-0">
                <h3 className="font-bold text-sm text-white leading-snug">
                  {theaterPost.title}
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed line-clamp-2">
                  {theaterPost.caption}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-gray-800">
                  <a
                    href={`${WHATSAPP_SUBHAM.split("?")[0]}?text=${encodeURIComponent(
                      `Hey Dr., I watched your video on "${theaterPost.title}" and had a consultation question.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp text-xs py-2.5 px-4 shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Ask Doctor on WhatsApp</span>
                  </a>

                  <a
                    href={theaterPost.instagramUrl}
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

      </div>
    </section>
  );
}
