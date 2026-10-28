import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { clinicConfig } from "@/lib/clinic-config";

export function Hero() {
  return (
    <section
      id="hero"
      aria-label="Welcome to Star Chiropractic & Physiotherapy Center"
      className="relative overflow-hidden pt-6 pb-14 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-28 bg-[#FDFBF7]"
    >
      {/* Editorial Hairline Location Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-4 sm:pb-5 border-b border-[#E8E2D9] text-xs uppercase tracking-widest text-[#4B5E55] font-semibold">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#1C4737]" aria-hidden="true" />
            <span>Star Chiropractic &amp; Physiotherapy Center</span>
          </div>
          <div className="flex items-center gap-1.5 text-[#12231C]">
            <MapPin className="w-3.5 h-3.5 text-[#1C4737]" aria-hidden="true" />
            <span>Amla Nagar · Dilsukhnagar, Hyderabad</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Bold Oversized Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Main Bold Oversized Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.75rem] xl:text-[5.25rem] font-bold text-[#0A2118] tracking-tight leading-[1.05]">
              Move Better. <br />
              Feel Stronger. <br />
              <span className="font-normal italic text-[#1C4737]">
                Live Fully.
              </span>
            </h1>

            {/* Concise, Professional Supporting Text */}
            <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-[#4B5E55] leading-relaxed max-w-xl font-normal">
              A thoughtful, evidence-guided approach to spinal health, joint
              mobility, and physical rehabilitation. We combine precision
              chiropractic adjustments with structured physiotherapy to help you
              regain movement confidence.
            </p>

            {/* Two Functional CTAs: Explore Treatments & Contact the Center */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
              <Link
                href="#treatments"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 min-h-[48px] text-sm sm:text-base font-semibold tracking-wide text-white bg-[#0A2118] hover:bg-[#123327] active:bg-[#061510] transition-all border border-[#0A2118] shadow-sm group focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0A2118]"
              >
                <span>Explore Treatments</span>
                <ArrowRight className="w-4 h-4 text-[#EAF2EE] transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 min-h-[48px] text-sm sm:text-base font-semibold tracking-wide text-[#0A2118] bg-transparent hover:bg-[#F4EFEA] transition-colors border border-[#D4CCC1] focus-visible:ring-2 focus-visible:ring-[#0A2118]"
              >
                <span>Contact the Center</span>
              </Link>
            </div>

            {/* Minimalist 3-Point Clinical Highlights along a Crisp Rule */}
            <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-[#E8E2D9] grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#1C4737]">
                  01 · Alignment
                </p>
                <p className="font-serif text-base font-bold text-[#0A2118] mt-1">
                  Spine &amp; Joint Care
                </p>
                <p className="text-xs text-[#4B5E55] mt-0.5 leading-relaxed">
                  Precision manual techniques for nerve and joint release
                </p>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#1C4737]">
                  02 · Rehabilitation
                </p>
                <p className="font-serif text-base font-bold text-[#0A2118] mt-1">
                  Active Therapy
                </p>
                <p className="text-xs text-[#4B5E55] mt-0.5 leading-relaxed">
                  Targeted muscle reactivation and posture stabilization
                </p>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#1C4737]">
                  03 · Focus
                </p>
                <p className="text-base font-bold text-[#0A2118] mt-1 font-sans tracking-tight">
                  <span className="font-sans font-extrabold">1-on-1</span> Sessions
                </p>
                <p className="text-xs text-[#4B5E55] mt-0.5 leading-relaxed">
                  Dedicated care tailored to your daily lifestyle goals
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Photography Composition */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative">
              {/* Main Clinical Image */}
              <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] w-full overflow-hidden bg-[#F4EFEA] border border-[#E8E2D9] shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1200&q=80"
                  alt="Specialist chiropractor and physiotherapist delivering hands-on cervical spinal articulation on a clinical treatment bench"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover object-center grayscale-[6%] contrast-[1.05]"
                />

                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2118]/85 via-transparent to-transparent pointer-events-none" />

                {/* Architectural Caption Box */}
                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 bg-gradient-to-t from-[#061510] to-transparent text-white">
                  <div className="border-l-2 border-[#3D826E] pl-3">
                    <p className="text-[10px] uppercase tracking-widest font-bold text-[#D4E4DC]">
                      Modern Clinical Space
                    </p>
                    <p className="font-serif text-base sm:text-lg font-bold text-white mt-0.5">
                      Personalized Movement Care
                    </p>
                    <p className="text-[11px] sm:text-xs text-[#EAF2EE]/85 mt-0.5 max-w-sm">
                      Amla Nagar, Dilsukhnagar — calm, dedicated one-on-one evaluations.
                    </p>
                  </div>
                </div>
              </div>

              {/* Offset Accent Outline Box (Subtle Asymmetrical Depth) */}
              <div
                className="hidden sm:block absolute -bottom-3.5 -right-3.5 w-full h-full border border-[#D4CCC1] -z-10 pointer-events-none"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
