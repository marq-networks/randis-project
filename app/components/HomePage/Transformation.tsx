"use client";


import PrimaryLinkButton from "../Shared/PrimaryLinkButton";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from "next/image";

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
   
   <div className="">
          <Image 
            src="/line.png" 
            alt="Enterprise Trust" 
            width={1200} 
            height={200} 
            className="w-full h-auto" 
          />
        </div>
      <section className="relative  z-10">
        <div className="relative max-w-[1200px] mx-auto">
          <div 
            ref={containerRef}
            className="px-6 pt-10 text-center relative z-10"
          >
            <h2 
              ref={titleRef}
              className="text-[30px] md:text-[48px] font-bold text-white leading-tight"
            >
              Complete <span className="text-[#0075FF]">transformation</span> in 8 weeks
            </h2>
            <p 
              ref={descriptionRef}
              className="mt-6 text-[18px] md:text-[20px] text-white/80 max-w-4xl mx-auto leading-relaxed"
            >
              You Don not Just Get A Product. You Get The Future You Imagined — Launched, Hosted, And Maintained With Strength.
            </p>

            <div ref={buttonRef} className="mt-10 flex justify-center">
              <PrimaryLinkButton href="/contact" arrowRef={arrowRef} />
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced bottom glow effect - positioned outside */}
       <div className="">
          <Image 
            src="/line.png" 
            alt="Enterprise Trust" 
            width={1200} 
            height={200} 
            className="w-full h-auto" 
          />
        </div>
    </div>
  );
}