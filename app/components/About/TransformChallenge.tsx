"use client";

import React, { useEffect, useRef } from 'react';
import PrimaryButton from "../Shared/PrimaryButton";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePathname } from 'next/navigation';

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
const pathname = usePathname();
  // const containerRef = useRef(null);
  const bgStyle =
    pathname === "/solution"
      ? {
          background:
            "linear-gradient(133.24deg, #0D1832 53.4%, rgba(19, 36, 73, 0) 104.73%)",
        }
      : {
   background:
            "linear-gradient(133.24deg, #0D1832 53.4%, rgba(19, 36, 73, 0) 104.73%)",
        };
  return (
    <section   className="pt-20 pb-10 overflow-hidden"
      ref={containerRef}
      style={bgStyle}>
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
        <PrimaryButton ref={buttonRef} label="Book Your 90-Day Strategy Call" />
      </div>
    </section>
  );
};

export default TransformChallenge;