"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function ChallengeAndApproach() {
  const containerRef = useRef<HTMLDivElement>(null);
  const challengeTitleRef = useRef<HTMLHeadingElement>(null);
  const challengeContentRef = useRef<HTMLDivElement>(null);
  const challengeImageRef = useRef<HTMLDivElement>(null);
  const approachTitleRef = useRef<HTMLHeadingElement>(null);
  const approachContentRef = useRef<HTMLDivElement>(null);
  const approachImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states for Challenge section
      gsap.set([challengeTitleRef.current, challengeContentRef.current, challengeImageRef.current], {
        opacity: 0,
        y: 50
      });

      // Set initial states for Approach section
      gsap.set([approachTitleRef.current, approachContentRef.current, approachImageRef.current], {
        opacity: 0,
        y: 50
      });

      // Create timeline for Challenge section
      const challengeTl = gsap.timeline({
        scrollTrigger: {
          trigger: challengeTitleRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      challengeTl.to(challengeTitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      })
      .to(challengeContentRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.4")
      .to(challengeImageRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.6");

      // Create timeline for Approach section
      const approachTl = gsap.timeline({
        scrollTrigger: {
          trigger: approachTitleRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      approachTl.to(approachTitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      })
      .to(approachContentRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.4")
      .to(approachImageRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.6");

    }, containerRef);

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const challenges = [
    {
      id: 1,
      title: "System",
      description: "Outdated and fragmented systems that produce siloed or inconsistent data."
    },
    {
      id: 2,
      title: "Error and delay",
      description: "Manual, labor-intensive audit and compliance processes vulnerable to error and delay."
    },
    {
      id: 3,
      title: "Lack of real-time insights",
      description: "Slow decision making due to lack of real-time insights and visibility."
    },
    {
      id: 4,
      title: "Transparency demands",
      description: "Rising regulatory, security and transparency demands from oversight bodies and the public."
    }
  ];

  const approachSteps = [
    {
      id: 1,
      title: "Assess & Strategize",
      description: "We work alongside your team to map current systems, data flows and business risks, and define a clear roadmap aligned with your mission and compliance goals."
    },
    {
      id: 2,
      title: "Prototype & Build",
      description: "We deliver secure, working prototypes fast — validating architecture, data integration and analytics capabilities, ensuring early stakeholder buy-in."
    },
    {
      id: 3,
      title: "Deploy & Integrate",
      description: "We implement robust SaaS/PaaS platforms within your ecosystems — connecting disparate systems, automating workflows, and enabling secure, scalable deployment."
    },
    {
      id: 4,
      title: "Train & Sustain",
      description: "We empower your workforce with training, governance frameworks and support mechanisms so your teams operate independently and your solution evolves."
    }
  ];

  return (
    <div ref={containerRef}>
      <div className="">
          <Image
            src="/line.png"
            alt="Enterprise Trust"
            width={1200}
            height={200}
            className="w-full h-auto"
          />
        </div>
      {/* Combined Card Container using provided CSS */}
      <section className="pt-20">
        <div className="mx-auto max-w-[1170px] px-6">
          <div
            className="rounded-[20.0304px] border border-white/10 overflow-hidden"
            style={{
              background:
                "linear-gradient(133.24deg, #0D1832 53.4%, rgba(19, 36, 73, 0) 104.73%)",
            }}
          >
            {/* First Row: The Challenge */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch p-6 lg:p-8">
            {/* Left Content */}
            <div className="space-y-8">
              <h2 
                ref={challengeTitleRef}
                className="text-[42px] md:text-[48px] font-bold text-white mb-8"
              >
                The Challenge
              </h2>
              
              <div 
                ref={challengeContentRef}
                className="space-y-6"
              >
                {challenges.map((challenge) => (
                  <div
                    key={challenge.id}
                    className="flex gap-4 group"
                  >
                    {/* Red X Icon */}
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-red-500/20 border border-red-400/40 flex items-center justify-center">
                        <svg 
                          className="w-4 h-4 text-red-400" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path 
                            d="M18 6L6 18M6 6L18 18" 
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
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-300 transition-colors duration-300">
                        {challenge.title}
                      </h3>
                      <p className="text-white/70 text-base leading-relaxed">
                        {challenge.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div 
              ref={challengeImageRef}
              className="relative h-full"
            >
              <div className="relative h-full min-h-[280px] sm:min-h-[340px] lg:min-h-[420px] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-900/30 to-slate-900/50 border border-blue-400/20 backdrop-blur-sm">
                <div className="h-full relative bg-gradient-to-br from-blue-900/40 via-slate-800/60 to-slate-900/80 p-8">
                  <Image
                    src="/solution/hero/hero.png"
                    alt="Government Solutions Hero Background"
                    fill
                    className="object-cover h-full"
                  />
                </div>
              </div>
            </div>
          </div>
          

            {/* Divider spacing between rows */}

            {/* Second Row: Our Approach */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch p-6 lg:p-8">
            {/* Left Image */}
            <div 
              ref={approachImageRef}
              className="relative h-full"
            >
              <div className="relative h-full min-h-[280px] sm:min-h-[340px] lg:min-h-[420px] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-900/30 to-slate-900/50 border border-blue-400/20 backdrop-blur-sm">
                <div className="h-full relative bg-gradient-to-br from-blue-900/40 via-slate-800/60 to-slate-900/80 p-8">
                  <Image
                    src="/ourSolutions/approach.png"
                    alt="Our Approach Background"
                    fill
                    className="object-cover h-full"
                  />
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-8">
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
                    key={step.id}
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
            </div>
            </div>
              </div>
          </div>
       
      
      </section>
    </div>
  );
}