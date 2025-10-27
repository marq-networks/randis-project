import GovSolutionsHeroSection from "../components/Government/GovSolutionsHeroSection";
import BookStrategyCall from "../components/Shared/BookStrategyCall";
import Footer from "../components/Shared/Footer";

export default function GovSolutions() {
  return (
    <div className="min-h-screen text-white">
      <GovSolutionsHeroSection />
      <BookStrategyCall />
      <Footer />
    </div>
  );
}