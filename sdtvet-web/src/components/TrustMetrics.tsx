"use client";

import React from "react";
import { Building2, Users, CalendarCheck, Award, ArrowUpRight } from "lucide-react";
import { SITE_CONFIG } from "@/data/site-data";

export default function TrustMetrics() {
  const metrics = [
    {
      value: "22+",
      label: "Accredited Institutions",
      detail: "Achieved full CTVET certification across Ghana",
      icon: <Building2 className="w-6 h-6 text-[#00509d]" />,
      badge: "100% Pass Rate"
    },
    {
      value: "500+",
      label: "Trained Facilitators",
      detail: "Instructors coached in Competency-Based Training",
      icon: <Users className="w-6 h-6 text-[#00509d]" />,
      badge: "Certified Instructors"
    },
    {
      value: "8+",
      label: "Years of Sector Experience",
      detail: "Specialized policy, audit, & institutional setup",
      icon: <CalendarCheck className="w-6 h-6 text-[#00509d]" />,
      badge: "Founding Authority"
    },
    {
      value: "6",
      label: "GTVP Flagship Projects",
      detail: "Managed Ghana TVET Voucher training grants",
      icon: <Award className="w-6 h-6 text-[#00509d]" />,
      badge: "National Impact"
    }
  ];

  return (
    <section className="relative -mt-10 z-20 w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
      <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-200/90 p-6 sm:p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className={`flex flex-col justify-between p-4 ${
                index > 0 ? "pt-6 sm:pt-4 sm:pl-8" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50/80 border border-blue-100 flex items-center justify-center">
                    {metric.icon}
                  </div>
                  <span className="text-xs font-semibold text-slate-400">
                    {metric.badge}
                  </span>
                </div>

                <div className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
                  {metric.value}
                </div>

                <div className="text-base font-bold text-slate-900 mt-2">
                  {metric.label}
                </div>

                <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                  {metric.detail}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-[#00509d]">
                <span>Verified Metric</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1 text-slate-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
