import GovSolutionsHeroSection from "../components/Government/GovSolutionsHeroSection";
import WhyChooseUs from "../components/Government/WhyChooseUs";
import ChallengeAndApproach from "../components/Government/ChallengeAndApproach";
import SuccessStories from "../components/Government/SuccessStories";
import BookStrategyCall from "../components/Shared/BookStrategyCall";
import Footer from "../components/Shared/Footer";

export default function GovSolutions() {
  return (
    <div className="min-h-screen text-white">
      <GovSolutionsHeroSection />
      {/* <WhyChooseUs /> */}
      <ChallengeAndApproach />
      <SuccessStories />

      <BookStrategyCall />
      <Footer />
    </div>
  );
}