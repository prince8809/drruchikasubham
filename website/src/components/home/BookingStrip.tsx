"use client";

import { useState } from "react";
import { MessageCircle, Calendar, ShieldCheck, MapPin } from "lucide-react";
import {
  WHATSAPP_SUBHAM,
  WHATSAPP_RUCHIKA,
  PRIMARY_CONCERN_OPTIONS,
} from "@/lib/constants";

export default function BookingStrip() {
  const [selectedDoctor, setSelectedDoctor] = useState<"subham" | "ruchika" | "joint">("ruchika");
  const [patientName, setPatientName] = useState("");
  const [concern, setConcern] = useState("");

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const docName =
      selectedDoctor === "ruchika"
        ? "Dr. Ruchika Agarwal"
        : selectedDoctor === "subham"
        ? "Dr. Subham Agarwal"
        : "Both Doctors (Joint Consultation - Dr. Ruchika & Dr. Subham)";
    const message = `Hey I want to Book an appointment with ${docName}. Name: ${patientName || "Patient"}. Concern: ${concern || "General Consultation"}.`;
    const targetUrl = selectedDoctor === "ruchika" ? WHATSAPP_RUCHIKA : WHATSAPP_SUBHAM;
    const finalUrl = `${targetUrl.split("?")[0]}?text=${encodeURIComponent(message)}`;
    window.location.href = finalUrl;
  };

  return (
    <section id="booking" className="py-20 bg-gradient-to-br from-[#E24A6F] via-[#D13B60] to-[#B0264A] text-white relative overflow-hidden scroll-mt-24 sm:scroll-mt-28">
      {/* Decorative ambient bubbles */}
      <div className="absolute -top-10 -right-10 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
      <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-black/10 rounded-full blur-2xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Reassurance & Info with High-Contrast Typography */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <span className="inline-flex items-center gap-1.5 bg-white text-[#C73859] px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider shadow-md">
              <Calendar className="w-3.5 h-3.5 text-[#F57B94]" />
              <span>Instant Appointment Confirmation</span>
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.30)]">
              Ready for Compassionate, Dedicated Care?
            </h2>

            <p className="text-white/95 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]">
              No long queues or complicated forms. Connect directly with our clinic desks on WhatsApp to select your preferred day, time, and doctor.
            </p>

            {/* Quick Consultation Facility Badges (Sleek & Compact Option 2) */}
            <div className="space-y-2.5 pt-1 text-left">
              <div className="bg-white/95 backdrop-blur-sm text-[#1A2229] py-3 px-4 rounded-2xl shadow-md border border-pink-100 flex items-center justify-between gap-3 hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-xl bg-[#FFF0F3] border border-[#FFD3DC] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-[#E02958]" />
                  </div>
                  <div className="truncate">
                    <strong className="block text-[#1A2229] font-bold text-xs sm:text-sm truncate">
                      Dr. Ruchika &bull; Zivah Wellness Centre
                    </strong>
                    <span className="text-[#64748B] text-[11px] sm:text-xs font-medium">
                      Pradhan Nagar, Siliguri
                    </span>
                  </div>
                </div>
                <span className="shrink-0 text-[11px] sm:text-xs font-bold text-[#E02958] bg-[#FFF0F3] px-2.5 py-1 rounded-full border border-pink-100 whitespace-nowrap">
                  Mon – Fri: 10 AM – 2 PM
                </span>
              </div>

              <div className="bg-white/95 backdrop-blur-sm text-[#1A2229] py-3 px-4 rounded-2xl shadow-md border border-sky-100 flex items-center justify-between gap-3 hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-xl bg-[#EBF4FC] border border-[#BCD7F5] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-[#1E6BB8]" />
                  </div>
                  <div className="truncate">
                    <strong className="block text-[#1A2229] font-bold text-xs sm:text-sm truncate">
                      Dr. Subham &bull; Manipal Hospital
                    </strong>
                    <span className="text-[#64748B] text-[11px] sm:text-xs font-medium">
                      Ward 2, Siliguri
                    </span>
                  </div>
                </div>
                <span className="shrink-0 text-[11px] sm:text-xs font-bold text-[#1E6BB8] bg-[#EBF4FC] px-2.5 py-1 rounded-full border border-sky-100 whitespace-nowrap">
                  Mon – Fri: 10 AM – 6 PM
                </span>
              </div>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-2 pt-2 text-xs text-white font-semibold drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]">
              <ShieldCheck className="w-4 h-4 text-emerald-300 shrink-0" />
              <span>Cashless &amp; TPA Insurance Accepted for Deliveries &amp; Surgeries</span>
            </div>
          </div>

          {/* Right Column: Interactive Quick Booking Form */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-md bg-white text-[#1A2229] rounded-3xl p-6 sm:p-8 shadow-2xl border border-pink-100">
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-[#1A2229]">Quick Booking on WhatsApp</h3>
                <p className="text-xs text-[#64748B] mt-1">
                  Fill details below to open a pre-filled WhatsApp message directly.
                </p>
              </div>

              <form onSubmit={handleBookingSubmit} className="space-y-4">
                
                {/* Doctor Selection: Pink for Dr. Ruchika, Blue for Dr. Subham */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-2">
                    Select Doctor / Consultation:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedDoctor("ruchika")}
                      className={`p-2.5 rounded-xl text-xs font-bold border transition-all text-center cursor-pointer ${
                        selectedDoctor === "ruchika"
                          ? "bg-[#F57B94] text-white border-[#F57B94] shadow-sm"
                          : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                      }`}
                    >
                      Dr. Ruchika
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedDoctor("subham")}
                      className={`p-2.5 rounded-xl text-xs font-bold border transition-all text-center cursor-pointer ${
                        selectedDoctor === "subham"
                          ? "bg-[#4384C6] text-white border-[#4384C6] shadow-sm"
                          : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                      }`}
                    >
                      Dr. Subham
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedDoctor("joint")}
                      className={`p-2.5 rounded-xl text-xs font-bold border transition-all text-center cursor-pointer ${
                        selectedDoctor === "joint"
                          ? "bg-gradient-to-r from-[#F57B94] to-[#4384C6] text-white border-transparent shadow-sm"
                          : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                      }`}
                    >
                      Joint Care
                    </button>
                  </div>
                </div>

                {/* Patient Name */}
                <div>
                  <label htmlFor="patient-name" className="block text-xs font-bold text-gray-700 mb-1">
                    Patient Name:
                  </label>
                  <input
                    id="patient-name"
                    type="text"
                    required
                    placeholder="Enter patient full name"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FB5A7C] transition-all"
                  />
                </div>

                {/* Primary Concern */}
                <div>
                  <label htmlFor="concern-select" className="block text-xs font-bold text-gray-700 mb-1">
                    Primary Concern / Reason:
                  </label>
                  <select
                    id="concern-select"
                    value={concern}
                    onChange={(e) => setConcern(e.target.value)}
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FB5A7C] transition-all bg-white"
                  >
                    <option value="">Choose a condition / general visit</option>
                    {PRIMARY_CONCERN_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="btn-whatsapp w-full justify-center text-sm py-3.5 shadow-lg hover:shadow-xl font-bold"
                  >
                    <MessageCircle className="w-5 h-5 fill-white" />
                    <span>Proceed to WhatsApp Booking</span>
                  </button>
                  <p className="text-[11px] text-gray-400 text-center mt-2">
                    Opens official clinic WhatsApp chat &bull; Free instant routing
                  </p>
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
