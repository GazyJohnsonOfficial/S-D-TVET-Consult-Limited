"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUp, ArrowRight, Check } from "lucide-react";
import { SITE_CONFIG } from "@/data/site-data";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail("");
      setSubscribed(false);
    }, 4000);
  };

  return (
    <footer className="relative bg-[#070b14] text-white border-t border-slate-900 w-full overflow-hidden">
      
      {/* ANIMATED LIGHT BEAM TOP BORDER */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-slate-800 overflow-hidden">
        <div className="w-1/3 h-full bg-gradient-to-r from-transparent via-[#00509d] to-transparent animate-footer-beam" />
      </div>

      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 pt-20 pb-12">
        
        {/* TOP ROW: BRANDING, NAV COLUMNS, CONTACT & BRIEFING */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-14 pb-16 border-b border-slate-900">
          
          {/* COLUMN 1: CORPORATE IDENTITY & REGULATORY STATUS (SPAN 4) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="#home" className="flex items-center space-x-3.5 group">
              <div className="relative w-11 h-11 rounded-lg overflow-hidden bg-white p-1 flex-shrink-0 border border-slate-800">
                <Image
                  src="/pics/hi.png"
                  alt="S&D TVET Consult Logo"
                  fill
                  className="object-contain p-0.5"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white group-hover:text-slate-200 transition-colors leading-tight">
                  S&amp;D TVET
                </span>
                <span className="text-[11px] font-semibold tracking-wider uppercase text-slate-400">
                  Consult Limited
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Empowering Ghanaian vocational institutes, private proprietors, and facilitators to achieve sustainable CTVET compliance, robust governance, and quality training standards.
            </p>

            {/* LIVE REGULATORY OPERATIONS STATUS */}
            <div className="p-4 rounded-lg bg-slate-900/90 border border-slate-800 space-y-2">
              <div className="flex items-center space-x-2.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-xs font-semibold text-slate-200">
                  CTVET Advisory Desk Active
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Incorporated under the Companies Act, 2019 (Act 992) | Regulated TVET Advisory
              </p>
            </div>
          </div>

          {/* COLUMN 2: ACCREDITATION & ADVISORY (SPAN 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Solutions
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <a href="#services" className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  CTVET Accreditation
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  CBT Curriculum Alignment
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  Institutional Policies
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  Facility Readiness Audits
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  Facilitator Coaching
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  GTVP Grant Management
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: INSTITUTIONAL RESOURCES (SPAN 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Directory &amp; Info
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <a href="#portfolio" className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  Accredited Schools
                </a>
              </li>
              <li>
                <a href="#accreditation" className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  5-Stage Roadmap
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  Leadership Profiles
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  Field Gallery
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  Client Testimonials
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  TVET Articles
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: DIRECT COORDINATES & NEWSLETTER BRIEFING (SPAN 4) */}
          <div className="lg:col-span-4 space-y-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Regulatory Briefing &amp; Contact
            </h4>
            
            <p className="text-xs text-slate-400 leading-relaxed">
              Receive updates on Commission for TVET accreditation cycles, standards amendments, and grant opportunities.
            </p>

            {/* EMAIL BRIEFING FORM (RECTANGULAR, NO PILL SHAPE) */}
            {subscribed ? (
              <div className="p-3.5 rounded-lg bg-emerald-950/60 border border-emerald-800 text-xs font-semibold text-emerald-300 flex items-center space-x-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Subscription confirmed. Thank you.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Official institutional email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-grow px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00509d] transition-colors"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-lg bg-[#00509d] hover:bg-[#003875] text-xs font-bold text-white transition-colors flex items-center space-x-1 flex-shrink-0"
                >
                  <span>Join</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

            {/* DIRECT COORDINATES */}
            <div className="pt-3 border-t border-slate-900 space-y-2 text-xs text-slate-400">
              <div>
                <span className="font-semibold text-slate-300">Office: </span>
                {SITE_CONFIG.contact.address}
              </div>
              <div>
                <span className="font-semibold text-slate-300">Hotlines: </span>
                <a href="tel:0503347934" className="text-slate-300 hover:text-white">050 334 7934</a>
                {" | "}
                <a href="tel:0549647768" className="text-slate-300 hover:text-white">054 964 7768</a>
              </div>
              <div>
                <span className="font-semibold text-slate-300">Email: </span>
                <a href={`mailto:${SITE_CONFIG.contact.email}`} className="text-slate-300 hover:underline">
                  {SITE_CONFIG.contact.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM ROW: COPYRIGHT, REGULATORY NOTE, BACK TO TOP */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4">
            <p>&copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.</p>
            <span className="hidden sm:inline text-slate-700">|</span>
            <p>Republic of Ghana TVET Standards Advisory</p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 px-3.5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white text-xs font-semibold transition-all group"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
