"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Check, Info, ChevronDown } from "lucide-react";
import { clinicConfig, TreatmentCategory } from "@/lib/clinic-config";

export function Treatments() {
  const [selectedId, setSelectedId] = useState<string>(
    clinicConfig.proposedTreatments[0].id
  );

  const activeTreatment =
    clinicConfig.proposedTreatments.find((t) => t.id === selectedId) ||
    clinicConfig.proposedTreatments[0];

  return (
    <section
      id="treatments"
      aria-label="Proposed Treatment Categories"
      className="py-14 sm:py-20 lg:py-28 bg-[#F4EFEA] border-t border-[#E8E2D9]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Bold & Editorial */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 sm:pb-12 border-b border-[#E8E2D9]">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EAF2EE] border border-[#D4E4DC] text-[#1C4737] text-xs font-semibold uppercase tracking-wider mb-3 sm:mb-4">
              <Info className="w-3.5 h-3.5 text-[#2A6A58]" aria-hidden="true" />
              <span>Proposed Services · For Owner Review</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A2118] tracking-tight leading-[1.08]">
              Proposed Treatment Pathways
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-[#4B5E55] leading-relaxed">
            A cohesive framework combining chiropractic principles with active
            physiotherapy. These proposed categories are customizable to match
            Star Chiropractic &amp; Physiotherapy Center&apos;s verified clinical offerings.
          </p>
        </div>

        {/* Desktop & Tablet Asymmetrical Showcase */}
        <div className="mt-10 sm:mt-14 hidden md:grid grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Interactive Treatment Selector List */}
          <div className="col-span-5 flex flex-col justify-between">
            <div className="space-y-1.5">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#798C82] block pb-2">
                Select Specialty to Review
              </span>

              {clinicConfig.proposedTreatments.map((treatment, idx) => {
                const isActive = treatment.id === selectedId;
                const indexFormatted = String(idx + 1).padStart(2, "0");

                return (
                  <button
                    key={treatment.id}
                    type="button"
                    onClick={() => setSelectedId(treatment.id)}
                    className={`w-full text-left p-4 sm:p-5 transition-all duration-200 border flex items-center justify-between group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A2118] ${
                      isActive
                        ? "bg-[#0A2118] text-white border-[#0A2118] shadow-md"
                        : "bg-white text-[#12231C] border-[#E8E2D9] hover:border-[#123327]/40 hover:bg-[#FDFBF7]"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`font-mono text-xs font-bold ${
                          isActive ? "text-[#3D826E]" : "text-[#798C82]"
                        }`}
                      >
                        {indexFormatted}
                      </span>
                      <div>
                        <p
                          className={`font-serif text-base sm:text-lg font-bold leading-tight ${
                            isActive ? "text-white" : "text-[#0A2118]"
                          }`}
                        >
                          {treatment.title}
                        </p>
                        <p
                          className={`text-xs mt-0.5 ${
                            isActive ? "text-[#D4E4DC]" : "text-[#798C82]"
                          }`}
                        >
                          {treatment.tagline}
                        </p>
                      </div>
                    </div>

                    <ArrowRight
                      className={`w-4 h-4 transition-transform ${
                        isActive
                          ? "text-[#3D826E] translate-x-1"
                          : "text-[#D4CCC1] group-hover:text-[#0A2118] group-hover:translate-x-1"
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Dynamic Deep-Dive Feature Pane */}
          <div className="col-span-7 bg-white border border-[#E8E2D9] shadow-sm flex flex-col justify-between overflow-hidden">
            {/* Visual Photography Header */}
            <div className="relative aspect-[16/9] w-full bg-[#E8E2D9] overflow-hidden">
              <Image
                src={activeTreatment.imageUrl}
                alt={activeTreatment.title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-700 ease-out hover:scale-105 grayscale-[6%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2118]/85 via-[#0A2118]/25 to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between text-white">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 bg-[#0A2118] text-white border border-[#1C4737]">
                    Proposed Focus
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
                    {activeTreatment.title}
                  </h3>
                </div>
                <span className="text-xs text-[#D4E4DC] font-mono">
                  Star Center · Hyderabad
                </span>
              </div>
            </div>

            {/* Description & Clinical Focus Areas */}
            <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#1C4737] mb-2">
                  {activeTreatment.tagline}
                </p>
                <p className="text-sm sm:text-base text-[#4B5E55] leading-relaxed">
                  {activeTreatment.shortDescription}
                </p>

                <div className="mt-6 pt-6 border-t border-[#E8E2D9]">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#0A2118] mb-3">
                    Key Proposed Clinical Focus:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {activeTreatment.keyFocus.map((focus) => (
                      <div
                        key={focus}
                        className="flex items-center gap-2 p-2.5 bg-[#FDFBF7] border border-[#E8E2D9] text-xs font-medium text-[#12231C]"
                      >
                        <Check className="w-3.5 h-3.5 text-[#1C4737] shrink-0" aria-hidden="true" />
                        <span>{focus}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Informative Owner Note */}
              <div className="mt-6 pt-4 border-t border-[#F4EFEA] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#798C82]">
                <p className="italic">
                  * Draft service description subject to owner confirmation. No unverified medical claims made.
                </p>
                <a
                  href="#contact"
                  className="font-bold text-[#0A2118] hover:text-[#1C4737] inline-flex items-center gap-1 shrink-0"
                >
                  <span>Inquire with clinic</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Dedicated Accordion Cards (Clean, Non-Redundant, Touch-Friendly) */}
        <div className="mt-8 md:hidden space-y-3.5">
          {clinicConfig.proposedTreatments.map((treatment, idx) => {
            const isExpanded = treatment.id === selectedId;
            const indexFormatted = String(idx + 1).padStart(2, "0");

            return (
              <div
                key={treatment.id}
                className="bg-white border border-[#E8E2D9] overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() =>
                    setSelectedId(isExpanded && clinicConfig.proposedTreatments[0].id !== treatment.id ? "" : treatment.id)
                  }
                  className="w-full text-left p-4.5 flex items-center justify-between gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A2118]"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-center gap-3.5">
                    <span className="font-mono text-xs font-bold text-[#1C4737]">
                      {indexFormatted}
                    </span>
                    <div>
                      <h3 className="font-serif text-lg font-bold text-[#0A2118] leading-tight">
                        {treatment.title}
                      </h3>
                      <p className="text-[11px] text-[#798C82] mt-0.5">
                        {treatment.tagline}
                      </p>
                    </div>
                  </div>

                  <ChevronDown
                    className={`w-5 h-5 text-[#4B5E55] transition-transform duration-200 shrink-0 ${
                      isExpanded ? "rotate-180 text-[#0A2118]" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {isExpanded && (
                  <div className="border-t border-[#E8E2D9] bg-[#FDFBF7] p-4.5 space-y-4">
                    <div className="relative aspect-[16/10] w-full overflow-hidden border border-[#E8E2D9] bg-[#E8E2D9]">
                      <Image
                        src={treatment.imageUrl}
                        alt={treatment.title}
                        fill
                        sizes="100vw"
                        className="object-cover grayscale-[6%]"
                      />
                    </div>

                    <p className="text-xs sm:text-sm text-[#4B5E55] leading-relaxed">
                      {treatment.shortDescription}
                    </p>

                    <div className="pt-3 border-t border-[#E8E2D9]/70">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-[#0A2118] mb-2">
                        Proposed Clinical Focus:
                      </p>
                      <div className="space-y-1.5">
                        {treatment.keyFocus.map((focus) => (
                          <div
                            key={focus}
                            className="flex items-center gap-2 text-xs text-[#12231C]"
                          >
                            <Check className="w-3.5 h-3.5 text-[#1C4737] shrink-0" />
                            <span>{focus}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Transparent Note for Clinic Review */}
        <div className="mt-8 sm:mt-12 p-4 bg-white border border-[#E8E2D9] text-xs text-[#4B5E55] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5">
          <p>
            <strong>Note for Clinic Management:</strong> All 6 categories represent standard physiotherapy and chiropractic competencies. Descriptions and titles can be customized upon your review.
          </p>
          <a
            href="#contact"
            className="font-bold text-[#0A2118] hover:text-[#1C4737] inline-flex items-center gap-1 shrink-0"
          >
            <span>Inquire with clinic</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
