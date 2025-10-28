"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CTAButton from "../Shared/CTAButton";

gsap.registerPlugin(ScrollTrigger);

export default function StrategicInfrastructure() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightImageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const leftContent = leftContentRef.current;
    const rightImage = rightImageRef.current;
    const title = titleRef.current;
    const button = buttonRef.current;

    if (!container || !leftContent || !rightImage || !title || !button) return;

    // Set initial states
    gsap.set(title, {
      opacity: 0,
      y: 50
    });

    gsap.set(leftContent.children, {
      opacity: 0,
      y: 30
    });

    gsap.set(rightImage, {
      opacity: 0,
      x: 100
    });

    gsap.set(button, {
      opacity: 0,
      y: 30
    });

    // Create timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        once: true
      }
    });

    tl.to(title, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    })
      .to(leftContent.children, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1
      }, "-=0.4")
      .to(rightImage, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.6")
      .to(button, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out"
      }, "-=0.4");

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleArrowHover = () => {
    gsap.to(arrowRef.current, {
      x: 4,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const handleArrowLeave = () => {
    gsap.to(arrowRef.current, {
      x: 0,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  return (
    <section className=" bg-[#0a0e1a]" ref={containerRef}>
     
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
            <div ref={rightImageRef} className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/solution/solution1.png"
                alt="Strategic Infrastructure Visualization"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
              {/* Overlay gradient for better integration */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a]/20 to-transparent" />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#3b82f6]/10 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#3b82f6]/5 rounded-full blur-2xl" />
          </div>
          <div ref={leftContentRef}>
            <h2
              ref={titleRef}
              className="text-[32px] md:text-[40px] font-bold text-white mb-6 leading-[1.2]"
            >
              Strategic Infrastructure for
              Competitive Advantage
            </h2>

            <div className="space-y-6 text-white/90 text-[18px] leading-relaxed">
              <p>
                At Rutledge & Associates, we understand that commercial organisations need more than just “off-the-shelf” fixes. We build infrastructure that becomes a competitive advantage — not a cost centre. From network architecture to cloud-enabled platforms, our approach is designed with tomorrow in mind: reliable, resilient, and ready.              </p>



              <p>
                When you engage our commercial team, you’re getting bespoke engineering that transforms your capability landscape and positions the business for growth and agility.              </p>
            </div>

            <div
              ref={buttonRef}
              className="mt-8"
            >
              <CTAButton
                href="/contact"
                className="group inline-flex items-center rounded-full bg-[#3b82f6] hover:bg-[#2563eb] text-white px-8 py-4 text-lg font-semibold shadow-lg shadow-blue-500/20 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30"
                // onMouseEnter={handleArrowHover}
                // onMouseLeave={handleArrowLeave}
              >
                Book Your 90-Day Strategy Call
                <svg
                  ref={arrowRef}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="ml-3 h-5 w-5"
                >
                  <path d="M13.172 12l-4.95 4.95 1.414 1.414L16 12l-6.364-6.364-1.414 1.414z" />
                </svg>
              </CTAButton>
            </div>
          </div>

        
        
        </div>
      </div>
     <div className="">
          <Image 
            src="/line.png" 
            alt="Enterprise Trust" 
            width={1200} 
            height={5} 
            className="w-full h-auto" 
          />
        </div>
    </section>
  );
}