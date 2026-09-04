"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X, Users, Sparkles } from "lucide-react";
import { WHATSAPP_SUBHAM, WHATSAPP_RUCHIKA } from "@/lib/constants";

export interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDoctor?: "subham" | "ruchika" | "joint";
  initialConcern?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  initialDoctor = "subham",
  initialConcern = "",
}: BookingModalProps) {
  const [selectedDoctor, setSelectedDoctor] = useState<"subham" | "ruchika" | "joint">(initialDoctor);
  const [patientName, setPatientName] = useState("");
  const [concern, setConcern] = useState(initialConcern);

  // Sync state when modal opens or initialDoctor prop changes
  useEffect(() => {
    if (isOpen) {
      setSelectedDoctor(initialDoctor);
      if (initialConcern) {
        setConcern(initialConcern);
      }
    }
  }, [isOpen, initialDoctor, initialConcern]);

  // Lock body scroll and handle Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const docName =
      selectedDoctor === "subham"
        ? "Dr. Subham Agarwal"
        : selectedDoctor === "ruchika"
        ? "Dr. Ruchika Agarwal"
        : "Both Doctors (Joint Consultation - Dr. Subham & Dr. Ruchika)";

    const message = `Hey, I want to book an appointment with ${docName}.\n\nPatient Name: ${
      patientName.trim() || "Patient"
    }\nPrimary Concern: ${concern || "General Consultation"}`;

    const targetUrl = selectedDoctor === "ruchika" ? WHATSAPP_RUCHIKA : WHATSAPP_SUBHAM;
    const finalUrl = `${targetUrl.split("?")[0]}?text=${encodeURIComponent(message)}`;

    window.open(finalUrl, "_blank");
    onClose();
  };

  const directWhatsAppUrl = selectedDoctor === "ruchika" ? WHATSAPP_RUCHIKA : WHATSAPP_SUBHAM;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      <div
        className="relative w-full max-w-lg bg-white text-[#1A2229] rounded-3xl p-5 sm:p-7 shadow-2xl border border-pink-100 max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-[#1A2229] hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-8 mb-5">
          <div className="inline-flex items-center gap-1.5 bg-[#FFF5F7] border border-[#FFCCD6] px-2.5 py-0.5 rounded-full text-[11px] font-bold text-[#FB5A7C] mb-2">
            <Sparkles className="w-3 h-3 text-[#FB5A7C]" />
            <span>Direct Clinic Desk Routing</span>
          </div>
          <h3 id="booking-modal-title" className="text-xl sm:text-2xl font-extrabold text-[#1A2229] leading-tight">
            Quick Booking on WhatsApp
          </h3>
          <p className="text-xs text-[#64748B] mt-1">
            Fill details below to open a pre-filled WhatsApp message directly.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleBookingSubmit} className="space-y-4">
          {/* Doctor Selection */}
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-2">
              Select Doctor / Consultation:
            </label>
            <div className="grid grid-cols-3 gap-2">
              {/* Dr. Subham */}
              <button
                type="button"
                onClick={() => setSelectedDoctor("subham")}
                className={`p-2.5 sm:p-3 rounded-2xl text-xs font-bold border transition-all flex flex-col items-center justify-center gap-0.5 ${
                  selectedDoctor === "subham"
                    ? "bg-[#2FB2EA] text-white border-[#2FB2EA] shadow-md scale-[1.02]"
                    : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                }`}
              >
                <span className="font-extrabold text-[13px]">Dr. Subham</span>
                <span
                  className={`text-[10px] truncate max-w-full font-medium ${
                    selectedDoctor === "subham" ? "text-sky-100" : "text-gray-500"
                  }`}
                >
                  Obstetric & Laparoscopy
                </span>
              </button>

              {/* Dr. Ruchika */}
              <button
                type="button"
                onClick={() => setSelectedDoctor("ruchika")}
                className={`p-2.5 sm:p-3 rounded-2xl text-xs font-bold border transition-all flex flex-col items-center justify-center gap-0.5 ${
                  selectedDoctor === "ruchika"
                    ? "bg-[#FB5A7C] text-white border-[#FB5A7C] shadow-md scale-[1.02]"
                    : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                }`}
              >
                <span className="font-extrabold text-[13px]">Dr. Ruchika</span>
                <span
                  className={`text-[10px] truncate max-w-full font-medium ${
                    selectedDoctor === "ruchika" ? "text-pink-100" : "text-gray-500"
                  }`}
                >
                  Gynaec & Fertility
                </span>
              </button>

              {/* Joint Care */}
              <button
                type="button"
                onClick={() => setSelectedDoctor("joint")}
                className={`p-2.5 sm:p-3 rounded-2xl text-xs font-bold border transition-all flex flex-col items-center justify-center gap-0.5 ${
                  selectedDoctor === "joint"
                    ? "bg-[#1A2229] text-white border-[#1A2229] shadow-md scale-[1.02]"
                    : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                }`}
              >
                <div className="flex items-center gap-1">
                  <Users className="w-3.5 h-3.5" />
                  <span className="font-extrabold text-[13px]">Joint Care</span>
                </div>
                <span
                  className={`text-[10px] truncate max-w-full font-medium ${
                    selectedDoctor === "joint" ? "text-gray-300" : "text-gray-500"
                  }`}
                >
                  Both Doctors
                </span>
              </button>
            </div>
          </div>

          {/* Patient Name */}
          <div>
            <label htmlFor="modal-patient-name" className="block text-xs font-bold text-gray-700 mb-1">
              Patient Name <span className="text-[#FB5A7C]">*</span>
            </label>
            <input
              id="modal-patient-name"
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
            <label htmlFor="modal-concern-select" className="block text-xs font-bold text-gray-700 mb-1">
              Primary Concern / Reason:
            </label>
            <select
              id="modal-concern-select"
              value={concern}
              onChange={(e) => setConcern(e.target.value)}
              className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FB5A7C] transition-all bg-white"
            >
              <option value="">Choose a condition / general visit</option>
              <option value="Pregnancy & Antenatal Checkup">Pregnancy & Antenatal Checkup</option>
              <option value="Normal / C-Section Delivery Planning">Normal / C-Section Delivery Planning</option>
              <option value="High-Risk Pregnancy Consultation">High-Risk Pregnancy Consultation</option>
              <option value="Fertility & IVF Planning">Fertility & IVF Planning</option>
              <option value="PCOD / PCOS & Irregular Periods">PCOD / PCOS & Irregular Periods</option>
              <option value="Advanced Laparoscopic Surgery (Fibroid, Cyst, etc.)">
                Advanced Laparoscopic Surgery (Fibroid, Cyst, etc.)
              </option>
              <option value="Second Opinion on Surgery / Delivery">Second Opinion on Surgery / Delivery</option>
              <option value="Joint Couple Consultation (Pre-conception / Birthing)">
                Joint Couple Consultation (Pre-conception / Birthing)
              </option>
              <option value="Menopause & General Well-Woman Visit">Menopause & General Well-Woman Visit</option>
            </select>
          </div>

          {/* Action Button */}
          <div className="pt-2 space-y-2">
            <button
              type="submit"
              className="btn-whatsapp w-full justify-center text-sm py-3.5 shadow-lg hover:shadow-xl font-bold rounded-2xl"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Proceed to WhatsApp Booking</span>
            </button>

            <p className="text-[11px] text-gray-500 text-center">
              Opens official WhatsApp chat &bull; Free instant routing
            </p>

            {/* Direct Skip Link */}
            <div className="text-center pt-1">
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="text-xs font-semibold text-gray-500 hover:text-[#FB5A7C] transition-colors"
              >
                Prefer to chat directly? <span className="underline">Skip form & open WhatsApp &rarr;</span>
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
