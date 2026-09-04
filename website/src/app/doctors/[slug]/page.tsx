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
  Heart,
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
import DoctorFaqAccordion from "@/components/doctor/DoctorFaqAccordion";
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                    className="btn-whatsapp w-full justify-center text-xs py-2.5 px-4 rounded-full shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all font-bold flex items-center gap-2"
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
              <blockquote className="p-3.5 rounded-2xl bg-white border-l-4 border-l-[#FB5A7C] border-gray-100 shadow-xs text-xs sm:text-sm font-medium text-[#1A2229] italic">
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
                  className="btn-whatsapp w-full sm:w-auto text-xs sm:text-sm py-2.5 px-6 shadow-md hover:shadow-lg transition-all justify-center"
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
              <Award className="w-4 h-4 text-[#2FB2EA] shrink-0" />
              <span className="text-gray-200">{m}</span>
              <span className="text-gray-600 mx-2">&bull;</span>
            </div>
          ))}
        </div>
      </section>

      {/* 6. High-Impact Clinical Philosophy & Special Focus */}
      <section className="py-8 sm:py-12 bg-white border-t border-[#F1E5E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Philosophy Box */}
            <div className="lg:col-span-7 bg-gradient-to-br from-[#FAFAF9] to-white rounded-3xl p-5 sm:p-7 border border-gray-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#1A2229] mb-2 flex items-center gap-2">
                  <Heart className="w-4 h-4 text-[#FB5A7C]" />
                  {doctor.philosophyTitle}
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
                  {doctor.philosophyDesc}
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2.5 text-xs text-[#475569]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span><strong className="text-[#1A2229]">Unhurried consultations:</strong> Detailed scan reviews and clear explanations.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-[#475569]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span><strong className="text-[#1A2229]">Evidence-based safety:</strong> Supporting natural birth physiology with minimal medical interventions.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-[#475569]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span><strong className="text-[#1A2229]">Multilingual:</strong> Fluent in English, Hindi, Bengali, and Nepali.</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500">
                <span>Languages:</span>
                <span className="font-semibold text-[#1A2229]">{doctor.languages.join(" • ")}</span>
              </div>
            </div>

            {/* Special Highlight Box */}
            <div
              className={`lg:col-span-5 rounded-3xl p-5 sm:p-7 border-2 ${doctor.accentBorder} ${doctor.accentBg} flex flex-col justify-between shadow-xs`}
            >
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white shadow-2xs mb-3">
                  <Award className="w-3.5 h-3.5" style={{ color: doctor.accentColor }} />
                  <span style={{ color: doctor.accentColor }}>Special Clinical Focus</span>
                </div>

                <h3 className="text-lg font-bold text-[#1A2229] mb-2">
                  {doctor.specialHighlightTitle}
                </h3>

                <p className="text-xs text-[#475569] leading-relaxed mb-4">
                  {doctor.specialHighlightDesc}
                </p>

                {isSubham ? (
                  <div className="p-3 rounded-xl bg-white border border-sky-100 text-xs text-[#475569] space-y-1">
                    <div className="font-bold text-[#0B75A1] text-xs">
                      The Partner&apos;s Journey:
                    </div>
                    <p className="text-[11px] text-gray-600">
                      Clear labor coaching, hospital readiness, and postpartum emotional support so fathers are active, supportive partners.
                    </p>
                  </div>
                ) : (
                  <div className="p-3 rounded-xl bg-white border border-pink-100 text-xs text-[#475569] space-y-1">
                    <div className="font-bold text-[#C4274C] text-xs">
                      Adolescent &amp; Gentle Maternity:
                    </div>
                    <p className="text-[11px] text-gray-600">
                      Confidential period guidance, root-cause PCOS reversal, and calm natural birth preparation in a warm environment.
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-4 pt-3 border-t border-gray-200/60">
                <a
                  href={doctor.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold inline-flex items-center gap-1 hover:underline"
                  style={{ color: doctor.accentColor }}
                >
                  <span>Discuss your health concerns with {doctor.shortName}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. Specialized Clinical Care - SPACE-SAVING HORIZONTAL CAROUSEL */}
      <section className="py-8 sm:py-12 bg-[#FAFAF9] border-t border-[#F1E5E8]">
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

      {/* 8. Clinic Location, Timings & Consultation Details */}
      <section id="location-timings" className="scroll-mt-24 py-8 sm:py-12 bg-white border-t border-[#F1E5E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-5 sm:p-8 border-2 border-[#F1E5E8] shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-[#1A2229] bg-gray-100">
                  <Building2 className="w-3.5 h-3.5 text-[#FB5A7C]" />
                  <span>Outpatient Consultation Facility</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#1A2229]">
                  {doctor.hospitalShort}
                </h3>

                <div className="space-y-2.5 text-xs sm:text-sm text-[#475569]">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#FB5A7C] shrink-0 mt-0.5" />
                    <span>{doctor.hospital}</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-[#2FB2EA] shrink-0" />
                    <span className="font-semibold text-[#1A2229]">{doctor.timings}</span>
                  </div>
                </div>

                <div className="pt-1">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      doctor.hospital
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B75A1] hover:underline"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Open in Google Maps Directions</span>
                  </a>
                </div>
              </div>

              {/* Insurance & Quick Appointment Booking Box */}
              <div className="bg-[#FAFAF9] rounded-2xl p-4 sm:p-5 border border-gray-200 space-y-3">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-2 rounded-xl">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Cashless &amp; TPA Insurance Supported</span>
                  </div>
                  <p className="text-[11px] text-gray-500 leading-relaxed">
                    Supported for normal deliveries, cesarean sections, and laparoscopic surgeries at Manipal Hospital.
                  </p>
                </div>

                <div className="pt-1">
                  <a
                    href={doctor.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp w-full justify-center text-xs py-2.5 shadow-sm hover:shadow-md transition-all rounded-full"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Book Appointment on WhatsApp</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 9. Meet Your Co-Consultant / Couple Advantage Cross-Link */}
      {partnerDoctor && (
        <section className="py-8 sm:py-10 bg-[#FAFAF9] border-t border-[#F1E5E8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-[#FFF5F7] via-white to-[#F2FAFE] rounded-3xl p-5 sm:p-8 border border-[#FFCCD6] shadow-xs">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                
                <div className="lg:col-span-8 space-y-2.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#FB5A7C] bg-white px-2.5 py-0.5 rounded-full border border-pink-100 shadow-2xs">
                      The Couple Advantage
                    </span>
                    <span className="text-xs text-gray-500 font-medium hidden sm:inline">
                      &bull; &ldquo;A family caring for your family&rdquo;
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-[#1A2229]">
                    Meet Your Co-Consultant: {partnerDoctor.name}
                  </h2>

                  <p className="text-xs text-[#475569] leading-relaxed">
                    Dr. Ruchika and Dr. Subham work together as Siliguri&apos;s husband-and-wife specialist team. For complex pregnancies, difficult surgical decisions, or pre-pregnancy planning, both doctors collaborate so your care is double-reviewed.
                  </p>

                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <Link
                      href={`/doctors/${partnerDoctor.slug}`}
                      className="btn-primary text-xs py-2 px-4 shadow-xs inline-flex items-center gap-1.5"
                    >
                      <span>View {partnerDoctor.shortName}&apos;s Profile</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <a
                      href={WHATSAPP_JOINT}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-[#0B75A1] hover:underline px-2 py-1"
                    >
                      Inquire Joint Consultation &rarr;
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-4 flex justify-center">
                  <Link
                    href={`/doctors/${partnerDoctor.slug}`}
                    className="group bg-white rounded-2xl p-2.5 border border-gray-200 hover:border-[#FB5A7C] shadow-2xs hover:shadow-md transition-all text-center flex flex-col items-center w-48"
                  >
                    <div className="relative w-32 h-38 rounded-xl overflow-hidden mb-2 bg-gray-50">
                      <Image
                        src={partnerDoctor.photo}
                        alt={partnerDoctor.name}
                        fill
                        sizes="140px"
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <span className="text-xs font-bold text-[#1A2229] group-hover:text-[#FB5A7C] transition-colors">
                      {partnerDoctor.name}
                    </span>
                    <span className="text-[10px] text-gray-500 font-medium">
                      {partnerDoctor.hospitalShort}
                    </span>
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </section>
      )}

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
              className="btn-whatsapp text-xs sm:text-sm py-2.5 px-6 shadow-md hover:shadow-lg transition-all rounded-full"
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
