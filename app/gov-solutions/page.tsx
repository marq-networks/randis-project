import GovSolutionsHeroSection from "../components/Government/GovSolutionsHeroSection";
import WhyChooseUs from "../components/Government/WhyChooseUs";
import TheChallenge from "../components/Government/TheChallenge";
import OurApproach from "../components/Government/OurApproach";
import SuccessStories from "../components/HomePage/SuccessStories";
import BookStrategyCall from "../components/Shared/BookStrategyCall";
import Footer from "../components/Shared/Footer";

export default function GovSolutions() {
  return (
    <div className="min-h-screen text-white">
      <GovSolutionsHeroSection />
      <WhyChooseUs />
      <TheChallenge />
      <OurApproach />
      <SuccessStories />

      <BookStrategyCall />
      <Footer />
    </div>
  );
}