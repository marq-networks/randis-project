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