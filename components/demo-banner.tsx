"use client";

import { useState } from "react";
import { Info, X, MapPin } from "lucide-react";
import { clinicConfig } from "@/lib/clinic-config";

export function DemoBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Demo notice"
      className="bg-[#061510] text-[#D4E4DC] text-xs px-4 py-2 border-b border-[#123327]"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-[#123327] text-white text-[11px] font-bold uppercase tracking-wider border border-[#1C4737]">
            <Info className="w-3 h-3 text-[#3D826E]" />
            Presentation Demo
          </span>
          <span className="text-[#3D826E] hidden sm:inline">|</span>
          <p className="text-[#A5BCB2]">
            Concept proposal for{" "}
            <span className="font-semibold text-white">
              {clinicConfig.name}
            </span>{" "}
            in{" "}
            <span className="inline-flex items-center gap-0.5 text-[#D4E4DC]">
              <MapPin className="w-3 h-3 text-[#3D826E]" />
              {clinicConfig.location.area}, {clinicConfig.location.subLocality}
            </span>
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsVisible(false)}
          className="p-1 text-[#A5BCB2] hover:text-white hover:bg-[#123327] transition-colors focus:outline-none"
          aria-label="Dismiss demo notice"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
}
