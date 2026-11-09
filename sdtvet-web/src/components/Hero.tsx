"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Award, Users, ChevronRight, Sparkles, Building2 } from "lucide-react";
import { SITE_CONFIG } from "@/data/site-data";

export default function Hero() {
  return (
    <section id="home" className="relative w-full overflow-hidden bg-gradient-to-b from-blue-50/60 via-white to-slate-50/80 pt-14 pb-24 lg:pt-20 lg:pb-36 bg-dot-pattern">
      {/* AMBIENT GLOW BACKDROPS */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1700px] h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-32 right-12 w-[600px] h-[600px] bg-gradient-to-br from-blue-400/15 to-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute top-72 -left-20 w-[550px] h-[550px] bg-gradient-to-tr from-amber-400/15 to-orange-400/10 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: HERO CONTENT */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* ACCREDITATION STATUS BADGE */}
            <div className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-full gradient-hero-badge text-xs sm:text-sm font-semibold text-[#003875]">
              <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse ring-4 ring-emerald-100" />
              <span>Ghana TVET &amp; CTVET Accreditation Experts</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            </div>

            {/* MAIN HEADLINE */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4rem] font-extrabold tracking-tight text-slate-900 leading-[1.12] font-heading">
              Empowering Ghana&apos;s TVET Institutions with{" "}
              <span className="gradient-text">
                Accreditation Excellence
              </span>
            </h1>

            {/* VALUE PROPOSITION SUBTITLE */}
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl leading-relaxed font-normal">
              Backed by over 8 years of sector leadership, we guide private TVET schools, proprietors, and facilitators through every milestone of CTVET accreditation, policy governance, and competency-based training (CBT).
            </p>

            {/* TRUST BULLETS */}
            <div className="flex flex-wrap items-center justify-start gap-y-3 gap-x-8 text-sm sm:text-base font-semibold text-slate-700 pt-1">
              <div className="flex items-center space-x-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span>22+ Institutions Fully Accredited</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span>500+ Facilitators Trained</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span>Official GTVP &amp; GJS-P Expertise</span>
              </div>
            </div>

            {/* CTA BUTTON GROUP */}
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-start gap-4">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-[#00509d] via-[#003875] to-[#00296b] hover:from-[#003f88] hover:to-[#001d4a] shadow-xl shadow-blue-900/20 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200 group card-shine"
              >
                <span>Start Your Accreditation</span>
                <ArrowRight className="w-4 h-4 ml-2.5 group-hover:translate-x-1.5 transition-transform" />
              </a>

              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 shadow-sm hover:border-slate-400 hover:shadow transition-all"
              >
                Explore TVET Solutions
              </a>
            </div>

            {/* SOCIAL PROOF MICRO-FOOTNOTE */}
            <div className="pt-2 flex items-center space-x-3 text-xs sm:text-sm text-slate-500">
              <div className="flex -space-x-2 overflow-hidden">
                <span className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-[#00509d] text-white text-[10px] font-bold flex items-center justify-center">MA</span>
                <span className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-amber-500 text-white text-[10px] font-bold flex items-center justify-center">KO</span>
                <span className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-emerald-600 text-white text-[10px] font-bold flex items-center justify-center">EN</span>
              </div>
              <p>
                Trusted by school directors &amp; administrators across Greater Accra, Ashanti, Central &amp; Bono regions.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: HERO VISUAL WITH FLOATING BADGES */}
          <div className="lg:col-span-5 relative w-full">
            <div className="relative mx-auto w-full">
              
              {/* MAIN HERO IMAGE CONTAINER */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 ring-1 ring-slate-900/10">
                <Image
                  src="/pics/44.jpeg"
                  alt="S&D TVET Consult Technical Training in Action"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 700px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-amber-300 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full border border-amber-400/30">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Live Field Impact</span>
                  </span>
                  <p className="text-base sm:text-lg font-semibold mt-2.5 drop-shadow-md text-white/95">
                    Hands-on CTVET Workshop &amp; Standards Implementation in Ghana
                  </p>
                </div>
              </div>

              {/* FLOATING BADGE 1: ACCREDITED SCHOOLS */}
              <div className="absolute -top-6 -left-4 sm:-left-8 glass-card rounded-2xl p-4 shadow-xl shadow-slate-900/10 border border-white/80 flex items-center space-x-4 card-hover-lift">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-[#00509d] text-white flex items-center justify-center shadow-md shadow-blue-500/20">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-900 leading-none font-heading">22+</div>
                  <div className="text-xs text-slate-600 font-semibold mt-1">Accredited Schools</div>
                </div>
              </div>

              {/* FLOATING BADGE 2: VERIFIED ADVISORS */}
              <div className="absolute -bottom-7 -right-4 sm:-right-8 glass-card rounded-2xl p-4 shadow-xl shadow-slate-900/10 border border-white/80 flex items-center space-x-4 card-hover-lift">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-white flex items-center justify-center shadow-md shadow-amber-500/20">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-900 leading-none font-heading">8+ Years</div>
                  <div className="text-xs text-slate-600 font-semibold mt-1">Proven TVET Mastery</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
