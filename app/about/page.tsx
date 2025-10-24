import AboutUsHeroSection from "../components/About/AboutUsHeroSection";
import AboutUsCapabilitiesGrid from "../components/About/AboutUsCapabilitiesGrid";
import AboutUsSection from "../components/About/AboutUsSection";
import ReadyToSolveCTA from "../components/Shared/ReadyToSolveCTA";
import WhatToExpect from "../components/Shared/WhatToExpect";
import BookStrategyCall from "../components/Shared/BookStrategyCall";
import Footer from "../components/Shared/Footer";
import TransformChallenge from "../components/About/TransformChallenge";
import ReadyToSolveCTANew from "../components/About/ReadyToSolveCTANew";

export default function AboutUs() {
  return (
    <div className="min-h-screen text-white">
      <AboutUsHeroSection />
      <AboutUsCapabilitiesGrid />
      <AboutUsSection />
      <ReadyToSolveCTA />
      <TransformChallenge />

      <ReadyToSolveCTANew />
      <WhatToExpect />
      <BookStrategyCall />
      <Footer />
    </div>
  );
}