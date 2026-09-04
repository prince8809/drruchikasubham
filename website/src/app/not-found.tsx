import Link from "next/link";
import { MessageCircle, Heart, Home } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFAB from "@/components/layout/WhatsAppFAB";
import { WHATSAPP_SUBHAM } from "@/lib/constants";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FAFAF9] text-[#1A2229]">
      <Navbar />

      <div className="flex-1 flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full text-center space-y-6 bg-white rounded-3xl p-8 sm:p-10 border border-[#F1E5E8] shadow-lg">
          <div className="w-16 h-16 rounded-2xl bg-[#FFF5F7] border border-[#FFCCD6] flex items-center justify-center mx-auto text-[#FB5A7C]">
            <Heart className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="badge-primary text-xs px-3 py-1">Page Not Found</span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1A2229] tracking-tight">
              404
            </h1>
            <p className="text-sm text-[#475569] leading-relaxed">
              We couldn&apos;t find the page you were looking for. Please return to the homepage or contact our clinic directly on WhatsApp.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="btn-primary text-xs sm:text-sm py-3 px-5 shadow-sm justify-center inline-flex items-center gap-2"
            >
              <Home className="w-4 h-4" />
              <span>Return Home</span>
            </Link>

            <a
              href={WHATSAPP_SUBHAM}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-xs sm:text-sm py-3 px-5 shadow-sm justify-center inline-flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppFAB />
    </main>
  );
}
