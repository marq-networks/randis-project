import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function WhatToExpect() {
    const expectationSteps = [
    {
      title: "Strategic Assessment",
      description: "We'll Analyze Your Current Challenge And Identify The Fastest Path To A Technology Solution.",
    },
    {
      title: "90-Day Roadmap",
      description: "Get A Clear Timeline From Prototype To Production-Ready Solution.",
    },
    {
      title: "Technology Architecture",
      description: "Understand The Enterprise-Grade Infrastructure We'll Build For Your Solution.",
    },
    {
      title: "Investment & ROI",
      description: "Clear Pricing And Expected Return On Your Technology Investment.",
    },
  ];
  return (
    <section className="pt-20 px-6 ">
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
            What to Expect
          </h2>
         <div className="space-y-6">
              {expectationSteps.map((step, index) => (
                <div key={index} className={`flex gap-4 group animate-[fadeInUp_0.8s_ease-out_${0.3 + index * 0.1}s_both]`}>
                  {/* Icon with connector */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="relative">
                      {/* Glow effect */}
                      <div className="absolute -inset-2 bg-blue-500/30 rounded-full blur-xl group-hover:bg-blue-400/40 transition-all duration-300"></div>
                      {/* Icon circle */}
                      <div className="relative w-12 h-12 rounded-full bg-blue-500/20 border-2 border-blue-400/40 flex items-center justify-center backdrop-blur-sm group-hover:bg-blue-500/30 group-hover:border-blue-400/60 transition-all duration-300">
                        <CheckCircle2 className="w-6 h-6 text-blue-300" />
                      </div>
                    </div>

                    {/* Connector line */}
                    {index !== expectationSteps.length - 1 && (
                      <div className="w-0.5 h-12 bg-gradient-to-b from-blue-400/40 to-blue-400/10 mt-2"></div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-4">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
        </div>
        <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden animate-[fadeInUp_0.8s_ease-out_0.4s_both]">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-purple-900/40 rounded-2xl border border-blue-500/30 backdrop-blur-sm">
            <Image 
              src="/homepage/what to expect/what to expect.png" 
              alt="Technology Visualization - Laptop with Global Network" 
              fill 
              className="object-cover rounded-2xl hover:scale-105 transition-transform duration-500" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}