"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Zap, ArrowUpRight } from "lucide-react";
import SocialLinks from "@/components/SocialIcons";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail("");
    }
  };

  return (
    <div className="w-full">
      {/* ========================================================
          PRE-FOOTER CTA SECTION (COMPACT & PUNCHY)
      ======================================================== */}
      <section className="w-full bg-slate-50/90 py-12 sm:py-16 border-t border-slate-200/80">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.2] max-w-4xl mx-auto">
            Ready to take all the{" "}
            <span className="bg-slate-950 text-white px-3 py-0.5 rounded-lg inline-block shadow-sm align-baseline mx-1 font-semibold text-[0.88em]">
              complexity
            </span>{" "}
            out of accreditation?
          </h2>

          <p className="mt-3.5 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Partner with Ghana&apos;s leading TVET specialists for streamlined CTVET compliance, custom policy drafting, and facilitator coaching. Proven results across 22+ institutions nationwide.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-slate-950 hover:bg-slate-800 shadow-sm transition-colors gap-2"
            >
              <Zap className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>Book Accreditation Consultation</span>
            </a>

            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 shadow-xs transition-colors"
            >
              Explore All TVET Solutions
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================
          ACTUAL FULL-WIDTH FOOTER (EDGE-TO-EDGE, BALANCED HEIGHT)
      ======================================================== */}
      <footer className="w-full bg-white border-t border-slate-200/90 pt-10 sm:pt-12 pb-7 shadow-[0_-4px_20px_-5px_rgba(0,0,0,0.02)]">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
          
          {/* MAIN FOOTER GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-8 border-b border-slate-200/70">
            
            {/* LEFT: BRAND, NEWSLETTER & SOCIAL ICONS */}
            <div className="lg:col-span-4 space-y-3">
              <Link href="#home" className="inline-flex items-center gap-2.5 group">
                <div className="relative w-8 h-8 rounded-lg overflow-hidden bg-white flex-shrink-0 border border-slate-200/90 p-0.5">
                  <Image
                    src="/pics/hi.png"
                    alt="S&D TVET Consult Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-base font-bold tracking-tight text-slate-900 leading-tight">
                    S&amp;D TVET
                  </span>
                  <span className="text-[10px] font-semibold tracking-wider uppercase text-slate-500">
                    Consult Limited
                  </span>
                </div>
              </Link>

              <div className="pt-1">
                <p className="text-xs sm:text-[13px] font-semibold text-slate-900">
                  Sign up to receive CTVET &amp; TVET regulatory updates.
                </p>

                {/* COMPACT PILL INPUT WITH INTEGRATED SUBMIT BUTTON */}
                <form onSubmit={handleSubscribe} className="relative flex items-center max-w-sm mt-2.5">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-4 pr-24 py-2 rounded-full bg-slate-100/90 border border-slate-200/80 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:bg-white transition-all"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 px-4 py-1.5 rounded-full bg-slate-950 hover:bg-slate-800 text-white text-xs font-semibold transition-colors"
                  >
                    {subscribed ? "Subscribed!" : "Submit"}
                  </button>
                </form>

                <p className="text-[11px] text-slate-400 mt-2 max-w-xs leading-normal">
                  By subscribing you agree with our{" "}
                  <a href="#contact" className="underline hover:text-slate-600 transition-colors">
                    Privacy Policy
                  </a>{" "}
                  and provide consent to receive updates from our consultancy team.
                </p>

                {/* SOCIAL MEDIA CHANNELS */}
                <div className="mt-3.5">
                  <SocialLinks />
                </div>
              </div>
            </div>

            {/* RIGHT: 5 CATEGORIZED LINK GROUPS (TITLE CASE & COMPACT) */}
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8">
              
              {/* COL 1: SERVICES */}
              <div className="space-y-2.5">
                <h4 className="text-[13px] font-semibold text-slate-900 tracking-tight">
                  Services
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-500 font-medium">
                  <li><a href="#services" className="hover:text-slate-900 transition-colors">CTVET Accreditation</a></li>
                  <li><a href="#services" className="hover:text-slate-900 transition-colors">Policy Formulation</a></li>
                  <li><a href="#services" className="hover:text-slate-900 transition-colors">CBT Training</a></li>
                  <li><a href="#services" className="hover:text-slate-900 transition-colors">Facility Audits</a></li>
                  <li><a href="#services" className="hover:text-slate-900 transition-colors">Facilitator Sourcing</a></li>
                  <li><a href="#services" className="hover:text-slate-900 transition-colors">TVET Research</a></li>
                </ul>
              </div>

              {/* COL 2: PROCESS */}
              <div className="space-y-2.5">
                <h4 className="text-[13px] font-semibold text-slate-900 tracking-tight">
                  Process
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-500 font-medium">
                  <li><a href="#accreditation" className="hover:text-slate-900 transition-colors">Diagnostic Audit</a></li>
                  <li><a href="#accreditation" className="hover:text-slate-900 transition-colors">Policy Alignment</a></li>
                  <li><a href="#accreditation" className="hover:text-slate-900 transition-colors">Facility Inspection</a></li>
                  <li><a href="#accreditation" className="hover:text-slate-900 transition-colors">Panel Simulations</a></li>
                  <li><a href="#accreditation" className="hover:text-slate-900 transition-colors">Panel Escort</a></li>
                  <li><a href="#accreditation" className="hover:text-slate-900 transition-colors">Certification</a></li>
                </ul>
              </div>

              {/* COL 3: COMPANY */}
              <div className="space-y-2.5">
                <h4 className="text-[13px] font-semibold text-slate-900 tracking-tight">
                  Company
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-500 font-medium">
                  <li><a href="#about" className="hover:text-slate-900 transition-colors">About Our Firm</a></li>
                  <li><a href="#about" className="hover:text-slate-900 transition-colors">Leadership Directors</a></li>
                  <li><a href="#portfolio" className="hover:text-slate-900 transition-colors">Accredited Schools</a></li>
                  <li><a href="#portfolio" className="hover:text-slate-900 transition-colors">GTVP Projects</a></li>
                  <li><a href="#gallery" className="hover:text-slate-900 transition-colors">Field Work Gallery</a></li>
                  <li><a href="#testimonials" className="hover:text-slate-900 transition-colors">Client Testimonials</a></li>
                </ul>
              </div>

              {/* COL 4: SUPPORT / DIRECT CONTACT */}
              <div className="space-y-2.5">
                <h4 className="text-[13px] font-semibold text-slate-900 tracking-tight">
                  Support
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-500 font-medium">
                  <li><a href="#contact" className="hover:text-slate-900 transition-colors">Lapaz Corporate Office</a></li>
                  <li><a href="tel:0503347934" className="hover:text-slate-900 transition-colors">050 334 7934</a></li>
                  <li><a href="tel:0549647768" className="hover:text-slate-900 transition-colors">054 964 7768</a></li>
                  <li><a href="mailto:info@sdtvetconsult.com" className="hover:text-slate-900 transition-colors">Email Desk</a></li>
                  <li><a href="#contact" className="hover:text-slate-900 transition-colors">Consultation Desk</a></li>
                </ul>
              </div>

              {/* COL 5: LEGAL */}
              <div className="space-y-2.5">
                <h4 className="text-[13px] font-semibold text-slate-900 tracking-tight">
                  Legal
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-500 font-medium">
                  <li><span className="text-slate-500">Terms of Engagement</span></li>
                  <li><span className="text-slate-500">Privacy Policy</span></li>
                  <li><span className="text-slate-500">Act 992 Compliance</span></li>
                  <li><span className="text-slate-500">CTVET Guidelines</span></li>
                  <li><span className="text-slate-500">Ghana TVET Voucher</span></li>
                </ul>
              </div>

            </div>

          </div>

          {/* BOTTOM ROW (COPYRIGHT & ATTRIBUTION) */}
          <div className="pt-5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
            <p>
              &copy; 2026 S&amp;D TVET Consult Limited. All rights reserved. &bull; Officially registered under Ghana Companies Act.
            </p>
            <a
              href="#home"
              className="inline-flex items-center space-x-1 text-slate-600 hover:text-slate-900 font-semibold transition-colors"
            >
              <span>Advancing Ghana TVET Excellence</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </footer>
    </div>
  );
}
