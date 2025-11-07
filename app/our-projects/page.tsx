import type { Metadata } from "next";
import TransformChallenge from "../components/About/TransformChallenge";
import SuccessStories from "../components/HomePage/SuccessStories";
import ProjectsHeroSection from "../components/Projects/ProjectsHeroSection";
import BlueprintToBreakthrough from "../components/Projects/BlueprintToBreakthrough";
import BookStrategyCall from "../components/Shared/BookStrategyCall";
import Footer from "../components/Shared/Footer";
import TurningProblems from "../components/Solutions/TurningProblems";
import Testimonials from "../components/HomePage/Testimonials";

export default function OurProjects() {
  return (
    <div className="min-h-screen text-white">
      <ProjectsHeroSection />
      <BlueprintToBreakthrough />
      <SuccessStories />
      <TransformChallenge />
      <TurningProblems />
      <Testimonials />

      <BookStrategyCall />
      <Footer />
    </div>
  );
}

export const metadata: Metadata = {
  title: "Our Projects — Case Studies & Outcomes",
  description: "Explore projects and success stories showcasing secure analytics and transformation outcomes.",
};