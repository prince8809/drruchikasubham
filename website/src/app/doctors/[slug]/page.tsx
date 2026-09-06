import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  MessageCircle,
  MapPin,
  Clock,
  ShieldCheck,
  Award,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  Building2,
} from "lucide-react";
import { doctors } from "@/data/doctors";
import { WHATSAPP_JOINT } from "@/lib/constants";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFAB from "@/components/layout/WhatsAppFAB";
import DoctorSpecialtiesCarousel from "@/components/doctor/DoctorSpecialtiesCarousel";
import DoctorPhilosophySection from "@/components/doctor/DoctorPhilosophySection";
import DoctorFaqAccordion from "@/components/doctor/DoctorFaqAccordion";
import DoctorVideoReelsSection from "@/components/doctor/DoctorVideoReelsSection";
import ReviewsSection from "@/components/home/ReviewsSection";

export function generateStaticParams() {
  return doctors.map((doc) => ({
    slug: doc.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const doctor = doctors.find((d) => d.slug === slug);

  if (!doctor) {
    return {
      title: "Doctor Not Found | Siliguri",
    };
  }

  const title = `${doctor.name} — ${doctor.role} | Siliguri`;
  const description = `${doctor.tagline} ${doctor.bio} Consulting at ${doctor.hospitalShort}. Direct WhatsApp appointments & Cashless TPA insurance supported.`;

  return {
    title,
    description,
    keywords: [
      doctor.name,
      doctor.shortName,
      doctor.role,
      "gynaecologist siliguri",
      "obstetrician siliguri",
      doctor.hospitalShort,
      "laparoscopic surgeon siliguri",
      "pregnancy doctor siliguri",
      "normal delivery siliguri",
      "c section siliguri",
      "women doctor siliguri",
    ],
    alternates: {
      canonical: `https://drruchikasubham.com/doctors/${doctor.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://drruchikasubham.com/doctors/${doctor.slug}`,
      siteName: "Dr. Ruchika & Dr. Subham Agarwal",
      type: "profile",
      images: [
        {
          url: doctor.photo,
          width: 800,
          height: 800,
          alt: doctor.name,
        },
      ],
    },
  };
}

export default async function DoctorProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doctor = doctors.find((d) => d.slug === slug);

  if (!doctor) {
    notFound();
  }

  const partnerDoctor = doctors.find((d) => d.slug === doctor.partnerDoctorSlug);
  const isSubham = doctor.id === "subham";
  const doctorBtnClass = isSubham
    ? "bg-[#4384C6] hover:bg-[#3271B2] text-white"
    : "bg-[#F57B94] hover:bg-[#E6627E] text-white";

  // Google Physician / Medical Schema (JSON-LD) for Local Healthcare SEO
  const physicianSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: doctor.name,
    jobTitle: doctor.role,
    description: doctor.fullBio,
    telephone: doctor.phone,
    knowsLanguage: doctor.languages,
    image: `https://drruchikasubham.com${doctor.photo}`,
    medicalSpecialty: [
      "Obstetrics",
      "Gynecology",
      "GynecologicSurgery",
      "ReproductiveEndocrinology",
    ],
    hospitalAffiliation: {
      "@type": "Hospital",
      name: doctor.hospitalShort,
      address: {
        "@type": "PostalAddress",
        streetAddress: doctor.hospital,
        addressLocality: "Siliguri",
        addressRegion: "West Bengal",
        postalCode: "734003",
        addressCountry: "IN",
      },
    },
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#FAFAF9] text-[#1A2229]">
      {/* Google Physician Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
      />

      {/* 1. Responsive Navigation Bar */}
      <Navbar />

      {/* 3. Breadcrumb Bar */}
      <div className="bg-white border-b border-[#F1E5E8] py-2.5 text-xs text-[#64748B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2">
          <Link href="/" className="hover:text-[#FB5A7C] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <Link href="/#doctors" className="hover:text-[#FB5A7C] transition-colors">
            Our Doctors
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="font-semibold text-[#1A2229]">{doctor.name}</span>
        </div>
      </div>

      {/* 4. Doctor Hero Section - High Impact & Compact */}
      <section
        className={`relative overflow-hidden py-8 sm:py-12 ${
          isSubham
            ? "bg-gradient-to-b from-[#F2FAFE] via-white to-[#FAFAF9]"
            : "bg-gradient-to-b from-[#FFF5F7] via-white to-[#FAFAF9]"
        }`}
      >
        {/* Soft background aura */}
        <div
          className={`absolute top-0 right-0 w-96 h-96 rounded-full filter blur-3xl opacity-30 -z-10 pointer-events-none ${
            isSubham ? "bg-[#BCE6F9]" : "bg-[#FFE9ED]"
          }`}
        />

        {/* Decorative Concentric Life-Pulse Ring */}
        <div
          className={`dynamic-pulse-ring -top-20 -right-20 w-72 h-72 sm:-top-28 sm:-right-24 sm:w-[440px] sm:h-[440px] lg:-top-32 lg:-right-20 lg:w-[520px] lg:h-[520px] transition-colors duration-1000 ${
            isSubham ? "text-[#4384C6]/30" : "text-[#F57B94]/30"
          }`}
          style={{
            boxShadow: isSubham
              ? "inset 0 0 0 55px transparent, inset 0 0 0 56px rgba(67, 132, 198, 0.16), inset 0 0 0 120px transparent, inset 0 0 0 121px rgba(67, 132, 198, 0.10)"
              : "inset 0 0 0 55px transparent, inset 0 0 0 56px rgba(245, 123, 148, 0.18), inset 0 0 0 120px transparent, inset 0 0 0 121px rgba(224, 158, 92, 0.12)",
          }}
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            
            {/* Left: Portrait Card with Fast-Action Conversion Buttons */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div
                className={`relative w-full max-w-sm rounded-3xl p-3 bg-white border-2 ${doctor.accentBorder} shadow-xl`}
              >
                {/* Available Status Pill */}
                <div className="absolute top-5 right-5 z-10 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-full shadow-xs border border-emerald-100 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-bold text-emerald-700">Available OPD</span>
                </div>

                {/* Portrait Photo */}
                <div
                  className={`relative w-full aspect-[4/5] rounded-2xl overflow-hidden ${doctor.accentBg}`}
                >
                  <Image
                    src={doctor.extendedPhoto || doctor.photo}
                    alt={doctor.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-top"
                    priority
                  />
                </div>

                {/* Hospital Badge on Card */}
                <div className="mt-2.5 p-2.5 rounded-xl bg-gray-50 border border-gray-100 flex items-center text-xs">
                  <div className="flex items-center gap-2 min-w-0">
                    <Building2 className="w-4 h-4 text-gray-500 shrink-0" />
                    <div className="min-w-0">
                      <span className="font-bold text-[#1A2229] block truncate">
                        {doctor.hospitalShort}
                      </span>
                      <span className="text-gray-500 text-[11px]">{doctor.timings}</span>
                    </div>
                  </div>
                </div>

                {/* Primary Quick CTA button: Direct WhatsApp Booking */}
                <div className="mt-2.5">
                  <a
                    href={doctor.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full justify-center text-xs py-2.5 px-4 rounded-full shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all font-bold flex items-center gap-2 ${doctorBtnClass}`}
                  >
                    <MessageCircle className="w-4 h-4 fill-white shrink-0" />
                    <span>Book on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Bio, Credentials & Key Metrics */}
            <div className="lg:col-span-7 space-y-4 text-left">
              {/* Doctor Role Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white shadow-2xs border border-gray-200">
                <Sparkles className="w-3.5 h-3.5" style={{ color: doctor.accentColor }} />
                <span style={{ color: doctor.accentColor }}>{doctor.role}</span>
              </div>

              {/* Doctor Name & Degrees */}
              <div>
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A2229] tracking-tight">
                  {doctor.name}
                </h1>
                <p className="text-sm sm:text-base font-semibold text-[#64748B] mt-0.5">
                  {doctor.degrees}
                </p>
              </div>

              {/* Tagline Quote */}
              <blockquote
                className={`p-3.5 rounded-2xl bg-white border-l-4 ${
                  isSubham ? "border-l-[#4384C6]" : "border-l-[#F57B94]"
                } border-gray-100 shadow-xs text-xs sm:text-sm font-medium text-[#1A2229] italic`}
              >
                &ldquo;{doctor.tagline}&rdquo;
              </blockquote>

              {/* Bio Summary */}
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                {doctor.fullBio}
              </p>

              {/* Key Qualifications Pill Badges */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                  Verified Degrees &amp; Fellowships:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {doctor.qualificationsList.map((qual) => (
                    <span
                      key={qual}
                      className="text-xs bg-white border border-gray-200 text-[#1A2229] px-2.5 py-1 rounded-full shadow-2xs font-medium flex items-center gap-1.5"
                    >
                      <CheckCircle2
                        className="w-3.5 h-3.5 shrink-0"
                        style={{ color: doctor.accentColor }}
                      />
                      <span>{qual}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Quick Stats Strip */}
              <div className="grid grid-cols-3 gap-2.5 pt-1">
                <div className="p-2.5 rounded-2xl bg-white border border-gray-100 shadow-2xs text-center">
                  <span className="block text-lg sm:text-xl font-extrabold text-[#1A2229]">
                    {doctor.experience}
                  </span>
                  <span className="text-[10px] text-gray-500 font-medium">Experience</span>
                </div>
                <div className="p-2.5 rounded-2xl bg-white border border-gray-100 shadow-2xs text-center">
                  <span className="block text-lg sm:text-xl font-extrabold text-[#1A2229]">
                    1,000+
                  </span>
                  <span className="text-[10px] text-gray-500 font-medium">Normal Deliveries</span>
                </div>
                <div className="p-2.5 rounded-2xl bg-white border border-gray-100 shadow-2xs text-center">
                  <span className="block text-lg sm:text-xl font-extrabold text-emerald-600">
                    Cashless
                  </span>
                  <span className="text-[10px] text-gray-500 font-medium">TPA Insurance</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-2.5 pt-1">
                <a
                  href={doctor.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full sm:w-auto text-xs sm:text-sm py-2.5 px-6 rounded-full font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all justify-center inline-flex items-center gap-2 ${doctorBtnClass}`}
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Book with {doctor.shortName} on WhatsApp</span>
                </a>
                <a
                  href="#location-timings"
                  className="w-full sm:w-auto text-xs sm:text-sm py-2.5 px-5 rounded-full bg-white border border-gray-200 text-[#1A2229] hover:bg-gray-50 font-semibold shadow-xs transition-all text-center"
                >
                  View Clinic Timings &amp; Address
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 5. Infinite Marquee Clinical Milestones Ticker - Compact Space-Saving */}
      <section className="bg-[#1A2229] text-white py-3.5 border-y border-gray-800 relative overflow-hidden">
        {/* Edge Gradient Masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#1A2229] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#1A2229] to-transparent z-10" />

        <div className="flex gap-8 animate-marquee whitespace-nowrap items-center text-xs sm:text-sm font-semibold">
          {[...doctor.milestones, ...doctor.milestones].map((m, i) => (
            <div key={i} className="flex items-center gap-2 shrink-0">
              <Award className="w-4 h-4 shrink-0" style={{ color: doctor.accentColor }} />
              <span className="text-gray-200">{m}</span>
              <span className="text-gray-600 mx-2">&bull;</span>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Specialized Clinical Care - CONDITIONS TREATED & PROCEDURES PERFORMED */}
      <section className="py-8 sm:py-12 bg-white border-t border-[#F1E5E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DoctorSpecialtiesCarousel
            specialties={doctor.specialtyDetails}
            doctorName={doctor.name}
            doctorShortName={doctor.shortName}
            doctorWhatsapp={doctor.whatsapp}
            accentColor={doctor.accentColor}
            accentBg={doctor.accentBg}
          />
        </div>
      </section>

      {/* 7. High-Impact Clinical Philosophy & Special Focus */}
      <section className="py-8 sm:py-12 bg-[#FAFAF9] border-t border-[#F1E5E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DoctorPhilosophySection
            philosophyTitle={doctor.philosophyTitle}
            philosophyDesc={doctor.philosophyDesc}
            philosophyImage={doctor.philosophyImage}
            specialHighlightTitle={doctor.specialHighlightTitle}
            specialHighlightDesc={doctor.specialHighlightDesc}
            specialHighlightImage={doctor.specialHighlightImage}
            languages={doctor.languages}
            doctorShortName={doctor.shortName}
            doctorWhatsapp={doctor.whatsapp}
            isSubham={isSubham}
            accentColor={doctor.accentColor}
            accentBg={doctor.accentBg}
            accentBorder={doctor.accentBorder}
          />
        </div>
      </section>

      {/* 8. Doctor Video Guidance & Instagram Reels */}
      <DoctorVideoReelsSection
        doctorId={doctor.id as "ruchika" | "subham"}
        doctorName={doctor.name}
        doctorShortName={doctor.shortName}
        accentColor={doctor.accentColor}
        accentBg={doctor.accentBg}
        accentBorder={doctor.accentBorder}
        accentText={doctor.accentText}
        instagramUrl={doctor.instagram}
        instagramHandle={doctor.instagramHandle}
        whatsappUrl={doctor.whatsapp}
      />

      {/* 8B & 9. Outpatient Consultation Facility & Meet Your Co-Consultant (Side-by-Side) */}
      <section id="location-timings" className="scroll-mt-24 py-8 sm:py-12 bg-white border-t border-[#F1E5E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            
            {/* Left: Outpatient Consultation Facility */}
            <div className="bg-white rounded-3xl p-5 sm:p-7 border-2 border-[#F1E5E8] shadow-sm flex flex-col justify-between">
              <div className="space-y-3.5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-[#1A2229] bg-gray-100">
                  <Building2 className="w-3.5 h-3.5" style={{ color: doctor.accentColor }} />
                  <span>Outpatient Consultation Facility</span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1A2229]">
                    {doctor.hospitalShort}
                  </h3>
                </div>

                <div className="space-y-2.5 text-xs sm:text-sm text-[#475569]">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: doctor.accentColor }} />
                    <span className="leading-snug">{doctor.hospital}</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 shrink-0" style={{ color: doctor.accentColor }} />
                    <span className="font-semibold text-[#1A2229]">{doctor.timings}</span>
                  </div>
                </div>

                <div className="pt-0.5">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      doctor.hospital
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold hover:underline"
                    style={{ color: doctor.accentText }}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Open in Google Maps Directions</span>
                  </a>
                </div>
              </div>

              {/* Insurance & Quick WhatsApp Booking */}
              <div className="mt-5 pt-4 border-t border-gray-100 space-y-3">
                <div className="bg-[#FAFAF9] rounded-2xl p-3 border border-gray-100 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Cashless &amp; TPA Insurance Supported</span>
                  </div>
                  <p className="text-[11px] text-gray-500 leading-relaxed">
                    {doctor.id === "subham"
                      ? "Supported for normal deliveries, cesarean sections, and laparoscopic surgeries at Manipal Hospital."
                      : "Supported for specialized fertility evaluations, operative gynaecology, and day-care procedures at affiliated centres."}
                  </p>
                </div>

                <a
                  href={doctor.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full justify-center text-xs py-2.5 px-4 shadow-sm hover:shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all rounded-full font-bold flex items-center gap-2 ${doctorBtnClass}`}
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Book Appointment on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right: Meet Your Co-Consultant (The Couple Advantage) */}
            {partnerDoctor && (
              <div className="bg-gradient-to-br from-[#FFF5F7] via-white to-[#F2FAFE] rounded-3xl p-5 sm:p-7 border-2 border-[#FFD3DC] shadow-sm flex flex-col justify-between">
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#FB5A7C] bg-white px-2.5 py-1 rounded-full border border-pink-100 shadow-2xs">
                      The Couple Advantage
                    </span>
                    <span className="text-[11px] text-gray-500 font-medium">
                      &ldquo;A family caring for your family&rdquo;
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#1A2229]">
                      Meet Your Co-Consultant
                    </h3>
                  </div>

                  {/* Partner Doctor Mini Profile */}
                  <div className="bg-white/90 backdrop-blur-xs rounded-2xl p-3 sm:p-3.5 border border-gray-100 shadow-2xs flex items-center gap-3.5">
                    <Link
                      href={`/doctors/${partnerDoctor.slug}`}
                      className="relative w-16 h-20 sm:w-20 sm:h-24 rounded-xl overflow-hidden shadow-xs shrink-0 border border-gray-100 bg-gray-50 group block"
                    >
                      <Image
                        src={partnerDoctor.photo}
                        alt={partnerDoctor.name}
                        fill
                        sizes="96px"
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      />
                    </Link>
                    <div className="min-w-0 flex-1 space-y-1">
                      <Link
                        href={`/doctors/${partnerDoctor.slug}`}
                        className="block group/link"
                      >
                        <h4 className="text-sm sm:text-base font-bold text-[#1A2229] group-hover/link:text-[#FB5A7C] transition-colors leading-tight">
                          {partnerDoctor.name}
                        </h4>
                      </Link>
                      <p className="text-[11px] font-semibold text-gray-500 line-clamp-1">
                        {partnerDoctor.degrees}
                      </p>
                      <p className="text-[11px] text-[#475569] line-clamp-1">
                        {partnerDoctor.role}
                      </p>
                      <div className="flex items-center gap-1 text-[11px] text-gray-600 pt-0.5">
                        <MapPin className="w-3 h-3 text-gray-400 shrink-0" />
                        <span className="truncate">{partnerDoctor.hospitalShort}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-[#475569] leading-relaxed">
                    Dr. Ruchika and Dr. Subham collaborate closely on complex pregnancies, high-risk birth plans, and surgical decisions so your care is comprehensively double-reviewed.
                  </p>
                </div>

                {/* Bottom Actions */}
                <div className="mt-5 pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center gap-2.5">
                  <Link
                    href={`/doctors/${partnerDoctor.slug}`}
                    className={`w-full sm:w-auto flex-1 text-xs py-2.5 px-4 shadow-sm hover:shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all rounded-full font-bold inline-flex items-center justify-center gap-1.5 ${
                      partnerDoctor.id === "subham"
                        ? "bg-[#4384C6] hover:bg-[#3271B2] text-white"
                        : "bg-[#F57B94] hover:bg-[#E6627E] text-white"
                    }`}
                  >
                    <span>View {partnerDoctor.shortName}&apos;s Profile</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={WHATSAPP_JOINT}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto text-xs font-bold text-[#0B75A1] hover:underline px-3 py-2 text-center"
                  >
                    Inquire Joint Care &rarr;
                  </a>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* 10. Patient Reviews & Recovery Stories */}
      <ReviewsSection
        doctorFilter={doctor.id as "subham" | "ruchika"}
        doctorName={doctor.shortName}
      />

      {/* 11. Frequently Asked Questions - INTERACTIVE ACCORDION WITH GOOGLE FAQ SCHEMA */}
      <section className="py-8 sm:py-12 bg-white border-t border-[#F1E5E8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-6 sm:mb-8">
            <span className="badge-accent mb-2">Got Questions?</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A2229]">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-1.5">
              Click to view answers about OPD appointments, consultation fees, and hospital procedures.
            </p>
          </div>

          <DoctorFaqAccordion
            faqs={doctor.faqs}
            doctorName={doctor.name}
            doctorShortName={doctor.shortName}
            accentColor={doctor.accentColor}
          />

        </div>
      </section>

      {/* 11. Final Quick Booking Strip */}
      <section className="py-10 bg-[#FAFAF9] border-t border-[#F1E5E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-[#1A2229]">
            Schedule Your Consultation with {doctor.name}
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 max-w-lg mx-auto">
            Direct OPD appointments at {doctor.hospitalShort}. Instant confirmation over WhatsApp.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <a
              href={doctor.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-xs sm:text-sm py-2.5 px-6 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all rounded-full font-bold inline-flex items-center gap-2 ${doctorBtnClass}`}
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Book on WhatsApp Now</span>
            </a>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs sm:text-sm py-2.5 px-6 rounded-full bg-white border border-gray-200 text-[#1A2229] hover:bg-gray-50 font-semibold shadow-2xs transition-all"
            >
              Back to Homepage
            </Link>
          </div>
        </div>
      </section>

      {/* 12. Footer */}
      <Footer />

      {/* 13. Floating WhatsApp Assistant */}
      <WhatsAppFAB />
    </main>
  );
}
