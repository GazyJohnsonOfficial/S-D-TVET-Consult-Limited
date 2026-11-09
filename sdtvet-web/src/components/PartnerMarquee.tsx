"use client";

import React from "react";
import { CheckCircle2, Building, ShieldCheck } from "lucide-react";

export default function PartnerMarquee() {
  const partners = [
    "MECATI (Mamfe & Kumasi)",
    "Geagle Training Institute",
    "MBA Mode Institute",
    "Glory Divine Skills Training Center",
    "CareerCraft Vocational Institute",
    "Academic City University",
    "NADAA Training Institute",
    "New Century Training Institute",
    "Pentecost Skills Development Center",
    "St. Theresa's Training Institute",
    "Touch Skills Training Center",
    "2nd Image International",
  ];

  // Duplicate for seamless infinite loop
  const marqueeItems = [...partners, ...partners];

  return (
    <div className="w-full bg-slate-900 text-white py-6 overflow-hidden border-y border-slate-800 relative">
      {/* GRADIENT SHADOW FADES FOR EDGES */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />

      <div className="w-full max-w-[1600px] mx-auto px-6 mb-3 flex items-center justify-between">
        <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-amber-400">
          <ShieldCheck className="w-4 h-4 text-amber-400" />
          <span>Trusted by 22+ TVET Institutions Across Ghana</span>
        </div>
        <span className="text-[11px] text-slate-400 hidden sm:inline-block">
          Official Accreditation &amp; Implementation Partners
        </span>
      </div>

      <div className="animate-marquee flex items-center space-x-8">
        {marqueeItems.map((partner, idx) => (
          <div
            key={idx}
            className="flex items-center space-x-2.5 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400/40 transition-colors flex-shrink-0"
          >
            <Building className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-slate-200">
              {partner}
            </span>
            <CheckCircle2 className="w-3.5 h-3.5 text-blue-400/80" />
          </div>
        ))}
      </div>
    </div>
  );
}

