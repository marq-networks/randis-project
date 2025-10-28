"use client";
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CompanionModel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const title = titleRef.current;
    const cards = cardsRef.current;
    const steps = stepsRef.current;

    if (!container || !title || !cards || !steps) return;

    // Get individual card elements
    const cardElements = cards.querySelectorAll('.track-card');
    const leftCard = cardElements[0];
    const rightCard = cardElements[1];

    // Set initial states
    gsap.set(title, {
      opacity: 0,
      y: "-100vh", // Start from top of viewport
      force3D: true
    });

    gsap.set(leftCard, {
      opacity: 0,
      x: "-100vw", // Start from far left edge
      force3D: true
    });

    gsap.set(rightCard, {
      opacity: 0,
      x: "100vw", // Start from far right edge
      force3D: true
    });

    gsap.set(steps, {
      opacity: 0,
      y: "100vh", // Start from bottom of viewport
      force3D: true
    });

    // Create timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        once: true
      }
    });

    // Animate elements with staggered timing
    tl.to(title, {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power2.out"
    })
    .to([leftCard, rightCard], {
      opacity: 1,
      x: 0,
      duration: 1.5,
      ease: "power2.out",
      stagger: 0.3
    }, "-=1.0")
    .to(steps, {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power2.out"
    }, "-=0.8");

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const tracks = [
    {
      title: "SaaS Track",
      subtitle: "Visionary Prototyping",
      features: [
        "Co-design future-state systems with stakeholders",
        "Validate ideas through interaction, not just discussion",
        "Build live clickable prototypes in 7-14 days"
      ],
      ctaLabel: "SaaS Track",
      href: "/saas-track"
    },
    {
      title: "PaaS Track", 
      subtitle: "Visionary Prototyping",
      features: [
        "Co-design future-state systems with stakeholders",
        "Validate ideas through interaction, not just discussion",
        "Build live clickable prototypes in 7-14 days"
      ],
      ctaLabel: "PaaS Track",
      href: "/paas-track"
    }
  ];

  const steps = [
    {
      number: "01",
      image: "/01.png",
      title: "Whiteboard",
      description: "Align Vision And Core Concepts."
    },
    {
      number: "02",
      image: "/02.png",
      title: "Prototype",
      description: "Test And Validate Interactively."
    },
    {
      number: "03",
      image: "/03.png",
      title: "Azure-Powered Platform",
      description: "Deploy Scalable Enterprise Solutions."
    }
  ];

  return (
    <section className="py-20 bg-[#0a0e1a] overflow-hidden" ref={containerRef}>

      <div className="max-w-[1200px] mx-auto px-[10px] sm:px-6 lg:px-8 overflow-hidden">
       
        {/* Header */}
        <div className="text-center mb-16" ref={titleRef}>
          <h2 className="text-[32px] md:text-[48px] font-bold text-white mb-6">
            Our Companion Model
          </h2>
        </div>

        {/* Tracks Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-5" ref={cardsRef}>
          {tracks.map((track, index) => (
            <div
              key={index}
              className="track-card relative overflow-hidden rounded-2xl bg-[#0f1729] border border-[#1e3a8a]/60 p-8 h-full flex flex-col group hover:border-[#3b82f6]/80 transition-all duration-500 hover:shadow-2xl hover:shadow-[#3b82f6]/10"
            >
              {/* Content */}
              <div className="relative z-10 flex flex-col h-full">
                {/* Header */}
                <div className="mb-8">
                  <h3 className="text-[22px] md:text-[24px] font-bold text-white mb-2">{track.subtitle}</h3>
                </div>

                {/* Features */}
                <div className="flex-1 space-y-5 mb-8">
                  {track.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-white flex items-center justify-center mt-0.5">
                        <svg className="w-4 h-4 text-[#0f1729]" viewBox="0 0 20 20" fill="currentColor">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-white/90 leading-relaxed text-[18px]">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom CTA bar */}
                <div className="mt-auto">
                  <div className="flex items-center justify-between ">
                    <span className="text-xl md:text-2xl font-bold text-white">{track.ctaLabel}</span>
                    <a
                      href={track.href}
                      className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[#3b82f6] hover:bg-[#2563eb] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#3b82f6]/40 group"
                      aria-label={`${track.ctaLabel} →`}
                    >
                      <svg className="w-7 h-7 text-white group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12h14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                        <path d="M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Steps */}
        <div className="" ref={stepsRef}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div 
                key={step.number} 
                className="text-center group relative"
              >
                <div className="relative mb-6 z-0 flex justify-center">
                  <div className="relative w-full h-fullmin-h-[140px] md:min-h-[240px] transform scale-[0.6] md:scale-80]">
                    <Image
                      src={step.image}
                      alt={`Step ${step.number}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="text-cente -mt-20 relative z-20">
                  <div className="font-bold text-[22px] text-white mb-2">{step.title}</div>
                  <div className="text-white/70 text-[18px] leading-relaxed">{step.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}