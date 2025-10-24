"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function SolutionsHeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const breadcrumbRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states - starting from far left edge of screen
      gsap.set([breadcrumbRef.current, titleRef.current, descriptionRef.current, buttonRef.current], {
        opacity: 0,
        x: "-100vw" // Start from the very left edge of the viewport
      });

      // Create timeline for staggered animations
      const tl = gsap.timeline();
      
      tl.to(breadcrumbRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out"
      })
      .to(titleRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.6")
      .to(descriptionRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.6")
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
    <section className="relative overflow-hidden h-[70vh] mx-auto">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/solution/hero/hero.png"
          alt="Solutions Hero Background"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Soft overlays to improve legibility and match design */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_80%_-20%,rgba(37,99,235,0.25),transparent)]" />
      <div className="absolute bottom-0 left-0 right-0 h-32 -z-10 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute top-6 left-6 right-6 h-px bg-white/10" />

      <div className="max-w-[1200px] min-h-[72vh] md:min-h-[80vh] mx-auto px-6 flex items-center justify-center">
        <div 
          ref={containerRef}
          className="max-w-[680px] text-center flex justify-center flex-col items-center"
        >
          {/* Breadcrumb Navigation */}
          <div 
            ref={breadcrumbRef}
            className="mb-8"
          >
            <nav className="flex items-center space-x-2 text-white/80 text-sm">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span className="text-white/60">|</span>
              <span className="text-white">Solutions</span>
            </nav>
          </div>
          
          <h1 
            ref={titleRef}
            className="section-title text-white text-[42px] md:text-[48px] lg:text-[54px] font-bold leading-tight tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] mb-6"
          >
            Commercial Solutions
          </h1>
          
          <p 
            ref={descriptionRef}
            className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 max-w-[600px]"
          >
            Transform your business challenges into competitive advantages with our enterprise-grade solutions designed for rapid deployment and lasting impact.
          </p>
          
          <div 
            ref={buttonRef}
            className="flex justify-center"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-[#0075FF] hover:bg-blue-500 transition-all duration-300 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-blue-900/30 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30 group"
              onMouseEnter={handleArrowHover}
              onMouseLeave={handleArrowLeave}
            >
              Get Started Today
              <svg
                ref={arrowRef}
                className="w-5 h-5 transition-transform duration-300"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}