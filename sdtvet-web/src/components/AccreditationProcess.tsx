import React from "react";
import { CheckCircle2, ClipboardCheck, BookOpen, Wrench, Users, Award, ArrowRight } from "lucide-react";

export default function AccreditationProcess() {
  const steps = [
    {
      number: "01",
      icon: <ClipboardCheck className="w-6 h-6 text-[#00509d]" />,
      title: "Initial Diagnostic Audit",
      description: "We evaluate your school's current documentation, ownership status, and administrative baseline against CTVET prerequisites."
    },
    {
      number: "02",
      icon: <BookOpen className="w-6 h-6 text-[#00509d]" />,
      title: "Policy & Curricula Alignment",
      description: "Drafting custom governance frameworks, occupational safety regulations, and CBT curriculum standards required by the regulator."
    },
    {
      number: "03",
      icon: <Wrench className="w-6 h-6 text-[#00509d]" />,
      title: "Facility & Workshop Verification",
      description: "Onsite inspection and advisory on classroom dimensions, workshop equipment, safety protocols, and sanitary infrastructure."
    },
    {
      number: "04",
      icon: <Users className="w-6 h-6 text-[#00509d]" />,
      title: "Facilitator Coaching & Mock Panels",
      description: "Preparing your instructors and administrators with rigorous mock interviews to confidently demonstrate competency."
    },
    {
      number: "05",
      icon: <Award className="w-6 h-6 text-amber-500" />,
      title: "CTVET Panel Inspection & Award",
      description: "Accompanying your leadership through the formal verification visit to secure full accredited status."
    }
  ];

  return (
    <section id="accreditation" className="py-24 lg:py-32 bg-white border-t border-slate-100 w-full relative">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* SECTION HEADER */}
        <div className="w-full mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-xs font-bold text-emerald-700 uppercase tracking-wider mb-4 border border-emerald-200">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Proven 5-Stage Framework</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading">
              The Roadmap to CTVET Accreditation
            </h2>
          </div>
          <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
            We de-risk and simplify the accreditation journey into clear, manageable steps with zero guesswork.
          </p>
        </div>

        {/* TIMELINE / PROCESS STEPS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative w-full">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className="relative bg-gradient-to-b from-slate-50 to-white rounded-3xl p-7 border border-slate-200/90 shadow-sm flex flex-col justify-between card-hover-lift group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-3xl font-black text-slate-300 font-heading group-hover:text-[#00509d] transition-colors">
                    {step.number}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-md border border-slate-200/80 flex items-center justify-center transition-transform group-hover:scale-110">
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2.5 font-heading">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-700">
                <span className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Verified Step</span>
                </span>
                {idx < steps.length - 1 && (
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 hidden lg:block" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* SUMMARY STATS & GUARANTEE */}
        <div className="mt-14 p-6 rounded-2xl bg-blue-50/60 border border-blue-100 text-center text-sm sm:text-base text-slate-600 max-w-4xl mx-auto">
          Over <span className="font-extrabold text-[#00509d]">22 institutions</span> across Greater Accra, Ashanti, Bono East, Central, and Savannah regions have achieved successful accreditation with this system.
        </div>

      </div>
    </section>
  );
}
