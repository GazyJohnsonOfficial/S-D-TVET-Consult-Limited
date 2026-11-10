"use client";

import React, { useState, useEffect, useMemo, useCallback, useRef } from "react";
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
  Sparkles,
  Pause,
  Play
} from "lucide-react";
import { TESTIMONIALS, Testimonial } from "@/data/site-data";

export default function TestimonialsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Categories with counts
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

  // Filtered list
  const filteredTestimonials = useMemo(() => {
    if (selectedCategory === "all") return TESTIMONIALS;
    return TESTIMONIALS.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  // Responsive visible count: 1 on mobile, 2 on tablet, 3 on desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, filteredTestimonials.length - visibleCount);
  const safeIndex = Math.min(currentIndex, maxIndex);

  // Handle slide navigation
  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  }, [maxIndex]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  }, [maxIndex]);

  // Handle category switch
  const handleCategoryChange = (catId: string) => {
    setSelectedCategory(catId);
    setCurrentIndex(0);
  };

  // Optional subtle auto-play (6s interval), pauses on user hover
  useEffect(() => {
    if (isPaused || maxIndex === 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
    }, 6500);

    return () => clearInterval(timer);
  }, [isPaused, maxIndex]);

  // Touch Swipe Handlers for Mobile & Tablet
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 45;
    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
  };

  // Number of dots to display
  const totalSteps = maxIndex + 1;

  return (
    <section
      id="testimonials"
      className="py-16 sm:py-20 lg:py-24 bg-slate-50/70 border-t border-slate-200/80 w-full relative overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* BACKGROUND AMBIENT GLOW */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-blue-100/35 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-amber-100/25 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="w-full mb-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-slate-200/80">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-[#00509d] bg-white border border-slate-200 uppercase tracking-wider mb-3 shadow-xs">
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
          <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] flex items-center gap-5 flex-shrink-0 self-start lg:self-end">
            <div className="w-14 h-14 rounded-2xl bg-[#00509d] text-white flex flex-col items-center justify-center shadow-xs">
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

        {/* CONTROLS BAR: CATEGORY TABS & SLIDER ARROWS */}
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
                      ? "bg-[#00509d] text-white shadow-sm"
                      : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-50"
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

          {/* Navigation Controls: Slide Counter & Prev/Next Buttons */}
          <div className="flex items-center gap-3 self-end sm:self-auto">
            {totalSteps > 1 && (
              <span className="text-xs font-medium text-slate-500 hidden sm:inline-block">
                {safeIndex + 1} / {totalSteps}
              </span>
            )}

            <div className="flex items-center gap-1.5">
              <button
                onClick={handlePrev}
                disabled={totalSteps <= 1}
                aria-label="Previous review"
                className="w-10 h-10 rounded-xl bg-white text-slate-700 hover:bg-[#00509d] hover:text-white border border-slate-200 shadow-xs flex items-center justify-center transition-all duration-200 disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-slate-700 disabled:cursor-not-allowed cursor-pointer active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                disabled={totalSteps <= 1}
                aria-label="Next review"
                className="w-10 h-10 rounded-xl bg-white text-slate-700 hover:bg-[#00509d] hover:text-white border border-slate-200 shadow-xs flex items-center justify-center transition-all duration-200 disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-slate-700 disabled:cursor-not-allowed cursor-pointer active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* SLIDING CAROUSEL CONTAINER */}
        <div
          ref={containerRef}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          className="relative overflow-hidden w-full py-2 -my-2"
        >
          <div
            className="flex transition-transform duration-500 ease-out will-change-transform"
            style={{
              transform: `translateX(-${safeIndex * (100 / visibleCount)}%)`
            }}
          >
            {filteredTestimonials.map((item: Testimonial) => (
              <div
                key={item.name}
                className="flex-shrink-0 px-3 transition-opacity duration-300"
                style={{ width: `${100 / visibleCount}%` }}
              >
                {/* COOL CARD DESIGN: NO CARD BORDER COLORS, PURE REFINED SHADOW & TRANSITIONS */}
                <div className="h-full bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/70 shadow-[0_4px_24px_-4px_rgba(15,23,42,0.05)] hover:shadow-[0_16px_36px_-6px_rgba(15,23,42,0.12)] hover:-translate-y-1.5 transition-all duration-300 ease-out flex flex-col justify-between group relative overflow-hidden">
                  
                  {/* SUBTLE WATERMARK QUOTE */}
                  <div className="absolute top-4 right-5 text-slate-100 group-hover:text-blue-50/70 transition-colors duration-300 pointer-events-none -z-0">
                    <Quote className="w-20 h-20 rotate-12" />
                  </div>

                  <div className="relative z-10">
                    {/* CARD TOP META: CLEAN PILL & STARS */}
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700">
                        {item.category === "accreditation" && <Award className="w-3.5 h-3.5 text-slate-600" />}
                        {item.category === "cbt-training" && <GraduationCap className="w-3.5 h-3.5 text-slate-600" />}
                        {item.category === "setup" && <Building2 className="w-3.5 h-3.5 text-slate-600" />}
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
                    <p className="text-slate-700 text-sm sm:text-[15px] leading-relaxed italic mb-6">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </div>

                  {/* CARD FOOTER: AUTHOR & INSTITUTION DETAILS */}
                  <div className="relative z-10 pt-5 border-t border-slate-100 flex flex-col gap-3">
                    <div className="flex items-center space-x-3.5">
                      {/* MONOGRAM AVATAR: CLEAN NEUTRAL BLUE */}
                      <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-sm flex-shrink-0 shadow-xs group-hover:bg-[#00509d] transition-colors duration-300">
                        {item.initials}
                      </div>

                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <h3 className="text-base font-bold text-slate-900 leading-snug truncate">
                            {item.name}
                          </h3>
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        </div>
                        <div className="text-xs font-medium text-slate-500">
                          {item.role}
                        </div>
                      </div>
                    </div>

                    {/* INSTITUTION & LOCATION BADGES (CLEAN NEUTRAL) */}
                    <div className="space-y-1 bg-slate-50 rounded-xl p-3 border border-slate-100">
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
              </div>
            ))}
          </div>
        </div>

        {/* SLIDE INDICATOR DOTS & CONTROLS */}
        {totalSteps > 1 && (
          <div className="flex items-center justify-center gap-2 mt-8">
            {[...Array(totalSteps)].map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  safeIndex === idx
                    ? "w-8 bg-[#00509d]"
                    : "w-2 bg-slate-200 hover:bg-slate-300"
                }`}
              />
            ))}
          </div>
        )}

        {/* BOTTOM ACTION BANNER STRIP */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-800 flex-shrink-0">
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
