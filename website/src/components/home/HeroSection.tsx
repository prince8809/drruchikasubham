"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Heart, Sparkles } from "lucide-react";
import BookingModal from "@/components/shared/BookingModal";

export default function HeroSection() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<"subham" | "ruchika" | "joint">("subham");

  const handleOpenBooking = (doctor: "subham" | "ruchika" | "joint") => {
    setSelectedDoctor(doctor);
    setBookingModalOpen(true);
  };

  return (
    <section id="doctors" className="relative overflow-hidden bg-gradient-to-b from-[#FFF5F7] via-[#FFF8F9] to-white pt-8 pb-6 sm:pt-12 sm:pb-8 lg:pt-14 lg:pb-8">
      {/* Gentle background accent glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFE9ED] rounded-full filter blur-3xl opacity-50 -z-10 pointer-events-none"></div>
      <div className="absolute bottom-6 left-0 w-96 h-96 bg-[#E3F4FC] rounded-full filter blur-3xl opacity-50 -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-center lg:text-left">
            {/* Tag / Pill */}
            <div className="inline-flex items-center gap-2 bg-[#FFE9ED] border border-[#FFCCD6] px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-[#C4274C] shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#FB5A7C]" />
              <span>Complete Care by Husband-Wife Specialist Duo</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#1A2229] tracking-tight leading-[1.15]">
              Your Health. <br className="hidden sm:inline" />
              Your Fertility. <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-[#FB5A7C] to-[#E54366] bg-clip-text text-transparent">
                Your Pregnancy.
              </span>{" "}
              <br className="hidden sm:inline" />
              Expertly Cared For.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Complete women&apos;s healthcare in Siliguri — from periods, PCOS &amp; fertility evaluations to gentle normal delivery, high-risk pregnancy management, and advanced laparoscopic surgery.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-1">
              <button
                type="button"
                onClick={() => handleOpenBooking("subham")}
                className="btn-whatsapp w-full sm:w-auto text-sm sm:text-base py-3 px-6 sm:py-3.5 sm:px-7 shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all justify-center cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-white" />
                <span>Book Appointment (Dr. Subham)</span>
              </button>

              <button
                type="button"
                onClick={() => handleOpenBooking("ruchika")}
                className="btn-primary w-full sm:w-auto text-sm sm:text-base py-3 px-6 sm:py-3.5 sm:px-7 shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all justify-center cursor-pointer"
              >
                <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Book with Dr. Ruchika</span>
              </button>
            </div>
          </div>

          {/* Right Column: Dual Doctor Portraits Showcase */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Visual Frame */}
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Couple Advantage Floating Badge */}
              <button
                type="button"
                onClick={() => handleOpenBooking("joint")}
                className="absolute -top-3.5 -left-2 sm:-top-4 sm:-left-4 z-20 bg-white/95 backdrop-blur-sm rounded-2xl p-2.5 sm:p-3 shadow-lg border border-[#FFCCD6] flex items-center gap-2.5 sm:gap-3 hover:scale-105 transition-transform text-left cursor-pointer"
                title="Click to inquire about Joint Care"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#FFF5F7] p-1.5 flex items-center justify-center shrink-0">
                  <Image
                    src="/images/brand/couple-art.png"
                    alt="Couple Care"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="text-[11px] sm:text-xs font-bold text-[#1A2229]">The Couple Advantage</p>
                  <p className="text-[10px] sm:text-[11px] text-[#FB5A7C] font-semibold">&ldquo;Family caring for your family&rdquo;</p>
                </div>
              </button>

              {/* Grid of Two Portraits */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                
                {/* Dr. Ruchika Card */}
                <Link
                  href="/doctors/dr-ruchika-agarwal"
                  className="group bg-white rounded-2xl sm:rounded-3xl p-2.5 sm:p-3 pb-3 sm:pb-4 shadow-md border-2 border-[#FFCCD6] hover:border-[#FB5A7C] hover:shadow-xl transition-all duration-300 block"
                >
                  <div className="relative w-full aspect-[4/4.8] rounded-xl sm:rounded-2xl overflow-hidden mb-2 sm:mb-2.5 bg-[#FFF5F7]">
                    <Image
                      src="/images/doctors/dr-ruchika-headshot.jpg"
                      alt="Dr. Ruchika Agarwal"
                      fill
                      sizes="(max-width: 768px) 50vw, 250px"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      priority
                    />
                  </div>
                  <div className="text-center">
                    <h2 className="font-bold text-[#1A2229] group-hover:text-[#FB5A7C] transition-colors text-xs sm:text-base leading-tight">
                      Dr. Ruchika Agarwal
                    </h2>
                    <p className="text-[10px] sm:text-[11px] font-semibold text-[#FB5A7C] mt-0.5">
                      MBBS, MS
                    </p>
                    <p className="text-[9px] sm:text-[10px] text-gray-500 mt-0.5 sm:mt-1 truncate">
                      Zivah Wellness Centre
                    </p>
                    <span className="inline-block text-[9px] sm:text-[10px] font-bold text-[#FB5A7C] mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      View Profile &rarr;
                    </span>
                  </div>
                </Link>

                {/* Dr. Subham Card */}
                <Link
                  href="/doctors/dr-subham-agarwal"
                  className="group bg-white rounded-2xl sm:rounded-3xl p-2.5 sm:p-3 pb-3 sm:pb-4 shadow-md border-2 border-[#BCE6F9] hover:border-[#2FB2EA] hover:shadow-xl transition-all duration-300 sm:translate-y-2 block"
                >
                  <div className="relative w-full aspect-[4/4.8] rounded-xl sm:rounded-2xl overflow-hidden mb-2 sm:mb-2.5 bg-[#F2FAFE]">
                    <Image
                      src="/images/doctors/dr-subham-headshot.png"
                      alt="Dr. Subham Agarwal"
                      fill
                      sizes="(max-width: 768px) 50vw, 250px"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      priority
                    />
                  </div>
                  <div className="text-center">
                    <h2 className="font-bold text-[#1A2229] group-hover:text-[#0B75A1] transition-colors text-xs sm:text-base leading-tight">
                      Dr. Subham Agarwal
                    </h2>
                    <p className="text-[10px] sm:text-[11px] font-semibold text-[#0B75A1] mt-0.5">
                      MBBS, MS, FMAS, FIAG
                    </p>
                    <p className="text-[9px] sm:text-[10px] text-gray-500 mt-0.5 sm:mt-1 truncate">
                      Manipal Hospital Siliguri
                    </p>
                    <span className="inline-block text-[9px] sm:text-[10px] font-bold text-[#0B75A1] mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      View Profile &rarr;
                    </span>
                  </div>
                </Link>

              </div>

              {/* Verified Clinical Stat Pill */}
              <div className="absolute -bottom-2.5 right-2 z-20 bg-white/95 backdrop-blur-sm rounded-xl py-1.5 px-2.5 sm:py-2 sm:px-3 shadow-md border border-sky-100 flex items-center gap-1.5 sm:gap-2">
                <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#10B981]"></span>
                <span className="text-[10px] sm:text-xs font-bold text-[#1A2229]">1,000+ Normal Deliveries</span>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Quick Booking Modal on WhatsApp */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialDoctor={selectedDoctor}
      />
    </section>
  );
}
