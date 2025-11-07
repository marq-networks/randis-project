import type { Metadata } from "next";
import ContactHeroSection from "../components/Contact/ContactHeroSection";
import BookStrategyCall from "../components/Shared/BookStrategyCall";
import Footer from "../components/Shared/Footer";

export default function ContactUs() {
  return (
    <div className="min-h-screen text-white">
      <ContactHeroSection />
      <BookStrategyCall />
      <Footer />
    </div>
  );
}

export const metadata: Metadata = {
  title: "Contact Us — Rutledge & Associates",
  description: "Get in touch with Rutledge & Associates for secure analytics and digital transformation.",
};