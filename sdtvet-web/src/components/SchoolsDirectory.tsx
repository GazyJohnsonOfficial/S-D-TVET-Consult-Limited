"use client";

import React, { useState, useMemo } from "react";
import { Search, MapPin, Award, CheckCircle, ChevronDown } from "lucide-react";
import { SCHOOLS, GTVP_PROJECTS, School } from "@/data/site-data";

export default function SchoolsDirectory() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterGtvpOnly, setFilterGtvpOnly] = useState(false);
  const [visibleCount, setVisibleCount] = useState(10);

  const filteredSchools = useMemo(() => {
    return SCHOOLS.filter((school: School) => {
      const matchesSearch =
        school.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        school.loc.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesGtvp = filterGtvpOnly ? school.gtvp : true;
      return matchesSearch && matchesGtvp;
    });
  }, [searchQuery, filterGtvpOnly]);

  const displayedSchools = filteredSchools.slice(0, visibleCount);

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-slate-50/70 border-t border-slate-200/80 w-full">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* SECTION HEADER */}
        <div className="w-full mb-12 flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-200/60">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-100/70 text-xs font-bold text-[#00509d] uppercase tracking-wider mb-4">
              <span>Our Impact &amp; Footprint</span>
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
        <div className="w-full mb-10 flex flex-col sm:flex-row items-center gap-4">
          <div className="relative w-full flex-grow">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search institutions by name or location (e.g. Kumasi, Adenta, Bono East)..."
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
                ? "bg-[#00509d] text-white border-[#00509d] shadow-sm"
                : "bg-white text-slate-700 border-slate-300 hover:bg-slate-50"
            }`}
          >
            <Award className="w-4 h-4" />
            <span>GTVP Projects Only</span>
          </button>
        </div>

        {/* SCHOOLS GRID */}
        {displayedSchools.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 w-full">
            {displayedSchools.map((school: School, index: number) => (
              <div
                key={school.name}
                className="bg-white rounded-xl p-5 border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-[#00509d] transition-colors">
                      #{String(index + 1).padStart(2, "0")}
                    </span>
                    {school.gtvp && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-100 text-amber-800">
                        GTVP
                      </span>
                    )}
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#00509d] transition-colors">
                    {school.name}
                  </h3>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-start space-x-1.5 text-xs text-slate-500">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span className="line-clamp-2">{school.loc}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-xl border border-dashed border-slate-300 max-w-md mx-auto">
            <p className="text-sm font-semibold text-slate-700">No institutions match your search</p>
            <p className="text-xs text-slate-500 mt-1">Try searching for a different town or school name.</p>
          </div>
        )}

        {/* LOAD MORE BUTTON */}
        {filteredSchools.length > visibleCount && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 8)}
              className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-xl text-xs font-bold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 shadow-sm transition-all"
            >
              <span>Load More Institutions ({filteredSchools.length - visibleCount} remaining)</span>
              <ChevronDown className="w-4 h-4 text-slate-500" />
            </button>
          </div>
        )}

        {/* GTVP HIGHLIGHT BANNER */}
        <div className="mt-16 bg-white rounded-2xl p-8 border border-slate-200/90 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
            <div>
              <div className="inline-flex items-center space-x-1.5 text-amber-600 text-xs font-bold uppercase tracking-wider">
                <Award className="w-4 h-4" />
                <span>National Voucher Management</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mt-1">
                Ghana TVET Voucher Programme (GTVP) Projects
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md">
              Institutions where S&amp;D TVET Consult has successfully structured and managed national GTVP training grants.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {GTVP_PROJECTS.map((project: string) => (
              <div
                key={project}
                className="flex items-center space-x-3 p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/60 text-xs sm:text-sm font-medium text-slate-800"
              >
                <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>{project}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

