import HeroSection from "./components/HeroSection";
import CapabilitiesGrid from "./components/CapabilitiesGrid";
import ChallengeApproach from "./components/ChallengeApproach";
import CompanyProfile from "./components/CompanyProfile";
import WhatToExpect from "./components/WhatToExpect";
import PartnerCTA from "./components/PartnerCTA";
import CompanionModel from "./components/CompanionModel";
import SuccessStories from "./components/SuccessStories";
import Transfromation from "./components/Transformation";
import CompanyProfileAgain from "./components/CompanyProfileAgain";
import ReadyToSolve from "./components/ReadyToSolve";
import EnterpriseTrust from "./components/EnterpriseTrust";
import ReadyToSolveCTA from "./components/ReadyToSolveCTA";
import Testimonials from "./components/Testimonials";
import BookStrategyCall from "./components/BookStrategyCall";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen text-white">
      <HeroSection />
      <CapabilitiesGrid />
      <ChallengeApproach />
      <PartnerCTA />
      <CompanionModel /> 
      <Transfromation />
      <CompanyProfileAgain />
      <SuccessStories />
      <ReadyToSolve />
      <EnterpriseTrust />
      <WhatToExpect />
      <ReadyToSolveCTA />
      <Testimonials />
      <BookStrategyCall />
      <Footer />
    </div>
  );
}
