"use client";

import { useState, useEffect } from "react";
import { Star, ShieldCheck, Sparkles, Lock, X, MessageCircle } from "lucide-react";
import { patientReviews, PatientReview } from "@/data/reviews";
import { WHATSAPP_SUBHAM, WHATSAPP_RUCHIKA, WHATSAPP_JOINT } from "@/lib/constants";

export default function ReviewsSection() {
  const [selectedReview, setSelectedReview] = useState<PatientReview | null>(null);
  const doubledReviews = [...patientReviews, ...patientReviews];

  // Lock body scroll and handle Escape key for the review reading modal
  useEffect(() => {
    if (!selectedReview) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedReview(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedReview]);

  return (
    <section id="reviews" className="py-6 sm:py-8 bg-[#FAFAF9] border-t border-[#F1E5E8] relative overflow-hidden scroll-mt-24 sm:scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-3 sm:mb-4">
        
        {/* Header with 4.9-Star Trust Badge */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-center sm:text-left">
          <div>
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-1 flex-wrap">
              <span className="badge-primary text-[10px] py-0.5 px-2.5">
                <Sparkles className="w-3 h-3 text-[#FB5A7C]" />
                Patient Stories &amp; Reviews
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                <Lock className="w-3 h-3 text-gray-400" />
                Medical Confidentiality Protected
              </span>
            </div>
            <h2 className="text-lg sm:text-2xl font-bold text-[#1A2229] leading-tight">
              Trusted by Families Across North Bengal &amp; Sikkim
            </h2>
            <p className="text-xs text-[#64748B] mt-0.5 hidden sm:block">
              Real patient feedback for normal deliveries, high-risk care, and surgeries. Tap any review to expand.
            </p>
          </div>

          {/* 4.9 / 5.0 Rating Pill */}
          <div className="inline-flex items-center justify-center sm:justify-end gap-2 bg-white px-3.5 py-1.5 rounded-full border border-amber-200 shadow-2xs shrink-0 self-center sm:self-auto">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 ${
                    i === 4 ? "fill-amber-400/70 text-amber-400" : "fill-amber-400 text-amber-400"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs font-extrabold text-[#1A2229]">
              4.9 / 5.0 <span className="font-normal text-gray-500 text-[11px]">(100+ Reviews)</span>
            </span>
          </div>
        </div>

      </div>

      {/* Infinite Smooth Scrolling Testimonial Marquee */}
      <div className="relative w-full overflow-hidden group">
        {/* Edge Fade Gradients */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-16 bg-gradient-to-r from-[#FAFAF9] via-[#FAFAF9]/80 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-16 bg-gradient-to-l from-[#FAFAF9] via-[#FAFAF9]/80 to-transparent z-10" />

        {/* Scrolling Ticker Track */}
        <div className="animate-marquee gap-3 sm:gap-4 py-1.5 pl-4">
          {doubledReviews.map((rev, i) => (
            <div
              key={`${rev.id}-${i}`}
              onClick={() => setSelectedReview(rev)}
              className="w-[280px] sm:w-[320px] shrink-0 bg-white rounded-2xl p-4 border border-gray-100 shadow-2xs hover:border-[#FFCCD6] hover:shadow-md transition-all duration-300 flex flex-col justify-between select-none cursor-pointer group/card"
            >
              <div>
                {/* Rating & Treatment Badge */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="w-3 h-3 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-gray-500 bg-gray-50 border border-gray-100 px-2 py-0.5 rounded-full truncate max-w-[150px]">
                    {rev.treatment}
                  </span>
                </div>

                {/* Review Text - Full text visible, no ellipsis clamping */}
                <p className="text-xs text-[#475569] leading-relaxed italic">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              {/* Patient Info Footer */}
              <div className="pt-3 mt-3 border-t border-gray-100 flex items-center justify-between text-[11px]">
                <div className="min-w-0 pr-2">
                  <strong className="block text-[#1A2229] font-bold truncate">
                    {rev.name}
                  </strong>
                  <span className="text-gray-400 text-[10px] block truncate">
                    {rev.location} &bull; {rev.doctor}
                  </span>
                </div>

                {rev.verified && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-md shrink-0">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    Verified
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Expanded Patient Story Modal (Opens on click/tap for focused reading) */}
      {selectedReview && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedReview(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-md bg-white text-[#1A2229] rounded-3xl p-6 sm:p-7 shadow-2xl border border-pink-100 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedReview(null)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close review"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header info */}
            <div className="mb-4 pr-6">
              <div className="flex items-center gap-1 mb-2">
                {[...Array(selectedReview.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-xs font-bold text-amber-600 ml-1.5">5.0 / 5.0 Rating</span>
              </div>
              <span className="inline-block text-xs font-bold text-[#FB5A7C] bg-[#FFF5F7] border border-[#FFCCD6] px-2.5 py-0.5 rounded-full">
                {selectedReview.treatment}
              </span>
            </div>

            {/* Full Story Content */}
            <blockquote className="text-sm sm:text-base text-[#1A2229] leading-relaxed italic bg-gray-50/80 p-4 rounded-2xl border border-gray-100">
              &ldquo;{selectedReview.comment}&rdquo;
            </blockquote>

            {/* Review Meta Info */}
            <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-xs">
              <div>
                <strong className="block text-[#1A2229] font-bold text-sm">
                  {selectedReview.name}
                </strong>
                <span className="text-gray-500 text-[11px] block mt-0.5">
                  {selectedReview.location} &bull; {selectedReview.doctor}
                </span>
              </div>

              <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full shrink-0">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Verified Patient
              </span>
            </div>

            {/* Quick CTA */}
            <div className="mt-5 pt-3">
              {(() => {
                const isJoint = selectedReview.doctor.includes("Both") || selectedReview.doctor.includes("Joint");
                const isRuchika = selectedReview.doctor.includes("Ruchika") && !isJoint;
                const baseUrl = isJoint ? WHATSAPP_JOINT : isRuchika ? WHATSAPP_RUCHIKA : WHATSAPP_SUBHAM;
                const docText = isJoint
                  ? "a Joint Consultation with both Dr. Ruchika and Dr. Subham"
                  : isRuchika
                  ? "an appointment with Dr. Ruchika Agarwal"
                  : "an appointment with Dr. Subham Agarwal";
                const reviewBookingUrl = `${baseUrl.split("?")[0]}?text=${encodeURIComponent(
                  `Hey I want to book ${docText} regarding ${selectedReview.treatment}`
                )}`;

                return (
                  <a
                    href={reviewBookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp w-full justify-center text-xs py-2.5 rounded-full shadow-md font-bold"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Book Consultation for this Condition</span>
                  </a>
                );
              })()}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
