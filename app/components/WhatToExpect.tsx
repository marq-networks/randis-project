import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function WhatToExpect() {
    const approachSteps = [
    {
      title: "Assess & Strategize",
      description: "We Dive Deep Into Your Current Systems, Risks, And Goals.",
    },
    {
      title: "Prototype & Build",
      description: "We Deliver Working, Secure SaaS/PaaS Solutions Fast.",
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
      <div className="max-w-[1200px] mx-auto px-6 py-16 grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-2xl font-semibold mb-4 animate-[fadeInUp_0.8s_ease-out_0.2s_both]">What to Expect</h2>
         <div className="space-y-2">
              {approachSteps.map((step, index) => (
                <div key={index} className={`flex gap-2 group animate-[fadeInUp_0.8s_ease-out_${0.3 + index * 0.1}s_both]`}>
                  {/* Icon with connector */}
                  <div className="flex flex-col items-center flex-shrink-0 gap-2">
                    <div className="relative">
                      {/* Glow effect */}
                      <div className="absolute -inset-2 bg-blue-500/30 rounded-full blur-xl group-hover:bg-blue-400/40 transition-all duration-300"></div>
                      {/* Icon circle */}
                      <div className="relative w-12 h-12 rounded-full bg-blue-500/20 border-2 border-blue-400/40 flex items-center justify-center backdrop-blur-sm group-hover:bg-blue-500/30 group-hover:border-blue-400/60 transition-all duration-300">
                        <CheckCircle2 className="w-6 h-6 text-blue-300" />
                      </div>
                    </div>

                    {/* Connector line */}
                    {index !== approachSteps.length - 1 && (
                      <div className="w-0.5 h-16 bg-gradient-to-b from-blue-400/40 to-blue-400/10 mt-2"></div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-4">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
        </div>
        <div className="relative h-64 md:h-full rounded-2xl card overflow-hidden animate-[fadeInUp_0.8s_ease-out_0.4s_both]">
          <Image src="/homepage/what to expect/what to expect.png" alt="Expect" fill className="object-cover hover:scale-105 transition-transform duration-500" />
        </div>
      </div>
    </section>
  );
}