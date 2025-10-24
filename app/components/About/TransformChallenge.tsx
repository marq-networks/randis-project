"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TransformChallenge = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const button = buttonRef.current;

    if (!container || !title || !subtitle || !button) return;

   
    gsap.set([title, subtitle, button], {
      opacity: 0,
      y: 50
    });

 
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
    .to(subtitle, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.4")
    .to(button, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.4");

    // Button hover animation
    const setupButtonHover = (buttonElement: HTMLButtonElement) => {
      const arrow = buttonElement.querySelector('svg');
      if (arrow) {
        buttonElement.addEventListener('mouseenter', () => {
          gsap.to(buttonElement, { scale: 1.05, duration: 0.3, ease: "power2.out" });
          gsap.to(arrow, { x: 4, duration: 0.3, ease: "power2.out" });
        });

        buttonElement.addEventListener('mouseleave', () => {
          gsap.to(buttonElement, { scale: 1, duration: 0.3, ease: "power2.out" });
          gsap.to(arrow, { x: 0, duration: 0.3, ease: "power2.out" });
        });

        buttonElement.addEventListener('mousedown', () => {
          gsap.to(buttonElement, { scale: 0.95, duration: 0.1, ease: "power2.out" });
        });

        buttonElement.addEventListener('mouseup', () => {
          gsap.to(buttonElement, { scale: 1.05, duration: 0.1, ease: "power2.out" });
        });
      }
    };

    setupButtonHover(button);

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="pt-20 bg-[#0a0e1a] overflow-hidden" ref={containerRef}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main heading */}
        <h2 
          ref={titleRef}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto"
        >
          Transform Your Challenge into Competitive Advantage
        </h2>
        
        {/* Subtitle */}
        <p 
          ref={subtitleRef}
          className="text-lg md:text-xl text-white/70 max-w-4xl mx-auto leading-relaxed mb-12"
        >
          Do not let slow development cycles hold you back. We build enterprise-grade solutions that create market advantage through rapid, precision execution.
        </p>
        
        {/* CTA Button */}
        <button 
          ref={buttonRef}
          className="group relative px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-300 flex items-center gap-2 mx-auto"
        >
          <span>Book Your 90-Day Strategy Call</span>
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
    </section>
  );
};

export default TransformChallenge;