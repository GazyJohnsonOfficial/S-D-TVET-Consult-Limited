"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, Menu, X, ArrowRight, ShieldCheck, Clock, ChevronDown } from "lucide-react";
import { SITE_CONFIG } from "@/data/site-data";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Accreditation", href: "#accreditation" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* BRAND COLOR ACCENT LINE */}
      <div className="h-1 w-full bg-gradient-to-r from-[#00296b] via-[#00509d] to-amber-400" />

      {/* TOP NOTIFICATION / QUICK CONTACT BAR */}
      <div className="bg-[#001d4a] text-white text-xs py-2 px-6 sm:px-10 lg:px-16 border-b border-white/10 hidden md:block w-full">
        <div className="w-full max-w-[1600px] mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-2 text-blue-200">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-medium">Official Ghana TVET &amp; CTVET Accreditation Experts</span>
            </span>
            <span className="text-white/20">|</span>
            <span className="flex items-center space-x-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>Mon - Fri: 8:00 AM - 5:00 PM</span>
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href={`tel:${SITE_CONFIG.contact.phones[0]}`}
              className="flex items-center space-x-1.5 text-slate-200 hover:text-amber-300 transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{SITE_CONFIG.contact.phoneFormatted[0]}</span>
            </a>
            <span className="text-white/20">|</span>
            <a
              href={`mailto:${SITE_CONFIG.contact.email}`}
              className="flex items-center space-x-1.5 text-slate-200 hover:text-amber-300 transition-colors font-medium"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>{SITE_CONFIG.contact.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* MAIN STICKY NAVIGATION */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "glass-nav shadow-lg shadow-slate-900/5 py-3 border-b border-slate-200/80"
            : "bg-white/95 backdrop-blur-md py-4 border-b border-slate-100"
        }`}
      >
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
          
          {/* BRAND LOGO */}
          <Link href="#home" className="flex items-center space-x-3.5 group">
            <div className="relative w-12 h-12 rounded-2xl overflow-hidden shadow-sm border border-slate-200/90 flex-shrink-0 bg-white p-1 transition-transform group-hover:scale-105 duration-200">
              <Image
                src="/pics/hi.png"
                alt="S&D TVET Consult Logo"
                fill
                sizes="48px"
                className="object-contain p-0.5"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-[#00509d] group-hover:text-[#00296b] transition-colors leading-tight font-heading">
                S&amp;D TVET
              </span>
              <span className="text-[11px] font-bold tracking-widest uppercase text-slate-500">
                Consult Limited
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV LINKS */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 bg-slate-50/80 p-1.5 rounded-full border border-slate-200/80">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs xl:text-sm font-semibold text-slate-700 hover:text-[#00509d] hover:bg-white transition-all duration-150 px-4 py-2 rounded-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA ACTION */}
          <div className="hidden sm:flex items-center space-x-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-xs xl:text-sm font-bold text-white bg-gradient-to-r from-[#00509d] to-[#003875] hover:from-[#003f88] hover:to-[#00296b] shadow-md shadow-blue-900/15 hover:shadow-lg transition-all duration-200 group card-shine"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-700 hover:text-[#00509d] hover:bg-slate-100 transition-colors border border-slate-200"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE SLIDE-DOWN DRAWER */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white/98 backdrop-blur-2xl px-6 pt-4 pb-8 space-y-4 shadow-2xl animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-base font-semibold text-slate-800 hover:text-[#00509d] hover:bg-blue-50/70 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-col space-y-3">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#00509d] to-[#003875] shadow-md"
              >
                Book Accreditation Consultation
              </a>
              <div className="flex justify-around text-xs text-slate-600 pt-2 font-medium">
                <a href={`tel:${SITE_CONFIG.contact.phones[0]}`} className="flex items-center space-x-1 text-[#00509d]">
                  <Phone className="w-3.5 h-3.5" />
                  <span>{SITE_CONFIG.contact.phoneFormatted[0]}</span>
                </a>
                <a href={`mailto:${SITE_CONFIG.contact.email}`} className="flex items-center space-x-1 text-[#00509d]">
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email Us</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
