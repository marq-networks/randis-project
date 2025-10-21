import WhatToExpect from "../components/WhatToExpect";

export default function ExpectPage() {
  return (
    <main className="min-h-screen text-white">
      <section className="max-w-[1200px] mx-auto px-6 py-10">
        <h1 className="text-2xl md:text-3xl font-bold">What to Expect</h1>
        <p className="mt-2 text-white/70">What engagement looks like—outcomes, milestones, and trust.</p>
      </section>
      <WhatToExpect />
    </main>
  );
}