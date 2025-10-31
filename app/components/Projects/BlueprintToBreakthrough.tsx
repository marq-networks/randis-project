export default function BlueprintToBreakthrough() {
  const implementationSteps = [
    {
      title: "Engage & Define",
      description: "Clarify needs and success measures."
    },
    {
      title: "Design & Prototype",
      description: "Co-create intuitive, scalable interfaces."
    },
    {
      title: "Build & Validate",
      description: "Develop secure, cloud-native systems."
    },
    {
      title: "Launch & Evolve",
      description: "Optimize continuously with analytics and feedback."
    }
  ];

  const techFoundations = [
    "React | TypeScript | Node.js | Express",
    "PostgreSQL | AWS / Azure Cloud",
    "WCAG-Compliant UX"
  ];

  const results = [
    "70% reduction in manual audit tasks",
    "100% compliance coverage across program areas",
    "Faster vendor approvals and payments",
    "Consistent improvement in user satisfaction and efficiency"
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            From Blueprint to Breakthrough
          </h2>
          <p className="mt-3 text-white/70 text-base md:text-lg">
            Every project we deliver turns complex requirements into measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Card: Implementation Model */}
          <div className="rounded-2xl border border-white/10 bg-[#0D1832]/60 p-6 md:p-8">
            <h3 className="text-2xl font-bold text-white">Our Implementation Model</h3>
            <p className="mt-2 text-white/70">
              We use agile, evidence-based delivery rooted in collaboration and accountability.
            </p>

            <div className="mt-6 space-y-4">
              {implementationSteps.map((step) => (
                <div key={step.title} className="flex items-start gap-4">
                  <div className="mt-0.5 w-6 h-6 rounded-full bg-green-500/20 border border-green-400/40 flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-base md:text-lg font-semibold text-white">{step.title}</p>
                    <p className="text-white/70 text-sm md:text-base">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <h4 className="text-lg font-bold text-white">Outcome</h4>
              <p className="mt-1 text-white/70">
                Solutions that perform, scale, and sustain — long after implementation.
              </p>
            </div>
          </div>

          {/* Right Card: Technology Foundation & Results */}
          <div className="rounded-2xl border border-white/10 bg-[#0D1832]/60 p-6 md:p-8">
            <h3 className="text-2xl font-bold text-white">Our Technology Foundation</h3>
            <p className="mt-2 text-white/70">
              Modern frameworks ensure performance and longevity:
            </p>
            <ul className="mt-3 space-y-2">
              {techFoundations.map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/80">
                  <span className="mt-0.5 inline-block w-2 h-2 rounded-full bg-blue-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h4 className="text-lg font-bold text-white">What Clients Remember</h4>
              <p className="mt-1 text-white/70">
                Not the code — the calm, confidence, and clarity our systems create.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <h4 className="text-lg font-bold text-white">Results at a Glance</h4>
              <div className="mt-4 space-y-4">
                {results.map((r) => (
                  <div key={r} className="flex items-start gap-3">
                    <div className="mt-0.5 w-6 h-6 rounded-full bg-blue-500/20 border border-blue-400/40 flex items-center justify-center">
                      <svg className="w-4 h-4 text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <p className="text-white/80">{r}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}