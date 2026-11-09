"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { SERVICES, Service } from "@/data/site-data";

export default function ServicesSection() {
  const getDeliverables = (id: string) => {
    switch (id) {
      case "ctvet-accreditation":
        return ["Full document dossier prep", "Physical facility readiness audit", "Official panel inspection escort"];
      case "policy-development":
        return ["Custom governance manuals", "Occupational Health & Safety (OHS)", "Student & staff codes of conduct"];
      case "cbt-training":
        return ["CBT unit standard alignment", "Trainee portfolio evidence guides", "Internal verification training"];
      case "facilitator-recruitment":
        return ["Vetted technical instructors", "Background credential validation", "Subject-matter interview screening"];
      case "institutional-setup":
        return ["Workshop tool inventory audit", "Classroom space & lighting checks", "Safety signage & fire protocols"];
      case "interview-prep":
        return ["Realistic panel simulations", "CTVET Q&A mastery drills", "Confidence & presentation coaching"];
      case "tvet-research":
        return ["Regional skills demand mapping", "Feasibility & expansion reports", "Labour market integration analysis"];
      case "institutional-management":
        return ["Operational KPI frameworks", "Student enrollment funnels", "Board & administrative governance"];
      case "project-management":
        return ["National GTVP grant compliance", "Quarterly audit & trainee tracking", "Government voucher claims"];
      default:
        return ["Custom scope definition", "Structured milestone deliverables", "Full regulatory sign-off"];
    }
  };

  return (
    <section id="services" className="py-20 lg:py-24 bg-slate-50 border-t border-slate-200 w-full bg-grid-subtle">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* SECTION HEADER */}
        <div className="w-full mb-14 flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-200">
          <div>
            <div className="inline-block px-3 py-1 rounded-md bg-white text-xs font-bold text-slate-800 uppercase tracking-wider mb-3 border border-slate-200 shadow-sm">
              TVET Consultancy Services
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Comprehensive TVET Solutions
            </h2>
          </div>
          <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
            From initial registration and facility inspection to long-term institutional management, we deliver end-to-end guidance tailored for TVET schools across Ghana.
          </p>
        </div>

        {/* SERVICES GRID (CLEAN NEUTRAL BORDERS, NO COLOR BORDERS) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
          {SERVICES.map((service: Service, index: number) => {
            const deliverables = getDeliverables(service.id);
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between card-hover"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-slate-400">
                      0{index + 1}
                    </span>
                    {service.featured && (
                      <span className="text-[11px] font-semibold uppercase tracking-wider bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-md border border-slate-200">
                        Primary Package
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* STRUCTURED DELIVERABLES WITHOUT ICON SPAM */}
                  <div className="pt-4 border-t border-slate-100 mb-6">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                      Included Deliverables:
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-700 list-disc list-inside">
                      {deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="leading-snug">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href="#contact"
                    className="text-xs font-bold text-[#00509d] hover:text-[#00296b] flex items-center group"
                  >
                    <span>Request Quotation</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM CALLOUT BANNER (ROUNDED-2XL, NO PILL SHAPE, NO PURPLE GRADIENT) */}
        <div className="mt-14 bg-slate-900 rounded-2xl p-8 sm:p-10 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800">
          <div className="space-y-2 text-center md:text-left">
            <span className="inline-block px-2.5 py-0.5 rounded bg-slate-800 text-slate-300 text-[11px] font-bold uppercase tracking-wider border border-slate-700">
              Preliminary Evaluation
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Unsure which TVET package fits your institution?
            </h3>
            <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
              Schedule a preliminary audit with our senior directors to benchmark your documentation, workshop tooling, and curriculum readiness against CTVET criteria.
            </p>
          </div>
          
          <a
            href="#contact"
            className="px-6 py-3.5 rounded-lg bg-[#00509d] hover:bg-[#003875] text-white font-bold text-sm shadow transition-colors flex-shrink-0"
          >
            Request Preliminary Audit
          </a>
        </div>

      </div>
    </section>
  );
}
