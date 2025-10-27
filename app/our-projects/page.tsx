import SuccessStories from "../components/HomePage/SuccessStories";
import ProjectsHeroSection from "../components/Projects/ProjectsHeroSection";
import BookStrategyCall from "../components/Shared/BookStrategyCall";
import Footer from "../components/Shared/Footer";

export default function OurProjects() {
  return (
    <div className="min-h-screen text-white">
      <ProjectsHeroSection />
      <SuccessStories />

      <BookStrategyCall />
      <Footer />
    </div>
  );
}