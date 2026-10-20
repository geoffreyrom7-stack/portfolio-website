"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FileDown,
  ArrowRight,
  ShieldCheck,
  Plane,
  Compass,
  Activity,
  Award,
  Layers,
  MapPin,
  CheckCircle2,
  Cpu,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

interface HeroSectionProps {
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-20 flex flex-col justify-center overflow-hidden aviation-grid"
    >
      {/* Background Aircraft Hangar Imagery with High-Tech Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 transform scale-105 transition-transform duration-1000 ease-out"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=2000&q=85')",
          }}
        />
        {/* Layered Aerospace Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#060a12]/90 via-[#060a12]/80 to-[#060a12]" />
        <div className="absolute inset-0 bg-radial from-amber-500/5 via-transparent to-transparent" />

        {/* Subtle Aviation HUD Crosshairs & Scanlines */}
        <div className="absolute top-1/4 left-8 hidden lg:block opacity-20 pointer-events-none">
          <div className="w-24 h-24 border border-dashed border-amber-400 rounded-full flex items-center justify-center animate-radar">
            <div className="w-1 h-12 bg-amber-400/60" />
          </div>
          <span className="font-mono text-[10px] text-amber-400 mt-2 block tracking-widest">
            RADAR: MNL-TMA 14.5°N
          </span>
        </div>

        <div className="absolute bottom-1/4 right-10 hidden lg:block opacity-25 pointer-events-none font-mono text-[11px] text-slate-500 space-y-1">
          <div>HDG 062° // ALT 000FT MSL</div>
          <div>BARO 29.92 INHG // QNH 1013</div>
          <div className="text-amber-500/80">AIRFRAME RELEASE: READY</div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Top Operational Status Banner */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 sm:gap-3 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/30 text-amber-300 text-xs font-mono shadow-lg mb-6 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-amber-400 beacon-amber" />
          <span className="font-semibold tracking-wider uppercase text-[11px] sm:text-xs">
            PhilSCA Trained
          </span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-300 hidden sm:inline">
            Philippine State College of Aeronautics Graduate
          </span>
          <span className="text-slate-300 sm:hidden">PhilSCA AMT</span>
          <span className="text-slate-600 hidden sm:inline">|</span>
          <span className="text-emerald-400 hidden sm:inline flex items-center gap-1 font-semibold">
            <CheckCircle2 className="w-3 h-3" /> Airworthiness Verified
          </span>
        </motion.div>

        {/* Main Hero Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div className="flex items-center gap-2 text-slate-400 font-mono text-sm tracking-widest uppercase mb-2">
                <Plane className="w-4 h-4 text-amber-400 transform -rotate-45" />
                <span>Aviation Maintenance Portfolio</span>
                <span className="text-amber-500/70 font-bold">#AMT-2026</span>
              </div>

              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-4 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400">
                  {PERSONAL_INFO.name}
                </span>
              </h1>

              {/* Tagline requested in prompt */}
              <div className="relative inline-block mb-6">
                <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-amber-400 tracking-wide font-sans flex items-center gap-2">
                  <span className="w-1.5 h-7 bg-amber-500 rounded-sm inline-block" />
                  <span>{PERSONAL_INFO.tagline}</span>
                </div>
              </div>

              <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed mb-8">
                {PERSONAL_INFO.subTagline}
              </p>

              {/* Core Skill Badges */}
              <div className="flex flex-wrap gap-2.5 mb-9">
                <div className="px-3 py-1.5 rounded bg-slate-900/80 border border-slate-700/80 text-slate-200 text-xs font-mono flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span className="text-cyan-300 font-semibold">AIRFRAME:</span> Structural Inspection & Composites
                </div>
                <div className="px-3 py-1.5 rounded bg-slate-900/80 border border-slate-700/80 text-slate-200 text-xs font-mono flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span className="text-amber-300 font-semibold">POWERPLANT:</span> Turbine & Systems Diagnostics
                </div>
                <div className="px-3 py-1.5 rounded bg-slate-900/80 border border-slate-700/80 text-slate-200 text-xs font-mono flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span className="text-emerald-300 font-semibold">GROUND OPS:</span> Tarmac Safety & GSE
                </div>
              </div>

