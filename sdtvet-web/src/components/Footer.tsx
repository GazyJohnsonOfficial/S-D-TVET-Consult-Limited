import React from "react";
import { connection } from "next/server";
import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/data/site-data";

export default async function Footer() {
  await connection();
  const currentYear = new Date().getFullYear();

  const tvetTradeAreas = [
    { label: "Cosmetology & Beauty Therapy", href: "#portfolio" },
    { label: "Fashion Design & Garment Making", href: "#portfolio" },
    { label: "Electrical Engineering Technology", href: "#portfolio" },
    { label: "Welding & Fabrication", href: "#portfolio" },
    { label: "Building & Construction", href: "#portfolio" },
    { label: "Automotive Engineering", href: "#portfolio" },
    { label: "Catering & Hospitality Management", href: "#portfolio" },
    { label: "Information & Communication Tech (ICT)", href: "#portfolio" },
    { label: "Plumbing & Pipefitting", href: "#portfolio" },
    { label: "Electronics & Security Systems", href: "#portfolio" },
    { label: "Wood Construction Technology", href: "#portfolio" },
    { label: "Refrigeration & Air Conditioning", href: "#portfolio" },
  ];

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Accreditation Process", href: "#accreditation" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact Us", href: "#contact" },
  ];

  const services = [
    { label: "CTVET Accreditation", href: "#services" },
    { label: "Policy Development", href: "#services" },
    { label: "CBT Training Alignment", href: "#services" },
    { label: "Facilitator Recruitment", href: "#services" },
    { label: "Institutional Setup & Audit", href: "#services" },
    { label: "National Project Management", href: "#services" },
  ];

  const resources = [
    { label: "CTVET Accreditation Guide", href: "#blog" },
    { label: "CBT Competency Framework", href: "#blog" },
    { label: "Facility Inspection Checklist", href: "#accreditation" },
    { label: "Institutional Policy Templates", href: "#services" },
    { label: "Facilitator Interview Prep", href: "#services" },
    { label: "Accreditation FAQ", href: "#about" },
  ];

  const support = [
    { label: "Knowledge Base", href: "#blog" },
    { label: "Submit Inquiry", href: "#contact" },
    { label: "Preliminary Diagnostic Audit", href: "#contact" },
    { label: "Lapaz Accra Office", href: "#contact" },
    { label: "Direct Phone Helpdesk", href: "tel:0503347934" },
    { label: "WhatsApp Support Desk", href: `https://wa.me/${SITE_CONFIG.contact.whatsapp}` },
  ];

  const otherLinks = [
    { label: "Our Mission & Mandate", href: "#about" },
    { label: "Meet Our Leadership", href: "#about" },
    { label: "Accredited Institutions List", href: "#portfolio" },
    { label: "GTVP Flagship Sites", href: "#portfolio" },
    { label: "Field Work Gallery", href: "#gallery" },
    { label: "Institutional Partnership", href: "#contact" },
  ];

  return (
    <footer className="w-full bg-white text-slate-700 border-t border-slate-200/90 py-12 lg:py-16">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* TOP SECTION: TVET TRADE AREAS & ACCREDITATION INDEX */}
        <div className="pb-12 border-b border-slate-200/80">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#00509d] block mb-1">
                CTVET Qualification Framework
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Accredited TVET Trade Sectors &amp; Programmes
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md">
              Explore national competency standards and curricula we support across Ghana.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 pt-2">
            {tvetTradeAreas.map((area) => (
              <a
                key={area.label}
                href={area.href}
                className="text-xs font-medium text-slate-600 bg-slate-100 hover:bg-blue-50 hover:text-[#00509d] px-3.5 py-1.5 rounded-lg border border-slate-200/70 transition-all"
              >
                {area.label}
              </a>
            ))}
          </div>
        </div>

        {/* 5-COLUMN CATEGORIZED LINKS GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10 py-14">
          
          {/* COLUMN 1: QUICK LINKS */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-4 tracking-tight">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-[#00509d] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 2: SERVICES */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-4 tracking-tight">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
              {services.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-[#00509d] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: RESOURCES */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-4 tracking-tight">
              Resources
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
              {resources.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-[#00509d] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: SUPPORT */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-4 tracking-tight">
              Support
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
              {support.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-[#00509d] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 5: OTHER */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-4 tracking-tight">
              Other
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
              {otherLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-[#00509d] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* BOTTOM BRAND, SOCIAL ICONS & LEGAL POLICIES BAR */}
        <div className="pt-8 pb-6 border-t border-slate-200/80 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* BRAND LOGO */}
          <Link href="#home" className="flex items-center space-x-3 group">
            <div className="relative w-8 h-8 rounded-lg overflow-hidden bg-white border border-slate-200 flex-shrink-0 p-0.5">
              <Image
                src="/pics/hi.png"
                alt="S&D TVET Consult Limited"
                fill
                className="object-contain"
                sizes="32px"
              />
            </div>
            <div className="flex items-center space-x-1.5">
              <span className="text-base font-bold tracking-tight text-[#00509d]">
                S&amp;D TVET
              </span>
              <span className="text-xs font-semibold text-slate-600">
                Consult Limited
              </span>
            </div>
          </Link>

          {/* SOCIAL ICONS & LEGAL POLICIES */}
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
            {/* SOCIAL ICONS (CLEAN SVG) */}
            <div className="flex items-center space-x-2.5">
              
              {/* LINKEDIN */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-[#00509d] text-slate-600 hover:text-white flex items-center justify-center transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>

              {/* FACEBOOK */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-[#00509d] text-slate-600 hover:text-white flex items-center justify-center transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z"/>
                </svg>
              </a>

              {/* TWITTER / X */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-[#00509d] text-slate-600 hover:text-white flex items-center justify-center transition-all duration-200"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* INSTAGRAM */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-[#00509d] text-slate-600 hover:text-white flex items-center justify-center transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* WHATSAPP */}
              <a
                href={`https://wa.me/${SITE_CONFIG.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-emerald-600 text-slate-600 hover:text-white flex items-center justify-center transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.159.57 4.185 1.564 5.938l-1.664 6.082 6.221-1.632c1.707.933 3.666 1.47 5.879 1.47 6.627 0 12-5.373 12-12s-5.373-12-12-12z"/>
                </svg>
              </a>

              {/* YOUTUBE */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-red-600 text-slate-600 hover:text-white flex items-center justify-center transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

            </div>

            {/* SEPARATOR */}
            <span className="hidden sm:inline text-slate-300">|</span>

            {/* LEGAL LINKS */}
            <div className="flex items-center space-x-4 text-xs font-medium text-slate-500">
              <a href="#contact" className="hover:text-[#00509d] transition-colors">
                Privacy Policy
              </a>
              <span className="text-slate-300">|</span>
              <a href="#contact" className="hover:text-[#00509d] transition-colors">
                Terms &amp; Conditions
              </a>
            </div>
          </div>

        </div>

        {/* COPYRIGHT SUBTEXT */}
        <div className="pt-4 text-center text-xs text-slate-400">
          Copyright &copy; {currentYear} S&amp;D TVET Consult Limited &ndash; All Rights Reserved
        </div>

      </div>
    </footer>
  );
}
