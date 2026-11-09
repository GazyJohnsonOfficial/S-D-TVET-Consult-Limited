"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, Menu, X, ArrowRight, ShieldCheck } from "lucide-react";
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
      {/* TOP NOTIFICATION / QUICK CONTACT BAR */}
      <div className="bg-[#00296b] text-white text-xs py-2.5 px-6 sm:px-10 lg:px-16 border-b border-white/10 hidden md:block w-full">
        <div className="w-full max-w-[1600px] mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1.5 text-blue-200">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>Official Ghana TVET &amp; CTVET Accreditation Experts</span>
            </span>
            <span className="text-white/40">|</span>
            <span className="text-slate-300">Mon - Fri: 8:00 AM - 5:00 PM</span>
          </div>
          <div className="flex items-center space-x-6">
            <a
              href={`tel:${SITE_CONFIG.contact.phones[0]}`}
              className="flex items-center space-x-1.5 text-slate-200 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{SITE_CONFIG.contact.phoneFormatted[0]}</span>
            </a>
            <a
              href={`mailto:${SITE_CONFIG.contact.email}`}
              className="flex items-center space-x-1.5 text-slate-200 hover:text-white transition-colors"
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
            ? "glass-nav shadow-md py-3.5 border-b border-slate-200/80"
            : "bg-white/95 backdrop-blur-md py-4 border-b border-slate-100"
        }`}
      >
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
          {/* BRAND LOGO */}
          <Link href="#home" className="flex items-center space-x-3 group">
            <div className="relative w-11 h-11 rounded-xl overflow-hidden shadow-sm border border-slate-200 flex-shrink-0 bg-white">
              <Image
                src="/pics/hi.png"
                alt="S&D TVET Consult Logo"
                fill
                className="object-contain p-1"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-[#00509d] group-hover:text-[#00296b] transition-colors leading-tight">
                S&amp;D TVET
              </span>
              <span className="text-[11px] font-semibold tracking-wider uppercase text-slate-600">
                Consult Limited
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV LINKS */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-700 hover:text-[#00509d] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#00509d] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA ACTION */}
          <div className="hidden sm:flex items-center space-x-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#00509d] hover:bg-[#003875] shadow-sm hover:shadow transition-all duration-200 group"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-[#00509d] hover:bg-slate-100 transition-colors"
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
          <div className="lg:hidden border-t border-slate-200 bg-white/98 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-[#00509d] hover:bg-blue-50/60 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="pt-4 border-t border-slate-100 flex flex-col space-y-3">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-lg text-sm font-semibold text-white bg-[#00509d] hover:bg-[#003875] shadow"
              >
                Book Accreditation Consultation
              </a>
              <div className="flex justify-center space-x-6 text-xs text-slate-500 pt-1">
                <a
                  href={`tel:${SITE_CONFIG.contact.phones[0]}`}
                  className="flex items-center space-x-1 text-slate-700"
                >
                  <Phone className="w-3.5 h-3.5 text-[#00509d]" />
                  <span>{SITE_CONFIG.contact.phoneFormatted[0]}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

