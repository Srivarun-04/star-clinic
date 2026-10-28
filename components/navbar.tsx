"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, MapPin } from "lucide-react";
import { clinicConfig } from "@/lib/clinic-config";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "Treatments", href: "#treatments" },
  { name: "About", href: "#about" },
  { name: "Why Choose Star", href: "#why-star" },
  { name: "Contact & Location", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard navigation: Escape key closes menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled
          ? "bg-[#FDFBF7]/95 backdrop-blur-md border-b border-[#E8E2D9] shadow-xs py-3"
          : "bg-[#FDFBF7] border-b border-[#E8E2D9]/70 py-3.5 sm:py-4 lg:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Elegant Text Logo featuring "STAR" */}
          <Link
            href="#hero"
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A2118]"
            aria-label="Star Chiropractic and Physiotherapy Center homepage"
          >
            {/* Visual Monogram Badge */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 bg-[#0A2118] text-[#FDFBF7] flex items-center justify-center shrink-0 border border-[#123327] transition-transform duration-200 group-hover:scale-105">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-wider">
                S
              </span>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-serif text-xl sm:text-2xl font-black tracking-tight text-[#0A2118] leading-none">
                  STAR
                </span>
                <span className="text-[10px] uppercase tracking-widest font-bold px-1.5 py-0.5 bg-[#EAF2EE] text-[#1C4737] border border-[#D4E4DC]">
                  Clinic
                </span>
              </div>
              <span className="text-[11px] sm:text-xs text-[#4B5E55] font-medium tracking-wide mt-1">
                Chiropractic &amp; Physiotherapy Center
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main navigation"
            className="hidden md:flex items-center gap-7 lg:gap-9"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#12231C] hover:text-[#0A2118] relative py-1 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#0A2118] hover:after:w-full after:transition-all after:duration-200 focus-visible:ring-2 focus-visible:ring-[#0A2118]"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold tracking-wide text-white bg-[#0A2118] hover:bg-[#123327] active:bg-[#061510] transition-colors border border-[#0A2118] shadow-xs focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0A2118]"
            >
              <span>Contact Us</span>
              <ArrowUpRight className="w-4 h-4 text-[#EAF2EE]" aria-hidden="true" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button (Touch target >= 48px) */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center w-12 h-12 text-[#0A2118] hover:bg-[#F4EFEA] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A2118] transition-colors border border-transparent hover:border-[#E8E2D9]"
              aria-controls="mobile-navigation-menu"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close main menu" : "Open main menu"}
            >
              {isOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown / Full Drawer */}
      {isOpen && (
        <div
          id="mobile-navigation-menu"
          className="md:hidden fixed inset-x-0 top-full bottom-0 z-50 bg-black/60 backdrop-blur-xs transition-opacity duration-200"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-[#FDFBF7] border-b border-[#E8E2D9] px-6 py-6 sm:py-8 shadow-2xl max-h-[calc(100vh-80px)] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col space-y-1">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#798C82] pb-2 border-b border-[#E8E2D9]">
                Menu Directory
              </span>

              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between py-3.5 text-base font-semibold text-[#12231C] hover:text-[#0A2118] border-b border-[#F4EFEA]"
                >
                  <span>{link.name}</span>
                  <span className="text-xs text-[#798C82]">→</span>
                </Link>
              ))}
            </div>

            {/* Mobile Location Badge & Call to Action */}
            <div className="mt-6 pt-5 border-t border-[#E8E2D9] space-y-4">
              <div className="p-4 bg-[#F4EFEA] border border-[#E8E2D9] text-xs">
                <div className="flex items-center gap-1.5 font-bold text-[#0A2118] uppercase tracking-wider">
                  <MapPin className="w-3.5 h-3.5 text-[#1C4737]" />
                  <span>Amla Nagar, Dilsukhnagar</span>
                </div>
                <p className="mt-1 text-[#4B5E55]">
                  Star Chiropractic &amp; Physiotherapy Center · Hyderabad
                </p>
              </div>

              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-4 px-6 text-sm font-bold tracking-wide uppercase text-white bg-[#0A2118] hover:bg-[#123327] transition-colors shadow-sm"
              >
                <span>Contact the Center</span>
                <ArrowUpRight className="w-4 h-4 text-[#EAF2EE]" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
