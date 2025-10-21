import Image from "next/image";

export default function ChallengeApproach() {
  return (
    <section className="border-t border-white/10">
      <div className="max-w-[1200px] mx-auto px-6 py-16 grid lg:grid-cols-[1fr_20px_1fr] gap-8 items-start">
        <div className="rounded-2xl card p-6">
          <h2 className="text-xl md:text-2xl font-semibold">The Challenge</h2>
          <ul className="mt-6 space-y-3 text-[14px] text-white/80">
            {[
              "Fragmented, legacy systems add risk and slow insights.",
              "Compliance is manual, costly, and error-prone.",
              "Data privacy concerns limit analytics adoption.",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <Image src="/homepage/our approach/check.png" alt="Check" width={18} height={18} />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden lg:flex items-stretch justify-center">
          <Image src="/homepage/our approach/line verticle.png" alt="Divider" width={6} height={200} />
        </div>

        <div className="rounded-2xl card p-6">
          <h2 className="text-xl md:text-2xl font-semibold">Our Approach</h2>
          <ul className="mt-6 space-y-3 text-[14px] text-white/80">
            {[
              "Privacy-first architecture and governance by design.",
              "Automated compliance controls and reporting.",
              "Composable analytics with secure data sharing.",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <Image src="/homepage/our approach/check.png" alt="Check" width={18} height={18} />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3 mt-10">
          <div className="relative w-full h-64 rounded-2xl card overflow-hidden">
            <Image src="/homepage/our approach/our approach.png" alt="Approach Visual" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}