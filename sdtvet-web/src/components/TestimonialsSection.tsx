"use client";

import React from "react";
import { Star, Quote, ShieldCheck, HeartHandshake } from "lucide-react";
import { TESTIMONIALS, Testimonial } from "@/data/site-data";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-slate-50/70 border-t border-slate-200/80 w-full relative">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* SECTION HEADER */}
        <div className="w-full mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-200/60">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-100/70 text-xs font-bold text-[#00509d] uppercase tracking-wider mb-4 border border-blue-200">
              <HeartHandshake className="w-3.5 h-3.5 text-[#00509d]" />
              <span>Client Endorsements</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading">
              What Our Partners Say
            </h2>
          </div>
          <div className="flex items-center space-x-2 text-xs sm:text-sm font-semibold text-slate-600 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>100% Verified TVET Institutional Partners</span>
          </div>
        </div>

        {/* TESTIMONIALS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {TESTIMONIALS.map((item: Testimonial) => (
            <div
              key={item.name}
              className="bg-white rounded-3xl p-8 sm:p-9 border border-slate-200/90 shadow-sm flex flex-col justify-between card-hover-lift relative overflow-hidden group"
            >
              {/* WATERMARK QUOTE */}
              <div className="absolute top-6 right-6 text-slate-100 group-hover:text-blue-50 transition-colors -z-0">
                <Quote className="w-20 h-20" />
              </div>

              <div className="relative z-10">
                {/* 5-STAR RATING & VERIFIED BADGE */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center space-x-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    Verified Result
                  </span>
                </div>

                {/* QUOTE TEXT */}
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed italic font-normal">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* AUTHOR INFO */}
              <div className="relative z-10 pt-6 mt-8 border-t border-slate-100 flex items-center space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00509d] to-[#00296b] text-white flex items-center justify-center font-bold text-sm flex-shrink-0 shadow-md shadow-blue-900/15">
                  {item.initials}
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 leading-tight font-heading">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 font-medium">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
