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
                <span>Dedicated to Uncompromising Aviation Safety</span>
              </h3>
              <p className="text-slate-300 mb-4">
                As an Aircraft Maintenance Professional trained at the prestigious{" "}
                <strong className="text-white font-semibold">
                  Philippine State College of Aeronautics (PhilSCA)
                </strong>
                , I operate on one core tenet: <em className="text-amber-300 not-italic">in aviation, precision is non-negotiable.</em> Every flight safety release represents human lives, complex multi-million dollar machinery, and strict regulatory stewardship.
              </p>
              <p className="text-slate-300">
                My education combined exhaustive engineering theory with rigorous flightline practicum on Piccio Field at Villamor Air Base. Whether conducting high-pressure borescope inspections on CFM56 turbofans, executing composite structural scarf repairs, or synchronizing high-tempo ground operations on active aprons, I uphold unwavering adherence to manufacturer manuals and international airworthiness mandates.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors">
                <div className="flex items-center gap-2 text-white font-bold text-sm mb-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Manual Adherence (AMM/SRM)</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Strict step-by-step cross-referencing of OEM maintenance procedures, torque tolerances, and component limits.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors">
                <div className="flex items-center gap-2 text-white font-bold text-sm mb-1.5">
                  <AlertOctagon className="w-4 h-4 text-amber-400" />
                  <span>Proactive FOD Mitigation</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Zero tolerance for foreign objects. Comprehensive ramp sweeps, tooling accountability, and intake inspections.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors">
                <div className="flex items-center gap-2 text-white font-bold text-sm mb-1.5">
                  <FileCheck className="w-4 h-4 text-cyan-400" />
                  <span>CAAP / FAA Compliance</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Fluent in Philippine Civil Aviation Regulations (PCAR) Parts 5 & 8, Airworthiness Directives (AD), and Service Bulletins (SB).
                </p>
              </div>

              <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors">
                <div className="flex items-center gap-2 text-white font-bold text-sm mb-1.5">
                  <Cpu className="w-4 h-4 text-purple-400" />
                  <span>Modern Diagnostic Tooling</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Experienced with digital videoscopes, non-destructive testing (NDT/NDI), automated pitot-static testers, and torque calibrators.
                </p>
              </div>
            </div>
          </div>

          {/* Right: PhilSCA Academic Institution Showcase */}
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
                      Aeronautical Alma Mater
                    </span>
                    <h4 className="text-base font-bold text-white">PhilSCA Credentials</h4>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  ACCREDITED
                </span>
              </div>

              <div className="space-y-4 text-sm font-sans">
                <div>
                  <div className="text-slate-400 text-xs font-mono">Institution:</div>
                  <div className="text-white font-bold text-base mt-0.5">
                    {PERSONAL_INFO.education.institution}
                  </div>
                  <div className="text-amber-300/90 text-xs font-medium mt-0.5">
                    Premier State College Specializing in Aviation Education
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-slate-950/70 border border-slate-800 text-xs text-slate-300 leading-relaxed font-sans">
                  {PERSONAL_INFO.education.description}
                </div>

                <div className="space-y-2 pt-1 font-mono text-xs">
                  <div className="flex items-start gap-2 text-slate-300">
                    <Building2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-200">Campus:</strong> Piccio Field, Villamor Air Base, Pasay City
                    </span>
                  </div>
                  <div className="flex items-start gap-2 text-slate-300">
                    <BookOpen className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-200">Curriculum:</strong> Aircraft Maintenance Technology (AMT)
                    </span>
                  </div>
                  <div className="flex items-start gap-2 text-slate-300">
                    <Award className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-200">Distinction:</strong> {PERSONAL_INFO.education.honors}
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between font-mono text-[11px] text-slate-400">
                  <span>DISCIPLINE: A&P TECH</span>
                  <span className="text-amber-400">CODE: PHILSCA-AMT</span>
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
              01 // PHILSCA LAB PRACTICUM
            </button>
            <button
              onClick={() => setActiveTab("philosophy")}
              className={`px-4 py-2 rounded-md font-mono text-xs tracking-wider transition-all cursor-pointer ${
                activeTab === "philosophy"
                  ? "bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20"
                  : "bg-slate-800/60 text-slate-300 hover:text-white hover:bg-slate-800"
              }`}
            >
              02 // SAFETY & HUMAN FACTORS
            </button>
            <button
              onClick={() => setActiveTab("compliance")}
              className={`px-4 py-2 rounded-md font-mono text-xs tracking-wider transition-all cursor-pointer ${
                activeTab === "compliance"
                  ? "bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20"
                  : "bg-slate-800/60 text-slate-300 hover:text-white hover:bg-slate-800"
              }`}
            >
              03 // REGULATORY COMPLIANCE
            </button>
          </div>

          {activeTab === "education" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans text-sm animate-in fade-in">
              <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800">
                <div className="font-mono text-xs text-amber-400 font-bold mb-1">PRACTICUM STAGE 1</div>
                <div className="font-bold text-white text-base mb-2">Reciprocating & Gas Turbines</div>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Extensive teardown and rebuild of Lycoming O-360 reciprocating engines and Pratt & Whitney PT6 / CFM56 turbine modular systems. Valve timing, magneto timing, and fuel injection synchronization.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800">
                <div className="font-mono text-xs text-cyan-400 font-bold mb-1">PRACTICUM STAGE 2</div>
                <div className="font-bold text-white text-base mb-2">Airframe Sheet Metal & Composites</div>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Precision layout, bend allowance calculation, structural flush riveting, skin patching, and modern vacuum-bagged composite matrix repair according to AC 43.13-1B standards.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800">
                <div className="font-mono text-xs text-emerald-400 font-bold mb-1">PRACTICUM STAGE 3</div>
                <div className="font-bold text-white text-base mb-2">Flightline & Ground Systems</div>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Live flightline pre-flight checklists, engine ground-run fire guard coordination, hydraulic cart coupling, and safety wire lockwiring with strict 6-to-8 twists per inch precision.
                </p>
              </div>
            </div>
          )}

          {activeTab === "philosophy" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans text-sm animate-in fade-in">
              <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800">
                <div className="font-mono text-xs text-red-400 font-bold mb-1">DIRTY DOZEN MITIGATION</div>
                <div className="font-bold text-white text-base mb-2">Human Factors Defense</div>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Systematic counter-measures against complacency, fatigue, pressure, and lack of assertiveness. Every maintenance action requires dual independent inspection when releasing primary flight controls.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800">
                <div className="font-mono text-xs text-amber-400 font-bold mb-1">JUST CULTURE</div>
                <div className="font-bold text-white text-base mb-2">Transparent Hazard Reporting</div>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Fostering immediate self-reporting of discrepancies, dropped tools, or procedural anomalies before aircraft return-to-service is authorized.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800">
                <div className="font-mono text-xs text-emerald-400 font-bold mb-1">ENVIRONMENTAL STEWARDSHIP</div>
                <div className="font-bold text-white text-base mb-2">Hazardous Fluid Containment</div>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Proper containment and disposal protocols for Skydrol phosphate-ester hydraulic fluids, turbine lubricating oils, and chemical paint strippers.
                </p>
              </div>
            </div>
          )}

          {activeTab === "compliance" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans text-sm animate-in fade-in">
              <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800">
                <div className="font-mono text-xs text-amber-400 font-bold mb-1">REGULATION 01</div>
                <div className="font-bold text-white text-base mb-2">CAAP PCAR Part 5</div>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Airworthiness standards for civil aircraft registered in the Philippines. Maintenance releases, airworthiness directive tracking, and major repair documentation.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800">
                <div className="font-mono text-xs text-cyan-400 font-bold mb-1">REGULATION 02</div>
                <div className="font-bold text-white text-base mb-2">FAA AC 43.13-1B / 2B</div>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Acceptable methods, techniques, and practices for aircraft inspection and repair, standard hardware torquing, electrical bonding, and safety wire procedures.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800">
                <div className="font-mono text-xs text-emerald-400 font-bold mb-1">REGULATION 03</div>
                <div className="font-bold text-white text-base mb-2">EASA Part-145 Familiarity</div>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Approved maintenance organization requirements, certifying staff responsibilities, independent quality audit systems, and component traceabilities.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
