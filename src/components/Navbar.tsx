"use client";

import React, { useState, useEffect } from "react";
import { Wrench, Shield, FileDown, Menu, X, Radio, PlaneTakeoff, Compass } from "lucide-react";

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);

    // Live UTC & PHT aviation clock ticker
    const updateTime = () => {
      const now = new Date();
      const utc = now.toISOString().substring(11, 19) + "Z";
      setCurrentTime(utc);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  const navLinks = [
    { label: "Overview", href: "#hero" },
    { label: "About & PhilSCA", href: "#about" },
    { label: "Competencies", href: "#competencies" },
    { label: "Operations Gallery", href: "#gallery" },
    { label: "Inspection Simulator", href: "#checklist" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#060a12]/90 backdrop-blur-md border-b border-slate-800/80 shadow-2xl shadow-black/60 py-3"
          : "bg-gradient-to-b from-[#060a12]/95 via-[#060a12]/80 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Telemetry */}
          <a
            href="#hero"
            className="group flex items-center gap-3.5 focus:outline-none"
          >
            <div className="relative w-11 h-11 rounded-lg bg-gradient-to-br from-slate-900 to-[#0c1626] border border-amber-500/40 p-2 flex items-center justify-center shadow-lg group-hover:border-amber-400 transition-colors">
              <div className="absolute inset-0 bg-amber-500/10 rounded-lg blur-[2px]" />
              <PlaneTakeoff className="w-6 h-6 text-amber-400 group-hover:scale-110 transition-transform relative z-10" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-500 beacon-green" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs tracking-wider text-amber-400/90 font-semibold">
                  ROM // AMT
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 font-mono border border-slate-700/60">
                  PhilSCA
                </span>
              </div>
              <span className="font-bold text-slate-100 tracking-tight text-base sm:text-lg group-hover:text-amber-300 transition-colors">
                Geoffrey Lee P. Rom
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-1.5 rounded-md text-xs xl:text-sm font-medium text-slate-300 hover:text-amber-400 hover:bg-slate-800/50 transition-all font-mono tracking-tight"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions: Aviation Time & Resume CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {/* UTC Clock readout */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-900/80 border border-slate-800 text-slate-400 font-mono text-xs">
              <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
              <span className="text-slate-500">UTC:</span>
              <span className="text-amber-400 font-semibold">{currentTime || "00:00:00Z"}</span>
            </div>

            {/* Resume CTA Button */}
            <button
              onClick={onOpenResume}
              className="relative inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition-all active:scale-95 cursor-pointer"
            >
              <FileDown className="w-4 h-4" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              className="px-2.5 py-1.5 rounded bg-amber-500 text-slate-950 font-bold text-xs uppercase flex items-center gap-1"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>CV</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md bg-slate-900 border border-slate-800 text-slate-300 hover:text-amber-400"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a101d] border-b border-slate-800 px-4 pt-3 pb-6 mt-3 space-y-2 shadow-2xl animate-in slide-in-from-top-2">
          <div className="px-3 py-2 bg-slate-900/90 rounded border border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 beacon-green" />
              <span>AIRFIELD STATUS: RPLL NORMAL</span>
            </div>
            <span className="text-amber-400">{currentTime}</span>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-md text-sm font-mono text-slate-200 hover:bg-slate-800/80 hover:text-amber-400 transition-colors"
            >
              {link.label}
            </a>
          ))}

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenResume();
            }}
            className="w-full mt-4 flex items-center justify-center gap-2 px-4 py-3 rounded-md bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-sm uppercase tracking-wider"
          >
            <FileDown className="w-4 h-4" />
            <span>Download Technical Resume</span>
          </button>
        </div>
      )}
    </header>
  );
};
