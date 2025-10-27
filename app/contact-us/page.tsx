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