"use client";

import { useState } from "react";
import { Info, X, MapPin } from "lucide-react";
import { clinicConfig } from "@/lib/clinic-config";

export function DemoBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Client Demo Proposal Notice"
      className="bg-[#061510] text-[#D4E4DC] text-xs px-4 py-2 border-b border-[#123327] transition-all"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 flex-wrap">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#123327] text-white text-[10px] font-bold uppercase tracking-widest border border-[#1C4737]">
            <Info className="w-3 h-3 text-[#3D826E]" aria-hidden="true" />
            Concept Demo
          </span>
          <span className="text-[#3D826E] hidden sm:inline" aria-hidden="true">|</span>
          <p className="text-[#A5BCB2] text-[11px] sm:text-xs">
            Website proposal for{" "}
            <span className="font-semibold text-white">
              {clinicConfig.name}
            </span>{" "}
            ·{" "}
            <span className="inline-flex items-center gap-1 text-[#D4E4DC]">
              <MapPin className="w-3 h-3 text-[#3D826E]" aria-hidden="true" />
              {clinicConfig.location.area}, {clinicConfig.location.subLocality}, {clinicConfig.location.city}
            </span>
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsVisible(false)}
          className="p-1 text-[#A5BCB2] hover:text-white hover:bg-[#123327] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#3D826E]"
          aria-label="Dismiss demo notice"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
}
