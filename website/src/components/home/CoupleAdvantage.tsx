"use client";

import Image from "next/image";
import { Users, HeartHandshake, ShieldCheck, Sparkles, MessageCircle, ArrowRight } from "lucide-react";
import { WHATSAPP_SUBHAM } from "@/lib/constants";

export default function CoupleAdvantage() {
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

  return (
    <section
      id="couple-advantage"
      className="py-8 sm:py-10 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact, Unified Glass Card Banner */}
        <div className="bg-gradient-to-br from-[#FFF5F7] via-white to-[#F4FAFD] rounded-3xl p-6 sm:p-8 border border-[#FFCCD6] shadow-sm relative overflow-hidden">
          
          {/* Subtle decorative background glow */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#FFE9ED] rounded-full filter blur-3xl opacity-30 pointer-events-none" />

          {/* Top Row: Artwork + Title + Joint Booking CTA */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-gray-100">
            <div className="flex items-center gap-4">
              {/* Couple Emblem Art */}
              <div className="w-14 h-14 rounded-2xl bg-white p-2 shadow-xs border border-pink-100 flex items-center justify-center shrink-0">
                <Image
                  src="/images/brand/couple-art.png"
                  alt="The Couple Doctor Advantage"
                  width={42}
                  height={56}
                  className="object-contain"
                />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#FB5A7C] bg-white px-2.5 py-0.5 rounded-full border border-pink-100 shadow-2xs">
                    The Couple Advantage
                  </span>
                  <span className="text-xs text-gray-500 font-medium hidden sm:inline">
                    &bull; &ldquo;A family caring for your family&rdquo;
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1A2229] mt-1">
                  Complete Care by Husband-Wife Specialist Duo
                </h2>
              </div>
            </div>

            {/* Quick Action Button */}
            <a
              href={`${WHATSAPP_SUBHAM}&text=Hey%20I%20want%20to%20inquire%20about%20a%20Joint%20Consultation%20with%20both%20Dr.%20Subham%20and%20Dr.%20Ruchika`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs py-2.5 px-5 shadow-xs hover:shadow-md shrink-0 self-start lg:self-auto inline-flex items-center gap-2"
            >
              <Users className="w-4 h-4" />
              <span>Inquire Joint Consultation</span>
            </a>
          </div>

          {/* Bottom Row: 4 Ultra-Compact Micro-Points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 pt-6">
            {advantages.map((adv) => {
              const IconComponent = adv.icon;
              return (
                <div
                  key={adv.title}
                  className="p-3.5 rounded-2xl bg-white/90 backdrop-blur-xs border border-gray-100 hover:border-[#FFCCD6] hover:shadow-sm transition-all flex items-start gap-3 group"
                >
                  <div
                    className={`w-9 h-9 rounded-xl ${adv.bg} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}
                    style={{ color: adv.color }}
                  >
                    <IconComponent className="w-4 h-4" />
                  </div>

                  <div className="min-w-0">
                    <h3 className="font-bold text-xs sm:text-sm text-[#1A2229] leading-snug">
                      {adv.title}
                    </h3>
                    <p className="text-[11px] text-[#64748B] leading-relaxed mt-0.5">
                      {adv.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
