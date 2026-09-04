import Image from "next/image";
import Link from "next/link";
import { MessageCircle, MapPin, Clock, ArrowRight } from "lucide-react";
import { doctors } from "@/data/doctors";

export default function DoctorProfiles() {
  return (
    <section id="doctors" className="py-10 sm:py-14 bg-white border-t border-[#F1E5E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading - Compact & High Impact */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <span className="badge-accent mb-2">Dual Specialist Excellence</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1A2229]">
            Meet Your Consulting Doctors
          </h2>
          <p className="text-xs sm:text-sm text-[#475569] mt-2">
            Siliguri&apos;s husband-and-wife specialist team. Select a doctor to view their full credentials, clinical philosophy, and OPD timings.
          </p>
        </div>

        {/* Compact Two-Doctor Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
          {doctors.map((doc) => {
            const isSubham = doc.id === "subham";
            const borderClass = isSubham
              ? "border-[#BCE6F9] hover:border-[#2FB2EA]"
              : "border-[#FFCCD6] hover:border-[#FB5A7C]";
            const badgeBg = isSubham
              ? "bg-[#E3F4FC] text-[#0B75A1]"
              : "bg-[#FFE9ED] text-[#C4274C]";
            const topSpecialties = isSubham
              ? ["High-Risk Pregnancy", "Normal & LUCS Delivery", "Laparoscopic Surgery"]
              : ["Fertility & Conception", "PCOS / Hormonal Balance", "Normal Delivery"];

            return (
              <div
                key={doc.id}
                className={`bg-white rounded-3xl p-4 sm:p-5 border-2 ${borderClass} shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between`}
              >
                {/* Horizontal Card Content */}
                <div className="flex flex-row items-start gap-3.5 sm:gap-5">
                  {/* Portrait Thumbnail */}
                  <Link
                    href={`/doctors/${doc.slug}`}
                    className="group/img relative w-24 h-32 sm:w-32 sm:h-40 rounded-2xl overflow-hidden shadow-xs shrink-0 border border-gray-100 bg-gray-50 block"
                  >
                    <Image
                      src={doc.photo}
                      alt={doc.name}
                      fill
                      sizes="(max-width: 640px) 100px, 140px"
                      className="object-cover object-top group-hover/img:scale-105 transition-transform duration-300"
                    />
                  </Link>

                  {/* Doctor Details */}
                  <div className="min-w-0 flex-1 space-y-1.5">
                    <div className="flex items-center gap-1.5">
                      <span className={`inline-block text-[10px] sm:text-xs font-bold px-2.5 py-0.5 rounded-full ${badgeBg}`}>
                        {doc.degrees}
                      </span>
                    </div>

                    <Link href={`/doctors/${doc.slug}`} className="block group/name">
                      <h3 className="text-base sm:text-xl font-bold text-[#1A2229] group-hover/name:text-[#FB5A7C] transition-colors leading-tight">
                        {doc.name}
                      </h3>
                    </Link>

                    <p className="text-xs text-[#475569] font-medium leading-tight line-clamp-1">
                      {doc.role}
                    </p>

                    {/* Hospital & Hours Pill */}
                    <div className="pt-0.5 flex flex-wrap items-center gap-1.5 text-[11px] text-gray-600">
                      <span className="inline-flex items-center gap-1 bg-gray-100 px-2 py-0.5 rounded-md font-semibold text-gray-700">
                        <MapPin className="w-3 h-3 text-[#FB5A7C]" />
                        {doc.hospitalShort}
                      </span>
                      <span className="hidden sm:inline-flex items-center gap-1 text-gray-500">
                        <Clock className="w-3 h-3 text-[#2FB2EA]" />
                        {doc.timings.replace("Monday – Friday: ", "Mon-Fri ")}
                      </span>
                    </div>

                    {/* Top 3 Specialty Chips */}
                    <div className="pt-1 flex flex-wrap gap-1">
                      {topSpecialties.map((spec) => (
                        <span
                          key={spec}
                          className="text-[10px] bg-gray-50 border border-gray-200 text-gray-600 px-2 py-0.5 rounded-md"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action Buttons */}
                <div className="mt-4 pt-3 border-t border-gray-100 grid grid-cols-2 gap-2.5">
                  <a
                    href={doc.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp justify-center text-xs py-2.5 px-3 shadow-xs hover:shadow-md transition-all truncate"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white shrink-0" />
                    <span className="truncate">Book WhatsApp</span>
                  </a>

                  <Link
                    href={`/doctors/${doc.slug}`}
                    className="justify-center text-xs font-bold text-[#1A2229] hover:text-[#FB5A7C] py-2.5 px-3 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-200 transition-all flex items-center gap-1 text-center"
                  >
                    <span>View Profile</span>
                    <ArrowRight className="w-3 h-3 shrink-0" />
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
