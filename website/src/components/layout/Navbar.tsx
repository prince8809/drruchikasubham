"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Menu, X, Calendar, ChevronDown } from "lucide-react";
import BookingModal from "@/components/shared/BookingModal";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [doctorsDropdownOpen, setDoctorsDropdownOpen] = useState(false);
  const [mobileDoctorsOpen, setMobileDoctorsOpen] = useState(true);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedDoctorId, setSelectedDoctorId] = useState<"subham" | "ruchika" | "joint">("ruchika");
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleOpenBooking = (docId: "subham" | "ruchika" | "joint" = "ruchika") => {
    setSelectedDoctorId(docId);
    setBookingModalOpen(true);
    setMobileMenuOpen(false);
  };

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setDoctorsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setDoctorsDropdownOpen(false);
    }, 200);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileMenuOpen(false);
    if (href.startsWith("/#")) {
      const targetId = href.replace("/#", "");
      if (typeof window !== "undefined" && window.location.pathname === "/") {
        e.preventDefault();
        window.history.pushState(null, "", href);
        setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }, 120);
      }
    }
  };

  const handleDesktopNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#") && typeof window !== "undefined" && window.location.pathname === "/") {
      e.preventDefault();
      const targetId = href.replace("/#", "");
      window.history.pushState(null, "", href);
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const otherNavLinks = [
    { label: "Reviews", href: "/#reviews" },
    { label: "Specialties", href: "/#services" },
    { label: "Videos", href: "/#social-hub" },
    { label: "Timings & Clinics", href: "/#locations" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#F1E5E8] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 rounded-2xl overflow-hidden bg-gradient-to-b from-[#FFF0F3] to-white border border-[#FFD3DC] p-1.5 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
            <Image
              src="/images/brand/brand-logo-v2.png"
              alt="Dr. Ruchika & Dr. Subham Agarwal Emblem"
              width={48}
              height={48}
              className="w-full h-full object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm sm:text-lg font-bold text-[#1A2229] leading-tight group-hover:text-[#FB5A7C] transition-colors">
              Dr. Ruchika &amp; Dr. Subham Agarwal
            </span>
            <span className="text-[11px] sm:text-xs text-[#475569] font-medium tracking-wide">
              Advanced Women&apos;s Care &bull; Siliguri
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#475569]">
          
          {/* "Our Doctors" with Hover Dropdown */}
          <div
            className="relative py-4"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => setDoctorsDropdownOpen(!doctorsDropdownOpen)}
              className="flex items-center gap-1.5 hover:text-[#FB5A7C] transition-colors py-1 cursor-pointer select-none"
              aria-expanded={doctorsDropdownOpen}
              aria-haspopup="true"
            >
              <span>Our Doctors</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  doctorsDropdownOpen ? "rotate-180 text-[#FB5A7C]" : "text-gray-400"
                }`}
              />
            </button>

            {/* Hover Dropdown Panel */}
            {doctorsDropdownOpen && (
              <div
                className="absolute top-full left-0 -ml-4 w-88 bg-white rounded-3xl shadow-xl border border-[#F1E5E8] p-3 z-50 animate-in fade-in zoom-in-95 duration-150"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 px-3 pt-1 pb-2">
                  Select Specialist Profile
                </div>

                {/* Dr. Ruchika Agarwal Item */}
                <Link
                  href="/doctors/dr-ruchika-agarwal"
                  onClick={() => setDoctorsDropdownOpen(false)}
                  className="flex items-center gap-3 p-2.5 rounded-2xl hover:bg-[#FFF5F7] transition-colors group/item"
                >
                  <div className="relative w-12 h-14 rounded-xl overflow-hidden bg-pink-50 border border-pink-200 shrink-0 shadow-2xs">
                    <Image
                      src="/images/doctors/dr-ruchika-headshot.webp"
                      alt="Dr. Ruchika Agarwal"
                      fill
                      sizes="60px"
                      className="object-cover object-top group-hover/item:scale-105 transition-transform"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="font-bold text-sm text-[#1A2229] group-hover/item:text-[#FB5A7C] transition-colors flex items-center gap-1">
                      <span>Dr. Ruchika Agarwal</span>
                    </div>
                    <p className="text-[11px] text-gray-500 truncate">
                      M.B.B.S, M.S
                    </p>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="text-[10px] font-semibold text-[#C4274C] bg-pink-100/70 px-2 py-0.2 rounded-full">
                        Zivah Wellness &bull; 10 AM – 2 PM
                      </span>
                    </div>
                  </div>
                </Link>

                {/* Dr. Subham Agarwal Item */}
                <Link
                  href="/doctors/dr-subham-agarwal"
                  onClick={() => setDoctorsDropdownOpen(false)}
                  className="flex items-center gap-3 p-2.5 rounded-2xl hover:bg-[#F2FAFE] transition-colors group/item mt-1"
                >
                  <div className="relative w-12 h-14 rounded-xl overflow-hidden bg-sky-50 border border-sky-200 shrink-0 shadow-2xs">
                    <Image
                      src="/images/doctors/dr-subham-headshot.webp"
                      alt="Dr. Subham Agarwal"
                      fill
                      sizes="60px"
                      className="object-cover object-top group-hover/item:scale-105 transition-transform"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="font-bold text-sm text-[#1A2229] group-hover/item:text-[#0B75A1] transition-colors flex items-center gap-1">
                      <span>Dr. Subham Agarwal</span>
                    </div>
                    <p className="text-[11px] text-gray-500 truncate">
                      M.B.B.S, M.S, F.M.A.S, F.I.A.G
                    </p>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="text-[10px] font-semibold text-[#0B75A1] bg-sky-100/70 px-2 py-0.2 rounded-full">
                        Manipal Hospital &bull; 10 AM – 6 PM
                      </span>
                    </div>
                  </div>
                </Link>

                {/* Divider */}
                <div className="my-2 border-t border-gray-100" />

                {/* View Both on Homepage Link */}
                <Link
                  href="/#doctors"
                  onClick={(e) => {
                    setDoctorsDropdownOpen(false);
                    handleDesktopNavClick(e, "/#doctors");
                  }}
                  className="block text-center text-xs font-semibold text-[#FB5A7C] hover:text-[#E54366] py-1.5 px-3 rounded-lg hover:bg-pink-50/50 transition-colors"
                >
                  View Both Profiles &amp; Clinics &rarr;
                </Link>
              </div>
            )}
          </div>

          {/* Standard Nav Links */}
          {otherNavLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={(e) => handleDesktopNavClick(e, link.href)}
              className="hover:text-[#FB5A7C] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FB5A7C] hover:after:w-full after:transition-all"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Action */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            type="button"
            onClick={() => handleOpenBooking("ruchika")}
            className="btn-whatsapp text-sm py-2.5 px-5 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Book on WhatsApp</span>
          </button>
        </div>

        {/* Mobile Menu Button & Quick WhatsApp */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => handleOpenBooking("ruchika")}
            className="bg-[#25D366] text-white p-2 rounded-full shadow-sm hover:scale-105 active:scale-95 transition-transform cursor-pointer flex items-center justify-center"
            aria-label="Book appointment on WhatsApp"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#1A2229] rounded-lg hover:bg-[#FFF5F7] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#F1E5E8] px-5 py-4 shadow-xl animate-in slide-in-from-top duration-200 max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col gap-2">
            
            {/* Mobile Accordion for "Our Doctors" */}
            <div className="border-b border-gray-100 pb-2">
              <button
                onClick={() => setMobileDoctorsOpen(!mobileDoctorsOpen)}
                className="w-full flex items-center justify-between text-base font-bold text-[#1A2229] py-2"
              >
                <span>Our Doctors</span>
                <ChevronDown
                  className={`w-4 h-4 text-gray-500 transition-transform ${
                    mobileDoctorsOpen ? "rotate-180 text-[#FB5A7C]" : ""
                  }`}
                />
              </button>

              {mobileDoctorsOpen && (
                <div className="pl-2 pt-1 pb-2 space-y-2">
                  <Link
                    href="/doctors/dr-ruchika-agarwal"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 p-2 rounded-xl bg-[#FFF5F7] border border-pink-100 text-[#1A2229]"
                  >
                    <div className="relative w-9 h-11 rounded-lg overflow-hidden bg-white shrink-0 border border-pink-200">
                      <Image
                        src="/images/doctors/dr-ruchika-headshot.webp"
                        alt="Dr. Ruchika"
                        fill
                        sizes="40px"
                        className="object-cover object-top"
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="font-bold text-xs text-[#1A2229]">
                        Dr. Ruchika Agarwal
                      </div>
                      <div className="text-[10px] text-gray-500">
                        Zivah Wellness &bull; Fertility Specialist
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/doctors/dr-subham-agarwal"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 p-2 rounded-xl bg-[#F2FAFE] border border-sky-100 text-[#1A2229]"
                  >
                    <div className="relative w-9 h-11 rounded-lg overflow-hidden bg-white shrink-0 border border-sky-200">
                      <Image
                        src="/images/doctors/dr-subham-headshot.webp"
                        alt="Dr. Subham"
                        fill
                        sizes="40px"
                        className="object-cover object-top"
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="font-bold text-xs text-[#1A2229]">
                        Dr. Subham Agarwal
                      </div>
                      <div className="text-[10px] text-gray-500">
                        Manipal Hospital &bull; Laparoscopic Surgeon
                      </div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* Other Mobile Nav Links */}
            {otherNavLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-semibold text-[#1A2229] hover:text-[#FB5A7C] py-2 border-b border-gray-50 flex items-center justify-between cursor-pointer"
              >
                <span>{link.label}</span>
                <span className="text-gray-400 text-sm">&rarr;</span>
              </Link>
            ))}

            {/* Mobile CTAs */}
            <div className="pt-3 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => handleOpenBooking("ruchika")}
                className="btn-whatsapp text-center justify-center text-sm py-3 cursor-pointer w-full flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Book on WhatsApp</span>
              </button>
              <Link
                href="/#booking"
                onClick={(e) => handleNavClick(e, "/#booking")}
                className="btn-primary text-center justify-center text-sm py-3"
              >
                <Calendar className="w-4 h-4" />
                <span>Choose Doctor / View Fees</span>
              </Link>
            </div>
          </nav>
        </div>
      )}

      {/* Interactive WhatsApp Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialDoctor={selectedDoctorId}
      />
    </header>
  );
}
