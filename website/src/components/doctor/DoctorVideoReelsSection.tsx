"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  Play,
  X,
  Maximize2,
  Volume2,
  VolumeX,
  ExternalLink,
  MessageCircle,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { InstagramIcon } from "@/components/shared/Icons";
import { getDoctorPosts, SocialPost } from "@/data/social-feed";

interface DoctorVideoReelsSectionProps {
  doctorId: "ruchika" | "subham";
  doctorName: string;
  doctorShortName: string;
  accentColor: string;
  accentBg: string;
  accentBorder: string;
  accentText: string;
  instagramUrl?: string;
  instagramHandle?: string;
  whatsappUrl: string;
}

export default function DoctorVideoReelsSection({
  doctorId,
  doctorName,
  doctorShortName,
  accentColor,
  accentBg,
  accentBorder,
  accentText,
  instagramUrl,
  instagramHandle,
  whatsappUrl,
}: DoctorVideoReelsSectionProps) {
  const posts = getDoctorPosts(doctorId);
  const sectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [theaterPost, setTheaterPost] = useState<SocialPost | null>(null);
  const [unmutedCardId, setUnmutedCardId] = useState<string | null>(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isAutoScrollPaused, setIsAutoScrollPaused] = useState(false);

  const isRuchika = doctorId === "ruchika";
  const handle = instagramHandle || (isRuchika ? "@dr.rhea_ag21" : "@drruchikasubham");
  const igLink =
    instagramUrl ||
    (isRuchika
      ? "https://www.instagram.com/dr.rhea_ag21/"
      : "https://www.instagram.com/drruchikasubham/");

  const cardHoverBorder = isRuchika ? "hover:border-[#FFD3DC]" : "hover:border-[#BCD7F5]";
  const titleHoverColor = isRuchika ? "group-hover:text-[#F57B94]" : "group-hover:text-[#4384C6]";
  const igHoverColor = isRuchika ? "hover:text-[#F57B94]" : "hover:text-[#4384C6]";

  // 1. Intersection Observer: Lazy load videos only when scrolled to section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToSlide = (index: number) => {
    const safeIndex = (index + posts.length) % posts.length;
    setActiveSlideIndex(safeIndex);
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.children[0]?.clientWidth || 320;
      const gap = 24; // 1.5rem (gap-6)
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
    if (!isInView || isAutoScrollPaused || theaterPost || posts.length <= 1) return;

    const interval = setInterval(() => {
      handleNextSlide();
    }, 4500);

    return () => clearInterval(interval);
  }, [isInView, isAutoScrollPaused, activeSlideIndex, theaterPost, posts.length]);

  // 3. Escape key & scroll lock for modal
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

  if (posts.length === 0) return null;

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
      id="doctor-video-reels"
      className="py-14 sm:py-18 bg-gradient-to-b from-[#FAFAF9] via-white to-[#FAFAF9] border-t border-[#F1E5E8] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-2.5 border shadow-2xs"
              style={{
                backgroundColor: accentBg,
                borderColor: accentBorder,
                color: accentText,
              }}
            >
              <Sparkles className="w-3.5 h-3.5" style={{ color: accentColor }} />
              <span>
                {isRuchika
                  ? "Dr. Ruchika's Video Guidance • Educational Reels"
                  : "Dr. Subham's Clinical Insights • Patient Reels"}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A2229]">
              {isRuchika
                ? "Watch Dr. Ruchika's Women's Health Reels"
                : "Watch Dr. Subham's Surgical & Maternity Reels"}
            </h2>

            <p className="text-xs sm:text-sm text-[#475569] mt-2 leading-relaxed">
              {isRuchika
                ? "Clear, reassuring guidance on menstrual wellness, pregnancy warning signs, vaginal care, and antenatal milestones directly from Dr. Ruchika."
                : "Practical clinical insights on safe normal delivery, painless epidurals, partner coaching during labor, and high-risk pregnancy management."}
            </p>
          </div>

          {/* Action & Navigation */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Carousel Navigation Buttons */}
            <div className="flex items-center gap-1 bg-white border border-gray-200 rounded-full p-1 shadow-2xs">
              <button
                onClick={handlePrevSlide}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-gray-700 transition-colors ${
                  isRuchika ? "hover:bg-[#FFE9ED] hover:text-[#F57B94]" : "hover:bg-[#EBF4FC] hover:text-[#4384C6]"
                }`}
                aria-label="Previous reel"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNextSlide}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-gray-700 transition-colors ${
                  isRuchika ? "hover:bg-[#FFE9ED] hover:text-[#F57B94]" : "hover:bg-[#EBF4FC] hover:text-[#4384C6]"
                }`}
                aria-label="Next reel"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <a
              href={igLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white px-5 py-2.5 rounded-full text-xs font-bold shadow-xs hover:shadow-md hover:scale-105 transition-all"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Follow {handle}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Carousel Container (Auto-scrolls & allows smooth swiping in a single row) */}
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
            {posts.map((post) => {
              const isUnmuted = unmutedCardId === post.id;

              return (
                <div
                  key={post.id}
                  onClick={(e) => openTheater(post, e)}
                  className={`w-[285px] sm:w-[320px] lg:w-[340px] shrink-0 snap-start bg-white rounded-3xl overflow-hidden border-2 border-gray-100 ${cardHoverBorder} shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer`}
                >
                  {/* 9/14 Aspect Ratio Video Container */}
                  <div className="relative aspect-[9/14] bg-neutral-900 overflow-hidden flex flex-col justify-between">
                    {isInView ? (
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
                      <Image
                        src={post.thumbnailSrc}
                        alt={post.title}
                        fill
                        sizes="400px"
                        className="object-cover"
                      />
                    )}

                    {/* Top Overlay Controls */}
                    <div className="absolute top-0 inset-x-0 z-20 p-3 bg-gradient-to-b from-black/80 via-black/40 to-transparent flex items-center justify-between text-white">
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-white/95 backdrop-blur-xs text-[#1A2229] px-2.5 py-1 rounded-full shadow-2xs">
                        {post.category}
                      </span>

                      <div className="flex items-center gap-1.5">
                        {/* Audio Toggle Button */}
                        <button
                          onClick={(e) => toggleSound(post.id, e)}
                          className={`p-2 rounded-full transition-all ${
                            isUnmuted
                              ? `${isRuchika ? "bg-[#F57B94]" : "bg-[#4384C6]"} text-white shadow-md scale-110`
                              : "bg-black/60 hover:bg-black/80 text-white backdrop-blur-xs"
                          }`}
                          title={isUnmuted ? "Mute audio" : "Listen with sound"}
                          aria-label="Toggle sound"
                        >
                          {isUnmuted ? (
                            <Volume2 className="w-3.5 h-3.5" />
                          ) : (
                            <VolumeX className="w-3.5 h-3.5" />
                          )}
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
                        {post.likes || "Featured"}
                      </span>
                    </div>

                    {/* Dark Gradient Bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
                  </div>

                  {/* Card Info */}
                  <div className="p-5 space-y-2 bg-white flex flex-col justify-between flex-grow">
                    <div>
                      <span
                        className="text-[10px] font-bold uppercase tracking-wider block mb-1"
                        style={{ color: accentColor }}
                      >
                        {post.tagline || post.category}
                      </span>
                      <h3 className={`font-bold text-sm sm:text-base text-[#1A2229] leading-snug line-clamp-2 ${titleHoverColor} transition-colors`}>
                        {post.title}
                      </h3>
                      <p className="text-xs text-[#64748B] line-clamp-2 leading-relaxed mt-1.5">
                        {post.caption}
                      </p>
                    </div>

                    {/* Action Bar */}
                    <div className="flex items-center justify-between text-xs pt-4 border-t border-gray-100 mt-2">
                      <button
                        onClick={(e) => openTheater(post, e)}
                        className="font-bold flex items-center gap-1 transition-colors hover:opacity-85"
                        style={{ color: accentColor }}
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Watch with Sound</span>
                      </button>

                      <a
                        href={post.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className={`text-gray-500 ${igHoverColor} font-semibold flex items-center gap-1 transition-colors`}
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
            {posts.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToSlide(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeSlideIndex === i
                    ? `w-8 ${isRuchika ? "bg-[#F57B94]" : "bg-[#4384C6]"}`
                    : "w-2 bg-gray-200 hover:bg-gray-300"
                }`}
                aria-label={`Go to reel ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Theater Modal */}
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
                  <span
                    className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full text-white"
                    style={{ backgroundColor: accentColor }}
                  >
                    {theaterPost.category}
                  </span>
                  <span className="text-xs text-gray-300 font-medium">
                    {theaterPost.authorHandle || handle}
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

              {/* Modal Body & CTAs */}
              <div className="p-5 space-y-3 bg-[#1A2229] shrink-0">
                <h3 className="font-bold text-base sm:text-lg leading-snug text-white">
                  {theaterPost.title}
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed max-h-24 overflow-y-auto pr-1">
                  {theaterPost.caption}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-gray-800">
                  <a
                    href={`${whatsappUrl.split("?")[0]}?text=${encodeURIComponent(
                      `Hello ${doctorShortName}, I watched your video on "${theaterPost.title}" and would like to consult with you.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-xs py-2.5 px-4 rounded-full font-bold shadow-sm hover:shadow-md transition-all inline-flex items-center gap-2 text-white ${
                      isRuchika
                        ? "bg-[#F57B94] hover:bg-[#E6627E]"
                        : "bg-[#4384C6] hover:bg-[#3271B2]"
                    }`}
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Ask {doctorShortName} on WhatsApp</span>
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
