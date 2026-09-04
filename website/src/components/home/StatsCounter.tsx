"use client";

import { Baby, Activity, HeartPulse, Stethoscope, Microscope, Award, ShieldCheck } from "lucide-react";
import { stats } from "@/data/stats";

export default function StatsCounter() {
  const getIcon = (iconName: string, color: string) => {
    const props = { className: "w-5 h-5", style: { color } };
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

  // Duplicate the array so it loops seamlessly 0% -> -50% without empty gaps
  const doubledStats = [...stats, ...stats];

  return (
    <section
      id="experience"
      className="py-8 sm:py-10 bg-white border-y border-[#F1E5E8] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        {/* Crisp, Space-Saving Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-center sm:text-left">
          <div>
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
              <span className="badge-primary text-[10px] py-0.5 px-2.5">Proven Clinical Milestones</span>
              <span className="text-[11px] font-semibold text-gray-400 hidden sm:inline">&bull; 6+ Years Trust</span>
            </div>
            <h2 className="text-lg sm:text-2xl font-bold text-[#1A2229] leading-tight">
              Clinical Milestones Backed by Trust
            </h2>
            <p className="text-xs text-[#64748B] mt-0.5 max-w-xl hidden sm:block">
              Dedicated care for families across North Bengal, Sikkim, and neighboring regions.
            </p>
          </div>

          {/* Compact Insurance Badge */}
          <div className="flex items-center justify-center sm:justify-end gap-1.5 text-xs text-[#065F46] bg-[#ECFDF5] border border-[#A7F3D0] px-3 py-1.5 rounded-full shrink-0">
            <ShieldCheck className="w-4 h-4 text-[#10B981]" />
            <span className="font-semibold text-[11px]">Cashless Insurance &amp; TPA Accepted</span>
          </div>
        </div>
      </div>

      {/* Infinite Smooth Scrolling Marquee Container */}
      <div className="relative w-full overflow-hidden group">
        {/* Left & Right Elegant Edge Fade Gradients */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-16 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-16 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

        {/* Scrolling Ticker Track */}
        <div className="animate-marquee gap-3 sm:gap-4 py-1.5 pl-4">
          {doubledStats.map((stat, i) => (
            <div
              key={`${stat.label}-${i}`}
              className="w-[195px] sm:w-[220px] shrink-0 bg-[#FAFAF9] hover:bg-white rounded-2xl p-3.5 border border-gray-100 hover:border-[#FFCCD6] hover:shadow-md transition-all duration-300 flex items-center gap-3.5 select-none"
            >
              {/* Stat Icon Circle */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform"
                style={{ backgroundColor: `${stat.color}15` }}
              >
                {getIcon(stat.icon, stat.color)}
              </div>

              {/* Number + Label */}
              <div className="min-w-0">
                <span
                  className="text-xl sm:text-2xl font-extrabold tracking-tight block leading-tight"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </span>
                <span className="text-xs font-semibold text-[#1A2229] leading-tight block truncate">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
