"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function OurApproach() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([titleRef.current, contentRef.current, imageRef.current], {
        opacity: 0,
        y: 50
      });

      // Create timeline with ScrollTrigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      })
      .to(contentRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.4")
      .to(imageRef.current, {
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

  return (
    <section className="py-20 bg-gradient-to-b from-slate-800/30 to-slate-900/50 border-t border-white/10">
      <div 
        ref={containerRef}
        className="max-w-[1200px] mx-auto px-6"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 
              ref={titleRef}
              className="text-[42px] md:text-[48px] font-bold text-white mb-8"
            >
              Our Approach
            </h2>
            
            <div 
              ref={contentRef}
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
            ref={imageRef}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-900/30 to-slate-900/50 border border-blue-400/20 backdrop-blur-sm">
              {/* Futuristic Background with Digital Elements */}
              <div className="h-full relative bg-gradient-to-br from-blue-900/40 via-slate-800/60 to-slate-900/80 p-8">
                {/* Digital Globe/Network Visualization */}
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
      </div>
    </section>
  );
}