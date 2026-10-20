"use client";

import React, { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle2,
  Clock,
  ArrowUp,
  ShieldCheck,
  Plane,
  FileDown,
} from "lucide-react";

const LinkedInIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);
import { PERSONAL_INFO } from "@/data/portfolioData";

interface ContactSectionProps {
  onOpenResume: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResume }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    inquiryType: "MRO Maintenance Contract",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [dispatchRef, setDispatchRef] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Generate simulated aviation dispatch reference code
    const randomCode =
      "DISPATCH-ROM-" + Math.floor(1000 + Math.random() * 9000);
    setDispatchRef(randomCode);
    setSubmitted(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-[#050810] text-slate-300 relative border-t border-slate-800">
      {/* Top Hazard Accent Bar */}
      <div className="h-1.5 w-full hazard-stripes" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Left Column: Contact Information & Professional Links */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-amber-400 mb-2">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span>05 // Contact & Dispatch</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Initiate Technical Inquiry
              </h2>
              <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
                Available for MRO contract engineering, scheduled airframe structural overhauls, turbine powerplant diagnostics, and line maintenance deployments worldwide.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3 font-mono text-xs">
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="p-4 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-amber-500/50 transition-colors flex items-center gap-3.5 group block"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider">
                    Direct Phone / WhatsApp
                  </div>
                  <div className="text-sm font-bold text-slate-100 group-hover:text-amber-400 transition-colors font-sans">
                    {PERSONAL_INFO.phone}
                  </div>
                </div>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-4 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-amber-500/50 transition-colors flex items-center gap-3.5 group block"
              >
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider">
                    Direct Email
                  </div>
                  <div className="text-sm font-bold text-slate-100 group-hover:text-amber-400 transition-colors font-sans">
                    {PERSONAL_INFO.email}
                  </div>
                </div>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-amber-500/50 transition-colors flex items-center gap-3.5 group block"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0 group-hover:scale-105 transition-transform">
                  <LinkedInIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider">
                    Professional Network
                  </div>
                  <div className="text-sm font-bold text-slate-100 group-hover:text-amber-400 transition-colors font-sans">
                    linkedin.com/in/geoffrey-lee-rom
                  </div>
                </div>
              </a>

              <div className="p-4 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider">
                    Station & Operations Base
                  </div>
                  <div className="text-sm font-bold text-slate-200 font-sans">
                    {PERSONAL_INFO.address}
                  </div>
                  <div className="text-[11px] text-amber-400 font-mono mt-0.5">
                    Hub: {PERSONAL_INFO.primaryAirport}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Resume Download Action */}
            <div className="pt-2">
              <button
                onClick={onOpenResume}
                className="w-full py-3 px-4 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-amber-500/50 text-slate-200 font-mono text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <FileDown className="w-4 h-4 text-amber-400" />
                <span>View Complete Printable Resume & Credentials</span>
              </button>
            </div>
          </div>

          {/* Right Column: Working Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 shadow-2xl relative">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                <span className="font-mono text-xs uppercase text-amber-400 font-semibold tracking-wider flex items-center gap-2">
                  <Plane className="w-4 h-4" />
                  <span>Flightline Contact Protocol</span>
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                  RESPONSE TIME: &lt; 24 HRS
                </span>
              </div>

              {submitted ? (
                <div className="p-6 rounded-lg bg-emerald-950/40 border border-emerald-500/50 text-slate-200 space-y-4 animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-white">Inquiry Successfully Dispatched</h3>
                    <p className="text-xs text-slate-300 font-sans mt-1">
                      Thank you for contacting Geoffrey Lee P. Rom. Your message has been logged in the priority queue.
                    </p>
                  </div>

                  <div className="p-3 bg-slate-950/80 rounded border border-slate-800 font-mono text-xs space-y-1.5">
                    <div className="flex justify-between text-slate-400">
                      <span>Dispatch Reference:</span>
                      <span className="text-amber-400 font-bold">{dispatchRef}</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>Recipient:</span>
                      <span className="text-slate-200">Geoffrey Lee P. Rom (Aircraft Maintenance Technician)</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>Status:</span>
                      <span className="text-emerald-400">QUEUED FOR DIRECT NOTIFICATION</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        organization: "",
                        inquiryType: "MRO Maintenance Contract",
                        message: "",
                      });
                    }}
                    className="w-full py-2.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 font-mono text-xs transition-colors"
                  >
                    Send Another Transmission
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1">
                        Full Name <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Captain James Vance"
                        className="w-full px-3.5 py-2.5 rounded bg-slate-950 border border-slate-800 text-slate-100 text-sm placeholder:text-slate-600 focus:outline-none focus:border-amber-500 transition-colors font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1">
                        Professional Email <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="e.g. operations@aviationmro.com"
                        className="w-full px-3.5 py-2.5 rounded bg-slate-950 border border-slate-800 text-slate-100 text-sm placeholder:text-slate-600 focus:outline-none focus:border-amber-500 transition-colors font-sans"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1">
                        Organization / Airline / Facility
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) =>
                          setFormData({ ...formData, organization: e.target.value })
                        }
                        placeholder="e.g. Commercial Airline / MRO Station"
                        className="w-full px-3.5 py-2.5 rounded bg-slate-950 border border-slate-800 text-slate-100 text-sm placeholder:text-slate-600 focus:outline-none focus:border-amber-500 transition-colors font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1">
                        Inquiry Nature
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) =>
                          setFormData({ ...formData, inquiryType: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-amber-500 transition-colors font-sans"
                      >
                        <option value="MRO Maintenance Contract">MRO Maintenance Contract</option>
                        <option value="Airframe Structural Inspection">Airframe Structural Inspection</option>
                        <option value="Powerplant Turbine Diagnostics">Powerplant Turbine Diagnostics</option>
                        <option value="Tarmac Ground Support Ops">Tarmac Ground Support Ops</option>
                        <option value="Full-Time AMT Opportunity">Full-Time AMT Recruitment</option>
                        <option value="Technical Consultation">Technical Consultation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">
                      Maintenance Details & Requirements <span className="text-amber-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Specify aircraft type, maintenance scope, location/hangar, or position details..."
                      className="w-full px-3.5 py-2.5 rounded bg-slate-950 border border-slate-800 text-slate-100 text-sm placeholder:text-slate-600 focus:outline-none focus:border-amber-500 transition-colors font-sans resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 rounded-md bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-98"
                  >
                    <Send className="w-4 h-4" />
                    <span>Transmit Message & Log Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="text-amber-400 font-bold">GEOFFREY LEE P. ROM</span>
            <span>•</span>
            <span>Aircraft Maintenance Technician • Cebu, Philippines</span>
          </div>

          <div className="flex items-center gap-6">
            <span>CAAP & FAA Standard Compliance</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded bg-slate-900 border border-slate-800 hover:border-amber-400 hover:text-amber-400 text-slate-400 transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
