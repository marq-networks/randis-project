"use client";
import React, { useEffect, useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CompanyProfileAgain() {
  const containerRef = useRef<HTMLElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const container = containerRef.current;
    const profile = profileRef.current;
    const steps = stepsRef.current;

    if (!container || !profile || !steps) return;

    // Set initial states - profile from far left, steps from far right
    gsap.set(profile, {
      opacity: 0,
      x: "-100vw", // Start from far left edge of viewport
      force3D: true
    });

    gsap.set(steps, {
      opacity: 0,
      x: "100vw", // Start from far right edge of viewport
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

    // Animate elements with slower, more elegant timing
    tl.to(profile, {
      opacity: 1,
      x: 0,
      duration: 1.5, // Slower duration for viewport width distance
      ease: "power2.out"
    })
    .to(steps, {
      opacity: 1,
      x: 0,
      duration: 1.5, // Slower duration for viewport width distance
      ease: "power2.out"
    }, "-=1.2"); // Better overlap timing

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const approachSteps = [
    {
      title: "Assess & Strategize",
      description: "We Dive Deep Into Your Current Systems, Risks, And Goals.",
    },
    {
      title: "Prototype & Build",
      description: "We Deliver Working, Secure SaaS/PaaS Solutions Fast.",
    },
    {
      title: "Deploy & Integrate",
      description: "We Ensure Systems Work Seamlessly In Your Ecosystem.",
    },
    {
      title: "Train & Sustain",
      description: "We Empower Your Teams To Run Systems Independently.",
    },
  ];

  return (
    <section className="overflow-hidden" ref={containerRef}>
  <div className="max-w-[1200px] mx-auto px-[10px] md:px-6 md:pt-20 overflow-hidden">
        {/* <div className="">
          <Image
            src="/line.png"
            alt="Enterprise Trust"
            width={1200}
            height={200}
            className="w-full h-auto"
          />
        </div> */}

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* The Challenge */}
          <div className="space-y-6" ref={profileRef}>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Company Profile
            </h2>
            <p className="text-gray-300 text-base leading-relaxed">
              Transforming business visions into production-grade systems.
            </p>

            {/* Challenge Visual */}
            <div className="relative mt-8 w-full">
              {/* Decorative background elements */}
              <Image
                src="/homepage/our approach/our approach.png"
                alt="Challenge Visual"
                width={800}
                height={10}
                className="object-cover opacity-80 w-full h-full"
              />




            </div>
          </div>




          {/* Timeline Steps */}
          <div className="space-y-3" ref={stepsRef}>
            {approachSteps.map((step, index) => (
              <div key={index} className="flex gap-2 group">
                {/* Icon with connector */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="relative">
                    {/* Glow effect */}
                    <div className="absolute -inset-2 bg-blue-500/30 rounded-full blur-xl group-hover:bg-blue-400/40 transition-all duration-300"></div>
                    {/* Icon circle */}
                    <div className="relative w-12 h-12 rounded-full bg-blue-500/20 border-2 border-blue-400/40 flex items-center justify-center backdrop-blur-sm group-hover:bg-blue-500/30 group-hover:border-blue-400/60 transition-all duration-300">
                      <CheckCircle2 className="w-6 h-6 text-blue-300" />
                    </div>
                  </div>

                  {/* Connector line */}
                  {index !== approachSteps.length - 1 && (
                    <div className="w-0.5 h-16 bg-gradient-to-b from-blue-400/40 to-blue-400/10 mt-2"></div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-4">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}