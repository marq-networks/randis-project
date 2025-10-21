import HeroSection from "./components/HeroSection";
import CapabilitiesGrid from "./components/CapabilitiesGrid";
import ChallengeApproach from "./components/ChallengeApproach";
import CompanyProfile from "./components/CompanyProfile";
import WhatToExpect from "./components/WhatToExpect";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen text-white">
      <HeroSection />
      <CapabilitiesGrid />
      <ChallengeApproach />
      <section className="border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-6 py-14 text-center">
          <h3 className="text-xl md:text-2xl font-semibold">Ready to Partner with a Privacy-first Leader?</h3>
          <div className="mt-6 flex justify-center">
            <Link href="/contact" className="rounded-full btn-primary px-6 py-3 text-sm font-semibold">Let’s Talk</Link>
          </div>
        </div>
      </section>
      <CompanyProfile />
      <WhatToExpect />
    </div>
  );
}
