import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/home/HeroSection";
import StatsCounter from "@/components/home/StatsCounter";
import ServicesGrid from "@/components/home/ServicesGrid";
import SocialHub from "@/components/home/SocialHub";
import ReviewsSection from "@/components/home/ReviewsSection";
import BookingStrip from "@/components/home/BookingStrip";
import Footer from "@/components/layout/Footer";
import WhatsAppFAB from "@/components/layout/WhatsAppFAB";

const clinicSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "Dr. Ruchika & Dr. Subham Agarwal — Advanced Women's Care",
  url: "https://drruchikasubham.com",
  logo: "https://drruchikasubham.com/images/brand/brand-logo-v2.png",
  image: "https://drruchikasubham.com/images/brand/brand-logo-v2.png",
  description:
    "Comprehensive women's healthcare by husband-wife specialist duo in Siliguri. High-risk pregnancy care, normal & cesarean delivery, IVF counseling, PCOS management, and laparoscopic gynaecological surgery.",
  priceRange: "₹800",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, UPI, Credit Card, Cashless TPA Insurance",
  telephone: "+91-9883368764",
  medicalSpecialty: [
    "Obstetrics",
    "Gynecology",
    "GynecologicSurgery",
    "ReproductiveEndocrinology",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Manipal Hospital, Meghnad Saha Sarani, Ward 2, Pradhan Nagar",
    addressLocality: "Siliguri",
    addressRegion: "West Bengal",
    postalCode: "734003",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "26.7271",
    longitude: "88.4239",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "10:00",
      closes: "18:00",
    },
  ],
  physician: [
    {
      "@type": "Physician",
      name: "Dr. Ruchika Agarwal",
      jobTitle: "Consultant Obstetrician, Gynaecologist & Fertility Specialist",
      telephone: "+91-7872969660",
      image: "https://drruchikasubham.com/images/doctors/dr-ruchika-headshot.webp",
    },
    {
      "@type": "Physician",
      name: "Dr. Subham Agarwal",
      jobTitle: "Consultant Obstetrician, Gynaecologist & Advanced Laparoscopic Surgeon",
      telephone: "+91-9883368764",
      image: "https://drruchikasubham.com/images/doctors/dr-subham-headshot.webp",
    },
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FAFAF9] text-[#1A2229]">
      {/* Local MedicalClinic JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }}
      />

      {/* 1. Responsive Navigation Bar */}
      <Navbar />

      {/* 3. Hero Section with Dual Doctor Cutouts & Taglines */}
      <HeroSection />

      {/* 4. Verified Clinical & Surgical Milestones */}
      <StatsCounter />

      {/* 5. Patient Success Stories & 5-Star Reviews */}
      <ReviewsSection />

      {/* 6. Comprehensive 7-Specialty Grid + Second Opinion */}
      <ServicesGrid />

      {/* 8. Live Social Hub (Instagram Reels Click-to-Play) */}
      <SocialHub />

      {/* 9. Interactive Quick Booking Section */}
      <BookingStrip />

      {/* 10. Comprehensive Footer */}
      <Footer />

      {/* 10. Sticky Floating WhatsApp Assistant */}
      <WhatsAppFAB />
    </main>
  );
}
