import type { Metadata } from "next";
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
      <ReadyToSolveCTA 
        title="Who We Are"
        subtitle="Rutledge & Associates is a woman- and veteran-led consulting firm specializing in digital transformation for the public sector. For more than two decades, we've helped agencies streamline operations, automate compliance, and strengthen data-driven decision-making. We bridge strategy, technology, and human experience — delivering systems that simplify work and empower results."
        primaryCtaLabel="Book Your 90-Day Strategy Call"
        primaryCtaHref="https://cal.com/rutledge-associates"
        hideSteps
      />
      <TransformChallenge />

      <ReadyToSolveCTANew />
      <WhatToExpect />
      <BookStrategyCall />
      <Footer />
    </div>
  );
}

export const metadata: Metadata = {
  title: "About Rutledge & Associates",
  description: "Woman- and veteran-led consulting firm delivering privacy-first digital transformation and government-grade analytics.",
};