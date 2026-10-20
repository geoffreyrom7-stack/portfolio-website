"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  X,
  Printer,
  Download,
  Mail,
  MapPin,
  Phone,
  Award,
  GraduationCap,
  Wrench,
  ShieldCheck,
  CheckCircle2,
  Plane,
  Languages,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

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
Aircraft Maintenance Technician

============================================================
CONTACT
============================================================
Phone:    ${PERSONAL_INFO.phone}
Address:  ${PERSONAL_INFO.address}
Email:    ${PERSONAL_INFO.email}

============================================================
CAREER OBJECTIVE
============================================================
${PERSONAL_INFO.careerObjective}

============================================================
EDUCATION
============================================================
TERTIARY:
Philippine State College of Aeronautics
- Associate 2022 - 2024 (Graduate)
- Bachelor 2025 - 2026 (Graduate)

SECONDARY:
Academia de San Jose
- Strand STEM
- Graduated last June 2022

PRIMARY:
Academia de San Jose
- Graduated last March 2016

============================================================
INTERNSHIP
============================================================
- Assisted in aircraft marshalling procedures under supervision
- Observed and supported aircraft refueling operations following safety procedures and protocols

============================================================
CORE COMPETENCIES
============================================================
- Performed visual and operational inspections of aircraft
- Applied human factors awareness in daily ground operations
- Followed ramp safety procedures and proper use of ground tools
- Worked effectively as part of a team to ensure safe and coordinated operations

