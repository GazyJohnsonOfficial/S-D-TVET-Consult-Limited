import React from "react";
import { Building2, Users, CalendarCheck, Award } from "lucide-react";
import { SITE_CONFIG } from "@/data/site-data";

const metricIcons: Record<string, React.ReactNode> = {
  Building2: <Building2 className="w-5 h-5" />,
  Users: <Users className="w-5 h-5" />,
  CalendarCheck: <CalendarCheck className="w-5 h-5" />,
  Award: <Award className="w-5 h-5" />,
};

export default function TrustMetrics() {
  const metrics = SITE_CONFIG.metrics;

  return (
    <section className="relative w-full bg-[#001e4d] overflow-hidden">
      {/* SUBTLE BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/4 w-[500px] h-[300px] bg-[#00509d]/25 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 right-1/4 w-[400px] h-[250px] bg-amber-500/10 rounded-full blur-3xl" />
      </div>

      {/* ACCENT RULE */}
      <div className="relative h-px w-full bg-gradient-to-r from-transparent via-amber-400/70 to-transparent" />

      <div className="relative w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 py-12 lg:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className={`flex items-start space-x-5 lg:px-8 first:lg:pl-0 last:lg:pr-0 ${
                index > 0 ? "lg:border-l lg:border-white/10" : ""
              }`}
            >
              {/* ICON CHIP */}
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 text-amber-300 flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                {metricIcons[metric.icon] ?? <Award className="w-5 h-5" />}
              </div>

              <div className="min-w-0">
                <div className="flex items-baseline space-x-1">
                  <span className="text-4xl sm:text-[2.75rem] font-black text-white tracking-tight leading-none">
                    {metric.value}
                  </span>
                </div>

                <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-amber-300/90 mt-2.5">
                  {metric.label}
                </div>

                <p className="text-xs sm:text-sm text-slate-300/80 mt-1.5 leading-relaxed">
                  {metric.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
