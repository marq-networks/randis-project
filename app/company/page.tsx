import type { Metadata } from "next";
import CompanyProfile from "../components/HomePage/CompanyProfile";

export default function CompanyPage() {
  return (
    <main className="min-h-screen text-white">
      <section className="max-w-[1200px] mx-auto px-6 py-10">
        <h1 className="text-2xl md:text-3xl font-bold">Company Profile</h1>
        <p className="mt-2 text-white/70">Who we are and how we deliver value.</p>
      </section>
      <CompanyProfile />
    </main>
  );
}

export const metadata: Metadata = {
  title: "Company — Rutledge & Associates",
  description: "Company profile, mission, and the value we deliver to public sector and enterprise clients.",
};