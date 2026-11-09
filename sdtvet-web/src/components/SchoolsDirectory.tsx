"use client";

import React, { useState, useMemo } from "react";
import { Search, ChevronDown } from "lucide-react";
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
    <section id="portfolio" className="py-20 lg:py-24 bg-slate-50 border-t border-slate-200 w-full bg-grid-subtle">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* SECTION HEADER */}
        <div className="w-full mb-12 flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-200">
          <div>
            <div className="inline-block px-3 py-1 rounded-md bg-white text-xs font-bold text-slate-800 uppercase tracking-wider mb-3 border border-slate-200 shadow-sm">
              Accredited Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Institutions We&apos;ve Accredited
            </h2>
          </div>
          <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
            Over 22 technical and vocational institutes across Ghana have achieved official CTVET accreditation and standards compliance under our guidance.
          </p>
        </div>

        {/* SEARCH AND FILTER CONTROLS (ROUNDED-LG RECTANGULAR, NO PILL SHAPE) */}
        <div className="w-full mb-6 space-y-4">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="relative w-full flex-grow">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search institutions by name or location (e.g. Kumasi, Adenta, Techiman)..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setVisibleCount(10);
                }}
                className="w-full pl-10 pr-4 py-2.5 bg-white rounded-lg border border-slate-300 text-sm text-slate-800 focus:outline-none focus:border-[#00509d] shadow-sm transition-all"
              />
            </div>

            <button
              onClick={() => {
                setFilterGtvpOnly(!filterGtvpOnly);
                setVisibleCount(10);
              }}
              className={`px-4 py-2.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all border flex-shrink-0 ${
                filterGtvpOnly
                  ? "bg-[#00509d] text-white border-[#00509d]"
                  : "bg-white text-slate-700 border-slate-300 hover:bg-slate-50"
              }`}
            >
              GTVP Projects Only
            </button>
          </div>

          {/* REGION FILTER CHIPS (ROUNDED-MD RECTANGULAR, NO PILL SHAPE) */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-1">
              Region:
            </span>
            {regions.map((region) => (
              <button
                key={region.value}
                onClick={() => {
                  setSelectedRegion(region.value);
                  setVisibleCount(10);
                }}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                  selectedRegion === region.value
                    ? "bg-slate-900 text-white"
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

        {/* SCHOOLS GRID (CLEAN NEUTRAL BORDERS, NO COLOR BORDERS) */}
        {displayedSchools.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-full">
            {displayedSchools.map((school: School, index: number) => (
              <div
                key={school.name}
                className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-slate-400">
                      #{String(index + 1).padStart(2, "0")}
                    </span>
                    {school.gtvp && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                        GTVP
                      </span>
                    )}
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 leading-snug">
                    {school.name}
                  </h3>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100">
                  <p className="text-xs text-slate-500 line-clamp-2">
                    {school.loc}
                  </p>
                  <p className="text-[11px] font-semibold text-slate-700 mt-1.5">
                    Accredited
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-xl border border-dashed border-slate-300 max-w-md mx-auto">
            <p className="text-sm font-bold text-slate-800">No institutions match your search</p>
            <p className="text-xs text-slate-500 mt-1">Try selecting &apos;All Regions&apos; or resetting your search term.</p>
          </div>
        )}

        {/* LOAD MORE BUTTON (ROUNDED-LG) */}
        {filteredSchools.length > visibleCount && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 10)}
              className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-lg text-xs font-bold text-slate-800 bg-white border border-slate-300 hover:bg-slate-50 shadow-sm transition-all"
            >
              <span>Load More Institutions ({filteredSchools.length - visibleCount} remaining)</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
            </button>
          </div>
        )}

        {/* GTVP HIGHLIGHT BANNER (ROUNDED-XL, NEUTRAL BORDERS) */}
        <div className="mt-14 bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                National Voucher Management Sites
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Ghana TVET Voucher Programme (GTVP) Projects
              </h3>
            </div>
            <p className="text-xs text-slate-500 max-w-md">
              Institutions where S&amp;D TVET Consult has successfully structured and managed national training vouchers and trainee stipends.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {GTVP_PROJECTS.map((project: string) => (
              <div
                key={project}
                className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 text-xs sm:text-sm font-semibold text-slate-800"
              >
                {project}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
