"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { SITE_CONFIG } from "@/data/site-data";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=Hello%20S%26D%20TVET%20Consult%2C%20I%20would%20like%20to%20inquire%20about%20your%20CTVET%20Accreditation%20and%20consultancy%20services.`;

  return (
    <aside aria-label="Quick WhatsApp consultation" className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-2">
      {/* CHAT PROMPT TOOLTIP */}
      {showTooltip && (
        <div className="bg-white rounded-lg p-3 shadow-xl border border-slate-200 text-xs text-slate-800 max-w-[240px] relative">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-1.5 right-1.5 p-1 text-slate-400 hover:text-slate-600 rounded"
            aria-label="Close message"
          >
            <X className="w-3 h-3" />
          </button>
          <div className="font-bold text-slate-900 mb-0.5">S&amp;D TVET Support</div>
          <p className="text-slate-600 text-[11px] leading-tight">
            Have questions about CTVET accreditation? Chat with our consultants directly.
          </p>
        </div>
      )}

      {/* RECTANGULAR WHATSAPP BUTTON (NO PILL SHAPE) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-lg shadow-lg transition-colors border border-emerald-500 font-semibold text-xs sm:text-sm"
      >
        <MessageCircle className="w-4 h-4 fill-white" />
        <span>Chat on WhatsApp</span>
      </a>
    </aside>
  );
}
