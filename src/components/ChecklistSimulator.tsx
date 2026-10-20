"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Circle,
  AlertTriangle,
  RotateCcw,
  PlaneTakeoff,
  ShieldCheck,
  FileText,
  Activity,
  Award,
} from "lucide-react";
import { PREFLIGHT_CHECKLIST } from "@/data/portfolioData";

export const ChecklistSimulator: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const toggleCheck = (id: string) => {
    if (checkedItems.includes(id)) {
      setCheckedItems(checkedItems.filter((item) => item !== id));
    } else {
      setCheckedItems([...checkedItems, id]);
    }
  };

  const handleSelectAll = () => {
    if (checkedItems.length === PREFLIGHT_CHECKLIST.length) {
      setCheckedItems([]);
    } else {
      setCheckedItems(PREFLIGHT_CHECKLIST.map((item) => item.id));
    }
  };

  const progressPercent = Math.round(
    (checkedItems.length / PREFLIGHT_CHECKLIST.length) * 100
  );
  const isComplete = progressPercent === 100;

  return (
    <section id="checklist" className="py-24 bg-[#060a12] relative border-t border-slate-800/80">
      <div className="absolute inset-0 aviation-grid opacity-25 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-amber-400 mb-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>04 // Interactive Simulation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Pre-Flight Airworthiness Simulator
            </h2>
            <p className="mt-3 text-slate-400 max-w-2xl text-base">
              Experience the rigorous step-by-step verification protocol executed prior to signing the aircraft maintenance release and authorizing departure.
            </p>
          </div>

          {/* Quick Action Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleSelectAll}
              className="px-4 py-2 rounded-lg bg-slate-900 border border-slate-700 hover:border-amber-500/50 text-slate-300 hover:text-amber-400 font-mono text-xs transition-colors cursor-pointer flex items-center gap-2"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{isComplete ? "Reset Inspection" : "Verify All Items"}</span>
            </button>
          </div>
        </div>

        {/* Inspection Cockpit Console */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Interactive Checklist Items */}
          <div className="lg:col-span-7 space-y-3.5">
            {PREFLIGHT_CHECKLIST.map((item, index) => {
              const isChecked = checkedItems.includes(item.id);
              return (
                <div
                  key={item.id}
                  onClick={() => toggleCheck(item.id)}
                  className={`p-4 sm:p-5 rounded-xl border cursor-pointer transition-all duration-200 flex items-start gap-4 ${
                    isChecked
                      ? "bg-slate-900/90 border-emerald-500/60 shadow-lg shadow-emerald-500/5"
                      : "bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/60"
                  }`}
                >
                  <button
                    type="button"
                    aria-label={`Toggle item ${index + 1}`}
                    className={`mt-0.5 w-6 h-6 rounded flex items-center justify-center transition-colors shrink-0 ${
                      isChecked
                        ? "bg-emerald-500 text-slate-950"
                        : "border border-slate-700 text-transparent hover:border-amber-400"
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4" />
                  </button>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs text-amber-400 font-bold">
                          CHECK-0{index + 1}
                        </span>
                        <h4
                          className={`font-bold text-sm sm:text-base ${
                            isChecked ? "text-slate-100" : "text-slate-200"
                          }`}
                        >
                          {item.item}
                        </h4>
                      </div>
                      <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800 shrink-0">
                        {item.standard}
                      </span>
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed font-sans">
                      {item.action}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Airworthiness Status Telemetry Console */}
          <div className="lg:col-span-5">
            <div className="rounded-xl bg-slate-900/90 border border-slate-800 p-6 sm:p-7 shadow-2xl relative overflow-hidden chamfer-card">
              <div className="hazard-stripes-accent h-1.5 w-full absolute top-0 left-0" />

              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6 mt-1">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-amber-400" />
                  <span className="font-mono text-xs uppercase tracking-wider text-slate-300 font-semibold">
                    Airworthiness Index
                  </span>
                </div>
                <span
                  className={`font-mono text-[10px] px-2 py-0.5 rounded border ${
                    isComplete
                      ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/40 font-bold"
                      : "bg-amber-500/10 text-amber-400 border-amber-500/20"
                  }`}
                >
                  {isComplete ? "DISPATCH CLEARED" : "INSPECTION ACTIVE"}
                </span>
              </div>

              {/* Progress Gauge */}
              <div className="mb-6">
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <span className="text-slate-400">Completion Gauge:</span>
                  <span
                    className={`font-bold text-lg ${
                      isComplete ? "text-emerald-400" : "text-amber-400"
                    }`}
                  >
                    {progressPercent}%
                  </span>
                </div>

                <div className="w-full h-3 rounded-full bg-slate-950 overflow-hidden p-0.5 border border-slate-800">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      isComplete
                        ? "bg-gradient-to-r from-emerald-500 to-teal-400 shadow-md shadow-emerald-500/50"
                        : "bg-gradient-to-r from-amber-500 to-orange-500"
                    }`}
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>

                <div className="flex justify-between items-center text-[10px] font-mono text-slate-500 mt-1">
                  <span>0% GROUND HOLD</span>
                  <span>50% IN-PROGRESS</span>
                  <span>100% FLIGHT RELEASE</span>
                </div>
              </div>

              {/* Release Certificate Stamp */}
              {isComplete ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-5 rounded-lg bg-emerald-950/40 border border-emerald-500/50 text-emerald-300 font-mono text-xs space-y-3 mb-6"
                >
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm uppercase">
                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
                    <span>Airworthiness Release Authorized</span>
                  </div>
                  <p className="text-slate-300 text-xs font-sans leading-relaxed">
                    All 6 primary safety checkpoints verified against Aircraft Maintenance Manual standards. Aircraft is cleared for pushback, taxi, and flight operations.
                  </p>
                  <div className="pt-2 border-t border-emerald-800/60 flex items-center justify-between text-[11px]">
                    <span>Certifying AMT: Geoffrey Lee P. Rom</span>
                    <span className="text-emerald-400 font-bold">PhilSCA AMT</span>
                  </div>
                </motion.div>
              ) : (
                <div className="p-4 rounded-lg bg-slate-950/70 border border-slate-800 text-slate-400 font-mono text-xs space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-amber-400 font-semibold">
                    <AlertTriangle className="w-4 h-4" />
                    <span>
                      {PREFLIGHT_CHECKLIST.length - checkedItems.length} Checklist Items Remaining
                    </span>
                  </div>
                  <p className="text-slate-400 text-xs font-sans">
                    Under CAAP PCAR Part 8 regulations, all items must be physically verified before signing the technical log.
                  </p>
                </div>
              )}

              {/* Summary telemetry list */}
              <div className="space-y-2 font-mono text-xs pt-2 border-t border-slate-800">
                <div className="flex justify-between text-slate-400">
                  <span>Station / Ramp:</span>
                  <span className="text-slate-200">RPVM Apron Stand 8 (Cebu)</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Standard Manual:</span>
                  <span className="text-slate-200">AMM Ch. 34/72/32/71</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Discrepancy Log:</span>
                  <span className="text-emerald-400 font-semibold">0 Defects Recorded</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
