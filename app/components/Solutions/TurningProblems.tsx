"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TurningProblems() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

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
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              {/* Blue accent line */}
              
              <h3 className="text-[32px] lg:text-[36px] font-bold text-white mb-6 leading-tight">
                Turning Problems into
                <span className="block text-[#3b82f6]">Strategic Solutions</span>
              </h3>
              
              <div className="space-y-4 text-white/90 text-[16px] leading-relaxed">
                <p>
                  Too Many Companies Treat Each Issue As A Band-Aid. We Take A Different Path. We Look At Commercial Challenges And Convert Them Into Strategic Opportunities.
                </p>  
                
                <p>
                  Whether It is Legacy System Inertia, Data Fragmentation, Or Competitive Disruption, Our Team Frames The Challenge Inside The Bigger Enterprise Vision, Then Maps A Route To Solution. The Result: Commercial Systems And Services That Do not Just Fix What is Broken — They Redefine What is Possible.
                </p>
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
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              {/* Blue accent line */}
              
              <h3 className="text-[32px] lg:text-[36px] font-bold text-white mb-6 leading-tight">
                Turning Problems into
                <span className="block text-[#3b82f6]">Strategic Solutions</span>
              </h3>
              
              <div className="space-y-4 text-white/90 text-[16px] leading-relaxed">
                <p>
                  Too Many Companies Treat Each Issue As A Band-Aid. We Take A Different Path. We Look At Commercial Challenges And Convert Them Into Strategic Opportunities.
                </p>
                
                <p>
                  Whether It is Legacy System Inertia, Data Fragmentation, Or Competitive Disruption, Our Team Frames The Challenge Inside The Bigger Enterprise Vision, Then Maps A Route To Solution. The Result: Commercial Systems And Services That Do not Just Fix What is Broken — They Redefine What is Possible.
                </p>
              </div>
            </div>

           
         
          </div>
        </div>
      </div>
    </section>
  );
}