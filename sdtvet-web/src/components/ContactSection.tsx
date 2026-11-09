"use client";

import React, { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
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
    <section id="contact" className="py-20 lg:py-24 bg-slate-50 border-t border-slate-200 w-full bg-grid-subtle relative">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* SECTION HEADER */}
        <div className="w-full mb-12 flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-200">
          <div>
            <div className="inline-block px-3 py-1 rounded-md bg-white text-xs font-bold text-slate-800 uppercase tracking-wider mb-3 border border-slate-200 shadow-sm">
              Direct Institutional Advisory
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Start Your Accreditation Journey
            </h2>
          </div>
          <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
            Reach out to our specialist team today for senior advice on CTVET compliance, curriculum alignment, or new school setup.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start w-full">
          
          {/* LEFT: CORPORATE COORDINATES */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-xl p-7 border border-slate-200 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Headquarters &amp; Field Coordination
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">
                  Accra Corporate Office
                </h3>
              </div>

              <div className="space-y-4">
                {/* OFFICE LOCATION */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Physical Location
                  </h4>
                  <p className="text-sm font-semibold text-slate-800 mt-0.5">
                    {SITE_CONFIG.contact.address}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Accessible right behind Ecobank, Lapaz. Visitor parking available.
                  </p>
                </div>

                {/* PHONE NUMBERS */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Direct Consultation Hotlines
                  </h4>
                  <div className="flex flex-wrap gap-2 mt-1.5">
                    {SITE_CONFIG.contact.phones.map((phone, i) => (
                      <a
                        key={phone}
                        href={`tel:${phone}`}
                        className="text-xs font-bold px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 transition-colors"
                      >
                        {SITE_CONFIG.contact.phoneFormatted[i]}
                      </a>
                    ))}
                  </div>
                </div>

                {/* EMAIL */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Official Email
                  </h4>
                  <a
                    href={`mailto:${SITE_CONFIG.contact.email}`}
                    className="text-sm font-semibold text-[#00509d] hover:underline mt-0.5 inline-block"
                  >
                    {SITE_CONFIG.contact.email}
                  </a>
                </div>

                {/* OPERATING HOURS */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Operating Hours
                  </h4>
                  <p className="text-xs text-slate-700 mt-0.5">
                    {SITE_CONFIG.contact.hours}
                  </p>
                </div>
              </div>

              {/* WHATSAPP ACTION (ROUNDED-LG RECTANGULAR, NO PILL SHAPE) */}
              <div className="pt-4 border-t border-slate-100">
                <a
                  href={`https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=Hello%20S%26D%20TVET%20Consult%2C%20I%20would%20like%20to%20inquire%20about%20CTVET%20Accreditation%20services.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-5 py-3 rounded-lg text-xs font-bold text-white bg-[#00509d] hover:bg-[#003875] shadow transition-colors"
                >
                  <span>Chat on WhatsApp Directly</span>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: INTERACTIVE FORM (ROUNDED-XL, CLEAN NEUTRAL BORDERS) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-xl p-7 sm:p-8 border border-slate-200 shadow-sm">
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Preliminary Evaluation Request
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-0.5">
                  Send Us an Inquiry
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Our directors review every inquiry personally within 24 business hours.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-3">
                  <div className="w-12 h-12 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">
                    Inquiry Received, {formData.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out regarding <strong>{formData.service}</strong>. A consultant from S&amp;D TVET Consult will call or email you back shortly to coordinate next steps.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-3 px-4 py-2 rounded-lg text-xs font-bold text-slate-800 bg-white border border-slate-300 hover:bg-slate-50"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3.5 rounded-lg bg-red-50 border border-red-200 text-xs font-semibold text-red-700">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
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
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-[#00509d] transition-all bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Institution / School Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Accra Skills Academy"
                        value={formData.institution}
                        onChange={(e) =>
                          setFormData({ ...formData, institution: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-[#00509d] transition-all bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
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
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-[#00509d] transition-all bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
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
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-[#00509d] transition-all bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Primary Service Required
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-[#00509d] bg-white transition-all"
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
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Urgency Timeline
                      </label>
                      <select
                        value={formData.urgency}
                        onChange={(e) =>
                          setFormData({ ...formData, urgency: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-[#00509d] bg-white transition-all"
                      >
                        <option>Immediate (Inspection within 30 days)</option>
                        <option>Standard Review (1-3 Months)</option>
                        <option>New Institution Setup Planning</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Specific Requirements / Details
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Please mention your institution location, trade areas, and current accreditation status..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-[#00509d] transition-all bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-6 rounded-lg text-sm font-bold text-white bg-[#00509d] hover:bg-[#003875] shadow transition-colors flex items-center justify-center space-x-2"
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
