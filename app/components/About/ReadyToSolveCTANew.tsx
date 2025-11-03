"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

gsap.registerPlugin(ScrollTrigger);

const ReadyToSolveCTANew = () => {
  const pathname = usePathname();
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
      title: "Simplify",
      description: "Complex Workflows And Reduce Administrative Burden"
    },
    {
      number: "02",
      image: "/02.png",
      title: "Automate", 
      description: "Oversight, Compliance, And Reporting"
    },
    {
      number: "03",
      image: "/03.png",
      title: "Connect",
      description: "Teams And Data Across Departments"
    },
    {
      number: "04",
      image: "/04.png",
      title: "Empower",
      description: "Leaders With Real-Time Insight And Measurable Outcomes"
    }
  ];

  return (
    <section className="  ">
     
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
        className="relative pt-20 mx-auto text-center"
      >
        {/* Section Heading */}
        <h2 
          ref={titleRef}
          className="section-title text-white text-[32px] md:text-[42px] lg:text-[48px] font-bold leading-tight mb-10"
        >
          Our Focus
        </h2>
     
        
    

        {/* Steps Section */}
        <div ref={stepsRef} className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1200px] mx-auto px-6">
            {steps.map((step) => (
              <div 
                key={step.number} 
                className="text-center group relative"
              >
                <div className="relative z-0 flex justify-center">
                  <div className="relative w-full h-full min-h-[140px] md:min-h-[240px] transform scale-[0.6] md:scale-80]">
                    <Image
                      src={step.image}
                      alt={`Step ${step.number}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="text-center -mt-16 relative z-20">
                  <div className="font-bold text-[18px] md:text-[20px] text-white mb-2">{step.title}</div>
                  <div className="text-white/70 text-[14px] md:text-[16px] leading-relaxed">{step.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Trusted By CTA (About page only) */}
        {pathname === '/about' && (
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 rounded-[20.0304px] border border-white/10 bg-[linear-gradient(133.24deg,_#0D1832_53.4%,_rgba(19,36,73,0)_104.73%)] p-6 md:p-8">
              <div className="flex items-start gap-4 text-left">
                <div className="text-blue-400">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Z" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M16.5 9.5l-5 5-2-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-white text-[22px] md:text-[24px] font-semibold">Trusted By</h3>
                  <p className="text-white/70 mt-2 text-[14px] md:text-[16px] max-w-[700px]">
                    State and federal agencies, healthcare systems, and mission-driven enterprises committed to modernization with purpose.
                  </p>
                </div>
              </div>
              <a
                href="/contact"
                className="inline-flex items-center whitespace-nowrap rounded-full bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 font-medium transition-colors"
                aria-label="Book Your 90-Day Strategy Call"
              >
                Book Your 90-Day Strategy Call
                <svg className="ml-2 h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12h12M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        )}

    
      </div>
      
     {/* <div className="">
          <Image 
            src="/line.png" 
            alt="Enterprise Trust" 
            width={1200} 
            height={5} 
            className="w-full h-auto" 
          />
        </div> */}
    </section>
  );
};

export default ReadyToSolveCTANew;