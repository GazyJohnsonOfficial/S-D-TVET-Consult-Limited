"use client";

import React from "react";

export default function AccreditationProcess() {
  const steps = [
    {
      number: "01",
      phase: "Phase 1: Diagnostic",
      title: "Initial Diagnostic Audit",
      description: "Evaluating institutional ownership status, land title/lease documentation, and administrative baseline against CTVET prerequisites.",
      checkpoints: ["Legal registration check", "Staff records review", "Baseline gap analysis"]
    },
    {
      number: "02",
      phase: "Phase 2: Formulation",
      title: "Policy & Curricula Alignment",
      description: "Drafting custom governance frameworks, occupational safety guidelines, and aligning curriculum modules with CBT unit standards.",
      checkpoints: ["OHS safety manual", "CBT course modules", "Internal QA system"]
    },
    {
      number: "03",
      phase: "Phase 3: Readiness Audit",
      title: "Facility & Workshop Audit",
      description: "Onsite physical inspection and guidance on workshop dimensions, tool storage, safety equipment, ventilation, and power capacity.",
      checkpoints: ["Tooling inventory", "First aid & fire safety", "Sanitary facilities"]
    },
    {
      number: "04",
      phase: "Phase 4: Simulation",
      title: "Facilitator Panel Drills",
      description: "Intensive coaching and mock panel interviews preparing instructors and administrators to face the CTVET accreditation panel.",
      checkpoints: ["Mock panel sessions", "Pedagogical Q&A", "Evidence portfolio check"]
    },
    {
      number: "05",
      phase: "Phase 5: Award",
      title: "Official Inspection & Award",
      description: "Accompanying your leadership team during the official Commission for TVET visit to secure formal accreditation certification.",
      checkpoints: ["Onsite escort", "Final audit response", "Certificate issuance"]
    }
  ];

  return (
    <section id="accreditation" className="py-20 lg:py-24 bg-white border-t border-slate-200 w-full relative">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* SECTION HEADER */}
        <div className="w-full mb-14 flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-200">
          <div>
            <div className="inline-block px-3 py-1 rounded-md bg-slate-100 text-xs font-bold text-slate-800 uppercase tracking-wider mb-3 border border-slate-200">
              5-Stage Methodology
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              The Roadmap to CTVET Accreditation
            </h2>
          </div>
          <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
            We de-risk and simplify the accreditation process into clear, predictable stages with guaranteed compliance.
          </p>
        </div>

        {/* TIMELINE / PROCESS STEPS (CLEAN ARCHITECTURAL CARDS, NEUTRAL BORDERS) */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative w-full">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-slate-50 rounded-xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-slate-400">
                    {step.number}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-600 bg-white px-2 py-0.5 rounded border border-slate-200">
                    {step.phase}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {step.description}
                </p>

                {/* CHECKPOINTS */}
                <div className="pt-3 border-t border-slate-200 space-y-1.5">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Checklist Items:
                  </div>
                  {step.checkpoints.map((cp, cIdx) => (
                    <div key={cIdx} className="text-xs text-slate-700">
                      &bull; {cp}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-200 text-[11px] font-semibold text-slate-500">
                Stage Deliverable
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM ACCREDITATION BANNER */}
        <div className="mt-14 p-6 sm:p-8 rounded-xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-800">
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
            className="px-6 py-3 rounded-lg bg-[#00509d] hover:bg-[#003875] text-white text-xs sm:text-sm font-bold shadow transition-colors flex-shrink-0"
          >
            Schedule Diagnostic Review
          </a>
        </div>

      </div>
    </section>
  );
}
