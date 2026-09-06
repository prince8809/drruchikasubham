import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Clock, ShieldCheck, Heart } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/shared/Icons";
import {
  PHONE_SUBHAM,
  PHONE_RUCHIKA,
  INSTAGRAM_URL,
  FACEBOOK_URL,
  ADDRESS_MANIPAL,
  ADDRESS_ZIVAH,
  WHATSAPP_SUBHAM,
  WHATSAPP_RUCHIKA
} from "@/lib/constants";

export default function Footer() {
  return (
    <footer id="locations" className="bg-[#FAFAF9] text-[#1A2229] pt-14 pb-12 border-t border-[#F1E5E8] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header for Timings & Clinics Anchor */}
        <div className="mb-10 pb-6 border-b border-[#F1E5E8] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#C4274C] bg-[#FFF5F7] border border-[#FFCCD6] px-3 py-1 rounded-full inline-block mb-1.5 shadow-2xs">
              Clinics &amp; Consultation Timings
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#1A2229] tracking-tight">
              Hospital Locations &amp; Visiting Hours &bull; Siliguri
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-[#475569] max-w-md leading-relaxed">
            Consultations at Manipal Hospital and Zivah Wellness Centre. Prior appointments and walk-ins welcome with direct WhatsApp booking.
          </p>
        </div>

        {/* Main 4-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pb-12 border-b border-[#F1E5E8]">
          
          {/* Column 1: Brand & USP */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-2xl overflow-hidden bg-white border border-[#FFCCD6] p-1.5 flex items-center justify-center shrink-0 shadow-2xs">
                <Image
                  src="/images/brand/logo.png"
                  alt="Dr. Ruchika & Dr. Subham Agarwal Emblem"
                  width={44}
                  height={44}
                  className="w-auto h-auto object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#1A2229] leading-tight">
                  Dr. Ruchika &amp; Dr. Subham Agarwal
                </h3>
                <p className="text-xs text-[#0B75A1] font-semibold">
                  Advanced Women&apos;s Care &bull; Siliguri
                </p>
              </div>
            </div>

            <p className="text-sm text-[#475569] leading-relaxed">
              Husband-wife gynaecologist &amp; obstetrician duo providing compassionate, comprehensive care from periods &amp; PCOS to high-risk pregnancy, natural delivery, and advanced surgery.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] flex items-center justify-center text-white hover:opacity-90 shadow-2xs hover:shadow-xs hover:scale-105 transition-all"
                aria-label="Follow on Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:opacity-90 shadow-2xs hover:shadow-xs hover:scale-105 transition-all"
                aria-label="Follow on Facebook"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Dr. Ruchika Agarwal Clinic */}
          <div className="bg-white rounded-3xl p-5 border border-pink-100/90 shadow-2xs space-y-3.5 flex flex-col justify-between hover:border-pink-200 transition-colors">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Link
                  href="/doctors/dr-ruchika-agarwal"
                  className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#C4274C] bg-[#FFF5F7] border border-[#FFCCD6] hover:bg-[#FFE9ED] px-2.5 py-0.5 rounded-full transition-colors shadow-2xs"
                >
                  Dr. Ruchika Agarwal &rarr;
                </Link>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" title="Available OPD" />
              </div>
              <h4 className="font-bold text-base text-[#1A2229]">Zivah Wellness Centre</h4>
              <div className="space-y-2 text-xs text-[#475569]">
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 shrink-0 text-[#FB5A7C] mt-0.5" />
                  <span>{ADDRESS_ZIVAH}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="w-4 h-4 shrink-0 text-[#FB5A7C]" />
                  <span>Monday – Friday: 10:00 AM – 2:00 PM</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 shrink-0 text-[#FB5A7C]" />
                  <a href={`tel:${PHONE_RUCHIKA}`} className="text-[#1A2229] font-medium hover:text-[#FB5A7C] underline underline-offset-2">
                    {PHONE_RUCHIKA}
                  </a>
                </p>
              </div>
            </div>
            <div className="pt-2 border-t border-pink-100/80 flex flex-col gap-1.5 text-xs">
              <Link
                href="/doctors/dr-ruchika-agarwal"
                className="text-[#C4274C] hover:text-[#9B1D3C] hover:underline font-semibold"
              >
                &rarr; View Dr. Ruchika&apos;s Full Profile
              </Link>
              <a
                href={WHATSAPP_RUCHIKA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-[#15803D] hover:text-[#166534] hover:underline"
              >
                &rarr; Book Dr. Ruchika on WhatsApp
              </a>
            </div>
          </div>

          {/* Column 3: Dr. Subham Agarwal Clinic */}
          <div className="bg-white rounded-3xl p-5 border border-sky-100/90 shadow-2xs space-y-3.5 flex flex-col justify-between hover:border-sky-200 transition-colors">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Link
                  href="/doctors/dr-subham-agarwal"
                  className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#0B75A1] bg-[#F2FAFE] border border-[#BCE6F9] hover:bg-[#E3F4FC] px-2.5 py-0.5 rounded-full transition-colors shadow-2xs"
                >
                  Dr. Subham Agarwal &rarr;
                </Link>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" title="Available OPD" />
              </div>
              <h4 className="font-bold text-base text-[#1A2229]">Manipal Hospital, Siliguri</h4>
              <div className="space-y-2 text-xs text-[#475569]">
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 shrink-0 text-[#2FB2EA] mt-0.5" />
                  <span>{ADDRESS_MANIPAL}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="w-4 h-4 shrink-0 text-[#2FB2EA]" />
                  <span>Monday – Friday: 10:00 AM – 6:00 PM</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 shrink-0 text-[#2FB2EA]" />
                  <a href={`tel:${PHONE_SUBHAM}`} className="text-[#1A2229] font-medium hover:text-[#0B75A1] underline underline-offset-2">
                    {PHONE_SUBHAM}
                  </a>
                </p>
              </div>
            </div>
            <div className="pt-2 border-t border-sky-100/80 flex flex-col gap-1.5 text-xs">
              <Link
                href="/doctors/dr-subham-agarwal"
                className="text-[#0B75A1] hover:text-[#075985] hover:underline font-semibold"
              >
                &rarr; View Dr. Subham&apos;s Full Profile
              </Link>
              <a
                href={WHATSAPP_SUBHAM}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-[#15803D] hover:text-[#166534] hover:underline"
              >
                &rarr; Book Dr. Subham on WhatsApp
              </a>
            </div>
          </div>

          {/* Column 4: Consultation & Insurance */}
          <div className="bg-white rounded-3xl p-5 border border-gray-200/80 shadow-2xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <h4 className="font-bold text-base text-[#1A2229]">Insurance &amp; Coverage</h4>
              <div className="bg-emerald-50/80 rounded-2xl p-3.5 border border-emerald-200/80 space-y-1.5 shadow-2xs">
                <div className="flex items-center gap-2 text-xs text-emerald-800 font-bold">
                  <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-600" />
                  <span>Cashless &amp; TPA Insurance Supported</span>
                </div>
                <p className="text-[11px] text-emerald-950/80 leading-relaxed">
                  Accepted for deliveries, cesarean sections, and laparoscopic surgeries at Manipal Hospital.
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-gray-100 text-xs text-[#64748B] space-y-1">
              <span className="font-semibold text-[10px] uppercase tracking-wider text-gray-400 block">
                Languages Spoken:
              </span>
              <span className="text-[#1A2229] font-medium text-xs">
                English &bull; Hindi &bull; Bengali &bull; Nepali
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#64748B] gap-4">
          <p>
            &copy; {new Date().getFullYear()} Dr. Ruchika Agarwal &amp; Dr. Subham Agarwal. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-[#64748B]">
            <span>A family caring for your family</span>
            <Heart className="w-3.5 h-3.5 text-[#FB5A7C] fill-[#FB5A7C]" />
            <span>Siliguri, West Bengal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
