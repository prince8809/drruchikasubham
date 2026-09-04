"use client";

import { Baby, Activity, HeartPulse, Stethoscope, Microscope, Award } from "lucide-react";
import { stats } from "@/data/stats";

export default function StatsCounter() {
  const getIcon = (iconName: string, color: string) => {
    const props = { className: "w-4 h-4 sm:w-4.5 sm:h-4.5", style: { color } };
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
    <section
      id="experience"
      className="py-4 sm:py-5 bg-white border-y border-[#F1E5E8] relative overflow-hidden"
    >
      {/* Crisp, Uncluttered Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 text-center sm:text-left">
          <div>
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-0.5">
              <span className="badge-primary text-[10px] py-0.5 px-2">Proven Clinical Record</span>
              <span className="text-[11px] font-semibold text-gray-400 hidden sm:inline">&bull; 6+ Years Experience</span>
            </div>
            <h2 className="text-base sm:text-xl font-bold text-[#1A2229] leading-tight">
              Surgical &amp; Obstetric Milestones
            </h2>
          </div>

          <p className="text-xs text-[#64748B] hidden md:block max-w-sm text-right">
            Dedicated patient outcomes across North Bengal &amp; Sikkim.
          </p>
        </div>
      </div>

      {/* Static, High-Impact 6-Stat Grid (1 row on Desktop, 2 rows on Mobile) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-2.5">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-[#FAFAF9] hover:bg-white rounded-2xl p-2.5 sm:p-3 border border-gray-100 hover:border-[#FFCCD6] hover:shadow-xs transition-all text-center flex flex-col items-center justify-center group"
            >
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center mb-1 shadow-2xs group-hover:scale-105 transition-transform"
                style={{ backgroundColor: `${stat.color}15` }}
              >
                {getIcon(stat.icon, stat.color)}
              </div>
              <span
                className="text-base sm:text-lg lg:text-xl font-black tracking-tight leading-none block"
                style={{ color: stat.color }}
              >
                {stat.value}
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold text-gray-700 mt-1 leading-tight block line-clamp-2">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
