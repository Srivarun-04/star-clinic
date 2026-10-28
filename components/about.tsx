import Image from "next/image";
import { Shield, MapPin } from "lucide-react";
import { clinicConfig } from "@/lib/clinic-config";

export function About() {
  return (
    <section
      id="about"
      aria-label="About Star Chiropractic & Physiotherapy Center"
      className="py-16 sm:py-24 lg:py-32 bg-[#FDFBF7] border-t border-[#E8E2D9]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Asymmetrical Clinical Photography Composition */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative">
              {/* Primary Clinical Image */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#F4EFEA] border border-[#E8E2D9] shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1000&q=80"
                  alt="Specialist delivering hands-on spinal therapy and muscle relaxation on a clinical treatment table"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover grayscale-[8%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2118]/70 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Overlapping Architectural Card (Subtle Asymmetrical Depth) */}
              <div className="sm:absolute sm:-bottom-8 sm:-right-8 mt-4 sm:mt-0 bg-[#0A2118] text-white p-6 sm:p-7 border border-[#123327] max-w-sm shadow-xl">
                <div className="flex items-center gap-2 mb-2 text-[#3D826E]">
                  <Shield className="w-4 h-4" />
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4E4DC]">
                    Clinical Ethos
                  </span>
                </div>
                <p className="font-serif text-lg font-bold text-white">
                  Movement is Medicine
                </p>
                <p className="text-xs text-[#EAF2EE]/80 mt-1.5 leading-relaxed">
                  Restoring functional posture, spinal balance, and joint mobility in Amla Nagar, Dilsukhnagar.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Principles */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#1C4737] mb-3">
              <span className="w-2 h-2 bg-[#1C4737]" />
              <span>About Star Chiropractic &amp; Physiotherapy Center</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-5xl font-bold text-[#0A2118] tracking-tight leading-[1.1]">
              Care Rooted in Science, Movement, and Patient Comfort.
            </h2>

            <div className="mt-6 space-y-4 text-base sm:text-lg text-[#4B5E55] leading-relaxed">
              <p>
                At Star Chiropractic &amp; Physiotherapy Center, we view physical
                recovery not as an assembly-line routine, but as a deliberate,
                individualized path toward lasting physical resilience. Situated in
                Amla Nagar, Dilsukhnagar, our proposed practice centers on
                understanding your biomechanical realities.
              </p>
              <p className="text-sm sm:text-base text-[#4B5E55]">
                We combine gentle spinal joint mobilizations with active,
                strengthening physiotherapy. Every session is planned with clear
                communication, unhurried attention, and deep respect for your
                personal physical thresholds.
              </p>
            </div>

            {/* 3 Core Principles with Hairline Dividers & Typographic Numbers */}
            <div className="mt-10 pt-8 border-t border-[#E8E2D9] space-y-6">
              <div className="flex items-start gap-5">
                <span className="font-mono text-sm font-bold text-[#1C4737] pt-1">
                  01
                </span>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#0A2118]">
                    Thorough Biomechanical Evaluation
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4B5E55] mt-1 leading-relaxed">
                    Prioritizing movement screening, posture review, and lifestyle context to uncover root causes before treatment begins.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 pt-4 border-t border-[#F4EFEA]">
                <span className="font-mono text-sm font-bold text-[#1C4737] pt-1">
                  02
                </span>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#0A2118]">
                    Restoring Active Mobility
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4B5E55] mt-1 leading-relaxed">
                    Bridging chiropractic adjustments with therapeutic movement so your joints and muscles work in balanced harmony.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 pt-4 border-t border-[#F4EFEA]">
                <span className="font-mono text-sm font-bold text-[#1C4737] pt-1">
                  03
                </span>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#0A2118]">
                    Sustainable Self-Management
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4B5E55] mt-1 leading-relaxed">
                    Empowering you with ergonomic education, movement awareness, and home routines to protect your physical health long-term.
                  </p>
                </div>
              </div>
            </div>

            {/* Respectful Practitioner Credentials Notice */}
            <div className="mt-8 p-4 bg-[#F4EFEA] border border-[#E8E2D9] text-xs text-[#4B5E55] flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-[#1C4737] shrink-0" />
              <span>
                <strong>Owner Review Note:</strong> Official practitioner qualifications, registrations, and confirmed certifications will be added here upon clinic owner approval.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
