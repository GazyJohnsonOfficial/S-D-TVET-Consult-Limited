import React from "react";
import Image from "next/image";
import { Calendar, ArrowRight, BookOpen, Clock } from "lucide-react";
import { BLOG_POSTS, BlogPost } from "@/data/site-data";

export default function BlogSection() {
  return (
    <section id="blog" className="py-24 lg:py-32 bg-white border-t border-slate-100 w-full relative">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* SECTION HEADER */}
        <div className="w-full mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-xs font-bold text-[#00509d] uppercase tracking-wider mb-4 border border-blue-200/60">
              <BookOpen className="w-3.5 h-3.5 text-blue-600" />
              <span>Insights &amp; TVET Governance</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading">
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
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm flex flex-col justify-between card-hover-lift group"
            >
              <div>
                <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-106"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                  />
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-[#00509d] to-[#003875] text-white text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                    {post.category}
                  </div>
                </div>

                <div className="p-7">
                  <div className="flex items-center space-x-4 text-xs text-slate-500 mb-3 font-medium">
                    <span className="flex items-center space-x-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{post.date}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>4 min read</span>
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#00509d] transition-colors leading-snug font-heading">
                    {post.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-7 pb-7 pt-3 border-t border-slate-50 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500">
                  By S&amp;D TVET Consult
                </span>
                <a
                  href="#contact"
                  className="text-xs sm:text-sm font-bold text-[#00509d] group-hover:text-[#00296b] flex items-center group/btn"
                >
                  <span>Request Full Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
