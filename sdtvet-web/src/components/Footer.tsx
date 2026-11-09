"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Zap, ArrowUp, ArrowUpRight, Mail } from "lucide-react";
import { SITE_CONFIG } from "@/data/site-data";

/* SVG ICONS FOR SOCIAL PLATFORMS */
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function TwitterXIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2ZM12.05 20.15C10.57 20.15 9.12 19.75 7.85 19L7.55 18.82L4.43 19.64L5.26 16.6L5.07 16.29C4.24 14.97 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.68 12.05 3.68C14.25 3.68 16.32 4.54 17.87 6.1C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.15 12.05 20.15ZM16.57 14.41C16.32 14.29 15.1 13.69 14.88 13.61C14.65 13.52 14.48 13.48 14.32 13.73C14.15 13.98 13.68 14.53 13.54 14.7C13.39 14.86 13.25 14.89 13 14.76C12.75 14.64 11.96 14.38 11.02 13.54C10.28 12.89 9.78 12.08 9.64 11.83C9.49 11.58 9.62 11.45 9.75 11.32C9.86 11.21 10 11.05 10.12 10.91C10.25 10.77 10.29 10.66 10.37 10.5C10.45 10.33 10.41 10.19 10.35 10.06C10.29 9.94 9.79 8.71 9.58 8.21C9.38 7.72 9.17 7.78 9.02 7.78C8.88 7.77 8.71 7.77 8.54 7.77C8.38 7.77 8.11 7.83 7.88 8.08C7.65 8.33 7 8.94 7 10.19C7 11.44 7.91 12.65 8.03 12.82C8.16 12.98 9.82 15.54 12.35 16.63C12.95 16.89 13.42 17.05 13.78 17.16C14.39 17.35 14.94 17.33 15.38 17.26C15.87 17.19 16.88 16.65 17.09 16.07C17.3 15.48 17.3 14.98 17.24 14.88C17.17 14.77 17.02 14.71 16.77 14.58L16.57 14.41Z" clipRule="evenodd" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
    </svg>
  );
}

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/sd-tvet-consult",
      icon: <LinkedInIcon className="w-4 h-4" />
    },
    {
      name: "WhatsApp",
      href: `https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=Hello%20S%26D%20TVET%20Consult%2C%20I%20would%20like%20to%20inquire%20about%20your%20services.`,
      icon: <WhatsAppIcon className="w-4 h-4" />
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/sdtvetconsult",
      icon: <FacebookIcon className="w-4 h-4" />
    },
    {
      name: "Twitter / X",
      href: "https://x.com/sdtvetconsult",
      icon: <TwitterXIcon className="w-3.5 h-3.5" />
    },
    {
      name: "Instagram",
      href: "https://instagram.com/sdtvetconsult",
      icon: <InstagramIcon className="w-4 h-4" />
    }
  ];

  return (
    <div className="w-full">
      {/* ========================================================
          PRE-FOOTER CTA SECTION (FULL WIDTH, CLEAN BACKGROUND)
      ======================================================== */}
      <section className="w-full bg-slate-50 py-20 sm:py-28 border-t border-slate-200/70 relative overflow-hidden">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.18] max-w-4xl mx-auto">
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
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-bold text-white bg-slate-950 hover:bg-slate-800 shadow-md transition-colors space-x-2"
            >
              <Zap className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>Book Accreditation Consultation</span>
            </a>

            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-semibold text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 shadow-sm transition-colors"
            >
              Explore All TVET Solutions
            </a>
          </div>

          <p className="text-xs text-slate-400 mt-6">
            Trusted by 22+ institutions &bull; 500+ certified facilitators &bull; 100% CTVET audit alignment
          </p>
        </div>
      </section>

      {/* ========================================================
          ACTUAL FULL-WIDTH FOOTER (EDGE-TO-EDGE, ANCHORED)
      ======================================================== */}
      <footer className="w-full bg-white border-t border-slate-200/90 pt-16 sm:pt-20 pb-12 shadow-[0_-4px_20px_-5px_rgba(0,0,0,0.03)]">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
          
          {/* MAIN FOOTER GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 pb-14 border-b border-slate-100">
            
            {/* LEFT: BRAND, NEWSLETTER & SOCIAL ICONS */}
            <div className="lg:col-span-4 space-y-5">
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
                  <span className="text-xl font-bold tracking-tight text-slate-900 leading-tight">
                    S&amp;D TVET
                  </span>
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-slate-500">
                    Consult Limited
                  </span>
                </div>
              </Link>

              <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
                Ghana&apos;s leading technical and vocational education consultancy. Accrediting institutions, coaching facilitators, and advancing national skills development.
              </p>

              {/* NEWSLETTER */}
              <div className="pt-1">
                <p className="text-sm font-bold text-slate-900">
                  Sign up to receive CTVET &amp; TVET regulatory updates.
                </p>

                {/* PILL INPUT WITH INTEGRATED SUBMIT BUTTON */}
                <form onSubmit={handleSubscribe} className="relative flex items-center max-w-sm mt-3">
                  <div className="absolute left-4 text-slate-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-11 pr-28 py-3.5 rounded-full bg-slate-100 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:bg-white transition-all"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 px-5 py-2.5 rounded-full bg-slate-950 hover:bg-slate-800 text-white text-xs font-bold transition-colors"
                  >
                    {subscribed ? "Submitted!" : "Submit"}
                  </button>
                </form>

                <p className="text-[11px] text-slate-400 mt-2 max-w-xs leading-relaxed">
                  By subscribing you agree with our <a href="#privacy" className="underline hover:text-slate-600">Privacy Policy</a> and consent to updates.
                </p>
              </div>

              {/* SOCIAL MEDIA ICONS ROW */}
              <div className="pt-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
                  Follow Our TVET Network
                </span>
                <div className="flex items-center space-x-2.5">
                  {socialLinks.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Connect with S&D TVET Consult on ${item.name}`}
                      title={item.name}
                      className="w-9 h-9 rounded-full bg-slate-100 hover:bg-[#00509d] text-slate-600 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110 border border-slate-200 hover:border-[#00509d]"
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT: 5 CATEGORIZED LINK GROUPS */}
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
              
              {/* COL 1: SERVICES */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Services
                </h4>
                <ul className="space-y-2.5 text-xs text-slate-500 font-medium">
                  <li><a href="#services" className="hover:text-[#00509d] transition-colors">CTVET Accreditation</a></li>
                  <li><a href="#services" className="hover:text-[#00509d] transition-colors">Policy Formulation</a></li>
                  <li><a href="#services" className="hover:text-[#00509d] transition-colors">CBT Training</a></li>
                  <li><a href="#services" className="hover:text-[#00509d] transition-colors">Facility Audits</a></li>
                  <li><a href="#services" className="hover:text-[#00509d] transition-colors">Facilitator Sourcing</a></li>
                  <li><a href="#services" className="hover:text-[#00509d] transition-colors">TVET Research</a></li>
                </ul>
              </div>

              {/* COL 2: PROCESS */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Process
                </h4>
                <ul className="space-y-2.5 text-xs text-slate-500 font-medium">
                  <li><a href="#accreditation" className="hover:text-[#00509d] transition-colors">Diagnostic Audit</a></li>
                  <li><a href="#accreditation" className="hover:text-[#00509d] transition-colors">Policy Alignment</a></li>
                  <li><a href="#accreditation" className="hover:text-[#00509d] transition-colors">Facility Inspection</a></li>
                  <li><a href="#accreditation" className="hover:text-[#00509d] transition-colors">Panel Simulations</a></li>
                  <li><a href="#accreditation" className="hover:text-[#00509d] transition-colors">Panel Escort</a></li>
                  <li><a href="#accreditation" className="hover:text-[#00509d] transition-colors">Certification</a></li>
                </ul>
              </div>

              {/* COL 3: COMPANY */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Company
                </h4>
                <ul className="space-y-2.5 text-xs text-slate-500 font-medium">
                  <li><a href="#about" className="hover:text-[#00509d] transition-colors">About Our Firm</a></li>
                  <li><a href="#about" className="hover:text-[#00509d] transition-colors">Leadership Directors</a></li>
                  <li><a href="#portfolio" className="hover:text-[#00509d] transition-colors">Accredited Schools</a></li>
                  <li><a href="#portfolio" className="hover:text-[#00509d] transition-colors">GTVP Projects</a></li>
                  <li><a href="#gallery" className="hover:text-[#00509d] transition-colors">Field Work Gallery</a></li>
                  <li><a href="#testimonials" className="hover:text-[#00509d] transition-colors">Client Testimonials</a></li>
                </ul>
              </div>

              {/* COL 4: SUPPORT / DIRECT CONTACT */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Support
                </h4>
                <ul className="space-y-2.5 text-xs text-slate-500 font-medium">
                  <li><a href="#contact" className="hover:text-[#00509d] transition-colors">Lapaz Office, Accra</a></li>
                  <li><a href="tel:0503347934" className="hover:text-[#00509d] transition-colors">050 334 7934</a></li>
                  <li><a href="tel:0549647768" className="hover:text-[#00509d] transition-colors">054 964 7768</a></li>
                  <li><a href="mailto:info@sdtvetconsult.com" className="hover:text-[#00509d] transition-colors">info@sdtvetconsult.com</a></li>
                  <li><a href={`https://wa.me/${SITE_CONFIG.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#00509d] transition-colors">WhatsApp Live Desk</a></li>
                </ul>
              </div>

              {/* COL 5: LEGAL */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Legal
                </h4>
                <ul className="space-y-2.5 text-xs text-slate-500 font-medium">
                  <li><span className="text-slate-500">Terms of Engagement</span></li>
                  <li><span className="text-slate-500">Privacy Policy</span></li>
                  <li><span className="text-slate-500">Act 992 Compliance</span></li>
                  <li><span className="text-slate-500">CTVET Guidelines</span></li>
                  <li><span className="text-slate-500">Ghana TVET Voucher</span></li>
                </ul>
              </div>

            </div>

          </div>

          {/* BOTTOM ROW (COPYRIGHT, BACK TO TOP & ATTRIBUTION) */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
            <p>
              &copy; 2026 S&amp;D TVET Consult Limited. All rights reserved. &bull; Officially registered in Ghana (Act 992).
            </p>

            <div className="flex items-center space-x-6">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center space-x-1.5 text-slate-500 hover:text-slate-900 font-medium transition-colors cursor-pointer"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>

              <a
                href="#home"
                className="inline-flex items-center space-x-1 text-slate-600 hover:text-slate-900 font-semibold transition-colors"
              >
                <span>Advancing TVET Excellence</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}
