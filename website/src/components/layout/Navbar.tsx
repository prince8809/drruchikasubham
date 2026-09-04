"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Menu, X, Calendar } from "lucide-react";
import { WHATSAPP_SUBHAM } from "@/lib/constants";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Our Doctors", href: "#doctors" },
    { label: "Specialties", href: "#services" },
    { label: "Experience", href: "#experience" },
    { label: "Couple Advantage", href: "#couple-advantage" },
    { label: "Videos & Reels", href: "#social-hub" },
    { label: "Timings & Clinics", href: "#locations" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#F1E5E8] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-11 h-11 rounded-full overflow-hidden bg-[#FFF5F7] border-2 border-[#FB5A7C]/30 p-1 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
            <Image
              src="/images/brand/logo.png"
              alt="Dr. Subham & Dr. Ruchika Emblem"
              width={40}
              height={40}
              className="w-auto h-auto object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-bold text-[#1A2229] leading-tight group-hover:text-[#FB5A7C] transition-colors">
              Dr. Subham &amp; Dr. Ruchika
            </span>
            <span className="text-xs text-[#475569] font-medium tracking-wide">
              Advanced Women&apos;s Care &bull; Siliguri
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#475569]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#FB5A7C] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FB5A7C] hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Action */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={WHATSAPP_SUBHAM}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-sm py-2.5 px-5 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Book on WhatsApp</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href={WHATSAPP_SUBHAM}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white p-2 rounded-full shadow-sm"
            aria-label="Quick WhatsApp"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
          </a>
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
        <div className="lg:hidden bg-white border-b border-[#F1E5E8] px-6 py-5 shadow-lg animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-[#1A2229] hover:text-[#FB5A7C] py-2 border-b border-gray-50 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-gray-400 text-sm">&rarr;</span>
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-2">
              <a
                href={WHATSAPP_SUBHAM}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-center justify-center text-sm py-3"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Book Appointment (Dr. Subham)</span>
              </a>
              <a
                href="#booking"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary text-center justify-center text-sm py-3"
              >
                <Calendar className="w-4 h-4" />
                <span>Choose Doctor / View Fees</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
