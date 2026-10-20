"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { CompetenciesSection } from "@/components/CompetenciesSection";
import { OperationsGallery } from "@/components/OperationsGallery";
import { ChecklistSimulator } from "@/components/ChecklistSimulator";
import { ContactSection } from "@/components/ContactSection";
import { ResumeModal } from "@/components/ResumeModal";

export default function Home() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#060a12] text-slate-100 flex flex-col selection:bg-amber-500 selection:text-slate-950">
      {/* Flightline Navigation Bar */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Hero Section with Hangar Backdrop & Telemetry */}
      <HeroSection onOpenResume={() => setResumeOpen(true)} />

      {/* About Me & PhilSCA Academic Profile */}
      <AboutSection />

      {/* Core Competencies Grid (Airframe, Powerplant, Ground Ops) */}
      <CompetenciesSection />

      {/* Operations Gallery with Masonry Grid & Prominent Location Tags */}
      <OperationsGallery />

      {/* Interactive Turnaround Airworthiness Simulator */}
      <ChecklistSimulator />

      {/* Contact Section & Industrial Footer */}
      <ContactSection onOpenResume={() => setResumeOpen(true)} />

      {/* Technical Resume Modal (Printable & Downloadable) */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </main>
  );
}
