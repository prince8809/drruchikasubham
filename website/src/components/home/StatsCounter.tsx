"use client";

import { Baby, Activity, HeartPulse, Stethoscope, Microscope, Award } from "lucide-react";
import { stats } from "@/data/stats";

export default function StatsCounter() {
  const getIcon = (iconName: string, color: string) => {
    const props = { className: "w-6 h-6", style: { color } };
    switch (iconName) {
      case "Baby":
        return <Baby {...props} />;
      case "Activity":
        return <Activity {...props} />;
      case "HeartPulse":
        return <HeartPulse {...props} />;
      case "Stethoscope":
        return <Stethoscope {...props} />;
      case "Microscope":
        return <Microscope {...props} />;
      case "Award":
        return <Award {...props} />;
      default:
        return <Award {...props} />;
    }
  };

  return (
    <section id="experience" className="py-16 bg-white border-y border-[#F1E5E8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="badge-primary mb-2">Proven Surgical &amp; Obstetric Record</span>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#1A2229]">
            Clinical Milestones Backed by Trust
          </h2>
          <p className="text-sm sm:text-base text-[#475569] mt-2">
            Over six years of clinical excellence providing dedicated care for families across North Bengal, Sikkim, and neighboring regions.
          </p>
        </div>

        {/* 6 Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-[#FAFAF9] rounded-2xl p-5 border border-gray-100 flex flex-col items-center text-center hover:bg-white hover:border-[#FFCCD6] hover:shadow-lg transition-all duration-300 group"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform"
                style={{ backgroundColor: `${stat.color}15` }}
              >
                {getIcon(stat.icon, stat.color)}
              </div>
              <span
                className="text-2xl sm:text-3xl font-extrabold tracking-tight"
                style={{ color: stat.color }}
              >
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-medium text-[#475569] mt-1 leading-snug">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Insurance Assurance Bar */}
        <div className="mt-10 bg-[#ECFDF5] border border-[#A7F3D0] rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#10B981] text-white flex items-center justify-center shrink-0 font-bold">
              ✓
            </div>
            <div>
              <p className="text-sm font-bold text-[#065F46]">
                Cashless Mediclaim &amp; TPA Coverage Available
              </p>
              <p className="text-xs text-[#047857]">
                Surgeries, normal deliveries, and LUCS c-sections covered through Manipal Hospital Siliguri.
              </p>
            </div>
          </div>
          <a
            href="#booking"
            className="text-xs font-bold text-[#065F46] bg-white border border-[#10B981] px-4 py-2 rounded-xl hover:bg-[#10B981] hover:text-white transition-colors"
          >
            Check Your Policy &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
