import React from "react";
import { Building2, Users, CalendarCheck, Award, TrendingUp } from "lucide-react";
import { SITE_CONFIG } from "@/data/site-data";

export default function TrustMetrics() {
  const iconGradients = [
    "from-blue-600 to-[#00509d]",
    "from-indigo-600 to-blue-700",
    "from-amber-500 to-amber-600",
    "from-emerald-500 to-emerald-700",
  ];

  const icons = [
    <Building2 key="b" className="w-6 h-6 text-white" />,
    <Users key="u" className="w-6 h-6 text-white" />,
    <CalendarCheck key="c" className="w-6 h-6 text-white" />,
    <Award key="a" className="w-6 h-6 text-white" />,
  ];

  return (
    <section className="relative -mt-12 z-20 w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
      <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl shadow-slate-900/10 border border-slate-200/90 p-8 sm:p-10 relative overflow-hidden">
        {/* TOP ACCENT LINE */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-amber-400 to-[#00296b]" />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {SITE_CONFIG.metrics.map((metric, index) => (
            <div
              key={metric.label}
              className={`flex flex-col items-center text-center p-3 sm:p-4 group ${
                index > 0 ? "pt-6 sm:pt-4" : ""
              }`}
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${iconGradients[index % iconGradients.length]} flex items-center justify-center mb-4 shadow-lg shadow-blue-900/10 transition-transform duration-200 group-hover:scale-110`}
              >
                {icons[index % icons.length]}
              </div>

              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-heading group-hover:text-[#00509d] transition-colors">
                {metric.value}
              </div>

              <div className="text-sm sm:text-base font-bold text-slate-800 mt-1.5">
                {metric.label}
              </div>

              <div className="text-xs text-slate-500 mt-1 max-w-[200px] leading-relaxed">
                {metric.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
