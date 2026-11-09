"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GALLERY_ITEMS, GalleryItem } from "@/data/site-data";

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = [
    { label: "All Media", value: "all" },
    { label: "Accreditation Audits", value: "accreditation" },
    { label: "Facilitator Workshops", value: "training" },
    { label: "Leadership & Forums", value: "team" },
  ];

  const filteredItems =
    activeCategory === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const currentIndex = selectedImage
    ? filteredItems.findIndex((it) => it.id === selectedImage.id)
    : -1;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex > 0) {
      setSelectedImage(filteredItems[currentIndex - 1]);
    } else {
      setSelectedImage(filteredItems[filteredItems.length - 1]);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex < filteredItems.length - 1) {
      setSelectedImage(filteredItems[currentIndex + 1]);
    } else {
      setSelectedImage(filteredItems[0]);
    }
  };

  return (
    <section id="gallery" className="py-20 lg:py-24 bg-white border-t border-slate-200 w-full relative">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* SECTION HEADER & FILTERS */}
        <div className="w-full mb-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-200">
          <div>
            <div className="inline-block px-3 py-1 rounded-md bg-slate-100 text-xs font-bold text-slate-800 uppercase tracking-wider mb-3 border border-slate-200">
              Field Documentation
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Our Gallery &amp; Field Work
            </h2>
            <p className="mt-2 text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
              Photographic documentation from our workshops, CTVET audit verification tours, and national stakeholder engagements.
            </p>
          </div>

          {/* CATEGORY FILTER BUTTONS (ROUNDED-LG, NO PILL SHAPE) */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                  activeCategory === cat.value
                    ? "bg-[#00509d] text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* GALLERY GRID (ROUNDED-XL, NEUTRAL BORDERS) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer bg-slate-100 border border-slate-200"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              
              {/* HOVER OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-5 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-300">
                  {item.category}
                </span>
                <h3 className="text-sm font-bold text-white mt-0.5">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* LIGHTBOX MODAL WITH RECTANGULAR CONTROLS */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-slate-950/95 flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-5xl w-full bg-slate-900 rounded-xl overflow-hidden shadow-2xl border border-slate-800"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-lg bg-slate-950/80 text-white flex items-center justify-center hover:bg-slate-800 transition-colors border border-white/10"
                aria-label="Close image modal"
              >
                <X className="w-5 h-5" />
              </button>

              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-lg bg-slate-950/80 text-white flex items-center justify-center hover:bg-slate-800 transition-colors border border-white/10"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-lg bg-slate-950/80 text-white flex items-center justify-center hover:bg-slate-800 transition-colors border border-white/10"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              <div className="relative aspect-[16/10] w-full bg-black">
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="p-4 bg-slate-900 text-white flex items-center justify-between border-t border-slate-800">
                <div>
                  <h4 className="text-base font-bold">{selectedImage.title}</h4>
                  <span className="text-xs text-slate-400 capitalize">
                    {selectedImage.category} Session | S&amp;D TVET Consult Ghana
                  </span>
                </div>
                <div className="text-xs text-slate-400">
                  {currentIndex + 1} of {filteredItems.length}
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
