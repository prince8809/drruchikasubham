"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { DoctorFAQ } from "@/data/doctors";

interface DoctorFaqAccordionProps {
  faqs: DoctorFAQ[];
  doctorName: string;
  doctorShortName: string;
  accentColor: string;
}

export default function DoctorFaqAccordion({
  faqs,
  doctorName,
  doctorShortName,
  accentColor,
}: DoctorFaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Structured Data (JSON-LD) for Google Rich FAQ Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      {/* Google FAQ Schema Injection for Rich SEO snippet results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div
              key={faq.question}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                isOpen
                  ? "bg-white shadow-sm"
                  : "bg-white/80 border-gray-200 hover:border-gray-300"
              }`}
              style={isOpen ? { borderColor: `${accentColor}55` } : {}}
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 select-none cursor-pointer group"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors"
                    style={
                      isOpen
                        ? { backgroundColor: `${accentColor}1A`, color: accentColor }
                        : { backgroundColor: "#F3F4F6", color: "#9CA3AF" }
                    }
                  >
                    <HelpCircle className="w-4 h-4" />
                  </div>
                  <span
                    className="text-sm sm:text-base font-bold transition-colors text-[#1A2229]"
                  >
                    {faq.question}
                  </span>
                </div>

                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180 bg-gray-100" : "text-gray-400"
                  }`}
                  style={isOpen ? { color: accentColor } : {}}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-gray-100 pl-14 animate-in fade-in duration-150">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
