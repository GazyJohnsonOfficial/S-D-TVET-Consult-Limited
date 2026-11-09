"use client";

import React from "react";
import { Star } from "lucide-react";
import { TESTIMONIALS, Testimonial } from "@/data/site-data";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 lg:py-24 bg-slate-50 border-t border-slate-200 w-full bg-grid-subtle">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* SECTION HEADER */}
        <div className="w-full mb-12 flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-200">
          <div>
            <div className="inline-block px-3 py-1 rounded-md bg-white text-xs font-bold text-slate-800 uppercase tracking-wider mb-3 border border-slate-200 shadow-sm">
              Verified Feedback
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              What Our Partners Say
            </h2>
          </div>
          <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
            Direct feedback from administrators, proprietors, and quality assurance leads across Ghana who achieved accreditation with our team.
          </p>
        </div>

        {/* TESTIMONIALS GRID (CLEAN NEUTRAL BORDERS, NO COLOR BORDERS) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
          {TESTIMONIALS.map((item: Testimonial) => (
            <div
              key={item.name}
              className="bg-white rounded-xl p-7 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between card-hover"
            >
              <div>
                {/* 5-STAR RATING & VERIFIED BADGE (NO PILL SHAPE) */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1 text-amber-500">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    ))}
                    <span className="text-xs font-bold text-slate-700 ml-1">5.0</span>
                  </div>

                  <span className="text-[11px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                    Verified Partner
                  </span>
                </div>

                {/* QUOTE TEXT */}
                <p className="text-sm text-slate-700 leading-relaxed italic mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* AUTHOR INFO */}
              <div className="pt-4 border-t border-slate-100 flex items-center space-x-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#00509d] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                  {item.initials}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 leading-tight">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
