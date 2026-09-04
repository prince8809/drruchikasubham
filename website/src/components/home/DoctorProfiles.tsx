import Image from "next/image";
import Link from "next/link";
import { MessageCircle, MapPin, Clock, Languages, Stethoscope, Phone, ArrowRight } from "lucide-react";
import { doctors } from "@/data/doctors";
import { CONSULTATION_FEE } from "@/lib/constants";

export default function DoctorProfiles() {
  return (
    <section id="doctors" className="py-20 bg-white border-t border-[#F1E5E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge-accent mb-2">Dual Specialist Excellence</span>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#1A2229]">
            Meet Your Consulting Doctors
          </h2>
          <p className="text-sm sm:text-base text-[#475569] mt-3">
            Combining academic rigor, advanced surgical training, and deep personal empathy. Choose the specialist aligned with your medical needs or schedule a joint consultation.
          </p>
        </div>

        {/* Two Doctor Profiles */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {doctors.map((doc) => {
            const isSubham = doc.id === "subham";
            const borderClass = isSubham ? "border-[#BCE6F9] hover:border-[#2FB2EA]" : "border-[#FFCCD6] hover:border-[#FB5A7C]";
            const accentBg = isSubham ? "bg-[#F2FAFE]" : "bg-[#FFF5F7]";
            const badgeBg = isSubham ? "bg-[#E3F4FC] text-[#0B75A1]" : "bg-[#FFE9ED] text-[#C4274C]";

            return (
              <div
                key={doc.id}
                className={`bg-white rounded-3xl p-6 sm:p-8 border-2 ${borderClass} shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  {/* Doctor Top Details: Photo + Title */}
                  <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start mb-6 text-center sm:text-left">
                    <Link
                      href={`/doctors/${doc.slug}`}
                      className="group/img relative w-36 h-44 sm:w-40 sm:h-48 rounded-2xl overflow-hidden shadow-md shrink-0 border border-gray-100 bg-gray-50 block"
                    >
                      <Image
                        src={doc.photo}
                        alt={doc.name}
                        fill
                        sizes="180px"
                        className="object-cover object-top group-hover/img:scale-105 transition-transform duration-300"
                      />
                    </Link>
                    
                    <div className="space-y-2">
                      <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full ${badgeBg}`}>
                        {doc.degrees}
                      </span>
                      <Link href={`/doctors/${doc.slug}`} className="block group/name">
                        <h3 className="text-xl sm:text-2xl font-bold text-[#1A2229] group-hover/name:text-[#FB5A7C] transition-colors">
                          {doc.name}
                        </h3>
                      </Link>
                      <p className="text-xs sm:text-sm font-medium text-[#475569] leading-snug">
                        {doc.role}
                      </p>

                      <div className="pt-2 flex flex-wrap gap-2 justify-center sm:justify-start">
                        <span className="text-[11px] font-semibold text-gray-500 flex items-center gap-1 bg-gray-100 px-2.5 py-0.5 rounded-full">
                          <Languages className="w-3 h-3 text-gray-600" />
                          {doc.languages.join(", ")}
                        </span>
                        <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                          OPD: {CONSULTATION_FEE}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-6 bg-gray-50/70 p-4 rounded-xl border border-gray-100">
                    {doc.bio}
                  </p>

                  {/* Consulting Hospital & Timings */}
                  <div className={`p-4 rounded-2xl ${accentBg} space-y-2.5 mb-6 text-xs text-[#1A2229]`}>
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 shrink-0 text-[#1A2229] mt-0.5" />
                      <div>
                        <strong className="block text-[#1A2229] font-bold">{doc.hospitalShort}</strong>
                        <span className="text-gray-600 text-[11px]">{doc.hospital}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5 pt-1 border-t border-gray-200/50">
                      <Clock className="w-4 h-4 shrink-0 text-[#1A2229]" />
                      <span className="font-semibold text-gray-700">{doc.timings}</span>
                    </div>

                    <div className="flex items-center gap-2.5 pt-1">
                      <Phone className="w-4 h-4 shrink-0 text-[#1A2229]" />
                      <a href={`tel:${doc.phone}`} className="hover:underline font-bold text-gray-800">
                        {doc.phone}
                      </a>
                    </div>
                  </div>

                  {/* Key Specialties Chips */}
                  <div className="space-y-2 mb-6">
                    <span className="text-xs font-bold text-gray-700 flex items-center gap-1">
                      <Stethoscope className="w-3.5 h-3.5 text-[#FB5A7C]" />
                      Key Focus Areas:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {doc.specialties.map((spec) => (
                        <span
                          key={spec}
                          className="text-[11px] bg-white border border-gray-200 text-gray-700 px-2.5 py-1 rounded-lg shadow-2xs"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action CTAs */}
                <div className="pt-2 space-y-2">
                  <a
                    href={doc.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp w-full justify-center text-sm py-3 shadow-md hover:shadow-lg transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Book with {doc.shortName || doc.name.split(" ")[1]} on WhatsApp</span>
                  </a>

                  <Link
                    href={`/doctors/${doc.slug}`}
                    className="w-full justify-center text-xs font-bold text-[#1A2229] hover:text-[#FB5A7C] py-2.5 px-4 rounded-xl bg-gray-50 hover:bg-gray-100/80 border border-gray-200 transition-all flex items-center gap-1.5"
                  >
                    <span>View Full Profile &amp; Clinical Biography</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
