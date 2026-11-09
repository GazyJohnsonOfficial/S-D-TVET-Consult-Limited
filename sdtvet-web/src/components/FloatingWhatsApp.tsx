"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/data/site-data";

export default function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=Hello%20S%26D%20TVET%20Consult%2C%20I%20would%20like%20to%20inquire%20about%20your%20CTVET%20Accreditation%20and%20consultancy%20services.`;

  return (
    <aside aria-label="Quick WhatsApp contact" className="fixed bottom-7 right-7 z-40">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex items-center space-x-2.5 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white px-5 py-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-108 group border-2 border-white pulse-ripple"
      >
        <MessageCircle className="w-6 h-6 fill-white text-emerald-600" />
        <span className="text-sm font-bold hidden sm:inline-block tracking-wide">
          Chat With Us
        </span>
      </a>
    </aside>
  );
}
