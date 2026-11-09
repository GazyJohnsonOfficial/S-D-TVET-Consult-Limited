"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Award,
  Users,
  ChevronRight,
  Building2,
  CalendarCheck,
  Star,
} from "lucide-react";
import { SITE_CONFIG } from "@/data/site-data";

export default function Hero() {
  return (
    <section id="home" className="relative w-full overflow-hidden bg-gradient-to-b from-slate-50 via-blue-50/40 to-white pt-12 pb-24 lg:pt-20 lg:pb-32 bg-grid-pattern border-b border-slate-200/60">
      
      {/* RADIANT AMBIENT GLOWS */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1800px] h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-32 right-12 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute top-48 -left-24 w-[500px] h-[500px] bg-amber-400/10 rounded-full blur-[100px]" />
      </div>

      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: STRATEGIC HEADLINE & PROPOSITION */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* ANNOUNCEMENT PILL */}
            <div className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-blue-200/80 shadow-sm text-xs sm:text-sm font-semibold text-[#003f88]">
              <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Official Ghana TVET &amp; CTVET Accreditation Specialists</span>
              <span className="hidden sm:inline text-slate-300">|</span>
              <span className="hidden sm:inline text-amber-600 font-bold">2026/2027 Cycle</span>
            </div>

            {/* COMMANDING MAIN HEADLINE */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4rem] font-black tracking-tight text-slate-900 leading-[1.1]">
              Elevating TVET Standards with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00509d] via-[#003875] to-[#00296b]">
                Accreditation Excellence
              </span>
            </h1>

            {/* SUBTITLE */}
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl leading-relaxed">
              Backed by over 8 years of sector mastery, we partner with private TVET schools, proprietors, and facilitators to secure full <strong>CTVET accreditation</strong>, formulate compliant institutional policies, and deliver gold-standard <strong>Competency-Based Training (CBT)</strong>.
            </p>

            {/* TRUST BULLETS IN COMPACT BADGE CHIPS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center space-x-2.5 p-3 rounded-xl bg-white/80 border border-slate-200/90 shadow-sm">
                <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-800">
                  22+ Schools Accredited
                </div>
              </div>

              <div className="flex items-center space-x-2.5 p-3 rounded-xl bg-white/80 border border-slate-200/90 shadow-sm">
                <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#00509d] flex items-center justify-center flex-shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-800">
                  500+ Instructors Trained
                </div>
              </div>

              <div className="flex items-center space-x-2.5 p-3 rounded-xl bg-white/80 border border-slate-200/90 shadow-sm">
                <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-800">
                  GTVP &amp; GJS-P Verified
                </div>
              </div>
            </div>

            {/* CTA ACTIONS */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-start gap-4">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-[#00509d] to-[#003875] hover:from-[#003875] hover:to-[#00296b] shadow-xl shadow-blue-900/20 hover:shadow-2xl transition-all duration-300 group"
              >
                <span>Book Free Accreditation Audit</span>
                <ArrowRight className="w-4 h-4 ml-2.5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-4 rounded-xl text-base font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300/90 shadow-sm hover:border-slate-400 transition-all"
              >
                Explore TVET Solutions
              </a>
            </div>

            {/* DIRECT HOTLINE BADGE */}
            <div className="pt-2 flex items-center space-x-3 text-xs sm:text-sm text-slate-500">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
              <span>Direct Consultation Hotlines:</span>
              <a href="tel:0503347934" className="font-bold text-[#00509d] hover:underline">
                050 334 7934
              </a>
              <span className="text-slate-300">/</span>
              <a href="tel:0549647768" className="font-bold text-[#00509d] hover:underline">
                054 964 7768
              </a>
            </div>
          </div>

          {/* RIGHT: DYNAMIC HERO MEDIA WITH LAYERED CREDENTIALS */}
          <div className="lg:col-span-5 relative w-full">
            <div className="relative mx-auto w-full">
              
              {/* MAIN HERO IMAGE CONTAINER */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 ring-1 ring-slate-200">
                <Image
                  src="/pics/44.jpeg"
                  alt="S&D TVET Consult Technical Training in Action"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 700px"
                />
                
                {/* DARK GRADIENT OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                
                {/* BOTTOM CAPTION */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-amber-500 text-slate-950 text-xs font-bold uppercase tracking-wider mb-2">
                    <Star className="w-3.5 h-3.5 fill-slate-950" />
                    <span>Real Field Impact</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white drop-shadow">
                    CTVET Facilitator Workshop &amp; Standards Alignment
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 line-clamp-1">
                    Hands-on training, documentation reviews, and verification in Ghana.
                  </p>
                </div>
              </div>

              {/* FLOATING BADGE 1: ACCREDITED SCHOOLS (TOP LEFT) */}
              <div className="absolute -top-6 -left-4 sm:-left-8 glass-card rounded-2xl p-4 shadow-xl border border-slate-200/90 flex items-center space-x-3.5">
                <div className="w-12 h-12 rounded-xl bg-[#00509d] text-white flex items-center justify-center shadow-md">
                  <Award className="w-6 h-6 text-amber-300" />
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-900 leading-none">22+</div>
                  <div className="text-xs text-slate-500 font-bold mt-1">Accredited Schools</div>
                </div>
              </div>

              {/* FLOATING BADGE 2: PROVEN YEARS (BOTTOM RIGHT) */}
              <div className="absolute -bottom-7 -right-4 sm:-right-8 glass-card rounded-2xl p-4 shadow-xl border border-slate-200/90 flex items-center space-x-3.5">
                <div className="w-12 h-12 rounded-xl bg-amber-500 text-white flex items-center justify-center shadow-md">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-900 leading-none">8+ Years</div>
                  <div className="text-xs text-slate-500 font-bold mt-1">Sector Authority</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
