"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Star,
} from "lucide-react";
import { SITE_CONFIG } from "@/data/site-data";

const heroSlides = [
  {
    src: "/pics/44.jpeg",
    title: "CTVET Facilitator Workshop & Standards Alignment",
    caption: "Hands-on training, documentation reviews, and verification in Ghana.",
  },
  {
    src: "/pics/7.jpeg",
    title: "Institutional Accreditation Visit",
    caption: "Onsite verification of facilities, safety systems, and governance records.",
  },
  {
    src: "/pics/WhatsApp Image 2026-04-29 at 10.46.41 PM.jpeg",
    title: "Facilitator CBT Refresher Course",
    caption: "Competency-based training aligned to national unit standards.",
  },
  {
    src: "/pics/WhatsApp Image 2026-04-29 at 10.46.44 PM (1).jpeg",
    title: "Standards Compliance Verification",
    caption: "Quality assurance reviews for TVET institutes nationwide.",
  },
];

const SLIDE_INTERVAL = 6000;

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, SLIDE_INTERVAL);

    return () => clearInterval(timer);
  }, [paused]);

  const slide = heroSlides[activeSlide];

  return (
    <section id="home" className="relative w-full overflow-hidden bg-slate-50 pt-8 pb-16 lg:pt-12 lg:pb-20 border-b border-slate-200/60">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* LEFT: STRATEGIC HEADLINE & PROPOSITION */}
          <div className="lg:col-span-7 space-y-6 text-left">

            {/* CLEAN CORPORATE EYEBROW */}
            <div className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#00509d]">
              Commission for TVET (CTVET) Accreditation Guidance &bull; Ghana
            </div>

            {/* COMMANDING MAIN HEADLINE */}
            <h1 className="text-4xl lg:text-[3.5rem] 2xl:text-6xl font-black tracking-tight text-slate-900 leading-[1.08]">
              Elevating TVET Standards with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00509d] via-[#003875] to-[#00296b]">
                Accreditation Excellence
              </span>
            </h1>

            {/* SUBTITLE */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              Backed by over {SITE_CONFIG.metrics[2].value} years of sector experience, we help private TVET schools, proprietors, and facilitators prepare for <strong>CTVET accreditation</strong>, develop compliant institutional policies, and deliver <strong>Competency-Based Training (CBT)</strong>.
            </p>

            {/* PRIMARY ACTIONS */}
            <div className="pt-1 flex flex-col sm:flex-row items-center justify-start gap-3">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm sm:text-base font-bold text-white bg-[#00509d] hover:bg-[#003875] shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <span>Request an Accreditation Audit</span>
                <ArrowRight className="w-4 h-4 ml-2.5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm sm:text-base font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 shadow-sm transition-all"
              >
                Explore TVET Solutions
              </a>
            </div>
          </div>

          {/* RIGHT: AUTO-ROTATING FIELD SHOWCASE */}
          <div className="lg:col-span-5 relative w-full">
            <div className="relative mx-auto w-full">

              {/* MAIN MEDIA CONTAINER */}
              <div
                className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-slate-900"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
              >
                {/* SLIDES — crossfade stack */}
                {heroSlides.map((item, idx) => (
                  <div
                    key={item.src}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      idx === activeSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                    }`}
                  >
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className={`object-cover ${idx === activeSlide ? "hero-kenburns" : ""}`}
                      priority={idx === 0}
                      sizes="(max-width: 1024px) 100vw, 700px"
                    />
                  </div>
                ))}

                {/* DARK GRADIENT OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent z-20 pointer-events-none" />

                {/* CAPTION */}
                <div className="absolute bottom-6 left-6 right-6 text-white z-30">
                  <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-amber-500 text-slate-950 text-xs font-bold uppercase tracking-wider mb-2">
                    <Star className="w-3.5 h-3.5 fill-slate-950" />
                    <span>Real Field Impact</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white drop-shadow">
                    {slide.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 line-clamp-1">
                    {slide.caption}
                  </p>
                </div>
              </div>

              {/* DOT INDICATORS */}
              <div className="mt-4 flex items-center justify-center space-x-2">
                {heroSlides.map((item, idx) => (
                  <button
                    key={item.src}
                    onClick={() => setActiveSlide(idx)}
                    aria-label={`Show slide ${idx + 1}: ${item.title}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === activeSlide
                        ? "w-8 bg-[#00509d]"
                        : "w-2 bg-slate-300 hover:bg-slate-400"
                    }`}
                  />
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
