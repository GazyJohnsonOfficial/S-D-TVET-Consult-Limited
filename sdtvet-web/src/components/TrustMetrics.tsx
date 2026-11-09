import React from "react";
import { Building2, Users, CalendarCheck, Award } from "lucide-react";
import { SITE_CONFIG } from "@/data/site-data";

export default function TrustMetrics() {
  const icons = [
    <Building2 key="b" className="w-6 h-6 text-[#00509d]" />,
    <Users key="u" className="w-6 h-6 text-[#00509d]" />,
    <CalendarCheck key="c" className="w-6 h-6 text-[#00509d]" />,
    <Award key="a" className="w-6 h-6 text-[#00509d]" />,
  ];

  return (
    <section className="relative -mt-10 z-20 w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
      <div className="bg-white rounded-3xl shadow-xl border border-slate-200/90 p-8 sm:p-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {SITE_CONFIG.metrics.map((metric, index) => (
            <div
              key={metric.label}
              className={`flex flex-col items-center text-center p-3 sm:p-4 ${
                index > 0 ? "pt-6 sm:pt-4" : ""
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-3">
                {icons[index % icons.length]}
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {metric.value}
              </div>
              <div className="text-sm font-bold text-slate-800 mt-1">
                {metric.label}
              </div>
              <div className="text-xs text-slate-500 mt-0.5 max-w-[180px]">
                {metric.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

