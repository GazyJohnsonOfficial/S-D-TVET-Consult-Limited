import React from "react";
import Image from "next/image";
import { Check, Target, Shield, Users2, Building } from "lucide-react";
import { LEADERSHIP, SITE_CONFIG } from "@/data/site-data";

export default function AboutSection() {
  return (
    <section id="about" className="py-12 lg:py-16 bg-white border-t border-slate-100 w-full relative">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* SECTION HEADER */}
        <div className="w-full mb-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-100">
          <div>
            <div className="text-xs sm:text-sm font-bold text-[#00509d] uppercase tracking-wider mb-2">
              Established 2024 &bull; {SITE_CONFIG.metrics[2].value} Years of Team Experience
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              About S&amp;D TVET Consult Limited
            </h2>
          </div>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
            Officially established on March 21, 2024, S&amp;D TVET Consult Limited unites Ghana&apos;s leading practitioners in TVET policy, institutional accreditation, and national voucher initiatives.
          </p>
        </div>

        {/* 2-COLUMN STORY & CREDENTIALS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start mb-14">
          
          {/* LEFT: STORY & PILLARS */}
          <div className="lg:col-span-7 space-y-7">
            <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              <p>
                Our founders and consultant network bring over <strong>{SITE_CONFIG.metrics[2].value} years of frontline TVET leadership</strong>. They have supported <strong>{SITE_CONFIG.metrics[0].value} institutions</strong> across Greater Accra, Ashanti, Bono East, Central, Savannah, and Western regions through the accreditation process.
              </p>
              <p>
                We do not deliver theoretical slide decks. Our team visits your premises, reviews workshop machinery and safety features against CTVET guidelines, standardizes governance documents, and conducts simulated panel interviews to help your facilitators approach Commission panels with confidence.
              </p>
            </div>

            {/* MISSION & VISION CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-[#00509d] text-white flex items-center justify-center mb-4 shadow-md">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Our Mission</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  To serve as Ghana&apos;s premier authority for CTVET accreditation, competency-based curricula alignment, and TVET school operational excellence.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center mb-4 shadow-md">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Our Method</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Practical, transparent, and focused on preparing institutions for CTVET assessment. We work alongside proprietors, principals, and teachers through each stage of the accreditation process.
                </p>
              </div>
            </div>

            {/* WHY INSTITUTIONS CHOOSE S&D */}
            <div className="pt-2">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4">
                Core Advantages of S&amp;D TVET Consult:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  "CTVET checklist review and audit preparation",
                  "Turnkey governance, safety, & academic policies",
                  "Facilitator interview coaching & mock drills",
                  "Curriculum alignment with National CBT unit standards",
                  "GTVP & GJS-P voucher management expertise",
                  "Continuous post-accreditation support & renewals"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3 p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: PHOTO SPOTLIGHT & REGULATORY SEAL */}
          <div className="lg:col-span-5 w-full space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-lg bg-slate-900">
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
                  <Shield className="w-4 h-4" />
                  <span>Accreditation Guidance</span>
                </div>
                <h3 className="text-xl font-bold mt-2 text-white">
                  Bridging Regulatory Mandates &amp; Practical Execution
                </h3>
                <p className="text-sm text-slate-300 mt-2.5 leading-relaxed">
                  Our directors maintain close professional dialogue with Ghana&apos;s educational authorities, ensuring your TVET establishment receives clear, up-to-date guidance without costly false starts.
                </p>
              </div>
            </div>

            {/* CORPORATE REGISTRATION SEAL CARD */}
            <div className="p-6 rounded-2xl bg-[#003875] text-white flex items-center space-x-4 shadow-md">
              <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center flex-shrink-0 border border-white/20">
                <Building className="w-6 h-6 text-amber-300" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-amber-300">
                  Officially Registered Enterprise
                </div>
                <div className="text-sm font-semibold text-white mt-0.5">
                  Incorporated March 21, 2024 • Regulated under Act 992
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* LEADERSHIP SECTION */}
        <div className="border-t border-slate-200/80 pt-14 w-full">
          <div className="w-full mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-slate-100">
            <div>
              <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#00509d] mb-2">
                <Users2 className="w-4 h-4" />
                <span>Executive Leadership</span>
              </div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                Meet the Directors
              </h3>
            </div>
            <p className="text-base text-slate-600 max-w-lg leading-relaxed">
              Senior TVET practitioners with proven experience in national policy, institutional accreditation, and capacity building across Ghana.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full">
            {LEADERSHIP.map((leader, idx) => (
              <div
                key={leader.name}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col md:flex-row card-hover-pro"
              >
                {/* PORTRAIT PANEL */}
                <div className="relative w-full md:w-48 lg:w-56 aspect-[3/4] md:aspect-auto bg-slate-100 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#001e4d]/40 z-10" />
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 280px"
                  />
                  {/* ROLE BADGE OVERLAY */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="inline-block px-3 py-1.5 rounded-full bg-[#00509d] text-white text-[11px] font-bold uppercase tracking-wider shadow-md">
                      {leader.role}
                    </span>
                  </div>
                </div>

                {/* CONTENT PANEL */}
                <div className="flex-1 p-7 lg:p-8 flex flex-col justify-between">
                  <div>
                    <h4 className="text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight">
                      {leader.name}
                    </h4>

                    <p className="text-sm text-slate-600 leading-relaxed mt-4">
                      {leader.bio}
                    </p>

                    {/* SPECIALIZATION TAGS */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {idx === 0 ? (
                        <>
                          <span className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
                            TVET Policy Development
                          </span>
                          <span className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
                            National Project Execution
                          </span>
                          <span className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
                            Institutional Capacity Building
                          </span>
                        </>
                      ) : (
                        <>
                          <span className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
                            CTVET Regulatory Compliance
                          </span>
                          <span className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
                            Quality Audits &amp; Standards
                          </span>
                          <span className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
                            Institutional Excellence
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* AVAILABILITY FOOTER */}
                  <div className="mt-6 pt-5 border-t border-slate-100 flex items-center space-x-2 text-xs font-semibold text-emerald-700">
                    <Check className="w-4 h-4" />
                    <span>Direct Senior Consultation Available</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
