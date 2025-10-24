"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const ReadyToSolveCTA = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const primaryButtonRef = useRef<HTMLButtonElement>(null);
  const secondaryButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const buttons = buttonsRef.current;
    const primaryButton = primaryButtonRef.current;
    const secondaryButton = secondaryButtonRef.current;

    if (!container || !title || !subtitle || !buttons || !primaryButton || !secondaryButton) return;

    // Set initial states
    gsap.set([title, subtitle, buttons], {
      opacity: 0,
      x: -100
    });

    // Create timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        once: true
      }
    });

    // Animate elements with stagger
    tl.to(title, {
      opacity: 1,
      x: 0,
      duration: 0.6,
      ease: "power2.out"
    })
    .to(subtitle, {
      opacity: 1,
      x: 0,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.4")
    .to(buttons, {
      opacity: 1,
      x: 0,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.4");

    // Button hover animations
    const setupButtonHover = (button: HTMLButtonElement) => {
      const arrow = button.querySelector('svg');
      if (arrow) {
        button.addEventListener('mouseenter', () => {
          gsap.to(button, { scale: 1.05, duration: 0.3, ease: "power2.out" });
          gsap.to(arrow, { x: 4, duration: 0.3, ease: "power2.out" });
        });

        button.addEventListener('mouseleave', () => {
          gsap.to(button, { scale: 1, duration: 0.3, ease: "power2.out" });
          gsap.to(arrow, { x: 0, duration: 0.3, ease: "power2.out" });
        });

        button.addEventListener('mousedown', () => {
          gsap.to(button, { scale: 0.95, duration: 0.1, ease: "power2.out" });
        });

        button.addEventListener('mouseup', () => {
          gsap.to(button, { scale: 1.05, duration: 0.1, ease: "power2.out" });
        });
      }
    };

    setupButtonHover(primaryButton);
    setupButtonHover(secondaryButton);

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  return (
    <section className="  mx-auto py-10">
     
        <div className="">
          <Image 
            src="/line.png" 
            alt="Enterprise Trust" 
            width={1200} 
            height={5} 
            className="w-full h-auto" 
          />
        </div>
     
    
      
      <div 
        ref={containerRef}
        className="relative  pt-20 mx-auto text-center"
      >
        {/* Main heading */}
        <h2 
          ref={titleRef}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
        >
          Ready to Solve Your Problem Fast?
        </h2>
        
        {/* Subtitle */}
        <p 
          ref={subtitleRef}
          className="text-lg md:text-xl text-slate-300  max-w-3xl mx-auto leading-relaxed"
        >
          Book your strategy session and discover how we can transform your business challenges into competitive advantage.
        </p>
        
        {/* CTA Buttons */}
        <div 
          ref={buttonsRef}
          className="flex mt-10 flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {/* Primary CTA Button */}
          <button 
            ref={primaryButtonRef}
            className="group relative px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-4xl transition-all duration-300 flex items-center gap-2"
          >
            <span>Request a demo</span>
            <svg 
              className="w-5 h-5 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          
          {/* Secondary CTA Button */}
          <button 
            ref={secondaryButtonRef}
            className="group relative px-8 py-4 bg-transparent border-2 border-slate-600 hover:border-slate-500 text-white font-semibold rounded-4xl transition-all duration-300 hover:bg-slate-800/50 flex items-center gap-2"
          >
            <span>Contact Us</span>
            <svg 
              className="w-5 h-5 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
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
};

export default ReadyToSolveCTA;