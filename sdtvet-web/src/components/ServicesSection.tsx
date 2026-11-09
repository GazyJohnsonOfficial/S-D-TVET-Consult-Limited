"use client";

import React from "react";
import {
  Award,
  FileText,
  GraduationCap,
  Users,
  Building,
  UserCheck,
  BarChart,
  Briefcase,
  Layers,
  ArrowRight,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import { SERVICES, Service } from "@/data/site-data";

export default function ServicesSection() {
  const getIcon = (iconName: string) => {
    const props = { className: "w-6 h-6" };
    switch (iconName) {
      case "Award":
        return <Award {...props} />;
      case "FileText":
        return <FileText {...props} />;
      case "GraduationCap":
        return <GraduationCap {...props} />;
      case "Users":
        return <Users {...props} />;
      case "Building":
        return <Building {...props} />;
      case "UserCheck":
        return <UserCheck {...props} />;
      case "BarChart":
        return <BarChart {...props} />;
      case "Briefcase":
        return <Briefcase {...props} />;
      case "Layers":
        return <Layers {...props} />;
      default:
        return <Award {...props} />;
    }
  };

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
    <section id="services" className="py-24 lg:py-32 bg-slate-50/70 border-t border-slate-200/80 w-full bg-dot-pattern">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* SECTION HEADER */}
        <div className="w-full mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-slate-200/80">
          <div>
            <div className="text-xs sm:text-sm font-bold text-[#00509d] uppercase tracking-wider mb-2">
              Our Capabilities &bull; Full-Spectrum TVET Solutions
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Comprehensive TVET Solutions
            </h2>
          </div>
          <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
            From initial registration and facility inspection to long-term institutional management, we deliver end-to-end guidance tailored for TVET schools across Ghana.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {SERVICES.map((service: Service, index: number) => {
            const deliverables = getDeliverables(service.id);
            return (
              <div
                key={service.id}
                className={`bg-white rounded-3xl p-8 border transition-all duration-300 card-hover-pro flex flex-col justify-between relative overflow-hidden ${
                  service.featured
                    ? "border-[#00509d]/40 shadow-lg ring-1 ring-[#00509d]/15"
                    : "border-slate-200 shadow-sm"
                }`}
              >
                {/* TOP ACCENT LINE */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1.5 ${
                    service.featured
                      ? "bg-gradient-to-r from-amber-400 via-[#00509d] to-[#00296b]"
                      : "bg-slate-200"
                  }`}
                />

                <div>
                  <div className="flex items-center justify-between mb-6 pt-2">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm ${
                        service.featured
                          ? "bg-[#00509d] text-white shadow-blue-900/20"
                          : "bg-blue-50 text-[#00509d] border border-blue-100"
                      }`}
                    >
                      {getIcon(service.icon)}
                    </div>
                    {service.featured ? (
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                        Priority Service
                      </span>
                    ) : (
                      <span className="text-xs font-mono font-bold text-slate-400">
                        #{String(index + 1).padStart(2, "0")}
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* STRUCTURED DELIVERABLES */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-slate-100">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Key Package Deliverables:
                    </div>
                    {deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-center space-x-2 text-xs text-slate-700">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href="#contact"
                    className="text-xs sm:text-sm font-bold text-[#00509d] hover:text-[#00296b] flex items-center group"
                  >
                    <span>Request Quotation &amp; Scope</span>
                    <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM CALLOUT BANNER */}
        <div className="mt-16 bg-gradient-to-r from-[#00296b] via-[#003f88] to-[#00509d] rounded-3xl p-10 lg:p-14 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10 relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="space-y-3 text-center md:text-left relative z-10">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-300">
              No Obligation Diagnostic
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
              Unsure which TVET package fits your institution?
            </h3>
            <p className="text-base text-blue-100 max-w-2xl leading-relaxed">
              Schedule a preliminary audit with our senior directors to benchmark your documentation, workshop tooling, and curriculum readiness against CTVET criteria.
            </p>
          </div>
          
          <a
            href="#contact"
            className="px-8 py-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-base shadow-lg hover:shadow-xl transition-all duration-200 flex-shrink-0 relative z-10"
          >
            Request Free Audit Session
          </a>
        </div>

      </div>
    </section>
  );
}
