"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function AboutUsHeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states - starting from far left edge of screen
      gsap.set([titleRef.current, descriptionRef.current, buttonRef.current], {
        opacity: 0,
        x: "-100vw" // Start from the very left edge of the viewport
      });

      // Create timeline for staggered animations
      const tl = gsap.timeline();
      
      tl.to(titleRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.8, // Slightly longer duration for the longer distance
        ease: "power2.out"
      })
      .to(descriptionRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.6") // Adjusted timing for better stagger effect
      .to(buttonRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.6");

    }, containerRef);

    return () => ctx.revert();
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
    <section className="relative overflow-hidden h-screen mx-auto">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/About Us/Hero Section/hero.png"
          alt="About Us Hero Background"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Soft overlays to improve legibility and match design */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_80%_-20%,rgba(37,99,235,0.25),transparent)]" />
      <div className="absolute bottom-0 left-0 right-0 h-32 -z-10 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute top-6 left-6 right-6 h-px bg-white/10" />

      <div className="max-w-[1200px] min-h-[72vh] md:min-h-[80vh] mx-auto px-6 flex items-center">
        <div 
          ref={containerRef}
          className="max-w-[680px]"
        >
          <h1 
            ref={titleRef}
            className="section-title text-white text-[42px] md:text-[48px] lg:text-[54px] font-bold leading-tight tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]"
          >
            Empowering Government Through Innovation
          </h1>
          <p 
            ref={descriptionRef}
            className="mt-4 text-white/80 text-[18px] md:text-[20px] max-w-[640px] leading-relaxed"
          >
            We are a dedicated team of experts committed to transforming public sector operations through cutting-edge technology solutions, ensuring transparency, efficiency, and accountability in government processes.
          </p>
          <div 
            ref={buttonRef}
            className="mt-8"
          >
            <Link 
              href="/contact"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/25 group"
              onMouseEnter={handleArrowHover}
              onMouseLeave={handleArrowLeave}
            >
              Learn More About Us
              <svg 
                ref={arrowRef}
                className="w-5 h-5 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}