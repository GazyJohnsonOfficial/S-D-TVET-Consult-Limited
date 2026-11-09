"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Zap, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "@/data/site-data";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="w-full bg-[#f8f9fb] border-t border-slate-200/70 pt-20 sm:pt-28 pb-12 overflow-hidden">
      
      {/* 1. PRE-FOOTER CTA BANNER (MATCHING REFERENCE IMAGE) */}
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 mb-20 sm:mb-28 text-center">
        
        {/* HEADLINE WITH DISTINCTIVE BLACK PILL HIGHLIGHT */}
        <h2 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-bold text-slate-900 tracking-tight leading-[1.18] max-w-4xl mx-auto">
          Ready to take all the{" "}
          <span className="inline-block bg-slate-950 text-white px-3.5 sm:px-4 py-0.5 sm:py-1 rounded-xl sm:rounded-2xl mx-1 shadow-sm font-semibold">
            stress
          </span>{" "}
          out of TVET accreditation?
        </h2>

        {/* SUBTITLE */}
        <p className="mt-5 text-sm sm:text-base lg:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
          Complete documentation review, facility inspection prep, and mock panel drills.
          100% compliance alignment with Ghana&apos;s CTVET guidelines and zero guesswork.
        </p>

        {/* DUAL PILL ACTION BUTTONS */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-full bg-slate-950 hover:bg-slate-800 text-white text-sm font-semibold shadow-sm transition-all duration-200 group"
          >
            <Zap className="w-4 h-4 fill-white text-slate-950" />
            <span>Book Free Diagnostic Audit</span>
          </a>

          <a
            href="#services"
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 border border-slate-200/90 text-sm font-semibold shadow-xs transition-all duration-200"
          >
            Explore TVET Solutions
          </a>
        </div>
      </div>

      {/* 2. MAIN FOOTER FLOATING CARD (MATCHING REFERENCE IMAGE) */}
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="bg-white rounded-[32px] sm:rounded-[40px] border border-slate-200/80 shadow-[0_4px_30px_-5px_rgba(0,0,0,0.03)] p-8 sm:p-12 lg:p-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* LEFT COLUMN: BRAND & CAPSULE NEWSLETTER SIGNUP */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* BRAND LOGO */}
              <Link href="#home" className="inline-flex items-center space-x-2.5 group">
                <div className="relative w-8 h-8 rounded-lg overflow-hidden bg-white flex-shrink-0">
                  <Image
                    src="/pics/hi.png"
                    alt="S&D TVET Consult Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-xl font-bold tracking-tight text-slate-950 group-hover:text-[#00509d] transition-colors">
                  S&amp;D TVET Consult
                </span>
              </Link>

              {/* NEWSLETTER HEADING */}
              <div className="pt-2">
                <h4 className="text-sm font-bold text-slate-900">
                  Sign up to receive TVET updates.
                </h4>
              </div>

              {/* CAPSULE INPUT WITH EMBEDDED SUBMIT BUTTON */}
              {subscribed ? (
                <div className="flex items-center space-x-2 p-3 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800 max-w-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Thank you! You are subscribed to TVET alerts.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="max-w-sm">
                  <div className="relative flex items-center bg-slate-100/90 border border-slate-200/80 rounded-full p-1.5 focus-within:border-slate-400 focus-within:ring-2 focus-within:ring-slate-900/5 transition-all">
                    <input
                      type="email"
                      required
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-transparent pl-4 pr-2 py-1.5 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="flex-shrink-0 rounded-full bg-slate-950 hover:bg-slate-800 text-white px-5 py-2 text-xs font-bold transition-colors shadow-xs"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              )}

              {/* CONSENT DISCLAIMER */}
              <p className="text-[11px] text-slate-400 leading-relaxed max-w-xs">
                By subscribing you agree with our{" "}
                <a href="#contact" className="underline hover:text-slate-600">
                  Privacy Policy
                </a>{" "}
                and provide consent to receive updates from our team.
              </p>
            </div>

            {/* RIGHT COLUMNS: 5-COLUMN LINK DIRECTORY */}
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
              
              {/* COLUMN 1: SERVICES */}
              <div className="space-y-3.5">
                <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Services
                </h5>
                <ul className="space-y-2.5 text-xs text-slate-500">
                  <li><a href="#services" className="hover:text-slate-900 transition-colors">CTVET Accreditation</a></li>
                  <li><a href="#services" className="hover:text-slate-900 transition-colors">CBT Training</a></li>
                  <li><a href="#services" className="hover:text-slate-900 transition-colors">Policy Formulation</a></li>
                  <li><a href="#services" className="hover:text-slate-900 transition-colors">Facility Audits</a></li>
                  <li><a href="#services" className="hover:text-slate-900 transition-colors">Facilitator Hiring</a></li>
                </ul>
              </div>

              {/* COLUMN 2: SOLUTIONS */}
              <div className="space-y-3.5">
                <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Solutions
                </h5>
                <ul className="space-y-2.5 text-xs text-slate-500">
                  <li><a href="#portfolio" className="hover:text-slate-900 transition-colors">Private TVET Schools</a></li>
                  <li><a href="#portfolio" className="hover:text-slate-900 transition-colors">Technical Institutes</a></li>
                  <li><a href="#portfolio" className="hover:text-slate-900 transition-colors">Vocational Centers</a></li>
                  <li><a href="#portfolio" className="hover:text-slate-900 transition-colors">GTVP Grant Projects</a></li>
                  <li><a href="#accreditation" className="hover:text-slate-900 transition-colors">Institutional Setup</a></li>
                </ul>
              </div>

              {/* COLUMN 3: ABOUT */}
              <div className="space-y-3.5">
                <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  About
                </h5>
                <ul className="space-y-2.5 text-xs text-slate-500">
                  <li><a href="#about" className="hover:text-slate-900 transition-colors">Our Story &amp; Mission</a></li>
                  <li><a href="#about" className="hover:text-slate-900 transition-colors">Leadership Team</a></li>
                  <li><a href="#portfolio" className="hover:text-slate-900 transition-colors">Accredited Schools</a></li>
                  <li><a href="#gallery" className="hover:text-slate-900 transition-colors">Field Gallery</a></li>
                  <li><a href="#testimonials" className="hover:text-slate-900 transition-colors">Client References</a></li>
                </ul>
              </div>

              {/* COLUMN 4: SUPPORT */}
              <div className="space-y-3.5">
                <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Support
                </h5>
                <ul className="space-y-2.5 text-xs text-slate-500">
                  <li><a href="#contact" className="hover:text-slate-900 transition-colors">Accreditation FAQ</a></li>
                  <li><a href="#contact" className="hover:text-slate-900 transition-colors">Lapaz Office</a></li>
                  <li><a href="tel:0503347934" className="hover:text-slate-900 transition-colors">Phone: 0503347934</a></li>
                  <li><a href="tel:0549647768" className="hover:text-slate-900 transition-colors">Phone: 0549647768</a></li>
                  <li><a href={`https://wa.me/${SITE_CONFIG.contact.whatsapp}`} className="hover:text-slate-900 transition-colors">WhatsApp Desk</a></li>
                </ul>
              </div>

              {/* COLUMN 5: LEGAL & REGULATORY */}
              <div className="space-y-3.5">
                <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Regulatory
                </h5>
                <ul className="space-y-2.5 text-xs text-slate-500">
                  <li><a href="#contact" className="hover:text-slate-900 transition-colors">CTVET Standards</a></li>
                  <li><a href="#contact" className="hover:text-slate-900 transition-colors">Terms of Service</a></li>
                  <li><a href="#contact" className="hover:text-slate-900 transition-colors">Privacy Policy</a></li>
                  <li><a href="#about" className="hover:text-slate-900 transition-colors">Act 992 Compliance</a></li>
                  <li><a href="#about" className="hover:text-slate-900 transition-colors">Ghana TVET Policy</a></li>
                </ul>
              </div>

            </div>

          </div>

          {/* 3. SUB-FOOTER BOTTOM BAR (MATCHING REFERENCE IMAGE) */}
          <div className="mt-14 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
            <p className="text-center sm:text-left">
              &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved. &bull; Registered in Ghana under the Companies Act (Act 992).
            </p>

            <a
              href="#home"
              className="inline-flex items-center space-x-1 hover:text-slate-700 transition-colors group"
            >
              <span>Advancing TVET Excellence in Ghana</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

        </div>
      </div>

    </footer>
  );
}
