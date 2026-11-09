"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { SITE_CONFIG } from "@/data/site-data";

export default function Hero() {
  return (
    <section id="home" className="relative w-full overflow-hidden bg-gradient-to-b from-slate-50 to-white py-16 lg:py-24 border-b border-slate-200/60 bg-grid-subtle">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: STRATEGIC HEADLINE & VALUE PROPOSITION */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* ANNOUNCEMENT CHIP (RECTANGULAR, NO PILL SHAPE, NEUTRAL BORDER) */}
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 shadow-sm text-xs sm:text-sm font-semibold text-slate-800">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
              <span>Official Ghana TVET &amp; CTVET Accreditation Specialists</span>
              <span className="text-slate-300">|</span>
              <span className="text-[#00509d] font-bold">2026/2027 Cycle</span>
            </div>

            {/* COMMANDING MAIN HEADLINE (NO PURPLE, CLEAN CORPORATE CONTRAST) */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.12]">
              Elevating TVET Standards with{" "}
              <span className="text-[#00509d]">
                Accreditation Excellence
              </span>
            </h1>

            {/* SUBTITLE */}
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl leading-relaxed">
              Backed by over 8 years of sector mastery, we partner with private TVET schools, proprietors, and facilitators to secure full <strong>CTVET accreditation</strong>, formulate compliant institutional policies, and deliver gold-standard <strong>Competency-Based Training (CBT)</strong>.
            </p>

            {/* TRUST HIGHLIGHTS (CLEAN NEUTRAL BORDERS, NO EXCESSIVE ICONS) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-lg bg-white border border-slate-200 shadow-sm">
                <div className="text-xl font-bold text-slate-900">22+</div>
                <div className="text-xs font-semibold text-slate-600 mt-0.5">Institutions Accredited</div>
              </div>

              <div className="p-3.5 rounded-lg bg-white border border-slate-200 shadow-sm">
                <div className="text-xl font-bold text-slate-900">500+</div>
                <div className="text-xs font-semibold text-slate-600 mt-0.5">Facilitators Coached</div>
              </div>

              <div className="p-3.5 rounded-lg bg-white border border-slate-200 shadow-sm">
                <div className="text-xl font-bold text-slate-900">6 Projects</div>
                <div className="text-xs font-semibold text-slate-600 mt-0.5">National GTVP Grants</div>
              </div>
            </div>

            {/* CTA ACTIONS (ROUNDED-LG RECTANGULAR, NO PILL SHAPE) */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-start gap-4">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-lg text-sm sm:text-base font-bold text-white bg-[#00509d] hover:bg-[#003875] shadow-md transition-all group"
              >
                <span>Book Free Accreditation Audit</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm sm:text-base font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 shadow-sm transition-all"
              >
                Explore TVET Solutions
              </a>
            </div>

            {/* DIRECT HOTLINE */}
            <div className="pt-1 flex items-center space-x-2 text-xs sm:text-sm text-slate-500">
              <span>Direct Inquiries:</span>
              <a href="tel:0503347934" className="font-bold text-slate-800 hover:text-[#00509d]">
                050 334 7934
              </a>
              <span className="text-slate-300">/</span>
              <a href="tel:0549647768" className="font-bold text-slate-800 hover:text-[#00509d]">
                054 964 7768
              </a>
            </div>
          </div>

          {/* RIGHT: HERO MEDIA WITH RECTANGULAR OVERLAY (CLEAN NEUTRAL BORDERS) */}
          <div className="lg:col-span-5 relative w-full">
            <div className="relative mx-auto w-full">
              
              {/* MAIN HERO IMAGE CONTAINER */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900">
                <Image
                  src="/pics/44.jpeg"
                  alt="S&D TVET Consult Technical Training in Action"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 700px"
                />
                
                {/* DARK OVERLAY WITH EDITORIAL CAPTION */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="inline-block px-2.5 py-1 rounded bg-[#00509d] text-white text-[11px] font-bold uppercase tracking-wider mb-2">
                    Field Impact
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    CTVET Facilitator Workshop &amp; Standards Alignment
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Hands-on training, documentation reviews, and verification in Ghana.
                  </p>
                </div>
              </div>

              {/* RECTANGULAR STAT BADGE 1 (TOP LEFT) */}
              <div className="absolute -top-5 -left-4 sm:-left-6 bg-white rounded-xl p-3.5 shadow-md border border-slate-200 flex items-center space-x-3">
                <div className="text-2xl font-black text-[#00509d] leading-none">22+</div>
                <div className="text-xs text-slate-600 font-semibold leading-tight">
                  Accredited<br />Schools
                </div>
              </div>

              {/* RECTANGULAR STAT BADGE 2 (BOTTOM RIGHT) */}
              <div className="absolute -bottom-5 -right-4 sm:-right-6 bg-white rounded-xl p-3.5 shadow-md border border-slate-200 flex items-center space-x-3">
                <div className="text-2xl font-black text-slate-900 leading-none">8+</div>
                <div className="text-xs text-slate-600 font-semibold leading-tight">
                  Years Sector<br />Experience
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
