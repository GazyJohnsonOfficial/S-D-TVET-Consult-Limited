"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Zap, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "@/data/site-data";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setEmail("");
    }
  };

  return (
    <footer className="w-full bg-slate-50 pt-20 sm:pt-28 pb-12 border-t border-slate-200/80">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* TOP PRE-FOOTER CTA SECTION (STYLE FROM IMAGE 1) */}
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.18]">
            Ready to take all the{" "}
            <span className="bg-slate-950 text-white px-3.5 py-1 rounded-xl inline-block shadow-sm align-middle mx-1 font-semibold text-[0.88em]">
              complexity
            </span>{" "}
            out of accreditation?
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Partner with Ghana&apos;s leading TVET specialists for streamlined CTVET compliance, custom policy drafting, and facilitator coaching. Proven results across 22+ institutions nationwide.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-bold text-white bg-slate-950 hover:bg-slate-800 shadow-sm transition-colors space-x-2"
            >
              <Zap className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>Book Accreditation Consultation</span>
            </a>

            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-semibold text-slate-800 bg-white hover:bg-slate-100 border border-slate-300/80 shadow-sm transition-colors"
            >
              Explore All TVET Solutions
            </a>
          </div>
        </div>

        {/* CONTAINERIZED CARD FOOTER (STYLE FROM IMAGE 1) */}
        <div className="bg-white rounded-3xl sm:rounded-[2.5rem] border border-slate-200/90 shadow-sm p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-12">
            
            {/* LEFT COLUMN: BRAND & PILL NEWSLETTER */}
            <div className="lg:col-span-4 space-y-4">
              <Link href="#home" className="flex items-center space-x-3 group">
                <div className="relative w-9 h-9 rounded-xl overflow-hidden bg-white flex-shrink-0 border border-slate-200">
                  <Image
                    src="/pics/hi.png"
                    alt="S&D TVET Consult Logo"
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold tracking-tight text-slate-900 leading-tight">
                    S&amp;D TVET
                  </span>
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-slate-500">
                    Consult Limited
                  </span>
                </div>
              </Link>

              <div className="pt-2">
                <p className="text-sm font-bold text-slate-900">
                  Sign up to receive CTVET &amp; TVET regulatory updates.
                </p>

                {/* PILL INPUT WITH INTEGRATED SUBMIT BUTTON */}
                <form onSubmit={handleSubscribe} className="relative flex items-center max-w-sm mt-3.5">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-5 pr-28 py-3.5 rounded-full bg-slate-100/90 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:bg-white transition-all"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 px-5 py-2.5 rounded-full bg-slate-950 hover:bg-slate-800 text-white text-xs font-bold transition-colors"
                  >
                    {subscribed ? "Submitted!" : "Submit"}
                  </button>
                </form>

                <p className="text-[11px] text-slate-400 mt-2.5 max-w-xs leading-relaxed">
                  By subscribing you agree with our <a href="#privacy" className="underline hover:text-slate-600">Privacy Policy</a> and provide consent to receive updates from our consultancy team.
                </p>
              </div>
            </div>

            {/* RIGHT COLUMNS: 5 CATEGORIZED LINK GROUPS */}
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
              
              {/* COL 1: FEATURES / SERVICES */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Services
                </h4>
                <ul className="space-y-2 text-xs text-slate-500 font-medium">
                  <li><a href="#services" className="hover:text-slate-900 transition-colors">CTVET Accreditation</a></li>
                  <li><a href="#services" className="hover:text-slate-900 transition-colors">Policy Formulation</a></li>
                  <li><a href="#services" className="hover:text-slate-900 transition-colors">CBT Training</a></li>
                  <li><a href="#services" className="hover:text-slate-900 transition-colors">Facility Audits</a></li>
                  <li><a href="#services" className="hover:text-slate-900 transition-colors">Facilitator Sourcing</a></li>
                  <li><a href="#services" className="hover:text-slate-900 transition-colors">TVET Research</a></li>
                </ul>
              </div>

              {/* COL 2: PROCESS */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Process
                </h4>
                <ul className="space-y-2 text-xs text-slate-500 font-medium">
                  <li><a href="#accreditation" className="hover:text-slate-900 transition-colors">Diagnostic Audit</a></li>
                  <li><a href="#accreditation" className="hover:text-slate-900 transition-colors">Policy Alignment</a></li>
                  <li><a href="#accreditation" className="hover:text-slate-900 transition-colors">Facility Inspection</a></li>
                  <li><a href="#accreditation" className="hover:text-slate-900 transition-colors">Panel Simulations</a></li>
                  <li><a href="#accreditation" className="hover:text-slate-900 transition-colors">Panel Escort</a></li>
                  <li><a href="#accreditation" className="hover:text-slate-900 transition-colors">Certification</a></li>
                </ul>
              </div>

              {/* COL 3: COMPANY */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Company
                </h4>
                <ul className="space-y-2 text-xs text-slate-500 font-medium">
                  <li><a href="#about" className="hover:text-slate-900 transition-colors">About Our Firm</a></li>
                  <li><a href="#about" className="hover:text-slate-900 transition-colors">Leadership Directors</a></li>
                  <li><a href="#portfolio" className="hover:text-slate-900 transition-colors">Accredited Schools</a></li>
                  <li><a href="#portfolio" className="hover:text-slate-900 transition-colors">GTVP Projects</a></li>
                  <li><a href="#gallery" className="hover:text-slate-900 transition-colors">Field Work Gallery</a></li>
                  <li><a href="#testimonials" className="hover:text-slate-900 transition-colors">Client Testimonials</a></li>
                </ul>
              </div>

              {/* COL 4: SUPPORT / CONTACT */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Support
                </h4>
                <ul className="space-y-2 text-xs text-slate-500 font-medium">
                  <li><a href="#contact" className="hover:text-slate-900 transition-colors">Lapaz Corporate Office</a></li>
                  <li><a href="tel:0503347934" className="hover:text-slate-900 transition-colors">050 334 7934</a></li>
                  <li><a href="tel:0549647768" className="hover:text-slate-900 transition-colors">054 964 7768</a></li>
                  <li><a href="mailto:info@sdtvetconsult.com" className="hover:text-slate-900 transition-colors">Email Desk</a></li>
                  <li><a href={`https://wa.me/${SITE_CONFIG.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors">WhatsApp Live</a></li>
                </ul>
              </div>

              {/* COL 5: LEGAL */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Legal
                </h4>
                <ul className="space-y-2 text-xs text-slate-500 font-medium">
                  <li><span className="text-slate-500">Terms of Engagement</span></li>
                  <li><span className="text-slate-500">Privacy Policy</span></li>
                  <li><span className="text-slate-500">Act 992 Compliance</span></li>
                  <li><span className="text-slate-500">CTVET Guidelines</span></li>
                  <li><span className="text-slate-500">Ghana TVET Voucher</span></li>
                </ul>
              </div>

            </div>

          </div>

          {/* BOTTOM ROW (DIVIDER AND CREDITS) */}
          <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
            <p>
              &copy; 2026 S&amp;D TVET Consult Limited. All rights reserved. &bull; Officially registered in Ghana.
            </p>
            <a
              href="#home"
              className="inline-flex items-center space-x-1 text-slate-600 hover:text-slate-900 font-medium transition-colors"
            >
              <span>Advancing Ghana TVET Excellence</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
