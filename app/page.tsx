import { DemoBanner } from "@/components/demo-banner";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Treatments } from "@/components/treatments";
import { About } from "@/components/about";
import { WhyChooseUs } from "@/components/why-choose-us";
import { ContactLocation } from "@/components/contact-location";
import { Footer } from "@/components/footer";
import { BackToTop } from "@/components/back-to-top";

export default function HomePage() {
  return (
    <>
      <DemoBanner />
      <Navbar />
      <main id="main-content" className="flex-1">
        <Hero />
        <Treatments />
        <About />
        <WhyChooseUs />
        <ContactLocation />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

