"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { SITE_CONFIG } from "@/data/site-data";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=Hello%20S%26D%20TVET%20Consult%2C%20I%20would%20like%20to%20inquire%20about%20your%20CTVET%20Accreditation%20and%20consultancy%20services.`;

  return (
    <aside aria-label="Quick WhatsApp consultation" className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-2">
      {/* CHAT PROMPT TOOLTIP */}
      {showTooltip && (
        <div className="bg-white rounded-2xl p-3.5 shadow-xl border border-slate-200 text-xs text-slate-800 max-w-[230px] relative animate-in fade-in slide-in-from-bottom duration-300">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 p-1 text-slate-400 hover:text-slate-600"
            aria-label="Close message"
          >
            <X className="w-3 h-3" />
          </button>
          <div className="font-bold text-slate-900 mb-1">
            S&amp;D TVET Desk
          </div>
          <p className="text-slate-600 text-[11px] leading-tight">
            Have questions about CTVET accreditation? Chat directly with our consultants.
          </p>
        </div>
      )}

      {/* WHATSAPP ACTION BUTTON */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex items-center space-x-2.5 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-full shadow-xl transition-all duration-300 hover:scale-105 group border border-white/20"
      >
        <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
        <span className="text-xs sm:text-sm font-bold tracking-wide hidden sm:inline-block">
          Chat on WhatsApp
        </span>
      </a>
    </aside>
  );
}
