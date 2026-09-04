import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  MessageCircle,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  Award,
  Heart,
  Sparkles,
  ChevronRight,
  Languages,
  CheckCircle2,
  Users,
  Dna,
  HeartPulse,
  Baby,
  Microscope,
  Pill,
  Activity,
  Thermometer,
  Stethoscope,
  ArrowRight,
  ExternalLink,
  HelpCircle,
  Building2,
} from "lucide-react";
import { doctors } from "@/data/doctors";
import EmergencyBar from "@/components/layout/EmergencyBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFAB from "@/components/layout/WhatsAppFAB";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  HeartPulse,
  Baby,
  Microscope,
  Activity,
  Pill,
  Dna,
  Sparkles,
  Thermometer,
  Stethoscope,
};

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

  return {
    title: `${doctor.name} — ${doctor.role} | Siliguri`,
    description: `${doctor.tagline} ${doctor.bio} Consulting at ${doctor.hospitalShort}. Standard OPD Consultation: ₹800.`,
    keywords: [
      doctor.name,
      doctor.shortName,
      doctor.role,
      "gynaecologist siliguri",
      "obstetrician siliguri",
      doctor.hospitalShort,
      "pregnancy care siliguri",
      "PCOS doctor siliguri",
      "laparoscopic surgery siliguri",
      "normal delivery siliguri",
    ],
  };
}

