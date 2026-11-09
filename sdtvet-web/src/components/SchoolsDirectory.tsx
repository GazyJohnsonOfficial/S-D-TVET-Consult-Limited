"use client";

import React, { useState, useMemo } from "react";
import { Search, MapPin, Award, CheckCircle, ChevronDown, X, Trophy } from "lucide-react";
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
    <section id="portfolio" className="py-24 lg:py-32 bg-slate-50/70 border-t border-slate-200/80 w-full relative">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* SECTION HEADER */}
        <div className="w-full mb-12 flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-200/60">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-100/70 text-xs font-bold text-[#00509d] uppercase tracking-wider mb-4 border border-blue-200">
              <Award className="w-3.5 h-3.5" />
              <span>Our Impact &amp; Footprint</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading">
              Institutions We&apos;ve Accredited
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <span className="text-xs sm:text-sm font-semibold text-slate-500 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">
              Showing {displayedSchools.length} of {filteredSchools.length} verified institutions
            </span>
          </div>
        </div>

        {/* SEARCH AND FILTER CONTROLS */}
        <div className="w-full mb-10 flex flex-col sm:flex-row items-center gap-4">
          <div className="relative w-full flex-grow">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search institutions by name or location (e.g. Kumasi, Adenta, Bono East, Central)..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleCount(10);
              }}
              className="w-full pl-12 pr-12 py-3.5 bg-white rounded-2xl border border-slate-300 text-sm sm:text-base text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#00509d]/30 focus:border-[#00509d] shadow-sm transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <button
            onClick={() => {
              setFilterGtvpOnly(!filterGtvpOnly);
              setVisibleCount(10);
            }}
            className={`px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all border flex items-center space-x-2 flex-shrink-0 ${
              filterGtvpOnly
                ? "bg-[#00509d] text-white border-[#00509d] shadow-md shadow-blue-900/10"
                : "bg-white text-slate-700 border-slate-300 hover:bg-slate-50 shadow-sm"
            }`}
          >
            <Trophy className="w-4 h-4 text-amber-400" />
            <span>GTVP Projects Only</span>
          </button>
        </div>

        {/* SCHOOLS GRID */}
        {displayedSchools.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 w-full">
            {displayedSchools.map((school: School, index: number) => (
              <div
                key={school.name}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-[#00509d]/30 transition-all duration-200 flex flex-col justify-between group card-hover-lift"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-[#00509d] transition-colors bg-slate-50 px-2 py-0.5 rounded">
                      #{String(index + 1).padStart(2, "0")}
                    </span>
                    {school.gtvp && (
                      <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-300 flex items-center space-x-1">
                        <Trophy className="w-2.5 h-2.5 text-amber-600" />
                        <span>GTVP</span>
                      </span>
                    )}
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#00509d] transition-colors leading-snug font-heading">
                    {school.name}
                  </h3>
                </div>

                <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-start space-x-2 text-xs text-slate-500">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span className="line-clamp-2 leading-relaxed">{school.loc}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-slate-300 max-w-lg mx-auto">
            <p className="text-base font-bold text-slate-800">No institutions match your search</p>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">Try clearing the search query or changing the filter.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setFilterGtvpOnly(false);
              }}
              className="mt-4 px-4 py-2 rounded-xl text-xs font-bold text-[#00509d] bg-blue-50 border border-blue-200 hover:bg-blue-100"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* LOAD MORE BUTTON */}
        {filteredSchools.length > visibleCount && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 10)}
              className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-2xl text-xs sm:text-sm font-bold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 hover:border-slate-400 shadow-sm transition-all"
            >
              <span>Load More Institutions ({filteredSchools.length - visibleCount} remaining)</span>
              <ChevronDown className="w-4 h-4 text-slate-500" />
            </button>
          </div>
        )}

        {/* GTVP HIGHLIGHT BANNER */}
        <div className="mt-20 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-100">
            <div>
              <div className="inline-flex items-center space-x-2 text-amber-600 text-xs font-bold uppercase tracking-wider bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                <Trophy className="w-3.5 h-3.5" />
                <span>National Voucher Management</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2 font-heading">
                Ghana TVET Voucher Programme (GTVP) Projects
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md leading-relaxed">
              Institutions where S&amp;D TVET Consult has successfully structured and managed national GTVP training grants.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {GTVP_PROJECTS.map((project: string) => (
              <div
                key={project}
                className="flex items-center space-x-3.5 p-4 rounded-2xl bg-gradient-to-r from-slate-50 to-white border border-slate-200/80 text-xs sm:text-sm font-semibold text-slate-800 shadow-sm hover:border-amber-300 transition-colors"
              >
                <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-4 h-4" />
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
