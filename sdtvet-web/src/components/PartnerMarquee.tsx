"use client";

import React from "react";

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
    <div className="w-full bg-slate-900 text-white py-5 overflow-hidden border-y border-slate-800 relative">
      {/* GRADIENT SHADOW FADES FOR EDGES */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />

      <div className="w-full max-w-[1600px] mx-auto px-6 mb-3 flex items-center justify-between">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
          Trusted by 22+ TVET Institutions Across Ghana
        </span>
        <span className="text-[11px] text-slate-400 hidden sm:inline-block">
          Official CTVET Accreditation &amp; CBT Implementation Partners
        </span>
      </div>

      <div className="animate-marquee flex items-center space-x-6">
        {marqueeItems.map((partner, idx) => (
          <div
            key={idx}
            className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-white/25 transition-colors flex-shrink-0"
          >
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-slate-200">
              {partner}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
