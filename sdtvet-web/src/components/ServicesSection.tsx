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
    <section id="services" className="py-24 lg:py-32 bg-slate-50/70 border-t border-slate-200/80 w-full">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* SECTION HEADER */}
        <div className="w-full mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-200/60">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-100/70 text-xs font-bold text-[#00509d] uppercase tracking-wider mb-4">
              <span>Our Expertise</span>
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
          {SERVICES.map((service: Service) => (
            <div
              key={service.id}
              className={`bg-white rounded-2xl p-7 border transition-all duration-300 card-hover-lift flex flex-col justify-between ${
                service.featured
                  ? "border-[#00509d]/30 shadow-md ring-1 ring-[#00509d]/10"
                  : "border-slate-200/80 shadow-sm"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      service.featured
                        ? "bg-[#00509d] text-white"
                        : "bg-blue-50 text-[#00509d]"
                    }`}
                  >
                    {getIcon(service.icon)}
                  </div>
                  {service.featured && (
                    <span className="text-[11px] font-bold tracking-wider uppercase bg-amber-100 text-amber-800 px-2.5 py-1 rounded-full">
                      Core Flagship
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2.5">
                  {service.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <a
                  href="#contact"
                  className="text-xs font-semibold text-[#00509d] hover:text-[#00296b] flex items-center group"
                >
                  <span>Inquire About This Service</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM CALLOUT BANNER */}
        <div className="mt-16 bg-gradient-to-r from-[#00509d] to-[#00296b] rounded-2xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold">
              Unsure which TVET package fits your institution?
            </h3>
            <p className="text-sm text-blue-100 max-w-xl">
              Schedule a preliminary audit with our specialists to assess your documentation, workshop tools, and curriculum readiness.
            </p>
          </div>
          <a
            href="#contact"
            className="px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm shadow-md transition-colors flex-shrink-0"
          >
            Request Free Audit Session
          </a>
        </div>

      </div>
    </section>
  );
}