export default async function DoctorDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doctor = doctors.find((d) => d.slug === slug);

  if (!doctor) {
    notFound();
  }

  const partnerDoctor = doctors.find((d) => d.slug === doctor.partnerDoctorSlug);
  const isSubham = doctor.id === "subham";

  return (
    <main className="min-h-screen flex flex-col bg-[#FAFAF9] text-[#1A2229]">
      {/* 1. Emergency Obstetric & Surgical Banner */}
      <EmergencyBar />

      {/* 2. Responsive Navigation Bar */}
      <Navbar />

      {/* 3. Breadcrumb Bar */}
      <div className="bg-white border-b border-[#F1E5E8] py-3 text-xs sm:text-sm text-[#64748B]">
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

      {/* 4. Doctor Hero Section */}
      <section
        className={`relative overflow-hidden py-10 sm:py-16 ${
          isSubham
            ? "bg-gradient-to-b from-[#F2FAFE] via-white to-[#FAFAF9]"
            : "bg-gradient-to-b from-[#FFF5F7] via-white to-[#FAFAF9]"
        }`}
      >
        {/* Soft background aura */}
        <div
          className={`absolute top-0 right-0 w-96 h-96 rounded-full filter blur-3xl opacity-40 -z-10 pointer-events-none ${
            isSubham ? "bg-[#BCE6F9]" : "bg-[#FFE9ED]"
          }`}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Portrait Card & Direct Booking Strip */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div
                className={`relative w-full max-w-sm rounded-3xl p-3 bg-white border-2 ${doctor.accentBorder} shadow-xl`}
              >
                {/* Available Status Pill */}
                <div className="absolute top-6 right-6 z-10 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-full shadow-sm border border-emerald-100 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[11px] font-bold text-emerald-700">Available OPD</span>
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
                <div className="mt-3 p-3 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-gray-500" />
                    <div>
                      <span className="font-bold text-[#1A2229] block">
                        {doctor.hospitalShort}
                      </span>
                      <span className="text-gray-500 text-[11px]">{doctor.timings}</span>
                    </div>
                  </div>
                  <span className="font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full text-[11px]">
                    {doctor.consultationFee}
                  </span>
                </div>

                {/* Primary Quick CTA buttons */}
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <a
                    href={doctor.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp justify-center text-xs py-2.5 px-3 shadow-sm hover:shadow-md transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href={`tel:${doctor.phone}`}
                    className="btn-secondary justify-center text-xs py-2.5 px-3 bg-white border border-gray-200 hover:bg-gray-50 transition-all text-[#1A2229] font-semibold"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Clinic</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Bio, Credentials & Key Metrics */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Doctor Role Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white shadow-2xs border border-gray-200">
                <Sparkles className="w-3.5 h-3.5" style={{ color: doctor.accentColor }} />
                <span style={{ color: doctor.accentColor }}>{doctor.role}</span>
              </div>

              {/* Doctor Name & Degrees */}
              <div>
                <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1A2229] tracking-tight">
                  {doctor.name}
                </h1>
                <p className="text-base sm:text-lg font-semibold text-[#64748B] mt-1">
                  {doctor.degrees}
                </p>
              </div>

              {/* Tagline Quote */}
              <blockquote className="p-4 rounded-2xl bg-white border-l-4 border-l-[#FB5A7C] border-gray-100 shadow-xs text-sm sm:text-base font-medium text-[#1A2229] italic">
                &ldquo;{doctor.tagline}&rdquo;
              </blockquote>

              {/* Bio Summary */}
              <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                {doctor.fullBio}
              </p>

              {/* Key Qualifications Pill Badges */}
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                  Credentials &amp; Fellowships:
                </span>
                <div className="flex flex-wrap gap-2">
                  {doctor.qualificationsList.map((qual) => (
                    <span
                      key={qual}
                      className="text-xs bg-white border border-gray-200 text-[#1A2229] px-3 py-1 rounded-full shadow-2xs font-medium flex items-center gap-1.5"
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
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-3 rounded-2xl bg-white border border-gray-100 shadow-2xs text-center">
                  <span className="block text-xl font-extrabold text-[#1A2229]">
                    {doctor.experience}
                  </span>
                  <span className="text-[11px] text-gray-500 font-medium">Experience</span>
                </div>
                <div className="p-3 rounded-2xl bg-white border border-gray-100 shadow-2xs text-center">
                  <span className="block text-xl font-extrabold text-[#1A2229]">
                    1,000+
                  </span>
                  <span className="text-[11px] text-gray-500 font-medium">Normal Deliveries</span>
                </div>
                <div className="p-3 rounded-2xl bg-white border border-gray-100 shadow-2xs text-center">
                  <span className="block text-xl font-extrabold text-[#1A2229]">
                    {doctor.consultationFee}
                  </span>
                  <span className="text-[11px] text-gray-500 font-medium">Standard OPD</span>
                </div>
                <div className="p-3 rounded-2xl bg-white border border-gray-100 shadow-2xs text-center">
                  <span className="block text-xl font-extrabold text-emerald-600">
                    Cashless
                  </span>
                  <span className="text-[11px] text-gray-500 font-medium">TPA Insurance</span>
                </div>
              </div>

              {/* Main Booking CTAs */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <a
                  href={doctor.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full sm:w-auto text-sm py-3 px-6 shadow-md hover:shadow-lg transition-all justify-center"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Book with {doctor.shortName} on WhatsApp</span>
                </a>
                <a
                  href="#location-timings"
                  className="w-full sm:w-auto text-sm py-3 px-5 rounded-full bg-white border border-gray-200 text-[#1A2229] hover:bg-gray-50 font-semibold shadow-xs transition-all text-center"
                >
                  View Clinic Timings &amp; Address
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 5. Clinical Philosophy & Special Highlight Section */}
      <section className="py-14 sm:py-20 bg-white border-t border-[#F1E5E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="badge-primary mb-2">Patient-Centered Care</span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#1A2229]">
              {doctor.philosophyTitle}
            </h2>
            <p className="text-sm sm:text-base text-[#475569] mt-3">
              Combining academic rigor, meticulous surgical skill, and an empathetic bedside manner.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Philosophy Box */}
            <div className="lg:col-span-7 bg-gradient-to-br from-[#FAFAF9] to-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-[#1A2229] mb-4 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-[#FB5A7C]" />
                  A Practice Founded on Empathy &amp; Trust
                </h3>
                <p className="text-sm sm:text-base text-[#475569] leading-relaxed mb-6">
                  {doctor.philosophyDesc}
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                    <p className="text-xs sm:text-sm text-[#475569]">
                      <strong className="text-[#1A2229]">Unhurried consultations:</strong> Time spent explaining ultrasound scans, lab reports, and treatment options clearly.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                    <p className="text-xs sm:text-sm text-[#475569]">
                      <strong className="text-[#1A2229]">Evidence-based protocols:</strong> Prioritizing patient safety, natural physiology, and minimal medical intervention where possible.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                    <p className="text-xs sm:text-sm text-[#475569]">
                      <strong className="text-[#1A2229]">Multilingual communication:</strong> Consultations conducted comfortably in English, Hindi, Bengali, or Nepali.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                <span>Languages Spoken:</span>
                <span className="font-semibold text-[#1A2229]">
                  {doctor.languages.join(" • ")}
                </span>
              </div>
            </div>

            {/* Special Highlight Box */}
            <div
              className={`lg:col-span-5 rounded-3xl p-6 sm:p-8 border-2 ${doctor.accentBorder} ${doctor.accentBg} flex flex-col justify-between shadow-xs`}
            >
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white shadow-2xs mb-4">
                  <Award className="w-4 h-4" style={{ color: doctor.accentColor }} />
                  <span style={{ color: doctor.accentColor }}>Special Clinical Focus</span>
                </div>

                <h3 className="text-xl font-bold text-[#1A2229] mb-3">
                  {doctor.specialHighlightTitle}
                </h3>

                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-6">
                  {doctor.specialHighlightDesc}
                </p>

                {isSubham ? (
                  <div className="p-4 rounded-2xl bg-white border border-sky-100 space-y-2 text-xs text-[#475569]">
                    <div className="font-bold text-[#0B75A1] text-sm">
                      How Dr. Subham Helps Fathers &amp; Partners:
                    </div>
                    <ul className="space-y-1.5 list-disc list-inside">
                      <li>Explains what to expect during each trimester</li>
                      <li>Actionable labor coaching and hospital bag readiness</li>
                      <li>Understanding postpartum mood changes and physical recovery</li>
                    </ul>
                  </div>
                ) : (
                  <div className="p-4 rounded-2xl bg-white border border-pink-100 space-y-2 text-xs text-[#475569]">
                    <div className="font-bold text-[#C4274C] text-sm">
                      How Dr. Ruchika Guides Young Women:
                    </div>
                    <ul className="space-y-1.5 list-disc list-inside">
                      <li>Confidential, compassionate adolescent period consultations</li>
                      <li>Root-cause PCOS reversal (lifestyle, diet, hormonal balance)</li>
                      <li>Preconception planning and gentle fertility optimization</li>
                    </ul>
                  </div>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200/60">
                <a
                  href={doctor.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold inline-flex items-center gap-1.5 hover:underline"
                  style={{ color: doctor.accentColor }}
                >
                  <span>Discuss your concerns with {doctor.shortName}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. Comprehensive Specialty Details Section */}
      <section className="py-14 sm:py-20 bg-[#FAFAF9] border-t border-[#F1E5E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="badge-accent mb-2">Specialized Clinical Scope</span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#1A2229]">
              Conditions Treated &amp; Procedures Performed
            </h2>
            <p className="text-sm sm:text-base text-[#475569] mt-3">
              Comprehensive medical and surgical gynaecological care tailored to your individual health journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctor.specialtyDetails.map((item) => {
              const IconComp = iconMap[item.icon] || Stethoscope;

              return (
                <div
                  key={item.title}
                  className="bg-white rounded-3xl p-6 border border-gray-200/80 hover:border-[#FB5A7C] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Icon */}
                    <div
                      className={`w-12 h-12 rounded-2xl ${doctor.accentBg} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform`}
                      style={{ color: doctor.accentColor }}
                    >
                      <IconComp className="w-6 h-6" />
                    </div>

                    <h3 className="text-lg font-bold text-[#1A2229] mb-2 group-hover:text-[#FB5A7C] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
                      {item.desc}
                    </p>

                    {/* Tag Chips */}
                    {item.tags && (
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] bg-gray-50 border border-gray-100 text-gray-600 px-2 py-0.5 rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* WhatsApp Quick Inquire Link */}
                  <a
                    href={`${doctor.whatsapp}&text=Hey%20Dr.%20${encodeURIComponent(
                      doctor.shortName
                    )},%20I%20have%20an%20inquiry%20regarding%20${encodeURIComponent(
                      item.title
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[#FB5A7C] hover:text-[#E54366] transition-colors"
                  >
                    <span>Inquire about this treatment</span>
                    <MessageCircle className="w-3.5 h-3.5" />
                  </a>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 7. Clinical Milestones & Surgical Record */}
      <section className="py-12 bg-white border-t border-[#F1E5E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#1A2229] to-[#2A343F] text-white rounded-3xl p-8 sm:p-12 shadow-xl">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#2FB2EA] bg-[#2FB2EA]/20 px-3 py-1 rounded-full mb-2">
                Proven Surgical &amp; Obstetric Record
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold">
                Clinical Excellence Backed by Trust
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {doctor.milestones.map((milestone) => (
                <div
                  key={milestone}
                  className="bg-white/10 backdrop-blur-xs rounded-2xl p-5 border border-white/10 flex items-center gap-3.5"
                >
                  <Award className="w-6 h-6 text-[#2FB2EA] shrink-0" />
                  <span className="text-sm font-semibold text-gray-100 leading-snug">
                    {milestone}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Clinic Location, Timings & Consultation Details */}
      <section id="location-timings" className="py-14 sm:py-20 bg-[#FAFAF9] border-t border-[#F1E5E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="badge-primary mb-2">Clinic &amp; Timings</span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#1A2229]">
              Consultation Location &amp; Visiting Hours
            </h2>
            <p className="text-sm sm:text-base text-[#475569] mt-3">
              Convenient outpatient clinic located centrally in Pradhan Nagar, Siliguri.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border-2 border-[#F1E5E8] shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-[#1A2229] bg-gray-100">
                  <Building2 className="w-4 h-4 text-[#FB5A7C]" />
                  <span>Outpatient Consultation Facility</span>
                </div>

                <h3 className="text-2xl font-bold text-[#1A2229]">
                  {doctor.hospitalShort}
                </h3>

                <div className="space-y-3 text-sm text-[#475569]">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#FB5A7C] shrink-0 mt-0.5" />
                    <span>{doctor.hospital}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-[#2FB2EA] shrink-0" />
                    <span className="font-semibold text-[#1A2229]">{doctor.timings}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#FB5A7C] shrink-0" />
                    <a
                      href={`tel:${doctor.phone}`}
                      className="font-bold text-[#1A2229] hover:underline"
                    >
                      {doctor.phone}
                    </a>
                  </div>
                </div>

                <div className="pt-2">
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

              {/* Consultation Fee & Insurance Badge Box */}
              <div className="bg-[#FAFAF9] rounded-2xl p-6 border border-gray-200 space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                    Standard OPD Fee
                  </span>
                  <span className="text-2xl font-black text-[#FB5A7C]">
                    {doctor.consultationFee}
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-xl">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Cashless &amp; TPA Insurance Supported</span>
                  </div>
                  <p className="text-[11px] text-gray-500 leading-relaxed">
                    Accepted for deliveries, cesarean sections, and laparoscopic surgeries at Manipal Hospital.
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href={doctor.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp w-full justify-center text-xs py-3 shadow-sm hover:shadow-md transition-all"
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
        <section className="py-14 sm:py-20 bg-white border-t border-[#F1E5E8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-[#FFF5F7] via-white to-[#F2FAFE] rounded-3xl p-6 sm:p-10 border border-[#FFCCD6] shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                <div className="lg:col-span-8 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#FB5A7C] bg-white px-3 py-1 rounded-full border border-pink-100 shadow-2xs">
                      The Couple Doctor Advantage
                    </span>
                    <span className="text-xs text-gray-500 font-medium hidden sm:inline">
                      &bull; &ldquo;A family caring for your family&rdquo;
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-[#1A2229]">
                    Meet Your Co-Consultant: {partnerDoctor.name}
                  </h2>

                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    Dr. Subham and Dr. Ruchika work collaboratively as Siliguri&apos;s husband-and-wife specialist team. For complex pregnancies, difficult surgical decisions, or pre-pregnancy planning, both doctors cross-review your case so your care is double-checked and supported from every angle.
                  </p>

                  <div className="pt-3 flex flex-wrap items-center gap-3">
                    <Link
                      href={`/doctors/${partnerDoctor.slug}`}
                      className="btn-primary text-xs py-2.5 px-5 shadow-xs inline-flex items-center gap-2"
                    >
                      <span>View {partnerDoctor.shortName}&apos;s Profile</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <a
                      href={`${partnerDoctor.whatsapp}&text=Hey%20I%20want%20to%20inquire%20about%20a%20Joint%20Consultation%20with%20both%20Dr.%20Subham%20and%20Dr.%20Ruchika`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-[#0B75A1] hover:underline px-3 py-2"
                    >
                      Inquire About Joint Consultation &rarr;
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-4 flex justify-center">
                  <Link
                    href={`/doctors/${partnerDoctor.slug}`}
                    className="group bg-white rounded-2xl p-3 border border-gray-200 hover:border-[#FB5A7C] shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center w-56"
                  >
                    <div className="relative w-36 h-44 rounded-xl overflow-hidden mb-2 bg-gray-50">
                      <Image
                        src={partnerDoctor.photo}
                        alt={partnerDoctor.name}
                        fill
                        sizes="160px"
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <span className="text-sm font-bold text-[#1A2229] group-hover:text-[#FB5A7C] transition-colors">
                      {partnerDoctor.name}
                    </span>
                    <span className="text-[11px] text-gray-500 font-medium">
                      {partnerDoctor.hospitalShort}
                    </span>
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </section>
      )}

      {/* 10. Frequently Asked Questions */}
      <section className="py-14 sm:py-20 bg-[#FAFAF9] border-t border-[#F1E5E8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <span className="badge-accent mb-2">Got Questions?</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A2229]">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-[#475569] mt-2">
              Everything you need to know about your consultation with {doctor.shortName}.
            </p>
          </div>

          <div className="space-y-4">
            {doctor.faqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-200/80 shadow-2xs"
              >
                <h3 className="text-base font-bold text-[#1A2229] flex items-start gap-2.5">
                  <HelpCircle className="w-5 h-5 text-[#FB5A7C] shrink-0 mt-0.5" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mt-2.5 pl-7.5">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 11. Final Quick Booking Strip */}
      <section className="py-12 bg-white border-t border-[#F1E5E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-[#1A2229]">
            Ready to Schedule Your Visit with {doctor.name}?
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 max-w-lg mx-auto">
            Direct appointments available at {doctor.hospitalShort}. Instant confirmation over WhatsApp.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <a
              href={doctor.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-sm py-3 px-6 shadow-md hover:shadow-lg transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Book on WhatsApp Now</span>
            </a>
            <Link
              href="/"
              className="btn-secondary text-sm py-3 px-6 bg-white border border-gray-200 text-[#1A2229] hover:bg-gray-50 font-semibold"
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
