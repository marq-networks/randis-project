import type { Metadata } from "next";
import ChallengeApproach from "../components/HomePage/ChallengeApproach";

export default function ApproachPage() {
  return (
    <main className="min-h-screen text-white">
      <section className="max-w-[1200px] mx-auto px-6 py-10">
        <h1 className="text-2xl md:text-3xl font-bold">Our Approach</h1>
        <p className="mt-2 text-white/70">How we tackle challenges with privacy-first analytics.</p>
      </section>
      <ChallengeApproach />
    </main>
  );
}

export const metadata: Metadata = {
  title: "Our Approach",
  description: "How Rutledge & Associates delivers privacy-first analytics and transformation.",
};