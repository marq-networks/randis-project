"use client";
import Image from "next/image";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CapabilitiesGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const cards = cardsRef.current;

    if (!container || !title || !subtitle || !cards) return;

    // Set initial states - title and subtitle from very top of screen
    gsap.set([title, subtitle], {
      opacity: 0,
      y: "-100vh" // Start from top of viewport
    });

    // Set initial states for cards from different directions
    // Left card - from far left edge of screen
    gsap.set(cards.children[0], {
      opacity: 0,
      x: "-100vw", // Start from far left edge of viewport
      y: 0,
      force3D: true
    });

    // Center card - from bottom
    gsap.set(cards.children[1], {
      opacity: 0,
      x: 0,
      y: "100vh", // Start from bottom of viewport
      force3D: true
    });

    // Right card - from far right edge of screen
    gsap.set(cards.children[2], {
      opacity: 0,
      x: "100vw", // Start from far right edge of viewport
      y: 0,
      force3D: true
    });

    // Create timeline with optimized settings
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        once: true
      }
    });

    // Animate elements with slower, more elegant timing
    tl.to(title, {
      opacity: 1,
      y: 0,
      duration: 1.2, // Slower duration for more elegant animation
      ease: "power2.out"
    })
    .to(subtitle, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power2.out"
    }, "-=0.8")
    .to(cards.children[0], {
      opacity: 1,
      x: 0,
      y: 0,
      duration: 1.5, // Slower duration for viewport width distance
      ease: "power2.out",
      force3D: true
    }, "-=0.6")
    .to(cards.children[1], {
      opacity: 1,
      x: 0,
      y: 0,
      duration: 1.5, // Slower duration for viewport height distance
      ease: "power2.out",
      force3D: true
    }, "-=1.2")
    .to(cards.children[2], {
      opacity: 1,
      x: 0,
      y: 0,
      duration: 1.5, // Slower duration for viewport width distance
      ease: "power2.out",
      force3D: true
    }, "-=1.2");

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const capabilities = [
    {
      id: 1,
      title: "Information Technology Solution",
      description: "Design and implementation of scalable cloud solutions tailored to organizational needs.",
      image: "/homepage/our capabilities/image1.png",
    },
    {
      id: 2,
      title: "Facilites Operations & Maintenance",
      description: "Efficient management of facilities to ensure operational excellence and cost-effectiveness.",
      image: "/homepage/our capabilities/image2.png",
    },
    {
      id: 3,
      title: "Program Management",
      description: "Design and implementation of scalable cloud solutions tailored to organizational needs.",
      image: "/homepage/our capabilities/image3.png",
    },
   
  ];

  return (
    <section className="border-t border-white/10 overflow-hidden">
      <div 
        ref={containerRef}
        className="max-w-[1200px] mx-auto px-[10px] md:px-6 py-16 overflow-hidden"
      >
        <div className="text-center mb-12">
          <h2 
            ref={titleRef}
            className="text-[42px] md:text-[48px] font-bold text-white mb-4"
          >
            Our Capabilities
          </h2>
          <p 
            ref={subtitleRef}
            className="text-white/70 text-[18px]"
          >
            Transforming Business Visions Into Production-Grade Systems.
          </p>
        </div>

        <div 
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {capabilities.map((capability) => (
            <div
              key={capability.id}
              className="relative rounded-2xl p-6 overflow-hidden group hover:scale-105 transition-transform duration-300 border-l-2 border-blue-500/40 before:absolute before:top-0 before:left-0 before:w-[70%] before:h-0.5 before:bg-blue-500/40"
              style={{
                background: 'linear-gradient(135deg, #0D1832 0%, #132449 52%, #1A2B4A 100%)'
              }}
            >
              {/* Arrow Icon */}
              <div className="absolute top-6 right-6 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                <svg 
                  className="w-4 h-4 text-white" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M7 17L17 7M17 7H7M17 7V17" 
                  />
                </svg>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-white font-semibold text-[22px] mb-3 pr-12">
                  {capability.title}
                </h3>
                 
                <p className="text-white/80 text-sm mb-6 leading-relaxed">
                  {capability.description}
                </p>

          

                {/* Image */}
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image 
                    src={capability.image} 
                    alt={capability.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Background Pattern/Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}