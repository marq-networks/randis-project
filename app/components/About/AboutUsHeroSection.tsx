"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function AboutUsHeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const breadcrumbRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

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
        duration: 0.8, // Slightly longer duration for the longer distance
        ease: "power2.out"
      }, "-=0.6")
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



  return (
    <section className="relative overflow-hidden h-[70vh] mx-auto">
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
              <span className="text-white">About Us</span>
            </nav>
          </div>
          <h1 
            ref={titleRef}
            className="section-title text-white text-[42px] md:text-[48px] lg:text-[54px] font-bold leading-tight tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]"
          >
            About Rutledge &<br />Associates
          </h1>
        
        
        </div>
      </div>
    </section>
  );
}