"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Flame,
  Truck,
  Wrench,
  CheckCircle2,
  ChevronRight,
  BookOpen,
  Cpu,
  Layers,
  ArrowUpRight,
} from "lucide-react";
import { COMPETENCIES, CompetencyCategory } from "@/data/portfolioData";

export const CompetenciesSection: React.FC = () => {
  const [selectedCompetency, setSelectedCompetency] = useState<CompetencyCategory>(COMPETENCIES[0]);
  const [activeTab, setActiveTab] = useState<string>("airframe");

  return (
    <section id="competencies" className="py-24 bg-[#060a12] relative border-t border-slate-800/80">
      <div className="absolute inset-0 aviation-grid opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-amber-400 mb-2">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span>02 // Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Technical Engineering Disciplines
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base sm:text-lg">
            Rigorous hands-on competence across Airframe structural engineering, Powerplant turbine diagnostics, and high-tempo Ground Operations Technology.
          </p>
        </div>

        {/* 3-Column Grid for the 3 Core Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {COMPETENCIES.map((comp) => {
            const isSelected = selectedCompetency.id === comp.id;
            return (
              <motion.div
                key={comp.id}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                onClick={() => {
                  setSelectedCompetency(comp);
                  setActiveTab(comp.id);
                }}
                className={`relative rounded-xl p-6 sm:p-7 border cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? "bg-slate-900/90 border-amber-500 shadow-xl shadow-amber-500/10 ring-1 ring-amber-500/50"
                    : "bg-slate-900/50 border-slate-800 hover:border-slate-700 hover:bg-slate-900/80"
                }`}
              >
                {/* Top Corner Chamfer Indicator */}
                <div className="flex items-center justify-between mb-5">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center border ${
                      comp.id === "airframe"
                        ? "bg-cyan-500/10 border-cyan-500/30 text-cyan-400"
                        : comp.id === "powerplant"
                        ? "bg-amber-500/10 border-amber-500/30 text-amber-400"
                        : "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                    }`}
                  >
                    {comp.id === "airframe" && <ShieldCheck className="w-6 h-6" />}
                    {comp.id === "powerplant" && <Flame className="w-6 h-6" />}
                    {comp.id === "ground_ops" && <Truck className="w-6 h-6" />}
                  </div>

                  <span
                    className={`font-mono text-[10px] uppercase px-2 py-0.5 rounded border ${
                      isSelected
                        ? "bg-amber-500/20 text-amber-300 border-amber-500/40"
                        : "bg-slate-800 text-slate-400 border-slate-700"
                    }`}
                  >
                    {isSelected ? "ACTIVE FOCUS" : "SELECT TO INSPECT"}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{comp.title}</h3>
                  <div className="text-xs font-mono text-amber-400/90 mb-3">{comp.subtitle}</div>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {comp.description}
                  </p>
                </div>

                {/* Quick sub-skills chips */}
                <div className="space-y-2 pt-4 border-t border-slate-800/80">
                  <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                    Core Capabilities:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {comp.skills.slice(0, 3).map((sk) => (
                      <span
                        key={sk.name}
                        className="text-[11px] px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 font-mono"
                      >
                        {sk.name}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3 flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-500">ATA Chapters:</span>
                    <span className="text-amber-400 font-semibold">{comp.ataChapters.length} Chapters</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Detailed Inspection Drawer for Selected Competency */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCompetency.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="rounded-xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 shadow-2xl relative overflow-hidden"
          >
            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800 gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest mb-1">
                  <Wrench className="w-3.5 h-3.5" />
                  <span>Technical Specification Matrix // {selectedCompetency.title}</span>
                </div>
                <h4 className="text-2xl font-bold text-white">{selectedCompetency.subtitle}</h4>
              </div>

              {/* ATA Tag Badges */}
              <div className="flex flex-wrap items-center gap-2">
                {selectedCompetency.ataChapters.map((ata) => (
                  <span
                    key={ata}
                    className="text-[11px] font-mono px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-slate-300"
                  >
                    {ata}
                  </span>
                ))}
              </div>
            </div>

            {/* Skills Detailed Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              {selectedCompetency.skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="p-5 rounded-lg bg-slate-950/70 border border-slate-800/80 hover:border-slate-700 transition-colors group"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2.5">
                      <span className="w-6 h-6 rounded bg-slate-900 border border-slate-700 flex items-center justify-center font-mono text-xs text-amber-400 font-bold">
                        0{index + 1}
                      </span>
                      <h5 className="font-bold text-white text-base group-hover:text-amber-300 transition-colors">
                        {skill.name}
                      </h5>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800 shrink-0">
                      {skill.standard}
                    </span>
                  </div>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed pl-8">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Tooling Arsenal Footer */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Cpu className="w-4 h-4 text-amber-400" />
                  <span>Tooling & Equipment Deployed:</span>
                </span>
                {selectedCompetency.tooling.map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-1 rounded bg-slate-800/90 text-amber-300 text-[11px] border border-slate-700"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <div className="text-slate-500 text-[11px] shrink-0">
                STANDARD: PhilSCA & CAAP Part 145 Syllabi
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
