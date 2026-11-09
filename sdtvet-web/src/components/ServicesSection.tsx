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

  return (
    <section id="services" className="py-24 lg:py-32 bg-slate-50/70 border-t border-slate-200/80 w-full relative">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* SECTION HEADER */}
        <div className="w-full mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-200/60">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-100/70 text-xs font-bold text-[#00509d] uppercase tracking-wider mb-4 border border-blue-200">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Our Practice Areas</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading">
              Comprehensive TVET Solutions
            </h2>
          </div>
          <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
            From initial registration and facility inspection to long-term institutional management, we deliver end-to-end guidance tailored for TVET schools across Ghana.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {SERVICES.map((service: Service) => (
            <div
              key={service.id}
              className={`bg-white rounded-3xl p-8 border transition-all duration-300 card-hover-lift flex flex-col justify-between relative group ${
                service.featured
                  ? "border-[#00509d]/40 shadow-lg shadow-blue-900/5 ring-1 ring-[#00509d]/20"
                  : "border-slate-200/90 shadow-sm"
              }`}
            >
              {service.featured && (
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#00509d] via-blue-500 to-amber-400 rounded-t-3xl" />
              )}

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-200 group-hover:scale-110 ${
                      service.featured
                        ? "bg-gradient-to-br from-[#00509d] to-[#00296b] text-white shadow-md shadow-blue-900/20"
                        : "bg-blue-50 text-[#00509d] border border-blue-100"
                    }`}
                  >
                    {getIcon(service.icon)}
                  </div>
                  {service.featured && (
                    <span className="text-[11px] font-bold tracking-wider uppercase bg-amber-100 text-amber-800 px-3 py-1 rounded-full border border-amber-300">
                      Core Flagship
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#00509d] transition-colors font-heading">
                  {service.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {service.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <a
                  href="#contact"
                  className="text-xs sm:text-sm font-bold text-[#00509d] group-hover:text-[#00296b] flex items-center group/btn"
                >
                  <span>Inquire About This Service</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM CALLOUT BANNER */}
        <div className="mt-16 bg-gradient-to-br from-[#001d4a] via-[#00296b] to-[#00509d] rounded-3xl p-10 lg:p-14 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden card-shine">
          <div className="space-y-3 text-center md:text-left relative z-10">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-amber-400">
              Accreditation Readiness Audit
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading">
              Unsure which TVET package fits your institution?
            </h3>
            <p className="text-sm sm:text-base text-blue-100 max-w-2xl leading-relaxed">
              Schedule a preliminary audit with our specialists to assess your documentation, workshop tools, and curriculum readiness.
            </p>
          </div>
          <a
            href="#contact"
            className="px-8 py-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm sm:text-base shadow-xl transition-all hover:scale-105 flex-shrink-0 relative z-10"
          >
            Request Free Audit Session
          </a>
        </div>

      </div>
    </section>
  );
}
