import { CheckCircle2 } from "lucide-react";
import { clinicConfig } from "@/lib/clinic-config";

export function WhyChooseUs() {
  return (
    <section
      id="why-star"
      aria-label="Why Choose Star Chiropractic & Physiotherapy Center"
      className="py-14 sm:py-20 lg:py-28 bg-[#FDFBF7] border-t border-[#E8E2D9]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 sm:pb-12 border-b border-[#E8E2D9]">
          <div className="max-w-2xl">
            <span className="text-xs uppercase font-bold tracking-widest text-[#1C4737] block mb-2 sm:mb-3">
              Proposed Clinical Values · For Owner Sign-off
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A2118] tracking-tight leading-[1.08]">
              Why Choose Star
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-[#4B5E55] leading-relaxed">
            A deliberate, unhurried standard of care. These proposed values are
            crafted to represent the professional ethos of Star Chiropractic
            &amp; Physiotherapy Center in Hyderabad.
          </p>
        </div>

        {/* 4 Architectural Value Blocks with Hairline Dividers (No Generic Cards) */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-2 border border-[#E8E2D9] divide-y md:divide-y-0 md:divide-x divide-[#E8E2D9] bg-white">
          {clinicConfig.proposedValues.map((value, idx) => (
            <div
              key={value.title}
              className={`p-6 sm:p-8 lg:p-10 flex flex-col justify-between hover:bg-[#FDFBF7] transition-colors ${
                idx >= 2 ? "md:border-t md:border-[#E8E2D9]" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-[#F4EFEA]">
                  <span className="font-mono text-xs sm:text-sm font-bold text-[#1C4737]">
                    {value.number}
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#798C82]">
                    {value.tagline}
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0A2118] tracking-tight mb-3">
                  {value.title.includes("1-on-1") ? (
                    <>
                      {value.title.split("1-on-1")[0]}
                      <span className="font-sans font-extrabold tracking-tight">1-on-1</span>
                      {value.title.split("1-on-1")[1]}
                    </>
                  ) : (
                    value.title
                  )}
                </h3>

                <p className="text-sm sm:text-base text-[#4B5E55] leading-relaxed">
                  {value.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F4EFEA] flex items-center gap-2 text-xs text-[#798C82]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1C4737]" aria-hidden="true" />
                <span>Proposed Core Principle #{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Contrast Editorial Band: The Star Methodology */}
        <div className="mt-10 sm:mt-14 bg-[#0A2118] text-white p-6 sm:p-10 lg:p-12 border border-[#123327]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-[10px] uppercase tracking-widest font-bold text-[#3D826E] border border-[#1C4737] px-2.5 py-1 inline-block mb-3 sm:mb-4">
                Core Distinction
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                Movement-Oriented Care, Rooted in Daily Life
              </h3>
              <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-[#D4E4DC] leading-relaxed max-w-2xl font-normal">
                Rather than offering temporary, passive relief, Star
                Chiropractic &amp; Physiotherapy Center emphasizes personal
                education, ergonomic adaptation, and progressive movement
                exercises to help you maintain physical independence.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-2.5 sm:gap-3">
              <div className="p-3.5 sm:p-4 bg-[#123327] border border-[#1C4737] text-xs">
                <p className="font-bold text-white font-sans tracking-tight">Direct 1-on-1 Sessions</p>
                <p className="text-[#D4E4DC] mt-0.5">
                  Focusing on your unique movement pattern
                </p>
              </div>
              <div className="p-3.5 sm:p-4 bg-[#123327] border border-[#1C4737] text-xs">
                <p className="font-bold text-white">Spine &amp; Joint Synergy</p>
                <p className="text-[#D4E4DC] mt-0.5">
                  Chiropractic joint care with active physiotherapy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
