"use client";

import React from "react";
import { SITE_CONFIG } from "@/data/site-data";

export default function TrustMetrics() {
  const metrics = [
    {
      value: "22+",
      label: "Accredited Institutions",
      detail: "Achieved full CTVET certification across Ghana",
      tag: "100% Pass Rate"
    },
    {
      value: "500+",
      label: "Trained Facilitators",
      detail: "Instructors coached in Competency-Based Training",
      tag: "Certified Instructors"
    },
    {
      value: "8+",
      label: "Years Sector Experience",
      detail: "Specialized policy, audit, and institutional setup",
      tag: "Founding Authority"
    },
    {
      value: "6",
      label: "GTVP Flagship Projects",
      detail: "Managed Ghana TVET Voucher training grants",
      tag: "National Impact"
    }
  ];

  return (
    <section className="relative -mt-10 z-20 w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
      <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-6 sm:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className={`flex flex-col justify-between p-3 ${
                index > 0 ? "pt-6 sm:pt-2 sm:pl-8" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                    {metric.tag}
                  </span>
                </div>

                <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  {metric.value}
                </div>

                <div className="text-base font-bold text-slate-800 mt-2">
                  {metric.label}
                </div>

                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  {metric.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
