"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CTAButton from "../Shared/CTAButton";
import { motion,Variants } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function TurningProblems() {
  const buttonRef = useRef<HTMLDivElement>(null);
  const approachContentRef = useRef<HTMLDivElement>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const approachTitleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const card = cardRef.current;

    if (!container || !card) return;

    // Set initial states
    gsap.set(card, {
      opacity: 0,
      y: 50
    });

    // Create timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        once: true
      }
    });

    tl.to(card, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
   const slideInRight: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };
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
    const features = [
    {
      title: "SOC 2 Compliant",
      subtitle: "Built-In Compliance From Prototype To Production"
    },
    {
      title: "Enterprise Security",
      subtitle: "Zero-Trust Architecture And Encrypted Everything"
    },
    {
      title: "99.99% SLA",
      subtitle: "Enterprise-Grade Reliability Guarantees"
    },
    {
      title: "Seamless IT Integration",
      subtitle: "Works With Existing Active Directory And Microsoft Ecosystem"
    },
    {
      title: "AI/ML Integration",
      subtitle: "Native Integration With Azure Cognitive Services And OpenAI"
    }
  ];
  return (
    <section className="py-20 bg-[#0a0e1a]" ref={containerRef}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6  gap-4 lg:px-8">
        {/* Single Large Card */}
        <div 
          ref={cardRef}
          className="relative overflow-hidden rounded-2xl border-l-4 border-l-[#3b82f6] group  transition-all duration-500 hover:shadow-2xl hover:shadow-[#3b82f6]/10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">
            {/* Left Content */}
         <div className="space-y-8 pl-4">
                <h2
                  ref={approachTitleRef}
                  className="text-[42px] md:text-[48px] font-bold text-white mb-8"
                >
                  Our Approach
                </h2>

                <div
                  ref={approachContentRef}
                  className="space-y-6"
                >
                  {approachSteps.map((step) => (
                    <div
                      key={step.title}
                      className="flex gap-4 group"
                    >
                      {/* Green Check Icon */}
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-6 h-6 rounded-full bg-green-500/20 border border-green-400/40 flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-green-400"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M20 6L9 17L4 12"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors duration-300">
                          {step.title}
                        </h3>
                        <p className="text-white/70 text-base leading-relaxed">
                          {step.description}
                        </p>

                      </div>

                    </div>
                  ))}
                </div>
                <div
                  ref={buttonRef}
                  className="mt-8"
                >
                  <CTAButton
                    href="/contact"
                    className="inline-flex  rounded-4xl items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4  font-medium text-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/25 group"
                  >
                    Get to Know Strategy Call
                    <svg
                      className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </CTAButton>
                </div>
              </div>

            {/* Right Image */}
            <div className="relative flex items-center justify-center p-8">
              <div className="relative w-full h-full">
                <Image
                  src="/solution/solution3.png"
                  alt="Strategic Solutions Technology Visualization"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-8 right-8 w-16 h-16 bg-[#3b82f6]/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-8 left-8 w-20 h-20 bg-[#3b82f6]/5 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
          <div 
          ref={cardRef}
          className="relative overflow-hidden rounded-2xl mt-10 border-r-4 border-r-[#3b82f6] group  transition-all duration-500 hover:shadow-2xl hover:shadow-[#3b82f6]/10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">
            {/* Left Content */}
               <div className="relative flex items-center justify-center p-8">
              <div className="relative w-full h-full">
                <Image
                  src="/solution/solution3.png"
                  alt="Strategic Solutions Technology Visualization"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-8 right-8 w-16 h-16 bg-[#3b82f6]/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-8 left-8 w-20 h-20 bg-[#3b82f6]/5 rounded-full blur-2xl"></div>
            </div>
             <div className="space-y-3">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex gap-4 group"
                  variants={slideInRight}
                >
                  {/* Icon with connector */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="relative">
                      {/* Glow effect */}
                      <div className="absolute -inset-2 bg-blue-500/30 rounded-full blur-xl group-hover:bg-blue-400/40 transition-all duration-300"></div>
                      {/* Icon circle */}
                      <div className="relative w-12 h-12 rounded-full bg-blue-500/20 border-2 border-blue-400/40 flex items-center justify-center backdrop-blur-sm group-hover:bg-blue-500/30 group-hover:border-blue-400/60 transition-all duration-300">
                        <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>

                  
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-4">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {feature.subtitle}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

           
         
          </div>
        </div>
      </div>
    </section>
  );
}