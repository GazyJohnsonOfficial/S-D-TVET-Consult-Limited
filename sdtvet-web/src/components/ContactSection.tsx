"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Building,
  ShieldCheck,
  FileText,
  Calendar,
  AlertCircle,
  ArrowRight,
} from "lucide-react";
import { SITE_CONFIG } from "@/data/site-data";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    institution: "",
    email: "",
    phone: "",
    region: "Greater Accra",
    service: "CTVET Accreditation Guidance",
    urgency: "Standard Review (1-3 Months)",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const consultationPillars = [
    {
      title: "Confidential Regulatory Review",
      description: "Direct evaluation of institutional records against CTVET Act requirements.",
      icon: <ShieldCheck className="w-5 h-5 text-[#00509d]" />,
    },
    {
      title: "Turnaround in 48 Hours",
      description: "Our directorship reviews and responds with structured next steps.",
      icon: <Clock className="w-5 h-5 text-[#00509d]" />,
    },
    {
      title: "Full Checklist Diagnostic",
      description: "Identification of physical facility, tooling, and curricula deficiencies.",
      icon: <FileText className="w-5 h-5 text-[#00509d]" />,
    },
  ];

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
    } catch (err) {
      setErrorMessage(
        err instanceof Error ? err.message : "Failed to submit inquiry. Please reach out via our direct phone lines."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-12 lg:py-16 bg-white border-t border-slate-200/80 w-full relative">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* REDESIGNED EXECUTIVE HEADER */}
        <div className="w-full mb-10 pb-6 border-b border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-wider text-[#00509d] block mb-2">
                Executive Consultation &bull; Commission for TVET Advisory
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Accreditation &amp; Institutional Advisory
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-base text-slate-600 leading-relaxed">
                Connect directly with our senior directors for statutory guidance on CTVET compliance audits, CBT curriculum accreditation, and institutional governance setup in Ghana.
              </p>
            </div>
          </div>
        </div>

        {/* 3 VALUE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {consultationPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 flex items-start space-x-4"
            >
              <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 shadow-xs">
                {pillar.icon}
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900 mb-1">
                  {pillar.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* MAIN SPLIT: CORPORATE COORDINATES & STRUCTURED CONSULTATION FORM */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start w-full">
          
          {/* LEFT: FORMAL CORPORATE INFORMATION */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-50 rounded-2xl p-8 sm:p-9 border border-slate-200 space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#00509d] block mb-1">
                  Registered Head Office
                </span>
                <h3 className="text-2xl font-bold text-slate-900">
                  Accra Operational Base
                </h3>
              </div>

              <div className="space-y-6">
                {/* OFFICE LOCATION */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-[#00509d] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Physical Location
                    </h4>
                    <p className="text-base font-semibold text-slate-900 mt-0.5">
                      {SITE_CONFIG.contact.address}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      Located behind Papaye, Lapaz, Accra. Secured on-premise parking.
                    </p>
                  </div>
                </div>

                {/* PHONE NUMBERS */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-[#00509d] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Direct Advisory Lines
                    </h4>
                    <div className="flex flex-wrap gap-2.5 mt-2">
                      {SITE_CONFIG.contact.phones.map((phone, i) => (
                        <a
                          key={phone}
                          href={`tel:${phone}`}
                          className="inline-flex items-center text-xs sm:text-sm font-bold px-3.5 py-2 rounded-xl bg-white hover:bg-blue-50 text-slate-800 hover:text-[#00509d] border border-slate-200/90 transition-all shadow-xs"
                        >
                          <Phone className="w-3.5 h-3.5 mr-1.5 text-slate-500" />
                          <span>{SITE_CONFIG.contact.phoneFormatted[i]}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* EMAIL */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-[#00509d] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Official Written Correspondence
                    </h4>
                    <a
                      href={`mailto:${SITE_CONFIG.contact.email}`}
                      className="text-base font-semibold text-[#00509d] hover:underline mt-0.5 inline-block"
                    >
                      {SITE_CONFIG.contact.email}
                    </a>
                  </div>
                </div>

                {/* OPERATING HOURS */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-[#00509d] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Consultation Hours
                    </h4>
                    <p className="text-sm font-semibold text-slate-800 mt-0.5">
                      {SITE_CONFIG.contact.hours}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Weekend field inspection audits scheduled upon institutional request.
                    </p>
                  </div>
                </div>
              </div>

              {/* STATUTORY REGISTRATION BADGE */}
              <div className="pt-6 border-t border-slate-200 flex items-center space-x-3 text-xs text-slate-600">
                <Building className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <span>Incorporated under the Companies Act, 2019 (Act 992) &bull; Ghana</span>
              </div>
            </div>
          </div>

          {/* RIGHT: STRUCTURED ACCREDITATION INQUIRY FORM */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-sm">
              <div className="mb-8 pb-6 border-b border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900">
                  Request an Accreditation Review
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Complete the institutional profile below. Our directors review each submission to evaluate qualification readiness.
                </p>
              </div>

              {submitted ? (
                <div className="p-10 rounded-2xl bg-emerald-50 border border-slate-200 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-2xl font-bold text-emerald-950">
                    Inquiry Successfully Registered
                  </h4>
                  <p className="text-sm text-emerald-800 max-w-lg mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. Your consultation request for <strong>{formData.service}</strong> has been logged. Our directors Derrick Darko and Stanley Kwame Adu will review your details and reach out within 24 to 48 business hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-lg text-xs font-bold text-emerald-900 bg-white border border-slate-200 hover:bg-slate-50 shadow-xs transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMessage && (
                    <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-xs font-semibold text-red-700 flex items-center space-x-2">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                        Authorized Contact Person *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Mr. Kwame Mensah"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#00509d]/30 focus:border-[#00509d] transition-all bg-slate-50/50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                        Name of TVET Institution *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Accra Technical & Vocational Academy"
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
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                        Official Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="principal@institution.edu.gh"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#00509d]/30 focus:border-[#00509d] transition-all bg-slate-50/50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                        Telephone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="050 334 7934"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#00509d]/30 focus:border-[#00509d] transition-all bg-slate-50/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                        Region
                      </label>
                      <select
                        value={formData.region}
                        onChange={(e) =>
                          setFormData({ ...formData, region: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#00509d]/30 focus:border-[#00509d] bg-white transition-all"
                      >
                        <option>Greater Accra</option>
                        <option>Ashanti</option>
                        <option>Bono East / Bono</option>
                        <option>Central</option>
                        <option>Western</option>
                        <option>Savannah / Northern</option>
                        <option>Eastern</option>
                        <option>Volta</option>
                        <option>Other Region</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                        Core Service Scope
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
                        <option>Institutional Policy Formulation</option>
                        <option>Physical Facility &amp; Tooling Inspection Audit</option>
                        <option>Facilitator Recruitment &amp; Coaching</option>
                        <option>GTVP Voucher Grant Management</option>
                        <option>Turnkey Institutional Setup</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                        Review Urgency
                      </label>
                      <select
                        value={formData.urgency}
                        onChange={(e) =>
                          setFormData({ ...formData, urgency: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#00509d]/30 focus:border-[#00509d] bg-white transition-all"
                      >
                        <option>Standard Review (1-3 Months)</option>
                        <option>Urgent Audit (Panel Visit within 30 Days)</option>
                        <option>Long-Term Planning &amp; Setup</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                      Institutional Scope &amp; Trade Areas
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Briefly state the vocational trade areas (e.g. Cosmetology, Electricals, Fashion, Catering), number of facilitators, and current registration status with CTVET..."
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
                    className="w-full py-4 px-8 rounded-xl text-base font-bold text-white bg-[#00509d] hover:bg-[#003875] shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2"
                  >
                    {loading ? (
                      <span>Transmitting consultation request...</span>
                    ) : (
                      <>
                        <span>Submit Formal Consultation Request</span>
                        <ArrowRight className="w-4 h-4 ml-2" />
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
