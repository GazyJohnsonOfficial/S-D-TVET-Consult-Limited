"use client";

import React, { useState, useMemo } from "react";
import { Search, MapPin, Award, CheckCircle2, ChevronDown, Building2, Sparkles } from "lucide-react";
import { SCHOOLS, GTVP_PROJECTS, School } from "@/data/site-data";

export default function SchoolsDirectory() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [filterGtvpOnly, setFilterGtvpOnly] = useState(false);
  const [visibleCount, setVisibleCount] = useState(10);

  const regions = [
    { label: "All Regions", value: "all" },
    { label: "Greater Accra", value: "accra" },
    { label: "Ashanti", value: "ashanti" },
    { label: "Bono East", value: "bono" },
    { label: "Central", value: "central" },
    { label: "Western / Savannah", value: "other" },
  ];

  const filteredSchools = useMemo(() => {
    return SCHOOLS.filter((school: School) => {
      const matchesSearch =
        school.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        school.loc.toLowerCase().includes(searchQuery.toLowerCase());

      let matchesRegion = true;
      if (selectedRegion === "accra") {
        matchesRegion = school.loc.toLowerCase().includes("accra") || school.loc.toLowerCase().includes("amasaman") || school.loc.toLowerCase().includes("dansoman") || school.loc.toLowerCase().includes("spintex");
      } else if (selectedRegion === "ashanti") {
        matchesRegion = school.loc.toLowerCase().includes("kumasi") || school.loc.toLowerCase().includes("ashanti");
      } else if (selectedRegion === "bono") {
        matchesRegion = school.loc.toLowerCase().includes("bono") || school.loc.toLowerCase().includes("techiman") || school.loc.toLowerCase().includes("yeji");
      } else if (selectedRegion === "central") {
        matchesRegion = school.loc.toLowerCase().includes("central") || school.loc.toLowerCase().includes("gomoa");
      } else if (selectedRegion === "other") {
        matchesRegion = school.loc.toLowerCase().includes("savannah") || school.loc.toLowerCase().includes("western") || school.loc.toLowerCase().includes("takoradi") || school.loc.toLowerCase().includes("daboya");
      }

      const matchesGtvp = filterGtvpOnly ? school.gtvp : true;
      return matchesSearch && matchesRegion && matchesGtvp;
    });
  }, [searchQuery, selectedRegion, filterGtvpOnly]);

  const displayedSchools = filteredSchools.slice(0, visibleCount);

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-slate-50/70 border-t border-slate-200/80 w-full bg-grid-pattern">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* SECTION HEADER */}
        <div className="w-full mb-12 flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-slate-200/80">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-100/70 text-xs font-bold text-[#00509d] uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Institutional Portfolio &amp; Impact</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Institutions We&apos;ve Accredited
            </h2>
          </div>
          <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
            Over 22 technical and vocational institutes across Ghana have achieved official CTVET accreditation and standards compliance under our guidance.
          </p>
        </div>

        {/* SEARCH AND FILTER CONTROLS */}
        <div className="w-full mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="relative w-full flex-grow">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search institutions by name or location (e.g. Kumasi, Adenta, Techiman)..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setVisibleCount(10);
                }}
                className="w-full pl-12 pr-4 py-3.5 bg-white rounded-2xl border border-slate-300 text-sm sm:text-base text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#00509d]/30 focus:border-[#00509d] shadow-sm transition-all"
              />
            </div>

            <button
              onClick={() => {
                setFilterGtvpOnly(!filterGtvpOnly);
                setVisibleCount(10);
              }}
              className={`px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all border flex items-center space-x-2 flex-shrink-0 ${
                filterGtvpOnly
                  ? "bg-[#00509d] text-white border-[#00509d] shadow-md"
                  : "bg-white text-slate-700 border-slate-300 hover:bg-slate-50"
              }`}
            >
              <Award className="w-4 h-4 text-amber-400" />
              <span>GTVP Projects Only</span>
            </button>
          </div>

          {/* REGION FILTER CHIPS */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2">
              Filter Region:
            </span>
            {regions.map((region) => (
              <button
                key={region.value}
                onClick={() => {
                  setSelectedRegion(region.value);
                  setVisibleCount(10);
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedRegion === region.value
                    ? "bg-slate-900 text-white shadow-sm"
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                {region.label}
              </button>
            ))}
          </div>
        </div>

        {/* RESULTS SUMMARY BAR */}
        <div className="flex items-center justify-between text-xs text-slate-500 mb-6">
          <span>
            Showing <strong>{displayedSchools.length}</strong> of <strong>{filteredSchools.length}</strong> institutions
          </span>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="text-[#00509d] hover:underline font-bold"
            >
              Clear Search
            </button>
          )}
        </div>

        {/* SCHOOLS GRID */}
        {displayedSchools.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 w-full">
            {displayedSchools.map((school: School, index: number) => (
              <div
                key={school.name}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group card-hover-pro"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#00509d] flex items-center justify-center font-bold text-xs">
                      <Building2 className="w-4 h-4" />
                    </div>
                    {school.gtvp && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-100 text-amber-800 border border-amber-200">
                        GTVP Award
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#00509d] transition-colors leading-snug">
                    {school.name}
                  </h3>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100">
                  <div className="flex items-start space-x-1.5 text-xs text-slate-500">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 flex-shrink-0 mt-0.5" />
                    <span className="line-clamp-2">{school.loc}</span>
                  </div>
                  <div className="mt-2 flex items-center space-x-1 text-[11px] font-semibold text-emerald-700">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>Accreditation Verified</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-slate-300 max-w-lg mx-auto">
            <Building2 className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <p className="text-base font-bold text-slate-800">No institutions match your search</p>
            <p className="text-xs text-slate-500 mt-1">Try selecting &apos;All Regions&apos; or resetting your search term.</p>
          </div>
        )}

        {/* LOAD MORE BUTTON */}
        {filteredSchools.length > visibleCount && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 10)}
              className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-2xl text-xs sm:text-sm font-bold text-slate-800 bg-white border border-slate-300 hover:bg-slate-50 shadow-sm transition-all"
            >
              <span>Load More Institutions ({filteredSchools.length - visibleCount} remaining)</span>
              <ChevronDown className="w-4 h-4 text-slate-500" />
            </button>
          </div>
        )}

        {/* GTVP HIGHLIGHT BANNER */}
        <div className="mt-16 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-100">
            <div>
              <div className="inline-flex items-center space-x-2 text-amber-600 text-xs font-bold uppercase tracking-wider mb-1">
                <Award className="w-4 h-4" />
                <span>National Voucher Management Projects</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Ghana TVET Voucher Programme (GTVP) Flagship Sites
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md">
              Institutions where S&amp;D TVET Consult has successfully structured and managed national training vouchers and trainee stipend allocations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {GTVP_PROJECTS.map((project: string) => (
              <div
                key={project}
                className="flex items-center space-x-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm font-semibold text-slate-800 hover:border-blue-300 transition-colors"
              >
                <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span>{project}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
