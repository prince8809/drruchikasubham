"use client";

import { useState } from "react";
import { PhoneCall, AlertCircle, X } from "lucide-react";
import { PHONE_SUBHAM } from "@/lib/constants";

export default function EmergencyBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-[#DC2626] text-white text-xs sm:text-sm font-medium py-2 px-4 shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 mx-auto sm:mx-0">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          <AlertCircle className="w-4 h-4 shrink-0 text-white" />
          <span>
            <strong>Obstetric or Gynaecological Emergency?</strong> 24/7 Delivery & Surgical Support at Manipal Hospital Siliguri:
          </span>
          <a
            href={`tel:${PHONE_SUBHAM}`}
            className="underline underline-offset-2 font-bold hover:text-red-100 inline-flex items-center gap-1 ml-1"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            {PHONE_SUBHAM}
          </a>
        </div>
        <button
          onClick={() => setVisible(false)}
          aria-label="Dismiss emergency banner"
          className="text-white/80 hover:text-white p-1 shrink-0 rounded transition-colors hidden sm:block"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
