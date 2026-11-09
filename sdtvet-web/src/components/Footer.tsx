"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  ArrowUp,
  ArrowRight,
  Send,
  CheckCircle2,
  Clock,
  Sparkles,
  ExternalLink,
  MessageCircle,
  Building,
  Award,
  Globe2,
} from "lucide-react";
import { SITE_CONFIG } from "@/data/site-data";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail("");
    }, 2000);
  };

  return (
    <footer className="relative w-full bg-[#030712] text-slate-300 border-t border-slate-800/80 overflow-hidden dark-footer-grid pt-16 pb-12 select-none">
      
      {/* =========================================================================
          AMBIENT ANIMATED LIGHT ORBS & PARTICLES
      ========================================================================= */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none animate-float-slow -z-0" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none animate-float-delayed -z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1400px] h-[500px] bg-gradient-to-b from-blue-900/5 to-transparent rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* =========================================================================
            TOP INTERACTIVE CARD: REGULATORY ALERT SUBSCRIPTION
        ========================================================================= */}
        <div className="mb-16 p-8 sm:p-10 lg:p-12 rounded-3xl bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-blue-950/80 border border-white/10 shadow-2xl backdrop-blur-xl relative overflow-hidden group">
          
          {/* Subtle glowing animated top border */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-blue-500 opacity-75 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* TEXT CALLOUT */}
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-xs font-bold text-amber-400 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Ghana TVET Regulatory Dispatch</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Stay Ahead of CTVET Compliance &amp; Policy Deadlines
              </h3>
              <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
                Receive quarterly accreditation checklists, CBT pedagogical guides, and national GTVP training grant alerts directly in your inbox.
              </p>
            </div>

            {/* INTERACTIVE FORM */}
            <div className="lg:col-span-5 w-full">
              {subscribed ? (
                <div className="p-4 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-sm font-semibold flex items-center space-x-3 animate-in fade-in zoom-in duration-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span>Thank you! You are subscribed to TVET Regulatory Alerts.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center gap-3">
                  <div className="relative w-full">
                    <Mail className="w-5 h-5 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      placeholder="Enter administrator email..."
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-950/80 border border-slate-700/80 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400/40 focus:border-amber-400 transition-all shadow-inner"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#00509d] to-blue-600 hover:from-blue-600 hover:to-blue-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-blue-900/30 transition-all duration-300 flex items-center justify-center space-x-2 flex-shrink-0 group/btn"
                  >
                    <span>Subscribe</span>
                    <Send className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
              <div className="flex items-center space-x-2 text-[11px] text-slate-500 mt-2.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero spam • Official Ghana TVET Gazette notices only</span>
              </div>
            </div>

          </div>
        </div>

        {/* =========================================================================
            MAIN MULTI-COLUMN ARCHITECTURE
        ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-slate-800/80">
          
          {/* COLUMN 1: CORPORATE IDENTITY & STATUS (COL-SPAN-4) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* BRAND LOGO */}
            <Link href="#home" className="flex items-center space-x-3.5 group">
              <div className="relative w-12 h-12 rounded-2xl overflow-hidden bg-white p-1.5 flex-shrink-0 shadow-lg shadow-blue-950/40 border border-white/20 group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/pics/hi.png"
                  alt="S&D TVET Consult Logo"
                  fill
                  className="object-contain p-0.5"
                />
              </div>
              <div>
                <span className="text-xl font-black text-white tracking-tight group-hover:text-amber-400 transition-colors">
                  S&amp;D TVET
                </span>
                <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Consult Limited
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Empowering Ghanaian technical institutes, proprietors, and instructors to achieve sustainable CTVET accreditation, robust governance, and industry-grade Competency-Based Training (CBT).
            </p>

            {/* LIVE ADVISORY DESK STATUS PILL */}
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-2 rounded-2xl bg-slate-900/90 border border-emerald-500/30 text-xs shadow-inner">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-slate-200 font-semibold">
                Advisory Desk Active • 2026/2027 Cycle
              </span>
            </div>

            {/* CORPORATE REGISTRATION SEAL */}
            <div className="flex items-center space-x-3 text-xs text-slate-400 pt-1">
              <Building className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>Incorporated Under the Companies Act, 2019 (Act 992)</span>
            </div>

            {/* DIRECT ACTION BUTTONS (WHATSAPP & HOTLINE) */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              <a
                href={`https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=Hello%20S%26D%20TVET%20Consult%2C%20I%20would%20like%20to%20consult%20with%20a%20director.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-emerald-950/70 hover:bg-emerald-900/90 text-emerald-300 hover:text-white border border-emerald-600/30 hover:border-emerald-500 text-xs font-bold transition-all duration-200"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp Desk</span>
              </a>

              <a
                href={`tel:${SITE_CONFIG.contact.phones[0]}`}
                className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-blue-950/70 hover:bg-blue-900/90 text-blue-300 hover:text-white border border-blue-600/30 hover:border-blue-500 text-xs font-bold transition-all duration-200"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Call Hotline</span>
              </a>
            </div>

          </div>

          {/* COLUMN 2: QUICK NAVIGATION (COL-SPAN-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-white flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#00509d]" />
              <span>Navigation</span>
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {[
                { label: "Home", href: "#home" },
                { label: "About Our Firm", href: "#about" },
                { label: "Executive Leadership", href: "#about" },
                { label: "Accredited Schools", href: "#portfolio" },
                { label: "5-Stage Roadmap", href: "#accreditation" },
                { label: "Field Work Gallery", href: "#gallery" },
                { label: "Client Testimonials", href: "#testimonials" },
                { label: "Contact HQ", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group flex items-center text-slate-400 hover:text-amber-400 transition-colors py-0.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-amber-400 mr-2 transition-colors" />
                    <span className="group-hover:translate-x-1.5 transition-transform duration-200">
                      {link.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: TVET ACCREDITATION SOLUTIONS (COL-SPAN-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-white flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>Core Solutions</span>
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {[
                "CTVET Institutional Accreditation",
                "CBT Curriculum & Standard Alignment",
                "Health, Safety & Governance Policies",
                "Facility & Workshop Inspection Audit",
                "Facilitator Recruitment & Screening",
                "Mock Interview Simulation Coaching",
                "Ghana TVET Voucher Management (GTVP)",
                "Institutional Performance Turnaround",
              ].map((svc) => (
                <li key={svc}>
                  <a
                    href="#services"
                    className="group flex items-center text-slate-400 hover:text-white transition-colors py-0.5"
                  >
                    <ArrowRight className="w-3 h-3 text-[#00509d] group-hover:text-amber-400 mr-2 group-hover:translate-x-1 transition-all" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {svc}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: DIRECT CONTACT HQ & PHYSICAL COORDINATES (COL-SPAN-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-white flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Accra Headquarters</span>
            </h4>

            <div className="space-y-4 text-xs sm:text-sm">
              
              {/* ADDRESS */}
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start space-x-3.5 hover:border-slate-700 transition-colors">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white">Physical Location</div>
                  <p className="text-slate-400 text-xs mt-0.5 leading-relaxed">
                    {SITE_CONFIG.contact.address}
                  </p>
                </div>
              </div>

              {/* TELEPHONES */}
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start space-x-3.5 hover:border-slate-700 transition-colors">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white">Direct Phone Lines</div>
                  <div className="flex flex-col space-y-1 mt-1 text-xs">
                    {SITE_CONFIG.contact.phones.map((phone, i) => (
                      <a
                        key={phone}
                        href={`tel:${phone}`}
                        className="text-slate-300 hover:text-amber-400 font-mono font-semibold transition-colors"
                      >
                        {SITE_CONFIG.contact.phoneFormatted[i]}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* EMAIL */}
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start space-x-3.5 hover:border-slate-700 transition-colors">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white">Official Correspondence</div>
                  <a
                    href={`mailto:${SITE_CONFIG.contact.email}`}
                    className="text-xs text-blue-300 hover:text-amber-400 transition-colors block mt-0.5 break-all font-mono"
                  >
                    {SITE_CONFIG.contact.email}
                  </a>
                </div>
              </div>

              {/* HOURS */}
              <div className="flex items-center space-x-2 text-xs text-slate-500 pt-1">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>{SITE_CONFIG.contact.hours}</span>
              </div>

            </div>
          </div>

        </div>

        {/* =========================================================================
            BOTTOM STRIP: COPYRIGHT, GHANA PRIDE, AND BACK TO TOP TRIGGER
        ========================================================================= */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500">
          
          {/* COPYRIGHT */}
          <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-3 text-center sm:text-left">
            <span>
              &copy; {currentYear} <strong>{SITE_CONFIG.name}</strong>. All rights reserved.
            </span>
            <span className="hidden sm:inline text-slate-700">•</span>
            <span className="text-slate-400">
              Registration No. CS067572024
            </span>
          </div>

          {/* GHANA TVET PRIDE STRIP (RED, GOLD, GREEN ACCENT) */}
          <div className="flex items-center space-x-3 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-slate-400">
            <span className="flex space-x-1">
              <span className="w-2.5 h-2.5 rounded-full bg-red-600" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
            </span>
            <span className="font-semibold text-slate-300">
              Committed to Ghana&apos;s National TVET Agenda
            </span>
          </div>

          {/* BACK TO TOP ANIMATED BUTTON */}
          <button
            onClick={scrollToTop}
            className="group flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-[#00509d] text-slate-400 hover:text-white border border-slate-800 hover:border-blue-500/50 transition-all duration-300 shadow-md"
            aria-label="Back to top"
          >
            <span className="font-bold text-xs">Back to Top</span>
            <div className="w-6 h-6 rounded-lg bg-white/5 group-hover:bg-white/20 flex items-center justify-center group-hover:-translate-y-1 transition-transform duration-200">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>

        </div>

      </div>
    </footer>
  );
}
