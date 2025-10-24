"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutUsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const textContent = textRef.current;
    const imageContent = imageRef.current;
    const title = titleRef.current;
    const button = buttonRef.current;

    if (!container || !textContent || !imageContent || !title || !button) return;

    // Set initial states
    gsap.set(title, {
      opacity: 0,
      y: 50
    });

    gsap.set(textContent.children, {
      opacity: 0,
      y: 30
    });

    gsap.set(imageContent, {
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
    .to(textContent.children, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.1
    }, "-=0.4")
    .to(imageContent, {
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

  return (
    <section className="border-t border-white/10 overflow-hidden">
      <div 
        ref={containerRef}
        className="max-w-[1200px] mx-auto px-6 py-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div ref={textRef}>
            <h2 
              ref={titleRef}
              className="text-[42px] md:text-[48px] font-bold text-white mb-8 leading-tight"
            >
              About Us
            </h2>
            
            <div className="space-y-6 text-white/80 text-[16px] md:text-[18px] leading-relaxed">
              <p className="text-[18px]">
When everyone else is still scheduling meetings about your challenge, we are already building the solution that makes your competition obsolete.              </p>
              
          <p>We do not just solve technology problems—we architect the unfair advantages that keep you three steps ahead of everyone still debating transformation strategies. Our approach transforms your biggest business challenges into competitive infrastructure in 90 days. While others compromise between speed and quality, we optimize for both—delivering enterprise-grade solutions that redefine how modern business systems should work.</p>
            </div>

            <div 
              ref={buttonRef}
              className="mt-8"
            >
              <Link 
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
              </Link>
            </div>
          </div>

          {/* Image Content */}
          <div ref={imageRef} className="relative">
            <div className="relative rounded-2xl overflow-hidden h-full">
              <Image
                src="/About Us/about us section/aboutus.png"
                alt="About Rutledge & Associates"
                width={600}
                height={800}
                className="w-full h-full object-cover"
              />
              
              
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}