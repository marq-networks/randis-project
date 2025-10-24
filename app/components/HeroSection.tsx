"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function HeroSection() {
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
      {/* Background video */}
      <video
        className="absolute inset-0 -z-10 w-full h-full object-cover"
        src="/homepage/herosectionbg/herobg.mp4"
        autoPlay
        muted
        loop
        playsInline
        poster="/homepage/herosectionbg/hero.jpg"
      />
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
            Modernizing Compliance & Analytics for Government
          </h1>
          <p 
            ref={descriptionRef}
            className="mt-4 text-white/80 text-[18px] md:text-[20px] max-w-[640px] leading-relaxed"
          >
            We build mission-ready SaaS/PaaS systems that automate audits, enable performance insight, and empower public sector decision-making.
          </p>
          <div 
            ref={buttonRef}
            className="mt-8"
          >
            <Link 
              href="/contact" 
              className="group inline-flex items-center rounded-full btn-primary px-6 py-3 text-sm font-semibold shadow-lg shadow-blue-500/20 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30"
              onMouseEnter={handleArrowHover}
              onMouseLeave={handleArrowLeave}
            >
              Book Your 90-Day Strategy Call
              <svg 
                ref={arrowRef}
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="ml-2 h-4 w-4"
              >
                <path d="M13.172 12l-4.95 4.95 1.414 1.414L16 12l-6.364-6.364-1.414 1.414z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}