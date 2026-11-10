import React, { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustMetrics from "@/components/TrustMetrics";
import PartnerMarquee from "@/components/PartnerMarquee";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import AccreditationProcess from "@/components/AccreditationProcess";
import SchoolsDirectory from "@/components/SchoolsDirectory";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <main className="flex-grow w-full">
        <Hero />
        <Reveal>
          <TrustMetrics />
        </Reveal>
        <Reveal delay={60}>
          <div className="mt-10">
            <PartnerMarquee />
          </div>
        </Reveal>
        <Reveal>
          <AboutSection />
        </Reveal>
        <Reveal delay={80}>
          <ServicesSection />
        </Reveal>
        <Reveal>
          <AccreditationProcess />
        </Reveal>
        <Reveal delay={80}>
          <SchoolsDirectory />
        </Reveal>
        <Reveal>
          <GallerySection />
        </Reveal>
        <Reveal delay={80}>
          <TestimonialsSection />
        </Reveal>
        <Reveal>
          <BlogSection />
        </Reveal>
        <Reveal delay={80}>
          <ContactSection />
        </Reveal>
      </main>
      <Suspense>
        <Footer />
      </Suspense>
    </div>
  );
}
