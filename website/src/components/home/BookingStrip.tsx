"use client";

import { useState } from "react";
import { MessageCircle, Calendar, ShieldCheck, MapPin, Clock } from "lucide-react";
import {
  WHATSAPP_SUBHAM,
  WHATSAPP_RUCHIKA,
  ADDRESS_MANIPAL,
  ADDRESS_ZIVAH
} from "@/lib/constants";

export default function BookingStrip() {
  const [selectedDoctor, setSelectedDoctor] = useState<"subham" | "ruchika" | "joint">("subham");
  const [patientName, setPatientName] = useState("");
  const [concern, setConcern] = useState("");

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const docName = selectedDoctor === "subham" ? "Dr. Subham Agarwal" : selectedDoctor === "ruchika" ? "Dr. Ruchika Agarwal" : "Both Doctors (Joint Consultation)";
    const message = `Hey I want to Book an appointment with ${docName}. Name: ${patientName || "Patient"}. Concern: ${concern || "General Consultation"}.`;
    const targetUrl = selectedDoctor === "ruchika" ? WHATSAPP_RUCHIKA : WHATSAPP_SUBHAM;
    const finalUrl = `${targetUrl.split("?")[0]}?text=${encodeURIComponent(message)}`;
    window.location.href = finalUrl;
  };

  return (
    <section id="booking" className="py-20 bg-gradient-to-br from-[#FB5A7C] via-[#E54366] to-[#C4274C] text-white relative overflow-hidden scroll-mt-24 sm:scroll-mt-28">
      {/* Decorative ambient bubbles */}
      <div className="absolute -top-10 -right-10 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
      <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-black/10 rounded-full blur-2xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Reassurance & Info */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <span className="inline-block bg-white/20 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-white">
              Instant Appointment Confirmation
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Ready for Compassionate, Dedicated Care?
            </h2>

            <p className="text-white/90 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
              No long queues or complicated forms. Connect directly with our clinic desks on WhatsApp to select your preferred day, time, and doctor.
            </p>

            {/* Quick Location Pills */}
            <div className="space-y-3 pt-2 text-xs sm:text-sm text-left">
              <div className="bg-white/10 backdrop-blur-sm p-3.5 rounded-xl border border-white/15 flex items-start gap-3">
                <MapPin className="w-5 h-5 shrink-0 text-white mt-0.5" />
                <div>
                  <strong className="block text-white font-bold">Dr. Subham Agarwal &bull; Manipal Hospital Siliguri</strong>
                  <span className="text-white/80 text-xs">Mon – Fri: 10:00 AM – 6:00 PM &bull; {ADDRESS_MANIPAL}</span>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-3.5 rounded-xl border border-white/15 flex items-start gap-3">
                <MapPin className="w-5 h-5 shrink-0 text-white mt-0.5" />
                <div>
                  <strong className="block text-white font-bold">Dr. Ruchika Agarwal &bull; Zivah Wellness Centre</strong>
                  <span className="text-white/80 text-xs">Mon – Fri: 10:00 AM – 2:00 PM &bull; {ADDRESS_ZIVAH}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-2 pt-2 text-xs text-white/90 font-medium">
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
                
                {/* Doctor Selection */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-2">
                    Select Doctor / Consultation:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedDoctor("subham")}
                      className={`p-2.5 rounded-xl text-xs font-bold border transition-all text-center ${
                        selectedDoctor === "subham"
                          ? "bg-[#2FB2EA] text-white border-[#2FB2EA] shadow-sm"
                          : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                      }`}
                    >
                      Dr. Subham
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedDoctor("ruchika")}
                      className={`p-2.5 rounded-xl text-xs font-bold border transition-all text-center ${
                        selectedDoctor === "ruchika"
                          ? "bg-[#FB5A7C] text-white border-[#FB5A7C] shadow-sm"
                          : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                      }`}
                    >
                      Dr. Ruchika
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedDoctor("joint")}
                      className={`p-2.5 rounded-xl text-xs font-bold border transition-all text-center ${
                        selectedDoctor === "joint"
                          ? "bg-[#1A2229] text-white border-[#1A2229] shadow-sm"
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
                    <option value="Pregnancy & Antenatal Checkup">Pregnancy &amp; Antenatal Checkup</option>
                    <option value="Normal / C-Section Delivery Planning">Normal / C-Section Delivery Planning</option>
                    <option value="High-Risk Pregnancy Consultation">High-Risk Pregnancy Consultation</option>
                    <option value="PCOD / PCOS & Irregular Periods">PCOD / PCOS &amp; Irregular Periods</option>
                    <option value="Fertility & IVF Planning">Fertility &amp; IVF Planning</option>
                    <option value="Laparoscopic Surgery / Fibroid / Cyst">Laparoscopic Surgery / Fibroid / Cyst</option>
                    <option value="Second Opinion on Surgery">Second Opinion on Surgery</option>
                    <option value="Menopause & General Gynae Care">Menopause &amp; General Gynae Care</option>
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
