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
  ShieldCheck,
  Check,
} from "lucide-react";
import { SITE_CONFIG } from "@/data/site-data";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    institution: "",
    email: "",
    phone: "",
    service: "CTVET Accreditation Guidance",
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
    <section id="contact" className="py-24 lg:py-32 bg-slate-50/70 border-t border-slate-200/80 w-full relative">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* SECTION HEADER */}
        <div className="w-full mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-200/60">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-100/70 text-xs font-bold text-[#00509d] uppercase tracking-wider mb-4 border border-blue-200">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Direct Inquiries</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading">
              Start Your Accreditation Journey
            </h2>
          </div>
          <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
            Reach out to our specialist team today for advice on CTVET compliance, curriculum alignment, or school setup.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start w-full">
          
          {/* LEFT: CONTACT DETAILS & FAST CHANNELS */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-8 sm:p-9 border border-slate-200/90 shadow-md space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#00509d]">Headquarters</span>
                <h3 className="text-2xl font-bold text-slate-900 mt-1 font-heading">
                  Corporate Office
                </h3>
              </div>

              <div className="space-y-5">
                {/* OFFICE LOCATION */}
                <div className="flex items-start space-x-4">
                  <div className="w-11 h-11 rounded-2xl bg-blue-50 text-[#00509d] flex items-center justify-center flex-shrink-0 mt-0.5 border border-blue-100">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Office Location
                    </h4>
                    <p className="text-sm sm:text-base font-semibold text-slate-800 mt-0.5">
                      {SITE_CONFIG.contact.address}
                    </p>
                  </div>
                </div>

                {/* PHONE NUMBERS */}
                <div className="flex items-start space-x-4">
                  <div className="w-11 h-11 rounded-2xl bg-blue-50 text-[#00509d] flex items-center justify-center flex-shrink-0 mt-0.5 border border-blue-100">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Direct Phone Lines
                    </h4>
                    <div className="flex flex-wrap gap-2.5 mt-1.5">
                      {SITE_CONFIG.contact.phones.map((phone, i) => (
                        <a
                          key={phone}
                          href={`tel:${phone}`}
                          className="inline-flex items-center text-xs sm:text-sm font-bold px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-[#00509d] text-slate-800 hover:text-white transition-all shadow-sm"
                        >
                          <Phone className="w-3.5 h-3.5 mr-1.5" />
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
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Email Address
                    </h4>
                    <a
                      href={`mailto:${SITE_CONFIG.contact.email}`}
                      className="text-sm sm:text-base font-semibold text-[#00509d] hover:underline mt-0.5 inline-block"
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
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Business Hours
                    </h4>
                    <p className="text-sm sm:text-base text-slate-700 mt-0.5">
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
                  className="w-full inline-flex items-center justify-center px-5 py-4 rounded-2xl text-sm sm:text-base font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 shadow-lg shadow-emerald-900/15 transition-all space-x-2.5 card-shine"
                >
                  <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
                  <span>Chat on WhatsApp (Fastest Response)</span>
                </a>
              </div>
            </div>

            {/* TRUST REASSURANCE CARD */}
            <div className="bg-gradient-to-br from-blue-50/80 to-slate-50 rounded-3xl p-6 border border-blue-100 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-[#00509d] flex items-center space-x-1.5">
                <ShieldCheck className="w-4 h-4 text-[#00509d]" />
                <span>Consultation Guarantee</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Guaranteed response within 24 business hours.</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Direct consultation with founding directors Derrick &amp; Stanley.</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>100% confidential preliminary audit for TVET schools.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT: INTERACTIVE CONSULTATION FORM */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-2 font-heading">
                Send Us an Inquiry
              </h3>
              <p className="text-sm text-slate-500 mb-8">
                Fill out the form below and an accreditation specialist will get back to you promptly.
              </p>

              {submitted ? (
                <div className="p-10 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-emerald-950 font-heading">
                    Thank You, {formData.name}!
                  </h4>
                  <p className="text-sm sm:text-base text-emerald-800 max-w-lg mx-auto leading-relaxed">
                    Your inquiry regarding <strong>{formData.service}</strong> has been received. Our directors Derrick Darko and Stanley Kwame Adu will review your request and reach out promptly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-emerald-900 bg-white border border-emerald-300 hover:bg-emerald-50 shadow-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {errorMessage && (
                    <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-xs sm:text-sm font-semibold text-red-700">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Kwame Mensah"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-2xl border border-slate-300 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#00509d]/30 focus:border-[#00509d] shadow-sm transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Institution / Company Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Accra Skills Academy"
                        value={formData.institution}
                        onChange={(e) =>
                          setFormData({ ...formData, institution: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-2xl border border-slate-300 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#00509d]/30 focus:border-[#00509d] shadow-sm transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="yourname@domain.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-2xl border border-slate-300 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#00509d]/30 focus:border-[#00509d] shadow-sm transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 050 334 7934"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-2xl border border-slate-300 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#00509d]/30 focus:border-[#00509d] shadow-sm transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Service Required
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-2xl border border-slate-300 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#00509d]/30 focus:border-[#00509d] bg-white shadow-sm transition-all"
                    >
                      <option>CTVET Accreditation Guidance</option>
                      <option>CBT Training &amp; Unit Standards Alignment</option>
                      <option>Policy Development &amp; Governance</option>
                      <option>Institutional Setup &amp; Facility Inspection Audit</option>
                      <option>Facilitator Recruitment &amp; Placement</option>
                      <option>Interview Coaching &amp; Panel Simulations</option>
                      <option>GTVP Voucher Program Advisory</option>
                      <option>Other / General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Your Message or Questions
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Briefly describe your institution's current accreditation status or what you need assistance with..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-2xl border border-slate-300 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#00509d]/30 focus:border-[#00509d] shadow-sm transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 px-8 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-[#00509d] via-[#003875] to-[#00296b] hover:from-[#003f88] hover:to-[#001d4a] shadow-xl shadow-blue-900/20 transition-all flex items-center justify-center space-x-2.5 card-shine"
                  >
                    {loading ? (
                      <span>Submitting inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
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
