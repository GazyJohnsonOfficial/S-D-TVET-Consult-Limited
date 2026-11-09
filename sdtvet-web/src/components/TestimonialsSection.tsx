"use client";

import React, { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS, Testimonial } from "@/data/site-data";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-slate-50/70 border-t border-slate-200/80 w-full">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* SECTION HEADER */}
        <div className="w-full mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-200/60">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-100/70 text-xs font-bold text-[#00509d] uppercase tracking-wider mb-4">
              <span>Client Testimonials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              What Our Partners Say
            </h2>
          </div>
          <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
            Trusted by proprietors, administrators, and quality assurance leads across Ghana for practical TVET results.
          </p>
        </div>

        {/* TESTIMONIALS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {TESTIMONIALS.map((item: Testimonial, idx: number) => (
            <div
              key={item.name}
              className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm flex flex-col justify-between card-hover-lift relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 text-slate-100 -z-0">
                <Quote className="w-16 h-16" />
              </div>

              <div className="relative z-10">
                {/* 5-STAR RATING */}
                <div className="flex items-center space-x-1 mb-4 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* QUOTE TEXT */}
                <p className="text-sm text-slate-600 leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* AUTHOR INFO */}
              <div className="relative z-10 pt-6 mt-6 border-t border-slate-100 flex items-center space-x-3.5">
                <div className="w-10 h-10 rounded-full bg-[#00509d] text-white flex items-center justify-center font-bold text-xs flex-shrink-0 shadow-sm">
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

