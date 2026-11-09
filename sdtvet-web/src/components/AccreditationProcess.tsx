"use client";

import React from "react";
import { CheckCircle2, ClipboardCheck, BookOpen, Wrench, Users, Award, Clock, ArrowRight } from "lucide-react";

export default function AccreditationProcess() {
  const steps = [
    {
      number: "01",
      timeline: "Phase 1: Diagnostic",
      icon: <ClipboardCheck className="w-6 h-6 text-[#00509d]" />,
      title: "Initial Diagnostic Audit",
      description: "Evaluating institutional ownership status, land title/lease documentation, and administrative baseline against CTVET prerequisites.",
      checkpoints: ["Legal registration check", "Staff records review", "Baseline gap analysis"]
    },
    {
      number: "02",
      timeline: "Phase 2: Formulation",
      icon: <BookOpen className="w-6 h-6 text-[#00509d]" />,
      title: "Policy & Curricula Alignment",
      description: "Drafting custom governance frameworks, occupational safety guidelines, and aligning curriculum modules with CBT unit standards.",
      checkpoints: ["OHS safety manual", "CBT course modules", "Internal QA system"]
    },
    {
      number: "03",
      timeline: "Phase 3: Inspection Prep",
      icon: <Wrench className="w-6 h-6 text-[#00509d]" />,
      title: "Facility & Workshop Audit",
      description: "Onsite physical inspection and guidance on workshop dimensions, tool storage, safety equipment, ventilation, and power capacity.",
      checkpoints: ["Tooling inventory", "First aid & fire safety", "Sanitary facilities"]
    },
    {
      number: "04",
      timeline: "Phase 4: Simulation",
      icon: <Users className="w-6 h-6 text-[#00509d]" />,
      title: "Facilitator Panel Drills",
      description: "Intensive coaching and mock panel interviews preparing instructors and administrators to face the CTVET accreditation panel.",
      checkpoints: ["Mock panel sessions", "Pedagogical Q&A", "Evidence portfolio check"]
    },
    {
      number: "05",
      timeline: "Phase 5: Award",
      icon: <Award className="w-6 h-6 text-amber-500" />,
      title: "Official Inspection & Award",
      description: "Accompanying your leadership team during the official Commission for TVET visit to secure formal accreditation certification.",
      checkpoints: ["Onsite escort", "Final audit response", "Certificate issuance"]
    }
  ];

  return (
    <section id="accreditation" className="py-24 lg:py-32 bg-white border-t border-slate-100 w-full relative">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* SECTION HEADER */}
        <div className="w-full mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-slate-100">
          <div>
            <span className="text-xs font-bold text-[#00509d] uppercase tracking-wider block mb-2">
              Proven 5-Stage Framework
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              The Roadmap to CTVET Accreditation
            </h2>
          </div>
          <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
            We de-risk and simplify the accreditation process into clear, predictable stages with guaranteed compliance.
          </p>
        </div>

        {/* TIMELINE / PROCESS STEPS */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative w-full">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className="relative bg-slate-50/80 rounded-3xl p-7 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between card-hover-pro group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-slate-300 group-hover:text-[#00509d] transition-colors">
                    {step.number}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-200/80 flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>

                <span className="text-[11px] font-bold uppercase tracking-wider text-[#00509d] block mb-2">
                  {step.timeline}
                </span>

                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {step.description}
                </p>

                {/* CHECKPOINTS */}
                <div className="pt-3 border-t border-slate-200/60 space-y-1.5">
                  {step.checkpoints.map((cp, cIdx) => (
                    <div key={cIdx} className="flex items-center space-x-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                      <span>{cp}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-bold text-emerald-700">
                <span className="flex items-center space-x-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Deliverable</span>
                </span>
                <span className="text-slate-400 group-hover:text-[#00509d] transition-colors">
                  &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM ACCREDITATION BANNER */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold">
              Ready to start Phase 1 for your institution?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              We conduct a full diagnostic review of your school documentation in under 5 business days.
            </p>
          </div>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl bg-[#00509d] hover:bg-[#003875] text-white text-xs sm:text-sm font-bold shadow-md transition-colors flex-shrink-0"
          >
            Schedule Preliminary Audit
          </a>
        </div>

      </div>
    </section>
  );
}
