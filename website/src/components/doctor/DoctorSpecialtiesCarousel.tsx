"use client";

import { useRef, useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  HeartPulse,
  Baby,
  Microscope,
  Activity,
  Pill,
  Dna,
  Sparkles,
  Thermometer,
  Stethoscope,
} from "lucide-react";
import { SpecialtyItem } from "@/data/doctors";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  HeartPulse,
  Baby,
  Microscope,
  Activity,
  Pill,
  Dna,
  Sparkles,
  Thermometer,
  Stethoscope,
};

interface DoctorSpecialtiesCarouselProps {
  specialties: SpecialtyItem[];
  doctorName: string;
  doctorShortName: string;
  doctorWhatsapp: string;
  accentColor: string;
  accentBg: string;
}

export default function DoctorSpecialtiesCarousel({
  specialties,
  doctorName,
  doctorShortName,
  doctorWhatsapp,
  accentColor,
  accentBg,
}: DoctorSpecialtiesCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    // Calculate approximate index
    const cardWidth = 360;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(index, specialties.length - 1));
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [specialties]);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const offset = scrollRef.current.clientWidth * 0.75;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -offset : offset,
      behavior: "smooth",
    });
  };

  return (
    <div className="space-y-6">
      {/* Top Header & Navigation Controls */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="badge-accent mb-2">Specialized Clinical Scope</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1A2229]">
            Conditions Treated &amp; Procedures Performed
          </h2>
          <p className="text-xs sm:text-sm text-[#475569] mt-1.5">
            Swipe or use arrows to view {doctorShortName}&apos;s clinical focus areas.
          </p>
        </div>

        {/* Carousel Arrow Controls */}
        <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
          <span className="text-xs font-semibold text-gray-400 mr-1 hidden sm:inline">
            {specialties.length} Specialties
          </span>
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-700 hover:bg-[#FFF5F7] hover:border-[#FB5A7C] hover:text-[#FB5A7C] disabled:opacity-30 disabled:cursor-not-allowed shadow-2xs transition-all active:scale-95"
            aria-label="Previous specialty"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-700 hover:bg-[#FFF5F7] hover:border-[#FB5A7C] hover:text-[#FB5A7C] disabled:opacity-30 disabled:cursor-not-allowed shadow-2xs transition-all active:scale-95"
            aria-label="Next specialty"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Horizontal Carousel Track */}
      <div
        ref={scrollRef}
        className="flex gap-4 sm:gap-5 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {specialties.map((item, idx) => {
          const IconComp = iconMap[item.icon] || Stethoscope;

          return (
            <div
              key={item.title}
              className="w-[82vw] sm:w-[340px] md:w-[360px] shrink-0 snap-start bg-white rounded-3xl p-5 sm:p-6 border-2 border-gray-100 hover:border-[#FB5A7C] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Icon & Counter Row */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-11 h-11 rounded-2xl ${accentBg} flex items-center justify-center group-hover:scale-105 transition-transform`}
                    style={{ color: accentColor }}
                  >
                    <IconComp className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold text-gray-300 group-hover:text-gray-400 transition-colors">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#1A2229] mb-2 group-hover:text-[#FB5A7C] transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-[#475569] leading-relaxed mb-4 line-clamp-3">
                  {item.desc}
                </p>

                {/* Tag Chips */}
                {item.tags && (
                  <div className="flex flex-wrap gap-1 mb-5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] bg-gray-50 border border-gray-100 text-gray-600 px-2 py-0.5 rounded-md font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Direct WhatsApp Inquiry Button */}
              <a
                href={`${doctorWhatsapp.split("?")[0]}?text=${encodeURIComponent(
                  `Hey ${doctorShortName}, I have an inquiry regarding ${item.title}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#FB5A7C] hover:text-[#E54366] transition-colors group/btn"
              >
                <span>Consult on this condition</span>
                <div className="w-6 h-6 rounded-full bg-[#FFE9ED] flex items-center justify-center group-hover/btn:bg-[#FB5A7C] group-hover/btn:text-white transition-colors">
                  <MessageCircle className="w-3.5 h-3.5" />
                </div>
              </a>
            </div>
          );
        })}
      </div>

      {/* Progress Dots Indicator */}
      <div className="flex items-center justify-center gap-1.5 pt-1">
        {specialties.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              if (!scrollRef.current) return;
              const cardWidth = 360;
              scrollRef.current.scrollTo({
                left: i * cardWidth,
                behavior: "smooth",
              });
            }}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === activeIndex
                ? "w-6 bg-[#FB5A7C]"
                : "w-1.5 bg-gray-200 hover:bg-gray-300"
            }`}
            aria-label={`Go to specialty ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
