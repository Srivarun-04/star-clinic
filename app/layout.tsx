import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0A2118",
};

export const metadata: Metadata = {
  title: "Star Chiropractic & Physiotherapy Center | Amla Nagar, Dilsukhnagar, Hyderabad",
  description:
    "Move Better. Feel Stronger. Live Fully. Premium chiropractic care, spine alignment, and modern physiotherapy rehabilitation in Amla Nagar, Dilsukhnagar, Hyderabad.",
  keywords: [
    "Star Chiropractic Hyderabad",
    "Physiotherapy Dilsukhnagar",
    "Chiropractic Center Amla Nagar",
    "Spine Alignment Hyderabad",
    "Back Pain Therapy Dilsukhnagar",
    "Sports Rehabilitation Hyderabad",
    "Star Physiotherapy Center",
  ],
  authors: [{ name: "Star Chiropractic & Physiotherapy Center" }],
  openGraph: {
    title: "Star Chiropractic & Physiotherapy Center | Amla Nagar, Dilsukhnagar, Hyderabad",
    description:
      "Move Better. Feel Stronger. Live Fully. Thoughtful physical therapy and chiropractic care in Dilsukhnagar, Hyderabad.",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`h-full scroll-smooth antialiased ${inter.variable} ${playfair.variable}`}
    >
      <body className="min-h-full flex flex-col bg-[#FDFBF7] text-[#12231C] selection:bg-[#0A2118] selection:text-white font-sans overflow-x-hidden">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-[#0A2118] focus:text-white focus:rounded focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#3D826E]"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
