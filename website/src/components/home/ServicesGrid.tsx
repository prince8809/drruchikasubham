"use client";

import { useState, useRef } from "react";
import {
  HeartPulse,
  Baby,
  Sparkles,
  Microscope,
  Activity,
  ShieldAlert,
  Heart,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Stethoscope
} from "lucide-react";
import { services, Service } from "@/data/services";

type CategoryFilter = "All" | "Pregnancy & Delivery" | "Fertility & Hormones" | "Advanced Surgery" | "Well-Woman";

export default function ServicesGrid() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("All");
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const categories: CategoryFilter[] = [
    "All",
    "Pregnancy & Delivery",
    "Fertility & Hormones",
    "Advanced Surgery",
    "Well-Woman",
  ];

  const filteredServices = selectedCategory === "All"
    ? services
    : services.filter((s) => s.category === selectedCategory);

  const scrollToIndex = (index: number) => {
    const total = filteredServices.length;
    const safeIndex = (index + total) % total;
    setActiveSlide(safeIndex);
    if (carouselRef.current) {
      const card = carouselRef.current.children[0] as HTMLElement;
      const cardWidth = card?.offsetWidth || 280;
      const gap = 16;
      carouselRef.current.scrollTo({
        left: safeIndex * (cardWidth + gap),
        behavior: "smooth",
      });
    }
  };

  const getIcon = (iconName: string, color: string) => {
    const props = { className: "w-5 h-5", style: { color } };
    switch (iconName) {
      case "HeartPulse":
        return <HeartPulse {...props} />;
      case "Baby":
        return <Baby {...props} />;
      case "Sparkles":
        return <Sparkles {...props} />;
      case "Microscope":
        return <Microscope {...props} />;
      case "Activity":
        return <Activity {...props} />;
      case "ShieldAlert":
        return <ShieldAlert {...props} />;
      case "Heart":
        return <Heart {...props} />;
      default:
        return <Stethoscope {...props} />;
    }
  };

  return (
    <section id="services" className="py-14 sm:py-16 bg-[#FAFAF9] border-t border-[#F1E5E8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Compact & High Impact) */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-8">
          <div className="max-w-2xl">
            <span className="badge-primary mb-2">Our Clinical Expertise</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A2229] leading-tight">
              Comprehensive Care for Every Stage of Womanhood
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-2 leading-relaxed">
              From adolescent gynaecology and reproductive planning to delivery and advanced minimally invasive surgeries, we provide evidence-based care in a warm, welcoming setting.
            </p>
          </div>

          {/* Prev / Next Navigation Arrows */}
          <div className="hidden sm:flex items-center gap-2 bg-white p-1 rounded-full border border-gray-200 shadow-2xs">
            <button
              onClick={() => scrollToIndex(activeSlide - 1)}
              className="w-8 h-8 rounded-full flex items-center justify-center text-gray-700 hover:bg-[#FFE9ED] hover:text-[#FB5A7C] transition-colors"
              aria-label="Previous specialty"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollToIndex(activeSlide + 1)}
              className="w-8 h-8 rounded-full flex items-center justify-center text-gray-700 hover:bg-[#FFE9ED] hover:text-[#FB5A7C] transition-colors"
              aria-label="Next specialty"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Selectable Filter Pills (Compact & Horizontally Scrollable on Mobile) */}
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-2 mb-6 -mx-4 px-4 sm:mx-0 sm:px-0">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setActiveSlide(0);
                  if (carouselRef.current) carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 shrink-0 ${
                  isSelected
                    ? "bg-[#FB5A7C] text-white shadow-sm"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-[#FB5A7C]/50 hover:text-[#FB5A7C]"
                }`}
              >
                {cat}
                {cat === "All" ? ` (${services.length})` : ""}
              </button>
            );
          })}
        </div>

        {/* Space-Efficient Scrollable Card Carousel */}
        <div className="relative">
          <div
            ref={carouselRef}
            className="flex gap-4 overflow-x-auto scrollbar-none pb-4 pt-1 snap-x snap-mandatory scroll-smooth -mx-4 px-4 sm:mx-0 sm:px-0"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {filteredServices.map((svc) => (
              <div
                key={svc.slug}
                className="w-[280px] sm:w-[310px] shrink-0 snap-start bg-white rounded-2xl p-5 border border-gray-100 hover:border-[#FFCCD6] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Row: Icon + Doctor Lead Badge */}
                  <div className="flex items-center justify-between mb-3.5">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-2xs"
                      style={{ backgroundColor: `${svc.color}15` }}
                    >
                      {getIcon(svc.icon, svc.color)}
                    </div>

                    <span className="text-[10px] font-bold text-gray-600 bg-gray-50 border border-gray-200/80 px-2.5 py-0.5 rounded-full">
                      {svc.doctorLead}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-base text-[#1A2229] group-hover:text-[#FB5A7C] transition-colors leading-snug line-clamp-1 mb-1.5">
                    {svc.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs text-[#475569] leading-relaxed line-clamp-2 mb-3">
                    {svc.shortDesc}
                  </p>

                  {/* Details Bullet List */}
                  <div className="space-y-1.5 pt-2.5 border-t border-gray-100 mb-4">
                    {svc.details.map((detail) => (
                      <div key={detail} className="flex items-center gap-1.5 text-[11px] text-[#64748B] line-clamp-1">
                        <span
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: svc.color }}
                        ></span>
                        <span className="truncate">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom WhatsApp Consult Button */}
                <a
                  href={`${svc.whatsappUrl}&text=Hey%20I%20want%20to%20consult%20regarding%20${encodeURIComponent(svc.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto flex items-center justify-center gap-1.5 w-full py-2 px-3 rounded-xl bg-[#FFF5F7] hover:bg-[#FB5A7C] text-[#C4274C] hover:text-white text-xs font-bold transition-all duration-200 border border-[#FFCCD6]/50 group/btn"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>Consult on WhatsApp</span>
                </a>
              </div>
            ))}
          </div>

          {/* Dot Progress Indicators */}
          <div className="flex justify-center items-center gap-1.5 mt-4">
            {filteredServices.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeSlide === i ? "w-6 bg-[#FB5A7C]" : "w-1.5 bg-gray-200 hover:bg-gray-300"
                }`}
                aria-label={`Go to specialty ${i + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
