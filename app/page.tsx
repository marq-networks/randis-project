import HeroSection from "./components/HomePage/HeroSection";
import CapabilitiesGrid from "./components/HomePage/CapabilitiesGrid";
import ChallengeApproach from "./components/HomePage/ChallengeApproach";
import CompanyProfile from "./components/HomePage/CompanyProfile";
import WhatToExpect from "./components/Shared/WhatToExpect";
import PartnerCTA from "./components/HomePage/PartnerCTA";
import CompanionModel from "./components/HomePage/CompanionModel";
import SuccessStories from "./components/HomePage/SuccessStories";
import Transfromation from "./components/HomePage/Transformation";
import CompanyProfileAgain from "./components/HomePage/CompanyProfileAgain";
import ReadyToSolve from "./components/HomePage/ReadyToSolve";
import EnterpriseTrust from "./components/HomePage/EnterpriseTrust";
import ReadyToSolveCTA from "./components/Shared/ReadyToSolveCTA";
import Testimonials from "./components/HomePage/Testimonials";
import BookStrategyCall from "./components/Shared/BookStrategyCall";
import Footer from "./components/Shared/Footer";

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
