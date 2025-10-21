import Image from "next/image";

export default function WhatToExpect() {
  return (
    <section className="border-t border-white/10">
      <div className="max-w-[1200px] mx-auto px-6 py-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-semibold">What to Expect</h2>
          <ul className="mt-6 space-y-3 text-[14px] text-white/80">
            {[
              "Fast assessment and roadmap in weeks, not months.",
              "Secure, compliant architecture aligned to mission.",
              "Pragmatic delivery with measurable milestones.",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <Image src="/homepage/our approach/check.png" alt="Check" width={18} height={18} />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative h-64 md:h-80 rounded-2xl card overflow-hidden">
          <Image src="/homepage/what to expect/what to expect.png" alt="Expect" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
}