import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustMetrics from "@/components/TrustMetrics";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import AccreditationProcess from "@/components/AccreditationProcess";
import SchoolsDirectory from "@/components/SchoolsDirectory";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <main className="flex-grow w-full">
        <Hero />
        <TrustMetrics />
        <AboutSection />
        <ServicesSection />
        <AccreditationProcess />
        <SchoolsDirectory />
        <GallerySection />
        <TestimonialsSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
