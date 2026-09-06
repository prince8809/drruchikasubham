"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MessageCircle,
  Heart,
  Sparkles,
  Activity,
  Baby,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Clock,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import BookingModal from "@/components/shared/BookingModal";

interface HeroSlide {
  id: string;
  tabLabel: string;
  badge: string;
  badgeIcon: "sparkles" | "activity" | "baby";
  titleLine1: string;
  titleLine2: string;
  titleAccent: string;
  doctorCredentials: string;
  doctorCredentialsMobile?: string;
  description: string;
  mobileDescription?: string;
  image: string;
  alt: string;
  primaryBtn: {
    label: string;
    doctor: "ruchika" | "subham" | "joint";
    icon: "heart" | "activity";
    className: string;
  };
  secondaryBtn: {
    label: string;
    doctor: "ruchika" | "subham" | "joint";
  };
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: "duo-care",
    tabLabel: "Duo Care",
    badge: "Husband-Wife Specialist Duo",
    badgeIcon: "sparkles",
    titleLine1: "Your Health. Your Fertility.",
    titleLine2: "Your Pregnancy.",
    titleAccent: "Expertly\u00A0Cared\u00A0For.",
    doctorCredentials:
      "Dr. Ruchika & Dr. Subham Agarwal • Obstetricians, Gynaecologists & Laparoscopic Surgeons in Siliguri",
    doctorCredentialsMobile:
      "Dr. Ruchika & Dr. Subham Agarwal • Siliguri Gynaecologists & Surgeons",
    description:
      "Complete women's healthcare in Siliguri — from periods, PCOS & fertility evaluations to gentle normal delivery, high-risk pregnancy management, and advanced laparoscopic surgery.",
    mobileDescription:
      "Complete women's healthcare in Siliguri — fertility evaluations, gentle normal delivery, high-risk care & keyhole surgery.",
    image: "/images/hero/slide-consultation.jpg",
    alt: "Warm clinical consultation and patient lounge with Dr. Ruchika and Dr. Subham Agarwal",
    primaryBtn: {
      label: "Book with Dr. Ruchika",
      doctor: "ruchika",
      icon: "heart",
      className: "btn-primary",
    },
    secondaryBtn: {
      label: "Book with Dr. Subham",
      doctor: "subham",
    },
  },
  {
    id: "laparoscopy",
    tabLabel: "Surgical OT",
    badge: "Advanced Surgical Precision",
    badgeIcon: "activity",
    titleLine1: "Minimally Invasive Care.",
    titleLine2: "Keyhole Laparoscopy.",
    titleAccent: "Rapid 24h Recovery.",
    doctorCredentials:
      "Led by Dr. Subham Agarwal & Dr. Ruchika Agarwal • Specialist Laparoscopic Surgeons",
    doctorCredentialsMobile:
      "Dr. Subham & Dr. Ruchika Agarwal • Specialist Laparoscopic Surgeons",
    description:
      "Advanced keyhole surgery for ovarian cysts, uterine fibroids, severe endometriosis, ectopic pregnancy, and laparoscopic hysterectomy with minimal discomfort, tiny incisions, and fast discharge.",
    mobileDescription:
      "Advanced keyhole surgery for ovarian cysts, fibroids, endometriosis & hysterectomy with tiny 5mm incisions & fast recovery.",
    image: "/images/hero/slide-laparoscopy.jpg",
    alt: "State of the art 4K laparoscopic surgical operating suite",
    primaryBtn: {
      label: "Consult Dr. Subham",
      doctor: "subham",
      icon: "activity",
      className:
        "bg-[#0B75A1] hover:bg-[#095C7F] text-white rounded-full shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all",
    },
    secondaryBtn: {
      label: "Book with Dr. Ruchika",
      doctor: "ruchika",
    },
  },
  {
    id: "maternity",
    tabLabel: "Maternity Suite",
    badge: "Evidence-Based Obstetrics",
    badgeIcon: "baby",
    titleLine1: "Gentle Maternity Care.",
    titleLine2: "Safe, Joyous Births.",
    titleAccent: "Dedicated Fetal Care.",
    doctorCredentials:
      "Led by Dr. Ruchika Agarwal & Dr. Subham Agarwal • Consultant Obstetricians & Infertility Specialists",
    doctorCredentialsMobile:
      "Dr. Ruchika & Dr. Subham Agarwal • Obstetricians & Infertility Specialists",
    description:
      "Compassionate prenatal care, normal delivery advocacy, high-risk pregnancy fetal ultrasound monitoring, and unhurried consultation from conception to birth in modern birthing suites.",
    mobileDescription:
      "Compassionate prenatal care, normal delivery advocacy & high-risk pregnancy monitoring in modern birthing suites.",
    image: "/images/hero/slide-maternity-v2.jpg",
    alt: "Modern private hospital maternity birthing suite with neonatal infant warmer and fetal ultrasound monitor",
    primaryBtn: {
      label: "Consult Dr. Ruchika",
      doctor: "ruchika",
      icon: "heart",
      className: "btn-primary",
    },
    secondaryBtn: {
      label: "Book with Dr. Subham",
      doctor: "subham",
    },
  },
];

