"use client";

import { useState, useRef, useEffect } from "react";
import {
  Baby,
  Activity,
  HeartPulse,
  Stethoscope,
  Microscope,
  Award,
  ChevronLeft,
  ChevronRight,
  ShieldCheck
} from "lucide-react";
import { stats } from "@/data/stats";

export default function StatsCounter() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Auto-scroll through the 6 stats cards smoothly every 3.5 seconds
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      handleNext();
    }, 3500);

    return () => clearInterval(timer);
  }, [isPaused, activeSlide]);

  const scrollToSlide = (index: number) => {
    const total = stats.length;
    const safeIndex = (index + total) % total;
    setActiveSlide(safeIndex);

    if (carouselRef.current) {
      const card = carouselRef.current.children[0] as HTMLElement;
      const cardWidth = card?.offsetWidth || 210;
      const gap = 16;
      carouselRef.current.scrollTo({
        left: safeIndex * (cardWidth + gap),
        behavior: "smooth",
      });
    }
  };

  const handleNext = () => scrollToSlide(activeSlide + 1);
  const handlePrev = () => scrollToSlide(activeSlide - 1);

  const getIcon = (iconName: string, color: string) => {
    const props = { className: "w-5 h-5", style: { color } };
    switch (iconName) {
      case "Baby":
        return <Baby {...props} />;
      case "Activity":
        return <Activity {...props} />;
      case "HeartPulse":
        return <HeartPulse {...props} />;
      case "Stethoscope":
        return <Stethoscope {...props} />;
      case "Microscope":
        return <Microscope {...props} />;
      case "Award":
        return <Award {...props} />;
      default:
        return <Award {...props} />;
    }
  };

  return (
    <section
      id="experience"
      className="py-10 sm:py-12 bg-white border-y border-[#F1E5E8] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Header with Arrow Controls */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 mb-6">
          <div>
            <span className="badge-primary mb-1.5">Proven Surgical &amp; Obstetric Record</span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1A2229] leading-tight">
              Clinical Milestones Backed by Trust
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-1 leading-relaxed max-w-xl">
              Over six years of clinical excellence providing dedicated care for families across North Bengal, Sikkim, and neighboring regions.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="hidden sm:flex items-center gap-1.5 bg-[#FAFAF9] p-1 rounded-full border border-gray-200 shadow-2xs shrink-0">
            <button
              onClick={handlePrev}
              className="w-7 h-7 rounded-full flex items-center justify-center text-gray-700 hover:bg-[#FFE9ED] hover:text-[#FB5A7C] transition-colors"
              aria-label="Previous stat"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={handleNext}
              className="w-7 h-7 rounded-full flex items-center justify-center text-gray-700 hover:bg-[#FFE9ED] hover:text-[#FB5A7C] transition-colors"
              aria-label="Next stat"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Auto-Scrolling Stat Carousel Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div
            ref={carouselRef}
            className="flex gap-4 overflow-x-auto scrollbar-none py-2 snap-x snap-mandatory scroll-smooth -mx-4 px-4 sm:mx-0 sm:px-0"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {stats.map((stat, index) => {
              const isCurrent = activeSlide === index;

              return (
                <div
                  key={stat.label}
                  className={`w-[200px] sm:w-[220px] shrink-0 snap-start rounded-2xl p-4 border transition-all duration-300 flex flex-col justify-between group ${
                    isCurrent
                      ? "bg-white border-[#FFCCD6] shadow-md scale-[1.02]"
                      : "bg-[#FAFAF9] border-gray-100 hover:bg-white hover:border-[#FFCCD6] hover:shadow-md"
                  }`}
                >
                  {/* Icon & Milestone Badge */}
                  <div className="flex items-center justify-between mb-2">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xs"
                      style={{ backgroundColor: `${stat.color}15` }}
                    >
                      {getIcon(stat.icon, stat.color)}
                    </div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                      Verified
                    </span>
                  </div>

                  {/* Big Counter Number */}
                  <div className="my-1">
                    <span
                      className="text-2xl sm:text-3xl font-extrabold tracking-tight block leading-none"
                      style={{ color: stat.color }}
                    >
                      {stat.value}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-[#1A2229] mt-1.5 block leading-snug">
                      {stat.label}
                    </span>
                  </div>

                  {/* Subtle bottom progress bar */}
                  <div className="w-full bg-gray-100 h-1 rounded-full mt-3 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        backgroundColor: stat.color,
                        width: isCurrent ? "100%" : "30%",
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center items-center gap-1.5 mt-3 sm:hidden">
            {stats.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToSlide(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeSlide === i ? "w-5 bg-[#FB5A7C]" : "w-1.5 bg-gray-200"
                }`}
                aria-label={`Go to stat ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Ultra-Slim Insurance & Mediclaim Strip */}
        <div className="mt-5 bg-[#ECFDF5] border border-[#A7F3D0] rounded-xl px-4 py-2.5 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#10B981] shrink-0" />
            <p className="text-xs font-semibold text-[#065F46]">
              <strong>Cashless Mediclaim &amp; TPA Accepted:</strong> Normal deliveries, cesareans, and laparoscopic surgeries at Manipal Hospital.
            </p>
          </div>
          <a
            href="#booking"
            className="text-[11px] font-bold text-[#065F46] bg-white border border-[#10B981] px-3 py-1 rounded-lg hover:bg-[#10B981] hover:text-white transition-colors shrink-0"
          >
            Check Policy &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
