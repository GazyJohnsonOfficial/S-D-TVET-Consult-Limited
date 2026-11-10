"use client";

import React, { useState, useRef, useEffect, useMemo, useCallback } from "react";
import {
  Quote,
  Building2,
  MapPin,
  Star,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Award,
  GraduationCap,
  CheckCircle2,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { TESTIMONIALS, Testimonial } from "@/data/site-data";

export default function TestimonialsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const categories = useMemo(() => [
    { id: "all", label: "All Reviews", count: TESTIMONIALS.length },
    {
      id: "accreditation",
      label: "CTVET Accreditation",
      count: TESTIMONIALS.filter((t) => t.category === "accreditation").length
    },
    {
      id: "cbt-training",
      label: "CBT & Training",
      count: TESTIMONIALS.filter((t) => t.category === "cbt-training").length
    },
    {
      id: "setup",
      label: "Setup & Governance",
      count: TESTIMONIALS.filter((t) => t.category === "setup").length
    }
  ], []);

  const filteredTestimonials = useMemo(() => {
    if (selectedCategory === "all") return TESTIMONIALS;
    return TESTIMONIALS.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const updateScrollState = useCallback(() => {
    if (!trackRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
    setCanScrollLeft(scrollLeft > 15);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 15);

    // Calculate approximate active slide
    const cardWidth = clientWidth >= 1024 ? clientWidth / 3 : clientWidth >= 640 ? clientWidth / 2 : clientWidth;
    if (cardWidth > 0) {
      const idx = Math.round(scrollLeft / cardWidth);
      setActiveSlideIndex(idx);
    }
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState, filteredTestimonials]);

  const handleCategoryChange = (catId: string) => {
    setSelectedCategory(catId);
    if (trackRef.current) {
      trackRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (!trackRef.current) return;
    const clientWidth = trackRef.current.clientWidth;
    // Step by ~1 card on mobile/tablet, ~1-2 cards on desktop
    const scrollAmount = clientWidth >= 1024 ? clientWidth * 0.68 : clientWidth * 0.88;
    trackRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth"
    });
  };

  const getCategoryBadge = (category: Testimonial["category"]) => {
    switch (category) {
      case "accreditation":
        return {
          icon: Award,
          bg: "bg-blue-50 text-[#00509d] border-blue-200/80"
        };
      case "cbt-training":
        return {
          icon: GraduationCap,
          bg: "bg-emerald-50 text-emerald-800 border-emerald-200/80"
        };
      case "setup":
        return {
          icon: Building2,
          bg: "bg-amber-50 text-amber-900 border-amber-200/80"
        };
      default:
        return {
          icon: ShieldCheck,
          bg: "bg-slate-50 text-slate-700 border-slate-200"
        };
    }
  };

  return (
    <section id="testimonials" className="py-16 sm:py-20 lg:py-24 bg-slate-50/70 border-t border-slate-200/80 w-full relative overflow-hidden">
      {/* BACKGROUND DECORATIVE ELEMENTS */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="w-full mb-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-slate-200/80">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-[#00509d] bg-blue-50 border border-blue-200/70 uppercase tracking-wider mb-3 shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00509d]" />
              <span>Verified Institutional Impact</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Trusted by Technical Institutes & Colleges Nationwide
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
              Real endorsements from administrators, principals, and quality assurance leads who achieved full CTVET accreditation and operational excellence with S&D TVET Consult.
            </p>
          </div>

          {/* AGGREGATE RATING & PROOF CARD */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm flex items-center gap-5 flex-shrink-0 self-start lg:self-end">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00509d] to-[#00296b] text-white flex flex-col items-center justify-center shadow-sm">
              <span className="text-xl font-black leading-none">5.0</span>
              <div className="flex items-center gap-0.5 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-2 h-2 fill-amber-300 text-amber-300" />
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                <span>100% CTVET Audit Success</span>
                <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Over 22+ TVET campuses accredited across Ghana
              </p>
              <div className="flex items-center gap-1 mt-1 text-[11px] font-semibold text-emerald-700">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                <span>Verified institutional partners</span>
              </div>
            </div>
          </div>
        </div>

        {/* CONTROLS BAR: CATEGORY TABS & CAROUSEL NAVIGATION */}
        <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 sm:pb-0">
            {categories.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                    active
                      ? "bg-[#00509d] text-white shadow-sm ring-2 ring-[#00509d]/20"
                      : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                      active
                        ? "bg-white/20 text-white"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Previous reviews"
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 border ${
                canScrollLeft
                  ? "bg-white text-slate-800 hover:bg-[#00509d] hover:text-white border-slate-200 shadow-sm cursor-pointer"
                  : "bg-slate-100 text-slate-300 border-slate-200/60 cursor-not-allowed"
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Next reviews"
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 border ${
                canScrollRight
                  ? "bg-white text-slate-800 hover:bg-[#00509d] hover:text-white border-slate-200 shadow-sm cursor-pointer"
                  : "bg-slate-100 text-slate-300 border-slate-200/60 cursor-not-allowed"
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* TESTIMONIALS CAROUSEL TRACK */}
        <div
          ref={trackRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-4 pt-1 w-full"
          style={{ scrollBehavior: "smooth" }}
        >
          {filteredTestimonials.map((item: Testimonial) => {
            const badge = getCategoryBadge(item.category);
            const BadgeIcon = badge.icon;

            return (
              <div
                key={item.name}
                className={`relative bg-white rounded-2xl p-7 sm:p-8 border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-start group overflow-hidden ${
                  item.featured
                    ? "border-slate-300/90 ring-1 ring-[#00509d]/15 border-t-4 border-t-[#00509d]"
                    : "border-slate-200/90 border-t-4 border-t-slate-300 hover:border-t-[#00509d]"
                }`}
              >
                {/* BACKGROUND WATERMARK QUOTE */}
                <div className="absolute top-4 right-4 text-slate-100 group-hover:text-blue-50/80 transition-colors pointer-events-none -z-0">
                  <Quote className="w-20 h-20 rotate-12" />
                </div>

                <div className="relative z-10">
                  {/* CARD TOP META: TAG & STAR RATING */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <span
                      className={`inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1 rounded-md border ${badge.bg}`}
                    >
                      <BadgeIcon className="w-3.5 h-3.5" />
                      <span>{item.tag}</span>
                    </span>

                    {/* 5-STAR RATING */}
                    <div className="flex items-center gap-1">
                      {[...Array(item.rating || 5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                  </div>

                  {/* QUOTE TEXT */}
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed italic mb-6">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                {/* CARD FOOTER: AUTHOR & INSTITUTION DETAILS */}
                <div className="relative z-10 pt-6 border-t border-slate-100 flex flex-col gap-3">
                  <div className="flex items-center space-x-3.5">
                    {/* MONOGRAM AVATAR */}
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00509d] to-[#00296b] text-white flex items-center justify-center font-extrabold text-sm flex-shrink-0 shadow-sm ring-2 ring-blue-100/80">
                      {item.initials}
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <h3 className="text-base font-bold text-slate-900 leading-snug truncate">
                          {item.name}
                        </h3>
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      </div>
                      <div className="text-xs font-semibold text-[#00509d]">
                        {item.role}
                      </div>
                    </div>
                  </div>

                  {/* INSTITUTION & LOCATION BADGES */}
                  <div className="space-y-1 pt-1 bg-slate-50/80 rounded-xl p-3 border border-slate-100">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-800">
                      <Building2 className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                      <span className="truncate">{item.institution}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                      <span className="truncate">{item.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM PAGINATION DOTS (MOBILE HELPER) */}
        <div className="flex sm:hidden items-center justify-center gap-1.5 mt-4">
          {filteredTestimonials.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeSlideIndex === idx
                  ? "w-6 bg-[#00509d]"
                  : "w-1.5 bg-slate-200"
              }`}
            />
          ))}
        </div>

        {/* ACTION / CTA BANNER STRIP */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200/70 flex items-center justify-center text-[#00509d] flex-shrink-0">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                Preparing your institute for an upcoming CTVET accreditation audit?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                Join over 22 accredited technical and vocational institutions guided across Ghana.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#00509d] hover:bg-[#003875] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all flex-shrink-0 w-full sm:w-auto"
          >
            <span>Schedule Institutional Audit</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
