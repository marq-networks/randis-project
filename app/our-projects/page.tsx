import TransformChallenge from "../components/About/TransformChallenge";
import SuccessStories from "../components/HomePage/SuccessStories";
import ProjectsHeroSection from "../components/Projects/ProjectsHeroSection";
import BookStrategyCall from "../components/Shared/BookStrategyCall";
import Footer from "../components/Shared/Footer";
import TurningProblems from "../components/Solutions/TurningProblems";

export default function OurProjects() {
  return (
    <div className="min-h-screen text-white">
      <ProjectsHeroSection />
      <SuccessStories />
      <TransformChallenge />
      <TurningProblems />

      <BookStrategyCall />
      <Footer />
    </div>
  );
}