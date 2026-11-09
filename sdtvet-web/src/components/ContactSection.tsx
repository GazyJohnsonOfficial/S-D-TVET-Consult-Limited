"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  CheckCircle2,
  Sparkles,
  ShieldAlert,
  Building,
  HelpCircle,
} from "lucide-react";
import { SITE_CONFIG } from "@/data/site-data";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    institution: "",
    email: "",
    phone: "",
    service: "CTVET Accreditation Guidance",
    urgency: "Standard Review",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit inquiry.");
      }

      setSubmitted(true);
    } catch (err: any) {
      setErrorMessage(
        err.message || "Failed to send message. Please contact us directly via phone or WhatsApp."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-slate-50/70 border-t border-slate-200/80 w-full bg-grid-pattern relative">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* SECTION HEADER */}
        <div className="w-full mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-slate-200/80">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-100/70 text-xs font-bold text-[#00509d] uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Direct Institutional Advisory</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Start Your Accreditation Journey
            </h2>
          </div>
          <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
            Reach out to our specialist team today for senior advice on CTVET compliance, curriculum alignment, or new school setup.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start w-full">
          
          {/* LEFT: CORPORATE COORDINATES */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-8 sm:p-9 border border-slate-200 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                  Headquarters &amp; Field Coordination
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">
                  Accra Corporate Office
                </h3>
              </div>

              <div className="space-y-5">
                {/* OFFICE LOCATION */}
                <div className="flex items-start space-x-4">
                  <div className="w-11 h-11 rounded-2xl bg-blue-50 text-[#00509d] flex items-center justify-center flex-shrink-0 mt-0.5 border border-blue-100">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Physical Location
                    </h4>
                    <p className="text-base font-bold text-slate-800 mt-0.5">
                      {SITE_CONFIG.contact.address}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Accessible right behind Ecobank, Lapaz. Visitor parking available.
                    </p>
                  </div>
                </div>

                {/* PHONE NUMBERS */}
                <div className="flex items-start space-x-4">
                  <div className="w-11 h-11 rounded-2xl bg-blue-50 text-[#00509d] flex items-center justify-center flex-shrink-0 mt-0.5 border border-blue-100">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Direct Senior Consultation Hotlines
                    </h4>
                    <div className="flex flex-wrap gap-2.5 mt-2">
                      {SITE_CONFIG.contact.phones.map((phone, i) => (
                        <a
                          key={phone}
                          href={`tel:${phone}`}
                          className="inline-flex items-center text-xs sm:text-sm font-bold px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-blue-50 text-slate-800 hover:text-[#00509d] border border-slate-200 hover:border-blue-200 transition-all"
                        >
                          <Phone className="w-3.5 h-3.5 mr-1.5 text-emerald-600" />
                          <span>{SITE_CONFIG.contact.phoneFormatted[i]}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* EMAIL */}
                <div className="flex items-start space-x-4">
                  <div className="w-11 h-11 rounded-2xl bg-blue-50 text-[#00509d] flex items-center justify-center flex-shrink-0 mt-0.5 border border-blue-100">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Official Inquiries
                    </h4>
                    <a
                      href={`mailto:${SITE_CONFIG.contact.email}`}
                      className="text-base font-bold text-[#00509d] hover:underline mt-0.5 inline-block"
                    >
                      {SITE_CONFIG.contact.email}
                    </a>
                  </div>
                </div>

                {/* OPERATING HOURS */}
                <div className="flex items-start space-x-4">
                  <div className="w-11 h-11 rounded-2xl bg-blue-50 text-[#00509d] flex items-center justify-center flex-shrink-0 mt-0.5 border border-blue-100">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Operating Hours
                    </h4>
                    <p className="text-sm font-semibold text-slate-700 mt-0.5">
                      {SITE_CONFIG.contact.hours}
                    </p>
                  </div>
                </div>
              </div>

              {/* WHATSAPP INSTANT ACTION */}
              <div className="pt-4 border-t border-slate-100">
                <a
                  href={`https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=Hello%20S%26D%20TVET%20Consult%2C%20I%20would%20like%20to%20inquire%20about%20CTVET%20Accreditation%20services.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-6 py-4 rounded-2xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md transition-all duration-200 space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat with Consultants on WhatsApp (Fastest Response)</span>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: INTERACTIVE CONSULTATION QUESTIONNAIRE */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-lg">
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#00509d]">
                  Preliminary Evaluation Request
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">
                  Send Us an Inquiry
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  Our directors Derrick Darko and Stanley Kwame Adu review every inquiry personally within 24 business hours.
                </p>
              </div>

              {submitted ? (
                <div className="p-10 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-extrabold text-emerald-950">
                    Inquiry Received, {formData.name}!
                  </h4>
                  <p className="text-sm text-emerald-800 max-w-lg mx-auto leading-relaxed">
                    Thank you for reaching out regarding <strong>{formData.service}</strong>. A specialist from S&amp;D TVET Consult will call or email you back shortly to coordinate next steps.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-3 rounded-xl text-xs font-bold text-emerald-900 bg-white border border-emerald-300 hover:bg-emerald-50 shadow-sm"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {errorMessage && (
                    <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-xs font-semibold text-red-700 flex items-center space-x-2">
                      <ShieldAlert className="w-4 h-4 flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Contact Person Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Kwame Mensah"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#00509d]/30 focus:border-[#00509d] transition-all bg-slate-50/50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Institution / School Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Accra Skills Academy"
                        value={formData.institution}
                        onChange={(e) =>
                          setFormData({ ...formData, institution: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#00509d]/30 focus:border-[#00509d] transition-all bg-slate-50/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Official Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="yourname@domain.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#00509d]/30 focus:border-[#00509d] transition-all bg-slate-50/50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 050 334 7934"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#00509d]/30 focus:border-[#00509d] transition-all bg-slate-50/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Primary Service Required
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#00509d]/30 focus:border-[#00509d] bg-white transition-all"
                      >
                        <option>CTVET Accreditation Guidance</option>
                        <option>CBT Training &amp; Unit Standards Alignment</option>
                        <option>Policy Development &amp; Governance</option>
                        <option>Institutional Setup &amp; Facility Audit</option>
                        <option>Facilitator Recruitment &amp; Placement</option>
                        <option>Interview Coaching &amp; Panel Simulations</option>
                        <option>GTVP Voucher Program Advisory</option>
                        <option>Other / General Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Urgency Timeline
                      </label>
                      <select
                        value={formData.urgency}
                        onChange={(e) =>
                          setFormData({ ...formData, urgency: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#00509d]/30 focus:border-[#00509d] bg-white transition-all"
                      >
                        <option>Immediate (Upcoming CTVET Inspection within 30 days)</option>
                        <option>Standard Review (1-3 Months)</option>
                        <option>New Institution Setup Planning</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Specific Requirements / Details
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Please mention your institution's location, trade areas (e.g. Electricals, Fashion, Cosmetology), and what stage you are currently at..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#00509d]/30 focus:border-[#00509d] transition-all bg-slate-50/50"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 px-8 rounded-xl text-base font-bold text-white bg-gradient-to-r from-[#00509d] to-[#003875] hover:from-[#003875] hover:to-[#00296b] shadow-xl shadow-blue-900/15 transition-all flex items-center justify-center space-x-2"
                  >
                    {loading ? (
                      <span>Sending inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Consultation Request</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
