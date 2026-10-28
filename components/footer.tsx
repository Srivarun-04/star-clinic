import Link from "next/link";
import { MapPin, ArrowUp, Shield } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#061510] text-[#D4E4DC] border-t border-[#123327] pt-14 sm:pt-16 pb-10 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 sm:pb-12 border-b border-[#123327]">
          {/* Brand Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <Link
                href="#hero"
                className="group inline-flex items-center gap-3 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#3D826E]"
                aria-label="Back to top via logo"
              >
                <div className="w-9 h-9 bg-white text-[#0A2118] flex items-center justify-center font-serif text-lg font-bold">
                  S
                </div>
                <div>
                  <span className="font-serif text-xl sm:text-2xl font-bold text-white tracking-tight">
                    STAR
                  </span>
                  <span className="block text-[11px] text-[#3D826E] font-medium tracking-wide uppercase">
                    Chiropractic &amp; Physiotherapy Center
                  </span>
                </div>
              </Link>

              <p className="mt-4 text-xs sm:text-sm text-[#A5BCB2] leading-relaxed max-w-sm">
                A thoughtful, science-guided approach to spinal alignment, active
                joint mobility, and physical rehabilitation in Amla Nagar,
                Dilsukhnagar, Hyderabad.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs text-[#A5BCB2]">
              <MapPin className="w-4 h-4 text-[#3D826E] shrink-0" aria-hidden="true" />
              <span>Amla Nagar, Dilsukhnagar, Hyderabad, Telangana, India</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3">
            <p className="text-xs font-bold uppercase tracking-wider text-white mb-3.5 sm:mb-4">
              Explore
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link
                  href="#hero"
                  className="hover:text-white transition-colors focus:outline-none focus-visible:underline"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#treatments"
                  className="hover:text-white transition-colors focus:outline-none focus-visible:underline"
                >
                  Proposed Treatments
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="hover:text-white transition-colors focus:outline-none focus-visible:underline"
                >
                  About Star Center
                </Link>
              </li>
              <li>
                <Link
                  href="#why-star"
                  className="hover:text-white transition-colors focus:outline-none focus-visible:underline"
                >
                  Why Choose Star
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="hover:text-white transition-colors focus:outline-none focus-visible:underline"
                >
                  Location &amp; Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Client Presentation Note */}
          <div className="lg:col-span-4">
            <p className="text-xs font-bold uppercase tracking-wider text-white mb-3.5 sm:mb-4">
              Concept Demo Note
            </p>
            <div className="p-4 sm:p-5 bg-[#0A2118] border border-[#123327] text-xs text-[#A5BCB2] space-y-2">
              <div className="flex items-center gap-2 text-white font-semibold">
                <Shield className="w-4 h-4 text-[#3D826E]" aria-hidden="true" />
                <span>Client Presentation</span>
              </div>
              <p className="leading-relaxed">
                This website is an unofficial concept demo prepared for Star
                Chiropractic &amp; Physiotherapy Center. It contains no mock
                medical claims, fake testimonials, or unauthorized certifications.
              </p>
              <p className="pt-2 border-t border-[#123327] text-[11px] text-[#798C82]">
                Ready for standard Vercel deployment upon client review.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#798C82]">
          <p>
            © {new Date().getFullYear()} Star Chiropractic &amp; Physiotherapy Center. All rights reserved.
          </p>

          <a
            href="#hero"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0A2118] text-[#D4E4DC] hover:text-white hover:bg-[#123327] transition-colors border border-[#123327] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#3D826E]"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