export default function HeroSection() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<"subham" | "ruchika" | "joint">("subham");
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleOpenBooking = (doctor: "subham" | "ruchika" | "joint") => {
    setSelectedDoctor(doctor);
    setBookingModalOpen(true);
  };

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  // Auto-scroll every 3.8 seconds (pauses on hover or modal)
  useEffect(() => {
    if (isPaused || bookingModalOpen) return;

    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 3800);

    return () => clearInterval(interval);
  }, [isPaused, bookingModalOpen]);

  const currentSlide = HERO_SLIDES[activeSlide];

  return (
    <section
      id="doctors"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
      className="relative overflow-hidden min-h-[620px] sm:min-h-[660px] lg:min-h-[700px] flex items-center bg-slate-900 pt-8 pb-10 sm:pt-12 sm:pb-12"
    >
      {/* =========================================================================
          1. 3-SLIDE CINEMATIC HERO BACKGROUND IMAGES (Layer z-0)
          ========================================================================= */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {HERO_SLIDES.map((slide, idx) => {
          const isActive = idx === activeSlide;

          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority
                sizes="100vw"
                className={`w-full h-full object-cover transition-transform duration-[8000ms] ease-out ${
                  slide.id === "duo-care"
                    ? "object-[72%_center] sm:object-center brightness-[1.18] sm:brightness-[1.06] contrast-[0.98]"
                    : slide.id === "laparoscopy"
                    ? "object-center brightness-[1.18] sm:brightness-[1.06] contrast-[0.98]"
                    : "object-center brightness-[1.02]"
                } ${isActive ? "scale-105" : "scale-100"}`}
              />
            </div>
          );
        })}
      </div>

      {/* =========================================================================
          2. DIRECTIONAL LUMINOUS READABILITY SHIELD (Layer z-10)
             Mobile: Luminous 80%->60% airy wash so all 3 slides feel equally bright & clear
             Desktop: Left 68%->50% soft reading wash, tapering to 0% so clinical suites shine
          ========================================================================= */}
      <div
        className="block sm:hidden absolute inset-0 z-10 pointer-events-none backdrop-blur-[1px]"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.80) 0%, rgba(255, 255, 255, 0.60) 45%, rgba(255, 255, 255, 0.22) 75%, rgba(255, 255, 255, 0.38) 100%)",
        }}
      />
      <div
        className="hidden sm:block absolute inset-0 z-10 pointer-events-none backdrop-blur-[1px]"
        style={{
          background:
            "linear-gradient(90deg, rgba(255, 255, 255, 0.78) 0%, rgba(255, 255, 255, 0.60) 40%, rgba(255, 255, 255, 0.22) 65%, transparent 100%)",
        }}
      />

      {/* =========================================================================
          3. MANUAL NAVIGATION ARROWS (Layer z-30)
          ========================================================================= */}
      <button
        type="button"
        onClick={handlePrevSlide}
        aria-label="Previous slide"
        className="hidden 2xl:flex absolute left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/85 hover:bg-white text-gray-700 hover:text-[#FB5A7C] items-center justify-center shadow-lg hover:shadow-xl border border-pink-100 backdrop-blur-sm transition-all hover:scale-110 active:scale-95 cursor-pointer"
        title="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        type="button"
        onClick={handleNextSlide}
        aria-label="Next slide"
        className="hidden 2xl:flex absolute right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/85 hover:bg-white text-gray-700 hover:text-[#FB5A7C] items-center justify-center shadow-lg hover:shadow-xl border border-pink-100 backdrop-blur-sm transition-all hover:scale-110 active:scale-95 cursor-pointer"
        title="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* =========================================================================
          4. FOREGROUND CONTENT: HEADLINE, CTAs, AND DYNAMIC SHOWCASE (Layer z-20)
          ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Dynamic Slide Headlines & 1-Tap CTAs */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-center lg:text-left">
            
            {/* Slide Category Pill */}
            <div className="inline-flex items-center gap-2 bg-[#FFF0F3] backdrop-blur-xs border border-[#FFD3DC] px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold text-[#C73859] shadow-2xs">
              {currentSlide.badgeIcon === "sparkles" && <Sparkles className="w-3.5 h-3.5 text-[#F57B94]" />}
              {currentSlide.badgeIcon === "activity" && <Activity className="w-3.5 h-3.5 text-[#4384C6]" />}
              {currentSlide.badgeIcon === "baby" && <Baby className="w-3.5 h-3.5 text-[#F57B94]" />}
              <span>{currentSlide.badge}</span>
            </div>

            {/* Dynamic Main Headline */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1A2229] tracking-tight leading-[1.2] sm:leading-[1.15] transition-all duration-300">
              <span className="block sm:inline">{currentSlide.titleLine1}</span>{" "}
              <span className="block sm:inline">{currentSlide.titleLine2}</span>{" "}
              <span
                className={`inline-block bg-gradient-to-r ${
                  currentSlide.id === "laparoscopy"
                    ? "from-[#1D70B8] via-[#1565C0] to-[#0D47A1]"
                    : "from-[#E02958] via-[#D81B60] to-[#AD1457]"
                } bg-clip-text text-transparent filter drop-shadow-[0_1px_1px_rgba(255,255,255,0.95)]`}
              >
                {currentSlide.titleAccent}
              </span>
            </h1>

            {/* Doctor Credentials Subline — Sleek & Integrated */}
            <p className="text-xs sm:text-sm font-bold text-[#111827] flex items-center justify-center lg:justify-start gap-2 [text-shadow:_0_1px_3px_rgba(255,255,255,0.9)]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 animate-pulse" />
              <span className="hidden sm:inline">{currentSlide.doctorCredentials}</span>
              <span className="sm:hidden">{currentSlide.doctorCredentialsMobile || currentSlide.doctorCredentials}</span>
            </p>

            {/* Subtitle / Description — Translucent Sheer Glass Ribbon (Readable & Breathable) */}
            <div
              className={`max-w-2xl mx-auto lg:mx-0 border-l-4 ${
                currentSlide.id === "laparoscopy"
                  ? "border-l-[#1E6BB8] bg-white/70"
                  : "border-l-[#E02958] bg-white/70"
              } py-2 px-3 sm:py-3 sm:px-4 rounded-xl sm:rounded-2xl backdrop-blur-xs text-left shadow-2xs`}
            >
              <p className="hidden sm:block text-base sm:text-lg text-[#0F172A] font-medium leading-relaxed [text-shadow:_0_1px_2px_rgba(255,255,255,0.8)]">
                {currentSlide.description}
              </p>
              <p className="block sm:hidden text-xs sm:text-sm text-[#0F172A] font-medium leading-relaxed [text-shadow:_0_1px_2px_rgba(255,255,255,0.8)]">
                {currentSlide.mobileDescription || currentSlide.description}
              </p>
            </div>

            {/* CTA Buttons: Dr. Ruchika = Rose Pink (#F57B94), Dr. Subham = Azure Blue (#4384C6) */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-1">
              <button
                type="button"
                onClick={() => handleOpenBooking(currentSlide.primaryBtn.doctor)}
                className={`w-full sm:w-auto text-sm sm:text-base py-3 px-6 sm:py-3.5 sm:px-7 rounded-full font-bold shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  currentSlide.primaryBtn.doctor === "ruchika"
                    ? "bg-[#F57B94] hover:bg-[#E6627E] text-white"
                    : "bg-[#4384C6] hover:bg-[#3271B2] text-white"
                }`}
              >
                {currentSlide.primaryBtn.doctor === "ruchika" ? (
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-white" />
                ) : (
                  <Activity className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                )}
                <span>{currentSlide.primaryBtn.label}</span>
              </button>

              <button
                type="button"
                onClick={() => handleOpenBooking(currentSlide.secondaryBtn.doctor)}
                className={`w-full sm:w-auto text-sm sm:text-base py-3 px-6 sm:py-3.5 sm:px-7 rounded-full font-bold shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  currentSlide.secondaryBtn.doctor === "ruchika"
                    ? "bg-[#F57B94] hover:bg-[#E6627E] text-white"
                    : "bg-[#4384C6] hover:bg-[#3271B2] text-white"
                }`}
              >
                {currentSlide.secondaryBtn.doctor === "ruchika" ? (
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-white" />
                ) : (
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-white" />
                )}
                <span>{currentSlide.secondaryBtn.label}</span>
              </button>
            </div>

            {/* 3-Tab Slide Ticker with Live 6s Animated Progress Bar */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3">
              {HERO_SLIDES.map((slide, i) => {
                const isCurrent = activeSlide === i;
                return (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => setActiveSlide(i)}
                    className={`relative overflow-hidden group flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${
                      isCurrent
                        ? "bg-white text-[#1A2229] shadow-md border border-[#F57B94]/40 scale-105"
                        : "bg-white/70 hover:bg-white text-gray-600 hover:text-gray-900 border border-white/80"
                    }`}
                    title={`Go to ${slide.tabLabel}`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${
                        isCurrent ? "bg-[#F57B94] animate-pulse" : "bg-gray-300"
                      }`}
                    />
                    <span>
                      0{i + 1} {slide.tabLabel}
                    </span>

                    {/* Live Progress Bar Underline */}
                    {isCurrent && !isPaused && (
                      <div
                        key={`progress-${activeSlide}`}
                        className="absolute bottom-0 left-0 h-0.5 bg-[#F57B94]"
                        style={{
                          animation: "heroProgress 3800ms linear forwards",
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

          </div>

          {/* Right Column: Dynamic Visual Showcase Frame */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* ===============================================================
                SLIDE 0: DUAL DOCTOR CARDS ("THE COUPLE ADVANTAGE")
                =============================================================== */}
            {activeSlide === 0 && (
              <div className="relative w-full max-w-sm sm:max-w-md animate-fadeIn">
                {/* Couple Advantage Floating Badge */}
                <button
                  type="button"
                  onClick={() => handleOpenBooking("joint")}
                  className="absolute -top-3.5 -left-2 sm:-top-4 sm:-left-4 z-20 bg-white/95 backdrop-blur-sm rounded-2xl p-2.5 sm:p-3 shadow-lg border border-[#FFD3DC] flex items-center gap-2.5 sm:gap-3 hover:scale-105 transition-transform text-left cursor-pointer"
                  title="Click to inquire about Joint Care"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#FFF0F3] p-1.5 flex items-center justify-center shrink-0">
                    <Image
                      src="/images/brand/couple-art-v2.png"
                      alt="Couple Care"
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-[11px] sm:text-xs font-bold text-[#1A2229]">The Couple Advantage</p>
                    <p className="text-[10px] sm:text-[11px] text-[#F57B94] font-semibold">
                      &ldquo;Family caring for your family&rdquo;
                    </p>
                  </div>
                </button>

                {/* Grid of Two Portraits */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {/* Dr. Ruchika Card */}
                  <Link
                    href="/doctors/dr-ruchika-agarwal"
                    className="group bg-white/95 backdrop-blur-xs rounded-2xl sm:rounded-3xl p-2.5 sm:p-3 pb-3 sm:pb-4 shadow-md border-2 border-[#FFD3DC] hover:border-[#F57B94] hover:shadow-xl transition-all duration-300 block"
                  >
                    <div className="relative w-full aspect-[4/4.8] rounded-xl sm:rounded-2xl overflow-hidden mb-2 sm:mb-2.5 bg-[#FFF0F3]">
                      <Image
                        src="/images/doctors/dr-ruchika-headshot.webp"
                        alt="Dr. Ruchika Agarwal"
                        fill
                        sizes="(max-width: 768px) 50vw, 250px"
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        priority
                      />
                    </div>
                    <div className="text-center">
                      <h2 className="font-bold text-[#1A2229] group-hover:text-[#F57B94] transition-colors text-xs sm:text-base leading-tight">
                        Dr. Ruchika Agarwal
                      </h2>
                      <p className="text-[10px] sm:text-[11px] font-semibold text-[#F57B94] mt-0.5">
                        MBBS, MS
                      </p>
                      <p className="text-[9px] sm:text-[10px] text-gray-500 mt-0.5 sm:mt-1 truncate">
                        Obstetrician &amp; Gynaecologist
                      </p>
                      <span className="inline-block text-[9px] sm:text-[10px] font-bold text-[#F57B94] mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        View Profile &rarr;
                      </span>
                    </div>
                  </Link>

                  {/* Dr. Subham Card */}
                  <Link
                    href="/doctors/dr-subham-agarwal"
                    className="group bg-white/95 backdrop-blur-xs rounded-2xl sm:rounded-3xl p-2.5 sm:p-3 pb-3 sm:pb-4 shadow-md border-2 border-[#BCD7F5] hover:border-[#4384C6] hover:shadow-xl transition-all duration-300 sm:translate-y-2 block"
                  >
                    <div className="relative w-full aspect-[4/4.8] rounded-xl sm:rounded-2xl overflow-hidden mb-2 sm:mb-2.5 bg-[#EBF4FC]">
                      <Image
                        src="/images/doctors/dr-subham-headshot.webp"
                        alt="Dr. Subham Agarwal"
                        fill
                        sizes="(max-width: 768px) 50vw, 250px"
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        priority
                      />
                    </div>
                    <div className="text-center">
                      <h2 className="font-bold text-[#1A2229] group-hover:text-[#4384C6] transition-colors text-xs sm:text-base leading-tight">
                        Dr. Subham Agarwal
                      </h2>
                      <p className="text-[10px] sm:text-[11px] font-semibold text-[#4384C6] mt-0.5">
                        MBBS, MS, FMAS, FIAG
                      </p>
                      <p className="text-[9px] sm:text-[10px] text-gray-500 mt-0.5 sm:mt-1 truncate">
                        Laparoscopic Surgeon
                      </p>
                      <span className="inline-block text-[9px] sm:text-[10px] font-bold text-[#4384C6] mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        View Profile &rarr;
                      </span>
                    </div>
                  </Link>
                </div>

                {/* Verified Stat Pill */}
                <div className="absolute -bottom-2.5 right-2 z-20 bg-white/95 backdrop-blur-sm rounded-xl py-1.5 px-2.5 sm:py-2 sm:px-3 shadow-md border border-pink-100 flex items-center gap-1.5 sm:gap-2">
                  <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#10B981]"></span>
                  <span className="text-[10px] sm:text-xs font-bold text-[#1A2229]">1,000+ Normal Deliveries</span>
                </div>
              </div>
            )}

            {/* ===============================================================
                SLIDE 1: SURGICAL EXCELLENCE CARD (DR. SUBHAM LAPAROSCOPY)
                =============================================================== */}
            {activeSlide === 1 && (
              <div className="relative w-full max-w-sm sm:max-w-md bg-white/95 backdrop-blur-md rounded-3xl p-5 sm:p-6 shadow-xl border-2 border-[#BCD7F5] animate-fadeIn">
                {/* Header with Dr. Subham Avatar */}
                <div className="flex items-center gap-3.5 pb-4 border-b border-sky-100">
                  <div className="relative w-14 h-14 rounded-2xl overflow-hidden shrink-0 border-2 border-[#4384C6] bg-[#EBF4FC] shadow-sm">
                    <Image
                      src="/images/doctors/dr-subham-headshot.webp"
                      alt="Dr. Subham Agarwal"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1A2229] text-base leading-tight">
                      Dr. Subham Agarwal
                    </h3>
                    <p className="text-xs font-semibold text-[#4384C6]">
                      MBBS, MS, FMAS, FIAG
                    </p>
                    <p className="text-[11px] text-gray-500">
                      Specialist Laparoscopic Surgeon
                    </p>
                  </div>
                </div>

                {/* 4 Surgical Highlights */}
                <div className="py-4 space-y-2.5">
                  <div className="flex items-center gap-2.5 text-xs text-[#1A2229] font-medium bg-[#EBF4FC]/80 p-2.5 rounded-xl border border-sky-100/60">
                    <CheckCircle2 className="w-4 h-4 text-[#4384C6] shrink-0" />
                    <span>4K Ultra-HD Video Laparoscopy</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-[#1A2229] font-medium bg-[#EBF4FC]/80 p-2.5 rounded-xl border border-sky-100/60">
                    <CheckCircle2 className="w-4 h-4 text-[#4384C6] shrink-0" />
                    <span>Tiny 5mm Keyhole Incisions &amp; Minimal Pain</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-[#1A2229] font-medium bg-[#EBF4FC]/80 p-2.5 rounded-xl border border-sky-100/60">
                    <Clock className="w-4 h-4 text-[#4384C6] shrink-0" />
                    <span>Rapid 24-Hour Hospital Recovery</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-[#1A2229] font-medium bg-[#EBF4FC]/80 p-2.5 rounded-xl border border-sky-100/60">
                    <ShieldCheck className="w-4 h-4 text-[#4384C6] shrink-0" />
                    <span>Cashless TPA Health Insurance Supported</span>
                  </div>
                </div>

                {/* Bottom Action Link */}
                <div className="pt-2 flex items-center justify-between border-t border-sky-100 text-xs">
                  <Link
                    href="/doctors/dr-subham-agarwal"
                    className="font-bold text-[#4384C6] hover:underline inline-flex items-center gap-1"
                  >
                    <span>View Surgical Credentials</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    99.4% Safety Rate
                  </span>
                </div>
              </div>
            )}

            {/* ===============================================================
                SLIDE 2: GENTLE MATERNITY CARD (DR. RUCHIKA OBSTETRICS)
                =============================================================== */}
            {activeSlide === 2 && (
              <div className="relative w-full max-w-sm sm:max-w-md bg-white/95 backdrop-blur-md rounded-3xl p-5 sm:p-6 shadow-xl border-2 border-[#FFD3DC] animate-fadeIn">
                {/* Header with Dr. Ruchika Avatar */}
                <div className="flex items-center gap-3.5 pb-4 border-b border-pink-100">
                  <div className="relative w-14 h-14 rounded-2xl overflow-hidden shrink-0 border-2 border-[#F57B94] bg-[#FFF0F3] shadow-sm">
                    <Image
                      src="/images/doctors/dr-ruchika-headshot.webp"
                      alt="Dr. Ruchika Agarwal"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1A2229] text-base leading-tight">
                      Dr. Ruchika Agarwal
                    </h3>
                    <p className="text-xs font-semibold text-[#F57B94]">
                      MBBS, MS (OBGYN)
                    </p>
                    <p className="text-[11px] text-gray-500">
                      Consultant Obstetrician &amp; Infertility
                    </p>
                  </div>
                </div>

                {/* 4 Maternity Highlights */}
                <div className="py-4 space-y-2.5">
                  <div className="flex items-center gap-2.5 text-xs text-[#1A2229] font-medium bg-[#FFF0F3]/80 p-2.5 rounded-xl border border-pink-100/60">
                    <CheckCircle2 className="w-4 h-4 text-[#F57B94] shrink-0" />
                    <span>1,000+ Normal &amp; Safe Deliveries</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-[#1A2229] font-medium bg-[#FFF0F3]/80 p-2.5 rounded-xl border border-pink-100/60">
                    <CheckCircle2 className="w-4 h-4 text-[#F57B94] shrink-0" />
                    <span>High-Risk Pregnancy &amp; Fetal Ultrasound</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-[#1A2229] font-medium bg-[#FFF0F3]/80 p-2.5 rounded-xl border border-pink-100/60">
                    <Heart className="w-4 h-4 text-[#F57B94] shrink-0 fill-[#F57B94]" />
                    <span>Painless Labor &amp; VBAC Support</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-[#1A2229] font-medium bg-[#FFF0F3]/80 p-2.5 rounded-xl border border-pink-100/60">
                    <Sparkles className="w-4 h-4 text-[#F57B94] shrink-0" />
                    <span>Unhurried, Family-Centered Consultations</span>
                  </div>
                </div>

                {/* Bottom Action Link */}
                <div className="pt-2 flex items-center justify-between border-t border-pink-100 text-xs">
                  <Link
                    href="/doctors/dr-ruchika-agarwal"
                    className="font-bold text-[#F57B94] hover:underline inline-flex items-center gap-1"
                  >
                    <span>View Maternity Profile</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    100% Empathetic
                  </span>
                </div>
              </div>
            )}

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
