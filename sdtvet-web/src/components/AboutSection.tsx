"use client";

import React from "react";
import Image from "next/image";
import { LEADERSHIP } from "@/data/site-data";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-24 bg-white border-t border-slate-200 w-full relative">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* SECTION HEADER */}
        <div className="w-full mb-14 flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-200">
          <div>
            <div className="inline-block px-3 py-1 rounded-md bg-slate-100 text-xs font-bold text-slate-800 uppercase tracking-wider mb-3 border border-slate-200">
              Institutional Background
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              About S&amp;D TVET Consult Limited
            </h2>
          </div>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
            Officially established on March 21, 2024, S&amp;D TVET Consult Limited unites Ghana&apos;s leading practitioners in TVET policy, institutional accreditation, and national voucher initiatives.
          </p>
        </div>

        {/* 2-COLUMN STORY & CREDENTIALS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start mb-20">
          
          {/* LEFT: STORY & PILLARS */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              <p>
                Our founders and consultant network bring over <strong>8 years of frontline TVET leadership</strong>. Having successfully guided <strong>22+ institutions</strong> across Greater Accra, Ashanti, Bono East, Central, Savannah, and Western regions to full accreditation, our track record is proven and reliable.
              </p>
              <p>
                We do not deliver theoretical slide decks. Our team physically audits your workshop machinery and safety features against CTVET guidelines, standardizes your governance documents, and conducts simulated panel interviews so your facilitators face the Commission with complete confidence.
              </p>
            </div>

            {/* MISSION & METHOD CARDS (NEUTRAL BORDERS, ROUNDED-XL) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
                <h3 className="text-base font-bold text-slate-900 mb-2">Our Mission</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  To serve as Ghana&apos;s leading authority for CTVET accreditation, competency-based curricula alignment, and TVET school operational excellence.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
                <h3 className="text-base font-bold text-slate-900 mb-2">Our Method</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Practical, transparent, and results-guaranteed. We work directly alongside proprietors, principals, and teachers until formal certification is granted.
                </p>
              </div>
            </div>

            {/* ADVANTAGES LIST (CLEAN TYPOGRAPHY, NO REPETITIVE ICON SPAM) */}
            <div className="pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                Core Advantages of S&amp;D TVET Consult:
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-slate-700">
                <li className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  100% CTVET checklist and audit compliance
                </li>
                <li className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  Turnkey governance, safety, and academic policies
                </li>
                <li className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  Facilitator interview coaching and mock drills
                </li>
                <li className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  Curriculum alignment with CBT unit standards
                </li>
                <li className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  GTVP and GJS-P voucher management expertise
                </li>
                <li className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  Continuous post-accreditation support and renewals
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT: PHOTO SPOTLIGHT & REGULATORY NOTE (NO COLORED BORDERS) */}
          <div className="lg:col-span-5 w-full space-y-5">
            <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-slate-900">
              <div className="relative aspect-[4/3] bg-slate-100">
                <Image
                  src="/pics/4.jpeg"
                  alt="S&D TVET Consult Directors in strategic planning"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 700px"
                />
              </div>
              <div className="p-6 bg-slate-900 text-white">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Accreditation Assurance
                </span>
                <h3 className="text-lg font-bold mt-1 text-white">
                  Bridging Regulatory Mandates &amp; Practical Execution
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                  Our directors maintain close professional dialogue with educational authorities, ensuring your TVET establishment receives clear, up-to-date guidance without costly delays.
                </p>
              </div>
            </div>

            {/* REGISTRATION NOTE */}
            <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-slate-800">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Officially Registered Enterprise
              </div>
              <div className="text-sm font-semibold text-slate-900 mt-0.5">
                Incorporated March 21, 2024 | Regulated under Companies Act, 2019 (Act 992)
              </div>
            </div>
          </div>

        </div>

        {/* LEADERSHIP SECTION */}
        <div className="border-t border-slate-200 pt-16 w-full">
          <div className="w-full mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                Executive Leadership
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
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
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 card-hover"
              >
                <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-xl overflow-hidden border border-slate-200 flex-shrink-0 bg-slate-100">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover object-top"
                    sizes="144px"
                  />
                </div>
                <div className="text-center sm:text-left flex-grow">
                  <span className="inline-block px-2.5 py-1 rounded bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-1.5 border border-slate-200">
                    {leader.role}
                  </span>
                  <h4 className="text-xl font-bold text-slate-900">{leader.name}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed mt-2">
                    {leader.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
