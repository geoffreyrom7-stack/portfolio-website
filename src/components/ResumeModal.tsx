"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Printer,
  Download,
  Mail,
  MapPin,
  Award,
  GraduationCap,
  Wrench,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

const LinkedInIcon = ({ className = "w-3.5 h-3.5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);
import { PERSONAL_INFO, COMPETENCIES } from "@/data/portfolioData";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadText = () => {
    const resumeText = `
GEOFFREY LEE P. ROM
Aircraft Maintenance Professional
Email: ${PERSONAL_INFO.email}
LinkedIn: ${PERSONAL_INFO.linkedin}
Location: ${PERSONAL_INFO.location}
Specializations: Airframe, Powerplant & Ground Operations Technology

============================================================
PROFESSIONAL SUMMARY
============================================================
Dedicated Aircraft Maintenance Professional trained at the Philippine State College of Aeronautics (PhilSCA). Rigorous practical expertise in airframe structural repairs, composite matrix remediation, gas turbine engine diagnostics, and high-tempo tarmac ground support equipment handling. Strict adherence to CAAP PCAR Part 5/8, FAA AC 43.13-1B, and OEM Aircraft Maintenance Manuals with an uncompromising 100% zero-defect safety record.

============================================================
EDUCATION & AERONAUTICAL CREDENTIALS
============================================================
Philippine State College of Aeronautics (PhilSCA)
Bachelor of Science in Aviation Maintenance Technology (AMT)
Campus: Piccio Field, Villamor Air Base, Pasay City, Metro Manila
Honors: Aviation Safety & Airworthiness Excellence Awardee
- Premier public state college specializing in aviation education in the Philippines.
- Intensive theoretical engineering and flightline laboratory practicum.

============================================================
CORE TECHNICAL COMPETENCIES
============================================================
1. AIRFRAME TECHNOLOGY
- Structural Inspection & NDT (Dye Penetrant, Eddy Current, Ultrasonic)
- Composite & Honeycomb Structural Repair (Vacuum-bag hot-bonding)
- Precision Sheet Metal Fabrication, solid flush riveting (2117-T, 2024-T)
- Flight Control Cable Rigging & Tensiometer indexing (ATA Chapter 27)

2. POWERPLANT DIAGNOSTICS
- Gas Turbine & Turbofan Engine Maintenance (CFM56, Pratt & Whitney)
- Video Borescope inspection of HPT nozzle guide vanes and compressor blades
- Fuel Metering Unit (FMU) and Full Authority Digital Engine Control (FADEC)
- Engine Ground-Run Parameter Evaluation (EGT margin, N1/N2 spools, vibration)

3. GROUND OPERATIONS TECHNOLOGY
- Tarmac Safety Coordination & Aircraft Pushback Maneuvers
- Ground Support Equipment (GSE): 400Hz GPU, Air Start Units, Towbarless Tugs
- Foreign Object Debris (FOD) mitigation & Ramp Safety Audits
- Rapid Turnaround Pre-Departure Walkaround Inspections

============================================================
SPECIALIZED TOOLING & INSTRUMENTATION
============================================================
- Olympus Industrial Videoscope, Barfield Digital Pressure Calibrator
- Chicago Pneumatic 3X/4X Rivet Guns & Tungsten Bucking Bars
- Hot-Bonder Composite Cure Controllers, Cable Tensiometers
- Snap-on Calibrated Aviation Torque Multipliers

============================================================
REGULATORY FRAMEWORKS & SAFETY COMPLIANCE
============================================================
- CAAP PCAR Part 5 (Airworthiness) & Part 8 (Operations)
- FAA AC 43.13-1B / 2B Standard Aircraft Maintenance Practices
- Human Factors in Aviation Maintenance (Dirty Dozen Defense)
- Aircraft Maintenance Manual (AMM) & Structural Repair Manual (SRM)
`;

    const blob = new Blob([resumeText.trim()], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Geoffrey_Lee_P_Rom_Aviation_Resume.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto print:p-0 print:bg-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-xl bg-slate-900 border border-slate-700 shadow-2xl p-6 sm:p-10 text-slate-200 print:text-black print:bg-white print:border-none print:max-h-full print:shadow-none"
      >
        {/* Modal Controls (Hidden in Print) */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800 print:hidden mb-6">
          <div className="flex items-center gap-2 font-mono text-xs text-amber-400 font-bold uppercase tracking-wider">
            <Award className="w-4 h-4" />
            <span>Technical Aviation Curriculum Vitae</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-amber-400" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={handleDownloadText}
              className="px-3 py-1.5 rounded bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Text</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Printable Body */}
        <div className="space-y-6 font-sans">
          {/* Header */}
          <div className="border-b-2 border-amber-500 pb-5">
            <h1 className="text-3xl font-extrabold text-white print:text-black tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            <div className="text-base font-semibold text-amber-400 print:text-amber-800 mt-1">
              {PERSONAL_INFO.title} • PhilSCA Graduate
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 print:text-gray-600 mt-3">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-amber-400 print:text-gray-800" />
                {PERSONAL_INFO.email}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-amber-400 print:text-gray-800" />
                {PERSONAL_INFO.location}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <LinkedInIcon className="w-3.5 h-3.5 text-amber-400 print:text-gray-800" />
                {PERSONAL_INFO.linkedin}
              </span>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 print:text-black mb-1.5 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-amber-400 print:text-black" />
              <span>Professional Summary</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 print:text-gray-800 leading-relaxed">
              Aircraft Maintenance Professional trained at the Philippine State College of Aeronautics (PhilSCA) with comprehensive hands-on flightline and hangar practicum. Experienced in airframe structural repair, composite matrix restoration, turbine engine diagnostic borescoping, and turnaround ground support equipment operations. Proven track record of 100% adherence to Civil Aviation Authority of the Philippines (CAAP) PCAR Part 5/8 and FAA AC 43.13 airworthiness guidelines.
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 print:text-black mb-2 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-amber-400 print:text-black" />
              <span>Aeronautical Education & Institutional Background</span>
            </h2>
            <div className="p-4 rounded-lg bg-slate-950/60 print:bg-gray-100 border border-slate-800 print:border-gray-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="font-bold text-white print:text-black text-sm">
                  {PERSONAL_INFO.education.institution}
                </h3>
                <span className="text-xs font-mono text-amber-400 print:text-gray-700">
                  Piccio Field, Pasay City
                </span>
              </div>
              <div className="text-xs text-slate-300 print:text-gray-800 font-semibold mt-0.5">
                {PERSONAL_INFO.education.degree}
              </div>
              <p className="text-xs text-slate-400 print:text-gray-600 mt-2 leading-relaxed">
                {PERSONAL_INFO.education.description}
              </p>
              <div className="mt-2 text-[11px] font-mono text-emerald-400 print:text-green-800 font-semibold">
                Special Recognition: {PERSONAL_INFO.education.honors}
              </div>
            </div>
          </div>

          {/* Technical Competencies Matrix */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 print:text-black mb-2 flex items-center gap-1.5">
              <Wrench className="w-4 h-4 text-amber-400 print:text-black" />
              <span>Core Maintenance Competencies</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded bg-slate-950/60 print:bg-gray-100 border border-slate-800 print:border-gray-300">
                <div className="font-bold text-cyan-400 print:text-blue-800 mb-1">
                  Airframe Technology
                </div>
                <ul className="space-y-1 text-slate-300 print:text-gray-700 list-disc list-inside">
                  <li>Composite vacuum hot-bonding</li>
                  <li>Sheet metal flush riveting</li>
                  <li>Non-Destructive Testing (NDT)</li>
                  <li>Control cable tension rigging</li>
                </ul>
              </div>

              <div className="p-3 rounded bg-slate-950/60 print:bg-gray-100 border border-slate-800 print:border-gray-300">
                <div className="font-bold text-amber-400 print:text-amber-800 mb-1">
                  Powerplant Diagnostics
                </div>
                <ul className="space-y-1 text-slate-300 print:text-gray-700 list-disc list-inside">
                  <li>CFM56 turbofan borescoping</li>
                  <li>Hot section inspection (HSI)</li>
                  <li>FADEC sensor cross-check</li>
                  <li>Fuel metering & ignition timing</li>
                </ul>
              </div>

              <div className="p-3 rounded bg-slate-950/60 print:bg-gray-100 border border-slate-800 print:border-gray-300">
                <div className="font-bold text-emerald-400 print:text-green-800 mb-1">
                  Ground Operations Tech
                </div>
                <ul className="space-y-1 text-slate-300 print:text-gray-700 list-disc list-inside">
                  <li>Tarmac safety & FOD mitigation</li>
                  <li>400Hz GPU & ASU coupling</li>
                  <li>ICAO aircraft marshaling wands</li>
                  <li>Turnaround safety audits</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tooling & Standards */}
          <div className="pt-2 text-xs font-mono text-slate-400 print:text-gray-600 border-t border-slate-800 print:border-gray-300 flex flex-col sm:flex-row justify-between gap-2">
            <div>
              <strong>Calibrated Arsenal:</strong> Olympus Videoscope, Snap-on Aviation Torques, Barfield Calibrators, Hot-Bonders.
            </div>
            <div>
              <strong>Certifying Body:</strong> CAAP PCAR / FAA AC 43.13 Compliant
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
