import React from "react";
import Image from "next/image";
import { Calendar, ArrowRight, BookOpen } from "lucide-react";
import { BLOG_POSTS, BlogPost } from "@/data/site-data";

export default function BlogSection() {
  return (
    <section id="blog" className="py-24 lg:py-32 bg-white border-t border-slate-100 w-full">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* SECTION HEADER */}
        <div className="w-full mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-100">
          <div>
            <div className="text-xs sm:text-sm font-bold text-[#00509d] uppercase tracking-wider mb-2">
              Industry Knowledge &bull; Insights &amp; TVET Governance
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Latest Industry Articles
            </h2>
          </div>
          <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
            Stay informed with expert guidance on TVET accreditation, CBT pedagogy, policy formulation, and institutional management.
          </p>
        </div>

        {/* BLOG CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {BLOG_POSTS.map((post: BlogPost) => (
            <article
              key={post.title}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm flex flex-col justify-between card-hover-lift"
            >
              <div>
                <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 350px"
                  />
                  <div className="absolute top-3 left-3 bg-[#00509d] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                    {post.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-1.5 text-xs text-slate-500 mb-2.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{post.date}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 hover:text-[#00509d] transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-slate-50 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">
                  By S&amp;D TVET Consult
                </span>
                <a
                  href="#contact"
                  className="text-xs font-bold text-[#00509d] hover:text-[#00296b] flex items-center group"
                >
                  <span>Request Full Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

