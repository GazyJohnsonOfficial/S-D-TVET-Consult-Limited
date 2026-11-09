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
  Send,
  CheckCircle2,
  Clock,
  Sparkles,
  ExternalLink,
  MessageCircle,
  Globe2,
} from "lucide-react";
import { SITE_CONFIG } from "@/data/site-data";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail("");
    }, 2000);
  };

  return (
    <footer className="w-full bg-[#030712] text-white border-t border-slate-900 relative overflow-hidden">
      {/* AMBIENT BACKGROUND GLOWS */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[300px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[500px] h-[300px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* TOP CALLOUT RIBBON */}
      <div className="border-b border-white/5 bg-white/[0.02]">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-4 text-center lg:text-left">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Ready to Achieve Full CTVET Accreditation?
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                  Join over 22 TVET institutions across Ghana that trust S&amp;D TVET Consult for complete compliance.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 flex-shrink-0">
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl bg-[#00509d] hover:bg-[#003875] text-white font-bold text-xs sm:text-sm shadow-lg transition-all"
              >
                Schedule Diagnostic Audit
              </a>
              <a
                href={`https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=Hello%20S%26D%20TVET%20Consult%2C%20I%20would%20like%20to%20inquire%20about%20your%20services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/30 font-semibold text-xs sm:text-sm flex items-center space-x-2 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Quick WhatsApp Advisory</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN FOOTER CONTENT */}
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 pt-16 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-slate-900">
          
          {/* COLUMN 1: BRAND & CREDENTIALS (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="#home" className="flex items-center space-x-3.5 group">
              <div className="relative w-12 h-12 rounded-2xl overflow-hidden bg-white p-1.5 flex-shrink-0 shadow-md">
                <Image
                  src="/pics/hi.png"
                  alt="S&D TVET Consult Logo"
                  fill
                  className="object-contain p-0.5"
                />
              </div>
              <div>
                <span className="text-xl font-black text-white tracking-tight group-hover:text-blue-300 transition-colors">
                  S&amp;D TVET
                </span>
                <span className="block text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Consult Limited
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Empowering technical and vocational training institutions, private proprietors, and facilitators to achieve sustainable CTVET compliance, robust governance, and quality training excellence across Ghana.
            </p>

            {/* ACCREDITATION & REGISTRATION SEALS */}
            <div className="space-y-2 pt-1">
              <div className="flex items-center space-x-2.5 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Official CTVET Checklist &amp; Standards Alignment</span>
              </div>
              <div className="flex items-center space-x-2.5 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Incorporated under the Companies Act, 2019 (Act 992)</span>
              </div>
            </div>

            {/* SOCIAL MEDIA / COMMUNICATION CHANNELS */}
            <div className="pt-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Connect With Our Team:
              </div>
              <div className="flex items-center space-x-3">
                <a
                  href={`https://wa.me/${SITE_CONFIG.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/50 hover:bg-emerald-500/10 text-slate-300 hover:text-emerald-400 flex items-center justify-center transition-all"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/10 text-slate-300 hover:text-blue-400 flex items-center justify-center transition-all"
                  aria-label="Facebook"
                >
                  <Globe2 className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-blue-400/50 hover:bg-blue-400/10 text-slate-300 hover:text-blue-300 flex items-center justify-center transition-all"
                  aria-label="LinkedIn"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400/50 hover:bg-amber-400/10 text-slate-300 hover:text-amber-400 flex items-center justify-center transition-all"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* COLUMN 2: CORE TVET SOLUTIONS (2.5 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span>Core TVET Solutions</span>
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="#services" className="hover:text-white transition-colors flex items-center group">
                  <span className="text-slate-600 group-hover:text-blue-400 mr-2 transition-colors">&rsaquo;</span>
                  <span>CTVET Accreditation Guidance</span>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors flex items-center group">
                  <span className="text-slate-600 group-hover:text-blue-400 mr-2 transition-colors">&rsaquo;</span>
                  <span>Competency-Based Training (CBT)</span>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors flex items-center group">
                  <span className="text-slate-600 group-hover:text-blue-400 mr-2 transition-colors">&rsaquo;</span>
                  <span>Institutional Policy Formulation</span>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors flex items-center group">
                  <span className="text-slate-600 group-hover:text-blue-400 mr-2 transition-colors">&rsaquo;</span>
                  <span>Workshop Tooling &amp; Safety Audits</span>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors flex items-center group">
                  <span className="text-slate-600 group-hover:text-blue-400 mr-2 transition-colors">&rsaquo;</span>
                  <span>Facilitator Panel Simulation Drills</span>
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors flex items-center group">
                  <span className="text-slate-600 group-hover:text-blue-400 mr-2 transition-colors">&rsaquo;</span>
                  <span>GTVP Voucher Project Management</span>
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: CORPORATE NAVIGATION & SITES (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>Company</span>
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About S&amp;D TVET</a>
              </li>
              <li>
                <a href="#accreditation" className="hover:text-white transition-colors">5-Stage Roadmap</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">Accredited Schools (22+)</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">Field Work Gallery</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">Partner Testimonials</a>
              </li>
              <li>
                <a href="#blog" className="hover:text-white transition-colors">Industry Articles</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact Directory</a>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: DIRECT CONTACT & BULLETIN (3.5 cols) */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 flex items-center space-x-2 mb-3.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Head Office &amp; Contact</span>
              </h4>

              <div className="space-y-3 text-xs text-slate-400">
                <div className="flex items-start space-x-2.5">
                  <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>{SITE_CONFIG.contact.address}</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <div className="space-x-2">
                    {SITE_CONFIG.contact.phones.map((phone, i) => (
                      <a
                        key={phone}
                        href={`tel:${phone}`}
                        className="hover:text-white font-semibold transition-colors"
                      >
                        {SITE_CONFIG.contact.phoneFormatted[i]}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="flex items-center space-x-2.5">
                  <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <a
                    href={`mailto:${SITE_CONFIG.contact.email}`}
                    className="hover:text-white font-medium transition-colors"
                  >
                    {SITE_CONFIG.contact.email}
                  </a>
                </div>
                <div className="flex items-center space-x-2.5">
                  <Clock className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>{SITE_CONFIG.contact.hours}</span>
                </div>
              </div>
            </div>

            {/* TVET ADVISORY NEWSLETTER */}
            <div className="pt-4 border-t border-slate-900">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-1.5">
                TVET Policy &amp; Advisory Bulletin
              </h5>
              <p className="text-xs text-slate-400 mb-3">
                Receive official CTVET regulatory guidelines, compliance updates, and workshop alerts directly in your inbox.
              </p>

              {newsletterSubscribed ? (
                <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Thank you! You are subscribed to our bulletin.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex items-center space-x-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00509d] focus:ring-1 focus:ring-[#00509d]"
                  />
                  <button
                    type="submit"
                    className="p-2.5 rounded-xl bg-[#00509d] hover:bg-[#003875] text-white flex-shrink-0 transition-colors shadow-sm"
                    aria-label="Subscribe"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* BOTTOM ROW: LEGAL, CREDITS & BACK TO TOP */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-y-2 gap-x-4">
            <p>
              &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
            </p>
            <span className="hidden sm:inline text-slate-800">|</span>
            <span className="text-slate-400">
              Advancing Technical &amp; Vocational Excellence across Ghana 🇬🇭
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <span className="text-slate-600 hover:text-slate-400 cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="text-slate-600 hover:text-slate-400 cursor-pointer transition-colors">
              Terms of Service
            </span>
            <span className="text-slate-600 hover:text-slate-400 cursor-pointer transition-colors">
              CTVET Compliance
            </span>

            {/* BACK TO TOP BUTTON */}
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all flex items-center space-x-1.5"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="text-[11px] font-semibold hidden sm:inline">Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
