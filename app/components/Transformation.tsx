"use client";

import Link from "next/link";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Transfromation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const title = titleRef.current;
    const description = descriptionRef.current;
    const button = buttonRef.current;
    const arrow = arrowRef.current;

    if (!container || !title || !description || !button || !arrow) return;

    // Set initial states
    gsap.set([title, description, button], {
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
    .to(description, {
      opacity: 1,
      x: 0,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.4")
    .to(button, {
      opacity: 1,
      x: 0,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.4");

    // Button hover animation
    const linkElement = button.querySelector('a');
    if (linkElement) {
      linkElement.addEventListener('mouseenter', () => {
        gsap.to(linkElement, { scale: 1.05, duration: 0.3, ease: "power2.out" });
        gsap.to(arrow, { x: 4, duration: 0.3, ease: "power2.out" });
      });

      linkElement.addEventListener('mouseleave', () => {
        gsap.to(linkElement, { scale: 1, duration: 0.3, ease: "power2.out" });
        gsap.to(arrow, { x: 0, duration: 0.3, ease: "power2.out" });
      });

      linkElement.addEventListener('mousedown', () => {
        gsap.to(linkElement, { scale: 0.95, duration: 0.1, ease: "power2.out" });
      });

      linkElement.addEventListener('mouseup', () => {
        gsap.to(linkElement, { scale: 1.05, duration: 0.1, ease: "power2.out" });
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="relative">
      {/* Enhanced top glow effect - positioned outside */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -top-16 w-[1200px] h-16 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/30 via-blue-600/15 to-transparent blur-2xl"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0075FF]/25 via-[#050A11]/12 to-transparent blur-xl"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0075FF]/20 via-[#050A11]/10 to-transparent blur-lg"></div>
      </div>

      <section className="relative  z-10">
        <div className="relative max-w-[1200px] mx-auto">
          <div 
            ref={containerRef}
            className="px-6 py-20 text-center relative z-10"
          >
            <h2 
              ref={titleRef}
              className="text-[42px] md:text-[48px] font-bold text-white leading-tight"
            >
              Complete <span className="text-[#0075FF]">transformation</span> in 8 weeks
            </h2>
            <p 
              ref={descriptionRef}
              className="mt-6 text-[18px] md:text-[20px] text-white/80 max-w-4xl mx-auto leading-relaxed"
            >
              You Don not Just Get A Product. You Get The Future You Imagined — Launched, Hosted, And Maintained With Strength.
            </p>

            <div 
              ref={buttonRef}
              className="mt-10 flex justify-center"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-[#0075FF] hover:bg-blue-500 transition-all duration-300 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-blue-900/30 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30 group"
              >
                Book Your 90-Day Strategy Call
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

      {/* Enhanced bottom glow effect - positioned outside */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-16 w-[1200px] h-12 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/30 via-blue-600/15 to-transparent blur-2xl"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-400/25 via-blue-500/12 to-transparent blur-xl"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-300/20 via-blue-400/10 to-transparent blur-lg"></div>
      </div>
    </div>
  );
}