============================================================
LANGUAGE
============================================================
- English
- Filipino
`;

    const blob = new Blob([resumeText.trim()], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Geoffrey_Lee_P_Rom_Resume.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto print:p-0 print:bg-white print:static print:h-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-xl bg-slate-900 border border-slate-700 shadow-2xl p-6 sm:p-10 text-slate-200 print:text-black print:bg-white print:border-none print:max-h-none print:p-6 print:shadow-none"
      >
        {/* Modal Controls (Hidden in Print) */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800 print:hidden mb-6">
          <div className="flex items-center gap-2 font-mono text-xs text-amber-400 font-bold uppercase tracking-wider">
            <Award className="w-4 h-4" />
            <span>Official Aviation Curriculum Vitae</span>
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

        {/* Resume Body: 2-Column Layout Matching Geoffrey's Resume PDF */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-slate-200 print:text-black font-sans">
          {/* Left Column: Photo, Contact, Education */}
          <div className="md:col-span-5 space-y-8 pr-0 md:pr-4 border-b md:border-b-0 md:border-r border-slate-800 print:border-gray-300 pb-6 md:pb-0">
            {/* Real Uniform Profile Photo */}
            <div className="flex flex-col items-center sm:items-start">
              <div className="relative w-36 h-48 sm:w-40 sm:h-52 rounded-lg overflow-hidden border-2 border-amber-500/40 bg-slate-950 shadow-xl print:border-gray-400">
                <Image
                  src={PERSONAL_INFO.photoUrl}
                  alt={PERSONAL_INFO.name}
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              <span className="text-[10px] font-mono text-amber-400/90 print:text-gray-600 mt-2 tracking-wider uppercase">
                PhilSCA Aviation Uniform
              </span>
            </div>

            {/* CONTACT */}
            <div>
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-amber-400 print:text-black border-b border-slate-800 print:border-gray-300 pb-1.5 mb-3">
                C O N T A C T
              </h3>
              <div className="space-y-2.5 text-xs text-slate-300 print:text-gray-800">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-amber-400 print:text-black shrink-0" />
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="hover:text-amber-400 transition-colors"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-amber-400 print:text-black shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    {PERSONAL_INFO.address}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-amber-400 print:text-black shrink-0" />
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="hover:text-amber-400 transition-colors"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            {/* EDUCATION */}
            <div>
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-amber-400 print:text-black border-b border-slate-800 print:border-gray-300 pb-1.5 mb-3">
                E D U C A T I O N
              </h3>

              <div className="space-y-4 text-xs">
                {/* TERTIARY */}
                <div>
                  <div className="font-mono text-[11px] font-bold text-amber-300 print:text-gray-900 uppercase">
                    TERTIARY
                  </div>
                  <div className="font-bold text-white print:text-black mt-0.5">
                    Philippine State College of Aeronautics
                  </div>
                  <div className="text-slate-300 print:text-gray-700 mt-1 space-y-0.5">
                    <div>Associate 2022 - 2024 (Graduate)</div>
                    <div>Bachelor 2025 - 2026 (Graduate)</div>
                  </div>
                </div>

                {/* SECONDARY */}
                <div>
                  <div className="font-mono text-[11px] font-bold text-cyan-300 print:text-gray-900 uppercase">
                    SECONDARY
                  </div>
                  <div className="font-bold text-white print:text-black mt-0.5">
                    Academia de San Jose
                  </div>
                  <div className="text-slate-300 print:text-gray-700 mt-0.5">
                    <div>Strand STEM</div>
                    <div>Graduated last June 2022</div>
                  </div>
                </div>

                {/* PRIMARY */}
                <div>
                  <div className="font-mono text-[11px] font-bold text-slate-400 print:text-gray-900 uppercase">
                    PRIMARY
                  </div>
                  <div className="font-bold text-white print:text-black mt-0.5">
                    Academia de San Jose
                  </div>
                  <div className="text-slate-300 print:text-gray-700 mt-0.5">
                    Graduated last March 2016
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Name, Objective, Internship, Competencies, Language */}
          <div className="md:col-span-7 space-y-6">
            {/* Header / Name & Title */}
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wider text-white print:text-black">
                G E O F F R E Y &nbsp; L E E &nbsp; P . &nbsp; R O M
              </h1>
              <div className="text-base sm:text-lg font-semibold text-amber-400 print:text-gray-800 mt-1">
                Aircraft Maintenance Technician
              </div>
            </div>

            {/* CAREER OBJECTIVE */}
            <div>
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-amber-400 print:text-black border-b border-slate-800 print:border-gray-300 pb-1.5 mb-2.5 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-400 print:text-black" />
                <span>C A R E E R &nbsp; O B J E C T I V E</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 print:text-gray-800 leading-relaxed text-justify">
                {PERSONAL_INFO.careerObjective}
              </p>
            </div>

            {/* INTERNSHIP */}
            <div>
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-amber-400 print:text-black border-b border-slate-800 print:border-gray-300 pb-1.5 mb-2.5 flex items-center gap-1.5">
                <Plane className="w-4 h-4 text-amber-400 print:text-black" />
                <span>I N T E R N S H I P</span>
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300 print:text-gray-800">
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 print:text-black font-bold">•</span>
                  <span>Assisted in aircraft marshalling procedures under supervision</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 print:text-black font-bold">•</span>
                  <span>Observed and supported aircraft refueling operations following safety procedures and protocols</span>
                </li>
              </ul>
            </div>

            {/* CORE COMPETENCIES */}
            <div>
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-amber-400 print:text-black border-b border-slate-800 print:border-gray-300 pb-1.5 mb-2.5 flex items-center gap-1.5">
                <Wrench className="w-4 h-4 text-amber-400 print:text-black" />
                <span>C O R E &nbsp; C O M P E T E N C I E S</span>
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300 print:text-gray-800">
                {PERSONAL_INFO.coreCompetencies.map((comp) => (
                  <li key={comp} className="flex items-start gap-2">
                    <span className="text-amber-400 print:text-black font-bold">•</span>
                    <span>{comp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* LANGUAGE */}
            <div>
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-amber-400 print:text-black border-b border-slate-800 print:border-gray-300 pb-1.5 mb-2.5 flex items-center gap-1.5">
                <Languages className="w-4 h-4 text-amber-400 print:text-black" />
                <span>L A N G U A G E</span>
              </h3>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300 print:text-gray-800">
                {PERSONAL_INFO.languages.map((lang) => (
                  <li key={lang.name} className="flex items-center gap-2">
                    <span className="text-amber-400 print:text-black font-bold">•</span>
                    <span className="font-medium">{lang.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
