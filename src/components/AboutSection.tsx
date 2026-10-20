"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  ShieldCheck,
  Award,
  BookOpen,
  Wrench,
  CheckCircle2,
  Building2,
  FileCheck,
  AlertOctagon,
  Cpu,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"education" | "philosophy" | "compliance">("education");

  return (
    <section id="about" className="py-24 bg-[#080e1b] relative border-t border-slate-800/80">
      {/* Decorative background grid and aviation cues */}
      <div className="absolute inset-0 aviation-grid-fine opacity-25 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-amber-400 mb-2">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span>01 // Professional Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            About Geoffrey Lee P. Rom
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base sm:text-lg">
            Engineering discipline honed through premier aeronautical education and hands-on maintenance execution on both modern civil transports and training airframes.
          </p>
        </div>

        {/* Top Grid: PhilSCA Banner & Biography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          {/* Left: Biography Narrative */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-base">
            <div className="p-6 rounded-xl bg-slate-900/80 border border-slate-800 shadow-xl relative overflow-hidden">
              <div className="w-1.5 h-full bg-amber-500 absolute top-0 left-0" />
              <h3 className="text-lg font-bold text-white mb-2 font-sans flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-amber-400" />
                <span>Career Objective // Aircraft Maintenance Technician</span>
              </h3>
              <p className="text-slate-300 mb-4 text-justify leading-relaxed">
                {PERSONAL_INFO.careerObjective}
              </p>
              <div className="pt-3 border-t border-slate-800 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>PhilSCA Trained</span>
                </span>
                <span>•</span>
                <span>Location: {PERSONAL_INFO.location}</span>
                <span>•</span>
                <span>Hub: {PERSONAL_INFO.primaryAirport}</span>
              </div>
            </div>

            {/* Core Competency Pillars from Resume */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors">
                <div className="flex items-center gap-2 text-white font-bold text-sm mb-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Visual & Operational Inspections</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Conducted comprehensive visual walkthroughs and operational system checks of aircraft airframes, control surfaces, and powerplants.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors">
                <div className="flex items-center gap-2 text-white font-bold text-sm mb-1.5">
                  <AlertOctagon className="w-4 h-4 text-amber-400" />
                  <span>Human Factors Awareness</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Applied proactive human factors principles and the Dirty Dozen framework in daily ground and flightline operations.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors">
                <div className="flex items-center gap-2 text-white font-bold text-sm mb-1.5">
                  <Wrench className="w-4 h-4 text-cyan-400" />
                  <span>Ramp Safety & Ground Tools</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Followed strict ramp safety procedures, calibrated ground tool handling, and foreign object debris (FOD) mitigation.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors">
                <div className="flex items-center gap-2 text-white font-bold text-sm mb-1.5">
                  <Building2 className="w-4 h-4 text-purple-400" />
                  <span>Team Coordination</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Worked effectively as part of a high-tempo technical team to ensure synchronized, safe, and coordinated airport ramp operations.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Complete Educational Record from Resume */}
          <div className="lg:col-span-5">
            <div className="rounded-xl bg-gradient-to-br from-slate-900 to-[#0e172a] border border-amber-500/40 p-6 sm:p-7 shadow-2xl relative overflow-hidden chamfer-card">
              <div className="hazard-stripes-accent h-1.5 w-full absolute top-0 left-0" />

              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-amber-400 font-bold uppercase tracking-widest block">
                      Official Education History
                    </span>
                    <h4 className="text-base font-bold text-white">Academic Credentials</h4>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  VERIFIED
                </span>
              </div>

              <div className="space-y-4 text-sm font-sans">
                {/* Tertiary */}
                <div className="p-3.5 rounded-lg bg-slate-950/70 border border-slate-800">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-amber-400 font-bold uppercase">
                      TERTIARY // PhilSCA
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">2022 - 2026</span>
                  </div>
                  <div className="text-white font-bold text-sm mt-1">
                    Philippine State College of Aeronautics
                  </div>
                  <div className="text-xs text-slate-300 mt-1 space-y-0.5">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      <span>Associate in Aircraft Maintenance (2022 - 2024, Graduate)</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span>Bachelor in Aircraft Maintenance Technology (2025 - 2026, Graduate)</span>
                    </div>
                  </div>
                </div>

                {/* Secondary */}
                <div className="p-3.5 rounded-lg bg-slate-950/70 border border-slate-800">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-cyan-400 font-bold uppercase">
                      SECONDARY // STEM STRAND
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">Class of 2022</span>
                  </div>
                  <div className="text-white font-bold text-sm mt-1">
                    Academia de San Jose
                  </div>
                  <div className="text-xs text-slate-300 mt-1">
                    Strand STEM • Graduated June 2022
                  </div>
                </div>

                {/* Primary */}
                <div className="p-3.5 rounded-lg bg-slate-950/70 border border-slate-800">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-400 font-bold uppercase">
                      PRIMARY EDUCATION
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">Class of 2016</span>
                  </div>
                  <div className="text-white font-bold text-sm mt-1">
                    Academia de San Jose
                  </div>
                  <div className="text-xs text-slate-300 mt-1">
                    Graduated March 2016
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800 flex items-center justify-between font-mono text-[11px] text-slate-400">
                  <span>DISCIPLINE: AMT</span>
                  <span className="text-amber-400">STATUS: GRADUATE</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Deep-Dive Tabs */}
        <div className="bg-slate-900/60 rounded-xl border border-slate-800 p-6 backdrop-blur-sm">
          <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-4 mb-6">
            <button
              onClick={() => setActiveTab("education")}
              className={`px-4 py-2 rounded-md font-mono text-xs tracking-wider transition-all cursor-pointer ${
                activeTab === "education"
                  ? "bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20"
                  : "bg-slate-800/60 text-slate-300 hover:text-white hover:bg-slate-800"
              }`}
            >
              01 // INTERNSHIP & PRACTICAL TRAINING
            </button>
            <button
              onClick={() => setActiveTab("philosophy")}
              className={`px-4 py-2 rounded-md font-mono text-xs tracking-wider transition-all cursor-pointer ${
                activeTab === "philosophy"
                  ? "bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20"
                  : "bg-slate-800/60 text-slate-300 hover:text-white hover:bg-slate-800"
              }`}
            >
              02 // HUMAN FACTORS & RAMP SAFETY
            </button>
            <button
              onClick={() => setActiveTab("compliance")}
              className={`px-4 py-2 rounded-md font-mono text-xs tracking-wider transition-all cursor-pointer ${
                activeTab === "compliance"
                  ? "bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20"
                  : "bg-slate-800/60 text-slate-300 hover:text-white hover:bg-slate-800"
              }`}
            >
              03 // LANGUAGES & COMMUNICATION
            </button>
          </div>

          {activeTab === "education" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans text-sm animate-in fade-in">
              <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800">
                <div className="font-mono text-xs text-amber-400 font-bold mb-1">INTERNSHIP FOCUS 01</div>
                <div className="font-bold text-white text-base mb-2">Aircraft Marshalling Procedures</div>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Assisted in aircraft marshalling procedures under qualified supervision. Hands-on execution of standardized ICAO marshalling wand signals, gate arrival alignment, and ramp boundary coordination.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800">
                <div className="font-mono text-xs text-cyan-400 font-bold mb-1">INTERNSHIP FOCUS 02</div>
                <div className="font-bold text-white text-base mb-2">Aircraft Refueling Operations</div>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Observed and supported aircraft refueling operations strictly following aviation safety procedures, static bonding grounding wires, fuel sampling checks, and fire safety zone protocols.
                </p>
              </div>
            </div>
          )}

          {activeTab === "philosophy" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans text-sm animate-in fade-in">
              <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800">
                <div className="font-mono text-xs text-red-400 font-bold mb-1">HUMAN FACTORS</div>
                <div className="font-bold text-white text-base mb-2">Daily Ground Operations</div>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Active vigilance against fatigue, complacency, and situational distractions to maintain zero-incident ramp environments.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800">
                <div className="font-mono text-xs text-amber-400 font-bold mb-1">RAMP SAFETY</div>
                <div className="font-bold text-white text-base mb-2">Ground Tools & FOD Control</div>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Rigorous tool accountability, calibrated equipment handling, and continuous apron sweeps to prevent foreign object debris damage.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800">
                <div className="font-mono text-xs text-emerald-400 font-bold mb-1">TEAMWORK</div>
                <div className="font-bold text-white text-base mb-2">Coordinated Execution</div>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Seamless communication between wing walkers, pushback operators, and ground leads to guarantee synchronized turnaround operations.
                </p>
              </div>
            </div>
          )}

          {activeTab === "compliance" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans text-sm animate-in fade-in">
              <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800">
                <div className="font-mono text-xs text-amber-400 font-bold mb-1">LANGUAGE // 01</div>
                <div className="font-bold text-white text-base mb-2">English</div>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Professional working proficiency. Fluent reading and technical comprehension of Aircraft Maintenance Manuals (AMM), safety notices, and aviation communication standards.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800">
                <div className="font-mono text-xs text-cyan-400 font-bold mb-1">LANGUAGE // 02</div>
                <div className="font-bold text-white text-base mb-2">Filipino</div>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Native language fluency. Clear, prompt verbal coordination with local maintenance crews, ramp staff, and ground service teams.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
