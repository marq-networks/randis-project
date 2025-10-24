import AboutUsHeroSection from "../components/AboutUsHeroSection";
import AboutUsCapabilitiesGrid from "../components/AboutUsCapabilitiesGrid";
import AboutUsSection from "../components/AboutUsSection";
import ReadyToSolveCTA from "../components/ReadyToSolveCTA";
import WhatToExpect from "../components/WhatToExpect";
import BookStrategyCall from "../components/BookStrategyCall";
import Footer from "../components/Footer";

export default function AboutUs() {
  return (
    <div className="min-h-screen text-white">
      <AboutUsHeroSection />
      <AboutUsCapabilitiesGrid />
      <AboutUsSection />
      <ReadyToSolveCTA />
      <WhatToExpect />
      <ReadyToSolveCTA />
      <BookStrategyCall />
      <Footer />
    </div>
  );
}