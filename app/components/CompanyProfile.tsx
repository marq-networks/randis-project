import Image from "next/image";

export default function CompanyProfile() {
  return (
    <section className="border-t border-white/10">
      <div className="max-w-[1200px] mx-auto px-6 py-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-semibold">Company Profile</h2>
          <p className="mt-4 text-white/80 text-[14px]">
            Trusted public sector partner focused on compliance modernization, secure data collaboration, and actionable analytics outcomes.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 text-[14px] text-white/80">
            {[
              "Public sector expertise across compliance frameworks.",
              "Security-first engineering and delivery.",
              "Outcome-driven engagements with measurable value.",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <Image src="/homepage/our approach/check.png" alt="Check" width={18} height={18} />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative h-64 md:h-80 rounded-2xl card overflow-hidden">
          <Image src="/homepage/company profile/company profile.png" alt="Company" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
}