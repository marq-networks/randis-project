import AboutUsHeroSection from "../components/AboutUsHeroSection";
import ReadyToSolveCTA from "../components/ReadyToSolveCTA";
import WhatToExpect from "../components/WhatToExpect";
import BookStrategyCall from "../components/BookStrategyCall";
import AboutUsCapabilitiesGrid from "../components/AboutUsCapabilitiesGrid";
import Footer from "../components/Footer";

export default function AboutUs() {
  return (
    <div className="min-h-screen text-white">
      <AboutUsHeroSection />
      <ReadyToSolveCTA />
      <WhatToExpect />
      <ReadyToSolveCTA />
      <BookStrategyCall />
      <AboutUsCapabilitiesGrid />
      <Footer />
    </div>
  );
}