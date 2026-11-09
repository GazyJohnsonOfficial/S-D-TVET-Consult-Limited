"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, ShieldCheck, Heart, ArrowUp } from "lucide-react";
import { SITE_CONFIG } from "@/data/site-data";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-900 pt-20 pb-12 w-full relative">
      {/* ACCENT GRADIENT BORDER */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00296b] via-[#00509d] to-amber-400" />

      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* TOP ROW: BRAND & COLUMNS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-slate-800/80">
          
          {/* BRAND COLUMN */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="#home" className="flex items-center space-x-3.5 group">
              <div className="relative w-12 h-12 rounded-2xl overflow-hidden bg-white p-1 flex-shrink-0 shadow-sm transition-transform group-hover:scale-105">
                <Image
                  src="/pics/hi.png"
                  alt="S&D TVET Consult Logo"
                  fill
                  sizes="48px"
                  className="object-contain p-0.5"
                />
              </div>
              <div>
                <span className="text-xl font-extrabold text-white tracking-tight font-heading block">
                  S&amp;D TVET
                </span>
                <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Consult Limited
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Empowering Ghanaian vocational institutes, private proprietors, and facilitators to achieve sustainable CTVET compliance, robust governance, and quality training standards.
            </p>

            <div className="inline-flex items-center space-x-2.5 px-3.5 py-2 rounded-xl bg-blue-950/70 border border-blue-800/40 text-xs text-blue-200">
              <ShieldCheck className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>Established March 21, 2024 • 8+ Years Sector Mastery</span>
            </div>
          </div>

          {/* QUICK NAVIGATION */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-200">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400 font-medium">
              <li><a href="#home" className="hover:text-amber-300 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-amber-300 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-amber-300 transition-colors">Our Services</a></li>
              <li><a href="#accreditation" className="hover:text-amber-300 transition-colors">Accreditation Process</a></li>
              <li><a href="#portfolio" className="hover:text-amber-300 transition-colors">Accredited Schools</a></li>
              <li><a href="#gallery" className="hover:text-amber-300 transition-colors">Field Gallery</a></li>
              <li><a href="#contact" className="hover:text-amber-300 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* KEY SERVICES */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-200">
              Key TVET Solutions
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400 font-medium">
              <li><a href="#services" className="hover:text-amber-300 transition-colors">CTVET Accreditation Guidance</a></li>
              <li><a href="#services" className="hover:text-amber-300 transition-colors">CBT Curriculum &amp; Training</a></li>
              <li><a href="#services" className="hover:text-amber-300 transition-colors">Institutional Policy Drafting</a></li>
              <li><a href="#services" className="hover:text-services transition-colors">Facility Inspection Prep</a></li>
              <li><a href="#services" className="hover:text-amber-300 transition-colors">Facilitator Coaching &amp; Recruitment</a></li>
              <li><a href="#portfolio" className="hover:text-amber-300 transition-colors">GTVP Voucher Management</a></li>
            </ul>
          </div>

          {/* DIRECT CONTACT */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-200">
              Headquarters
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-400">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.contact.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>{SITE_CONFIG.contact.phones.join(" / ")}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a href={`mailto:${SITE_CONFIG.contact.email}`} className="hover:underline hover:text-white">
                  {SITE_CONFIG.contact.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM ROW: COPYRIGHT */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-slate-400 gap-4">
          <p>
            &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <span className="text-slate-500">Advancing TVET Excellence across Ghana</span>
            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-slate-800"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
