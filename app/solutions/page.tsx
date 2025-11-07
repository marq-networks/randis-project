import type { Metadata } from "next";
import GovSolutionsHeroSection from "../components/Government/GovSolutionsHeroSection";
import ChallengeAndApproach from "../components/Government/ChallengeAndApproach";
import SuccessStories from "../components/Government/SuccessStories";
import BookStrategyCall from "../components/Shared/BookStrategyCall";
import Footer from "../components/Shared/Footer";
import Testimonials from "../components/HomePage/Testimonials";

export default function GovSolutions() {
  return (
    <div className="min-h-screen text-white">
      <GovSolutionsHeroSection />
   
      <ChallengeAndApproach />
      <SuccessStories />
      <Testimonials />

      <BookStrategyCall />
      <Footer />
    </div>
  );
}

export const metadata: Metadata = {
  title: "Solutions — Secure Analytics & Strategic Infrastructure",
  description: "Government and enterprise solutions spanning secure analytics, compliance automation, and cloud-enabled infrastructure.",
};