"use client";

import { useState } from "react";
import { MessageCircle, X, ExternalLink, Users, Sparkles } from "lucide-react";
import { WHATSAPP_SUBHAM, WHATSAPP_RUCHIKA, WHATSAPP_JOINT } from "@/lib/constants";
import BookingModal from "@/components/shared/BookingModal";

export default function WhatsAppFAB() {
  const [isOpen, setIsOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedDoctorId, setSelectedDoctorId] = useState<"subham" | "ruchika" | "joint">("joint");

  const handleOpenForm = (doctor: "subham" | "ruchika" | "joint" = "joint") => {
    setSelectedDoctorId(doctor);
    setIsOpen(false);
    setBookingModalOpen(true);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Modal / Popover */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 bg-white rounded-2xl shadow-2xl border border-[#F1E5E8] p-4 sm:p-5 animate-in slide-in-from-bottom-5 duration-200">
          <div className="flex items-center justify-between pb-2.5 border-b border-gray-100">
            <div>
              <h4 className="font-bold text-[#1A2229] text-base">Quick WhatsApp Booking</h4>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Close booking popup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-[#475569] my-2.5 leading-relaxed">
            Select which specialist or consultation you would like to book:
          </p>

          <div className="flex flex-col gap-2">
            {/* Dr. Ruchika */}
            <a
              href={WHATSAPP_RUCHIKA}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded-xl border border-pink-100 bg-[#FFF5F7] hover:bg-pink-100/70 hover:border-pink-300 transition-all group"
            >
              <div className="flex flex-col text-left">
                <span className="text-sm font-bold text-[#C4274C] group-hover:text-rose-900">
                  Dr. Ruchika Agarwal
                </span>
                <span className="text-[11px] text-gray-600">
                  Zivah Wellness Centre &bull; 10 AM – 2 PM
                </span>
              </div>
              <ExternalLink className="w-4 h-4 text-[#FB5A7C] shrink-0" />
            </a>

            {/* Dr. Subham */}
            <a
              href={WHATSAPP_SUBHAM}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded-xl border border-sky-100 bg-[#F2FAFE] hover:bg-sky-100/70 hover:border-sky-300 transition-all group"
            >
              <div className="flex flex-col text-left">
                <span className="text-sm font-bold text-[#0B75A1] group-hover:text-sky-900">
                  Dr. Subham Agarwal
                </span>
                <span className="text-[11px] text-gray-600">
                  Manipal Hospital &bull; 10 AM – 6 PM
                </span>
              </div>
              <ExternalLink className="w-4 h-4 text-[#2FB2EA] shrink-0" />
            </a>

            {/* Joint Consultation */}
            <a
              href={WHATSAPP_JOINT}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded-xl border border-purple-100 bg-[#F8F5FE] hover:bg-purple-100/70 hover:border-purple-300 transition-all group"
            >
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-bold text-[#5B21B6] group-hover:text-purple-900 flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-[#7C3AED]" />
                    Joint Consultation
                  </span>
                  <span className="text-[9px] font-extrabold uppercase bg-purple-100 text-purple-800 px-1.5 py-0.5 rounded-md">
                    Duo Care
                  </span>
                </div>
                <span className="text-[11px] text-gray-600">
                  Both Doctors Together &bull; Collaborative Care
                </span>
              </div>
              <ExternalLink className="w-4 h-4 text-[#7C3AED] shrink-0" />
            </a>
          </div>

          {/* Form Option Link */}
          <div className="mt-3 pt-2 border-t border-gray-100 text-center">
            <button
              type="button"
              onClick={() => handleOpenForm("joint")}
              className="text-xs font-semibold text-[#FB5A7C] hover:text-[#E54366] transition-colors inline-flex items-center gap-1 cursor-pointer"
            >
              <Sparkles className="w-3 h-3" />
              <span>Personalize with Name &amp; Concern &rarr;</span>
            </button>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group bg-[#25D366] hover:bg-[#1EBE5D] text-white p-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center cursor-pointer"
        aria-label="Open WhatsApp appointment booking menu"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-[#FB5A7C] border-2 border-white text-[9px] font-bold items-center justify-center text-white">
            1
          </span>
        </span>
        <MessageCircle className="w-7 h-7 fill-white" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 font-semibold text-sm transition-all duration-300">
          Book on WhatsApp
        </span>
      </button>

      {/* Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialDoctor={selectedDoctorId}
      />
    </div>
  );
}
