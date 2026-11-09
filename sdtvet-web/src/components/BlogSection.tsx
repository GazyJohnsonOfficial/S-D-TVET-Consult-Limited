"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { BLOG_POSTS, BlogPost } from "@/data/site-data";

export default function BlogSection() {
  return (
    <section id="blog" className="py-20 lg:py-24 bg-white border-t border-slate-200 w-full relative">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* SECTION HEADER */}
        <div className="w-full mb-12 flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-200">
          <div>
            <div className="inline-block px-3 py-1 rounded-md bg-slate-100 text-xs font-bold text-slate-800 uppercase tracking-wider mb-3 border border-slate-200">
              Policy &amp; Standards Articles
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Latest Industry Articles
            </h2>
          </div>
          <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
            Stay informed with expert guidance on TVET accreditation, CBT pedagogy, policy formulation, and institutional management.
          </p>
        </div>

        {/* BLOG CARDS GRID (CLEAN NEUTRAL BORDERS, NO PILL SHAPES) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full">
          {BLOG_POSTS.map((post: BlogPost) => (
            <article
              key={post.title}
              className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between card-hover"
            >
              <div>
                <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 350px"
                  />
                  <div className="absolute top-3 left-3 bg-[#00509d] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow-sm">
                    {post.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-xs text-slate-400 mb-2">
                    {post.date}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 hover:text-[#00509d] transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">
                  S&amp;D TVET Consult
                </span>
                <a
                  href="#contact"
                  className="text-xs font-bold text-[#00509d] hover:text-[#00296b] flex items-center group"
                >
                  <span>Request Full Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
