import EmergencyBar from "@/components/layout/EmergencyBar";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/home/HeroSection";
import StatsCounter from "@/components/home/StatsCounter";
import CoupleAdvantage from "@/components/home/CoupleAdvantage";
import ServicesGrid from "@/components/home/ServicesGrid";
import DoctorProfiles from "@/components/home/DoctorProfiles";
import SocialHub from "@/components/home/SocialHub";
import BookingStrip from "@/components/home/BookingStrip";
import Footer from "@/components/layout/Footer";
import WhatsAppFAB from "@/components/layout/WhatsAppFAB";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FAFAF9] text-[#1A2229]">
      {/* 1. Emergency Obstetric & Surgical Banner */}
      <EmergencyBar />

      {/* 2. Responsive Navigation Bar */}
      <Navbar />

      {/* 3. Hero Section with Dual Doctor Cutouts & Taglines */}
      <HeroSection />

      {/* 4. Verified Clinical & Surgical Milestones */}
      <StatsCounter />

      {/* 5. The Couple Doctor Advantage USP Section */}
      <CoupleAdvantage />

      {/* 6. Comprehensive 7-Specialty Grid + Second Opinion */}
      <ServicesGrid />

      {/* 7. Detailed Doctor Profiles & Hospital Timings */}
      <DoctorProfiles />

      {/* 8. Live Social Hub (Instagram Reels Click-to-Play) */}
      <SocialHub />

      {/* 9. Interactive Quick Booking Section */}
      <BookingStrip />

      {/* 10. Comprehensive Footer */}
      <Footer />

      {/* 11. Sticky Floating WhatsApp Assistant */}
      <WhatsAppFAB />
    </main>
  );
}
