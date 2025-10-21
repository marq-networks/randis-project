import Image from "next/image";

export default function ChallengeApproach() {
  const approachSteps = [
    {
      title: "Assess & Strategize",
      description: "We Dive Into Your Current Systems, Risks, And Goals.",
    },
    {
      title: "Prototype & Build",
      description: "We Deliver Archival, Secure Staff-Proof Solutions Fast.",
    },
    {
      title: "Deploy & Integrate",
      description: "We Ensure Systems Work Seamlessly In Your Ecosystem.",
    },
    {
      title: "Train & Sustain",
      description: "We Empower Your Teams To Run Systems Independently.",
    },
  ];

  return (
    <section className="border-t border-white/10">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* The Challenge */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Challenge</h2>
            <p className="text-white/70 text-[14px] leading-relaxed mb-8">
              Many Agencies Juggle Outdated Systems, Silos Of Inconsistent 
              Data, And Labor-Intensive Processes That Stifle Decision-
              Making, Agility, And Limits Transparency.
            </p>
            
            {/* Challenge Image with Icons */}
            <div className="relative">
              <div className="relative w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-900/20 to-blue-800/10 border border-white/10 overflow-hidden">
                <Image 
                  src="/homepage/our approach/our approach.png" 
                  alt="Challenge Visual" 
                  fill 
                  className="object-cover opacity-80" 
                />
                
                {/* Overlay icons - positioned to match screenshot */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    {/* Center hand/touch icon */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-16 h-16 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center">
                        <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
                      </div>
                    </div>
                    
                    {/* Surrounding icons */}
                    <div className="absolute top-1/4 left-1/4 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                      <div className="w-6 h-6 bg-blue-400 rounded"></div>
                    </div>
                    <div className="absolute top-1/4 right-1/4 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                      <div className="w-6 h-6 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="absolute bottom-1/4 left-1/4 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                      <div className="w-6 h-6 bg-purple-400 rounded"></div>
                    </div>
                    <div className="absolute bottom-1/4 right-1/4 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                      <div className="w-6 h-6 bg-orange-400 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Our Approach */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Approach</h2>
            
            <div className="space-y-6">
              {approachSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  {/* Check icon */}
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  
                  <div>
                    <h3 className="text-[16px] font-semibold text-white mb-1">{step.title}</h3>
                    <p className="text-[14px] text-white/70">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}