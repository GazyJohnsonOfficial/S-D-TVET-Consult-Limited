import React, { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Award,
  BookOpen,
  Building2,
  FileCheck2,
  GraduationCap,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Layers,
  ChevronRight
} from "lucide-react";
import { SERVICES, SCHOOLS, BLOG_POSTS, SITE_CONFIG } from "@/data/site-data";

export const metadata: Metadata = {
  title: "Institutional Directory & Sector Index | S&D TVET Consult Limited",
  description:
    "Complete directory of S&D TVET Consult Limited: TVET accreditation frameworks, CBT training programs, accredited institutional partners across Ghana, and regulatory resources.",
  alternates: {
    canonical: "https://sdtvetconsultlimited.com/directory",
  },
};

export default function DirectoryPage() {
  const tradeSectors = [
    "Cosmetology & Beauty Therapy",
    "Fashion Design & Garment Making",
    "Electrical Engineering Technology",
    "Welding & Fabrication",
    "Building & Civil Construction",
    "Automotive Engineering",
    "Catering & Hospitality Management",
    "Information & Communication Technology (ICT)",
    "Plumbing & Pipefitting Systems",
    "Electronics & Security Installation",
    "Wood Construction & Carpentry",
    "Refrigeration & Air Conditioning"
  ];

  const accreditationSteps = [
    {
      num: "01",
      title: "Initial Diagnostic Assessment",
      desc: "Comprehensive gap audit against CTVET standards, facilities, safety codes, and documentation."
    },
    {
      num: "02",
      title: "Policy Formulation & QA Setup",
      desc: "Drafting institutional governing policies, internal quality assurance manuals, and health & safety registers."
    },
    {
      num: "03",
      title: "CBT Curriculum & Workshop Verification",
      desc: "Aligning trade courses to national unit standards and verifying tools and workshop infrastructure."
    },
    {
      num: "04",
      title: "Facilitator Coaching & Mock Panels",
      desc: "Rigorous interview preparation and dry-run panel audits for principals, lead assessors, and facilitators."
    },
    {
      num: "05",
      title: "Formal Inspection & Full Accreditation",
      desc: "Support during the official Commission for TVET accreditation inspection through certificate award."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />

      <main className="flex-grow w-full py-12 sm:py-16 lg:py-20">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
          
          {/* BREADCRUMBS */}
          <nav className="flex items-center space-x-2 text-xs font-semibold text-slate-500 mb-6">
            <Link href="/" className="hover:text-[#00509d] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-800">Sitemap &amp; Institutional Index</span>
          </nav>

          {/* PAGE HERO HEADER */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm mb-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-50 rounded-full blur-3xl pointer-events-none -z-0" />
            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#00509d] bg-blue-50 border border-blue-200/60 uppercase tracking-wider mb-4">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00509d]" />
                <span>Navigational Index &amp; Directory</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Institutional Directory &amp; Sitemap
              </h1>
              <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
                Explore the complete structure of S&amp;D TVET Consult Limited. Access our CTVET accreditation services, CBT curriculum training programs, accredited partner campuses, and sector guidance.
              </p>

              {/* QUICK XML / SEARCH ENGINE LINK */}
              <div className="flex flex-wrap items-center gap-4 mt-6 pt-6 border-t border-slate-100 text-xs text-slate-500">
                <span>Looking for the raw crawler file?</span>
                <a
                  href="/sitemap.xml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-bold text-[#00509d] hover:underline"
                >
                  <span>Open XML Sitemap (sitemap.xml)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* SITEMAP GRID SECTIONS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* 1. CORE CONSULTANCY SERVICES */}
            <div className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#00509d] flex items-center justify-center">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-slate-900">Core Services</h2>
                    <span className="text-xs text-slate-500">Accreditation &amp; Advisory</span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {SERVICES.map((srv) => (
                    <li key={srv.id}>
                      <Link
                        href={`/#services`}
                        className="group flex items-start justify-between text-sm text-slate-700 hover:text-[#00509d] transition-colors py-1"
                      >
                        <span className="font-medium group-hover:translate-x-1 transition-transform">
                          {srv.title}
                        </span>
                        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#00509d] flex-shrink-0 mt-0.5" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  href="/#services"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00509d] hover:underline"
                >
                  <span>View all service details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* 2. ACCREDITATION ROADMAP */}
            <div className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                    <FileCheck2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-slate-900">Accreditation Process</h2>
                    <span className="text-xs text-slate-500">5-Stage Quality Roadmap</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {accreditationSteps.map((step) => (
                    <div key={step.num} className="flex gap-3">
                      <span className="text-xs font-black text-[#00509d] bg-blue-50 px-2 py-0.5 rounded h-fit flex-shrink-0">
                        {step.num}
                      </span>
                      <div>
                        <h3 className="text-sm font-bold text-slate-800 leading-snug">
                          {step.title}
                        </h3>
                        <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  href="/#accreditation"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:underline"
                >
                  <span>Explore full accreditation framework</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* 3. ACCREDITED INSTITUTIONS DIRECTORY */}
            <div className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-slate-900">Partner Campuses</h2>
                    <span className="text-xs text-slate-500">22+ Schools Across Ghana</span>
                  </div>
                </div>

                <ul className="space-y-2.5 max-h-[340px] overflow-y-auto pr-1">
                  {SCHOOLS.slice(0, 10).map((school, i) => (
                    <li key={i} className="flex items-start justify-between text-xs py-1 border-b border-slate-50">
                      <div>
                        <span className="font-semibold text-slate-800 block">
                          {school.name}
                        </span>
                        <span className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5">
                          <MapPin className="w-3 h-3 text-slate-400" />
                          {school.loc}
                        </span>
                      </div>
                      {school.gtvp && (
                        <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full flex-shrink-0">
                          GTVP
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  href="/#portfolio"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00509d] hover:underline"
                >
                  <span>View all 22+ institutions &amp; locations</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* 4. ACCREDITED TVET TRADE AREAS */}
            <div className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-slate-900">TVET Trade Sectors</h2>
                    <span className="text-xs text-slate-500">Accreditation Disciplines</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {tradeSectors.map((trade, i) => (
                    <Link
                      key={i}
                      href="/#portfolio"
                      className="p-2 rounded-lg bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-[#00509d] font-medium transition-colors"
                    >
                      {trade}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  href="/#portfolio"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-700 hover:underline"
                >
                  <span>Filter institutions by sector</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* 5. ARTICLES & GUIDES */}
            <div className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-slate-900">Sector Knowledge</h2>
                    <span className="text-xs text-slate-500">Guides &amp; Publications</span>
                  </div>
                </div>

                <div className="space-y-3.5">
                  {BLOG_POSTS.map((post, i) => (
                    <Link
                      key={i}
                      href="/#blog"
                      className="block p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors group"
                    >
                      <span className="text-[10px] font-bold text-[#00509d] uppercase tracking-wider block mb-1">
                        {post.category} &bull; {post.date}
                      </span>
                      <h3 className="text-xs font-bold text-slate-900 group-hover:text-[#00509d] transition-colors leading-snug">
                        {post.title}
                      </h3>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  href="/#blog"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 hover:underline"
                >
                  <span>Read all guides &amp; publications</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* 6. OFFICE & DIRECT CONTACT */}
            <div className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-slate-900">Office &amp; Helpdesk</h2>
                    <span className="text-xs text-slate-500">Consultation Inquiries</span>
                  </div>
                </div>

                <div className="space-y-3 text-xs text-slate-600">
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50">
                    <MapPin className="w-4 h-4 text-[#00509d] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 block">Head Office</span>
                      <span>{SITE_CONFIG.contact.address}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50">
                    <Phone className="w-4 h-4 text-[#00509d] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 block">Direct Lines</span>
                      <div className="flex flex-col gap-1 mt-0.5">
                        <a href={`tel:${SITE_CONFIG.contact.phones[0]}`} className="hover:text-[#00509d] font-semibold">
                          {SITE_CONFIG.contact.phoneFormatted[0]}
                        </a>
                        <a href={`tel:${SITE_CONFIG.contact.phones[1]}`} className="hover:text-[#00509d] font-semibold">
                          {SITE_CONFIG.contact.phoneFormatted[1]}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 block">Working Hours</span>
                      <span>{SITE_CONFIG.contact.hours}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:underline"
                >
                  <span>Submit an institutional inquiry</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>

          {/* BACK TO HOME BANNER */}
          <div className="mt-12 bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#00509d] text-white flex items-center justify-center font-black">
                S&amp;D
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  Looking for the interactive landing experience?
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  Visit the full website with interactive accreditation audits, portfolio maps, and testimonials.
                </p>
              </div>
            </div>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#00509d] hover:bg-[#003875] text-white text-sm font-bold shadow-md hover:shadow-lg transition-all flex-shrink-0"
            >
              <span>Return to Homepage</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </main>

      <Suspense>
        <Footer />
      </Suspense>
    </div>
  );
}
