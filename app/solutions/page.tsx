import SolutionsHeroSection from "../components/Solutions/SolutionsHeroSection";
import StrategicInfrastructure from "../components/Solutions/StrategicInfrastructure";
import TransformChallenge from "../components/About/TransformChallenge";
import ReadyToSolveCTANew from "../components/About/ReadyToSolveCTANew";
import BookStrategyCall from "../components/Shared/BookStrategyCall";
import Footer from "../components/Shared/Footer";

export default function Solutions() {
  return (
    <div className="min-h-screen text-white">
      <SolutionsHeroSection />
      <StrategicInfrastructure />
      <TransformChallenge />
      <StrategicInfrastructure />

      <ReadyToSolveCTANew />
      <BookStrategyCall />
      <Footer />
    </div>
  );
}