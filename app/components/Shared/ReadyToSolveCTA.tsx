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
  const stepsRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const primaryButtonRef = useRef<HTMLButtonElement>(null);
  const secondaryButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const steps = stepsRef.current;
    const buttons = buttonsRef.current;
    const primaryButton = primaryButtonRef.current;
    const secondaryButton = secondaryButtonRef.current;

    if (!container || !title || !subtitle || !steps || !buttons || !primaryButton || !secondaryButton) return;

    // Set initial states
    gsap.set([title, subtitle], {
      opacity: 0,
      y: -50
    });

    gsap.set(steps, {
      opacity: 0,
      y: 50
    });

    gsap.set(buttons, {
      opacity: 0,
      y: 30
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
    .to(steps, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.4")
    .to(buttons, {
      opacity: 1,
      y: 0,
      duration: 0.8,
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

  const steps = [
    {
      number: "01",
      image: "/01.png",
      title: "Week 1-2",
      description: "Strategic Discovery & Architecture Alignment"
    },
    {
      number: "02",
      image: "/02.png",
      title: "Week 3-10", 
      description: "Rapid Development & Enterprise Integration"
    },
    {
      number: "03",
      image: "/03.png",
      title: "Week 11-12",
      description: "Production Deployment & Competitive Advantage"
    }
  ];

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
          className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
        >
          Ready to Solve Your Problem Fast?
        </h2>
        
        {/* Subtitle */}
        <p 
          ref={subtitleRef}
          className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-16"
        >
          Stop compromising between speed and quality. We deliver best-in-class solutions for rapid execution without sacrificing enterprise-grade results. Our 90-day competitive advantage here.
        </p>

        {/* Steps Section */}
        <div ref={stepsRef} className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step) => (
              <div 
                key={step.number} 
                className="text-center group relative"
              >
                <div className="relative mb-6 z-0 flex justify-center">
                  <div className="relative w-full h-full min-h-[140px] transform scale-[0.8] md:scale-100">
                    <Image
                      src={step.image}
                      alt={`Step ${step.number}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="text-center -mt-16 relative z-20">
                  <div className="font-bold text-[20px] text-white mb-2">{step.title}</div>
                  <div className="text-white/70 text-[16px] leading-relaxed">{step.description}</div>
                </div>
              </div>
            ))}
          </div>
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