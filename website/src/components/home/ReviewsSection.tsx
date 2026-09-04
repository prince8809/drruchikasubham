"use client";

import { Star, CheckCircle2, Quote, Sparkles } from "lucide-react";
import { patientReviews } from "@/data/reviews";

export default function ReviewsSection() {
  const doubledReviews = [...patientReviews, ...patientReviews];

  return (
    <section id="reviews" className="py-6 sm:py-8 bg-[#FAFAF9] border-t border-[#F1E5E8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-3 sm:mb-4">
        
        {/* Crisp Header with 5-Star Trust Badge */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-center sm:text-left">
          <div>
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
              <span className="badge-primary text-[10px] py-0.5 px-2.5">
                <Sparkles className="w-3 h-3 text-[#FB5A7C]" />
                Patient Stories &amp; Reviews
              </span>
              <span className="text-[11px] font-semibold text-gray-400 hidden sm:inline">&bull; Verified Care</span>
            </div>
            <h2 className="text-lg sm:text-2xl font-bold text-[#1A2229] leading-tight">
              Trusted by Families Across North Bengal &amp; Sikkim
            </h2>
            <p className="text-xs text-[#64748B] mt-0.5 hidden sm:block">
              Real patient experiences for normal deliveries, high-risk pregnancies, and advanced gynaec surgeries.
            </p>
          </div>

          {/* Google 5.0 Star Pill */}
          <div className="inline-flex items-center justify-center sm:justify-end gap-2 bg-white px-3 py-1.5 rounded-full border border-amber-200 shadow-2xs shrink-0 self-center sm:self-auto">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-xs font-bold text-[#1A2229]">5.0 / 5.0 Rating</span>
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
              className="w-[280px] sm:w-[320px] shrink-0 bg-white rounded-2xl p-4 border border-gray-100 shadow-2xs hover:border-[#FFCCD6] hover:shadow-md transition-all duration-300 flex flex-col justify-between select-none"
            >
              <div>
                {/* Rating & Treatment Badge */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-0.5">
                    {[...Array(rev.rating)].map((_, idx) => (
                      <Star key={idx} className="w-3 h-3 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-gray-500 bg-gray-50 border border-gray-100 px-2 py-0.5 rounded-full truncate max-w-[150px]">
                    {rev.treatment}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-xs text-[#475569] leading-relaxed line-clamp-3 italic">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              {/* Patient Info Footer */}
              <div className="pt-3 mt-3 border-t border-gray-100 flex items-center justify-between text-[11px]">
                <div>
                  <strong className="block text-[#1A2229] font-bold truncate max-w-[150px]">
                    {rev.name}
                  </strong>
                  <span className="text-gray-400 text-[10px] block truncate">
                    {rev.location} &bull; {rev.doctor}
                  </span>
                </div>

                {rev.verified && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded-md shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    Verified
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
