import {
  MapPin,
  ExternalLink,
  Phone,
  MessageSquare,
  Clock,
  Compass,
  Building2,
  AlertCircle,
} from "lucide-react";
import { clinicConfig } from "@/lib/clinic-config";

export function ContactLocation() {
  const hasPhone = Boolean(clinicConfig.contact.phone);
  const hasWhatsApp = Boolean(clinicConfig.contact.whatsapp);
  const hasHours = clinicConfig.hours.confirmed;

  return (
    <section
      id="contact"
      aria-label="Contact and Location"
      className="py-14 sm:py-20 lg:py-28 bg-[#F4EFEA] border-t border-[#E8E2D9]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 sm:pb-12 border-b border-[#E8E2D9]">
          <div className="max-w-2xl">
            <span className="text-xs uppercase font-bold tracking-widest text-[#1C4737] block mb-2 sm:mb-3">
              Location &amp; Inquiries
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A2118] tracking-tight leading-[1.08]">
              Visiting the Center
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-[#4B5E55] leading-relaxed">
            Conveniently situated in Amla Nagar, Dilsukhnagar, Hyderabad.
            Access the clinic easily with verified Google Maps navigation.
          </p>
        </div>

        {/* Contact & Map Grid */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Left Column: Location & Directions Card */}
          <div className="lg:col-span-6 flex flex-col justify-between bg-white p-6 sm:p-8 lg:p-10 border border-[#E8E2D9] shadow-xs">
            <div>
              <div className="flex items-start gap-4 pb-6 border-b border-[#E8E2D9]">
                <div className="w-11 h-11 sm:w-12 sm:h-12 bg-[#0A2118] text-white flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#3D826E]" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0A2118]">
                    {clinicConfig.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#1C4737] font-semibold tracking-wide mt-0.5">
                    Chiropractic &amp; Physiotherapy Center
                  </p>
                </div>
              </div>

              {/* Exact Location Specifications */}
              <div className="py-6 space-y-5 border-b border-[#E8E2D9]">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[#1C4737] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#798C82]">
                      Locality &amp; City
                    </p>
                    <p className="text-base font-semibold text-[#0A2118] mt-0.5">
                      {clinicConfig.location.area}, {clinicConfig.location.subLocality}
                    </p>
                    <p className="text-xs sm:text-sm text-[#4B5E55]">
                      {clinicConfig.location.city}, {clinicConfig.location.state},{" "}
                      {clinicConfig.location.country}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Compass className="w-5 h-5 text-[#1C4737] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#798C82]">
                      Accessibility &amp; Connectivity
                    </p>
                    <p className="text-xs sm:text-sm text-[#4B5E55] mt-0.5 leading-relaxed">
                      Centrally positioned in Amla Nagar with rapid access to Dilsukhnagar Metro, bus stops, and main Hyderabad transit roads.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Clock className="w-5 h-5 text-[#1C4737] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#798C82]">
                      Opening Hours
                    </p>
                    {hasHours ? (
                      <p className="text-sm text-[#0A2118] font-medium mt-0.5">
                        {clinicConfig.hours.notice}
                      </p>
                    ) : (
                      <div className="mt-1 inline-flex items-center gap-1.5 px-3 py-1 bg-[#FDFBF7] border border-[#E8E2D9] text-xs text-[#4B5E55]">
                        <span>Consultation hours to be confirmed by clinic owner</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Directions Action */}
            <div className="pt-6">
              <a
                href={clinicConfig.location.mapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 min-h-[48px] text-sm font-semibold tracking-wide text-white bg-[#0A2118] hover:bg-[#123327] transition-colors border border-[#0A2118] shadow-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0A2118]"
              >
                <MapPin className="w-4 h-4 text-[#3D826E]" aria-hidden="true" />
                <span>Get Directions on Google Maps</span>
                <ExternalLink className="w-4 h-4 text-[#D4E4DC]" aria-hidden="true" />
              </a>
              <p className="text-[11px] text-center text-[#798C82] mt-2.5">
                Direct Google Maps search for Star Chiropractic &amp; Physiotherapy Center, Amla Nagar
              </p>
            </div>
          </div>

          {/* Right Column: Contact Channels */}
          <div className="lg:col-span-6 flex flex-col justify-between bg-white p-6 sm:p-8 lg:p-10 border border-[#E8E2D9] shadow-xs">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0A2118]">
                Direct Contact Channels
              </h3>
              <p className="text-sm text-[#4B5E55] mt-1.5 leading-relaxed">
                Connect directly for consultations, session availability, and rehabilitation queries.
              </p>

              <div className="mt-6 space-y-4">
                {/* Phone Card (Strictly conditional based on verified config) */}
                {hasPhone ? (
                  <a
                    href={`tel:${clinicConfig.contact.phone}`}
                    className="flex items-center justify-between p-5 bg-[#FDFBF7] border border-[#E8E2D9] hover:border-[#0A2118] transition-colors group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-11 h-11 bg-[#0A2118] text-white flex items-center justify-center">
                        <Phone className="w-5 h-5 text-[#3D826E]" />
                      </div>
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-wider text-[#1C4737]">
                          Clinic Telephone
                        </p>
                        <p className="text-base font-bold text-[#0A2118]">
                          {clinicConfig.contact.phone}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-semibold px-4 py-1.5 bg-[#0A2118] text-white">
                      Call Now
                    </span>
                  </a>
                ) : (
                  <div className="p-4 sm:p-5 bg-[#FDFBF7] border border-[#E8E2D9] flex items-start gap-4">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 bg-[#F4EFEA] text-[#798C82] flex items-center justify-center shrink-0 border border-[#E8E2D9]">
                      <Phone className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-1">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-[#798C82]">
                          Telephone Number
                        </p>
                        <span className="text-[10px] uppercase font-bold px-2 py-0.5 bg-[#F4EFEA] text-[#798C82] border border-[#E8E2D9]">
                          Awaiting Verification
                        </span>
                      </div>
                      <p className="text-sm font-bold text-[#0A2118] mt-1">
                        Direct Phone Dialing Action
                      </p>
                      <p className="text-xs text-[#4B5E55] mt-0.5 leading-relaxed">
                        Will automatically activate as soon as the verified clinic landline or mobile is entered.
                      </p>
                    </div>
                  </div>
                )}

                {/* WhatsApp Card (Strictly conditional based on verified config) */}
                {hasWhatsApp ? (
                  <a
                    href={`https://wa.me/${clinicConfig.contact.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-5 bg-[#FDFBF7] border border-[#E8E2D9] hover:border-[#0A2118] transition-colors group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-11 h-11 bg-[#25D366] text-white flex items-center justify-center">
                        <MessageSquare className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-wider text-[#1C4737]">
                          WhatsApp Support
                        </p>
                        <p className="text-base font-bold text-[#0A2118]">
                          +{clinicConfig.contact.whatsapp}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-semibold px-4 py-1.5 bg-[#25D366] text-white">
                      Chat Now
                    </span>
                  </a>
                ) : (
                  <div className="p-4 sm:p-5 bg-[#FDFBF7] border border-[#E8E2D9] flex items-start gap-4">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 bg-[#F4EFEA] text-[#798C82] flex items-center justify-center shrink-0 border border-[#E8E2D9]">
                      <MessageSquare className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-1">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-[#798C82]">
                          WhatsApp Channel
                        </p>
                        <span className="text-[10px] uppercase font-bold px-2 py-0.5 bg-[#F4EFEA] text-[#798C82] border border-[#E8E2D9]">
                          Awaiting Verification
                        </span>
                      </div>
                      <p className="text-sm font-bold text-[#0A2118] mt-1">
                        One-Tap WhatsApp Messaging
                      </p>
                      <p className="text-xs text-[#4B5E55] mt-0.5 leading-relaxed">
                        Will enable instant WhatsApp chat as soon as your WhatsApp business number is confirmed.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Note on Address Accuracy */}
            <div className="mt-6 pt-5 border-t border-[#E8E2D9]">
              <div className="p-3.5 sm:p-4 bg-[#FDFBF7] border border-[#E8E2D9] text-xs text-[#4B5E55] flex items-start gap-3">
                <AlertCircle className="w-4 h-4 text-[#1C4737] shrink-0 mt-0.5" aria-hidden="true" />
                <p className="leading-relaxed">
                  <strong>Accurate Record Keeping:</strong> No mock street address or unconfirmed phone numbers are fabricated. Once confirmed by the owner, exact coordinates or Google Business Profile links can be configured.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
