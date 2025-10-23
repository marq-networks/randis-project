"use client";

import Link from "next/link";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function PartnerCTA() {
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

    // Arrow hover animation
    const buttonElement = button.querySelector('a');
    if (buttonElement) {
      buttonElement.addEventListener('mouseenter', () => {
        gsap.to(arrow, {
          x: 4,
          duration: 0.3,
          ease: "power2.out"
        });
      });

      buttonElement.addEventListener('mouseleave', () => {
        gsap.to(arrow, {
          x: 0,
          duration: 0.3,
          ease: "power2.out"
        });
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  return (
    <div className="relative">
      {/* Enhanced top glow effect - positioned outside */}
      <div className="absolute left-1/2 transform -translate-x-1/2  w-[1200px] h-8 pointer-events-none z-0">
        <div className="absolute inset-0 bg-linear-to-b from-blue-500/30 via-blue-600/15 to-transparent blur-2xl"></div>
        <div className="absolute inset-0 bg-linear-to-b from-[#0075FF]/25 via-[#050A11]/12 to-transparent blur-xl"></div>
        <div className="absolute inset-0 bg-linear-to-b from-[#0075FF]/20 via-[#050A11]/10 to-transparent blur-lg"></div>
      </div>

      <section className="relative border-white/10 z-10">
        <div className="relative max-w-[1200px] mx-auto">
        <div 
          ref={containerRef}
          className=" px-6 py-16 text-center relative z-10"
        >
          <h2 
            ref={titleRef}
            className="text-2xl md:text-3xl font-bold"
          >
            Ready to Partner with a Proven Leader?
          </h2>
          <p 
            ref={descriptionRef}
            className="mt-3 text-[13px] text-white/70"
          >
            Download Our Capability Statement Today And Discover How Excelcus Can
            Support Your Mission With Expertise And Innovation!
          </p>

          <div 
            ref={buttonRef}
            className="mt-8 flex justify-center"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-500 transition-all duration-300 px-6 py-3 text-sm font-semibold shadow-lg shadow-blue-900/30 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30 group"
            >
              View Capability Statement
              <svg
                ref={arrowRef}
                className="w-4 h-4 transition-transform duration-300"
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
      <div className="absolute left-1/2 transform -translate-x-1/2  w-[1200px] h-8 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/30 via-blue-600/15 to-transparent blur-2xl"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-400/25 via-blue-500/12 to-transparent blur-xl"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-300/20 via-blue-400/10 to-transparent blur-lg"></div>
      </div>
    </div>
  );
}