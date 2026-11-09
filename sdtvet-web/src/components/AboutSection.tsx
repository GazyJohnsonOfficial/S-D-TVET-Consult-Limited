import React from "react";
import Image from "next/image";
import { Check, Target, Compass, Sparkles, Shield, Award, Users } from "lucide-react";
import { LEADERSHIP } from "@/data/site-data";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white border-t border-slate-100 w-full relative">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* SECTION HEADER */}
        <div className="w-full mb-16 pb-6 border-b border-slate-100">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-xs font-bold text-[#00509d] uppercase tracking-wider mb-4 border border-blue-200/60">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Built on 8+ Years of Practical TVET Mastery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading">
            About S&amp;D TVET Consult Limited
          </h2>
          <p className="mt-4 text-base sm:text-lg lg:text-xl text-slate-600 max-w-4xl leading-relaxed">
            Officially established on March 21, 2024, S&amp;D TVET Consult Limited brings together a founding team with over 8 years of deep, hands-on operational leadership across Ghana&apos;s technical and vocational education sector.
          </p>
        </div>

        {/* 2-COLUMN STORY & MISSION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          
          {/* LEFT: STORY & PILLARS */}
          <div className="lg:col-span-7 space-y-7">
            <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              <p>
                We have accredited <strong>22+ institutions</strong>, trained over <strong>500 facilitators</strong>, and successfully managed major national interventions including the Ghana TVET Voucher Programme (GTVP) and Ghana Jobs and Skills Project (GJS-P).
              </p>
              <p>
                Our core philosophy blends rigorous regulatory knowledge of Ghana&apos;s Commission for TVET (CTVET) with practical on-the-ground support. We do not simply advise from afar; we embed alongside your administrative and pedagogical teams to guarantee institutional readiness and compliance.
              </p>
            </div>

            {/* MISSION & VISION CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50/80 to-white border border-blue-100/80 shadow-sm card-hover-lift">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00509d] to-[#00296b] text-white flex items-center justify-center mb-4 shadow-md shadow-blue-900/15">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1.5 font-heading">Our Mission</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  To position S&amp;D TVET Consult as the preeminent authority for CTVET accreditation, CBT curriculum alignment, and institutional governance across Ghana.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-50/80 to-white border border-amber-200/60 shadow-sm card-hover-lift">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 text-white flex items-center justify-center mb-4 shadow-md shadow-amber-900/15">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1.5 font-heading">Our Approach</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Collaborative, transparent, and results-focused. We support proprietors, instructors, NGOs, and corporate partners until full certification is achieved.
                </p>
              </div>
            </div>

            {/* KEY PRINCIPLES */}
            <div className="pt-2">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-800 mb-4 flex items-center space-x-2">
                <Shield className="w-4 h-4 text-[#00509d]" />
                <span>Why Institutions Choose S&amp;D TVET Consult:</span>
              </h4>
              <ul className="space-y-3.5 text-sm sm:text-base text-slate-600">
                <li className="flex items-start space-x-3.5 p-3 rounded-xl bg-slate-50/70 border border-slate-100">
                  <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4" />
                  </span>
                  <span><strong>100% CTVET Mandate Alignment</strong> — We prepare every document and audit directly according to the regulator&apos;s exact criteria.</span>
                </li>
                <li className="flex items-start space-x-3.5 p-3 rounded-xl bg-slate-50/70 border border-slate-100">
                  <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4" />
                  </span>
                  <span><strong>Complete Documentation Pack</strong> — Custom policies, student handbooks, governance charts, and health &amp; safety manuals.</span>
                </li>
                <li className="flex items-start space-x-3.5 p-3 rounded-xl bg-slate-50/70 border border-slate-100">
                  <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4" />
                  </span>
                  <span><strong>Mock Panel Coaching</strong> — Simulation sessions that prepare your instructors and leadership to answer review board questions with poise.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT: FEATURED IMAGE / CREDENTIAL SPOTLIGHT */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
              <div className="relative aspect-[4/3] bg-slate-100">
                <Image
                  src="/pics/4.jpeg"
                  alt="S&D TVET Consult Directors in strategic planning"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 700px"
                />
              </div>
              <div className="p-8 sm:p-9 bg-gradient-to-br from-slate-950 via-slate-900 to-[#001d4a] text-white">
                <div className="inline-flex items-center space-x-2 text-amber-400 text-xs font-bold uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full border border-amber-400/20">
                  <Award className="w-3.5 h-3.5" />
                  <span>Accreditation Guarantee</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mt-3 text-white font-heading">
                  Bridging Regulatory Standards &amp; Practical Execution
                </h3>
                <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                  Our directors maintain close professional collaboration with industry stakeholders and regulatory bodies, ensuring TVET institutes receive accurate, updated requirements without costly trial-and-error delays.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* LEADERSHIP SECTION */}
        <div className="border-t border-slate-200/80 pt-16 w-full">
          <div className="mb-12">
            <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#00509d] uppercase tracking-wider mb-2">
              <Users className="w-3.5 h-3.5" />
              <span>Executive Governance</span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-heading">
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
                className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row items-center sm:items-start space-y-5 sm:space-y-0 sm:space-x-6 card-shine"
              >
                <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-2xl overflow-hidden shadow-lg border-2 border-slate-100 flex-shrink-0 bg-slate-100 ring-4 ring-blue-50">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover object-top"
                    sizes="160px"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-blue-50 text-[10px] font-bold uppercase tracking-wider text-[#00509d] mb-1.5 border border-blue-200/60">
                    Co-Founder &amp; Director
                  </span>
                  <h4 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">{leader.name}</h4>
                  <div className="text-xs font-bold text-amber-600 tracking-wide uppercase mt-1 mb-3">
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
