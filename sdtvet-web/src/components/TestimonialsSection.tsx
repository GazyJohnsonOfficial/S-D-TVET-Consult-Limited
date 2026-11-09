"use client";

import React from "react";
import { Star, Quote, ShieldCheck, Sparkles, Building } from "lucide-react";
import { TESTIMONIALS, Testimonial } from "@/data/site-data";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-slate-50/70 border-t border-slate-200/80 w-full bg-dot-pattern">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* SECTION HEADER */}
        <div className="w-full mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-slate-200/80">
          <div>
            <span className="text-xs font-bold text-[#00509d] uppercase tracking-wider block mb-2">
              Verified Institutional References
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              What Our Partners Say
            </h2>
          </div>
          <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
            Direct feedback from administrators, proprietors, and quality assurance leads across Ghana who achieved accreditation with our team.
          </p>
        </div>

        {/* TESTIMONIALS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {TESTIMONIALS.map((item: Testimonial) => (
            <div
              key={item.name}
              className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between card-hover-pro relative overflow-hidden"
            >
              <div className="absolute top-6 right-6 text-slate-100 pointer-events-none -z-0">
                <Quote className="w-20 h-20" />
              </div>

              <div className="relative z-10">
                {/* 5-STAR RATING */}
                <div className="flex items-center space-x-1 text-amber-400 mb-5">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-slate-700 ml-1.5">5.0 / 5.0</span>
                </div>

                {/* QUOTE TEXT */}
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed italic mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* AUTHOR INFO */}
              <div className="relative z-10 pt-6 border-t border-slate-100 flex items-center space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00509d] to-[#00296b] text-white flex items-center justify-center font-bold text-sm flex-shrink-0 shadow-md">
                  {item.initials}
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 leading-tight">
                    {item.name}
                  </h3>
                  <div className="flex items-center space-x-1 text-xs text-slate-500 mt-1">
                    <Building className="w-3 h-3 text-slate-400" />
                    <span>{item.role}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
