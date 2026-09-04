"use client";

import { HeartPulse, Baby, Sparkles, Microscope, Activity, ShieldAlert, Heart, ChevronRight } from "lucide-react";
import { services } from "@/data/services";
import { WHATSAPP_SUBHAM } from "@/lib/constants";

export default function ServicesGrid() {
  const getIcon = (iconName: string, color: string) => {
    const props = { className: "w-6 h-6", style: { color } };
    switch (iconName) {
      case "HeartPulse":
        return <HeartPulse {...props} />;
      case "Baby":
        return <Baby {...props} />;
      case "Sparkles":
        return <Sparkles {...props} />;
      case "Microscope":
        return <Microscope {...props} />;
      case "Activity":
        return <Activity {...props} />;
      case "ShieldAlert":
        return <ShieldAlert {...props} />;
      case "Heart":
        return <Heart {...props} />;
      default:
        return <HeartPulse {...props} />;
    }
  };

  return (
    <section id="services" className="py-20 bg-[#FAFAF9] border-t border-[#F1E5E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="badge-primary mb-2">Our Clinical Expertise</span>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#1A2229]">
            Comprehensive Care for Every Stage of Womanhood
          </h2>
          <p className="text-sm sm:text-base text-[#475569] mt-3">
            From adolescent gynaecology and reproductive planning to delivery and advanced minimally invasive surgeries, we provide evidence-based care in a warm, welcoming setting.
          </p>
        </div>

        {/* 7 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => (
            <div
              key={svc.slug}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#FFCCD6] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header Icon + Title */}
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: `${svc.color}15` }}
                  >
                    {getIcon(svc.icon, svc.color)}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#1A2229] group-hover:text-[#FB5A7C] transition-colors leading-snug">
                      {svc.title}
                    </h3>
                  </div>
                </div>

                {/* Short description */}
                <p className="text-sm text-[#475569] mb-4 leading-relaxed">
                  {svc.shortDesc}
                </p>

                {/* Specific Treatments Bullet list */}
                <div className="space-y-2 mb-6 pt-3 border-t border-gray-100">
                  {svc.details.map((detail) => (
                    <div key={detail} className="flex items-center gap-2 text-xs text-[#64748B]">
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: svc.color }}></span>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <a
                href={`${WHATSAPP_SUBHAM}&text=Hey%20I%20want%20to%20inquire%20about%20${encodeURIComponent(svc.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto flex items-center justify-between text-xs font-bold pt-3 border-t border-gray-50 text-[#1A2229] group-hover:text-[#FB5A7C] transition-colors"
              >
                <span>Consult on this condition</span>
                <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}

          {/* 8th Card: Second Opinion & Complex Cases Callout */}
          <div className="bg-gradient-to-br from-[#FFF5F7] via-white to-[#E3F4FC] rounded-2xl p-6 border-2 border-dashed border-[#FFCCD6] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#FB5A7C] shadow-sm mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-[#1A2229] mb-2">
                Need a Trusted Second Opinion?
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed mb-4">
                Facing a recommendation for hysterectomy, laparoscopic surgery, or high-risk delivery? Bring your previous reports for an unbiased, thorough surgical &amp; obstetric review.
              </p>
            </div>
            <a
              href={WHATSAPP_SUBHAM}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs py-2.5 px-4 justify-center shadow-sm w-full"
            >
              Book Second Opinion Review
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
