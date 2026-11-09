"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Maximize2, X, Sparkles, Camera } from "lucide-react";
import { GALLERY_ITEMS, GalleryItem } from "@/data/site-data";

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = [
    { label: "All Media", value: "all" },
    { label: "Accreditation", value: "accreditation" },
    { label: "Training & Workshops", value: "training" },
    { label: "Team & Strategy", value: "team" },
  ];

  const filteredItems =
    activeCategory === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-white border-t border-slate-100 w-full relative">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* SECTION HEADER & FILTERS */}
        <div className="w-full mb-12 flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-xs font-bold text-[#00509d] uppercase tracking-wider mb-4 border border-blue-200/60">
              <Camera className="w-3.5 h-3.5 text-blue-600" />
              <span>Company in Action</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading">
              Our Gallery &amp; Field Work
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
              Moments from our hands-on workshops, quality verification visits, facilitator development, and national TVET stakeholder meetings.
            </p>
          </div>

          {/* CATEGORY FILTER PILLS */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                  activeCategory === cat.value
                    ? "bg-[#00509d] text-white shadow-md shadow-blue-900/15"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* GALLERY GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative aspect-[4/3] rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer bg-slate-100 border border-slate-200/90"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-108"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
              />
              
              {/* HOVER OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-300 bg-slate-900/70 backdrop-blur-md px-2.5 py-1 rounded-full border border-amber-400/30">
                      {item.category}
                    </span>
                    <h3 className="text-base font-bold mt-2 text-white font-heading">{item.title}</h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/25 backdrop-blur-md flex items-center justify-center text-white border border-white/40 shadow-lg">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* LIGHTBOX MODAL */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-5xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-11 h-11 rounded-full bg-slate-950/80 text-white flex items-center justify-center hover:bg-slate-800 transition-colors border border-white/20"
                aria-label="Close image modal"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative aspect-[16/10] w-full bg-black">
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="p-6 bg-slate-900 text-white flex items-center justify-between border-t border-slate-800">
                <div>
                  <h4 className="text-lg font-bold font-heading">{selectedImage.title}</h4>
                  <span className="text-xs text-amber-400 capitalize font-medium">
                    Verified {selectedImage.category} Session
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
