import Image from "next/image";
import { MapPin, Phone, Clock, ShieldCheck, Heart } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/shared/Icons";
import {
  PHONE_SUBHAM,
  PHONE_RUCHIKA,
  INSTAGRAM_URL,
  FACEBOOK_URL,
  ADDRESS_MANIPAL,
  ADDRESS_ZIVAH,
  CONSULTATION_FEE,
  WHATSAPP_SUBHAM,
  WHATSAPP_RUCHIKA
} from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[#1A2229] text-white pt-16 pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-800">
          
          {/* Column 1: Brand & USP */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white p-1 flex items-center justify-center shrink-0">
                <Image
                  src="/images/brand/logo.png"
                  alt="Dr. Subham & Dr. Ruchika Emblem"
                  width={44}
                  height={44}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg text-white leading-tight">
                  Dr. Subham &amp; Dr. Ruchika
                </h3>
                <p className="text-xs text-[#2FB2EA] font-medium">
                  Advanced Women&apos;s Care &bull; Siliguri
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed">
              Husband-wife gynaecologist &amp; obstetrician duo providing compassionate, comprehensive care from periods &amp; PCOS to high-risk pregnancy, natural delivery, and advanced surgery.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                aria-label="Follow on Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                aria-label="Follow on Facebook"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Dr. Subham Agarwal Clinic */}
          <div className="space-y-3">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#2FB2EA] bg-[#2FB2EA]/10 px-2.5 py-1 rounded">
              Dr. Subham Agarwal
            </span>
            <h4 className="font-semibold text-base text-white">Manipal Hospital, Siliguri</h4>
            <div className="space-y-2 text-xs text-gray-300">
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
                <a href={`tel:${PHONE_SUBHAM}`} className="hover:text-white underline underline-offset-2">
                  {PHONE_SUBHAM}
                </a>
              </p>
            </div>
            <a
              href={WHATSAPP_SUBHAM}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#25D366] hover:underline pt-1"
            >
              &rarr; Book Dr. Subham on WhatsApp
            </a>
          </div>

          {/* Column 3: Dr. Ruchika Agarwal Clinic */}
          <div className="space-y-3">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#FB5A7C] bg-[#FB5A7C]/10 px-2.5 py-1 rounded">
              Dr. Ruchika Agarwal
            </span>
            <h4 className="font-semibold text-base text-white">Zivah Wellness Centre</h4>
            <div className="space-y-2 text-xs text-gray-300">
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
                <a href={`tel:${PHONE_RUCHIKA}`} className="hover:text-white underline underline-offset-2">
                  {PHONE_RUCHIKA}
                </a>
              </p>
            </div>
            <a
              href={WHATSAPP_RUCHIKA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#25D366] hover:underline pt-1"
            >
              &rarr; Book Dr. Ruchika on WhatsApp
            </a>
          </div>

          {/* Column 4: Consultation & Insurance */}
          <div className="space-y-4">
            <h4 className="font-semibold text-base text-white">Consultation &amp; Insurance</h4>
            <div className="bg-gray-800/80 rounded-xl p-4 border border-gray-700/60 space-y-2.5">
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">Standard OPD Fee</span>
                <span className="font-bold text-[#FB5A7C] text-sm">{CONSULTATION_FEE}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-emerald-400 pt-1 border-t border-gray-700">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>Cashless &amp; TPA Insurance Supported</span>
              </div>
              <p className="text-[11px] text-gray-400 leading-relaxed">
                Accepted for deliveries, cesarean sections, and laparoscopic surgeries at Manipal Hospital.
              </p>
            </div>

            <div className="text-xs text-gray-400">
              Languages: English &bull; Hindi &bull; Bengali &bull; Nepali
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>
            &copy; {new Date().getFullYear()} Dr. Subham Agarwal &amp; Dr. Ruchika Agarwal. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-gray-400">
            <span>A family caring for your family</span>
            <Heart className="w-3.5 h-3.5 text-[#FB5A7C] fill-[#FB5A7C]" />
            <span>Siliguri, West Bengal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
