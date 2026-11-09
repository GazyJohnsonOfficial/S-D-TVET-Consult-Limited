"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Award, Users, ChevronRight } from "lucide-react";
import { SITE_CONFIG } from "@/data/site-data";

export default function Hero() {
  return (
    <section id="home" className="relative w-full overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-slate-50/60 pt-12 pb-24 lg:pt-20 lg:pb-32">
      {/* BACKGROUND DECORATIVE ELEMENTS */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1800px] h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-40 right-10 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute top-60 -left-20 w-[450px] h-[450px] bg-amber-400/10 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: HERO CONTENT */}
          <div className="lg:col-span-7 space-y-7 text-left">
            {/* ACCREDITATION BADGE */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full gradient-hero-badge text-xs sm:text-sm font-semibold text-[#003f88]">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Ghana TVET &amp; CTVET Accreditation Experts</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            </div>

            {/* MAIN HEADLINE */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              Empowering Ghana&apos;s TVET Institutions with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00509d] via-[#003875] to-[#00296b]">
                Accreditation Excellence
              </span>
            </h1>

            {/* VALUE PROPOSITION SUBTITLE */}
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl leading-relaxed">
              Backed by over 8 years of sector leadership, we guide private TVET schools, proprietors, and facilitators through every milestone of CTVET accreditation, policy governance, and competency-based training (CBT).
            </p>

            {/* TRUST BULLETS */}
            <div className="flex flex-wrap items-center justify-start gap-y-3 gap-x-8 text-sm sm:text-base font-medium text-slate-700 pt-2">
              <div className="flex items-center space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span>22+ Institutions Fully Accredited</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span>500+ Facilitators Trained</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span>Official GTVP &amp; GJS-P Expertise</span>
              </div>
            </div>

            {/* CTA BUTTON GROUP */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-start gap-4">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold text-white bg-[#00509d] hover:bg-[#003875] shadow-lg shadow-blue-900/15 hover:shadow-xl transition-all duration-200 group"
              >
                <span>Start Your Accreditation</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-4 rounded-xl text-base font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 shadow-sm transition-colors"
              >
                Explore TVET Solutions
              </a>
            </div>

            {/* CONTACT QUICK CALLOUT */}
            <p className="text-xs sm:text-sm text-slate-500 pt-1">
              Need immediate support? Call our direct lines:{" "}
              <a href="tel:0503347934" className="font-bold text-[#00509d] hover:underline">0503347934</a> /{" "}
              <a href="tel:0549647768" className="font-bold text-[#00509d] hover:underline">0549647768</a>
            </p>
          </div>

          {/* RIGHT COLUMN: HERO VISUAL WITH FLOATING BADGES */}
          <div className="lg:col-span-5 relative w-full">
            <div className="relative mx-auto w-full">
              
              {/* MAIN HERO IMAGE CONTAINER */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                <Image
                  src="/pics/44.jpeg"
                  alt="S&D TVET Consult Technical Training in Action"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 700px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-slate-900/80 px-2.5 py-1 rounded">
                    Field Impact
                  </span>
                  <p className="text-base sm:text-lg font-semibold mt-2 drop-shadow">
                    Hands-on CTVET Workshop &amp; Standards Implementation in Ghana
                  </p>
                </div>
              </div>

              {/* FLOATING BADGE 1: ACCREDITED SCHOOLS */}
              <div className="absolute -top-6 -left-4 sm:-left-8 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-slate-200/80 flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100/80 text-[#00509d] flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-900 leading-none">22+</div>
                  <div className="text-xs text-slate-500 font-semibold mt-1">Accredited Schools</div>
                </div>
              </div>

              {/* FLOATING BADGE 2: VERIFIED ADVISORS */}
              <div className="absolute -bottom-7 -right-4 sm:-right-8 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-slate-200/80 flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-amber-100/80 text-amber-600 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-900 leading-none">8+ Years</div>
                  <div className="text-xs text-slate-500 font-semibold mt-1">Proven Track Record</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

