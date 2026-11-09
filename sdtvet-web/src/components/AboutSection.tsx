"use client";

import React from "react";
import Image from "next/image";
import { Check, Target, Compass, Sparkles, Shield, Award, Users2, Building } from "lucide-react";
import { LEADERSHIP } from "@/data/site-data";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white border-t border-slate-100 w-full relative">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* SECTION HEADER */}
        <div className="w-full mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-slate-100">
          <div>
            <span className="text-xs font-bold text-[#00509d] uppercase tracking-wider block mb-2">
              Built on 8+ Years of Hands-on Authority
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              About S&amp;D TVET Consult Limited
            </h2>
          </div>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
            Officially established on March 21, 2024, S&amp;D TVET Consult Limited unites Ghana&apos;s leading practitioners in TVET policy, institutional accreditation, and national voucher initiatives.
          </p>
        </div>

        {/* 2-COLUMN STORY & CREDENTIALS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          
          {/* LEFT: STORY & PILLARS */}
          <div className="lg:col-span-7 space-y-7">
            <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              <p>
                Our founders and consultant network bring over <strong>8 years of frontline TVET leadership</strong>. Having successfully guided <strong>22+ institutions</strong> across Greater Accra, Ashanti, Bono East, Central, Savannah, and Western regions to full accreditation, our track record is unmatched.
              </p>
              <p>
                We do not deliver theoretical slide decks. Our team physically visits your premises, audits your workshop machinery and safety features against CTVET guidelines, standardizes your governance documents, and conducts simulated panel interviews so your facilitators face the Commission with 100% confidence.
              </p>
            </div>

            {/* MISSION & VISION CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-[#00509d] text-white flex items-center justify-center mb-4 shadow-md">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Our Mission</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  To serve as Ghana&apos;s premier authority for CTVET accreditation, competency-based curricula alignment, and TVET school operational excellence.
                </p>
              </div>

              <div className="p-7 rounded-3xl bg-amber-50/50 border border-amber-200/70 shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center mb-4 shadow-md">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Our Method</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Practical, transparent, and results-guaranteed. We work directly alongside proprietors, principals, and teachers until formal certification is granted.
                </p>
              </div>
            </div>

            {/* WHY INSTITUTIONS CHOOSE S&D */}
            <div className="pt-2">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4">
                Core Advantages of S&amp;D TVET Consult:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  "100% CTVET checklist and audit compliance",
                  "Turnkey governance, safety, & academic policies",
                  "Facilitator interview coaching & mock drills",
                  "Curriculum alignment with National CBT unit standards",
                  "GTVP & GJS-P voucher management expertise",
                  "Continuous post-accreditation support & renewals"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3 p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                    <Check className="w-4 h-4 text-[#00509d] flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: PHOTO SPOTLIGHT & REGULATORY SEAL */}
          <div className="lg:col-span-5 w-full space-y-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
              <div className="relative aspect-[4/3] bg-slate-100">
                <Image
                  src="/pics/4.jpeg"
                  alt="S&D TVET Consult Directors in strategic planning"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 700px"
                />
              </div>
              <div className="p-8 bg-slate-900 text-white">
                <div className="flex items-center space-x-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                  <Shield className="w-4 h-4" />
                  <span>Accreditation Guarantee</span>
                </div>
                <h3 className="text-xl font-bold mt-2 text-white">
                  Bridging Regulatory Mandates &amp; Practical Execution
                </h3>
                <p className="text-sm text-slate-300 mt-2.5 leading-relaxed">
                  Our directors maintain close professional dialogue with Ghana&apos;s educational authorities, ensuring your TVET establishment receives clear, up-to-date guidance without costly false starts.
                </p>
              </div>
            </div>

            {/* CORPORATE REGISTRATION SEAL CARD */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-900 to-[#00509d] text-white flex items-center space-x-4 shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center flex-shrink-0 border border-white/20">
                <Building className="w-6 h-6 text-amber-300" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-amber-300">
                  Officially Registered Enterprise
                </div>
                <div className="text-sm font-semibold text-white mt-0.5">
                  Incorporated March 21, 2024 • Regulated under Act 992
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* LEADERSHIP SECTION */}
        <div className="border-t border-slate-200/80 pt-16 w-full">
          <div className="w-full mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#00509d] mb-2">
                <Users2 className="w-4 h-4" />
                <span>Executive Leadership</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900">
                Meet the Directors
              </h3>
            </div>
            <p className="text-sm text-slate-500 max-w-md">
              Experienced TVET leaders actively guiding institutions, mentoring facilitators, and driving national educational excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {LEADERSHIP.map((leader) => (
              <div
                key={leader.name}
                className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row items-center sm:items-start space-y-5 sm:space-y-0 sm:space-x-7 card-hover-pro"
              >
                <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-2xl overflow-hidden shadow-lg border-4 border-slate-100 flex-shrink-0 bg-slate-200 ring-1 ring-slate-200">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover object-top"
                    sizes="160px"
                  />
                </div>
                <div className="text-center sm:text-left flex-grow">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#00509d] block mb-1">
                    {leader.role}
                  </span>
                  <h4 className="text-2xl font-bold text-slate-900">{leader.name}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed mt-2.5">
                    {leader.bio}
                  </p>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-center sm:justify-start space-x-2 text-xs font-semibold text-emerald-700">
                    <Check className="w-4 h-4" />
                    <span>Direct Senior Consultation Available</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
