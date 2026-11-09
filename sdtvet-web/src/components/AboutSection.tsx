import React from "react";
import Image from "next/image";
import { Check, Target, Compass, Sparkles } from "lucide-react";
import { LEADERSHIP } from "@/data/site-data";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white border-t border-slate-100 w-full">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* SECTION HEADER */}
        <div className="w-full mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-xs font-bold text-[#00509d] uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Built on 8+ Years of Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            About S&amp;D TVET Consult Limited
          </h2>
          <p className="mt-4 text-base sm:text-lg lg:text-xl text-slate-600 max-w-4xl leading-relaxed">
            Officially established on March 21, 2024, S&amp;D TVET Consult Limited brings together a founding team with over 8 years of deep, hands-on operational leadership across Ghana&apos;s technical and vocational education sector.
          </p>
        </div>

        {/* 2-COLUMN STORY & MISSION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          
          {/* LEFT: STORY & PILLARS */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              <p>
                We have accredited <strong>22+ institutions</strong>, trained over <strong>500 facilitators</strong>, and successfully managed major national interventions including the Ghana TVET Voucher Programme (GTVP) and Ghana Jobs and Skills Project (GJS-P).
              </p>
              <p>
                Our core philosophy blends rigorous regulatory knowledge of Ghana&apos;s Commission for TVET (CTVET) with practical on-the-ground support. We do not simply advise from afar; we embed alongside your administrative and pedagogical teams to guarantee institutional readiness and compliance.
              </p>
            </div>

            {/* MISSION & VISION CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-3">
              <div className="p-6 rounded-2xl bg-blue-50/70 border border-blue-100">
                <div className="w-10 h-10 rounded-xl bg-[#00509d] text-white flex items-center justify-center mb-3.5">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1.5">Our Mission</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  To position S&amp;D TVET Consult as the preeminent authority for CTVET accreditation, CBT curriculum alignment, and institutional governance across Ghana.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-amber-50/70 border border-amber-100">
                <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center mb-3.5">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1.5">Our Approach</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Collaborative, transparent, and results-focused. We support proprietors, instructors, NGOs, and corporate partners until full certification is achieved.
                </p>
              </div>
            </div>

            {/* KEY PRINCIPLES */}
            <div className="pt-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-700 mb-3.5">
                Why Institutions Choose S&amp;D:
              </h4>
              <ul className="space-y-3 text-sm sm:text-base text-slate-600">
                <li className="flex items-start space-x-3">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span>100% compliance audit alignment with CTVET official mandates and checklists.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span>Comprehensive documentation readiness: Governance, Health &amp; Safety, and Curricula.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span>Facilitator coaching and simulated panel interviews before the official review.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT: FEATURED IMAGE / CREDENTIAL SPOTLIGHT */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200">
              <div className="relative aspect-[4/3] bg-slate-100">
                <Image
                  src="/pics/4.jpeg"
                  alt="S&D TVET Consult Directors in strategic planning"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 700px"
                />
              </div>
              <div className="p-8 bg-slate-900 text-white">
                <div className="flex items-center space-x-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                  <span>Accreditation Guarantee</span>
                </div>
                <h3 className="text-xl font-bold mt-2 text-white">
                  Bridging Regulatory Standards &amp; Practical Execution
                </h3>
                <p className="text-sm text-slate-300 mt-2.5 leading-relaxed">
                  Our directors maintain close professional collaboration with industry stakeholders and regulatory bodies, ensuring TVET institutes receive accurate, updated requirements without costly trial-and-error delays.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* LEADERSHIP SECTION */}
        <div className="border-t border-slate-200/80 pt-16 w-full">
          <div className="mb-12">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900">
              Meet Our Leadership
            </h3>
            <p className="text-base text-slate-600 mt-2 max-w-2xl">
              Guided by dedicated professionals who live and breathe Ghana&apos;s TVET ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {LEADERSHIP.map((leader) => (
              <div
                key={leader.name}
                className="bg-slate-50/70 rounded-2xl p-7 border border-slate-200 flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 card-hover-lift"
              >
                <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden shadow-md border-2 border-white flex-shrink-0 bg-slate-200">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover object-top"
                    sizes="144px"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <h4 className="text-xl font-bold text-slate-900">{leader.name}</h4>
                  <div className="text-xs font-bold text-[#00509d] tracking-wider uppercase mt-1 mb-2.5">
                    {leader.role}
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {leader.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