              {/* Call to Actions */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenResume}
                  className="group relative inline-flex items-center gap-3 px-6 py-3.5 rounded-md bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm uppercase tracking-wider shadow-xl shadow-amber-500/20 hover:shadow-amber-500/40 transition-all cursor-pointer active:scale-95"
                >
                  <FileDown className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                  <span>Download Resume</span>
                  <div className="w-2 h-2 rounded-full bg-slate-950/40 group-hover:bg-slate-950 transition-colors" />
                </button>

                <a
                  href="#gallery"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-sm border border-slate-700/80 hover:border-slate-600 transition-all cursor-pointer"
                >
                  <span>Operations Gallery</span>
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </a>

                <a
                  href="#checklist"
                  className="inline-flex items-center gap-2 px-4 py-3.5 rounded-md bg-transparent hover:bg-slate-800/40 text-slate-400 hover:text-amber-400 font-mono text-xs transition-colors"
                >
                  <Cpu className="w-4 h-4" />
                  <span>Inspection Sim</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Telemetry / HUD Card */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative rounded-xl bg-slate-900/85 border border-slate-800 p-6 shadow-2xl backdrop-blur-md overflow-hidden chamfer-card"
            >
              {/* Caution stripe accent bar */}
              <div className="h-1.5 w-full hazard-stripes-accent absolute top-0 left-0" />

              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4 mt-1">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-amber-400" />
                  <span className="font-mono text-xs uppercase tracking-wider text-slate-300 font-semibold">
                    Technical Specifications
                  </span>
                </div>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  SYSTEM READY
                </span>
              </div>

              {/* Verified Education & Alma Mater */}
              <div className="space-y-4 font-mono text-xs">
                <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800/80">
                  <div className="text-[11px] text-amber-400 font-bold uppercase tracking-wider flex items-center gap-1.5 mb-1">
                    <Award className="w-3.5 h-3.5" />
                    <span>Alma Mater</span>
                  </div>
                  <div className="text-slate-100 font-semibold text-sm leading-snug">
                    Philippine State College of Aeronautics (PhilSCA)
                  </div>
                  <div className="text-slate-400 text-[11px] mt-1">
                    Premier Aviation State College • Piccio Field, Villamor Air Base
                  </div>
                </div>

                {/* Quick specs grid */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded bg-slate-950/60 border border-slate-800">
                    <div className="text-slate-500 text-[10px] uppercase">Specialization</div>
                    <div className="text-slate-200 font-semibold text-xs mt-0.5">Airframe & Powerplant</div>
                  </div>
                  <div className="p-3 rounded bg-slate-950/60 border border-slate-800">
                    <div className="text-slate-500 text-[10px] uppercase">Safety Standard</div>
                    <div className="text-emerald-400 font-semibold text-xs mt-0.5">CAAP / FAA Compliant</div>
                  </div>
                  <div className="p-3 rounded bg-slate-950/60 border border-slate-800">
                    <div className="text-slate-500 text-[10px] uppercase">Primary Facility</div>
                    <div className="text-slate-200 font-semibold text-xs mt-0.5">Villamor & Clark MRO</div>
                  </div>
                  <div className="p-3 rounded bg-slate-950/60 border border-slate-800">
                    <div className="text-slate-500 text-[10px] uppercase">Safety Metric</div>
                    <div className="text-amber-400 font-semibold text-xs mt-0.5">100% Zero Defect</div>
                  </div>
                </div>

                {/* Flightline Coordinates Pin */}
                <div className="flex items-center gap-2 pt-2 text-[11px] text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Base: RPLL (Villamor) & RPLC (Clark), PH</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Key Metric Counters */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-10 border-t border-slate-800/80">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
              className="p-4 rounded-lg bg-slate-900/60 border border-slate-800/80 hover:border-amber-500/30 transition-colors group"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-500 font-mono mt-0.5">
                {stat.detail}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
