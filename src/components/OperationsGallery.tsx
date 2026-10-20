"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Compass,
  Plane,
  Wrench,
  X,
  Calendar,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Maximize2,
  Filter,
} from "lucide-react";
import { GALLERY_ITEMS, GalleryItem } from "@/data/portfolioData";

export const OperationsGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filteredItems =
    selectedCategory === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const categories = [
    { id: "all", label: "All Operations" },
    { id: "powerplant", label: "Powerplant Turbines" },
    { id: "airframe", label: "Airframe & Structural" },
    { id: "ground_ops", label: "Ground Ops & Tarmac" },
    { id: "avionics", label: "Avionics & Systems" },
  ];

  return (
    <section id="gallery" className="py-24 bg-[#080e1b] relative border-t border-slate-800/80">
      <div className="absolute inset-0 aviation-grid-fine opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-amber-400 mb-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>03 // Operations Gallery</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Maintenance Flightline Records
            </h2>
            <p className="mt-3 text-slate-400 max-w-2xl text-base">
              High-resolution photographic documentation of turbine overhauls, structural composite repairs, and ground support operations across premier Philippine aviation facilities.
            </p>
          </div>

          {/* Quick status badge */}
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 shrink-0">
            <Compass className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: "12s" }} />
            <span>GEO-TAGGED PHILIPPINE AVIATION HUBS</span>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-slate-800/80">
          <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 mr-2">
            <Filter className="w-3.5 h-3.5" />
            <span>FILTER:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-md font-mono text-xs tracking-wider transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-amber-500 text-slate-950 font-bold shadow-lg shadow-amber-500/20"
                  : "bg-slate-900/80 text-slate-400 hover:text-slate-100 hover:bg-slate-800 border border-slate-800"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dynamic Masonry-Style Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="group relative rounded-xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/60 shadow-xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10 cursor-pointer"
                onClick={() => setActiveItem(item)}
              >
                {/* Image Container with Hover Zoom */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-950">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    loading="lazy"
                  />

                  {/* Gradient overlay for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                  {/* Top Overlay: Category & Airfield Badge */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className="px-2.5 py-1 rounded bg-slate-950/85 backdrop-blur-md text-amber-400 font-mono text-[11px] font-bold border border-slate-800 uppercase shadow-md">
                      {item.icao}
                    </span>
                    <span className="px-2.5 py-1 rounded bg-slate-950/85 backdrop-blur-md text-slate-300 font-mono text-[10px] border border-slate-800 flex items-center gap-1 shadow-md">
                      <Calendar className="w-3 h-3 text-slate-400" />
                      {item.date}
                    </span>
                  </div>

                  {/* Hover Quick Action Indicator */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950/40 backdrop-blur-[2px]">
                    <div className="px-4 py-2 rounded-md bg-amber-500 text-slate-950 font-mono text-xs font-bold flex items-center gap-2 shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Maximize2 className="w-4 h-4" />
                      <span>INSPECT LOG RECORD</span>
                    </div>
                  </div>

                  {/* Aircraft Model Banner at bottom of image */}
                  <div className="absolute bottom-3 left-3 right-3 pointer-events-none">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900/90 backdrop-blur-sm border border-slate-700/80 text-white font-mono text-xs font-semibold">
                      <Plane className="w-3.5 h-3.5 text-amber-400" />
                      <span>{item.aircraftModel}</span>
                    </div>
                  </div>
                </div>

                {/* Card Content & Mandatory Prominent Facility / Geographic Location Layout */}
                <div className="p-5 flex flex-col flex-1 justify-between">
                  <div>
                    {/* ATA Chapter Tag */}
                    <div className="text-[11px] font-mono text-slate-400 mb-1.5">
                      {item.ataChapter}
                    </div>

                    <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-1 mb-3">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  {/* PROMINENT GEOGRAPHIC LOCATION & FACILITY UI ELEMENT (Requirement) */}
                  <div className="mt-3 pt-3 border-t border-slate-800/80 bg-slate-950/70 -mx-5 -mb-5 p-4 rounded-b-xl border-t border-slate-800">
                    <div className="flex items-start gap-2.5">
                      <div className="w-6 h-6 rounded bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                        <MapPin className="w-3.5 h-3.5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] font-mono text-amber-400 font-bold uppercase tracking-wider">
                          FACILITY & LOCATION
                        </div>
                        <div className="text-xs font-semibold text-slate-200 truncate mt-0.5">
                          {item.facility}
                        </div>
                        <div className="text-[11px] text-slate-400 flex items-center gap-1.5 font-mono mt-0.5">
                          <span>{item.location}</span>
                          <span className="text-slate-600">•</span>
                          <span className="text-slate-500 text-[10px]">{item.coordinates}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Detailed Lightbox / Maintenance Inspection Modal */}
        <AnimatePresence>
          {activeItem && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/85 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl bg-slate-900 border border-slate-800 shadow-2xl p-6 sm:p-8"
              >
                {/* Top Close Button */}
                <button
                  onClick={() => setActiveItem(null)}
                  className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors z-20"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Modal Header */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded bg-amber-500 text-slate-950 font-mono text-xs font-bold uppercase">
                    {activeItem.icao}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    LOG REF: {activeItem.id.toUpperCase()}-2026
                  </span>
                  <span className="px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[11px] font-mono flex items-center gap-1 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {activeItem.signoffStatus}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                  {activeItem.title}
                </h3>

                {/* Aircraft & ATA details */}
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 mb-6">
                  <div>
                    <span className="text-slate-500">AIRCRAFT:</span>{" "}
                    <strong className="text-white">{activeItem.aircraftModel}</strong>
                  </div>
                  <span>•</span>
                  <div>
                    <span className="text-slate-500">ATA CHAPTER:</span>{" "}
                    <strong className="text-amber-400">{activeItem.ataChapter}</strong>
                  </div>
                  <span>•</span>
                  <div>
                    <span className="text-slate-500">DATE:</span>{" "}
                    <strong className="text-slate-200">{activeItem.date}</strong>
                  </div>
                </div>

                {/* Image Preview */}
                <div className="relative w-full h-72 sm:h-96 rounded-lg overflow-hidden mb-6 bg-slate-950 border border-slate-800">
                  <img
                    src={activeItem.imageUrl}
                    alt={activeItem.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded bg-slate-950/80 backdrop-blur-md border border-slate-700 text-slate-200 font-mono text-xs">
                    HIGH-RESOLUTION MAINTENANCE CAPTURE
                  </div>
                </div>

                {/* Prominent Facility & Geographic Location Box */}
                <div className="p-4 rounded-lg bg-slate-950 border border-amber-500/40 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">
                        Specific Maintenance Facility & Geographic Coordinates
                      </div>
                      <div className="text-base font-bold text-white mt-0.5">
                        {activeItem.facility}
                      </div>
                      <div className="text-xs text-slate-300 font-mono mt-1 flex flex-wrap items-center gap-2">
                        <span>{activeItem.location}</span>
                        <span>•</span>
                        <span className="text-amber-300">{activeItem.coordinates}</span>
                        <span>•</span>
                        <span className="text-slate-400">ICAO: {activeItem.icao}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Narrative & Tools */}
                <div className="space-y-4 text-sm font-sans">
                  <div>
                    <h4 className="font-mono text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Maintenance Task Summary & Protocol
                    </h4>
                    <p className="text-slate-200 leading-relaxed bg-slate-950/50 p-4 rounded-lg border border-slate-800">
                      {activeItem.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-mono text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Wrench className="w-3.5 h-3.5 text-amber-400" />
                      <span>Calibrated Tooling & Materials Deployed</span>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeItem.toolsUsed.map((tool) => (
                        <span
                          key={tool}
                          className="px-3 py-1 rounded bg-slate-800 text-slate-200 font-mono text-xs border border-slate-700"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Certified Sign-off Footer */}
                  <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-xs text-slate-400">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>Sign-off Technician: <strong className="text-white">Geoffrey Lee P. Rom</strong> (PhilSCA AMT)</span>
                    </div>
                    <button
                      onClick={() => setActiveItem(null)}
                      className="px-4 py-2 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 font-mono text-xs self-end sm:self-auto"
                    >
                      Close Record
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
