"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  Heart,
  Award,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface DoctorPhilosophySectionProps {
  philosophyTitle: string;
  philosophyDesc: string;
  philosophyImage?: string;
  specialHighlightTitle?: string;
  specialHighlightDesc?: string;
  specialHighlightImage?: string;
  languages: string[];
  doctorShortName: string;
  doctorWhatsapp: string;
  isSubham: boolean;
  accentColor: string;
  accentBg: string;
  accentBorder: string;
}

export default function DoctorPhilosophySection({
  philosophyTitle,
  philosophyDesc,
  philosophyImage,
  specialHighlightTitle,
  specialHighlightDesc,
  specialHighlightImage,
  languages,
  doctorShortName,
  doctorWhatsapp,
  isSubham,
  accentColor,
  accentBg,
  accentBorder,
}: DoctorPhilosophySectionProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const scrollToIndex = useCallback((index: number) => {
    setActiveSlide(index);
    if (scrollRef.current) {
      const card = scrollRef.current.children[0] as HTMLElement;
      if (card) {
        const cardWidth = card.offsetWidth;
        const gap = 16;
        scrollRef.current.scrollTo({
          left: index * (cardWidth + gap),
          behavior: "smooth",
        });
      }
    }
  }, []);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    if (clientWidth === 0) return;
    const index = Math.round(scrollLeft / (clientWidth * 0.85));
    setActiveSlide(Math.min(Math.max(index, 0), 1));
  };

  // Auto-scroll on mobile view every 5 seconds (pauses on user interaction)
  useEffect(() => {
    if (isInteracting) return;

    timerRef.current = setInterval(() => {
      if (typeof window !== "undefined" && window.innerWidth < 768) {
        setActiveSlide((prev) => {
          const next = prev === 0 ? 1 : 0;
          if (scrollRef.current) {
            const card = scrollRef.current.children[0] as HTMLElement;
            if (card) {
              const cardWidth = card.offsetWidth;
              const gap = 16;
              scrollRef.current.scrollTo({
                left: next * (cardWidth + gap),
                behavior: "smooth",
              });
            }
          }
          return next;
        });
      }
    }, 5000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isInteracting]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsInteracting(true)}
      onMouseLeave={() => setIsInteracting(false)}
      onTouchStart={() => setIsInteracting(true)}
      onTouchEnd={() => {
        setTimeout(() => setIsInteracting(false), 4000);
      }}
    >
      {/* Container: Side-by-side 50/50 on Web (md:), Auto-Paging Snap Slider on Mobile */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex md:grid md:grid-cols-2 gap-4 sm:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 items-stretch"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {/* CARD 1: Clinical Philosophy & Pillars */}
        <div className="w-[86vw] sm:w-[420px] md:w-auto shrink-0 md:shrink snap-center bg-white rounded-3xl overflow-hidden border border-gray-200/80 hover:border-[#FB5A7C]/60 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
          {/* Top Visual Header Banner */}
          {philosophyImage && (
            <div className="relative h-44 sm:h-52 w-full overflow-hidden bg-gray-100 shrink-0">
              <Image
                src={philosophyImage}
                alt={philosophyTitle}
                width={640}
                height={360}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />

              {/* Bottom Left Floating Badge */}
              <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md shadow-xs border border-white/60">
                <Heart className="w-3.5 h-3.5 text-[#FB5A7C] shrink-0" />
                <span className="text-[11px] font-bold text-[#1A2229]">
                  Clinical Philosophy
                </span>
              </div>
            </div>
          )}

          {/* Card Body */}
          <div className="p-5 sm:p-7 flex flex-col flex-1 justify-between">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[#1A2229] mb-2 leading-snug group-hover:text-[#FB5A7C] transition-colors">
                {philosophyTitle}
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
                {philosophyDesc}
              </p>

              {/* 3 Core Practice Pillars */}
              <div className="space-y-2 pt-2 border-t border-gray-100">
                <div className="flex items-start gap-2.5 text-xs text-[#475569]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>
                    <strong className="text-[#1A2229]">Unhurried consultations:</strong> Detailed scan reviews and clear explanations.
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-[#475569]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>
                    <strong className="text-[#1A2229]">Evidence-based safety:</strong> Supporting natural birth physiology with minimal medical interventions.
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-[#475569]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>
                    <strong className="text-[#1A2229]">Multilingual care:</strong> Fluent in English, Hindi, Bengali, and Nepali.
                  </span>
                </div>
              </div>
            </div>

            {/* Languages Bar */}
            <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500">
              <span className="font-medium">Languages:</span>
              <span className="font-semibold text-[#1A2229]">
                {languages.join(" • ")}
              </span>
            </div>
          </div>
        </div>

        {/* CARD 2: Special Clinical Focus */}
        <div
          className={`w-[86vw] sm:w-[420px] md:w-auto shrink-0 md:shrink snap-center bg-white rounded-3xl overflow-hidden border-2 ${accentBorder} shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group`}
        >
          {/* Top Visual Header Banner */}
          {specialHighlightImage && (
            <div className="relative h-44 sm:h-52 w-full overflow-hidden bg-gray-100 shrink-0">
              <Image
                src={specialHighlightImage}
                alt={specialHighlightTitle || "Special Clinical Focus"}
                width={640}
                height={360}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />

              {/* Bottom Left Floating Badge */}
              <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md shadow-xs border border-white/60">
                <Award className="w-3.5 h-3.5 shrink-0" style={{ color: accentColor }} />
                <span className="text-[11px] font-bold text-[#1A2229]">
                  Special Clinical Focus
                </span>
              </div>
            </div>
          )}

          {/* Card Body */}
          <div className="p-5 sm:p-7 flex flex-col flex-1 justify-between">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[#1A2229] mb-2 leading-snug">
                {specialHighlightTitle}
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
                {specialHighlightDesc}
              </p>

              {/* Role-Specific Educational Callout */}
              {isSubham ? (
                <div className="p-3.5 rounded-2xl bg-[#F2FAFE] border border-sky-100 text-xs text-[#475569] space-y-1">
                  <div className="font-bold text-[#0B75A1] text-xs flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#2FB2EA]" />
                    <span>The Partner&apos;s Journey:</span>
                  </div>
                  <p className="text-[11px] text-gray-600 leading-relaxed">
                    Clear labor coaching, hospital readiness, and postpartum emotional support so fathers are active, supportive partners in delivery.
                  </p>
                </div>
              ) : (
                <div className="p-3.5 rounded-2xl bg-[#FFF5F7] border border-pink-100 text-xs text-[#475569] space-y-1">
                  <div className="font-bold text-[#C4274C] text-xs flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#FB5A7C]" />
                    <span>Adolescent &amp; Gentle Maternity:</span>
                  </div>
                  <p className="text-[11px] text-gray-600 leading-relaxed">
                    Confidential period guidance, root-cause PCOS reversal, and calm natural birth preparation in a warm, welcoming environment.
                  </p>
                </div>
              )}
            </div>

            {/* Direct WhatsApp Consultation Action */}
            <div className="mt-5 pt-3 border-t border-gray-100">
              <a
                href={doctorWhatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold inline-flex items-center justify-between w-full py-1 hover:underline transition-all"
                style={{ color: accentColor }}
              >
                <span>Discuss your health concerns with {doctorShortName}</span>
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center text-white shrink-0"
                  style={{ backgroundColor: accentColor }}
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Dot Indicators (Hidden on md:) */}
      <div className="md:hidden flex items-center justify-center gap-2 mt-4">
        <button
          onClick={() => scrollToIndex(0)}
          className={`h-1.5 rounded-full transition-all duration-300 ${
            activeSlide === 0 ? "w-6 bg-[#FB5A7C]" : "w-1.5 bg-gray-300"
          }`}
          aria-label="View Clinical Philosophy"
        />
        <button
          onClick={() => scrollToIndex(1)}
          className={`h-1.5 rounded-full transition-all duration-300 ${
            activeSlide === 1 ? "w-6 bg-[#FB5A7C]" : "w-1.5 bg-gray-300"
          }`}
          aria-label="View Special Clinical Focus"
        />
      </div>
    </div>
  );
}
