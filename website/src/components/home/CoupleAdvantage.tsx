"use client";

import { useState } from "react";
import Image from "next/image";
import { Users, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";
import BookingModal from "@/components/shared/BookingModal";

export default function CoupleAdvantage() {
  const [modalOpen, setModalOpen] = useState(false);
  const advantages = [
    {
      icon: HeartHandshake,
      title: "Care for Both Partners",
      desc: "Dr. Ruchika for maternal & gynaec care; Dr. Subham for partner guidance & fatherhood support.",
      color: "#FB5A7C",
      bg: "bg-[#FFF5F7]",
    },
    {
      icon: Users,
      title: "Double Clinical Review",
      desc: "Two specialized minds collaborating seamlessly on antenatal protocols and surgical decisions.",
      color: "#2FB2EA",
      bg: "bg-[#F2FAFE]",
    },
    {
      icon: ShieldCheck,
      title: "Medical + Surgical Balance",
      desc: "Holistic, gentle medical therapies combined with advanced laparoscopic surgical precision.",
      color: "#FB5A7C",
      bg: "bg-[#FFF5F7]",
    },
    {
      icon: Sparkles,
      title: "Seamless Joint Consultations",
      desc: "Option to consult both specialists together for initial pregnancy planning or complex cases.",
      color: "#0B75A1",
      bg: "bg-[#F2FAFE]",
    },
  ];

  const doubledAdvantages = [...advantages, ...advantages];

  return (
    <section
      id="couple-advantage"
      className="py-4 sm:py-6 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact, Unified Glass Card Banner */}
        <div className="bg-gradient-to-br from-[#FFF5F7] via-white to-[#F4FAFD] rounded-2xl sm:rounded-3xl p-4 sm:p-5 border border-[#FFCCD6] shadow-xs relative overflow-hidden">
          
          {/* Subtle decorative background glow */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#FFE9ED] rounded-full filter blur-3xl opacity-30 pointer-events-none" />

          {/* Top Row: Artwork + Title */}
          <div className="flex items-center gap-3 pb-3">
            {/* Couple Emblem Art */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white p-1.5 shadow-2xs border border-pink-100 flex items-center justify-center shrink-0">
              <Image
                src="/images/brand/couple-art.png"
                alt="The Couple Doctor Advantage"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#FB5A7C] bg-white px-2 py-0.5 rounded-full border border-pink-100 shadow-2xs">
                  The Couple Advantage
                </span>
                <span className="text-xs text-gray-500 font-medium hidden sm:inline">
                  &bull; &ldquo;A family caring for your family&rdquo;
                </span>
              </div>
              <h2 className="text-sm sm:text-base md:text-lg font-bold text-[#1A2229] mt-0.5 leading-tight">
                Complete Care by Husband-Wife Specialist Duo
              </h2>
            </div>
          </div>

          {/* Middle Row: Infinite Smooth Scrolling Marquee Ticker */}
          <div className="relative w-full overflow-hidden group/marquee pt-3 border-t border-gray-100/90">
            {/* Left & Right Subtle Fade */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-12 bg-gradient-to-r from-[#FFF8F9] via-[#FFF8F9]/80 to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-12 bg-gradient-to-l from-[#F4FAFD] via-[#F4FAFD]/80 to-transparent z-10" />

            {/* Scrolling Ticker Track */}
            <div className="animate-marquee gap-3 py-1 pl-2">
              {doubledAdvantages.map((adv, i) => {
                const IconComponent = adv.icon;
                return (
                  <div
                    key={`${adv.title}-${i}`}
                    className="w-[260px] sm:w-[285px] shrink-0 p-3 rounded-2xl bg-white/95 backdrop-blur-xs border border-gray-100 hover:border-[#FFCCD6] hover:shadow-md transition-all flex items-center gap-3 select-none"
                  >
                    <div
                      className={`w-9 h-9 rounded-xl ${adv.bg} flex items-center justify-center shrink-0 shadow-2xs group-hover/marquee:scale-105 transition-transform`}
                      style={{ color: adv.color }}
                    >
                      <IconComponent className="w-4 h-4" />
                    </div>

                    <div className="min-w-0">
                      <h3 className="font-bold text-xs sm:text-[13px] text-[#1A2229] leading-tight truncate">
                        {adv.title}
                      </h3>
                      <p className="text-[10.5px] text-[#64748B] leading-tight mt-0.5 line-clamp-1">
                        {adv.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* End Row: Centered Action Button */}
          <div className="pt-3.5 flex items-center justify-center">
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="btn-primary text-xs py-2 px-5 shadow-xs hover:shadow-md inline-flex items-center gap-2 cursor-pointer rounded-full"
            >
              <Users className="w-3.5 h-3.5" />
              <span>Inquire Joint Consultation with Both Doctors &rarr;</span>
            </button>
          </div>

        </div>

      </div>

      {/* Joint Consultation Booking Modal */}
      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialDoctor="joint"
        initialConcern="Joint Couple Consultation (Pre-conception / Birthing)"
      />
    </section>
  );
}
